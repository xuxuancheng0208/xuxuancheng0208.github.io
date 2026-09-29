import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'site',
  publicDir: '../public',
  base: '/',
  build: { outDir: '../dist', emptyOutDir: true },
  server: { host: '127.0.0.1' },
});
