import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	server: {
		port: 8080,
		proxy: {
			'/api': {
				target: 'http://127.0.0.1:9000',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	plugins: [react()],
});
