import json
import shlex
import os
import re

INPUT_FILE = "good_repro1.json"
OUTPUT_FILE = "good_repro1_translated.json"

BUN_BASE_DIR = "temp_bun"


FILE_REGEX = re.compile(r".+\.(?:js|mjs|cjs)$", re.IGNORECASE)


def extract_filename(cmd):
    parts = shlex.split(cmd)

    valid_extensions = (".js", ".ts", ".mjs", ".cjs")

    for part in parts:
        if not part.startswith("-") and part.lower().endswith(valid_extensions):
            return part

    return None

def should_skip_command(cmd: str) -> bool:
    skip_keywords = ["npm install", "npm init", "mkdir"]
    return any(cmd.strip().startswith(k) for k in skip_keywords)


def is_test_file(filename: str) -> bool:
    return filename.endswith((".test.js", ".test.cjs", ".test.mjs"))


def has_js_extension(filename: str) -> bool:
    return filename.endswith((".js", ".cjs", ".mjs"))


def convert_to_test_filename(filename: str) -> str:
    if filename.endswith(".js"):
        return filename[:-3] + ".test.js"
    if filename.endswith(".cjs"):
        return filename[:-4] + ".test.cjs"
    if filename.endswith(".mjs"):
        return filename[:-4] + ".test.mjs"
    return filename


def rename_file_if_exists(issue_number: str, old_name: str, new_name: str):
    issue_dir = os.path.join(BUN_BASE_DIR, str(issue_number))
    old_path = os.path.join(issue_dir, old_name)
    new_path = os.path.join(issue_dir, new_name)

    if os.path.exists(old_path):
        try:
            os.rename(old_path, new_path)
            print(f"[BUN] Renamed {old_path} → {new_path}")
        except Exception as e:
            print(f"[BUN] Rename failed: {e}")


# NODE CONVERSION
def convert_llrt_to_node(cmd: str) -> str:
    cmd = cmd.strip()
    if should_skip_command(cmd):
        return None

    # Handle chained commands with &&
    if "&&" in cmd:
        parts = [p.strip() for p in cmd.split("&&")]
        converted_parts = []

        for part in parts:
            converted = convert_llrt_to_node_single(part)
            converted_parts.append(converted if converted else part)

        return " && ".join(converted_parts)

    return convert_llrt_to_node_single(cmd)


def convert_llrt_to_node_single(cmd: str) -> str:
    cmd = cmd.strip()

    if not cmd.startswith("llrt"):
        if cmd.startswith("fuser"):
            return cmd
        elif cmd == 'npm test':
            return 'node --test'
        return None

    if cmd == 'llrt -v':
        return 'node -v'

    parts = shlex.split(cmd)

    # extract --env-file=<...>
    env_file = next((p for p in parts if p.startswith("--env-file=")), None)
    env_part = f"{env_file} " if env_file else ""

    '''# node --test ...
    if "--test" in parts:
        # Ignore args after --
        if "--" in parts:
            parts = parts[:parts.index("--")]

        files = [
            p for p in parts
            if not p.startswith("-") and p != "node"
        ]

        if "--experimental-test-coverage" in parts:
            if files:
                return "deno test -A --coverage " + " ".join(files)
            else:
                return "deno test -A --coverage "

        if files:
            return "deno test -A " + " ".join(files)
        else:
            return "deno test -A"'''

    # llrt file.test.js
    if len(parts) == 2 and is_test_file(parts[1]):
        return f"node --test {parts[1]}"

    # llrt <filename>
    if len(parts) == 2:
        return f"node {parts[1]}"

    # llrt <options> <filename>
    filename = parts[-1]
    valid_extensions = (".js", ".ts", ".mjs", ".cjs")
    if filename != '&':
        if filename.endswith(valid_extensions):
            if env_part != "":
                return f"node {env_part}{filename}"
            return f"node {filename}"
        else:
            filename = extract_filename(cmd)
            if filename is None:
                return 'node'
            else:
                return f"node {filename}"
    else:
        filename = None
        for p in reversed(parts[:-1]):  # ignore the last "&"
            if FILE_REGEX.match(p):
                filename = p
                break
        if filename is None:
            return "(node &)"
        # Build deno command
        if env_part:
            return f"node {env_part} {filename} &"
        else:
            return f"(node {filename} &)"



# DENO CONVERSION
def convert_llrt_to_deno(cmd: str) -> str:
    cmd = cmd.strip()
    if should_skip_command(cmd):
        return None

    # Handle chained commands with &&
    if "&&" in cmd:
        parts = [p.strip() for p in cmd.split("&&")]
        converted_parts = []

        for part in parts:
            converted = convert_llrt_to_deno_single(part)
            converted_parts.append(converted if converted else part)

        return " && ".join(converted_parts)

    return convert_llrt_to_deno_single(cmd)


