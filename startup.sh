#!/bin/bash
echo "=== Startup script begin ==="
cd /home/site/wwwroot

if [ -f "node_modules.tar.gz" ] && [ ! -f "node_modules/.bin/next" ]; then
  echo "=== Extracting node_modules ==="
  tar -xzf node_modules.tar.gz
fi

echo "=== Starting Next.js ==="
npm start
