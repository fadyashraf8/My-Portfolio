@echo off
echo ===================================================
echo   PORTFOLIO REDESIGN BRANCH PUSHER
echo ===================================================
echo.

:: Check git status
echo Checking repository status...
git status
echo.

:: Create new branch
echo Creating new branch: feature/redesign ...
git checkout -b feature/redesign
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Failed to create branch, checking out existing...
    git checkout feature/redesign
)
echo.

:: Add files
echo Staging changes...
git add .
echo.

:: Commit
echo Committing changes...
git commit -m "feat: complete portfolio redesign with premium layout, Outfit font, and theme toggling"
echo.

:: Push
echo Pushing feature/redesign to GitHub...
git push origin feature/redesign
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Error pushing branch. Please make sure your GitHub origin is set up and authenticated.
) else (
    echo.
    echo ===================================================
    echo   SUCCESS: Portfolio redesign pushed to branch!
    echo ===================================================
)

echo.
pause
