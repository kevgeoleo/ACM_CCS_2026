"""
Find the number and percentage of GitHub issues per runtime
where at least one target user interacted with the issue.

Interaction types considered:
    - Comments
    - PR cross-references
    - Mentions
    - Label assignments
    - Commits
    - Other timeline events containing the target user

Target users:
    fibibot
    robobun
    lunadogbot
    crowlbot
    divybot
    truffle-dev

IMPORTANT:
    This script considers ALL issues in the CSV.
    It does NOT filter by Confirmed status.

Usage:
    pip install pandas requests

    PowerShell:
        $env:GITHUB_TOKEN="your_token"

    Run:
        python bot_presence.py issue_list.csv
"""

import sys
import os
import time
import re
from collections import defaultdict

import pandas as pd
import requests


# ============================================================
# Configuration
# ============================================================

API_ROOT = "https://api.github.com"

TARGET_USERS = {
    "fibibot",
    "robobun",
    "lunadogbot",
    "crowlbot",
    "divybot",
    "truffle-dev",
}


GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN")


HEADERS = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
}


if GITHUB_TOKEN:
    HEADERS["Authorization"] = f"Bearer {GITHUB_TOKEN}"

    print(
        "GitHub token loaded successfully."
    )

else:
    print(
        "WARNING: No GITHUB_TOKEN set."
    )
    print(
        "You are limited to GitHub's unauthenticated "
        "API rate limit.\n"
    )


# ============================================================
# GitHub Issue URL Regex
# ============================================================

ISSUE_URL_RE = re.compile(
    r"github\.com/([^/]+)/([^/]+)/issues/(\d+)"
)


# ============================================================
# Parse GitHub URL
# ============================================================

def parse_github_url(url):

    match = ISSUE_URL_RE.search(
        str(url).strip()
    )

    if not match:
        return None

    owner = match.group(1)
    repo = match.group(2)
    number = int(match.group(3))

    return owner, repo, number


# ============================================================
# GitHub API GET
# ============================================================

def _get(
    url,
    params=None,
    max_retries=3
):

    for attempt in range(max_retries):

        response = requests.get(
            url,
            headers=HEADERS,
            params=params,
            timeout=30
        )

        # Successful request
        if response.status_code == 200:
            return response


        # Rate limit
        if (
            response.status_code == 403
            and "rate limit" in response.text.lower()
        ):

            reset = response.headers.get(
                "X-RateLimit-Reset"
            )

            if reset:

                wait = max(
                    int(reset) - time.time(),
                    5
                )

            else:

                wait = 60


            print(
                f"  Rate limited. "
                f"Waiting {int(wait)} seconds..."
            )


            time.sleep(
                min(
                    wait + 1,
                    120
                )
            )

            continue


        # Other errors
        response.raise_for_status()


    response.raise_for_status()


# ============================================================
# Get Issue Timeline
# ============================================================

def get_issue_timeline(
    owner,
    repo,
    number
):

    url = (
        f"{API_ROOT}/repos/"
        f"{owner}/{repo}/issues/"
        f"{number}/timeline"
    )


    all_events = []

    page = 1


    while True:

        response = _get(
            url,
            params={
                "per_page": 100,
                "page": page
            }
        )


        events = response.json()


        if not events:
            break


        all_events.extend(
            events
        )


        if len(events) < 100:
            break


        page += 1


    return all_events


# ============================================================
# Extract users from a timeline event
# ============================================================

