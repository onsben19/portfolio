# Instructions pour ajouter votre CV

## 📁 Comment importer votre CV

### 1. Préparer votre CV
- **Format recommandé** : PDF
- **Nom du fichier** : `CV_Ons_Ben_Massoud.pdf`
- **Taille recommandée** : Moins de 5 MB

### 2. Placer le fichier
1. Copiez votre fichier CV au format PDF
2. Renommez-le : `CV_Ons_Ben_Massoud.pdf`
3. Placez-le dans le dossier : `/Users/user/Desktop/portf/portfolio/documents/`

### 3. Structure des fichiers
```
portfolio/
├── documents/
│   └── CV_Ons_Ben_Massoud.pdf  ← Votre CV ici
├── images/
├── scripts/
├── styles/
└── index.html
```

## ✅ Fonctionnalités implémentées

### **Bouton de téléchargement**
- ✅ Nouveau bouton "Télécharger CV" dans la section hero
- ✅ Icône de téléchargement
- ✅ Traductions français/anglais
- ✅ Attribut `download` pour forcer le téléchargement

### **Design intégré**
- ✅ Style `btn-outline` transparent élégant
- ✅ Animations et effets hover
- ✅ Responsive sur mobile/desktop
- ✅ Cohérence avec le design existant

### **Placement optimal**
- ✅ Entre "Me contacter" et "Voir mes projets"
- ✅ Visible dès l'arrivée sur le site
- ✅ Accessible facilement

## 🔄 Pour modifier le nom du CV

Si vous voulez changer le nom du fichier CV :

1. **Dans `index.html`**, ligne ~95 :
```html
<a href="documents/NOUVEAU_NOM.pdf" download="NOUVEAU_NOM.pdf">
```

2. **Renommez le fichier** dans le dossier `documents/`

## 📱 Test

Après avoir ajouté votre CV :
1. Rechargez votre portfolio
2. Cliquez sur "Télécharger CV"
3. Le fichier doit se télécharger automatiquement

## 🔄 Alternatives

Si vous n'avez pas encore de CV PDF :

### Option 1 : Redirection vers LinkedIn
```html
<a href="https://www.linkedin.com/in/votre-profil" target="_blank">
```

### Option 2 : Bouton temporaire désactivé
```html
<a href="#" class="btn btn-outline disabled" onclick="alert('CV bientôt disponible')">
```

## 💡 Conseils

- **Gardez votre CV à jour** : Mettez à jour le fichier régulièrement
- **Nom professionnel** : Utilisez un nom clair comme `CV_Ons_Ben_Massoud.pdf`
- **Taille optimisée** : Compressez le PDF si nécessaire
- **Test multi-navigateurs** : Vérifiez que le téléchargement fonctionne partout

Une fois votre CV ajouté, les recruteurs pourront facilement le télécharger depuis votre portfolio ! 🚀