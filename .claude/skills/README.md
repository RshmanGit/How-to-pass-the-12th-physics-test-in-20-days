# Skills

Skills package reusable, **on-demand** expertise. Each skill is a folder containing a `SKILL.md` with
frontmatter (`name`, `description`). Claude loads a skill's body only when its `description` matches the task,
so the `description` must spell out **when to use it** precisely — vague descriptions don't get matched.

```
skills/
  my-skill/
    SKILL.md          # required
    reference.md      # optional supporting files, loaded on demand
    scripts/...
```

`example-skill/` is a template. Copy it, rename, and rewrite the `description` to describe a real trigger.
