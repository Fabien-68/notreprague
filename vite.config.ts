import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ Configuration propre pour Render (build statique)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  preview: {
    port: 8080,
    allowedHosts: ['notreprague.onrender.com'], // autorisation Render
  },
  base: './'
});
