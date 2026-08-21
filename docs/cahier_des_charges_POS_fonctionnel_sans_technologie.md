# Cahier des charges fonctionnel — Application POS

## 1. Présentation du projet

Le projet consiste à développer une application de gestion de point de vente (POS) destinée principalement aux :

- restaurants ;
- boutiques ;
- commerces ;
- petites entreprises.

L'application doit être moderne, rapide, simple à utiliser et adaptée aux ordinateurs, tablettes et smartphones.

Le cahier des charges est volontairement **indépendant de toute technologie**. Le choix de l'architecture technique, du langage, du framework, de la base de données et de l'hébergement sera défini ultérieurement selon les contraintes du projet.

---

# 2. Objectif général

L'application doit permettre à une entreprise de gérer simplement :

- ses informations ;
- ses utilisateurs ;
- ses produits ;
- ses catégories ;
- ses stocks ;
- ses caisses ;
- ses sessions de caisse ;
- ses ventes ;
- ses paiements ;
- ses tickets ;
- ses inventaires ;
- ses rapports.

L'objectif principal est de créer un POS **simple, rapide, tactile et professionnel**, avec une expérience proche des solutions modernes comme Odoo POS ou Loyverse.

---

# 3. Principes généraux de l'application

L'application doit respecter les principes suivants :

1. Simplicité
2. Rapidité
3. Fluidité
4. Interface tactile
5. Faible nombre de clics
6. Navigation intuitive
7. Bonne lisibilité
8. Adaptation ordinateur / tablette / smartphone
9. Sécurité des données
10. Traçabilité des opérations

Le caissier doit pouvoir passer rapidement de :

```text
Ouverture de caisse
       ↓
Sélection des produits
       ↓
Paiement
       ↓
Ticket
       ↓
Nouvelle vente
```

---

# 4. Profils utilisateurs

Le système comprend quatre niveaux principaux.

## 4.1 Superadministrateur

Le Superadministrateur est l'administrateur de la plateforme.

Il peut :

- gérer les entreprises ;
- créer les comptes propriétaires ;
- générer les licences ;
- activer une licence ;
- renouveler une licence ;
- suspendre une licence ;
- consulter l'état des licences ;
- consulter les informations générales des entreprises.

Il possède un accès global à la plateforme.

---

# 5. Système de licence

Chaque entreprise utilise le logiciel avec une licence.

## Durée

La licence standard est valable pendant 30 jours.

Exemple :

```text
Licence : POS-XXXX-XXXX
Date de début : 01/09/2026
Date d'expiration : 30/09/2026
Durée : 30 jours
Statut : ACTIVE
```

## États possibles

- Active
- Expirée
- Suspendue
- En attente

## Licence expirée

Lorsque la licence arrive à expiration :

```text
LICENCE EXPIRÉE

Votre licence n'est plus valide.

Veuillez contacter l'administrateur
pour renouveler votre accès.
```

L'utilisateur ne doit plus pouvoir accéder aux fonctionnalités opérationnelles tant qu'une licence valide n'est pas disponible.

---

# 6. Propriétaire

Le propriétaire représente l'entreprise utilisant le logiciel.

Il peut :

- configurer l'entreprise ;
- gérer les utilisateurs ;
- gérer les produits ;
- gérer les catégories ;
- gérer les stocks ;
- gérer les caisses ;
- consulter les ventes ;
- consulter les rapports ;
- effectuer des inventaires ;
- clôturer une caisse ;
- consulter les journaux de caisse.

---

# 7. Manager

Le Manager dispose des droits opérationnels importants.

Il peut :

- gérer les produits ;
- gérer les catégories ;
- gérer les stocks ;
- effectuer des inventaires ;
- consulter les ventes ;
- consulter les rapports ;
- ouvrir une caisse ;
- fermer une caisse ;
- gérer les opérations de caisse.

Il ne peut pas :

- modifier les paramètres principaux de l'entreprise ;
- gérer la licence ;
- modifier les droits du propriétaire ;
- modifier les paramètres sensibles.

---

# 8. Caissier

