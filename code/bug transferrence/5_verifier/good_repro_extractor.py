# Extract good reproductions from verifier output into new file 

import json
from pathlib import Path

# Input and output file paths
input_file = Path("poc_300_verified.json")
output_file = Path("good_repro_300.json")

# Load the JSON data
with input_file.open("r", encoding="utf-8") as f:
    data = json.load(f)

# Filter entries:
# 1. verifier_op != "bad_repro"
# 2. LLM_op does NOT contain "not_enough_info"
filtered_data = [
    entry for entry in data
    if entry.get("verifier_op") not in ("bad_repro","token_limit")
    and not (isinstance(entry.get("LLM_op"), dict) and "not_enough_info" in entry.get("LLM_op"))
]

# Save filtered entries to new JSON
with output_file.open("w", encoding="utf-8") as f:
    json.dump(filtered_data, f, indent=2)

print(f"Saved {len(filtered_data)} entries to {output_file}")