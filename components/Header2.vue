<script lang="ts" setup>
import { productAvatar } from "~/lib/avatar";
import { Store } from "~/store/Store";

const { toggleMenu, viewportWidth, mobileNavOpen } = Store;
const { user, clear: clearSession } = useUserSession();

const NAVY = "#182B6B";
const GOLD = "#F5A524";
// Kept in sync with Sidebar.vue's WIDTH_EXPANDED/WIDTH_COLLAPSED — see that
// file for why this is an inline style instead of the template's own
// `.menu-toggle` CSS (unreliable in this dev setup's double-injected CSS).
const PADDING_EXPANDED = "17.5rem";
const PADDING_COLLAPSED = "5rem";

// Same mobile-nav breakpoint as Sidebar.vue/app.vue: below it the sidebar is
// an off-canvas drawer rather than a column that pushes this header over, so
// the header should span the full width instead of leaving room for it.
const MOBILE_NAV_BREAKPOINT = 992;
const isMobileNav = computed(() => viewportWidth.value < MOBILE_NAV_BREAKPOINT);

function onHamburgerClick() {
  if (isMobileNav.value) {
    mobileNavOpen.value = !mobileNavOpen.value;
  } else {
    toggleMenu.value = !toggleMenu.value;
  }
}

const { data: company } = await useFetch("/api/company");
const { data: summary } = await useFetch("/api/dashboard/summary");

// Fullscreen toggle. Guarded for SSR: document doesn't exist on the server.
const isFullscreen = ref(false);
function toggleFullscreen() {
  if (typeof document === "undefined") return;
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}
function syncFullscreenState() {
  isFullscreen.value = !!document.fullscreenElement;
}
onMounted(() => document.addEventListener("fullscreenchange", syncFullscreenState));
onUnmounted(() => document.removeEventListener("fullscreenchange", syncFullscreenState));

const ROLE_LABELS: Record<string, string> = {
  OWNER: "Propriétaire",
  MANAGER: "Manager",
  GERANT: "Gérant",
  CASHIER: "Caissier",
};

const roleLabel = computed(() => ROLE_LABELS[user.value?.role ?? ""] ?? user.value?.role ?? "");
const avatar = computed(() => productAvatar(user.value?.name ?? "?"));
const lowStockCount = computed(() => summary.value?.lowStockCount ?? 0);

const open = reactive({ notif: false, profile: false });

function outsideclickHandler(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (!target.closest("#hdr-notif")) open.notif = false;
  if (!target.closest("#hdr-profile")) open.profile = false;
}
onMounted(() => document.addEventListener("click", outsideclickHandler));
onUnmounted(() => document.removeEventListener("click", outsideclickHandler));

async function logout() {
  try {
    await clearSession();
  } finally {
    await navigateTo("/login");
  }
}
</script>

