import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path matches the GitHub Pages project URL
// (https://siriusbontea.github.io/terminus-rift-site/). When a custom
// domain is added, change to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/terminus-rift-site/',
})
