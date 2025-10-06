# Configuration EmailJS pour le Formulaire de Contact

## ⚠️ État actuel : Formulaire en mode "mailto"

Le formulaire fonctionne actuellement en mode "mailto" - il ouvre votre client email avec le message pré-rempli.

## 🚀 Pour activer l'envoi direct par EmailJS

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Configurer le service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email (Gmail recommandé)
4. Suivez les instructions pour connecter votre compte
5. Notez votre **Service ID**

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template :

```
Nouveau message depuis votre portfolio

De: {{from_name}} ({{from_email}})
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre portfolio web.
```

4. Notez votre **Template ID**

### 4. Obtenir la clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**

### 5. Activer EmailJS dans le code
Dans le fichier `scripts/main.js`, ligne 723 :

1. **Décommentez la ligne d'initialisation** :
```javascript
emailjs.init('VOTRE_CLE_PUBLIQUE_ICI');
```

2. **Commentez le code mailto** (lignes 742-760) et **décommentez le code EmailJS** (lignes 762-785)

3. **Remplacez les valeurs** :
```javascript
emailjs.send('VOTRE_SERVICE_ID', 'VOTRE_TEMPLATE_ID', templateParams)
```

### 6. Test
1. Sauvegardez les fichiers
2. Rechargez votre portfolio
3. Testez le formulaire de contact

## ✅ Fonctionnalités actuelles

✅ **Formulaire fonctionnel** : Aucune erreur JavaScript
✅ **Mode mailto** : Ouvre le client email avec message pré-rempli
✅ **Validation** : Tous les champs sont requis
✅ **Design élégant** : Notifications et animations
✅ **Fallback robuste** : Fonctionne même sans EmailJS

## 📧 Contact direct

En attendant, les visiteurs peuvent vous contacter via :
- **Email** : onsbenmassoud7@gmail.com
- **Téléphone** : +216 55 999 483
- **LinkedIn** : https://www.linkedin.com/in/onsbenmassoud
- **GitHub** : https://github.com/onsben19

Le formulaire ouvrira leur client email avec votre adresse et le message pré-rempli ! 🚀