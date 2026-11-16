import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` makes the build work under any GitHub Pages path
// (https://<user>.github.io/<repo>/ or a custom domain) without changes.
export default defineConfig({
  plugins: [react()],
  base: './',
});
