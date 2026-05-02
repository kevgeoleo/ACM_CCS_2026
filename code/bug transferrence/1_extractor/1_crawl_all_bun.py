import requests
import json
import time
import os

cwd = os.getcwd()

TOKEN = "insert_token"
OUTPUT_FILE = os.path.join(cwd, "json", "1_initial", "bun_bugs_with_comments.json")

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json"
}

def fetch_bug_issues(owner, repo, max_issues=15000):
    url = "https://api.github.com/graphql"
    all_issues = []
    has_next_page = True
    cursor = None

    while has_next_page and len(all_issues) < max_issues:
        query = """
            query ($owner: String!, $repo: String!, $cursor: String) {
              repository(owner: $owner, name: $repo) {
                issues(
                  first: 100,
                  after: $cursor,
                  orderBy: { field: CREATED_AT, direction: DESC },
                  states: [OPEN, CLOSED]
                ) {
                  pageInfo {
                    endCursor
                    hasNextPage
                  }
                  nodes {
                    number
                    title
                    url
                    createdAt
                    state
                    stateReason
                    body
                    author {
                      login
                    }
                    labels(first: 10) {
                      nodes {
                        name
                      }
                    }
                    comments(first: 100) {
                      nodes {
                        author {
                          login
                        }
                        body
                        createdAt
                      }
                    }
                  }
                }
              }
            }
        """

        variables = {
            "owner": owner,
            "repo": repo,
            "cursor": cursor
        }

        response = requests.post(url, headers=HEADERS, json={"query": query, "variables": variables})
        if response.status_code != 200:
            print("Error:", response.text)
            break

        data = response.json()
        try:
            issues_data = data["data"]["repository"]["issues"]
        except KeyError:
            print("Unexpected response format:", json.dumps(data, indent=2))
            break

        for issue in issues_data["nodes"]:
            label_names = [lbl["name"] for lbl in issue["labels"]["nodes"]]
            all_issues.append({
                    "number": issue["number"],
                    "title": issue["title"],
                    "url": issue["url"],
                    "created_at": issue["createdAt"],
                    "state": issue["state"],
                    "state_reason": issue['stateReason'],
                    "body": issue["body"],
                    "author": issue["author"]["login"] if issue["author"] else None,
                    "labels": label_names,
                    "comments": [
                        {
                            "author": c["author"]["login"] if c["author"] else None,
                            "body": c["body"],
                            "created_at": c["createdAt"]
                        }
                        for c in issue["comments"]["nodes"]
                    ]
                })

        cursor = issues_data["pageInfo"]["endCursor"]
        has_next_page = issues_data["pageInfo"]["hasNextPage"]
        print(f"Fetched {len(all_issues)} matching issues so far...")
        time.sleep(0.5)

    return all_issues

def save_to_json(data, filename):
    with open(filename, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
    print(f"Saved {len(data)} issues to {filename}")

issues = fetch_bug_issues("oven-sh", "bun")
save_to_json(issues, OUTPUT_FILE)
