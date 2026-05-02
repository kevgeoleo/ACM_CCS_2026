import json
import os
from pathlib import Path
from openai import OpenAI

# CONFIG
INPUT_FILE = "deno_updated2.json"
OUTPUT_FILE = "filtered_issues.json"
BATCH_SAVE_EVERY = 50  # save output every 50 issues
LLM_MODEL = "gpt-5.1"
MAX_TOKENS = 50
TEMPERATURE = 0.1

# Prices per 1M tokens
INPUT_PRICE_PER_1M = 1.25
OUTPUT_PRICE_PER_1M = 10

# SETUP CLIENT
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# HELPER FUNCTIONS
def create_prompt(title: str, body: str) -> str:
    return f"""
You are an expert in JavaScript runtimes (Deno, Node.js, Bun) and bug reproduction.

You will be given a GitHub issue title and body.

Your task is to determine whether the issue satisfies BOTH of the following conditions:

--------------------------------------------------
(1) REPRODUCIBILITY FOR POC GENERATION
--------------------------------------------------
The issue contains enough concrete technical detail for an automated system (LLM-based PoC generator) to reproduce the problem.

This includes signals such as:
- Clear steps to reproduce, OR
- Code snippets that imply execution flow, OR
- CLI commands / configuration (e.g., deno run flags, npm usage), OR
- Stack traces or error messages that reveal execution context

Reject if:
- The issue is vague (“it crashes sometimes”)
- Missing code or steps entirely
- Requires private/unavailable repo without sufficient detail
- Heavily dependent on unspecified environment

--------------------------------------------------
(2) CROSS-RUNTIME APPLICABILITY
--------------------------------------------------
The issue can reasonably be translated or adapted to other JavaScript runtimes (Node.js, Bun), meaning:

Accept if:
- Uses standard JavaScript / TypeScript
- Involves npm ecosystem, node compatibility layer, or common tools (vite, webpack, etc.)
- Relates to runtime behavior (event loop, inspector, modules, etc.) that exists in other runtimes

Reject if:
- It is Deno-specific only (e.g., Deno KV, Deno Deploy, Deno-only APIs)
- Relies on Deno internals with no analogue elsewhere
- Depends on Deno CLI-only features with no equivalent
- Uses deprecated functionality like deno vendor, Deno.serveHttp()
- Issue uses deno repl, deno cache, deno bundle
- Reproduction needs real user credentials

--------------------------------------------------
OUTPUT FORMAT (STRICT)
--------------------------------------------------
Return ONLY a JSON object:

{{
  "result": true | false
}}

- result = true ONLY if BOTH conditions are satisfied
- otherwise result = false

--------------------------------------------------
INPUT
--------------------------------------------------
Title:
{title}

Body:
{body}
"""

def call_llm(prompt: str):
    total_prompt_tokens = 0
    total_completion_tokens = 0
    response_text = ""

    stream = client.chat.completions.create(
        model=LLM_MODEL,
        stream=True,
        messages=[{"role": "user", "content": prompt}],
        max_completion_tokens=MAX_TOKENS,
        temperature=TEMPERATURE,
        stream_options={"include_usage": True}
    )

    final_chunk = None
    for chunk in stream:

        if hasattr(chunk, "usage") and chunk.usage:
            total_prompt_tokens += chunk.usage.prompt_tokens
            total_completion_tokens += chunk.usage.completion_tokens
            continue

        # Skip chunks without choices
        if not chunk.choices:
            continue


        delta = chunk.choices[0].delta.content
        if delta:
            response_text += delta
            print(delta, end="", flush=True)

    # Parse JSON output
    try:
        result_json = json.loads(response_text.strip())
        result_flag = result_json.get("result", False)
    except Exception:
        result_flag = False

    return result_flag, total_prompt_tokens, total_completion_tokens

# MAIN PROCESS
def main():
    input_path = Path(INPUT_FILE)
    output_path = Path(OUTPUT_FILE)

    # Load input
    with open(input_path, "r", encoding="utf-8") as f:
        issues = json.load(f)

    filtered_issues = []
    total_prompt_tokens = 0
    total_completion_tokens = 0

    for idx, issue in enumerate(issues, 1):
        title = issue.get("title", "")
        body = issue.get("body", "")

        prompt = create_prompt(title, body)
        result_flag, prompt_tokens, completion_tokens = call_llm(prompt)

        total_prompt_tokens += prompt_tokens
        total_completion_tokens += completion_tokens

        if result_flag:
            filtered_issues.append(issue)

        # Periodic save
        if idx % BATCH_SAVE_EVERY == 0:
            with open(output_path, "w", encoding="utf-8") as f:
                json.dump(filtered_issues, f, indent=2)
            print(f"[Saved {len(filtered_issues)} issues after processing {idx}]")

    # Final save
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(filtered_issues, f, indent=2)
    print(f"[Final save: {len(filtered_issues)} issues]")

    # Cost calculation
    input_cost = (total_prompt_tokens / 1_000_000) * INPUT_PRICE_PER_1M
    output_cost = (total_completion_tokens / 1_000_000) * OUTPUT_PRICE_PER_1M

    print("\n=== COST SUMMARY ===")
    print("Prompt tokens:", total_prompt_tokens)
    print("Completion tokens:", total_completion_tokens)
    print(f"Estimated cost: ${input_cost + output_cost:.6f}")

if __name__ == "__main__":
    main()