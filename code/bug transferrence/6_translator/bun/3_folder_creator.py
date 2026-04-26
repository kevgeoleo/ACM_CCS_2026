import json
import os
import shlex
import time
import re
import subprocess
import select
import shutil
from pathlib import Path

# Configuration 
INPUT_FILE = "poc_600_filtered.json"
OUTPUT_FILE = "poc_600_foldercreated.json"
TEMP_DIR = "temp_node"


def clean_deno_commands(deno_cmds: dict) -> dict:
    flags_to_remove_prefixes = (
        "--compat",
        "--unstable",
        "--node-modules-dir",
    )

    cleaned_cmds = {}

    for key, cmd in deno_cmds.items():
        parts = shlex.split(cmd)

        cleaned_parts = []
        for part in parts:
            if any(part.startswith(prefix) for prefix in flags_to_remove_prefixes):
                continue
            cleaned_parts.append(part)

        cleaned_cmds[key] = " ".join(cleaned_parts)

    return cleaned_cmds


# if command endswith & enclose it within &
def normalize(cmd):
    s = cmd.strip()
    if re.search(r"\s*&\s*$", s):
        return f"({s})"
    elif s == 'bun install':
        return 'npm install'
    elif s == 'deno install':
        return 'npm install'
    return s

def run(cmd, cwd, timeout=30):
    p = subprocess.Popen(
        cmd,
        shell=True,
        cwd=cwd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        bufsize=0  # unbuffered binary
    )

    stdout_chunks = []
    stderr_chunks = []
    start = time.time()

    while True:
        if p.poll() is not None:
            break

        if time.time() - start > timeout:
            break

        reads = [p.stdout, p.stderr]
        # select.select is used for non-blocking I/O on the pipes
        ready, _, _ = select.select(reads, [], [], 0.1)

        for r in ready:
            data = r.read(4096)  # read raw bytes
            if not data:
                continue
            if r is p.stdout:
                stdout_chunks.append(data)
            else:
                stderr_chunks.append(data)

    # Kill if still running (timeout reached)
    if p.poll() is None:
        p.kill()

    # Drain remaining output
    try:
        out, err = p.communicate(timeout=1)
        if out: stdout_chunks.append(out)
        if err: stderr_chunks.append(err)
    except:
        pass

    # Decode ONCE at the end, safely
    stdout = b"".join(stdout_chunks).decode("utf-8", errors="replace")
    stderr = b"".join(stderr_chunks).decode("utf-8", errors="replace")

    return {
        "stdout": stdout,
        "stderr": stderr,
        "return_code": p.returncode if p.returncode is not None else -1,
    }

def process_executions():
    # 1. Create temp_node if it doesn't exist
    if not os.path.exists(TEMP_DIR):
        os.makedirs(TEMP_DIR)

    # Load translated data
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    for entry in data:
        issue_num = str(entry.get("number", "unknown"))
        translation = entry.get("LLM_translation")

        # Skip entries that failed translation
        if not translation or translation == "could_not_be_translated":
            print(f"Skipping Issue {issue_num}: Translation missing or failed.")
            continue

        print(f"Processing Issue {issue_num}...")

        # 2. Create subfolder for issue
        issue_path = os.path.join(TEMP_DIR, issue_num)
        if os.path.exists(issue_path):
            shutil.rmtree(issue_path) # Clean start
        os.makedirs(issue_path)

        # 3. Create files
        files = translation.get("files_to_create_node", {})
        for filename, content in files.items():
            # Construct the full path (e.g., temp_node/10002/lib/index.d.ts)
            file_path = os.path.join(issue_path, filename)

            # Extract the directory part (e.g., temp_node/10002/lib)
            file_dir = os.path.dirname(file_path)

            # Create the nested directory if it doesn't exist
            if file_dir:
                os.makedirs(file_dir, exist_ok=True)

            with open(file_path, "w", encoding="utf-8") as f:
                f.write(content)

        # 4. Prepare combined commands
        node_cmds = translation.get("commands_to_run_node", {})
        sorted_node_keys = sorted(node_cmds.keys(), key=lambda x: int(x))
        combined_cmd_node = " && ".join([normalize(node_cmds[k]) for k in sorted_node_keys])

        deno_cmds = translation.get("commands_to_run_deno", {})
        deno_cmds = clean_deno_commands(deno_cmds)
        sorted_deno_keys = sorted(deno_cmds.keys(), key=lambda x: int(x))
        combined_cmd_deno = " && ".join([normalize(deno_cmds[k]) for k in sorted_deno_keys])

        # 5. Execute Node.js
        print(f"  Running Node.js...")
        node_op = run(combined_cmd_node, cwd=issue_path)
        entry["RUN_op_node"] = {
            "combined_command_node": combined_cmd_node,
            "op": node_op
        }

        # 6. Execute Deno
        print(f"  Running Deno...")
        deno_op = run(combined_cmd_deno, cwd=issue_path)
        entry["RUN_op_deno"] = {
            "combined_command_deno": combined_cmd_deno,
            "op": deno_op
        }

    # Save results
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print(f"\nExecution complete. Results saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    process_executions()