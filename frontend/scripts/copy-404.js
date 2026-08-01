#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', '..', 'docs');
const indexPath = path.join(docsDir, 'index.html');
const fallbackPath = path.join(docsDir, '404.html');

try {
  if (!fs.existsSync(docsDir)) {
    console.error('Docs directory not found:', docsDir);
    process.exit(1);
  }

  if (!fs.existsSync(indexPath)) {
    console.error('index.html not found in docs directory. Did the build succeed?');
    process.exit(1);
  }

  fs.copyFileSync(indexPath, fallbackPath);
  console.log('Copied index.html to 404.html for GitHub Pages SPA fallback');
} catch (err) {
  console.error('Failed to copy index.html to 404.html:', err);
  process.exit(1);
}
