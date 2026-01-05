import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    environment: 'jsdom',
    alias: {
      '@mikael240820/modal-toast-tailwind': fileURLToPath(
        new URL(
          './src/components/__tests__/__mocks__/modal-toast-tailwind.js',
          import.meta.url
        )
      ),
    },
  }
})
