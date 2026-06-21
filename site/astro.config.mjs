import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Static site. Daily study content + tracker.json are read at build time from the
// repo root (../daily, ../tracker.json). Deploys on git push (Vercel: build `npm run
// build`, output `dist/`). Math is rendered at build time via KaTeX — no runtime JS.
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  // Allow reading the study content and tracker that live one level up (repo root).
  vite: {
    server: { fs: { allow: ['..', '.'] } },
  },
});
