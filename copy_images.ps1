# Copy generated images to the local folder with shorter names
$src = "C:\Users\shali\.gemini\antigravity\brain\fb5b41c9-6a3a-4f6c-a67f-c7af596e3ee9"
$dest = "."

Copy-Item "$src\mother_portrait_*.png" "$dest\mother_portrait.png" -ErrorAction SilentlyContinue
Copy-Item "$src\cute_teddy_bear_*.png" "$dest\cute_teddy_bear.png" -ErrorAction SilentlyContinue
Copy-Item "$src\magical_rose_*.png" "$dest\magical_rose.png" -ErrorAction SilentlyContinue

Write-Host "Images copied successfully! ✨" -ForegroundColor Cyan
