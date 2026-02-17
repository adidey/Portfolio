#!/bin/bash
# Export the path to Homebrew binaries so npm can find node
export PATH="/opt/homebrew/bin:$PATH"

echo "Starting Vite server with fixed environment..."
npm run dev
