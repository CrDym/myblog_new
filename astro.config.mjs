// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://crdym.github.io',
  base: isProd ? '/myblog_new/' : '/',
  output: 'static',
  server: {
    open: '/',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
  integrations: [mdx()],
});
