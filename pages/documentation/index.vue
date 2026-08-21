<script lang="ts" setup>
definePageMeta({ layout: "home" });

const NAVY = "#182B6B";
const GOLD = "#F5A524";

interface Workflow {
  title: string;
  roles: string;
  steps: string[];
  tip?: string;
}

interface Category {
  id: string;
  label: string;
  icon: string;
  access: string;
  description: string;
  workflows: Workflow[];
}

// Content mirrors the real pages under pages/(pos)/ and pages/(admin)/, and
// the access rules mirror lib/permissionModules.ts + middleware/auth.global.ts
// (GATEABLE_MODULES / CASHIER_ALLOWED_PREFIXES) — not the aspirational cahier
// des charges — so this stays a description of what the software actually
// does today.
const categories: Category[] = [
  {
    id: "caisse",
    label: "Caisse",
    icon: "fa-vault",
    access: "Propriétaire, Manager, Caissier",
    description:
      "La caisse fonctionne par sessions : une session s'ouvre avec un fond de démarrage, encaisse des ventes, puis se ferme avec un comptage. Toute vente exige une session ouverte.",
    workflows: [
      {
        title: "Ouvrir la caisse",
        roles: "Tous les rôles — obligatoire avant toute vente",
        steps: [
          "Arriver sur le POS (menu « POS ») ou aller dans Gestion > Caisse puis « Ouvrir la caisse ».",
          "Si aucune session n'est ouverte, la fenêtre « Ouverture de caisse » s'affiche automatiquement et bloque l'écran de vente.",
          "Choisir la caisse (poste d'encaissement) dans la liste.",
          "Saisir le fond de démarrage, c'est-à-dire le montant en espèces présent dans le tiroir au départ.",
          "Cliquer sur « OUVRIR LA CAISSE ». L'écran de vente devient accessible.",
        ],
      },
      {
        title: "Suivre la session en cours",
        roles: "Tous les rôles",
        steps: [
          "Aller dans Gestion > Caisse.",
          "La carte « Session en cours » affiche la caisse, le caissier, l'heure d'ouverture, le fond initial, le total des ventes, la répartition Espèces / Carte-Mobile.",
          "Depuis cette page : « Journal de caisse » pour le détail des mouvements, et (Propriétaire/Manager) « Rapport comptable » pour la vue chiffre d'affaires/dépenses.",
        ],
      },
      {
        title: "Clôturer la caisse et consulter le journal",
        roles: "Propriétaire, Manager — un compte Caissier ne voit pas le bouton de fermeture",
        steps: [
          "Depuis Gestion > Caisse (ou le menu du profil dans le POS), cliquer sur « Fermer la caisse ».",
          "Renseigner les éventuelles entrées et sorties manuelles d'espèces survenues pendant la session.",
          "Le montant théorique s'affiche automatiquement (fond initial + ventes espèces + entrées − sorties).",
          "Saisir le montant réellement compté dans le tiroir.",
          "Cliquer sur « CONFIRMER FERMETURE » : l'écart (compté − théorique) est calculé et enregistré dans le journal.",
          "Pour consulter l'historique, ouvrir Gestion > Caisse > « Journal de caisse », choisir la session dans la liste, puis « Imprimer / Exporter en PDF » si besoin.",
        ],
        tip: "Le journal de caisse ne suit que les mouvements en espèces : les paiements par carte ou mobile money n'entrent pas dans le calcul de l'écart.",
      },
    ],
  },
  {
    id: "ventes",
    label: "Ventes & Point de vente",
    icon: "fa-cash-register",
    access:
      "POS : tous les rôles · Historique des ventes : Propriétaire, Manager, ou Caissier si le module « Ventes » lui a été accordé",
    description:
      "Le POS est l'écran d'encaissement au comptoir : ajout tactile des produits, panier, paiement et ticket. L'historique des ventes permet de consulter et filtrer les transactions déjà encaissées.",
    workflows: [
      {
        title: "Encaisser une vente",
        roles: "Tous les rôles",
        steps: [
          "Ouvrir le menu « POS ».",
          "Filtrer les produits avec les onglets de catégories en haut de l'écran, ou taper dans la barre de recherche (nom, référence ou code-barres — utilisable avec une douchette USB/Bluetooth).",
          "Toucher une carte produit pour l'ajouter à la commande en cours ; toucher plusieurs fois augmente la quantité.",
          "Consulter la commande dans le panneau latéral (grand écran) ou le tiroir (mobile/tablette) : modifier une quantité, supprimer un article ou vider la commande.",
          "Cliquer sur « PAYER » une fois la commande prête.",
        ],
      },
      {
        title: "Encaisser un paiement",
        roles: "Tous les rôles",
        steps: [
          "Dans la fenêtre de paiement, choisir le moyen de paiement : Espèces, Carte, Wave ou Orange Money.",
          "Pour un paiement en espèces, saisir le montant reçu : la monnaie à rendre est calculée automatiquement.",
          "Cocher l'impression immédiate du ticket si le poste dispose d'une imprimante.",
          "Cliquer sur « VALIDER LE PAIEMENT ». La vente est enregistrée et le stock des produits stockables est automatiquement diminué.",
        ],
      },
      {
        title: "Imprimer ou réimprimer un ticket",
        roles: "Tous les rôles",
        steps: [
          "Juste après le paiement, l'écran « Vente validée » propose Imprimer, générer un PDF, ou démarrer une nouvelle vente.",
          "Pour réimprimer un ticket plus tard, aller dans Gestion > Ventes, repérer la vente et cliquer sur « Voir » pour rouvrir le ticket.",
        ],
      },
      {
        title: "Consulter l'historique des ventes",
        roles: "Propriétaire, Manager (ou Caissier avec le module « Ventes » accordé)",
        steps: [
          "Ouvrir Gestion > Ventes.",
          "Utiliser les raccourcis Jour / Semaine / Mois / Année ou choisir une période « Du » / « Au », et filtrer par moyen de paiement.",
          "Les cartes en haut affichent le chiffre d'affaires, le nombre de ventes et le panier moyen sur la période filtrée.",
          "« Voir » ouvre le ticket d'une vente ; « Annuler » (réservé à Propriétaire/Manager) annule une vente et restitue le stock des articles vendus.",
        ],
      },
      {
        title: "Verrouiller l'écran ou changer d'utilisateur",
        roles: "Tous les rôles",
        steps: [
          "Dans le POS, ouvrir le menu du profil en haut à droite (nom de l'utilisateur).",
          "« Verrouiller » renvoie vers l'écran de code PIN sans fermer la session de caisse.",
          "« Déconnexion » ferme complètement la session utilisateur.",
        ],
      },
    ],
  },
  {
    id: "produits-stock",
    label: "Produits & Stock",
    icon: "fa-box",
    access: "Propriétaire, Manager, ou Caissier si le module « Produits » et/ou « Stock » lui a été accordé",
    description:
      "Gestion du catalogue (catégories et fiches produits) et suivi des quantités disponibles, avec mouvements d'entrée/sortie et inventaires périodiques.",
    workflows: [
      {
        title: "Créer une catégorie",
        roles: "Propriétaire, Manager (ou Caissier avec le module « Produits »)",
        steps: [
          "Aller dans Gestion > Catégories.",
          "Cliquer sur « + Ajouter », saisir le nom, choisir une catégorie parente si besoin (pour créer une sous-catégorie), puis « Enregistrer ».",
          "« Modifier » ou « Supprimer » sont disponibles sur chaque ligne du tableau.",
        ],
      },
      {
        title: "Ajouter ou modifier un produit",
        roles: "Propriétaire, Manager (ou Caissier avec le module « Produits »)",
        steps: [
          "Aller dans Gestion > Produits puis « + Ajouter » (ou « Modifier » sur un produit existant).",
          "Renseigner le libellé, la catégorie, le type, et cocher « Produit stockable » si sa vente doit diminuer le stock.",
          "Si le produit est stockable, indiquer la quantité initiale (à la création uniquement).",
          "Renseigner le prix d'achat, le prix de vente, le seuil d'alerte de stock faible, et en option le code-barres, la référence et une photo (JPG/PNG/WEBP, 2 Mo max).",
          "Cliquer sur « Enregistrer ».",
          "Depuis le tableau, « Désactiver » retire un produit de la vente sans le supprimer ; « Réactiver » le rend à nouveau disponible.",
        ],
      },
      {
        title: "Consulter l'état du stock et les alertes",
        roles: "Propriétaire, Manager (ou Caissier avec le module « Stock »)",
        steps: [
          "Aller dans Gestion > Stock (« Vue d'ensemble »).",
          "Basculer entre « Tous » et « Faible » pour ne voir que les produits sous leur seuil d'alerte (5 unités par défaut).",
        ],
      },
      {
        title: "Enregistrer un mouvement de stock",
        roles: "Propriétaire, Manager (ou Caissier avec le module « Stock »)",
        steps: [
          "Aller dans Gestion > Stock > « Mouvement de stock » puis « + Ajouter ».",
          "Choisir le produit et le type de mouvement (Entrée ou Sortie).",
          "Saisir la quantité et un motif (Réception, Produit gâté, Produit périmé, Produit cassé, Perte, Vol, Utilisation interne, Don ou Autre), avec une observation libre si besoin.",
          "Cliquer sur « Valider ». L'historique est filtrable par produit et par type de mouvement.",
        ],
      },
      {
        title: "Réaliser un inventaire",
        roles: "Propriétaire, Manager (ou Caissier avec le module « Stock »)",
        steps: [
          "Aller dans Gestion > Stock > « Inventaire ».",
          "Pour chaque produit stockable, saisir la quantité réellement comptée en boutique. L'écart avec le stock théorique s'affiche en direct.",
          "Cliquer sur « VALIDER L'INVENTAIRE » : le stock de chaque produit est ajusté sur la quantité réelle saisie.",
        ],
        tip: "Cette validation modifie directement le stock : vérifier le comptage avant de valider.",
      },
    ],
  },
  {
    id: "depenses",
    label: "Dépenses",
    icon: "fa-file-invoice-dollar",
    access: "Propriétaire, Manager",
    description: "Suivi des sorties d'argent de l'entreprise (achats, salaires, loyer, etc.), avec un rapport imprimable par période.",
    workflows: [
      {
        title: "Enregistrer une dépense",
        roles: "Propriétaire, Manager",
        steps: [
          "Aller dans Gestion > Dépenses puis « + Ajouter ».",
          "Renseigner la date, le montant, la catégorie (Achats, Salaires, Loyer, Transport, Fournitures, Électricité/Eau, Maintenance ou Autre) et une description optionnelle.",
          "Cliquer sur « Valider ».",
        ],
      },
      {
        title: "Filtrer ou supprimer une dépense",
        roles: "Propriétaire, Manager",
        steps: [
          "Dans la liste des dépenses, filtrer par catégorie et par période (« Du » / « Au »).",
          "« Supprimer » sur une ligne retire définitivement la dépense après confirmation.",
        ],
      },
      {
        title: "Générer le rapport des dépenses",
        roles: "Propriétaire, Manager",
        steps: [
          "Depuis Gestion > Dépenses, cliquer sur « Rapport des dépenses ».",
          "Choisir la période (« Du » / « Au ») puis « Afficher ».",
          "Le document récapitule le total, la répartition par catégorie et le détail de chaque dépense ; « Imprimer / Exporter en PDF » produit un document prêt à signer.",
        ],
      },
    ],
  },
  {
    id: "comptabilite",
    label: "Comptabilité",
    icon: "fa-scale-balanced",
    access: "Propriétaire, Manager",
    description: "Vue d'ensemble financière sur une période : chiffre d'affaires, dépenses et résultat net, avec le détail des transactions.",
    workflows: [
      {
        title: "Consulter le rapport comptable",
        roles: "Propriétaire, Manager",
        steps: [
          "Aller dans Gestion > Comptabilité.",
          "Choisir la période (« Du » / « Au ») puis « Afficher ».",
          "Le rapport présente le chiffre d'affaires, le nombre de ventes, le total des dépenses, le détail chronologique des transactions (ventes et dépenses mêlées), la répartition des dépenses par catégorie, et le résultat net (chiffre d'affaires − dépenses).",
          "« Imprimer / Exporter en PDF » produit un document prêt à archiver ou transmettre.",
        ],
      },
    ],
  },
  {
    id: "rapports",
    label: "Rapports",
    icon: "fa-chart-line",
    access: "Propriétaire, Manager (ou Caissier si le module « Rapports » lui a été accordé)",
    description: "Rapport journalier des ventes, avec le détail article par article de ce qui a été vendu sur une date donnée.",
    workflows: [
      {
        title: "Consulter le rapport journalier",
        roles: "Propriétaire, Manager (ou Caissier avec le module « Rapports »)",
        steps: [
          "Aller dans Gestion > Rapports.",
          "Choisir une date puis « Afficher ».",
          "Les cartes affichent le chiffre d'affaires total, le nombre de ventes, les articles vendus, le moyen de paiement dominant et le nombre de commandes annulées.",
          "Le tableau détaille chaque article vendu (heure, quantité, prix unitaire, total).",
          "« Imprimer / Exporter en PDF » permet d'archiver ou d'afficher le rapport en caisse.",
        ],
      },
    ],
  },
  {
    id: "utilisateurs",
    label: "Utilisateurs & Rôles",
    icon: "fa-users",
    access: "Propriétaire, Manager pour la liste des comptes · Rôles & permissions : Propriétaire uniquement",
    description:
      "Gestion des comptes qui se connectent au logiciel (Propriétaire, Manager, Caissier), et — pour le Propriétaire — attribution ciblée de modules supplémentaires à un Manager ou un Caissier.",
    workflows: [
      {
        title: "Ajouter un utilisateur",
        roles: "Propriétaire, Manager",
        steps: [
          "Aller dans Gestion > Utilisateurs puis « + Ajouter ».",
          "Renseigner le nom, l'email et le mot de passe.",
          "Un code PIN à 4 chiffres est optionnel : il permet le déverrouillage rapide de l'écran de verrouillage sans retaper le mot de passe.",
          "Choisir le rôle : Propriétaire, Manager ou Caissier, puis « Enregistrer ».",
        ],
      },
      {
        title: "Modifier ou désactiver un utilisateur",
        roles: "Propriétaire, Manager",
        steps: [
          "Depuis la liste des utilisateurs, « Modifier » permet de changer le nom, le rôle, ou de définir un nouveau mot de passe / code PIN (laisser vide pour ne pas les changer).",
          "« Désactiver » empêche l'utilisateur de se connecter ; « Réactiver » lui redonne l'accès.",
        ],
      },
      {
        title: "Gérer les rôles et permissions",
        roles: "Propriétaire uniquement",
        steps: [
          "Aller dans Gestion > Utilisateurs puis « Gérer les rôles et permissions ».",
          "Le Propriétaire a toujours accès à tout, sans configuration nécessaire.",
          "Pour chaque module (Produits, Stock, Ventes, Rapports, Dépenses), cocher la case correspondant à Manager ou Caissier pour lui ouvrir ce module.",
          "Le changement s'applique immédiatement, sans rechargement.",
        ],
        tip: "Un Caissier reste toujours limité au POS et à la Caisse tant qu'aucun module ne lui a été accordé ici ; les pages Utilisateurs et Paramètres ne peuvent jamais être accordées à un Caissier.",
      },
    ],
  },
  {
    id: "parametres",
    label: "Paramètres & Licence",
    icon: "fa-gear",
    access: "Propriétaire, Manager pour les paramètres généraux · Licence : Propriétaire uniquement",
    description: "Configuration de l'entreprise, du ticket de caisse, et suivi/renouvellement de la licence d'utilisation du logiciel.",
    workflows: [
      {
        title: "Configurer l'entreprise",
        roles: "Propriétaire, Manager",
        steps: [
          "Aller dans Gestion > Paramètres.",
          "Renseigner les informations générales (nom, nom commercial, identifiant fiscal, devise), les coordonnées (adresse, téléphone, email, site web) et les horaires d'ouverture.",
          "Cliquer sur « Enregistrer ».",
        ],
        tip: "Les horaires d'ouverture servent à définir la « journée commerciale » utilisée dans les rapports (utile pour un commerce ouvert tard le soir, au-delà de minuit).",
      },
      {
        title: "Configurer le ticket de caisse",
        roles: "Propriétaire, Manager",
        steps: [
          "Toujours dans Gestion > Paramètres, section « Ticket de caisse ».",
          "Choisir le format d'impression (58 mm, 80/88 mm ou A5).",
          "Renseigner le message d'en-tête et le message de pied de ticket, puis « Enregistrer ».",
        ],
      },
      {
        title: "Générer et activer une licence",
        roles: "Propriétaire uniquement",
        steps: [
          "Depuis le tableau de bord, ouvrir la carte « Licence » puis « Gérer la licence ».",
          "Cliquer sur « Générer une licence » pour obtenir une nouvelle clé à usage unique.",
          "Coller cette clé dans le champ d'activation puis « Activer » : 30 jours d'accès démarrent immédiatement (ou se renouvellent si une licence était déjà active).",
        ],
        tip: "Sans licence active, tous les comptes autres que le Propriétaire sont bloqués et redirigés vers un écran « Licence requise » — seul le Propriétaire peut toujours se connecter pour réactiver l'accès.",
      },
    ],
  },
  {
    id: "auth",
    label: "Authentification & Sécurité",
    icon: "fa-shield-halved",
    access: "Tous les rôles",
    description: "Connexion, verrouillage rapide de session et déconnexion — communs à tous les comptes, quel que soit le rôle.",
    workflows: [
      {
        title: "Se connecter",
        roles: "Tous les rôles",
        steps: [
          "Ouvrir la page de connexion, saisir l'email et le mot de passe du compte, puis « Se connecter ».",
          "Un compte Caissier est automatiquement dirigé vers le POS ; les autres rôles arrivent sur le tableau de bord.",
        ],
      },
      {
        title: "Verrouiller l'écran et déverrouiller par code PIN",
        roles: "Tous les rôles",
        steps: [
          "Depuis le menu utilisateur (POS ou tableau de bord), cliquer sur « Verrouiller » — la session reste ouverte mais l'écran se bloque.",
          "Sur l'écran de verrouillage, saisir le code PIN à 4 chiffres du compte via le clavier tactile pour reprendre la main immédiatement.",
          "Si aucun code PIN n'est configuré, le lien « Utiliser mon mot de passe » permet de déverrouiller avec le mot de passe habituel.",
        ],
      },
      {
        title: "Se déconnecter",
        roles: "Tous les rôles",
        steps: ["Ouvrir le menu utilisateur puis cliquer sur « Déconnexion ». Le compte doit se reconnecter pour revenir dans le logiciel."],
      },
    ],
  },
];

