#!/bin/bash

# Simple static file server using Python's built-in server
# This works in most deployment environments

PORT=${PORT:-5000}
DIRECTORY="public"

echo "Starting static file server on port $PORT"
echo "Serving files from $DIRECTORY directory"

if command -v python3 &> /dev/null; then
    echo "Using Python 3 HTTP server"
    cd $DIRECTORY && python3 -m http.server $PORT --bind 0.0.0.0
elif command -v python &> /dev/null; then
    echo "Using Python 2 HTTP server"
    cd $DIRECTORY && python -m SimpleHTTPServer $PORT
else
    echo "Python not found, trying busybox httpd"
    if command -v busybox &> /dev/null; then
        cd $DIRECTORY && busybox httpd -f -p 0.0.0.0:$PORT
    else
        echo "No suitable HTTP server found"
        exit 1
    fi
fi