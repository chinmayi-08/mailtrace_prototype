#!/usr/bin/env bash
set -e
command -v node >/dev/null 2>&1 || { echo "Node.js 18+ is required."; exit 1; }
node server.js