def extract_users_from_event(event):

    users = set()


    # --------------------------------------------------------
    # Direct actor
    # --------------------------------------------------------

    actor = event.get(
        "actor"
    )

    if actor:

        login = actor.get(
            "login"
        )

        if login:
            users.add(
                login.lower()
            )


    # --------------------------------------------------------
    # User who created the event
    # --------------------------------------------------------

    user = event.get(
        "user"
    )

    if user:

        login = user.get(
            "login"
        )

        if login:
            users.add(
                login.lower()
            )


    # --------------------------------------------------------
    # Assignee
    # --------------------------------------------------------

    assignee = event.get(
        "assignee"
    )

    if assignee:

        login = assignee.get(
            "login"
        )

        if login:
            users.add(
                login.lower()
            )


    # --------------------------------------------------------
    # Assigned user
    # --------------------------------------------------------

    assignee = event.get(
        "assignee"
    )

    if assignee:

        login = assignee.get(
            "login"
        )

        if login:
            users.add(
                login.lower()
            )


    # --------------------------------------------------------
    # Label information
    # --------------------------------------------------------

    label = event.get(
        "label"
    )

    if label:

        # Label itself doesn't have a user,
        # but actor above captures who assigned it.


        label_user = label.get(
            "user"
        )

        if label_user:

            login = label_user.get(
                "login"
            )

            if login:
                users.add(
                    login.lower()
                )


    # --------------------------------------------------------
    # Source issue / PR
    # --------------------------------------------------------

    source = event.get(
        "source"
    )

    if source:

        source_issue = source.get(
            "issue"
        )

        if source_issue:

            # PR/issue author
            source_user = source_issue.get(
                "user"
            )

            if source_user:

                login = source_user.get(
                    "login"
                )

                if login:
                    users.add(
                        login.lower()
                    )


            # PR/issue assignee
            source_assignee = source_issue.get(
                "assignee"
            )

            if source_assignee:

                login = source_assignee.get(
                    "login"
                )

                if login:
                    users.add(
                        login.lower()
                    )


    # --------------------------------------------------------
    # Commit author
    # --------------------------------------------------------

    commit = event.get(
        "commit"
    )

    if commit:

        author = commit.get(
            "author"
        )

        if author:

            login = author.get(
                "login"
            )

            if login:
                users.add(
                    login.lower()
                )


    # --------------------------------------------------------
    # Committer
    # --------------------------------------------------------

    if commit:

        committer = commit.get(
            "committer"
        )

        if committer:

            login = committer.get(
                "login"
            )

            if login:
                users.add(
                    login.lower()
                )


    return users


# ============================================================
# Check Timeline for Target Users
# ============================================================

def find_target_users_in_timeline(
    events
):

    found_users = set()


    for event in events:

        users = extract_users_from_event(
            event
        )


        for user in users:

            if user in TARGET_USERS:

                found_users.add(
                    user
                )


    return found_users


# ============================================================
# Check Issue Comments
# ============================================================

def get_issue_comments(
    owner,
    repo,
    number
):

    url = (
        f"{API_ROOT}/repos/"
        f"{owner}/{repo}/issues/"
        f"{number}/comments"
    )


    comments = []

    page = 1


    while True:

        response = _get(
            url,
            params={
                "per_page": 100,
                "page": page
            }
        )


        page_comments = (
            response.json()
        )


        if not page_comments:
            break


        comments.extend(
            page_comments
        )


        if len(page_comments) < 100:
            break


        page += 1


    return comments


# ============================================================
# Find Target Users in Comments
# ============================================================

def find_target_users_in_comments(
    comments
):

    found_users = set()


    for comment in comments:

        user = comment.get(
            "user"
        )


        if user:

            login = user.get(
                "login"
            )


            if (
                login
                and login.lower()
                in TARGET_USERS
            ):

                found_users.add(
                    login.lower()
                )


        # Also check mentions in comment body
        body = (
            comment.get(
                "body"
            )
            or ""
        )


        body_lower = body.lower()


        for target_user in TARGET_USERS:

            # Match @username
            if (
                f"@{target_user}"
                in body_lower
            ):

                found_users.add(
                    target_user
                )


    return found_users


# ============================================================
# Analyze One Issue
# ============================================================

def analyze_issue(
    owner,
    repo,
    number
):

    found_users = set()


    # --------------------------------------------------------
    # 1. Timeline
    # --------------------------------------------------------

    try:

        events = get_issue_timeline(
            owner,
            repo,
            number
        )


        found_users.update(
            find_target_users_in_timeline(
                events
            )
        )


    except requests.HTTPError as e:

        print(
            f"  Timeline failed: {e}"
        )


    # --------------------------------------------------------
    # 2. Comments
    # --------------------------------------------------------

    try:

        comments = get_issue_comments(
            owner,
            repo,
            number
        )


        found_users.update(
            find_target_users_in_comments(
                comments
            )
        )


    except requests.HTTPError as e:

        print(
            f"  Comments failed: {e}"
        )


    return found_users


