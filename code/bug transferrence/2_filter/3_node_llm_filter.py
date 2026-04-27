import json
import os
from pathlib import Path
from openai import OpenAI

# CONFIG
INPUT_FILE = "node_updated2.json"
OUTPUT_FILE = "filtered_issues.json"
BATCH_SAVE_EVERY = 50  # save output every 50 issues
LLM_MODEL = "gpt-5.1"
MAX_TOKENS = 150
TEMPERATURE = 0.0

# Prices per 1M tokens
INPUT_PRICE_PER_1M = 1.25
OUTPUT_PRICE_PER_1M = 10

# SETUP CLIENT
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# HELPER FUNCTIONS
def create_prompt(title: str, body: str) -> str:
    return f"""
System Role:
You are a Senior Systems Software Engineer specializing in JavaScript runtimes (Node.js, Bun, Deno) and cross-platform compatibility.

Prompt:
Analyze the following GitHub Issue (Title and Body) to determine if it meets two specific technical criteria.

Criteria:
1. Reproducibility for PoC: Does the issue contain specific code snippets, CLI commands, or clear step-by-step instructions that would allow an LLM to generate a standalone, runnable script to reproduce the behavior?

2. Cross-Runtime Relevance: Is the core logic of the issue applicable/reproducible in other runtimes like Bun or Deno?

Note: The issue should concern general runtime behavior, such as environment variable handling, CLI flag parsing, snapshotting, or standard API behavior.


Input:
Title: {title}
Body: {body}

Output Format:
Return only the boolean value (True or False). Do not provide explanations unless requested.
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
        clean_response = response_text.strip().lower()
        result_flag = True if "true" in clean_response else False
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