# Déploiement sur o2switch (hébergement mutualisé)

Principe : on pousse le code avec `git push`, un hook côté serveur construit
l'application (installe les dépendances, génère le client Prisma **sur le
serveur** — important, voir la note plus bas — applique les migrations, build
Nuxt, redémarre l'app). Rien n'est poussé depuis Windows autrement que par
git, donc pas besoin de `rsync` (absent de Git Bash).

## Prérequis, une seule fois

### 0. Identité git locale

Ce dossier n'avait pas encore de dépôt git. Il a été initialisé (`git init`)
mais aucune identité n'est configurée sur cette machine — configurez la
vôtre puis faites le premier commit :

```bash
git config --global user.name "Votre nom"
git config --global user.email "vous@example.com"
git add -A
git commit -m "Initial commit"
```

### 1. Base de données MySQL

Dans cPanel : **Bases de données MySQL** → créer une base + un utilisateur
MySQL, et lui donner tous les droits sur la base. Notez l'hôte (souvent
`localhost`), le nom de la base, l'utilisateur et le mot de passe — ils sont
généralement préfixés par votre identifiant cPanel
(`votrelogincpanel_caissebi`, etc.).

### 2. Application Node.js

Dans cPanel : **Configurer une application Node.js** → créer une application :
- Version de Node : la plus récente disponible (20+).
- Racine du dossier de l'application : ex. `caissebi`.
- URL de l'application : votre domaine ou sous-domaine.
- **Fichier de démarrage de l'application** : `.output/server/index.mjs`
  (c'est le point d'entrée que `nuxt build` génère — ne pas mettre autre
  chose).

Une fois créée, cPanel affiche deux informations à récupérer :
- Le chemin absolu du dossier de l'application (→ `REMOTE_APP_PATH`).
- La commande `source /home/.../nodevenv/caissebi/20/bin/activate` (→
  `REMOTE_NODE_ENV_ACTIVATE`, sans le `source ` du début).

Toujours dans cet écran, section **Variables d'environnement de
l'application**, ajoutez :
- `DATABASE_URL` = `mysql://UTILISATEUR:MOTDEPASSE@localhost:3306/BASE` (avec
  les identifiants de l'étape 1)
- `NUXT_SESSION_PASSWORD` = une chaîne aléatoire d'au moins 32 caractères
  (générez-en une, ex. `openssl rand -base64 32`)
- `NODE_ENV` = `production`

### 3. Configurer le script de déploiement

```bash
cp deploy/deploy.config.example deploy/deploy.config
```

Remplissez `deploy/deploy.config` avec les valeurs de cPanel (étapes 1-2).
Ce fichier est ignoré par git (il contient des infos de connexion) —
gardez-le uniquement en local.

### 4. Initialiser le dépôt distant

```bash
bash deploy/setup-remote.sh
```

Crée un dépôt git nu sur le serveur et le hook `post-receive` qui fera tout
le travail à chaque déploiement.

## Déployer

À chaque fois que vous voulez déployer une nouvelle version :

```bash
bash deploy/deploy.sh
```

Ça pousse la branche courante ; le serveur enchaîne automatiquement
`npm ci`, `prisma generate`, `prisma migrate deploy`, `npm run build`, puis
redémarre l'application. Ça peut prendre plusieurs minutes la première fois.

### Premier déploiement seulement : peupler la base

```bash
ssh -p <SSH_PORT> <SSH_USER>@<SSH_HOST>
source <REMOTE_NODE_ENV_ACTIVATE>
cd <REMOTE_APP_PATH>
npm run db:seed
```

Crée l'entreprise de démo et les comptes (admin, manager, caissier — voir
`prisma/seed.ts` pour les identifiants).

## Notes importantes

- **Le client Prisma est généré sur le serveur, pas sur Windows.** Le moteur
  Prisma est un binaire natif spécifique à l'OS/la libc — celui généré sur
  Windows ne fonctionnerait pas sur le Linux d'o2switch. C'est pour ça que le
  hook fait tourner `npx prisma generate` lui-même après chaque push, plutôt
  que de recevoir un dossier `generated/` déjà construit.
- **`public/uploads/` (photos produits) n'est pas versionné** (voir
  `.gitignore`) et n'est donc jamais touché par le déploiement — les fichiers
  déjà présents sur le serveur restent en place d'un déploiement à l'autre.
- **`.env` n'est pas non plus versionné** — les variables de prod vivent
  uniquement dans l'écran "Variables d'environnement" de cPanel (étape 2).
- Si le build échoue faute de mémoire/CPU sur le mutualisé (`nuxt build`
  peut être gourmand), l'alternative est de builder en local (`npm run
  build`) et d'envoyer uniquement le dossier `.output/` par `scp -r
  .output <SSH_USER>@<SSH_HOST>:<REMOTE_APP_PATH>/`, en gardant quand même
  `prisma generate` + `prisma migrate deploy` à exécuter côté serveur (pour
  la raison ci-dessus).
- Pour suivre les logs de l'application après démarrage, cPanel propose un
  visualiseur de logs dans l'écran de l'application Node.js.
