#!/bin/bash
set -e

echo "Installing dependencies..."
npm install

echo "Building Gatsby site..."
npx gatsby build

echo "Starting production server..."
npx gatsby serve -p 5000 -H 0.0.0.0