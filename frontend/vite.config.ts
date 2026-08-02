import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'EnglishMaster AI',
        short_name: 'EnglishMaster',
        description: 'Practice • Perform • Progress',
        theme_color: '#0b3d91',
        background_color: '#ffffff',
        start_url: './',
        scope: './',
        icons: [
          { src: './icons/logo-192.png', sizes: '192x192', type: 'image/png' },
          { src: './icons/logo-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  server: {
    port: 5173
  }
});
