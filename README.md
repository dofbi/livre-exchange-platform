# LivreExchange - Plateforme d'échange de livres scolaires

Une plateforme web moderne permettant aux parents d'échanger ou de vendre des livres scolaires au sein de leur communauté au Sénégal.

## 🚀 Fonctionnalités

### ✅ Implémentées
- **Page d'accueil** avec présentation et livres en vedette
- **Catalogue de livres** avec recherche et filtres avancés
- **Ajout de livres** avec formulaire complet
- **Profil utilisateur** avec historique et statistiques
- **Forums communautaires** avec catégories et discussions
- **Système de points** pour les échanges
- **Design responsive** adapté mobile et desktop
- **Navigation intuitive** avec menu principal

### 🔄 À développer (avec Supabase)
- Authentification utilisateur
- Base de données PostgreSQL
- Stockage d'images
- Système d'échanges en temps réel
- Notifications
- Géolocalisation

## 🛠 Technologies utilisées

- **Frontend**: Astro.js + React + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Déploiement**: Vercel

## 📁 Structure du projet

```
livre-exchange-platform/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── BookCard.astro
│   │   ├── QuickFilters.astro
│   │   ├── SearchFilters.astro
│   │   └── AddBookForm.tsx
│   ├── layouts/             # Layouts de page
│   │   └── Layout.astro
│   ├── pages/               # Pages de l'application
│   │   ├── index.astro      # Page d'accueil
│   │   ├── livres.astro     # Catalogue des livres
│   │   ├── ajouter.astro    # Ajout de livre
│   │   ├── profil.astro     # Profil utilisateur
│   │   └── forums.astro     # Forums communautaires
│   ├── lib/                 # Utilitaires
│   │   └── supabase.ts
│   └── types/               # Types TypeScript
│       └── database.ts
├── supabase/
│   └── migrations/          # Migrations de base de données
└── public/                  # Assets statiques
```

## 🗄 Base de données

### Tables principales

1. **users** - Utilisateurs de la plateforme
2. **books** - Catalogue des livres
3. **listings** - Exemplaires disponibles
4. **exchanges** - Historique des échanges
5. **reviews** - Évaluations des échanges

## 🎨 Design et UX

- **Couleurs principales**: Vert (#059669) et bleu pour les accents
- **Typographie**: Police système optimisée pour la lisibilité
- **Responsive**: Adapté aux écrans mobiles, tablettes et desktop
- **Accessibilité**: Contrastes respectés, navigation au clavier

## 🚀 Installation et développement

```bash
# Cloner le projet
git clone [url-du-repo]
cd livre-exchange-platform

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Remplir les clés Supabase dans .env

# Lancer le serveur de développement
npm run dev
```

## 📱 Pages disponibles

- **/** - Page d'accueil avec livres en vedette
- **/livres** - Catalogue avec recherche et filtres
- **/ajouter** - Formulaire d'ajout de livre
- **/profil** - Profil utilisateur et historique
- **/forums** - Forums de discussion communautaires

## 🎯 Système de points

- **+10 points** à l'inscription
- **+5 points** par livre ajouté (max 10 livres)
- **+5 points** par parrainage réussi
- **Bonus saisonniers** pendant la rentrée scolaire

## 🌍 Régions supportées

- Dakar
- Thiès
- Saint-Louis
- Kaolack
- Ziguinchor
- Et toutes les autres régions du Sénégal

## 📚 Niveaux scolaires

- Primaire (CP à CM2)
- Collège (6ème à 3ème)
- Lycée (2nde à Terminale)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

Pour toute question ou suggestion, contactez l'équipe de développement.

---

**LivreExchange** - Facilitons l'accès aux livres scolaires au Sénégal 📚🇸🇳
