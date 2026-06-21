#!/usr/bin/env bash
# Example PostToolUse hook: runs after Claude edits/writes a file.
# Wire it up in .claude/settings.json — see .claude/hooks/README.md.
# The event payload arrives as JSON on stdin; we pull out the edited file path.

set -euo pipefail

payload="$(cat)"

if command -v jq >/dev/null 2>&1; then
  file_path="$(printf '%s' "$payload" | jq -r '.tool_input.file_path // empty')"
else
  file_path=""
fi

[ -n "$file_path" ] || exit 0

# Replace the line below with your formatter, e.g.:
#   prettier --write "$file_path"
#   gofmt -w "$file_path"
#   ruff format "$file_path"
echo "[format-on-edit] would format: $file_path" >&2