# ============================================================
# Analyze All Issues
# ============================================================

def analyze_all_issues(
    df,
    sleep_between=0.2
):

    issue_results = []


    total = len(
        df
    )


    for i, (_, row) in enumerate(
        df.iterrows(),
        start=1
    ):

        url = row.get(
            "Bug URL"
        )


        print(
            f"[{i}/{total}] {url}"
        )


        parsed = parse_github_url(
            url
        )


        if not parsed:

            print(
                "  Could not parse URL."
            )

            continue


        owner, repo, number = parsed


        try:

            found_users = analyze_issue(
                owner,
                repo,
                number
            )


        except requests.HTTPError as e:

            print(
                f"  Failed: {e}"
            )

            continue


        interacted = (
            len(found_users) > 0
        )


        print(
            f"  Target users found: "
            f"{', '.join(sorted(found_users))}"
        )


        issue_results.append(
            {
                "Runtime": row.get(
                    "Runtime"
                ),

                "Bug URL": url,

                "Issue Number": number,

                "Target User Interaction":
                    interacted,

                "Users Found":
                    ", ".join(
                        sorted(
                            found_users
                        )
                    ),

                "Number of Target Users":
                    len(
                        found_users
                    ),
            }
        )


        time.sleep(
            sleep_between
        )


    return pd.DataFrame(
        issue_results
    )


# ============================================================
# Calculate Summary
# ============================================================

def calculate_summary(
    results
):

    summary = []


    for runtime, group in results.groupby(
        "Runtime"
    ):

        total_issues = len(
            group
        )


        interacted_issues = int(
            group[
                "Target User Interaction"
            ].sum()
        )


        percentage = (
            interacted_issues
            / total_issues
            * 100
            if total_issues > 0
            else 0
        )


        summary.append(
            {
                "Runtime": runtime,

                "Total Issues":
                    total_issues,

                "Issues With Target User Interaction":
                    interacted_issues,

                "Percentage":
                    round(
                        percentage,
                        2
                    ),
            }
        )


    return pd.DataFrame(
        summary
    )


# ============================================================
# Main
# ============================================================

def main():

    if len(sys.argv) < 2:

        print(
            "Usage: "
            "python analyze_user_interactions.py "
            "issue_list.csv"
        )

        sys.exit(1)


    csv_path = sys.argv[1]


    # --------------------------------------------------------
    # Load ALL issues
    # --------------------------------------------------------

    df = pd.read_csv(
        csv_path
    )


    df.columns = [
        c.strip()
        for c in df.columns
    ]


    print(
        f"Loaded {len(df)} total issues."
    )


    print(
        "IMPORTANT: "
        "No Confirmed filtering is being applied."
    )


    # --------------------------------------------------------
    # Analyze issues
    # --------------------------------------------------------

    results = analyze_all_issues(
        df
    )


    # --------------------------------------------------------
    # Save per-issue results
    # --------------------------------------------------------

    results.to_csv(
        "issue_target_user_interactions.csv",
        index=False
    )


    print(
        "\nSaved per-issue results to:"
    )


    print(
        "issue_target_user_interactions.csv"
    )


    # --------------------------------------------------------
    # Calculate summary
    # --------------------------------------------------------

    summary = calculate_summary(
        results
    )


    # --------------------------------------------------------
    # Save summary
    # --------------------------------------------------------

    summary.to_csv(
        "target_user_interaction_summary.csv",
        index=False
    )


    print(
        "\n=== Runtime Summary ==="
    )


    print(
        summary.to_string(
            index=False
        )
    )


    print(
        "\nSaved summary to:"
    )


    print(
        "target_user_interaction_summary.csv"
    )


# ============================================================
# Entry Point
# ============================================================

if __name__ == "__main__":

    main()