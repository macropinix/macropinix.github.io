// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://macropinix.github.io',
  // The sitemap is generated from the routes that actually built, so a new
  // page can never be silently missing from it.
  integrations: [sitemap()],
  build: {
    // Every internal link is written without a trailing slash.
    format: 'directory',
  },
});
