import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sriram-portfolio/',   // 👈 repo name exact ah podu
})
