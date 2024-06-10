import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/marvel-portal/',
	resolve: {
		alias: {
			'@components': '/src/components',
			'@hooks': '/src/hooks',
			'@utils': '/src/utils',
			'@constants': '/src/constants.js',
			'@services': '/src/services',
			'@pages': '/src/pages',
			'@images': '/src/resources/img',
		},
	},
});
