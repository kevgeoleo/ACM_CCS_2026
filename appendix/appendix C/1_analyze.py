'''
Analyzes confirmed GitHub issues across runtimes by retrieving issue metadata, labels, comments, closure status, 
and linked pull requests. 
It calculates issue resolution time, open-issue age, time to first PR, PR merge rates, and label distributions. 
Results are aggregated per runtime and saved as detailed and summary CSV files.
'''

import sys
import os
import re
import time
from datetime import datetime
from collections import Counter

import pandas as pd
import requests

API_ROOT = "https://api.github.com"
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")

HEADERS = {"Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28"}
if GITHUB_TOKEN:
    HEADERS["Authorization"] = f"Bearer {GITHUB_TOKEN}"
else:
    print("WARNING: No GITHUB_TOKEN set. You get 60 requests/hour, shared across "
          "your whole network. Set one for reliable runs.\n")

ISSUE_URL_RE = re.compile(r"github\.com/([^/]+)/([^/]+)/issues/(\d+)")


def parse_github_url(url):
    m = ISSUE_URL_RE.search(str(url).strip())
    if not m:
        return None
    owner, repo, number = m.group(1), m.group(2), int(m.group(3))
    return owner, repo, number


def _get(url, params=None, max_retries=3):
    """GET with robust handling of GitHub's primary and secondary rate limits."""
    for attempt in range(max_retries):
        r = requests.get(url, headers=HEADERS, params=params, timeout=30)
        if r.status_code == 200:
            return r
            
        if r.status_code == 403 and ("rate limit" in r.text.lower() or "secondary rate" in r.text.lower()):
            reset = r.headers.get("X-RateLimit-Reset")
            retry_after = r.headers.get("Retry-After")
            
            if retry_after:
                wait = int(retry_after)
            elif reset:
                wait = max(int(reset) - time.time(), 5)
            else:
                wait = 60
                
            print(f"  Rate limited. Waiting {int(wait)}s before retrying...")
            time.sleep(min(wait + 1, 120))
            continue
            
        # Don't retry endlessly for true errors (404, 451, etc.)
        r.raise_for_status()
    r.raise_for_status()


def get_issue(owner, repo, number):
    r = _get(f"{API_ROOT}/repos/{owner}/{repo}/issues/{number}")
    return r.json()


def get_first_linked_pr(owner, repo, number):
    """
    Finds the earliest PR linked to this issue.
    Checks the full paginated Timeline API and falls back to the Search API if empty.
    """
    pr_urls = set()
    url = f"{API_ROOT}/repos/{owner}/{repo}/issues/{number}/timeline"
    
    # 1. Check Timeline events (Paginated to handle issues with 100+ events)
    page = 1
    while True:
        try:
            r = _get(url, params={"per_page": 100, "page": page})
            page_data = r.json()
            if not page_data:
                break
            
            # Recursively hunt for PR URLs in this page's event payload
            def extract_pr_urls(data):
                if isinstance(data, dict):
                    if "pull_request" in data and isinstance(data["pull_request"], dict) and "url" in data["pull_request"]:
                        pr_urls.add(data["pull_request"]["url"])
                    for v in data.values():
                        extract_pr_urls(v)
                elif isinstance(data, list):
                    for item in data:
                        extract_pr_urls(item)

            extract_pr_urls(page_data)
            
            if "next" not in r.links:
                break
            page += 1
        except Exception as e:
            print(f"  Timeline fetch failed on page {page}: {e}")
            break

    # 2. Fallback to Search API if Timeline found absolutely no PRs
    if not pr_urls:
        try:
            search_url = f"{API_ROOT}/search/issues"
            # Search for PRs in this repo that mention the issue number
            query = f"repo:{owner}/{repo} type:pr {number}"
            r = _get(search_url, params={"q": query, "per_page": 10})
            for item in r.json().get("items", []):
                if "pull_request" in item and "url" in item["pull_request"]:
                    pr_urls.add(item["pull_request"]["url"])
        except Exception as e:
            print(f"  Search fallback failed: {e}")

    # 3. Resolve all found PR API URLs to get creation date and merge status
    earliest = None
    for pr_api_url in pr_urls:
        try:
            pr_r = _get(pr_api_url)
            pr_data = pr_r.json()
            dt = datetime.strptime(pr_data["created_at"], "%Y-%m-%dT%H:%M:%SZ")
            if earliest is None or dt < earliest["created_at"]:
                earliest = {
                    "created_at": dt,
                    "html_url": pr_data["html_url"],
                    "merged": pr_data.get("merged", False)
                }
        except Exception as e:
            print(f"  Failed to fetch PR details from {pr_api_url}: {e}")
            
    return earliest


def load_confirmed_issues(csv_path):
    df = pd.read_csv(csv_path)
    df.columns = [c.strip() for c in df.columns]
    for col in ["Runtime", "Bug type", "Status", "Confirmed"]:
        if col in df.columns:
            df[col] = df[col].astype(str).str.strip()

    df["Submission Date"] = pd.to_datetime(df["Submission Date"], format="%d-%m-%Y", errors="coerce")
    df["Resolved Date"] = pd.to_datetime(df["Resolved Date"], format="%d-%m-%Y", errors="coerce")

    confirmed = df[df["Confirmed"].str.contains("✓", na=False)].copy()
    return confirmed


