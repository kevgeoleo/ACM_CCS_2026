import os
import json
import subprocess
from pathlib import Path

ROOT = "prototype-pollution_FULL"
TIMEOUT = 10
BAD_PATTERN1 = "undefined\nundefined"
BAD_PATTERN2 = "undefined\n{ undefined, yes }"
BAD_PATTERN3 = "undefined\n{ polluted: 'yes' }"
GOOD_PATTERN1 = "undefined\nyes"
GOOD_PATTERN2 = "undefined\n{ yes, yes }"
GOOD_PATTERN3 = "{ true, true }"
OUTPUT_FILE = "log_prototype-pollution.json"

RUNTIMES = {
    "node": ["node"],
    "deno": ["deno", "run", "-A"],
    "bun": ["bun","run"]
}

def run_runtime(runtime, file_path):
    file_path = Path(file_path)
    cwd = file_path.parent
    relative_name = file_path.name  

    cmd = RUNTIMES[runtime] + [relative_name]

    try:
        proc = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=TIMEOUT,
            cwd=str(cwd)    
        )
        return {
            "exit_code": proc.returncode,
            "stdout": proc.stdout,
            "stderr": proc.stderr,
            "timed_out": False
        }

    except subprocess.TimeoutExpired as e:
        return {
            "exit_code": None,
            "stdout": e.stdout or "",
            "stderr": e.stderr or "",
            "timed_out": True
        }

    except Exception as e:
        return {
            "exit_code": None,
            "stdout": "",
            "stderr": str(e),
            "timed_out": False
        }


def is_bad_output(result):
    stdout = result.get("stdout") or ""

    if GOOD_PATTERN1 in stdout:
        return False
    elif GOOD_PATTERN2 in stdout:
        return False
    elif GOOD_PATTERN3 in stdout:
        return False
    else:
        if result["exit_code"] == 0:
            if BAD_PATTERN1 in stdout:
                return True 
            elif BAD_PATTERN2 in stdout:
                return True
            elif BAD_PATTERN3 in stdout:
                return True 
            return True  
        else:
            return True 

def process_single_file(file_path):
    result = {}
    for runtime in RUNTIMES:
        result[runtime] = run_runtime(runtime, file_path)
    return result


def merge_results(all_results_for_runtime):
    for res in all_results_for_runtime:
        if not is_bad_output(res):
            return res
        
    # fallback1 - return case which is success 
    for res in all_results_for_runtime:
        if res['exit_code'] == 0:
            return res 

    # fallback2 - return last case 
    return all_results_for_runtime[-1]


def process_multiple_files(files):
    all_runtime_results = {rt: [] for rt in RUNTIMES}

    for file_path in files:
        print(f"  Testing file: {file_path}")
        good_for_all = True
        temp_results = {}

        # run this file on all runtimes
        for runtime in RUNTIMES:
            r = run_runtime(runtime, file_path)
            temp_results[runtime] = r
            all_runtime_results[runtime].append(r)

            if is_bad_output(r):
                good_for_all = False

        # Perfect file found
        if good_for_all:
            print(" Found file with good output for all runtimes")
            return temp_results

    # No perfect file, use best individual result
    final_result = {}
    for runtime in RUNTIMES:
        final_result[runtime] = merge_results(all_runtime_results[runtime])

    return final_result


def main():
    results = {}

    for root, dirs, files in os.walk(ROOT):
        test_files = [f for f in files if f.endswith(".test.cjs")]
        if not test_files:
            continue

        folder_name = Path(root).name
        print(f"\nProcessing package: {folder_name}")

        file_paths = [str(Path(root) / f) for f in test_files]

        if len(file_paths) == 1:
            print(" Single test file detected")
            results[folder_name] = process_single_file(file_paths[0])
        else:
            print(f" Multiple test files detected ({len(file_paths)})")
            results[folder_name] = process_multiple_files(file_paths)

    # Write results.json
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)

    print(f"\nSaved JSON to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
