import json

INPUT_FILE = "poc_600_translated.json"
OUTPUT_FILE = "poc_600_filtered.json"

def has_translation_issue(entry):
    translation = entry.get("LLM_translation", {})

    # If it's not a dict (e.g., string, None), treat as invalid
    if not isinstance(translation, dict):
        return True

    # Check files_to_create_node
    files = translation.get("files_to_create_node", {})
    if not isinstance(files, dict):
        return True
    for content in files.values():
        if isinstance(content, str) and "could_not_be_translated" in content.lower():
            return True

    # Check commands_to_run_node
    node_cmds = translation.get("commands_to_run_node", {})
    if not isinstance(node_cmds, dict):
        return True
    for cmd in node_cmds.values():
        if isinstance(cmd, str) and "could_not_be_translated" in cmd.lower():
            return True

    # Check commands_to_run_deno
    bun_cmds = translation.get("commands_to_run_deno", {})
    if not isinstance(bun_cmds, dict):
        return True
    for cmd in bun_cmds.values():
        if isinstance(cmd, str) and "could_not_be_translated" in cmd.lower():
            return True

    return False


def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    filtered_data = []
    removed_count = 0

    for entry in data:
        if has_translation_issue(entry):
            removed_count += 1
        else:
            filtered_data.append(entry)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(filtered_data, f, indent=2)

    print(f"Filtered out {removed_count} entries")
    print(f"Remaining entries: {len(filtered_data)}")


if __name__ == "__main__":
    main()