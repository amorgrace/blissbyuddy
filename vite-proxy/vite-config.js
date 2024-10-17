import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,  // Ensure this matches your Vite terminal output
    proxy: {
      // Proxy all Django static and media requests
      '/static': 'http://127.0.0.1:8000',
      '/media': 'http://127.0.0.1:8000',
      // Proxy root routes to Django (like / or /index)
      '^/': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      },
    },
    hmr: {
      host: '127.0.0.1',
      port: 5173,  // Same port as Vite
    },
  },
});