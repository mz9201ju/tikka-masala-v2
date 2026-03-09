import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/",   // ✅ REQUIRED for GitHub Pages sub-repo
  plugins: [react()],
})
