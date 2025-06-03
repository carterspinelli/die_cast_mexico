#!/bin/bash

# Deployment script that ensures Node.js is available
echo "Checking for Node.js runtime..."

# Check if node is available
if command -v node &> /dev/null; then
    echo "Node.js found, starting server..."
    node serve.js
else
    echo "Node.js not found in runtime, installing..."
    
    # Try to install Node.js using package manager
    if command -v apt-get &> /dev/null; then
        apt-get update && apt-get install -y nodejs
        node serve.js
    elif command -v apk &> /dev/null; then
        apk add --no-cache nodejs
        node serve.js
    elif command -v yum &> /dev/null; then
        yum install -y nodejs
        node serve.js
    else
        echo "Cannot install Node.js, falling back to static server"
        # Fall back to Python server
        cd public && python3 -m http.server 5000 --bind 0.0.0.0
    fi
fi