Le Caissier dispose d'un accès limité au fonctionnement de la caisse.

Il peut :

- ouvrir une caisse ;
- saisir le fond de démarrage ;
- effectuer des ventes ;
- encaisser ;
- imprimer un ticket ;
- consulter les ventes de sa session ;
- fermer sa caisse lorsqu'il possède cette autorisation.

Il ne peut pas :

- gérer les utilisateurs ;
- modifier les paramètres ;
- modifier les produits ;
- modifier les prix ;
- gérer les stocks ;
- consulter les rapports globaux.

---

# 9. Gestion de l'entreprise

Le propriétaire peut configurer :

## Informations générales

- Nom de l'entreprise
- Nom commercial
- Adresse
- Téléphone
- Email
- Identifiant fiscal / NINEA facultatif
- Logo

## Devise

Le propriétaire peut sélectionner la devise utilisée dans le logiciel.

Exemples :

- FCFA
- EUR
- USD
- GBP

La devise est utilisée dans :

- produits ;
- ventes ;
- tickets ;
- caisse ;
- rapports.

---

# 10. Configuration des tickets

Le propriétaire peut configurer le ticket de caisse.

## Formats disponibles

- 58 mm
- 80 / 88 mm
- A5

## Éléments configurables

- Logo
- Nom de l'entreprise
- Adresse
- Téléphone
- Message d'en-tête
- Message de pied de ticket

Le ticket doit pouvoir être :

- imprimé ;
- réimprimé ;
- généré en PDF.

---

# 11. Gestion des produits

La fiche produit doit rester simple.

## Informations

- Libellé
- Catégorie
- Type
- Produit stockable : Oui / Non
- Quantité en stock
- Seuil d'alerte
- Prix d'achat
- Prix de vente
- Code-barres facultatif
- Référence facultative
- Image facultative

## Valeurs par défaut

```text
Prix d'achat : 0
Prix de vente : 0
Seuil d'alerte : 5
```

---

# 12. Produits stockables et non stockables

## Produit stockable

Le stock est automatiquement diminué lors d'une vente.

Exemple :

```text
Stock : 20
Vente : 2
Nouveau stock : 18
```

## Produit non stockable

La vente n'affecte pas le stock.

Exemples :

- livraison ;
- service ;
- prestation ;
- consultation.

---

# 13. Gestion des catégories

Les produits peuvent être regroupés par catégories.

Exemple restaurant :

```text
BOISSONS
├── Eau
├── Soda
├── Jus
└── Café

PLATS
├── Poulet
├── Riz
├── Burger
└── Pizza

DESSERTS
├── Glace
├── Gâteau
└── Fruits

SERVICES
├── Livraison
└── Autres
```

Les catégories doivent être accessibles directement depuis l'interface POS.

---

# 14. Gestion du stock

La gestion du stock doit rester simple.

## Entrée

Exemple :

```text
Produit : Coca-Cola
Quantité : +50
Motif : Réception
```

## Sortie

Exemple :

```text
Produit : Coca-Cola
Quantité : -3
Motif : Produit cassé
```

## Ajustement

Exemple :

```text
Stock système : 20
Stock réel : 18
Écart : -2
```

---

# 15. Motifs de sortie de stock

Motifs proposés :

- Produit gâté
- Produit périmé
- Produit cassé
- Perte
- Vol
- Utilisation interne
- Don
- Autre

Une observation peut être ajoutée.

---

# 16. Inventaire

L'utilisateur autorisé peut effectuer un inventaire.

Exemple :

```text
Produit       Théorique    Réel    Écart

Coca-Cola        25         23      -2
Eau              40         40       0
Jus              15         18      +3
```

Après validation :

```text
Stock théorique
       ↓
Comptage réel
       ↓
Comparaison
       ↓
Validation
       ↓
Mise à jour
       ↓
Historique
```

---

# 17. Alertes de stock

Le seuil d'alerte par défaut est de 5 unités.

Exemple :

```text
Coca-Cola

Stock actuel : 4
Seuil : 5

⚠ STOCK FAIBLE
```

