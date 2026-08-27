"""
Requires: pip install openai tiktoken
"""

import os
import json
import time
from collections import deque
from openai import OpenAI, RateLimitError

try:
    import tiktoken
    _ENC = None
    for _enc_name in ("o200k_base", "cl100k_base"):
        try:
            _ENC = tiktoken.get_encoding(_enc_name)
            break
        except Exception:
            continue
except ImportError:
    tiktoken = None
    _ENC = None


# ================================
# CONFIG
# ================================
BASE_DIR = "3_called_functions_CLAUDE"
OUTPUT_FILE = "4_code-injection_analysis.json"
MODEL = "gpt-5.1"  # Adjust model as needed (e.g., "gpt-5.1" or "gpt-4o-mini")

JS_EXTENSIONS = {".js", ".mjs", ".cjs"}

# Keep each request's *input* well under your account's per-minute token
# budget. Lower this if you're still hitting limits; raise it if you have
# a higher tier and want fewer, larger requests.
MAX_INPUT_TOKENS_PER_CHUNK = 60_000

# Cap the model's *output* so one verbose response can't eat the rest of
# your per-minute budget.
MAX_COMPLETION_TOKENS = 500

# Proactive pacing: these should be set a bit BELOW your actual account
# limits (check platform.openai.com/settings/organization/limits).
# The script sleeps *before* a request that would blow the budget,
# instead of waiting for a 429 and backing off after the fact.
TPM_BUDGET = 180_000       # tokens per minute, safety margin already applied below
RPM_BUDGET = 400           # requests per minute
SAFETY_MARGIN = 0.85       # use only 85% of the stated budget

# Small fixed delay between requests as a floor, regardless of budget math.
MIN_DELAY_BETWEEN_REQUESTS = 0.5

total_prompt_tokens = 0
total_completion_tokens = 0

# ================================
# API CLIENT
# ================================
client = OpenAI()

# ================================
# SYSTEM PROMPT
# ================================
SYSTEM_PROMPT = """You are a security expert specializing in JavaScript code analysis and Code Injection vulnerabilities.

Analyze the provided JavaScript code specifically for defenses or mitigations against Code Injection (e.g., via eval(), Function(), setTimeout/setInterval with string arguments, vm module misuse, child_process, or dynamic module loading).

Common mitigations include (but are not limited to):
- Avoiding dynamic code execution entirely (no `eval()`, `new Function()`, or string-based `setTimeout`/`setInterval`)
- Using safe parsing instead of eval (e.g., `JSON.parse` instead of `eval` for JSON data)
- Sandboxing or isolating dynamic execution (e.g., `vm2`, `isolated-vm`, Node's `vm` module with restricted context, Web Workers with limited scope)
- Strict input validation or allowlisting before passing data to execution-adjacent APIs (e.g., `child_process.exec`/`spawn`, `require()`, dynamic `import()`)
- Using parameterized/safe APIs instead of string concatenation for shell commands (e.g., `execFile` with an argument array instead of `exec` with a concatenated string)
- Content Security Policy (CSP) directives that restrict `unsafe-eval` or inline script execution in browser contexts
- Disabling or restricting Node's `--experimental-vm-modules`, `vm.runInContext`, or similar dynamic execution features
- Escaping or encoding user input before it reaches any code-generation or templating context (e.g., server-side template engines)

Instructions:
1. Examine the JavaScript code for any active Code Injection mitigations.
2. Output ONLY a valid JSON object. Do not include Markdown formatting, backticks, or introductory text.

Output Format Options:
- If mitigations are present:
{
  "mitigation": "Detailed explanation of the specific mitigations found and how they protect the code."
}

- If no mitigations are present:
{
  "mitigation": "no"
}
"""


