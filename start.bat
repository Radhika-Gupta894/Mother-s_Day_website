@echo off
echo ==========================================
echo   Happy Mother's Day Website Starter
echo ==========================================
echo.
echo 1. Opening your website at http://localhost:8000
echo 2. Starting a local server...
echo.
echo (Keep this window open while viewing the site)
echo.

start http://localhost:8000
python -m http.server 8000
