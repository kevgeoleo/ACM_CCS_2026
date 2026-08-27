import json
import shutil
from pathlib import Path

JSON_FILE = "good_entries_proto_pollution.json"
NODE_MODULES = Path("prototype-pollution/node_modules")
EXTRACTED = Path("extracted")

EXTRACTED.mkdir(parents=True, exist_ok=True)

with open(JSON_FILE, "r", encoding="utf-8") as f:
    data = json.load(f)

copied = 0
missing = 0

for entry_name in data:

    # Example:
    # arr-flatten-unflatten_1.1.4
    #
    # Split at the last "_" so the version is ignored.
    package_name = entry_name.rsplit("_", 1)[0]

    source = NODE_MODULES / package_name
    destination = EXTRACTED / package_name

    if not source.exists() or not source.is_dir():
        print(f"[MISSING] {package_name}")
        missing += 1
        continue

    # If destination already exists, remove it first
    if destination.exists():
        shutil.rmtree(destination)

    shutil.copytree(source, destination)

    print(f"[COPIED]  {package_name}")
    copied += 1

print("\n-----------------------------")
print(f"Total entries : {len(data)}")
print(f"Copied        : {copied}")
print(f"Missing       : {missing}")
print(f"Output folder : {EXTRACTED}")
print("-----------------------------")