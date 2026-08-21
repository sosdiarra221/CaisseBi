<script lang="ts" setup>
import { menuItems } from "~/lib/menu";
import { Store } from "~/store/Store";

// Collapse is driven by Store.toggleMenu (see Header2.vue's hamburger).
// Width is bound via inline style rather than the template's own
// `.menu-toggle` CSS: this codebase's dev server double-injects its compiled
// stylesheet (see the print-CSS comment in components/pos/ReceiptTicket.vue
// for the same root cause elsewhere), which made the higher-specificity
// `[data-sidebar-style=full] .menu-toggle .deznav{width:5rem}` rule
// unreliably lose to the duplicated base `.deznav{width:17.5rem}` rule.
// Inline styles have unconditional top priority, so they sidestep that.
const { toggleMenu, viewportWidth, mobileNavOpen } = Store;
const route = useRoute();
const { user } = useUserSession();

const NAVY = "#182B6B";
const NAVY_LIGHT = "#24358C";
const GOLD = "#F5A524";
const WIDTH_EXPANDED = "17.5rem";
const WIDTH_COLLAPSED = "5rem";

// Below this width the sidebar becomes a full-width off-canvas drawer
// (see app.vue for the shared breakpoint constant/rationale) instead of a
// rail that pushes content over. `toggleMenu` keeps meaning "collapsed to
// icon rail" on desktop only; on mobile the drawer is always rendered at
// full (expanded) content width and `mobileNavOpen` alone controls whether
// it's slid on/off screen.
const MOBILE_NAV_BREAKPOINT = 992;
const isMobileNav = computed(() => viewportWidth.value < MOBILE_NAV_BREAKPOINT);
const collapsed = computed(() => !isMobileNav.value && toggleMenu.value);

// Close the drawer whenever the route changes so the next page isn't left
// hidden behind it.
watch(
  () => route.fullPath,
  () => {
    if (isMobileNav.value) mobileNavOpen.value = false;
  }
);

// Icon per nav label. Kept local to the sidebar (a presentation concern) so
// lib/menu.ts stays the single source of truth for the actual routes.
const ICONS: Record<string, string> = {
  Dashboard: "fa-table-columns",
  POS: "fa-cash-register",
  Produits: "fa-box",
  Catégories: "fa-tags",
  Stock: "fa-warehouse",
  "Vue d'ensemble": "fa-warehouse",
  "Mouvement de stock": "fa-right-left",
  Inventaire: "fa-clipboard-list",
  Caisse: "fa-vault",
  Ventes: "fa-receipt",
  Dépenses: "fa-file-invoice-dollar",
  Rapports: "fa-chart-line",
  Comptabilité: "fa-scale-balanced",
  Utilisateurs: "fa-users",
  "Rôles & permissions": "fa-user-shield",
  Paramètres: "fa-gear",
};

// Display labels that differ from the route label defined in lib/menu.ts,
// to match the mockup's wording without renaming the actual route.
const LABEL_OVERRIDES: Record<string, string> = {
  Dashboard: "Tableau de bord",
};

interface NavLinkRow {
  type: "link";
  key: string;
  label: string;
  link: string;
  icon: string;
}

interface NavGroupChild {
  key: string;
  label: string;
  link: string;
  icon: string;
}

interface NavGroupRow {
  type: "group";
  key: string;
  label: string;
  icon: string;
  children: NavGroupChild[];
}

type NavRow = NavLinkRow | NavGroupRow;

// The mockup shows a flat single-level list. This app's real nav has a
// two-level "Gestion" submenu (see lib/menu.ts) — flattened here into one
// list so the visual style matches while every link still points at a real
// page, EXCEPT for entries carrying `childer` (currently just "Stock"),
// which render as a real collapsible group instead of being flattened —
// see the "Group stock into a submenu" task. Nothing else is renamed or
// fabricated, only presented flatter.
const navRows = computed<NavRow[]>(() => {
  const rows: NavRow[] = [];
  for (const item of menuItems) {
    if (item.submenu) {
      for (const sub of item.submenu) {
        if (sub.roles && !sub.roles.includes(user.value?.role as any)) continue;
        if (sub.childer && sub.childer.length) {
          rows.push({
            type: "group",
            key: `group:${sub.lable}`,
            label: LABEL_OVERRIDES[sub.lable] ?? sub.lable,
            icon: ICONS[sub.lable] ?? "fa-circle",
            children: sub.childer
              .filter((c) => c.link)
              .map((c) => ({
                key: c.link as string,
                label: LABEL_OVERRIDES[c.lable] ?? c.lable,
                link: c.link as string,
                icon: ICONS[c.lable] ?? "fa-circle",
              })),
          });
        } else if (sub.link) {
          rows.push({
            type: "link",
            key: sub.link,
            label: LABEL_OVERRIDES[sub.lable] ?? sub.lable,
            link: sub.link,
            icon: ICONS[sub.lable] ?? "fa-circle",
          });
        }
      }
    } else if (item.link) {
      rows.push({
        type: "link",
        key: item.link,
        label: LABEL_OVERRIDES[item.lable] ?? item.lable,
        link: item.link,
        icon: ICONS[item.lable] ?? "fa-circle",
      });
    }
  }
  return rows;
});

