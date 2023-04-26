/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      exclude: ['src/vite-env.d.ts', 'src/types.ts', 'src/global.d.ts'],
      src: ['src'],
      all: true,
      reporter: ['text'],
    },
  },
});
