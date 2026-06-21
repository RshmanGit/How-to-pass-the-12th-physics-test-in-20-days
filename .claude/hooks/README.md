# Hooks

Hooks run shell commands on Claude Code events (e.g. after an edit, before a tool runs, on session stop).
Scripts live here; the **wiring** goes in `.claude/settings.json` under `"hooks"`.

`format-on-edit.sh` is a (safe, inert) template for a `PostToolUse` hook. To enable it:

1. Make it executable: `chmod +x .claude/hooks/format-on-edit.sh`
2. Replace the placeholder line with your real formatter (`prettier`, `gofmt`, `ruff format`, …).
3. Wire it in `.claude/settings.json`:

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": ".claude/hooks/format-on-edit.sh" }
        ]
      }
    ]
  }
}
```

> Left disabled by default: a hook runs commands on your machine, so review the script before enabling it.
> Common event names: `PreToolUse`, `PostToolUse`, `UserPromptSubmit`, `Stop`, `SessionStart`.