# ================================
# TOKEN COUNTING
# ================================
def count_tokens(text):
    """Approximate token count. Falls back to a char/4 heuristic if
    tiktoken isn't installed."""
    if _ENC is not None:
        return len(_ENC.encode(text, disallowed_special=()))
    return max(1, len(text) // 4)


# ================================
# PROACTIVE RATE BUDGET
# ================================
class RateBudget:
    """Tracks requests/tokens used in the trailing 60s window and sleeps
    BEFORE a request that would exceed the budget, rather than reacting
    to a 429 after the fact."""

    def __init__(self, tpm_budget=TPM_BUDGET, rpm_budget=RPM_BUDGET, safety_margin=SAFETY_MARGIN):
        self.tpm_budget = tpm_budget * safety_margin
        self.rpm_budget = rpm_budget * safety_margin
        self.events = deque()  # (timestamp, tokens)

    def _prune(self, now):
        while self.events and now - self.events[0][0] > 60:
            self.events.popleft()

    def wait_if_needed(self, upcoming_tokens):
        now = time.time()
        self._prune(now)

        used_tokens = sum(t for _, t in self.events)
        used_requests = len(self.events)

        would_exceed = (
            used_requests + 1 > self.rpm_budget
            or used_tokens + upcoming_tokens > self.tpm_budget
        )

        if would_exceed and self.events:
            oldest_ts = self.events[0][0]
            sleep_time = max(0.0, 60 - (now - oldest_ts)) + 0.5
            print(f"  ⏳ Pacing to stay under rate limits: sleeping {sleep_time:.1f}s...")
            time.sleep(sleep_time)
            self._prune(time.time())

    def record(self, tokens):
        self.events.append((time.time(), tokens))


rate_budget = RateBudget()


# ================================
# RETRY WRAPPER
# ================================
def fetch_stream_with_retry(messages, model=MODEL, max_retries=5, base_delay=2):
    global total_prompt_tokens, total_completion_tokens
    delay = base_delay

    for attempt in range(max_retries):
        try:
            return client.chat.completions.create(
                messages=messages,
                model=model,
                stream=True,
                stream_options={"include_usage": True},
                max_completion_tokens=MAX_COMPLETION_TOKENS,
                temperature=0.1,
                response_format={"type": "json_object"},  # Forces clean JSON output
            )
        except RateLimitError:
            print(f"Rate limit hit. Retry {attempt + 1}/{max_retries} in {delay}s...")
            time.sleep(delay)
            delay *= 2
        except Exception as e:
            err_str = str(e)
            if "context_length_exceeded" in err_str:
                print("Skipping due to context length limit.")
                return None
            print("Fatal API error:", e)
            raise e

    raise Exception("Max retries reached")


# ================================
# FILE GATHERING (token-aware chunking)
# ================================
def collect_js_chunks_by_main_subfolder(base_dir, max_tokens_per_chunk=MAX_INPUT_TOKENS_PER_CHUNK):
    """
    Traverses subfolders and groups JS files under each top-level directory
    into chunks that stay under `max_tokens_per_chunk` input tokens each.
    This avoids sending one giant combined-file request per subfolder,
    which is what was blowing through the per-minute token budget.

    Returns: { main_subfolder: [chunk_str, chunk_str, ...] }
    """
    subfolder_chunks_map = {}

    if not os.path.exists(base_dir):
        print(f"Error: Directory '{base_dir}' does not exist.")
        return subfolder_chunks_map

    main_subfolders = [
        d for d in os.listdir(base_dir)
        if os.path.isdir(os.path.join(base_dir, d))
    ]

    for main_sub in main_subfolders:
        main_sub_path = os.path.join(base_dir, main_sub)
        file_entries = []  # (relative_path, content)

        for root, _, files in os.walk(main_sub_path):
            for file in files:
                if os.path.splitext(file)[1].lower() in JS_EXTENSIONS:
                    file_path = os.path.join(root, file)
                    try:
                        with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
                            content = f.read()
                        rel_path = os.path.relpath(file_path, main_sub_path)
                        file_entries.append((rel_path, content))
                    except Exception as e:
                        print(f"Could not read {file_path}: {e}")

        if not file_entries:
            continue

        chunks = []
        current_parts = []
        current_tokens = 0

        for rel_path, content in file_entries:
            block = f"// File: {rel_path}\n{content}"
            block_tokens = count_tokens(block)

            # Oversized single file: give it its own chunk rather than
            # dropping it or silently truncating.
            if block_tokens > max_tokens_per_chunk:
                if current_parts:
                    chunks.append("\n\n".join(current_parts))
                    current_parts, current_tokens = [], 0
                print(
                    f"  ⚠ {main_sub}/{rel_path} is {block_tokens} tokens on its own "
                    f"(> {max_tokens_per_chunk}); sending as an isolated chunk."
                )
                chunks.append(block)
                continue

            if current_tokens + block_tokens > max_tokens_per_chunk and current_parts:
                chunks.append("\n\n".join(current_parts))
                current_parts, current_tokens = [], 0

            current_parts.append(block)
            current_tokens += block_tokens

        if current_parts:
            chunks.append("\n\n".join(current_parts))

        subfolder_chunks_map[main_sub] = chunks

    return subfolder_chunks_map


# ================================
# SINGLE CHUNK ANALYSIS
# ================================
def analyze_chunk(code_chunk):
    """Sends one chunk to the model, returns the parsed (or raw-text) result."""
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {"role": "user", "content": f"JavaScript Code to Analyze:\n\n{code_chunk}"},
    ]

    upcoming_tokens = count_tokens(SYSTEM_PROMPT) + count_tokens(code_chunk) + MAX_COMPLETION_TOKENS
    rate_budget.wait_if_needed(upcoming_tokens)

    stream = fetch_stream_with_retry(messages)

    if stream is None:
        return {"mitigation": "skipped (context length exceeded)"}

    response_text = ""
    prompt_toks_this_call = 0
    completion_toks_this_call = 0

    for chunk in stream:
        if hasattr(chunk, "usage") and chunk.usage:
            prompt_toks_this_call = chunk.usage.prompt_tokens
            completion_toks_this_call = chunk.usage.completion_tokens
            continue

        if not chunk.choices:
            continue

        delta = chunk.choices[0].delta.content
        if delta:
            response_text += delta
            print(delta, end="", flush=True)

    print()  # newline after stream

    global total_prompt_tokens, total_completion_tokens
    total_prompt_tokens += prompt_toks_this_call
    total_completion_tokens += completion_toks_this_call
    rate_budget.record(prompt_toks_this_call + completion_toks_this_call)

    time.sleep(MIN_DELAY_BETWEEN_REQUESTS)

    try:
        return json.loads(response_text.strip())
    except json.JSONDecodeError:
        return {"mitigation": response_text.strip()}