Le tableau de bord doit afficher les produits nécessitant un réapprovisionnement.

---

# 18. Gestion des caisses

Une caisse fonctionne avec des sessions.

Une session commence à l'ouverture et se termine à la fermeture.

## Ouverture

L'utilisateur doit saisir :

- fond de démarrage ;
- date et heure automatiques ;
- utilisateur.

Exemple :

```text
OUVERTURE DE CAISSE

Utilisateur : Mamadou

Fond de démarrage :
20 000 FCFA

[ OUVRIR LA CAISSE ]
```

---

# 19. Plusieurs sessions par jour

Le système doit permettre plusieurs sessions dans une même journée.

Exemple :

```text
Session 1
08:00 → 13:00

Session 2
13:30 → 18:00

Session 3
18:30 → 23:00
```

Chaque session conserve :

- heure d'ouverture ;
- heure de fermeture ;
- utilisateur ;
- fond initial ;
- ventes ;
- paiements ;
- entrées ;
- sorties ;
- montant théorique ;
- montant réellement compté ;
- écart.

---

# 20. Clôture de caisse

Lors de la fermeture :

```text
Fond initial          20 000
Ventes espèces        75 000
Entrées                    0
Sorties                5 000
--------------------------------
Total théorique       90 000

Montant compté        89 500

Écart                    -500
```

La clôture est enregistrée dans le journal de caisse.

Le propriétaire ou le manager peut clôturer une session ouverte si nécessaire.

---

# 21. POS — Interface principale

## Objectif

Le POS doit être conçu comme une véritable interface de caisse et non comme une boutique e-commerce.

L'interface doit être inspirée de l'expérience utilisateur de :

- Odoo POS
- Loyverse

## Caractéristiques

- tactile ;
- rapide ;
- visuelle ;
- claire ;
- responsive ;
- adaptée aux écrans larges ;
- adaptée aux tablettes ;
- adaptée aux smartphones ;
- utilisable avec clavier et souris.

## Pas de panier latéral classique

Il ne doit pas y avoir une grande colonne panier fixe comme sur une boutique en ligne.

La commande en cours doit être accessible de manière naturelle dans l'interface.

---

# 22. Interface POS — Écran principal

Structure indicative :

```text
┌──────────────────────────────────────────────────────────────┐
│ ☰   CAISSE 01        🔎 Rechercher       👤 Mamadou         │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ TOUT | BOISSONS | PLATS | MENUS | DESSERTS | SERVICES       │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│ │  COCA    │ │   EAU    │ │   JUS    │ │  CAFÉ    │         │
│ │  500     │ │   300    │ │   700    │ │   500    │         │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│                                                              │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│ │ BURGER   │ │  POULET  │ │  PIZZA   │ │  MENU    │         │
│ │  5 000   │ │  4 000   │ │  6 000   │ │  7 500   │         │
│ └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│ 3 ARTICLES                         TOTAL : 6 200 FCFA       │
│                                                              │
│              [ ANNULER ]       [ PAYER 6 200 ]              │
└──────────────────────────────────────────────────────────────┘
```

Cette maquette est indicative. Le design final doit être moderne et optimisé pour le tactile.

---

# 23. Interface POS — Sélection d'un produit

Lorsqu'un utilisateur appuie sur un produit :

```text
COCA-COLA
500 FCFA
```

Le produit est immédiatement ajouté à la commande.

Un nouvel appui augmente la quantité.

```text
1 appui  → 1 unité
2 appuis → 2 unités
3 appuis → 3 unités
```

Le système doit éviter les étapes inutiles.

---

# 24. Interface POS — Commande en cours

La commande en cours doit pouvoir être consultée rapidement.

Elle permet :

- voir les articles ;
- modifier la quantité ;
- supprimer un article ;
- vider la commande ;
- annuler la vente ;
- appliquer une remise si autorisée ;
- revenir aux produits.

---

# 25. Interface POS — Recherche

La recherche est accessible en permanence.

Recherche par :

- nom ;
- référence ;
- code-barres.

Le système peut être utilisé avec :