def convert_llrt_to_deno_single(cmd: str) -> str:
    cmd = cmd.strip()

    if not cmd.startswith("llrt"):
        if cmd.startswith("fuser"):
            return cmd
        elif cmd == 'npm test':
            return 'deno test -A'
        return None

    if cmd == 'node -v':
        return 'deno -v'

    parts = shlex.split(cmd)

    # extract --env-file=<...>
    env_file = next((p for p in parts if p.startswith("--env-file=")), None)
    env_part = f"{env_file} " if env_file else ""


    # llrt file.test.js
    if len(parts) == 2 and is_test_file(parts[1]):
        return f"deno test -A {parts[1]}"

    # llrt <filename>
    if len(parts) == 2:
        return f"deno run -A {parts[1]}"

    # llrt <options> <filename>
    filename = parts[-1]
    valid_extensions = (".js", ".ts", ".mjs", ".cjs")
    if filename != '&':
        if filename.endswith(valid_extensions):
            if env_part != "":
                return f"deno run -A {env_part}{filename}"
            return f"deno run -A {filename}"
        else:
            filename = extract_filename(cmd)
            if filename is None:
                return 'deno run -A'
            else:
                return f"deno run -A {filename}"
    else:
        filename = None
        for p in reversed(parts[:-1]):  # ignore the last "&"
            if FILE_REGEX.match(p):
                filename = p
                break
        if filename is None:
            return "(deno run -A &)"
        # Build deno command
        if env_part:
            return f"deno run -A {env_part} {filename} &"
        else:
            return f"(deno run -A {filename} &)"


# BUN CONVERSION
def convert_llrt_to_bun(cmd: str, issue_number: str) -> str:
    #print(cmd)
    cmd = cmd.strip()

    #print(cmd)
    if should_skip_command(cmd):
        return None

    # Handle chained commands with &&
    if "&&" in cmd:
        parts = [p.strip() for p in cmd.split("&&")]
        converted_parts = []
        for part in parts:
            converted = convert_llrt_to_bun_single(part,issue_number)
            converted_parts.append(converted if converted else part)

        return " && ".join(converted_parts)

    return convert_llrt_to_bun_single(cmd, issue_number)



def convert_llrt_to_bun_single(cmd: str, issue_number: str) -> str:
    cmd = cmd.strip()

    if not cmd.startswith("llrt"):
        if cmd.startswith("fuser"):
            return cmd
        elif cmd == 'npm test':
            return 'bun test'
        return None

    if cmd == 'node -v':
        return 'bun -v'


    parts = shlex.split(cmd)


    # llrt file.test.js
    if len(parts) == 2 and is_test_file(parts[1]):
        return f"bun test {parts[1]}"

    # llrt <filename>
    if len(parts) == 2:
        return f"bun run {parts[1]}"

    # llrt <options> <filename>
    filename = parts[-1]
    valid_extensions = (".js", ".ts", ".mjs", ".cjs")
    if filename != '&':
        if filename.endswith(valid_extensions):
            return f"bun run {filename}"
        else:
            filename = extract_filename(cmd)
            if filename is None:
                return 'bun run'
            else:
                return f"bun run {filename}"
    else:
        filename = None
        for p in reversed(parts[:-1]):  # ignore the last "&"
            if FILE_REGEX.match(p):
                filename = p
                break
        if filename is None:
            return "(bun run &)"
        # Build deno command
        return f"(bun run {filename} &)"

# ENTRY PROCESSING
def process_entry(entry):
    # Skip bad_repro
    if entry.get("verifier_op") == "bad_repro":
        return None

    new_entry = entry.copy()
    issue_number = entry.get("number")

    # Rename RUN_op -> RUN_op_node
    if "RUN_op" in new_entry:
        run_llrt = new_entry.pop("RUN_op")
        combined = run_llrt.get("combined_command", "")
        run_llrt["combined_command_llrt"] = combined
        run_llrt.pop("combined_command", None)
        new_entry["RUN_op_llrt"] = run_llrt

    llm_op = entry.get("LLM_op", {})
    commands = llm_op.get("command_to_run", {})

    node_cmds = []
    deno_cmds = []
    bun_cmds = []

    for _, cmd in commands.items():
        if should_skip_command(cmd):
            continue

        node = convert_llrt_to_node(cmd)
        deno = convert_llrt_to_deno(cmd)
        bun = convert_llrt_to_bun(cmd,issue_number)


        if node:
            node_cmds.append(node)

        if deno:
            deno_cmds.append(deno)

        if bun:
            bun_cmds.append(bun)

    if node_cmds:
        new_entry["RUN_op_node"] = {
            "combined_command_node": " && ".join(node_cmds)
        }


    if deno_cmds:
        new_entry["RUN_op_deno"] = {
            "combined_command_deno": " && ".join(deno_cmds)
        }

    if bun_cmds:
        new_entry["RUN_op_bun"] = {
            "combined_command_bun": " && ".join(bun_cmds)
        }

    return new_entry

# MAIN
def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    new_data = []

    for entry in data:
        processed = process_entry(entry)
        if processed:
            new_data.append(processed)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(new_data, f, indent=2)

    print("Transformation complete.")
    print(f"Output written to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()