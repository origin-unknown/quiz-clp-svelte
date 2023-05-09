import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		proxy: {
			'/quest': 'http://127.0.0.1:5000',
		}
	},
	plugins: [sveltekit()]
});
