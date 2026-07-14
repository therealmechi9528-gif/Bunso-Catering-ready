import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages needs the repository prefix; Vercel serves from the domain root.
  base: process.env.VERCEL ? '/' : process.env.NODE_ENV === 'production' ? '/bunso-catering/' : '/',
})
