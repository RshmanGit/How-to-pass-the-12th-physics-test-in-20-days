import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Static site at the repo root. Daily study content + tracker.json live alongside it
// (daily/, tracker.json) and are read at build time. Deploys on git push (Vercel: build
// `npm run build`, output `dist/`). Math is rendered at build time via KaTeX — no runtime JS.
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
