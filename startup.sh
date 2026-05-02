#!/bin/bash
echo "=== Startup script begin ==="

cd /home/site/wwwroot

echo "=== Installing dependencies ==="
npm install --production

echo "=== Starting Next.js ==="
npm start
