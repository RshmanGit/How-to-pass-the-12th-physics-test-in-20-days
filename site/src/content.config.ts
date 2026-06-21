import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// PUBLISH BOUNDARY (hard gate): the site reads ONLY learning.md and results.md from
// each day folder. test.md, rubric.md, and submission/* are never globbed here and have
// no route — they cannot reach the built site. Do not add globs for them.

const learnings = defineCollection({
  loader: glob({ pattern: '*/learning.md', base: '../daily' }),
  schema: z.object({
    date: z.coerce.date(),
    dayIndex: z.number(),
    title: z.string(),
    chapters: z.array(z.string()).default([]),
  }),
});

const results = defineCollection({
  loader: glob({ pattern: '*/results.md', base: '../daily' }),
  schema: z.object({
    date: z.coerce.date(),
    dayIndex: z.number(),
    totalMarks: z.number(),
    projectionAtPace: z.string().optional(),
  }),
});

export const collections = { learnings, results };
