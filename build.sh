#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Building Gatsby site..."
npx gatsby build

echo "Build completed successfully!"
echo "Static files are ready in the 'public' directory"