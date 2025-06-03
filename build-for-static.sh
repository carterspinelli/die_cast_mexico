#!/bin/bash
set -e

echo "Building Gatsby site for static deployment..."

# Clean previous build
rm -rf public/*

# Install dependencies
npm install --legacy-peer-deps

# Build for production
NODE_ENV=production npx gatsby build

# Copy redirect rules
cp _redirects public/_redirects

# Create 404.html from 404/index.html if it exists
if [ -f "public/404/index.html" ]; then
    cp public/404/index.html public/404.html
fi

echo "Static build completed!"
echo "Files ready for deployment in public/ directory"
ls -la public/