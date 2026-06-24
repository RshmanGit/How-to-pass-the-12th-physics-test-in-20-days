# CLAUDE.md

> Project context for Claude Code. Keep this file lean — **pointers and critical gotchas only.**
> Topical conventions live in `.claude/rules/` (imported below). Add per-directory `CLAUDE.md`
> files as the codebase grows so local context loads additively.

## Project

**MD General Medicine — Theory Pass Kit** — a focused study repo to get a postgraduate student
(**Mitsu Patel**, Jaipur National University) over the **MD General Medicine theory pass line** by drilling
high-yield, repeatedly-examined questions. There is **no official "important topics" list** in MD Medicine —
this is a floor-raiser + confidence engine, not a secret short syllabus.

- Content (not code): Markdown question banks (muggable marking-scheme answers), per-system content maps, a
  strategy kit, and exam-reference docs.
- Built on the **NMC 4-paper pattern** (4 × 100 = **400 theory marks**; JNU examines its own MD). **Pass gate
  (no grace marks): ≥40% in EACH paper AND ≥50% aggregate.** A separate ≥50% practical/clinical+viva gate is
  **out of scope** (theory-only kit). Milestones: **prelim 27 Jul 2026**, **final theory 17 Aug 2026**.

### Repo map

| Path | What it holds |
|------|---------------|
| `pass-kit.md` | The strategy layer. Part 1 = high-yield strategy (Tier 1/2, scoring-systems harvest, per-paper-floor warning, exam-hall order); Part 2 = system-by-system important questions, each linked into the banks. **Start here.** |
| `exam-reference/paper-blueprint.md` | The 4×100 structure, system→paper map (marks sum 100/paper, 400 total), the 40%/paper + 50%-aggregate pass gate. |
| `exam-reference/answer-paper-template.md` | LAQ/SAQ block step-marking + exam-hall answer technique. |
| `systems/NN-slug/CLAUDE.md` | Per-system content map: which paper + weightage, important Qs, files present, sources, diagram/table inventory, and a **`Verification:` sign-off line** (Mitsu flips ☐→☑ before mugging). |
| `systems/NN-slug/question-bank.md` or `question-bank/` | Muggable marking-scheme answers. Tier-1 systems (01–07) split by type (`01-laq`/`02-saq`/`03-criteria`/`04-numericals`); thin systems (08–13) single-file. |
| `tracker.json` | **Daily-loop machine state** (schema v2): `papers`/`systems` maps, per-question history, mastery labels, **per-paper projections + two-constraint verdict**, activity. Git-diffable JSON — **no SQLite**. Built by `seed-tracker`; read/written by the daily skills. |
| `daily/NN-YYYY-MM-DD/` | One folder per study day. `learning.md` + `results.md` are **published** to the site; `test.md` + `rubric.md` + `submission/` are **private** (publish boundary is a filename glob). |
| `.claude/skills/{seed-tracker,daily-prep,daily-test,daily-eval}` | The daily loop. Commands `/prep` → `/test` → `/grade` wrap them. **Daily order: `/grade` (yesterday) → `/prep` → `/test`**, one day at a time. |
| `astro.config.mjs`, `src/`, `package.json` | The **mobile-first study site** (Astro 5, static) — lives at the **repo root** (so Vercel deploys zero-config). Reads `daily/*/learning.md`+`results.md` and `tracker.json` at build time; renders per-paper gauges + aggregate. KaTeX wired for occasional lab-value/formulae. Build `npm run build` → `dist/`. |

- **Answer style:** CBSE-style marking-scheme **blocks** — LAQ = Definition → Aetiopathogenesis → Clinical
  features → Investigations → Management (each block mark-carrying, scored independently); SAQ = short note;
  `crit` = a scoring-system table; `num` = a verified calculation.
- **Diagrams:** "what to draw / tabulate" checklists (tables, flowcharts, labelled diagrams) — no images.
- **Originality & safety:** answers authored from standard texts (Harrison's / Davidson's / API) with per-answer
  citations and **adversarially fact-checked**; **a wrong dose is dangerous**, so each system also needs
  **Mitsu's sign-off** (flip its `Verification` line) before it is treated as muggable.
- **Scale:** **13 systems · 132 questions.** Tier-1 = her 7 systems (Neurology first); Tier-2 = Haem/Onc,
  Rheumatology, Critical care; floor sets for Papers I & IV; a cross-cutting criteria-scores system.
- **Tracker join key:** each question carries a hidden `<!-- id: sysNN-…-qN -->` under its heading — that ID,
  **not** the GitHub anchor slug, is the stable key (anchors break on re-titling). Don't renumber existing
  questions. Spacing/selection policy lives inside the daily skills, not as a rule.

> Refactored in-place from a CBSE Physics kit (git history / `main` retain the physics version) — keep this
> map current as systems/content change.

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
