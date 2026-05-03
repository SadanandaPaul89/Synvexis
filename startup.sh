#!/bin/bash
echo "=== Startup script begin ==="
cd /home/site/wwwroot

echo "=== Starting Next.js ==="
chmod +x node_modules/.bin/next
node_modules/.bin/next start
