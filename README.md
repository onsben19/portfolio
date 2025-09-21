# Portfolio - Ons Ben Massoud

An elegant and modern portfolio developed for Ons Ben Massoud, software engineering student at ENIT.

## 🚀 Features

- **Modern Design** : Elegant interface with smooth animations
- **Responsive** : Optimized for all devices (desktop, tablet, mobile)
- **Complete Sections** :
  - Home with introduction
  - About
  - Education with timeline
  - Professional experience
  - Academic projects
  - Skills with animated progress bars
  - Contact form
- **Interactions** : Smooth navigation, scroll animations, visual effects
- **Performance** : Optimized code, lazy loading, CSS animations

## 🛠️ Technologies Used

- **HTML5** : Semantic structure
- **CSS3** : Modern styles with flexbox/grid, animations, gradients
- **JavaScript (ES6+)** : Interactions, animations, form handling
- **Font Awesome** : Icons
- **Google Fonts (Inter)** : Modern typography

## 📁 Project Structure

```
portfoli/
├── index.html              # Main page
├── styles/
│   └── main.css           # Main CSS styles
├── scripts/
│   └── main.js            # Interactive JavaScript
├── .github/
│   └── copilot-instructions.md
└── README.md              # Documentation
```

## 🚀 Installation and Setup

### Prerequisites
- VS Code with "Live Server" extension installed

### Running the project

1. **Open project in VS Code**
   ```bash
   code .
   ```

2. **Method 1: With Live Server (Recommended)**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Portfolio will automatically open in your browser

3. **Method 2: Direct opening**
   - Double-click on `index.html`
   - Or open the file in your browser

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
