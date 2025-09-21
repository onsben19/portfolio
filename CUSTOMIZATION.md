# 📝 Personnalisation du Portfolio

Ce fichier vous aide à personnaliser facilement votre portfolio.

## 🔗 Liens à Mettre à Jour

### Dans `index.html` :

1. **Ligne 58** : Remplacer `#` par votre profil LinkedIn
   ```html
   <a href="VOTRE_LINKEDIN_ICI" class="social-link">
   ```

2. **Ligne 62** : Remplacer `#` par votre GitHub
   ```html
   <a href="VOTRE_GITHUB_ICI" class="social-link">
   ```

3. **Lignes 181, 235, 279** : Remplacer `#` par vos liens de projets
   ```html
   <a href="LIEN_VERS_VOTRE_PROJET" class="project-link">
   ```

### Dans les fichiers de configuration :

1. **✅ `sitemap.xml`** : Déjà configuré avec onsbenmassoud.github.io
2. **✅ `robots.txt`** : Déjà mis à jour
3. **✅ `_config.yml`** : Nom d'utilisateur GitHub configuré

## 📸 Ajouter une Photo de Profil

1. Ajoutez votre photo dans un dossier `images/`
2. Dans `index.html`, section hero, ajoutez :
   ```html
   <div class="hero-image">
       <img src="images/profil.jpg" alt="Ons Ben Massoud">
   </div>
   ```

## 🎨 Changer les Couleurs

Dans `styles/main.css`, modifiez ces variables au début :
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --text-dark: #2c3e50;
    --background: #f8f9fa;
}
```

## 📧 Formulaire de Contact Fonctionnel

### Option 1 : Formspree (Gratuit)
1. Allez sur https://formspree.io
2. Créez un compte
3. Créez un nouveau formulaire
4. Remplacez dans `scripts/main.js` :
   ```javascript
   // Remplacer la simulation par :
   fetch('https://formspree.io/f/VOTRE_ID', {
       method: 'POST',
       body: formData
   })
   ```

### Option 2 : EmailJS
1. https://www.emailjs.com
2. Suivre la documentation
3. Intégrer le SDK dans `index.html`

## 🔄 Mises à Jour Futures

1. Modifiez vos fichiers localement
2. Utilisez le script de déploiement :
   ```powershell
   .\deploy.ps1 "Mise à jour des projets"
   ```

## 📊 Suivre les Performances

### Google Analytics
Ajoutez avant `</head>` dans `index.html` :
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
1. https://search.google.com/search-console
2. Ajoutez votre domaine
3. Vérifiez la propriété
4. Soumettez votre sitemap