- douchette USB ;
- lecteur Bluetooth ;
- caméra smartphone.

---

# 26. Interface POS — Paiement

Bouton principal :

```text
[PAYER 6 200 FCFA]
```

L'écran de paiement affiche :

```text
┌────────────────────────────────────┐
│          TOTAL À PAYER             │
│                                    │
│             6 200 FCFA             │
│                                    │
│ [ ESPÈCES ] [ CARTE ] [ MOBILE ]  │
│                                    │
│ Montant reçu :                     │
│ [ 10 000 FCFA ]                    │
│                                    │
│ Monnaie : 3 800 FCFA               │
│                                    │
│       [ VALIDER LE PAIEMENT ]      │
└────────────────────────────────────┘
```

---

# 27. Interface POS — Fin de vente

Après paiement :

```text
VENTE VALIDÉE

Vente #000125
Total : 6 200 FCFA

[ IMPRIMER ]
[ PDF ]
[ NOUVELLE VENTE ]
```

---

# 28. Interface Tableau de bord

Le tableau de bord du propriétaire et du manager doit afficher les informations essentielles.

```text
┌─────────────────────────────────────────────┐
│ TABLEAU DE BORD                             │
├──────────────┬──────────────┬───────────────┤
│ CA DU JOUR   │ VENTES       │ STOCK FAIBLE  │
│ 250 000      │ 87           │ 5             │
├──────────────┴──────────────┴───────────────┤
│                                             │
│             VENTES DU JOUR                  │
│                                             │
│       Graphique / évolution                 │
│                                             │
├──────────────────────────┬──────────────────┤
│ STOCK FAIBLE             │ CAISSES          │
│ Coca-Cola         4      │ Session #12      │
│ Eau               3      │ Ouverte          │
│ Jus               2      │                  │
└──────────────────────────┴──────────────────┘
```

---

# 29. Interface Gestion des produits

L'écran doit comporter :

```text
┌────────────────────────────────────────────────────┐
│ PRODUITS                              [ + AJOUTER ]│
├────────────────────────────────────────────────────┤
│ 🔎 Rechercher                                      │
├────────────┬────────────┬──────────┬───────────────┤
│ Produit    │ Catégorie  │ Stock    │ Prix vente    │
├────────────┼────────────┼──────────┼───────────────┤
│ Coca-Cola  │ Boissons   │ 25       │ 500           │
│ Eau        │ Boissons   │ 40       │ 300           │
│ Burger     │ Plats      │ 10       │ 5 000         │
└────────────┴────────────┴──────────┴───────────────┘
```

Actions :

- ajouter ;
- modifier ;
- désactiver ;
- rechercher ;
- filtrer ;
- consulter.

---

# 30. Interface Fiche produit

```text
┌─────────────────────────────────────┐
│ NOUVEAU PRODUIT                     │
├─────────────────────────────────────┤
│ Libellé                             │
│ [ Coca-Cola                       ] │
│                                     │
│ Catégorie                           │
│ [ Boissons                        ] │
│                                     │
│ Type                                │
│ [ Produit                         ] │
│                                     │
│ ☑ Produit stockable                 │
│                                     │
│ Prix d'achat                        │
│ [ 300                             ] │
│                                     │
│ Prix de vente                       │
│ [ 500                             ] │
│                                     │
│ Seuil d'alerte                      │
│ [ 5                               ] │
│                                     │
│ Code-barres                         │
│ [                                 ] │
│                                     │
│        [ ANNULER ] [ ENREGISTRER ]  │
└─────────────────────────────────────┘
```

---

# 31. Interface Gestion du stock

```text
┌────────────────────────────────────────────────────┐
│ STOCK                                  [ INVENTAIRE ]│
├────────────────────────────────────────────────────┤
│ 🔎 Rechercher       [ Tous ] [ Faible ]             │
├────────────┬───────────┬──────────┬─────────────────┤
│ Produit    │ Stock     │ Seuil    │ État            │
├────────────┼───────────┼──────────┼─────────────────┤
│ Coca-Cola  │ 25        │ 5        │ Normal          │
│ Eau        │ 4         │ 5        │ ⚠ Faible        │
│ Jus        │ 2         │ 5        │ ⚠ Faible        │
└────────────┴───────────┴──────────┴─────────────────┘
```

