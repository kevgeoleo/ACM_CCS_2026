import os
import json
import time
from openai import OpenAI, RateLimitError
import select

# PATHS
cwd = os.getcwd()
input_file = os.path.join(cwd, "random_300.json")
output_file = os.path.join(cwd, "output", "poc_300.json")
MODEL = "gpt-5.1"
client = OpenAI()


# TOKEN USAGE TRACKER 
total_prompt_tokens = 0
total_completion_tokens = 0


# LOAD ISSUES
with open(input_file, "r", encoding="utf-8") as f:
    issues = json.load(f)

results = []
issue_counter = 0
token_count = 0

# PROMPT
system_prompt = """
You are a PoC reproduction agent for Node. Your task is to extract reproduction steps from bug reports into a machine-readable JSON format.

### OUTPUT FORMAT:
Return ONLY a valid JSON object with this structure:
{
    files_to_create: {
        package.json: "code for file",
        file.js: "code for file",
        ..,
    },
    command_to_run:{
        1: "npm install ...",
        2: "node file.js",
        ..,
    },
    expected_op:<Explain in english what the reporter actually expected>,
    actual_op:<Explain in english what the reporter got>
}

### RULES:
1. MINIMALISM: Use the fewest commands and files possible. Keep everything in one folder.
2. NODE-CENTRIC:
     - Use 'node <filename>' to run code
     - 'npm install' for dependencies
     - Include minimal 'package.json' if any dependency is required
     - iojs is deprecated, give equivalent node command
     - I am using Node 24.13.1 LTE, use modern equivalent if deprecated functionality encountered
3. FILE EXTENSION STRICTNESS:
   - If a file contains CommonJS syntax (e.g. `const x = require(...)`, `module.exports`, `exports.foo`), it MUST use the `.cjs` extension.
   - If a file contains ES Module syntax (e.g. `import ... from`, `export`, `export default`), it MUST use the `.mjs` extension.
   - NEVER mix CJS and ESM in the same file.
   - Test files using `node:test` MUST use one of:
        - `.test.js`
        - `.test.cjs`
        - `.test.mjs`
     and must follow the correct module system rules above.
   - Do NOT use `.js` unless the module system is explicitly irrelevant.
   - File extensions must match the syntax exactly.
4. LINUX ENVIRONMENT: Assume a Linux container. Do not use Mac/Windows specific paths.
5. POSTGRES: Use db: 'mydb', user: 'myuser', pass: 'mypassword'. Join setup commands with '&&'. Always use 'export PGPASSWORD=mypassword && ...' for psql commands.
6. CLEANUP: If a port (e.g. 3000) is used, start with: "fuser -k 3000/tcp || true".
7. CODE FIXES: If a snippet is missing imports or variables, add them so the code is runnable.
8. KEY GENERATION: Do not hallucinate keys. Use 'openssl' commands in the command_to_run if certs are needed.
9. FOCUS ON THE BUG:
   - Only generate the code and commands that demonstrate the ACTUAL behavior (the bug)
   - Do not include "Variants" that work correctly.
10. FAIL FAST: If the issue reporter says "Doing X works, but doing Y crashes/hangs," your JSON should ONLY perform Y.
11. SERVER RULE:
    If a command starts a long-running process (HTTP server, watcher, daemon),
    it MUST be run in the background using "&" and followed by a request (curl, fetch, or test) that triggers the bug.
    Never place a blocking server command by itself.


### OUTPUT CONSTRAINT:
- DO NOT include markdown code blocks (```json).
- DO NOT include any conversational text.
- ONLY return the JSON object.

"""

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

    stream = fetch_stream_with_retry(messages)

    for chunk in stream:
        '''delta = chunk.choices[0].delta.content or ""
        response_text += delta
        final_chunk = chunk
        print(delta, end="", flush=True)'''
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

    try:
        llm_output = json.loads(response_text.strip())
    except json.JSONDecodeError:
        llm_output = {"raw_text": response_text.strip()}

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

    # Periodic save
    if issue_counter % 5 == 0:
        print("Periodic save")
        with open(output_file, "w", encoding="utf-8") as out:
            json.dump(results, out, indent=2, ensure_ascii=False)

    # Small delay between issues
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

print(f"\n\nDone. Output written to {output_file}")