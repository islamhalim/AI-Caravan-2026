import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
    strictPort: false,
    host: true,
    hmr: {
      overlay: true,
    },
  },

  // Netlify serves the application from the domain root
  base: '/',

  build: {
    outDir: 'dist',
  },
});