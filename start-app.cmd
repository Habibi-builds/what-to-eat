@echo off
setlocal
cd /d "%~dp0"
set "APP_NODE=node"
where node >nul 2>nul
if errorlevel 1 set "APP_NODE=%LOCALAPPDATA%\Programs\cursor\resources\app\resources\helpers\node.exe"
if not exist "node_modules\next\dist\bin\next" (
  echo Dependencies are missing. Install Node.js, then run npm install in this folder.
  pause
  exit /b 1
)
echo Opening What to Eat? at http://127.0.0.1:3000
echo Keep this window open while using your planner.
"%APP_NODE%" node_modules\next\dist\bin\next dev --hostname 127.0.0.1
pause
