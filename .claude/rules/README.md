# Rules

Modular, topical conventions. Each file here is meant to be `@`-imported by the root `CLAUDE.md`, e.g.:

```
@.claude/rules/coding-style.md
```

Imported rules load into context **every session**, so keep them tight and high-signal — the same lean bar
as `CLAUDE.md` itself. Split by topic (`coding-style.md`, `git.md`, `testing.md`, …) so each stays focused
and easy to prune.

`coding-style.md` is a starter example. Edit it for this project, or delete it and add your own.
