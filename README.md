# Deployment

This project is configured to deploy the frontend to GitHub Pages using the repository's /docs folder.

Build & Deploy (manual)

1. From the repository root, install dependencies:
   npm install

2. Build the frontend (this outputs the production site into the repository's /docs folder):
   npm -w frontend run build

   The frontend package includes a postbuild script that automatically copies docs/index.html to docs/404.html so GitHub Pages will serve the SPA on page refreshes.

3. Commit and push the generated /docs content to the branch you use for GitHub Pages (often main):
   git add docs
   git commit -m "chore: deploy frontend to docs"
   git push origin feature/englishmaster-ai-mvp

4. On GitHub, open the repository Settings → Pages and set the source to:
   - Branch: feature/englishmaster-ai-mvp (or main if you merge)
   - Folder: /docs

This will publish the site at: https://<your-org-or-username>.github.io/HS-English-/

Notes & limitations

- The project uses HashRouter to ensure client-side routing works on GitHub Pages (avoids server-side fallback requirement). The postbuild step also copies index.html to 404.html so BrowserRouter (clean URLs) will also work for direct refreshes if preferrable.
- The Vite base is set to "/HS-English-/" so asset URLs are correct when served under the repo path.
- The PWA manifest and icons are referenced with the repository base path so they load correctly on GitHub Pages.
- Service worker behavior is managed by vite-plugin-pwa; the generated service worker will be placed in /docs and should register correctly. Some browsers may require secure context (HTTPS) or GitHub Pages will serve via HTTPS.
- For automatic deployments, you can add a CI workflow to build the frontend and push docs to the Pages branch when permissions allow.