---

# 32. Interface Mouvement de stock

```text
┌─────────────────────────────────────┐
│ MOUVEMENT DE STOCK                   │
├─────────────────────────────────────┤
│ Produit                             │
│ [ Coca-Cola                       ] │
│                                     │
│ Type                                │
│ (•) Entrée   ( ) Sortie             │
│                                     │
│ Quantité                            │
│ [ 10                              ] │
│                                     │
│ Motif                              │
│ [ Réception                       ] │
│                                     │
│ Observation                         │
│ [                                 ] │
│                                     │
│          [ VALIDER ]                │
└─────────────────────────────────────┘
```

---

# 33. Interface Inventaire

```text
┌────────────────────────────────────────────────────┐
│ INVENTAIRE                                         │
├────────────────────────────────────────────────────┤
│ Produit       Théorique      Réel       Écart       │
├────────────────────────────────────────────────────┤
│ Coca-Cola         25          23          -2        │
│ Eau               40          40           0        │
│ Jus               15          18          +3        │
├────────────────────────────────────────────────────┤
│                     [ VALIDER L'INVENTAIRE ]       │
└────────────────────────────────────────────────────┘
```

---

# 34. Interface Gestion de caisse

```text
┌───────────────────────────────────────────────┐
│ CAISSE                                         │
├───────────────────────────────────────────────┤
│ Session #12                                    │
│                                               │
│ Ouverture : 08:15                             │
│ Caissier : Mamadou                            │
│                                               │
│ Fond initial : 20 000 FCFA                    │
│ Ventes : 125 000 FCFA                         │
│ Espèces : 90 000 FCFA                         │
│ Carte : 20 000 FCFA                           │
│ Mobile Money : 15 000 FCFA                    │
│                                               │
│ [ VOIR LE JOURNAL ]                            │
│                                               │
│             [ FERMER LA CAISSE ]              │
└───────────────────────────────────────────────┘
```

---

# 35. Interface Ouverture de caisse

```text
┌────────────────────────────────────┐
│ OUVERTURE DE CAISSE                │
├────────────────────────────────────┤
│ Caissier : Mamadou                 │
│ Date : 19/08/2026                  │
│ Heure : 08:15                      │
│                                    │
│ Fond de démarrage                  │
│ [ 20 000 FCFA ]                    │
│                                    │
│        [ OUVRIR LA CAISSE ]        │
└────────────────────────────────────┘
```

---

# 36. Interface Fermeture de caisse

```text
┌────────────────────────────────────────┐
│ FERMETURE DE CAISSE                    │
├────────────────────────────────────────┤
│ Fond initial          20 000            │
│ Ventes espèces        75 000            │
│ Entrées                    0            │
│ Sorties                5 000            │
│                                        │
│ Total théorique       90 000            │
│                                        │
│ Montant compté                         │
│ [ 89 500 FCFA ]                        │
│                                        │
│ Écart                  -500             │
│                                        │
│ [ ANNULER ]    [ CONFIRMER FERMETURE ]│
└────────────────────────────────────────┘
```

---

# 37. Interface Historique des ventes

```text
┌────────────────────────────────────────────────────┐
│ VENTES                                             │
├────────────────────────────────────────────────────┤
│ Date       N° vente    Caissier    Paiement  Total │
├────────────────────────────────────────────────────┤
│ 19/08      #000125     Mamadou     Espèces   6 200 │
│ 19/08      #000124     Awa         Carte     8 500 │
│ 19/08      #000123     Mamadou     Mobile    4 000 │
└────────────────────────────────────────────────────┘
```

Filtres :

- date ;
- caissier ;
- session ;
- paiement ;
- montant.

---

# 38. Interface Rapports

## Rapports disponibles

### Ventes

- chiffre d'affaires ;
- nombre de ventes ;
- ventes par période ;
- ventes par caissier ;
- ventes par produit ;
- ventes par catégorie.

