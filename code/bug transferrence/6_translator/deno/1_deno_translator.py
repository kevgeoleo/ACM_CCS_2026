import json
import time
import os
from openai import OpenAI, RateLimitError

# Configuration 
MODEL = "gpt-5.1"
INPUT_FILE = "good_repro_600.json"
OUTPUT_FILE = "poc_600_translated.json"
INPUT_PRICE_PER_1M = 1.25
OUTPUT_PRICE_PER_1M = 10
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

SYSTEM_PROMPT = """You are an expert Software Engineer specializing in cross-runtime JavaScript development (Deno, Node.js, and Bun). Your task is to translate a JSON object containing Deno code and commands into a Node.js-compatible format that also runs seamlessly in Bun.

Instructions:
1. Code Translation: Replace Deno-specific APIs (e.g., Deno.listen, Deno.serveHttp) with standard Node.js equivalents (e.g., node:http, node:fs, node:worker_threads .etc.).
2. Web API Compatibility: Use standard Web APIs (Fetch, Request, Response, FormData) where possible.
3. Command Translation:
   - 'deno run <file>' -> 'node <file>' AND 'bun run <file>'
   - 'deno test' -> 'node --test <file>' AND 'bun test <file.test.(m/c)js>'
   - Remove Deno-specific flags like --allow-all or -A.
4. JSON Integrity: Ensure all translated code is correctly escaped to be a valid JSON string.
5. Failure Case: If translation is impossible, set content to "could_not_be_translated".

Output Constraints:
- Return ONLY the raw JSON object.
- DO NOT wrap the output in markdown code blocks.
- DO NOT include any conversational text.

Output Format:
{
  "files_to_create_node": { "filename.mjs": "content" },
  "commands_to_run_node": { "1": "command" },
  "commands_to_run_bun": { "1": "command" }
}"""

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
            delay *= 2
    raise Exception("Max retries reached due to rate limiting")

def run_translation_pipeline():
    # Load input data
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Recovery logic: check if output file already exists to resume
    if os.path.exists(OUTPUT_FILE):
        with open(OUTPUT_FILE, "r", encoding="utf-8") as f:
            results = json.load(f)
            processed_ids = {entry['number'] for entry in results}
    else:
        results = []
        processed_ids = set()

    total_prompt_tokens = 0
    total_completion_tokens = 0

    print(f"Starting translation for {len(data)} entries...")

    for i, entry in enumerate(data):
        # Skip already processed entries if resuming
        if entry['number'] in processed_ids:
            print('already processed')
            continue

        print(f"\n[{i+1}/{len(data)}] Translating ID: {entry['number']}...")

        # Extract LLM_op and prepare messages
        llm_op_input = json.dumps(entry.get("LLM_op", {}))
        messages = [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": llm_op_input}
        ]

        response_text = ""
        try:
            stream = fetch_stream_with_retry(messages)

            for chunk in stream:
                # Track usage from the final chunk (include_usage: True)
                if hasattr(chunk, "usage") and chunk.usage:
                    total_prompt_tokens += chunk.usage.prompt_tokens
                    total_completion_tokens += chunk.usage.completion_tokens
                    continue

                if not chunk.choices:
                    continue

                delta = chunk.choices[0].delta.content
                if delta:
                    response_text += delta
                    print(delta, end="", flush=True)

            # Parse LLM response and update entry
            try:
                # Clean potential markdown backticks just in case
                clean_json = response_text.strip().lstrip("```json").rstrip("```").strip()
                translation_json = json.loads(clean_json)
                entry["LLM_translation"] = translation_json
            except json.JSONDecodeError:
                print(f"\n[!] Failed to parse JSON for {entry['number']}. Setting failure message.")
                entry["LLM_translation"] = "could_not_be_translated"

            results.append(entry)
            processed_ids.add(entry['number'])

        except Exception as e:
            print(f"\n[ERROR] Fatal error on entry {entry['number']}: {e}")
            # Save progress before crashing
            with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
                json.dump(results, out, indent=2, ensure_ascii=False)
            break

        # Periodic Save every 10 iterations
        if (i + 1) % 10 == 0:
            print(f"\n--- Periodic Checkpoint: Saving to {OUTPUT_FILE} ---")
            with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
                json.dump(results, out, indent=2, ensure_ascii=False)

    # Final Save
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        json.dump(results, out, indent=2, ensure_ascii=False)

    # Final Cost Report
    input_cost = (total_prompt_tokens / 1000000) * INPUT_PRICE_PER_1M
    output_cost = (total_completion_tokens / 1000000) * OUTPUT_PRICE_PER_1M

    print("\n" + "="*40)
    print("TRANSLATION SUMMARY")
    print(f"Total Prompt Tokens:     {total_prompt_tokens}")
    print(f"Total Completion Tokens: {total_completion_tokens}")
    print(f"Total Estimated Cost:    ${(input_cost + output_cost):.4f}")
    print("="*40)

if __name__ == "__main__":
    run_translation_pipeline()