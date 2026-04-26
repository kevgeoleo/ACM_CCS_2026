import os
import json
import subprocess
import re
from pathlib import Path

EXTRACTOR = "ast_parser5.js"

PROTO_HEADER_RE = re.compile(
    r'^\[\s*__proto__\s*\]\s*\n([^\n=]+)=([^\n]+)',
    re.MULTILINE
)

def process_config_file(config_path: Path):
    content = config_path.read_text(encoding="utf-8")

    match = PROTO_HEADER_RE.search(content)
    if not match:
        return

    key = match.group(1).strip()
    value = match.group(2).strip()

    base = config_path.stem
    ext = config_path.suffix
    folder = config_path.parent

    variants = {
        1: f"[constructor.prototype]\n{key}={value}",
        2: f"[constructor][prototype]\n{key}={value}",
        3: f"[constructor,prototype]\n{key}={value}",
        4: f"[constructor]\n[prototype]\n{key}={value}",
    }

    # Create modified config files
    for i, body in variants.items():
        new_file = folder / f"{base}_{i}{ext}"
        print(new_file)
        new_file.write_text(body, encoding="utf-8")

    # Find .test.test.cjs in same directory
    for test_file in folder.glob("*.test.test.cjs"):
        test_content = test_file.read_text(encoding="utf-8")

        for i in range(1, 5):
            new_test = folder / f"{test_file.stem}_{i}{test_file.suffix}"
            replaced = test_content.replace(
                config_path.name,
                f"{base}_{i}{ext}"
            )
            new_test.write_text(replaced, encoding="utf-8")

def extract_from_js_code(code_path):
    try:
        result = subprocess.run(
            ["node", EXTRACTOR],
            input=code_path,
            capture_output=True,
            text=True
        )
        output = result.stdout.strip()
        print(output)
        if not output:
            return {"error": "No output from extractor"}
        return output
    except Exception as e:
        return {"error": str(e)}


def scan_directory(root_folder):
    results = {}

    for dirpath, dirnames, filenames in os.walk(root_folder):
        # Remove node_modules from traversal
        dirnames[:] = [d for d in dirnames if d != "node_modules"]

        for filename in filenames:
            if filename.endswith("test.cjs"):
                full_path = os.path.join(dirpath, filename)

                print("File path:",full_path)
                findings = extract_from_js_code(full_path)
                results[full_path] = findings
            
    return results



if __name__ == "__main__":
    import sys

    if len(sys.argv) < 2:
        print("Usage: python scan.py <folder>")
        exit(1)

    folder = sys.argv[1]
    #folder = "./proto-pollution-notworking"
    output = scan_directory(folder)


