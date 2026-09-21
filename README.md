# gevanDtruk

Site e-commerce simple réalisé avec **Vue.js**, sans backend. Toutes les données (articles, panier, compte) sont stockées dans le `localStorage` du navigateur.

## 🎯 Objectif

gevanDtruk est une plateforme permettant d'acheter et de vendre des articles d'occasion entre particuliers. Le site permet de :

- Parcourir une liste d'articles
- Consulter le détail d'un article
- Ajouter des articles au panier
- Passer en mode « administrateur » pour ajouter ou supprimer des articles

## 🛠️ Stack technique

- [Vue.js 3](https://vuejs.org/) (Composition API, `<script setup>`)
- [Vue Router](https://router.vuejs.org/) pour la navigation
- `localStorage` comme unique moyen de persistance (pas de backend, pas de base de données)

## 🗺️ Routes

| Route            | Page          | Accès               |
|-------------------|---------------|----------------------|
| `/`                | Accueil       | Public               |
| `/articles`        | Liste des articles | Public          |
| `/articles/:id`    | Détail d'un article | Public         |
| `/ajouter`         | Ajouter un article  | Public         |
| `/panier`          | Panier        | Public               |
| `/login`           | Connexion     | Public               |
| `/admin`           | Administration | Admin uniquement (redirection vers `/login` sinon) |

## 👤 Système de rôles

Le site simule un système de rôles simple :

- **user** (rôle par défaut)
- **admin** : peut accéder à `/admin` et supprimer des articles

Le rôle se change depuis la page `/login` en un clic, et est stocké dans le `localStorage` (clé `account`).

> ⚠️ Cette gestion des rôles est purement côté client, à but pédagogique/démonstratif. N'importe qui peut modifier son rôle via la console du navigateur. Sans backend, il n'existe pas de véritable sécurité.

## 💾 Données stockées (localStorage)

| Clé        | Contenu                          | Géré par           |
|------------|-----------------------------------|---------------------|
| `items`    | Liste des articles                | `articleService.js` |
| `basket`   | Contenu du panier                 | `basketService.js`  |
| `account`  | Rôle de l'utilisateur courant      | `accountService.js` |

## 🚀 Lancer le projet

```bash
npm install
npm run dev
```

## 📌 Limitations connues

- Pas de backend : toutes les données sont locales au navigateur (perdues si le `localStorage` est vidé, non partagées entre appareils).
- Pas d'authentification réelle (mot de passe, sessions) : le "login" ne fait que changer un rôle stocké localement.
- Le bouton "Passer commande" du panier n'est pas implémenté.