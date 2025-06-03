#!/bin/bash

# Ensure Node.js is available and start the server
export PATH="/opt/nodejs/bin:$PATH"
export NODE_PATH="/opt/nodejs/lib/node_modules"

# Try different Node.js paths that might be available in the deployment environment
POSSIBLE_NODE_PATHS=(
    "/opt/nodejs/bin/node"
    "/usr/local/bin/node"
    "/usr/bin/node"
    "node"
)

NODE_CMD=""
for path in "${POSSIBLE_NODE_PATHS[@]}"; do
    if command -v "$path" &> /dev/null; then
        NODE_CMD="$path"
        echo "Found Node.js at: $path"
        break
    fi
done

if [ -z "$NODE_CMD" ]; then
    echo "Node.js not found in any expected location"
    exit 1
fi

echo "Starting Node.js server..."
$NODE_CMD serve.js