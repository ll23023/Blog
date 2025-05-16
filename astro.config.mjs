// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mike-lib.github.io/Blog',
	base: '/Blog/',
	integrations: [mdx(), sitemap()],
});
