import os
import json

ROOT_DIR = "temp_deno"
MAP_FILE = "map.json"
VALID_EXTENSIONS = (".mjs")

updated_files = 0
skipped_files = 0
scanned_files = 0


def load_map():
    with open(MAP_FILE, "r", encoding="utf-8") as f:
        return json.load(f)


def process_file(filepath, replacement_map):
    global updated_files, skipped_files, scanned_files

    scanned_files += 1

    try:
        with open(filepath, "rb") as f:
            raw = f.read()
    except Exception as e:
        print(f"Skipping (read error): {filepath} -> {e}")
        skipped_files += 1
        return

    try:
        content = raw.decode("utf-8")
    except UnicodeDecodeError:
        print(f"Skipping (not UTF-8): {filepath}")
        skipped_files += 1
        return

    original_content = content

    # Perform replacements
    for old, new in replacement_map.items():
        if old in content:
            content = content.replace(old, new)

    # Write back only if modified
    if content != original_content:
        try:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
            print(f"Updated: {filepath}")
            updated_files += 1
        except Exception as e:
            print(f"Skipping (write error): {filepath} -> {e}")
            skipped_files += 1


def walk_directory():
    replacement_map = load_map()

    for root, dirs, files in os.walk(ROOT_DIR):
        # Skip node_modules
        if "node_modules" in dirs:
            dirs.remove("node_modules")
        if "node" in dirs:
            dirs.remove("node")

        for file in files:
            if file.endswith(VALID_EXTENSIONS):
                filepath = os.path.join(root, file)
                process_file(filepath, replacement_map)


if __name__ == "__main__":
    walk_directory()

    print("\nSUMMARY: ")
    print(f"Scanned files : {scanned_files}")
    print(f"Updated files : {updated_files}")
    print(f"Skipped files : {skipped_files}")
    print("Done.")