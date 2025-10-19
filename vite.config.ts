import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    emptyOutDir: true,

    rollupOptions: {
      input: [
        './index.html',
        './projects.html', 
        './design.html'
      ]
    },
    assetsDir: 'assets'
  }
})