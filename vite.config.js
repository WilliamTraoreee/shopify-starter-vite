import { defineConfig } from 'vite';
import shopify from 'vite-plugin-shopify';

export default defineConfig({
	plugins: [
		shopify({
			entrypointsDir: 'frontend/entrypoints',
			sourceCodeDir: 'frontend',
			snippetFile: 'vite-tag.liquid',
		}),
	],
	build: {
		emptyOutDir: false,
	},
});
