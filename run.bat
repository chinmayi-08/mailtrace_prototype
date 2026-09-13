@echo off
setlocal
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo Node.js is not installed. Install Node.js 18+ first.
  pause
  exit /b 1
)
node server.js
pause