function isActive(link: string): boolean {
  if (link === "/") return route.path === "/";
  return route.path === link || route.path.startsWith(link + "/");
}

// Group children (e.g. Stock's "/stock", "/stock/mouvement", "/stock/inventaire")
// are siblings, not a parent/nested-child pair, so an exact match is used
// here instead of isActive()'s prefix matching — otherwise "/stock" (Vue
// d'ensemble) would incorrectly light up as active while on
// "/stock/mouvement" or "/stock/inventaire" too.
function isChildActive(link: string): boolean {
  return route.path === link;
}

function isGroupActive(group: NavGroupRow): boolean {
  return group.children.some((c) => isChildActive(c.link));
}

const showSupport = ref(false);

// Reactive Set (Vue 3 supports Set/Map reactivity through reactive()), so
// .add/.delete below trigger re-renders without needing to reassign .value.
const expandedGroups = reactive(new Set<string>());

function isGroupExpanded(key: string): boolean {
  return expandedGroups.has(key);
}

function syncExpandedFromRoute() {
  for (const row of navRows.value) {
    if (row.type === "group" && isGroupActive(row)) {
      expandedGroups.add(row.key);
    }
  }
}

// Auto-expand a group the moment its route is entered — on first load and
// on every subsequent navigation — without forcibly collapsing a group the
// user expanded manually while browsing elsewhere.
onMounted(syncExpandedFromRoute);
watch(() => route.path, syncExpandedFromRoute);

const router = useRouter();

function onGroupClick(row: NavGroupRow) {
  if (collapsed.value) {
    // Collapsed icon-only rail has no room for a submenu: jump straight to
    // the group's first child (Stock's own overview page) instead.
    const target = row.children[0]?.link;
    if (target) router.push(target);
    return;
  }
  if (expandedGroups.has(row.key)) {
    expandedGroups.delete(row.key);
  } else {
    expandedGroups.add(row.key);
  }
}
</script>

