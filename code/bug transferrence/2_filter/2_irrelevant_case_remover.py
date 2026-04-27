import json
import os 

cwd = os.getcwd()
label_path = os.path.join(cwd,"irrelevant_labels.txt")
INPUT_FILE = "node_updated.json"
OUTPUT_FILE = "node_updated2.json"

# Load the labels into a set for fast lookup
with open(label_path, "r", encoding="utf-8") as f:
    invalid_labels = set(label.strip().lower() for label in f if label.strip())


def is_bad_label(label_list):
    if not label_list:
        return False

    for label in label_list:
        label_lower = label.lower()

        for bad in invalid_labels:
            if bad in label_lower:
                return True

    return False


def filter_issues():

    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        issues = json.load(f)

    filtered = []

    for issue in issues:

        state = issue.get("state")
        state_reason = issue.get("state_reason")
        labels = issue.get("labels", [])
        body = issue.get("body", "")

        # Remove duplicate, unplanned closed issues
        if state == "CLOSED" and state_reason in ["DUPLICATE", "NOT_PLANNED"]:
            continue

        # Remove bad label cases
        if is_bad_label(labels):
            continue

        # Remove issues mentioning docker, s3, sveltekit
        if body and "docker" in body.lower():
            continue
        if body and "s3 bucket" in body.lower():
            continue
        if body and "sveltekit" in body.lower():
            continue

        filtered.append(issue)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(filtered, f, indent=2)

    print(f"Filtered dataset saved to {OUTPUT_FILE}")
    print(f"Original size: {len(issues)}")
    print(f"New size: {len(filtered)}")


if __name__ == "__main__":
    filter_issues()