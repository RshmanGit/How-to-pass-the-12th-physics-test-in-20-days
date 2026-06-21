---
name: handwriting-parsing
description: >-
  Read and transcribe handwriting from images — notebook pages, scans, or photographed answer sheets — and,
  when grading the writer, report how legible it was. Use whenever you're handed an image of handwriting that
  needs reading: transcribing or digitizing notes, answering "what does this say?", or evaluating a
  handwritten answer where legibility matters. Trigger it even if the user just drops in a handwriting image
  without saying "transcribe". Returns a faithful transcription with explicit confidence markers, plus — in
  grading contexts — a per-section legibility report that splits handwriting problems from photo problems and
  gives writer-facing feedback (signals for the evaluator, not marks). Skip only for pure printed/typed-text
  OCR with no handwriting or legibility judgment (mixed pages are fine).
---

# Handwriting parsing

Turn an image of handwriting into trustworthy text. When the caller is grading the writer, also report how
legible the writing was — as signals for the evaluator, never as marks.

## The rule that governs everything

A model reading handwriting will silently auto-complete it into the answer it *expects*. That's helpful when
someone wants to *understand* messy notes; it's a serious bug when someone is *grading*, because it credits
content the writer never wrote — or quietly "fixes" a wrong term into a right one.

So **transcribe what is on the page, not what should be there.** Where the marks are genuinely ambiguous,
flag the ambiguity — don't resolve it with knowledge the writer didn't put down. The spots where you had to
guess are exactly what the writer needs to fix.

Mark confidence inline so a reader sees where to trust you:

- `word` confident · `word[?]` uncertain · `[best-guess?]` a flagged guess · `[illegible]` can't read it
  (do **not** substitute a plausible answer) · `[illegible — image]` unreadable because of the photo, not
  the writing.

Preserve structure (headings, numbering, arrows), keep the writer's errors and strike-throughs, and note
drawings as `[diagram: what's drawn + visible labels]` rather than inventing them.

## Check the image before you read

A blurry photo and bad handwriting fail the same way but mean opposite things for the writer, so judge
capture first — light, focus, glare, crop, skew. If the *image* is the blocker, say so and ask for a
re-shoot instead of guessing. Never let a bad photo masquerade as bad handwriting.

## When grading: the legibility report

The caller decides marks; you hand it clean signals built from where reading was actually hard. For each
section the evaluator marks in (a question, an answer, a block), report:

- **Legibility** — High (no guessing) / Medium (a few uncertain tokens) / Low (guessing or illegible
  stretches).
- **Cause**, if not High — `handwriting` / `image-capture` / `both`. This split is the point: only
  `handwriting` is the writer's to fix; image problems are a re-shoot, not a flaw, and shouldn't count
  against them.
- **What was hard, and one writer note** — specific and actionable ("add a crossbar to your *t* —
  'proportional' currently reads as 'proporcional'") beats "write more neatly".
- **Content at risk** — where genuine *handwriting* illegibility could stop a real examiner from awarding
  marks. Flag it; don't score it.

Close with a one-line capture verdict for the whole image, plus re-shoot advice if it would help before
grading.

**You stop at signals.** Marks, rubrics, and pass/fail belong to the evaluator agent that called you.