# ================================
# MAIN EXECUTION
# ================================
def main():
    print(f"Scanning directory: '{BASE_DIR}'...")
    subfolder_chunks = collect_js_chunks_by_main_subfolder(BASE_DIR)

    if not subfolder_chunks:
        print("No JavaScript files found or directory is empty.")
        return

    results = {}

    for main_subfolder, chunks in subfolder_chunks.items():
        print(f"\nAnalyzing main subfolder: {main_subfolder} ({len(chunks)} chunk(s))...")

        chunk_results = []
        for i, chunk in enumerate(chunks, start=1):
            print(f"  → Chunk {i}/{len(chunks)} (~{count_tokens(chunk)} tokens)")
            result = analyze_chunk(chunk)
            chunk_results.append({"chunk_index": i, "result": result})

        # Aggregate: if ANY chunk found a mitigation, surface it; otherwise "no".
        mitigation_texts = [
            f"[chunk {c['chunk_index']}] {c['result'].get('mitigation')}"
            for c in chunk_results
            if isinstance(c["result"], dict) and c["result"].get("mitigation") not in (None, "no")
        ]

        results[main_subfolder] = {
            "mitigation": " | ".join(mitigation_texts) if mitigation_texts else "no",
            "chunks_analyzed": len(chunks),
            "chunk_details": chunk_results,
        }

        # Checkpoint save after every processed subfolder
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            json.dump(results, f, indent=2)

    # Final Cost & Token Summary
    print("\n==============================")
    print("Analysis Complete")
    print("==============================")
    print(f"Total Prompt Tokens:     {total_prompt_tokens}")
    print(f"Total Completion Tokens: {total_completion_tokens}")

    input_cost = (total_prompt_tokens / 1_000_000) * 2.50
    output_cost = (total_completion_tokens / 1_000_000) * 10.00
    print(f"Estimated Cost: ${input_cost + output_cost:.4f}")
    print(f"Saved results to → {OUTPUT_FILE}")


if __name__ == "__main__":
    main()