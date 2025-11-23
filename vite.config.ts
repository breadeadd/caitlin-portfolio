import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/caitlin-portfolio/',
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
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