/// <reference types="vitest"/>
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test.setup.js',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
  }
})
