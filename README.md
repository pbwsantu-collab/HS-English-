# Deployment

This project is configured to deploy the frontend to GitHub Pages using the repository's /docs folder.

A helper script is provided to build the frontend, create a 404 fallback, and push the generated docs to a branch for GitHub Pages.

Build & Deploy (manual)

1. From the repository root, install dependencies:
   npm install

2. Build the frontend and push docs to the branch used for GitHub Pages (default: main):
   npm run deploy:pages

   This will run the frontend build, copy docs/index.html to docs/404.html, commit the docs folder, and push to the specified branch.

3. On GitHub, open the repository Settings → Pages and set the source to:
   - Branch: main (or the branch you pushed to)
   - Folder: /docs

This will publish the site at: https://<your-org-or-username>.github.io/HS-English-/

Notes & limitations

- The deployment script commits to the target branch and pushes the built docs. Ensure you have permission to push to the selected branch.
- The script expects git to be configured locally with push access and will push the current HEAD to the target branch.
- I cannot run the build or the script from this environment. You must run it locally or in your CI environment.
