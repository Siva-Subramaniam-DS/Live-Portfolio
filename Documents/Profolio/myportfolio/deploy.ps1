# Portfolio Deployment Script
Write-Host "🚀 Starting portfolio deployment..." -ForegroundColor Green

# Step 1: Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green

# Step 2: Switch to main branch
Write-Host "🔄 Switching to main branch..." -ForegroundColor Yellow
git checkout main

# Step 3: Copy built files to root
Write-Host "📁 Copying built files..." -ForegroundColor Yellow
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# Step 4: Add and commit changes
Write-Host "📝 Committing changes..." -ForegroundColor Yellow
git add .
git commit -m "Deploy: Updated portfolio $(Get-Date -Format 'yyyy-MM-dd HH:mm')"

# Step 5: Push to GitHub
Write-Host "⬆️ Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your portfolio is now live!" -ForegroundColor Cyan
} else {
    Write-Host "❌ Push failed!" -ForegroundColor Red
}

# Step 6: Switch back to master branch
Write-Host "🔄 Switching back to master branch..." -ForegroundColor Yellow
git checkout master

Write-Host "✨ Deployment process completed!" -ForegroundColor Green 