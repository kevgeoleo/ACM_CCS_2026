import json
import os
import subprocess
import time
import select

INPUT_FILE = "poc_600_foldercreated.json"
OUTPUT_FILE = "poc_600_executed.json"

DENO_BASE = "temp_deno"

def run(cmd, cwd, timeout=30):
    p = subprocess.Popen(
        cmd,
        shell=True,
        cwd=cwd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        bufsize=0
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
        ready, _, _ = select.select(reads, [], [], 0.1)

        for r in ready:
            data = r.read(4096)
            if not data:
                continue
            if r is p.stdout:
                stdout_chunks.append(data)
            else:
                stderr_chunks.append(data)

    # Kill if still running
    if p.poll() is None:
        p.kill()

    # Drain remaining output
    try:
        out, err = p.communicate(timeout=1)
        stdout_chunks.append(out or b"")
        stderr_chunks.append(err or b"")
    except:
        pass

    stdout = b"".join(stdout_chunks).decode("utf-8", errors="replace")
    stderr = b"".join(stderr_chunks).decode("utf-8", errors="replace")

    return {
        "stdout": stdout,
        "stderr": stderr,
        "return_code": p.returncode if p.returncode is not None else -1,
    }


def process_entries(data):
    for entry in data:
        issue_number = str(entry.get("number"))

        # Run Deno command
        deno_section = entry.get("RUN_op_deno")
        if deno_section and "combined_command_deno" in deno_section:
            cmd = deno_section["combined_command_deno"]
            cwd = os.path.join(DENO_BASE, issue_number)

            if os.path.isdir(cwd):
                print(f"[DENO] Running issue {issue_number}...")
                result = run(cmd, cwd)
            else:
                print(f"[DENO] Directory missing: {cwd}")
                result = {
                    "stdout": "",
                    "stderr": f"Directory not found: {cwd}",
                    "return_code": -1
                }

            entry["RUN_op_deno"]["op"] = result


    return data


def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    updated_data = process_entries(data)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(updated_data, f, indent=2)

    print("Execution complete.")
    print(f"Updated file written to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()