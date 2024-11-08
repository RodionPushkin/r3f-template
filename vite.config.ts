import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
// @ts-ignore
import eslintPlugin from 'vite-plugin-eslint';
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      fix: true,
    }),
  ],
  server: {
    port: 80,
  },
});
