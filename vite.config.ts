import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served at the root of https://terminusrift.com/.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
