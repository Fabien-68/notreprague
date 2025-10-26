import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: '.', // 👈 assure que le build part bien de la racine
  plugins: [react()],
  build: {
    outDir: 'dist', // dossier de sortie
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'), // 👈 forcer Vite à prendre ce fichier
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
