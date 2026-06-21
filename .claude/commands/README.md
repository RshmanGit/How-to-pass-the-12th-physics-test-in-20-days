# Commands (slash commands)

Each `.md` file here becomes a slash command named after the file: `plan.md` → `/plan`. The file body is the
prompt; optional frontmatter configures it.

```markdown
---
description: Shown in the slash-command menu.
argument-hint: <what to pass after the command>
allowed-tools: Read, Grep, Glob      # optional — restrict tools for this command
---

Prompt body. Use $ARGUMENTS to inject what the user typed after the command.
```

`plan.md` is a working example (`/plan <task>`). Add commands for prompts you run often.
