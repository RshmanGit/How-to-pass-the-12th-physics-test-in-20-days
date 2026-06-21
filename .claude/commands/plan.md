---
description: Draft a short, verifiable implementation plan for a task before any code is written.
argument-hint: <task description>
allowed-tools: Read, Grep, Glob
---

Draft a brief implementation plan for the following task. **Do not write code yet.**

Task: $ARGUMENTS

First, list any assumptions and open questions. Then output a numbered plan where every step has an explicit
verify check:

```
1. [step] → verify: [check]
2. [step] → verify: [check]
```

Keep it minimal — only the steps the task actually requires.
