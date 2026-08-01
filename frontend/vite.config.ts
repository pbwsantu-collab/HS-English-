import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/HS-English-/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'EnglishMaster AI',
        short_name: 'EnglishMaster',
        description: 'Practice • Perform • Progress',
        theme_color: '#0b3d91',
        icons: [
          { src: '/HS-English-/icons/logo-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/HS-English-/icons/logo-512.png', sizes: '512x512', type: 'image/png' }
        ],
        start_url: '/HS-English-/',
        scope: '/HS-English-/'
      },
      workbox: {
        navigateFallback: '/HS-English-/index.html'
      }
    })
  ],
  server: {
    port: 5173
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true
  }
});