### Caisse

- sessions ;
- ouvertures ;
- fermetures ;
- fonds initiaux ;
- montants théoriques ;
- montants réels ;
- écarts.

### Stock

- stock actuel ;
- stock faible ;
- entrées ;
- sorties ;
- pertes ;
- ajustements.

Les rapports doivent être filtrables par période.

---

# 39. Interface Utilisateurs

```text
┌────────────────────────────────────────────────────┐
│ UTILISATEURS                         [ + AJOUTER ] │
├────────────────────────────────────────────────────┤
│ Nom          Email          Rôle        Statut      │
├────────────────────────────────────────────────────┤
│ Mamadou      xxx@xxx.com    Caissier    Actif      │
│ Awa          xxx@xxx.com    Manager     Actif      │
│ Abdou        xxx@xxx.com    Propriétaire Actif    │
└────────────────────────────────────────────────────┘
```

Actions :

- ajouter ;
- modifier ;
- désactiver ;
- changer le rôle ;
- réinitialiser l'accès.

---

# 40. Interface Paramètres

```text
PARAMÈTRES

├── Entreprise
│
├── Logo
│
├── Devise
│
├── Ticket
│   ├── Format
│   ├── En-tête
│   └── Pied de ticket
│
└── Permissions
```

Les paramètres sensibles sont accessibles uniquement au propriétaire.

---

# 41. Interface Superadministrateur

Le Superadministrateur possède un tableau de bord global.

```text
┌─────────────────────────────────────────────────────┐
│ ADMINISTRATION PLATEFORME                           │
├──────────────┬──────────────┬───────────────────────┤
│ ENTREPRISES  │ LICENCES     │ ACTIVES               │
│ 120          │ 120          │ 95                    │
├──────────────┴──────────────┴───────────────────────┤
│                                                     │
│ ENTREPRISES                                         │
│                                                     │
│ Entreprise       Licence       Expiration    Statut │
│ Restaurant A     XXXX          30/09         Actif  │
│ Boutique B       XXXX          12/09         Actif  │
│ Restaurant C     XXXX          01/09         Expiré │
└─────────────────────────────────────────────────────┘
```

Actions :

- créer une entreprise ;
- créer une licence ;
- renouveler une licence ;
- suspendre ;
- consulter ;
- rechercher.

---

# 42. Interface Licence

```text
┌──────────────────────────────────────────┐
│ GÉNÉRER UNE LICENCE                      │
├──────────────────────────────────────────┤
│ Entreprise :                             │
│ [ Restaurant A                         ] │
│                                          │
│ Durée :                                  │
│ [ 30 jours                             ] │
│                                          │
│ [ GÉNÉRER LA LICENCE ]                  │
└──────────────────────────────────────────┘
```

Résultat :

```text
LICENCE GÉNÉRÉE

POS-XXXX-XXXX

Valable du :
01/09/2026

Au :
30/09/2026
```

---

# 43. Responsive Design

Toutes les interfaces doivent être adaptées aux différents formats.

## Ordinateur

Priorité :

- tableaux ;
- rapports ;
- administration ;
- gestion produits ;
- stock.

## Tablette

Priorité :

- POS ;
- gestion ;
- caisse ;
- inventaire.

## Smartphone

Priorité :

- POS ;
- caisse ;
- consultation rapide ;
- stock ;
- tableau de bord.

L'interface ne doit pas simplement être réduite. Les composants doivent être réorganisés selon la taille de l'écran.

---

# 44. Fonctionnement hors connexion

Si l'architecture retenue le permet, le POS doit pouvoir continuer les opérations essentielles lorsque la connexion est temporairement indisponible.

Fonctions prioritaires :

- consulter les produits déjà synchronisés ;
- effectuer une vente ;
- enregistrer une commande ;
- imprimer un ticket si le périphérique le permet.

Après le retour de la connexion :

```text
Données locales
      ↓
Connexion rétablie
      ↓
Synchronisation
      ↓
Validation
      ↓
Données centralisées
```

Les règles de synchronisation devront éviter les incohérences de stock et de caisse.

