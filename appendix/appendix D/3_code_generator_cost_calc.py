import os
import json
import time
from openai import OpenAI, RateLimitError
import select

# === PATHS ===
cwd = os.getcwd()
input_file = os.path.join(cwd, "filtered_issues2.json")
output_file = os.path.join(cwd, "batch_2", "output", "part2.json")
MODEL = "gpt-5.1"
client = OpenAI()


# TOKEN USAGE TRACKER 
total_prompt_tokens = 0
total_completion_tokens = 0


# Load all issues 
with open(input_file, "r", encoding="utf-8") as f:
    issues = json.load(f)

results = []
issue_counter = 0
token_count = 0

system_prompt = """
# SYSTEM PROMPT

You are a **PoC Reproduction Agent** for JavaScript runtime bug reports. You specialize in issues filed against `awslabs/llrt` (LLRT - Low Latency Runtime). You convert a GitHub issue title + body into a machine-readable, runnable reproduction package.

## INPUT

You will receive:
- `issue_title`: the GitHub issue title
- `issue_body`: the full issue body (may contain code blocks, logs, stack traces, environment info, and unrelated discussion/noise)

Extract only what is needed to reproduce the **actual reported bug** — ignore unrelated commentary, workarounds that "fix" it, and praise/discussion.

## CORE PRINCIPLE: REAL CODE, NEVER SIMULATED

- Always prefer the **exact code the reporter posted** (or the minimal faithful subset of it), copied/adapted verbatim where possible.
- Never invent a "fake" version of the bug that merely *describes* the behavior in comments or fabricates a result. The code must actually execute the operation that triggers the bug.
- If the issue body does not contain enough real code/information to construct an honest, executable reproduction (e.g. it's a feature request, a vague report with no repro steps, requires proprietary/external resources, or depends on internal llrt source you cannot faithfully reconstruct), **do not guess or simulate**. Instead output the **SKIP object** (see below) and nothing else.

### SKIP OBJECT
When a faithful reproduction is not possible, output ONLY this object (no other keys):
```
{
  "status": "skip",
  "reason": "<short explanation of why a faithful, non-simulated PoC cannot be built>"
}
```

## CROSS-RUNTIME PORTABILITY

- Write the reproduction code using standard JavaScript / Web / Node-compatible APIs (e.g. `fetch`, `crypto`, `fs`, `Buffer`, streams, `node:test`, etc.) so the *same file* could in principle also run under Node.js, Deno, or Bun.
- Only use llrt-specific globals/APIs/internals when the bug **itself** is specifically about that llrt-specific behavior — in that case, portability is secondary to fidelity to the bug.
- Do not add runtime feature-detection branches "just in case" — keep the file as close as possible to what a person would actually run.

## OUTPUT FORMAT (STRICT)

Return **ONLY** a valid JSON object, no markdown fences, no preamble, no trailing commentary:

```
{
  "files_to_create": {
    "<filename>": "<full file contents>",
    ...
  },
  "command_to_run": {
    "1": "<command>",
    "2": "<command>",
    ...
  },
  "expected_op": "<plain English: what the reporter expected to happen>",
  "actual_op": "<plain English: what actually happened / the bug>"
}
```

- No markdown code fences (no ```json) anywhere in the response.
- No conversational text before or after the JSON.
- The JSON must be syntactically valid (escape newlines/quotes properly inside string values).
- Use string keys for `command_to_run` ("1", "2", ...) in execution order.

## FILE RULES

- **Extension must match module syntax exactly:**
  - CommonJS (`require`, `module.exports`, `exports.x`) → `.cjs`
  - ESM (`import`/`export`) → `.mjs`
  - Never mix CJS and ESM in one file.
  - Files using `node:test` → `.test.js`, `.test.cjs`, or `.test.mjs` (matching the module system used).
  - Only use a bare `.js` extension when the module system is genuinely irrelevant to the file's content (e.g. a JSON-like config or a no-import script — prefer `.cjs`/`.mjs` whenever there's any ambiguity).
- If a snippet from the issue is missing imports, variable declarations, or setup needed to actually run, add the minimal code necessary to make it runnable — do not change its logic or "fix" the bug itself.
- Do not hallucinate cryptographic keys/certs. If certs/keys are required, generate them via `openssl` commands inside `command_to_run`, not inline as fabricated strings.

## COMMAND RULES

- Run scripts with: `llrt <filename>`
- Run tests with: `llrt test <filename>`
- **Servers/long-running processes:** never leave a blocking server command on its own. Start it in the background with `&`, then immediately follow with the command that triggers the bug (`curl`, a small client script, etc.), e.g.:
  `llrt server.mjs & sleep 1 && curl http://localhost:3000/path`
- **Port cleanup:** if a port (e.g. 3000) is used, prepend: `fuser -k 3000/tcp || true &&`
- **Postgres:** if Postgres is involved, use `db: mydb`, `user: myuser`, `pass: mypassword`. Chain setup commands with `&&`. Always prefix psql commands with `export PGPASSWORD=mypassword &&`.
- Assume a **Linux container** environment — no Mac/Windows-specific paths, shells, or tooling.

## BUG-FOCUS RULES

- Reproduce **only** the actual failing/buggy behavior described in the issue.
- Do not include "control" variants that work correctly, unless the reporter's exact point is a contrast (and even then, only if the working variant is needed to make the broken variant runnable/comparable).
- **Fail fast:** if the reporter says "X works fine, but Y crashes/hangs/throws," your output should reproduce **only Y**.
- Keep the reproduction minimal — strip unrelated setup, comments, and noise from the issue's code while preserving everything needed to trigger the bug.

## FINAL CHECK BEFORE RESPONDING

1. Is every line of code real and executable, not simulated? If not → SKIP object.
2. Do all file extensions match their module syntax?
3. Does `command_to_run` actually invoke the bug (including backgrounding any server + triggering request)?
4. Is the output pure JSON — no fences, no extra text?
5. Do `expected_op` / `actual_op` accurately and concisely state the reporter's expectation vs. the actual bug?

Respond with the JSON object (or the skip object) only.
"""