<template>
  <div
    class="header transition-[padding] duration-300 ease-in-out"
    :style="{
      background: '#fff',
      paddingLeft: isMobileNav ? '0' : toggleMenu ? PADDING_COLLAPSED : PADDING_EXPANDED,
    }"
  >
    <div class="header-content">
      <nav class="navbar flex w-full items-center gap-4">
        <!-- Left: collapse toggle. The logo itself lives in Sidebar.vue,
             pinned to the page's true top-left edge — this header starts to
             the right of the sidebar (see the paddingLeft above), so it can
             never actually be "on the left" of the page, only of its own,
             already-shifted content area. -->
        <div class="flex shrink-0 items-center gap-3">
          <button
            type="button"
            class="flex size-10 shrink-0 items-center justify-center rounded-xl text-lg hover:bg-black/5"
            :style="{ color: NAVY }"
            title="Réduire/agrandir le menu"
            @click="onHamburgerClick"
          >
            <i class="fa fa-bars"></i>
          </button>
          <img
            src="~/assets/images/logo-grace-dor.png"
            alt="La Grâce d'Or"
            class="hidden h-9 w-auto max-w-[9rem] object-contain sm:block"
          />
        </div>

        <!-- Search -->
        <div class="relative min-w-0 flex-1 max-w-xl">
          <i class="fa fa-magnifying-glass pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-body"></i>
          <input
            type="text"
            class="h-11 w-full rounded-full border-0 bg-[#F5F7FB] pl-10 pr-4 text-2sm focus:outline-none focus:ring-2"
            placeholder="Rechercher une vente, un produit, un client..."
            :style="{ '--tw-ring-color': GOLD } as any"
          />
        </div>

        <!-- Right: store pill, notifications, fullscreen, profile — pinned to the far right regardless of how much space the search box uses -->
        <div class="ml-auto flex shrink-0 items-center gap-3">
        <!-- Store pill (single-store install: shows the real company name) -->
        <div class="hidden shrink-0 items-center gap-2 rounded-full px-4 py-2 text-2sm font-semibold sm:flex" :style="{ background: '#F5F7FB', color: NAVY }">
          <i class="fa fa-location-dot" :style="{ color: GOLD }"></i>
          <span class="max-w-[10rem] truncate">{{ company?.name || "Ma boutique" }}</span>
        </div>

        <!-- Notifications -->
        <div id="hdr-notif" class="relative shrink-0">
          <button
            type="button"
            class="relative flex size-10 items-center justify-center rounded-full hover:bg-black/5"
            :style="{ color: NAVY }"
            @click="open.notif = !open.notif"
          >
            <i class="fa fa-bell text-lg"></i>
            <span
              v-if="lowStockCount > 0"
              class="absolute -right-0.5 -top-0.5 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-danger px-1 text-[10px] font-bold text-white"
            >
              {{ lowStockCount > 9 ? "9+" : lowStockCount }}
            </span>
          </button>
          <div
            v-show="open.notif"
            class="absolute right-0 top-full z-20 mt-3 w-80 overflow-hidden rounded-xl border border-border bg-white shadow-dropdown"
          >
            <div class="border-b border-border px-4 py-3 font-semibold" :style="{ color: NAVY }">Alertes stock faible</div>
            <div class="max-h-72 overflow-y-auto">
              <p v-if="!summary?.lowStockProducts?.length" class="px-4 py-6 text-center text-2sm text-body">
                Aucune alerte pour le moment.
              </p>
              <div
                v-for="p in summary?.lowStockProducts ?? []"
                :key="p.id"
                class="flex items-center justify-between border-b border-border px-4 py-2.5 last:border-0"
              >
                <span class="truncate text-2sm">{{ p.label }}</span>
                <span class="shrink-0 rounded-full bg-dangerlight px-2 py-0.5 text-2xs font-bold text-danger">
                  {{ p.quantity }} / {{ p.alertThreshold }}
                </span>
              </div>
            </div>
            <NuxtLink
              :to="{ path: '/stock', query: { filter: 'low' } }"
              class="block border-t border-border px-4 py-2.5 text-center text-2sm font-semibold"
              :style="{ color: NAVY }"
            >
              Voir le stock →
            </NuxtLink>
          </div>
        </div>

        <!-- Fullscreen -->
        <button
          type="button"
          class="hidden size-10 shrink-0 items-center justify-center rounded-full hover:bg-black/5 sm:flex"
          :style="{ color: NAVY }"
          :title="isFullscreen ? 'Quitter le plein écran' : 'Plein écran'"
          @click="toggleFullscreen"
        >
          <i class="fa" :class="isFullscreen ? 'fa-compress' : 'fa-expand'"></i>
        </button>

        <!-- Profile -->
        <div id="hdr-profile" class="relative shrink-0">
          <button type="button" class="flex items-center gap-2.5 rounded-full py-1 pl-1 pr-2 hover:bg-black/5" @click="open.profile = !open.profile">
            <img :src="avatar" alt="" class="size-10 shrink-0 rounded-full object-cover" />
            <div class="hidden text-left leading-tight md:block">
              <p class="text-2sm font-bold" :style="{ color: NAVY }">{{ user?.name ?? "…" }}</p>
              <p class="text-2xs text-body">{{ roleLabel }}</p>
            </div>
            <i class="fa fa-chevron-down hidden text-2xs text-body md:inline"></i>
          </button>
          <div v-show="open.profile" class="absolute right-0 top-full z-20 mt-3 w-56 overflow-hidden rounded-xl border border-border bg-white shadow-dropdown">
            <div class="border-b border-border px-4 py-3">
              <p class="text-2sm font-bold" :style="{ color: NAVY }">{{ user?.name }}</p>
              <p class="text-2xs text-body">{{ user?.email }}</p>
            </div>
            <NuxtLink v-if="user?.role !== 'CASHIER'" to="/parametres" class="flex items-center gap-2.5 px-4 py-2.5 text-2sm hover:bg-[#F5F7FB]">
              <i class="fa fa-gear" :style="{ color: NAVY }"></i>Paramètres
            </NuxtLink>
            <button type="button" class="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-2sm text-danger hover:bg-dangerlight" @click="logout">
              <i class="fa fa-right-from-bracket"></i>Déconnexion
            </button>
          </div>
        </div>
        </div>
      </nav>
    </div>
  </div>
</template>
