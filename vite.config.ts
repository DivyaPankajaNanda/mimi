import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import path from "path"

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, 'src/components'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@utils': path.resolve(__dirname, 'src/utils')
		}
	}

});
