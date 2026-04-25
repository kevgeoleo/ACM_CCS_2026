# extract cases with relevant labels 

import json
import os 

cwd = os.getcwd()
labels = os.path.join(cwd,"relevant_labels.txt")
input_path = os.path.join(cwd,"json","1_initial","bun_bugs.json")
output_path = os.path.join(cwd,"json","2_relevant","bun_relevant_bugs.json")

# Load the labels from labels.txt into a set for fast lookup
with open(labels, "r", encoding="utf-8") as f:
    valid_labels = set(label.strip().lower() for label in f if label.strip())

# Load the GitHub issues JSON
with open(input_path, "r", encoding="utf-8") as f:
    issues = json.load(f)

# Filter issues where any of their labels match the list from labels.txt
filtered_issues = []
for issue in issues:
    issue_labels = [label.lower() for label in issue.get("labels", [])]
    if any(label in valid_labels for label in issue_labels):
        filtered_issues.append(issue)

# Save the filtered issues to a new JSON file
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(filtered_issues, f, indent=2, ensure_ascii=False)

print(f"✅ Saved {len(filtered_issues)} matching issues to {output_path}")
