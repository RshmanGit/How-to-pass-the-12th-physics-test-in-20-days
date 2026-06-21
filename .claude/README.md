# `.claude/` — repository harness

This directory configures how Claude Code works in this repo. It follows the extension points from
[How Claude Code works in large codebases](https://claude.com/blog/how-claude-code-works-in-large-codebases-best-practices-and-where-to-start).

Each folder below ships with a `README.md` and **one real example** so the structure teaches by demonstration.
Delete the examples once you have your own — empty scaffolding that implies capability you don't have is worse
than no scaffolding.

## Layout

| Path | What it is | When to add to it |
|------|------------|-------------------|
| [`rules/`](rules/) | Topical rule files, `@`-imported by the root `CLAUDE.md`. | A convention is stable and worth loading every session. |
| [`skills/`](skills/) | On-demand expertise; one folder + `SKILL.md` each. Loaded only when the `description` matches. | A repeatable task needs a documented procedure. |
| [`agents/`](agents/) | Subagent definitions (Markdown + frontmatter). | You want isolated context for parallel exploration or focused review. |
| [`commands/`](commands/) | Custom slash commands (`/name`). | You repeat a prompt often enough to name it. |
| [`hooks/`](hooks/) | Scripts triggered on events (e.g. after an edit). Wired in `settings.json`. | You want to automate behavior or capture session learnings. |
| `settings.json` | Version-controlled permissions, hooks, env. | Team-wide config. Personal overrides go in `settings.local.json` (git-ignored). |

Two more extension points live at the repo root:

- **`../.mcp.json`** — MCP servers (connect internal tools / data sources).
- **`../.claudeignore`** — exclude generated files, build artifacts, and third-party code from search.

## Maintenance

- Keep the root `CLAUDE.md` lean — pointers and gotchas, not documentation.
- Add per-subdirectory `CLAUDE.md` files as the tree grows; they load additively as Claude navigates.
- Review this config every 3–6 months as models evolve. Designate a DRI so it doesn't fragment into tribal knowledge.
