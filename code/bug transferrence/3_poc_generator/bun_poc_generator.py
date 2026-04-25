import os
import json
import time
from openai import OpenAI, RateLimitError
import select

# === PATHS ===
cwd = os.getcwd()
input_file = os.path.join(cwd, "600_random.json")
output_file = os.path.join(cwd, "output", "poc_600.json")
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
ROLE: You are a Senior QA Engineer and Bun/Node.js Runtime Specialist. Your task is to analyze a GitHub Issue Body and generate a minimal, automated Proof of Concept (PoC) that demonstrates the reported bug.
INPUT: You will receive a GitHub Issue Body (specifically from the Bun repository).

MANDATORY CONSTRAINTS:
1. STRICT FILE EXTENSIONS:
        - If the code uses require(), module.exports, or exports, it MUST use the .cjs extension (JavaScript) or .cts (TypeScript).
        - If the code uses import or export, it MUST use the .mjs extension (JavaScript) or .mts (TypeScript).
        - Test files must use .test.js, .test.cjs, or .test.mjs following the rules above.
        - Avoid the generic .js extension unless the module system is irrelevant.
    - Use package.json instead of bun.json
2. ENVIRONMENT: Assume a Linux container. Do not use Windows/Mac specific paths.
3. COMMANDS:
    - If file contains npm packages, generate npm install command to install it
        - Generate bun commands for command_to_run.
        EXCEPTION: use npm install to install npm packages
        - However, ensure the underlying JavaScript/TypeScript code is as Node-compatible as possible.
4. CLEANUP: If a port (e.g., 3000) is used, the very first command in command_to_run must be: fuser -k <port>/tcp || true.
5. SECURITY/KEYS: Never hallucinate certificates/crypto keys. If the PoC requires SSL, use openssl commands within command_to_run to generate them.
6. FOCUS ON FAILURE:
        - Do not include "correct" variants or working examples.
        - If the reporter says "X works but Y fails," generate ONLY the code for Y.
        - The PoC should "Fail Fast"—it should trigger the error and exit or hang as described.
7. BACKGROUND PROCESSES:
        - If a command starts a server or long-running process, it MUST be run in the background using &.
        - It must be followed by a trigger (e.g., curl, fetch, or a second script) that executes the bug.
                Example: fuser -k 3000/tcp || true && deno run -A server.mjs & sleep 2 && curl http://localhost:3000.

OUTPUT FORMAT:
        Return ONLY a valid JSON object with this structure:
        {
                files_to_create: {
                        "filename.mjs": "string content",
                        "package.json": "string content"
                        ..,
                },
                command_to_run:{
                        "1": "fuser -k 3000/tcp || true",
                        "2": "bun run ...",
                        "3": "..."
                },
                expected_op:"Explanation of what should happen if the bug were fixed.",
                actual_op:"Explanation of the buggy behavior current observed."
        }

OUTPUT CONSTRAINTS:
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
            print("Error: ",e)
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
