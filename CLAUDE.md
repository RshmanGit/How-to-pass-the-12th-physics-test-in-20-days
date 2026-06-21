# CLAUDE.md

> Project context for Claude Code. Keep this file lean — **pointers and critical gotchas only.**
> Topical conventions live in `.claude/rules/` (imported below). Add per-directory `CLAUDE.md`
> files as the codebase grows so local context loads additively.

## Project

**CBSE Class 12 Physics — Pass Kit** — a focused study repo to get a student over the board/compartment
Physics (Code 042) **pass line (33% = 23/70 theory)** by drilling the most predictable, repeated
questions. Generalised content (not tuned to a specific student); no tooling yet.

- Content (not code): Markdown question banks, chapter content maps, a strategy kit, and exam reference docs.
- Built from the official **2025-26** CBSE pattern + 5-year question trends. Compartment uses the identical blueprint.

### Repo map

| Path | What it holds |
|------|---------------|
| `pass-kit.md` | The strategy layer. Part 1 = fastest path to 23/70 (Tier 1/2, exam-hall order); Part 2 = chapter-by-chapter important questions, each linked into the question banks. **Start here.** |
| `exam-reference/question-paper-template.md` | Official paper structure: sections A–E, marks, internal choice, 50/20/30 competency split, the dual (theory + practical) 33% pass gate. |
| `exam-reference/weightage-blueprint.md` | Unit + per-chapter weightage; high-yield "pass set" ranking. |
| `chapters/NN-slug/CLAUDE.md` | Per-chapter content map: weightage, important Qs, files present, sources, diagram inventory. |
| `chapters/NN-slug/question-bank.md` or `question-bank/` | Full marking-scheme-style answers. Large chapters (1, 2, 3, 4, 9, 14) split by type; the rest are single-file. |
| `tracker.json` | **Daily-loop machine state** (single source of truth): per-question history, mastery labels, projections, activity. Git-diffable JSON — **no SQLite**. Built by `seed-tracker`; read/written by the daily skills. |
| `daily/NN-YYYY-MM-DD/` | One folder per study day. `learning.md` + `results.md` are **published** to the site; `test.md` + `rubric.md` + `submission/` are **private** (publish boundary is a filename glob). |
| `.claude/skills/{seed-tracker,daily-prep,daily-test,daily-eval}` | The daily loop. Commands `/prep` → `/test` → `/grade` wrap them. **Daily order: `/grade` (yesterday) → `/prep` → `/test`**, one day at a time. |
| `astro.config.mjs`, `src/`, `package.json` | The **mobile-first study site** (Astro 5, static) — lives at the **repo root** (so Vercel deploys zero-config). Reads `daily/*/learning.md`+`results.md` and `tracker.json` at build time; KaTeX renders math. Build `npm run build` → `dist/`. |

- **Answer style:** CBSE marking-scheme (law → formula → substitution → result with units; derivations as mark-carrying steps).
- **Diagrams:** "what to draw" checklists (which labels score marks) — no images.
- **Originality:** answers authored from physics; web sources used only to identify repeated questions and verify values.
- **Scale:** 14 chapters · ~580 questions · 195 flagged as important. All content was independently physics-verified.
- **Tracker join key:** each of the 195 important questions carries a hidden `<!-- id: chNN-…-qN -->` under its
  heading — that ID, **not** the GitHub anchor slug, is the stable key (anchors break on re-titling). Don't renumber
  existing questions. Spacing/selection policy lives inside the daily skills, not as a rule.

> Not greenfield anymore — keep this map current as chapters/content change.

## How to work in this repo

Behavioral guidelines (adapted from the Karpathy CLAUDE.md). These bias toward **caution over speed** —
use judgment on trivial tasks.

### 1. Think before coding
- State assumptions explicitly. If uncertain, ask — don't guess.
- If multiple interpretations exist, surface them; don't silently pick one.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop and name what's confusing.

### 2. Simplicity first
- Minimum code that solves the problem. Nothing speculative.
- No features beyond what was asked. No abstractions for single-use code.
- No "configurability" or error handling for impossible cases that weren't requested.
- If 200 lines could be 50, rewrite it. Ask: _"Would a senior engineer call this overcomplicated?"_

### 3. Surgical changes
- Touch only what the request requires. Match existing style even if you'd do it differently.
- Don't refactor or reformat adjacent code that isn't broken.
- Remove orphans _your_ change created; leave pre-existing dead code (mention it, don't delete it).
- Test: every changed line traces directly to the request.

### 4. Goal-driven execution
- Turn tasks into verifiable goals: "Add validation" → "write tests for invalid inputs, then make them pass."
- For multi-step work, state a brief plan with a verify step for each:
  ```
  1. [step] → verify: [check]
  2. [step] → verify: [check]
  ```
- Strong success criteria let you loop independently. Don't claim done without running the check.

## Stress-test my ideas (system & design work)

When we are working on or trying to **improve the overall system** — architecture, this harness, workflows,
process, tooling, or design decisions — act as a sharp, skeptical reviewer of my ideas, not a supporter.

Before you respond, run my idea through a quick test:

1. **Build the strongest case against my position** — the holes, the missing evidence, what a sharp critic
   would attack. Be specific, not vague.
2. **Then tell me whether my view survives that test.** If it survives, say so and explain what made it hold
   up. If it doesn't, show me exactly where it broke and tell me how I can fix it.

I want the stress-test, not reassurance — so don't skip the part where you try to take my idea apart. And if
my idea is genuinely solid, don't invent flaws to seem rigorous.

> Scope: this applies to system/design discussions. For routine execution — "fix this", "add that", clear
> mechanical tasks — just do the work.

## Repo harness

This repo is set up as a Claude Code harness. Full tour in [`.claude/README.md`](.claude/README.md).

| Path | Purpose |
|------|---------|
| `.claude/rules/` | Modular, topical rules. Imported into context (below). |
| `.claude/skills/` | On-demand packaged expertise (`SKILL.md` per skill). |
| `.claude/agents/` | Subagent definitions for isolated / parallel work. |
| `.claude/commands/` | Custom slash commands. |
| `.claude/hooks/` | Event-triggered scripts (wired up in `settings.json`). |
| `.claude/settings.json` | Version-controlled permissions & config. |
| `.mcp.json` | MCP server connections (project-scoped). |
| `.claudeignore` | Paths Claude skips when searching. |

### Imported rules
@.claude/rules/coding-style.md
