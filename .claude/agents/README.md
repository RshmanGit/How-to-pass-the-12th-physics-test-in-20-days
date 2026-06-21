# Agents (subagents)

Subagents run in **isolated context** — useful for parallel exploration, or for focused work (like review)
that you don't want polluting the main conversation. Each agent is a Markdown file with frontmatter.

```markdown
---
name: my-agent
description: One line on what it does AND when to dispatch it. Claude reads this to decide when to use it.
tools: Read, Grep, Glob, Bash      # optional — omit to inherit all tools
# model: inherit                    # optional — inherit | sonnet | opus | haiku
---

System prompt for the subagent goes here.
```

`code-reviewer.md` is a working example. Add your own (e.g. `explorer`, `migrator`) as needs arise.
