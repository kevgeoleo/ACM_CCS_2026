import json
import subprocess
import shutil
from pathlib import Path
import re
import time
import select

INPUT = "poc_300.json"
OUTPUT = "poc_300_runop.json"
TEMP = Path("temp")

TEMP.mkdir(exist_ok=True)


# If command ends with &, enclose it within ()
def normalize(cmd):
    s = cmd.strip()
    if re.search(r"\s*&\s*$", s):
        return f"({s})"
    return s



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

    if p.poll() is None:
        p.kill()

    try:
        out, err = p.communicate(timeout=1)
        stdout_chunks.append(out)
        stderr_chunks.append(err)
    except:
        pass

    stdout = b"".join(stdout_chunks).decode("utf-8", errors="replace")
    stderr = b"".join(stderr_chunks).decode("utf-8", errors="replace")

    return {
        "stdout": stdout,
        "stderr": stderr,
        "return_code": p.returncode if p.returncode is not None else -1,
    }

with open(INPUT, "r", encoding="utf-8") as f:
    issues = json.load(f)

count = 1
for issue in issues:
    number = str(issue["number"])
    print(count,".",number)
    count = count + 1
    workdir = TEMP / number
    llm = issue.get("LLM_op", {})

    # SKIP LOGIC
    if "skip" in llm:
        issue["RUN_op"] = {
            "combined_command": None,
            "op": {
                "stdout": "",
                "stderr": f"SKIPPED: {llm['skip']}",
                "return_code": -1
            }
        }
        print("skipped")
        continue

    if workdir.exists():
        shutil.rmtree(workdir)
    workdir.mkdir(parents=True)

    # CREATE FILES
    for fname, content in llm.get("files_to_create", {}).items():
        path = workdir / fname
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding="utf-8")
        print("Files created")

    # COMBINE COMMANDS
    cmds = llm.get("command_to_run", {})
    '''if isinstance(cmds, dict):
        combined = " && ".join(cmds[k] for k in sorted(cmds, key=lambda x: int(x)))
    else:
        combined = cmds'''
    if isinstance(cmds, dict):
        combined = " && ".join(
            normalize(cmds[k]) for k in sorted(cmds, key=lambda x: int(x))
        )
    else:
        combined = normalize(cmds)

    # RUN
    if combined:
        result = run(combined, workdir)
        print("Commands run")
    else:
        print("No commands provided")
        result = {
            "stdout": "",
            "stderr": "No command provided",
            "return_code": -1
        }

    # STORE
    issue["RUN_op"] = {
        "combined_command": combined,
        "op": result
    }

with open(OUTPUT, "w", encoding="utf-8") as f:
    json.dump(issues, f, indent=2)

print(f"Saved → {OUTPUT}")
