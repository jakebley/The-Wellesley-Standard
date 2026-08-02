// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: swap in the real production domain once the Checkpoint 1 domain
// cutover happens (see master plan) — placeholder until then.
export default defineConfig({
  site: 'https://www.1881wellesley.com',
  integrations: [sitemap()],
});
