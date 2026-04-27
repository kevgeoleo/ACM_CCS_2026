import json
import subprocess

with open("path-traversal_packages.json") as f:
    data = json.load(f)

for pkg in data["dependencies"]:
    print(f"📦 Installing {pkg}...")

    result = subprocess.run(
        f"npm install {pkg}@latest",
        shell=True
    )

    if result.returncode != 0:
        print(f"⚠️ Skipped {pkg}")
    else:
        print("Done")
