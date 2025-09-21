#!/bin/bash

# Script de déploiement automatique pour GitHub Pages
# Usage: ./deploy.sh "message de commit"

echo "🚀 Déploiement du portfolio..."

# Vérifier si Git est initialisé
if [ ! -d ".git" ]; then
    echo "❌ Ce n'est pas un repository Git. Initialisation..."
    git init
    git branch -M main
fi

# Ajouter tous les fichiers
echo "📁 Ajout des fichiers..."
git add .

# Commit avec le message fourni ou un message par défaut
if [ -z "$1" ]; then
    COMMIT_MSG="Mise à jour du portfolio - $(date)"
else
    COMMIT_MSG="$1"
fi

echo "💾 Commit: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

# Pousser vers GitHub (remplacer 'origin' par votre remote si différent)
echo "🌐 Envoi vers GitHub..."
git push origin main

echo "✅ Déploiement terminé!"
echo "🔗 Votre portfolio sera disponible sous quelques minutes à l'adresse :"
echo "   https://onsbenmassoud.github.io/portfolio"
