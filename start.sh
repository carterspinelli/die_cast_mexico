#!/bin/bash

# Check if public directory exists (built files)
if [ ! -d "public" ]; then
    echo "Building Gatsby site..."
    npm install
    npx gatsby build
fi

echo "Starting production server..."
# Use Node.js directly to serve the files
node serve.js