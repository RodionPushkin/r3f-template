import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// @ts-ignore
import eslintPlugin from 'vite-plugin-eslint';
import { ghPages } from 'vite-plugin-gh-pages';
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      fix: true,
    }),
    ghPages(),
  ],
  base: '/r3f-template/',
  server: {
    port: 80,
  },
});
