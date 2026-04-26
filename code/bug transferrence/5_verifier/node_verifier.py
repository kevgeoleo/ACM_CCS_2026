import os
import json
import time
from openai import OpenAI, RateLimitError

# CONFIG
INPUT_FILE = "poc_300_runop.json"
OUTPUT_FILE = "poc_300_verified.json"
MODEL = "gpt-5.1"


total_prompt_tokens = 0
total_completion_tokens = 0
client = OpenAI()

# SYSTEM PROMPT
system_prompt = """
You are a technical verifier. Your task is to categorize the status of a bug reproduction.

DETERMINATION RULES:
1. If ISSUE=CLOSED and RUN_op matches the success criteria of expected_op -> "fixed"
2. If ISSUE=CLOSED and RUN_op demonstrates the bug described in actual_op -> "regression_bug"
3. If ISSUE=OPEN and RUN_op demonstrates the bug described in actual_op -> "expected"
4. If ISSUE=OPEN and RUN_op matches the success criteria of expected_op -> "no_prob_with_this_version"
5. If RUN_op is inconclusive, times out (-15), or matches neither behavior -> "bad_repro"

INPUTS:
- issue state (OPEN/CLOSED)
- actual_op (Description/log of the bug)
- expected_op (Description/log of the fix)
- RUN_op (The actual stdout, stderr, and return_code from the test)

ENVIRONMENT:
   - The execution environment has a default timeout of 180 seconds.
   - if execution stops after 180 seconds it means it did not crash but rather is intended timeout


OUTPUT CONSTRAINT:
Return ONLY one of the following strings: fixed, regression_bug, expected, no_prob_with_this_version, bad_repro. No explanation.
"""

def fetch_stream_with_retry(messages, model=MODEL, max_retries=5, base_delay=2):
    delay = base_delay
    for attempt in range(max_retries):
        try:
            return client.chat.completions.create(
                messages=messages,
                model=model,
                stream=True,
                stream_options={"include_usage": True},
                max_completion_tokens=200,
                temperature=0.1
            )
        except RateLimitError:
            print(f"Rate limit hit. Retry {attempt+1}/{max_retries} in {delay}s...")
            time.sleep(delay)
            delay *= 2
        except Exception as e:
            err_str = str(e)

            if "context_length_exceeded" in err_str:
                print("Skipping issue due to context length limit")
                return None  

            print("Fatal API error, writing partial results:", e)
            with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
                json.dump(issues, f, indent=2)
    print("Writing op file")
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(issues, f, indent=2)
    raise Exception("Max retries reached")

# LOAD INPUT
with open(INPUT_FILE, "r", encoding="utf-8") as f:
    issues = json.load(f)

counts = {
    "fixed": 0,
    "regression_bug": 0,
    "expected": 0,
    "no_prob_with_this_version": 0,
    "bad_repro": 0,
    "skipped":0,
    "token_limit":0
}

# VERIFY EACH ISSUE
for issue in issues:

    # Skip issues that were not run
    llm = issue.get("LLM_op", {})
    if "RUN_op" not in issue:
        counts["skipped"] = counts["skipped"]+1
        continue
    if "skip" in llm:
        counts["skipped"] = counts["skipped"]+1
        continue
    if "not_enough_info" in llm:
        counts["skipped"] = counts["skipped"]+1
        continue

    llm = issue.get("LLM_op", {})
    run = issue["RUN_op"]
    state = issue.get("state", "").lower()

    user_payload = {
        "state": state,
        "expected_op": llm.get("expected_op", ""),
        "actual_op": llm.get("actual_op", ""),
        "run_stdout": run["op"].get("stdout", ""),
        "run_stderr": run["op"].get("stderr", ""),
        "return_code": run["op"].get("return_code", "")
    }

    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": json.dumps(user_payload, indent=2)}
    ]

    print(f"\nVerifying issue #{issue['number']}...")

    stream = fetch_stream_with_retry(messages)
    if stream is None:
        issue["verifier_op"] = "token_limit"
        counts["token_limit"] += 1
        print(" skipped (context too large)")
        continue

    response = ""
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
            response += delta
            print(delta, end="", flush=True)

    response = response.strip()
    if not response:
        verdict = "bad_repro"
    else:
        verdict = response.split()[0].lower()

    # FALLBACK
    if verdict not in counts:
        verdict = "bad_repro"

    issue["verifier_op"] = verdict
    counts[verdict] += 1

    print(f" → {verdict}")

# SAVE OUTPUT
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(issues, f, indent=2)

# PRINT STATS
print("Verification Summary")
for k, v in counts.items():
    print(f"{k}: {v}")


print("Prompt tokens:", total_prompt_tokens)
print("Completion tokens:", total_completion_tokens)
INPUT_PRICE_PER_1M = 1.25
OUTPUT_PRICE_PER_1M = 10
input_cost = (total_prompt_tokens / 1000000) * INPUT_PRICE_PER_1M
output_cost = (total_completion_tokens / 1000000) * OUTPUT_PRICE_PER_1M

print("Estimated cost: $", input_cost + output_cost)

