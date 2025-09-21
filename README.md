# Portfolio - Ons Ben Massoud

Un portfolio élégant et moderne développé pour Ons Ben Massoud, étudiante en ingénierie logicielle à l'ENIT.

## 🚀 Fonctionnalités

- **Design Moderne** : Interface élégante avec animations fluides
- **Responsive** : Optimisé pour tous les appareils (desktop, tablet, mobile)
- **Sections Complètes** :
  - Accueil avec présentation
  - À propos
  - Éducation avec timeline
  - Expérience professionnelle
  - Projets académiques
  - Compétences avec barres de progression animées
  - Formulaire de contact
- **Interactions** : Navigation fluide, animations au scroll, effets visuels
- **Performance** : Code optimisé, lazy loading, animations CSS

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec flexbox/grid, animations, gradients
- **JavaScript (ES6+)** : Interactions, animations, formulaire
- **Font Awesome** : Icônes
- **Google Fonts (Inter)** : Typographie moderne

## 📁 Structure du Projet

```
portfoli/
├── index.html              # Page principale
├── styles/
│   └── main.css           # Styles CSS principaux
├── scripts/
│   └── main.js            # JavaScript interactif
├── .github/
│   └── copilot-instructions.md
└── README.md              # Documentation
```

## 🚀 Installation et Démarrage

### Prérequis
- VS Code avec l'extension "Live Server" installée

### Lancement du projet

1. **Ouvrir le projet dans VS Code**
   ```bash
   code .
   ```

2. **Méthode 1 : Avec Live Server (Recommandée)**
   - Clic droit sur `index.html`
   - Sélectionner "Open with Live Server"
   - Le portfolio s'ouvrira automatiquement dans votre navigateur

3. **Méthode 2 : Ouverture directe**
   - Double-cliquer sur `index.html`
   - Ou ouvrir le fichier dans votre navigateur

## 📱 Fonctionnalités Techniques

### Navigation
- Navigation fixe avec effet de transparence
- Menu hamburger pour mobile
- Liens de navigation avec scroll fluide
- Indicateur de progression de scroll

### Animations
- Animations d'entrée pour tous les éléments
- Barres de progression des compétences animées
- Effet de particules en arrière-plan
- Effet de typing pour le sous-titre
- Hover effects sur les cartes et boutons

### Responsive Design
- Breakpoints : 768px (tablet), 480px (mobile)
- Layout adaptatif avec CSS Grid et Flexbox
- Navigation mobile optimisée
- Images et textes adaptatifs

### Formulaire de Contact
- Validation côté client
- Messages de notification
- Simulation d'envoi
- Design moderne avec animations

## 🎨 Personnalisation

### Couleurs Principales
```css
--primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
--text-dark: #2c3e50
--text-light: #666
--background: #f8f9fa
```

### Modification du Contenu
- Informations personnelles : `index.html` (sections hero, about, contact)
- Expériences : Section `#experience` dans `index.html`
- Projets : Section `#projects` dans `index.html`
- Compétences : Section `#skills` dans `index.html`

### Styles
- Couleurs : Variables CSS dans `styles/main.css`
- Animations : Section animations dans `styles/main.css`
- Responsive : Media queries en bas de `styles/main.css`

## 📧 Configuration du Formulaire de Contact

Le formulaire est actuellement configuré en mode démo. Pour l'activer :

1. **Backend requis** : Configurez un serveur pour traiter les envois
2. **Services tiers** : Utilisez des services comme Formspree, Netlify Forms, ou EmailJS
3. **Modification** : Adaptez la fonction `contactForm.addEventListener` dans `scripts/main.js`

## 🔧 Développement

### Structure du Code
- **HTML** : Structure sémantique avec sections organisées
- **CSS** : Organisation modulaire avec variables et mixins
- **JavaScript** : Fonctions modulaires, observers, animations

### Bonnes Pratiques Implémentées
- Lazy loading pour les images
- Intersection Observer pour les animations
- Smooth scrolling
- Accessibilité (alt texts, navigation clavier)
- SEO friendly (meta tags, structure sémantique)

## 🌐 Compatibilité Navigateurs

- ✅ Chrome (80+)
- ✅ Firefox (75+)
- ✅ Safari (13+)
- ✅ Edge (80+)

## 📈 Optimisations

- **Performance** : CSS et JS optimisés
- **Images** : Lazy loading implémenté
- **Animations** : Utilisation de transform et opacity
- **Mobile** : Touch-friendly, optimisé pour les petits écrans

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Ouvrez une Pull Request

## 🌐 Déploiement en Ligne

### GitHub Pages (Gratuit et Simple)

1. **Créer un compte GitHub** : https://github.com
2. **Créer un nouveau repository** public nommé `portfolio`
3. **Uploader tous les fichiers** de ce dossier
4. **Activer GitHub Pages** :
   - Aller dans Settings → Pages
   - Source : Deploy from branch → main → / (root)
   - Sauvegarder

Votre portfolio sera accessible à : `https://onsbenmassoud.github.io/portfolio`

### Autres Options Rapides

- **Netlify Drop** : https://app.netlify.com/drop (glisser-déposer le dossier)
- **Vercel** : https://vercel.com (import depuis GitHub)
- **Firebase Hosting** : https://firebase.google.com/docs/hosting

### Script de Déploiement Automatique

```bash
# Linux/Mac
./deploy.sh "Message de mise à jour"

# Windows PowerShell
.\deploy.ps1 "Message de mise à jour"
```

## 📊 SEO et Performance

Le portfolio inclut :
- ✅ Meta tags SEO optimisés
- ✅ Open Graph pour réseaux sociaux
- ✅ Sitemap.xml pour les moteurs de recherche
- ✅ Robots.txt configuré
- ✅ Performance optimisée (lazy loading, preconnect)
- ✅ Favicon personnalisé
- ✅ Structure sémantique HTML5

## 📞 Contact

**Ons Ben Massoud**
- 📧 Email : onsbenmassoud@gmail.com
- 📱 Téléphone : +216 50 093 082
- 📍 Localisation : Sousse, Tunisie

## 📄 Licence

Ce projet est sous licence libre. Vous êtes libre de l'utiliser, le modifier et le distribuer.

---

*Portfolio créé avec ❤️ par Ons Ben Massoud - 2025*
