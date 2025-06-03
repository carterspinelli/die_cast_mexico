#!/bin/bash
set -e

echo "Building Gatsby site for static deployment..."

# Clean previous build (preserve .cache)
rm -rf public
mkdir -p public

# Install dependencies
npm install --legacy-peer-deps

# Rebuild native modules for deployment environment
npm rebuild

# Build for production with clean cache
NODE_ENV=production npx gatsby clean
NODE_ENV=production npx gatsby build

# Copy redirect rules if file exists
if [ -f "_redirects" ]; then
    cp _redirects public/_redirects
else
    echo "Warning: _redirects file not found, skipping..."
fi

# Create 404.html from 404/index.html if it exists
if [ -f "public/404/index.html" ]; then
    cp public/404/index.html public/404.html
fi

echo "Static build completed!"
echo "Files ready for deployment in public/ directory"
ls -la public/