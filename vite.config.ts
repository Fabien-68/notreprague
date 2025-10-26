import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // 👈 garantit que le build part bien de la racine
  build: {
    outDir: 'dist', // sortie standard
    rollupOptions: {
      input: './index.html', // 👈 force Vite à chercher ton index ici
    },
  },
})
