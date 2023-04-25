/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import sass from 'sass';

export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       implementation: sass,
  //     },
  //   },
  // },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    coverage: {
      exclude: ['src/vite-env.d.ts', 'src/types.ts'],
      src: ['src'],
      all: true,
      reporter: ['text'],
    },
  },
});