def enrich_with_github_data(confirmed_df, sleep_between=0.3):
    rows = []
    total = len(confirmed_df)
    now_utc = datetime.utcnow()

    for i, (_, row) in enumerate(confirmed_df.iterrows(), start=1):
        url = row["Bug URL"]
        parsed = parse_github_url(url)
        print(f"[{i}/{total}] {url}")
        if not parsed:
            print("  Could not parse owner/repo/number, skipping.")
            continue
        owner, repo, number = parsed

        try:
            issue = get_issue(owner, repo, number)
        except requests.HTTPError as e:
            print(f"  Failed to fetch issue: {e}")
            continue

        try:
            first_pr = get_first_linked_pr(owner, repo, number)
        except Exception as e:
            print(f"  Failed to fetch linked PR: {e}")
            first_pr = None

        created_at = datetime.strptime(issue["created_at"], "%Y-%m-%dT%H:%M:%SZ")
        closed_at_api = (
            datetime.strptime(issue["closed_at"], "%Y-%m-%dT%H:%M:%SZ")
            if issue.get("closed_at") else None
        )
        
        age_if_open = None
        if issue["state"] == "open":
            age_if_open = (now_utc - created_at).total_seconds() / 86400
            
        labels = [lbl["name"] for lbl in issue.get("labels", [])]

        rows.append({
            "Runtime": row["Runtime"],
            "Bug type": row.get("Bug type"),
            "URL": url,
            "GitHub state": issue["state"],
            "State reason": issue.get("state_reason"),
            "Created (API)": created_at,
            "Closed (API)": closed_at_api,
            "Submission Date (csv)": row["Submission Date"],
            "Resolved Date (csv)": row["Resolved Date"],
            "Comments": issue.get("comments", 0),
            "Labels": labels,
            "Age of open issue": age_if_open,
            "Has linked PR": first_pr is not None,
            "First PR merged": first_pr["merged"] if first_pr else None,
            "First PR URL": first_pr["html_url"] if first_pr else None,
            "Days to first PR": (
                (first_pr["created_at"] - created_at).total_seconds() / 86400
                if first_pr else None
            ),
            "Days to close": (
                (closed_at_api - created_at).total_seconds() / 86400
                if closed_at_api else None
            ),
        })
        # Sleep slightly longer here to accommodate the new search/timeline requests
        time.sleep(sleep_between)
        
    return pd.DataFrame(rows)


def summarize_by_runtime(details_df):
    def pct(series_bool):
        return round(series_bool.mean() * 100, 1) if len(series_bool) else float("nan")

    def format_label_dist(labels_series):
        total_issues = len(labels_series)
        if total_issues == 0:
            return ""
            
        c = Counter()
        for labels in labels_series.dropna():
            if isinstance(labels, list):
                c.update(labels)
                
        dist = {lbl: round((count / total_issues) * 100, 1) for lbl, count in c.items()}
        sorted_dist = sorted(dist.items(), key=lambda x: x[1], reverse=True)
        return ", ".join([f"{k} ({v}%)" for k, v in sorted_dist])

    summary = (
        details_df.groupby("Runtime")
        .apply(lambda g: pd.Series({
            "Total confirmed issues": len(g),
            "% Closed": pct(g["GitHub state"] == "closed"),
            "Avg days to close": round(g["Days to close"].mean(), 1),
            "Median days to close": round(g["Days to close"].median(), 1),
            "Avg age of open issues": round(g["Age of open issue"].mean(), 1),
            "% With linked PR": pct(g["Has linked PR"]),
            "Avg days to first PR": round(g["Days to first PR"].mean(), 1),
            "Median days to first PR": round(g["Days to first PR"].median(), 1),
            "% PR merged (of those w/ PR)": pct(g.loc[g["Has linked PR"], "First PR merged"] == True)
                if g["Has linked PR"].any() else float("nan"),
            "Avg comments/issue": round(g["Comments"].mean(), 1),
            "Label Distribution": format_label_dist(g["Labels"]),
        }), include_groups=False)
        .reset_index()
    )
    return summary


def main():
    if len(sys.argv) < 2:
        print("Usage: python analyze_issues.py issue_list.csv")
        sys.exit(1)

    csv_path = sys.argv[1]
    confirmed = load_confirmed_issues(csv_path)
    print(f"Loaded {len(confirmed)} confirmed issues from {csv_path}\n")

    details = enrich_with_github_data(confirmed, sleep_between=0.5)
    details.to_csv("issue_details_enriched.csv", index=False)
    print("\nSaved per-issue detail to issue_details_enriched.csv")

    summary = summarize_by_runtime(details)
    summary.to_csv("runtime_summary.csv", index=False)
    print("\n=== Per-runtime summary ===")
    print(summary.to_string(index=False))
    print("\nSaved summary to runtime_summary.csv")


if __name__ == "__main__":
    main()