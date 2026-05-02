import json
import csv
from pathlib import Path
from collections import Counter

# Input log files
log_files = [
    "log_prototype-pollution.json",
]

# Classification keywords
vulnerable_signs = [
    "{ true, true }",
    "undefined\nyes\n",
    "undefined\nundefined\nyes\n",
    "yes_polluted",
    "this_is_vulnerable",
    "{ yes, yes }",
    "undefined\n{ yes, yes }"
]

safe_signs = ["this_is_OK", "not_polluted"]

def classify(entry):
    if not entry:
        return "ERR"

    stdout = entry.get("stdout", "") or ""
    stderr = entry.get("stderr", "") or ""
    timed_out = entry.get("timed_out", False)

    if any(sig in stdout for sig in vulnerable_signs):
        return "1"

    if any(sig in stdout for sig in safe_signs):
        return "0"

    if timed_out:
        return "TIMEOUT"
    if stderr.strip():
        return "ERR"

    if not stdout.strip():
        return "0"

    return "0"


def summarize(results):
    counter = Counter(results)
    return {
        "vulnerable (1)": counter["1"],
        "not vulnerable (0)": counter["0"],
        "timeout": counter["TIMEOUT"],
        "error": counter["ERR"]
    }


for log_file in log_files:
    path = Path(log_file)
    if not path.exists():
        print(f"Skipping missing file: {log_file}")
        continue

    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)

    rows = [["package", "node", "deno", "bun"]]

    node_results = []
    deno_results = []
    bun_results = []

    for package, runtimes in data.items():
        node_res = classify(runtimes.get("node"))
        deno_res = classify(runtimes.get("deno"))
        bun_res = classify(runtimes.get("bun"))

        rows.append([package, node_res, deno_res, bun_res])

        node_results.append(node_res)
        deno_results.append(deno_res)
        bun_results.append(bun_res)

    category = path.stem.replace("log_", "")
    output_csv = f"{category}.csv"

    # Summary
    print("Node:", summarize(node_results))
    print("Deno:", summarize(deno_results))
    print("Bun:", summarize(bun_results))
    
