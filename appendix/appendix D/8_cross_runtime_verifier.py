import json
from openai import OpenAI

INPUT_FILE = "good_repro1_cross_op.json"
OUTPUT_FILE = "good_repro1_cross_verified.json"

total_prompt_tokens = 0
total_completion_tokens = 0

client = OpenAI()

counts = {
    "node_problem": 0,
    "deno_problem": 0,
    "bun_problem": 0,
    "both_problem": 0,
    "cross_runtime_deno": 0,
    "cross_runtime_bun": 0,
    "cross_runtime_both":0,
    "timeout_bun": 0,
    "timeout_deno": 0,
    "differential_op": 0,
    "no_cross_runtime_diff": 0,
    "could_not_be_translated":0,
    'cross_runtime_issue': 0
}


SYSTEM_PROMPT = """
System Role:
You are an expert Software Quality Engineer specializing in JavaScript runtimes (llrt, Node.js, Deno and Bun). Your task is to analyze execution logs and classify the cross-runtime behavior of a reported bug.

Task:
Analyze the provided Expected_output, Actual_output, and the execution results from four runtimes. Assign exactly one classification label based on the specific logic below.

Classification Rules:
1. cross_runtime_issue: Assign this if the execution result from either Node (Run_op_Node), Deno (RUN_op_deno) or Bun (RUN_op_bun) matches the buggy behavior described in Actual_output. This indicates the bug is not isolated to llrt.
2. differential_op: Assign this if there is a semantically meaningful difference between the outputs of llrt, Node, Deno, and Bun.
        Note: Ignore trivial differences like process IDs, timestamps, or absolute file paths. Look for differences in error messages, stack trace logic, or return codes.
3. no_cross_runtime_difference: Assign this if none of the above conditions are met (i.e., all runtimes behave the same way, or the Deno/Bun runtimes match the Expected_output while Node matches the Actual_output).


Output Format:
        Return only one of the 3 labels
"""


def safe_get(op, key):
    return op.get(key, "") if isinstance(op, dict) else ""

def extract_fields(entry):
    return {
        "expected_op": entry.get("LLM_op", {}).get("expected_op", ""),
        "actual_op": entry.get("LLM_op", {}).get("actual_op", ""),
        "RUN_op_llrt": entry.get('RUN_op_llrt', {}).get('op', {}),
        "RUN_op_node": entry.get("RUN_op_node", {}).get("op", {}),
        "RUN_op_deno": entry.get("RUN_op_deno", {}).get("op", {}),
        "RUN_op_bun": entry.get("RUN_op_bun", {}).get("op", {}),
    }

def call_llm(payload):
    global total_prompt_tokens, total_completion_tokens

    stream = client.chat.completions.create(
        model="gpt-5.1",
        temperature=0,
        stream=True,
        stream_options={"include_usage": True},
        max_completion_tokens=200,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": json.dumps(payload, indent=2)}
        ]
    )

    response = ""

    for chunk in stream:
        # ✅ Token usage comes in a special chunk
        if hasattr(chunk, "usage") and chunk.usage:
            total_prompt_tokens += chunk.usage.prompt_tokens
            total_completion_tokens += chunk.usage.completion_tokens
            continue

        if not chunk.choices:
            continue

        delta = chunk.choices[0].delta.content
        if delta:
            response += delta

    return response.strip()
    #return response.choices[0].message.content.strip()

def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    new_data = []

    for entry in data:
        payload = extract_fields(entry)

        llrt_op = payload.get('RUN_op_llrt', {})
        node_op = payload.get("RUN_op_node", {})
        deno_op = payload.get("RUN_op_deno", {})
        bun_op = payload.get("RUN_op_bun", {})


        verifier_op = payload.get('verifier_op','')
        # ----------------------------
        # Manual equality check
        # ----------------------------
        if (node_op and deno_op and bun_op):
            if (
                    llrt_op['stdout'] == node_op["stdout"] == deno_op["stdout"] == bun_op["stdout"]
                and llrt_op['stderr'] == node_op["stderr"] == deno_op["stderr"] == bun_op["stderr"]
                and llrt_op['return_code'] == node_op["return_code"] == deno_op["return_code"] == bun_op["return_code"]
            ):
                # print(entry.get('number'))
                if verifier_op == 'regression_bug':
                    label = 'cross_runtime_issue'
                elif verifier_op == 'expected':
                    label = 'cross_runtime_issue'
                else:
                    label = "no_cross_runtime_difference"
            elif (("panicked" in deno_op['stderr'].lower() or "has crashed" in deno_op['stderr'].lower() or 'fatal error' in deno_op['stderr'].lower() or "this is a bug in deno" in deno_op['stderr'].lower()) and ("panic" in bun_op['stderr'].lower() or "has crashed" in bun_op['stderr'].lower() or 'fatal error' in bun_op['stderr'].lower() or "bug in bun" in bun_op['stderr'].lower()) and ('fatal error' in node_op['stderr'].lower() or 'segmentation fault' in node_op['stderr'].lower() or 'core dumped' in node_op['stderr'].lower())):
                label = "both_problem"
            elif ("panicked" in deno_op['stderr'].lower() or "has crashed" in deno_op['stderr'].lower() or 'fatal error' in deno_op['stderr'].lower() or "this is a bug in deno" in deno_op['stderr'].lower()):
                label = "deno_problem"
            elif ("panic" in bun_op['stderr'].lower() or "has crashed" in bun_op['stderr'].lower() or 'fatal error' in bun_op['stderr'].lower() or "bug in bun" in bun_op['stderr'].lower()):
                label = "bun_problem"
            elif ('segmentation fault' in node_op['stderr'].lower() or 'core dumped' in node_op['stderr'].lower() or 'fatal error' in node_op['stderr'].lower()):
                label = 'node_problem'
            else:
                try:
                    label = call_llm(payload)
                except Exception as e:
                    print(f"Error processing issue {entry.get('number')}: {e}")
                    label = "none"
        else:
            label = 'could_not_be_translated'
            entry["cross_runtime_verifier_op"] = label
            counts[label] = counts.get(label, 0) + 1
            new_data.append(entry)
            continue

        entry["cross_runtime_verifier_op"] = label

        counts[label] = counts.get(label, 0) + 1
        new_data.append(entry)

        print(f"Issue {entry.get('number')} → {label}")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(new_data, f, indent=2)

    print("\nSummary:")
    for key, value in counts.items():
        print(f"{key}: {value}")


    print("\nToken Usage:")
    print(f"Prompt tokens: {total_prompt_tokens}")
    print(f"Completion tokens: {total_completion_tokens}")

    INPUT_PRICE_PER_1M = 1.25
    OUTPUT_PRICE_PER_1M = 10

    input_cost = (total_prompt_tokens / 1_000_000) * INPUT_PRICE_PER_1M
    output_cost = (total_completion_tokens / 1_000_000) * OUTPUT_PRICE_PER_1M

    print(f"Estimated cost: ${input_cost + output_cost:.6f}")

    print("Verification complete.")
    print(f"Output written to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
