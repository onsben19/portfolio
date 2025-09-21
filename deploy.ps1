# Script de déploiement PowerShell pour GitHub Pages
# Usage: .\deploy.ps1 "message de commit"

param(
    [string]$CommitMessage = "Mise à jour du portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

Write-Host "🚀 Déploiement du portfolio..." -ForegroundColor Green

# Vérifier si Git est initialisé
if (-not (Test-Path ".git")) {
    Write-Host "❌ Ce n'est pas un repository Git. Initialisation..." -ForegroundColor Red
    git init
    git branch -M main
}

# Ajouter tous les fichiers
Write-Host "📁 Ajout des fichiers..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "💾 Commit: $CommitMessage" -ForegroundColor Blue
git commit -m $CommitMessage

# Push vers GitHub
Write-Host "🌐 Envoi vers GitHub..." -ForegroundColor Cyan
git push origin main

Write-Host "✅ Déploiement terminé!" -ForegroundColor Green
Write-Host "🔗 Votre portfolio sera disponible sous quelques minutes à l'adresse :" -ForegroundColor White
Write-Host "   https://onsbenmassoud.github.io/portfolio" -ForegroundColor Yellow
