
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // <-- This line is very important
  plugins: [react()],
})
