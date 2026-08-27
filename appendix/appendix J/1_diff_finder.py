import json

OLD_FILE = "redos/log_redos_old.json"
NEW_FILE = "redos/log_redos_new.json"
OUTPUT_FILE = "1_diff.json"

with open(OLD_FILE, "r", encoding="utf-8") as f:
    old_data = json.load(f)

with open(NEW_FILE, "r", encoding="utf-8") as f:
    new_data = json.load(f)

changed_entries = {}

for package, new_entry in new_data.items():

    # Must also exist in the old file
    if package not in old_data:
        continue

    # ---------------------------------------------------------
    # Case 1:
    # Old: undefined\nyes\n
    # New: undefined\nundefined\n
    # ---------------------------------------------------------
    new_stdout = new_entry.get("node", {}).get("stdout", "")
    old_stdout = old_data[package].get("node", {}).get("stdout", "")

    case_1 = (
        new_stdout == "undefined\nundefined\n"
        and old_stdout == "undefined\nyes\n"
    )

    # ---------------------------------------------------------
    # Case 2:
    # Old contains: { true, true }\n
    # New contains: { false, true }\n
    #
    # Check at least one runtime.
    # ---------------------------------------------------------
    case_2 = False

    for runtime in ["node", "deno", "bun"]:
        old_stdout = old_data[package].get(runtime, {}).get("stdout", "")
        new_stdout = new_entry.get(runtime, {}).get("stdout", "")

        if (
            "{ true, true }\n" in old_stdout
            and "{ false, true }\n" in new_stdout
        ):
            case_2 = True
            break

    # ---------------------------------------------------------
    # Case 3:
    # Old contains: this_is_vulnerable
    # New contains: this_is_OK
    #
    # Check at least one runtime.
    # ---------------------------------------------------------
    case_3 = False

    for runtime in ["node", "deno", "bun"]:
        old_stdout = old_data[package].get(runtime, {}).get("stdout", "")
        new_stdout = new_entry.get(runtime, {}).get("stdout", "")

        if (
            "this_is_vulnerable" in old_stdout
            and "this_is_OK" in new_stdout
        ):
            case_3 = True
            break

    # ---------------------------------------------------------
    # Save entry if any case matches
    # ---------------------------------------------------------
    if case_1 or case_2 or case_3:
        changed_entries[package] = {
            "old": old_data[package],
            "new": new_entry
        }

with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(changed_entries, f, indent=2, ensure_ascii=False)

print(f"Entries in old file: {len(old_data)}")
print(f"Entries in new file: {len(new_data)}")
print(f"Matching changed entries: {len(changed_entries)}")
print(f"Saved to: {OUTPUT_FILE}")