<template>
  <!-- Mobile-only backdrop behind the off-canvas drawer -->
  <div
    v-if="isMobileNav && mobileNavOpen"
    class="fixed inset-0 z-[1049] bg-black/50"
    @click="mobileNavOpen = false"
  />

  <div
    class="deznav transition-[width,transform] duration-300 ease-in-out"
    :style="{
      background: NAVY,
      borderRight: 'none',
      width: collapsed ? WIDTH_COLLAPSED : WIDTH_EXPANDED,
      maxWidth: isMobileNav ? '85vw' : undefined,
      position: isMobileNav ? 'fixed' : undefined,
      // Explicit, not left to the stylesheet's own `.deznav { left: 0 }`
      // media-query rule — that rule is subject to the same double-injected-
      // stylesheet unreliability documented at the top of this file, and an
      // un-positioned `left` here would leave the drawer's fixed position
      // wherever the (potentially wrong/duplicated) cascade result lands
      // instead of flush with the screen edge.
      left: isMobileNav ? 0 : undefined,
      top: isMobileNav ? 0 : undefined,
      height: isMobileNav ? '100vh' : undefined,
      transform: isMobileNav ? (mobileNavOpen ? 'translateX(0)' : 'translateX(-100%)') : undefined,
      zIndex: isMobileNav ? 1050 : undefined,
    }"
  >
    <div class="deznav-scroll flex h-full flex-col overflow-y-auto overflow-x-hidden">
      <!-- Logo: pinned to the true top-left of the page (the sidebar spans
           full height from x=0), unlike the header which starts to the
           right of the sidebar and can never sit at the actual left edge. -->
      <NuxtLink to="/" class="flex h-24 shrink-0 items-center justify-center overflow-hidden border-b px-4 py-3" style="border-color: rgba(255,255,255,0.1)">
        <!-- Full wordmark when expanded; the logo is a wide horizontal
             lockup that doesn't fit the 5rem collapsed rail, so a compact
             badge takes over instead of clipping it. -->
        <img
          v-show="!collapsed"
          src="~/assets/images/logo-caissebi.png"
          alt="CaisseBi"
          class="h-16 w-auto max-w-full object-contain"
        />
        <span
          v-show="collapsed"
          class="flex size-12 items-center justify-center rounded-xl text-lg font-extrabold"
          :style="{ background: GOLD, color: NAVY }"
        >
          CB
        </span>
      </NuxtLink>

      <ul class="flex-1 space-y-1 px-3 pt-3">
        <li v-for="row in navRows" :key="row.key">
          <NuxtLink
            v-if="row.type === 'link'"
            :to="row.link"
            class="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-2sm font-medium transition-colors"
            :class="isActive(row.link) ? 'font-semibold' : 'text-white/80 hover:bg-white/10 hover:text-white'"
            :style="isActive(row.link) ? { background: GOLD, color: NAVY } : {}"
            :title="row.label"
          >
            <i class="fa shrink-0 text-center" :class="row.icon" style="width: 1.1rem"></i>
            <span v-show="!collapsed" class="truncate">{{ row.label }}</span>
          </NuxtLink>

          <template v-else>
            <button
              type="button"
              class="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-2sm font-medium transition-colors"
              :class="isGroupActive(row) ? 'font-semibold text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'"
              :title="row.label"
              @click="onGroupClick(row)"
            >
              <i class="fa shrink-0 text-center" :class="row.icon" style="width: 1.1rem"></i>
              <span v-show="!collapsed" class="flex-1 truncate text-left">{{ row.label }}</span>
              <i
                v-show="!collapsed"
                class="fa fa-chevron-right shrink-0 text-2xs transition-transform duration-200"
                :class="{ 'rotate-90': isGroupExpanded(row.key) }"
              ></i>
            </button>
            <ul v-show="!collapsed && isGroupExpanded(row.key)" class="mt-1 space-y-1 pl-4">
              <li v-for="child in row.children" :key="child.key">
                <NuxtLink
                  :to="child.link"
                  class="flex items-center gap-3 rounded-xl px-3.5 py-2 text-2sm font-medium transition-colors"
                  :class="isChildActive(child.link) ? 'font-semibold' : 'text-white/70 hover:bg-white/10 hover:text-white'"
                  :style="isChildActive(child.link) ? { background: GOLD, color: NAVY } : {}"
                  :title="child.label"
                >
                  <i class="fa shrink-0 text-center" :class="child.icon" style="width: 1rem; font-size: 0.75rem"></i>
                  <span class="truncate">{{ child.label }}</span>
                </NuxtLink>
              </li>
            </ul>
          </template>
        </li>
      </ul>

      <!-- Support card (hidden in the collapsed/icon-only rail) -->
      <div v-show="!collapsed" class="p-3">
        <div class="rounded-2xl border p-4 text-center" :style="{ background: NAVY_LIGHT, borderColor: 'rgba(255,255,255,0.12)' }">
          <div
            class="mx-auto mb-2 flex size-9 items-center justify-center rounded-full"
            :style="{ background: 'rgba(245,165,36,0.18)', color: GOLD }"
          >
            <i class="fa fa-headset"></i>
          </div>
          <p class="text-2sm font-bold text-white">Besoin d'aide ?</p>
          <p class="mb-3 text-2xs text-white/60">Contactez le support</p>
          <button
            type="button"
            class="inline-block w-full rounded-full py-1.5 text-2xs font-bold"
            :style="{ background: GOLD, color: NAVY }"
            @click="showSupport = true"
          >
            Support
          </button>
        </div>
      </div>
    </div>

    <div v-if="showSupport" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" @click.self="showSupport = false">
      <Transition
        appear
        enter-active-class="transition duration-200"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div class="w-full max-w-sm rounded-2xl bg-card p-6">
          <div class="mb-4 text-center">
            <span
              class="mx-auto mb-3 flex size-14 items-center justify-center rounded-full"
              :style="{ background: 'rgba(245,165,36,0.15)', color: GOLD }"
            >
              <i class="fa fa-headset text-2xl"></i>
            </span>
            <h4 class="text-base font-bold" :style="{ color: NAVY }">Besoin d'aide ?</h4>
            <p class="text-2sm text-body">Consultez la documentation ou contactez l'éditeur</p>
          </div>

          <NuxtLink
            to="/documentation"
            class="mb-4 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-2sm font-bold text-white"
            :style="{ background: NAVY }"
            @click="showSupport = false"
          >
            <i class="fa fa-book"></i>Voir la documentation
          </NuxtLink>

          <div class="rounded-xl p-4" style="background: #F5F7FB">
            <p class="mb-1.5 font-bold" :style="{ color: NAVY }">
              <i class="fa fa-building mr-1.5"></i>Pene Corporation — éditeur de logiciel
            </p>
            <p class="mb-1 text-2sm">
              <i class="fa fa-phone mr-1.5" :style="{ color: GOLD }"></i>Téléphone : <strong>+221 78 179 17 90</strong>
            </p>
            <p class="text-2sm">
              <i class="fa fa-envelope mr-1.5" :style="{ color: GOLD }"></i>Email : <strong>contact@gorapene.com</strong>
            </p>
          </div>

          <p class="mt-4 text-center text-2xs text-body/70">Une conception de Gora Pene</p>

          <button
            type="button"
            class="btn mt-4 w-full border border-border"
            @click="showSupport = false"
          >
            Fermer
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>