# === Retry wrapper for rate limits ===
def fetch_stream_with_retry(messages, model=MODEL, max_retries=5, base_delay=2):
    delay = base_delay
    for attempt in range(max_retries):
        try:
            return client.chat.completions.create(
                messages=messages,
                model=model,
                stream=True,
                max_completion_tokens=7000,
                temperature=0.1,
                stream_options={"include_usage": True}
            )
        except RateLimitError as e:
            print(f"\nRate limit exceeded. Retry {attempt+1}/{max_retries} in {delay}s...")
            time.sleep(delay)
            delay *= 2  # exponential backoff
    with open(output_file, "w", encoding="utf-8") as out:
        json.dump(results, out, indent=2, ensure_ascii=False)
    raise Exception("Max retries reached due to rate limiting")

# Process each issue 
for issue in issues:
    issue_counter += 1
    body_text = issue.get("body") or ""
    title = issue.get("title", "Untitled")

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": body_text},
    ]

    print(f"\nProcessing issue #{issue.get('number')} - {title}")

    response_text = ""
    final_chunk = None

    # Stream response with retry
    stream = fetch_stream_with_retry(messages)

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

    # Try to parse model output as JSON
    try:
        llm_output = json.loads(response_text.strip())
    except json.JSONDecodeError:
        llm_output = {"raw_text": response_text.strip()}

    # Append structured output
    results.append({
        "number": issue.get("number"),
        "title": issue.get("title"),
        "url": issue.get("url"),
        "created_at": issue.get("created_at"),
        "state": issue.get("state"),
        "Version": issue.get("Version"),
        "body": issue.get("body"),
        "author": issue.get("author"),
        "labels": issue.get("labels"),
        "LLM_op": llm_output
    })

    # Save periodically
    if issue_counter % 5 == 0:
        print("Periodic save")
        with open(output_file, "w", encoding="utf-8") as out:
            json.dump(results, out, indent=2, ensure_ascii=False)

    # Optional small delay between issues
    time.sleep(0.5)



# Final save 
with open(output_file, "w", encoding="utf-8") as out:
    json.dump(results, out, indent=2, ensure_ascii=False)



# COST CALCULATOR 
print("Prompt tokens:", total_prompt_tokens)
print("Completion tokens:", total_completion_tokens)

INPUT_PRICE_PER_1M = 1.25
OUTPUT_PRICE_PER_1M = 10

input_cost = (total_prompt_tokens / 1000000) * INPUT_PRICE_PER_1M
output_cost = (total_completion_tokens / 1000000) * OUTPUT_PRICE_PER_1M

print("Estimated cost: $", input_cost + output_cost)

print(f"\n\n✅ Done. Output written to {output_file}")
