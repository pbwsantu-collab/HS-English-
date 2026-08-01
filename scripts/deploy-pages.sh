#!/usr/bin/env bash
set -euo pipefail

# deploy-pages.sh
# Builds the frontend and commits the generated /docs to the specified branch so GitHub Pages serves the app.

BRANCH=${1:-main}
COMMIT_MSG=${2:-"chore: deploy frontend to docs for GitHub Pages"}

echo "Deploying frontend to branch: $BRANCH"

# Ensure we are in repo root
ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT_DIR"

# Install dependencies if node_modules is missing
if [ ! -d node_modules ]; then
  echo "node_modules not found, running npm install..."
  npm install
fi

# Build frontend
echo "Building frontend..."
npm -w frontend run build

# Ensure docs exists
if [ ! -d docs ]; then
  echo "docs directory not found after build"
  exit 1
fi

# Create fallback
if [ -f docs/index.html ]; then
  cp docs/index.html docs/404.html
  echo "Copied docs/index.html -> docs/404.html"
else
  echo "docs/index.html missing after build"
  exit 1
fi

# Commit and push docs to the target branch
git add docs
# Avoid committing if there are no changes
if git diff --staged --quiet; then
  echo "No changes in docs to commit"
else
  git commit -m "$COMMIT_MSG"
  git push origin "HEAD:$BRANCH"
  echo "Pushed docs to branch $BRANCH"
fi

echo "Deployment complete. Please verify Pages settings in repository Settings → Pages and ensure the Source is set to branch: $BRANCH, folder: /docs"
