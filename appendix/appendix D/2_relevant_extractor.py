# extract cases with relevant labels and exclude unwanted state reasons

import json
import os

cwd = os.getcwd()

labels_path = os.path.join(cwd, "relevant_labels.txt")
input_path = os.path.join(cwd, "1_issues.json")
output_path = os.path.join(cwd, "2_relevant.json")

# State reasons to exclude
excluded_state_reasons = {"DUPLICATE", "NOT_PLANNED"}

# Load relevant labels
with open(labels_path, "r", encoding="utf-8") as f:
    valid_labels = {
        line.strip().lower()
        for line in f
        if line.strip()
    }

# Load issues
with open(input_path, "r", encoding="utf-8") as f:
    issues = json.load(f)

# Filter issues
filtered_issues = []

for issue in issues:
    issue_labels = [
        label.lower()
        for label in issue.get("labels", [])
    ]

    state_reason = issue.get("state_reason")

    has_relevant_label = any(
        label in valid_labels
        for label in issue_labels
    )

    if (
        has_relevant_label
        and state_reason not in excluded_state_reasons
    ):
        filtered_issues.append(issue)

# Save filtered issues
with open(output_path, "w", encoding="utf-8") as f:
    json.dump(filtered_issues, f, indent=2, ensure_ascii=False)

print(f"✅ Loaded {len(issues)} issues")
print(f"✅ Saved {len(filtered_issues)} matching issues to {output_path}")