---

# 45. Sécurité

Le système doit prévoir :

- authentification sécurisée ;
- gestion des rôles ;
- contrôle des permissions ;
- protection des données ;
- journalisation des opérations sensibles ;
- contrôle de la licence ;
- séparation des données entre entreprises.

Un utilisateur d'une entreprise ne doit jamais pouvoir accéder aux données d'une autre entreprise.

---

# 46. Traçabilité

Les opérations importantes doivent conserver :

- utilisateur ;
- date ;
- heure ;
- opération ;
- ancienne valeur si nécessaire ;
- nouvelle valeur si nécessaire.

Exemples :

- modification de prix ;
- modification de stock ;
- inventaire ;
- fermeture de caisse ;
- annulation de vente ;
- modification de paramètres.

---

# 47. Fonctionnalités exclues du MVP

Afin de conserver un logiciel simple, les fonctionnalités suivantes sont exclues de la première version :

- comptabilité complète ;
- gestion RH ;
- paie ;
- CRM avancé ;
- marketplace ;
- e-commerce ;
- gestion complexe des fournisseurs ;
- multi-entrepôts avancé ;
- programme de fidélité avancé ;
- promotions complexes ;
- comptabilité analytique.

Ces fonctionnalités pourront être ajoutées dans de futures versions.

---

# 48. Ordre recommandé de développement

## Phase 1 — Fondations

- [ ] Authentification
- [ ] Utilisateurs
- [ ] Rôles
- [ ] Entreprise
- [ ] Licence
- [ ] Paramètres

## Phase 2 — Produits

- [ ] Catégories
- [ ] Produits
- [ ] Prix
- [ ] Stockable / non stockable

## Phase 3 — Stock

- [ ] État du stock
- [ ] Entrées
- [ ] Sorties
- [ ] Motifs
- [ ] Inventaire
- [ ] Alertes

## Phase 4 — Caisse

- [ ] Ouverture
- [ ] Fond de démarrage
- [ ] Session
- [ ] Ventes
- [ ] Paiements
- [ ] Fermeture
- [ ] Journal de caisse

## Phase 5 — POS

- [ ] Interface tactile
- [ ] Catégories
- [ ] Grille produits
- [ ] Recherche
- [ ] Code-barres
- [ ] Commande
- [ ] Paiement
- [ ] Ticket
- [ ] Impression

## Phase 6 — Administration

- [ ] Tableau de bord
- [ ] Historique
- [ ] Rapports
- [ ] Utilisateurs
- [ ] Paramètres
- [ ] Gestion des licences

## Phase 7 — Optimisation

- [ ] Responsive
- [ ] Mode hors connexion si retenu
- [ ] Synchronisation
- [ ] Optimisation des performances
- [ ] Tests
- [ ] Sécurité
- [ ] Tests sur différents appareils

---

# 49. Critères de réussite du MVP

Le MVP sera considéré comme fonctionnel lorsqu'un propriétaire pourra :

1. créer/configurer son entreprise ;
2. ajouter ses utilisateurs ;
3. créer des catégories ;
4. créer des produits ;
5. définir les prix ;
6. gérer le stock ;
7. ouvrir une caisse ;
8. saisir un fond de démarrage ;
9. effectuer une vente ;
10. encaisser ;
11. imprimer ou générer le ticket ;
12. fermer la caisse ;
13. consulter le journal de caisse ;
14. consulter les ventes ;
15. consulter les stocks ;
16. réaliser un inventaire ;
17. consulter les rapports essentiels.

Le logiciel doit permettre au caissier d'effectuer une vente avec **le minimum d'actions possible**.

---

# 50. Résultat attendu

Le produit final doit être un **POS simple, moderne, rapide et professionnel**, capable de s'adapter aux besoins des petits commerces et restaurants.

Le logiciel doit privilégier :

```text
SIMPLE
   +
RAPIDE
   +
TACTILE
   +
FIABLE
   +
ÉVOLUTIF
```

Le choix de la technologie sera effectué après validation du présent cahier des charges fonctionnel.
