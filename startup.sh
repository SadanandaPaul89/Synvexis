#!/bin/bash
echo "=== Startup script begin ==="
cd /home/site/wwwroot

echo "=== Installing dependencies ==="
npm install --omit=dev --prefer-offline

echo "=== Starting Next.js ==="
npm start