const route = useRoute();
const router = useRouter();

function isValidSection(value: unknown): value is string {
  return typeof value === "string" && categories.some((c) => c.id === value);
}

const activeId = ref(isValidSection(route.query.section) ? route.query.section : categories[0].id);
const activeCategory = computed(() => categories.find((c) => c.id === activeId.value) ?? categories[0]);

// Query is kept in sync (shallow, no history entry per click) so a link like
// /documentation?section=caisse — e.g. from the Support modal — opens
// directly on the right rubrique, and the current one survives a refresh.
function selectCategory(id: string) {
  activeId.value = id;
  router.replace({ query: { ...route.query, section: id } });
}

watch(
  () => route.query.section,
  (value) => {
    if (isValidSection(value) && value !== activeId.value) activeId.value = value;
  }
);

const openKeys = reactive(new Set<string>());

function workflowKey(catId: string, index: number) {
  return `${catId}:${index}`;
}

function isOpen(catId: string, index: number) {
  return openKeys.has(workflowKey(catId, index));
}

function toggleWorkflow(catId: string, index: number) {
  const key = workflowKey(catId, index);
  if (openKeys.has(key)) openKeys.delete(key);
  else openKeys.add(key);
}

// The first workflow of a rubrique opens by default so the pane never lands
// empty; switching rubrique resets to that same starting point rather than
// carrying over whichever items happened to be open elsewhere.
watch(
  activeId,
  (id) => {
    openKeys.clear();
    openKeys.add(workflowKey(id, 0));
  },
  { immediate: true }
);
</script>

<template>
  <div class="content-body">
    <CommonNav title="Documentation" name="Documentation & aide" />
    <div class="container">
      <div class="grid grid-cols-[300px_1fr] max-lg:grid-cols-1 gap-6">
        <!-- Sommaire des rubriques -->
        <div class="max-lg:order-2">
          <div class="card !h-auto overflow-hidden lg:sticky lg:top-6">
            <div class="border-b border-border p-5">
              <h4 class="text-base">Sommaire</h4>
              <p class="mt-1 text-2xs text-body/70">Choisissez une rubrique pour afficher son mode d'emploi.</p>
            </div>
            <nav class="space-y-1 p-2">
              <button
                v-for="cat in categories"
                :key="cat.id"
                type="button"
                class="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-2sm font-medium transition-colors"
                :class="activeId === cat.id ? 'font-semibold' : 'text-body hover:bg-bodybg'"
                :style="activeId === cat.id ? { background: NAVY, color: '#fff' } : {}"
                @click="selectCategory(cat.id)"
              >
                <span
                  class="flex size-8 shrink-0 items-center justify-center rounded-lg"
                  :style="activeId === cat.id ? { background: 'rgba(245,165,36,0.25)', color: GOLD } : { background: '#eaf1fb', color: NAVY }"
                >
                  <i class="fa" :class="cat.icon"></i>
                </span>
                <span class="flex-1 truncate">{{ cat.label }}</span>
              </button>
            </nav>
          </div>
        </div>

        <!-- Contenu de la rubrique sélectionnée -->
        <div class="min-w-0 space-y-5 max-lg:order-1">
          <div class="card !h-auto p-6">
            <div class="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 class="text-lg font-bold" :style="{ color: NAVY }">
                  <i class="fa mr-2" :class="activeCategory.icon" :style="{ color: GOLD }"></i>{{ activeCategory.label }}
                </h3>
                <p class="mt-2 max-w-2xl text-2sm text-body">{{ activeCategory.description }}</p>
              </div>
              <span class="shrink-0 rounded-full px-3 py-1.5 text-2xs font-semibold" style="background: #eaf1fb; color: #182b6b">
                <i class="fa fa-user-shield mr-1.5"></i>{{ activeCategory.access }}
              </span>
            </div>
          </div>

          <div v-for="(wf, i) in activeCategory.workflows" :key="wf.title" class="card !h-auto overflow-hidden">
            <button type="button" class="flex w-full items-center justify-between gap-3 p-5 text-left" @click="toggleWorkflow(activeCategory.id, i)">
              <div class="flex min-w-0 items-center gap-3">
                <span
                  class="flex size-8 shrink-0 items-center justify-center rounded-full text-2sm font-bold text-white"
                  :style="{ background: NAVY }"
                  >{{ i + 1 }}</span
                >
                <div class="min-w-0">
                  <p class="truncate font-semibold">{{ wf.title }}</p>
                  <p class="text-2xs text-body/70">{{ wf.roles }}</p>
                </div>
              </div>
              <i
                class="fa fa-chevron-down shrink-0 text-body transition-transform duration-200"
                :class="{ 'rotate-180': isOpen(activeCategory.id, i) }"
              ></i>
            </button>
            <div v-show="isOpen(activeCategory.id, i)" class="border-t border-border px-5 pb-5 pt-4">
              <ol class="space-y-2.5">
                <li v-for="(step, si) in wf.steps" :key="si" class="flex gap-2.5 text-2sm">
                  <span
                    class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                    :style="{ background: '#eaf1fb', color: NAVY }"
                    >{{ si + 1 }}</span
                  >
                  <span>{{ step }}</span>
                </li>
              </ol>
              <p v-if="wf.tip" class="mt-3 rounded-lg px-3 py-2 text-2xs" style="background: #fff6e5; color: #8a6100">
                <i class="fa fa-lightbulb mr-1.5"></i>{{ wf.tip }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
