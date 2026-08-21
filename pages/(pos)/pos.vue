<script lang="ts" setup>
definePageMeta({ layout: "pos" });

const { user, clear: clearSession } = useUserSession();
const route = useRoute();
const { lines, addProduct, itemCount, total, clear } = useCart();
const { playSuccess } = useClickSound();

const { data: company } = await useFetch("/api/company");
const { data: categories } = await useFetch("/api/categories");
const { data: products, refresh: refreshProducts } = await useFetch("/api/products");
const { data: cashSession } = await useFetch("/api/cash-sessions/current");
const { data: cashRegisters } = await useFetch("/api/cash-registers");

const search = ref("");
const activeCategoryId = ref<number | null>(null);
const viewMode = ref<"grid" | "list">("grid");
const showOrderDrawer = ref(false);
const showPayment = ref(false);
const showUserMenu = ref(false);
const showCloseSession = ref(false);
const paying = ref(false);
const lastSale = ref<any>(null);
const errorMessage = ref("");
const selectedMethod = ref<"CASH" | "WAVE" | "ORANGE_MONEY" | "CARD">("CASH");
const autoPrint = ref(false);

const now = ref(new Date());
let clockTimer: ReturnType<typeof setInterval> | undefined;
onMounted(() => {
  clockTimer = setInterval(() => (now.value = new Date()), 30_000);
});
onUnmounted(() => clockTimer && clearInterval(clockTimer));

const dateLabel = computed(() =>
  now.value.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "long", year: "numeric" })
);
const timeLabel = computed(() => now.value.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }));

const filteredProducts = computed(() => {
  const term = search.value.trim().toLowerCase();
  return (products.value ?? []).filter((p: any) => {
    if (activeCategoryId.value !== null && p.categoryId !== activeCategoryId.value) return false;
    if (!term) return true;
    return (
      p.label.toLowerCase().includes(term) ||
      p.reference?.toLowerCase().includes(term) ||
      p.barcode?.toLowerCase().includes(term)
    );
  });
});

function onSearchEnter() {
  const term = search.value.trim();
  if (!term) return;
  const exact = (products.value ?? []).find((p: any) => p.barcode === term);
  if (exact) {
    addProduct(exact);
    search.value = "";
  }
}

function selectProduct(product: any) {
  addProduct(product);
}

function onSessionOpened(session: any) {
  cashSession.value = session;
}

function onSessionClosed() {
  showCloseSession.value = false;
  cashSession.value = null;
}

async function confirmPayment(payload: { method: "CASH" | "CARD" | "WAVE" | "ORANGE_MONEY"; amount: number; printImmediately: boolean }) {
  if (!cashSession.value) return;
  paying.value = true;
  errorMessage.value = "";
  try {
    const sale = await $fetch("/api/sales", {
      method: "POST",
      body: {
        cashSessionId: cashSession.value.id,
        lines: lines.value.map((l) => ({
          productId: l.productId,
          quantity: l.quantity,
          discount: l.discount,
        })),
        payments: [{ method: payload.method, amount: payload.amount }],
      },
    });
    lastSale.value = { ...sale, user: { name: user.value?.name ?? "" } };
    autoPrint.value = payload.printImmediately;
    playSuccess();
    showPayment.value = false;
    clear();
    await refreshProducts();
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur lors du paiement";
  } finally {
    paying.value = false;
  }
}

watch(lastSale, async (sale) => {
  if (sale && autoPrint.value) {
    autoPrint.value = false;
    await nextTick();
    window.print();
  }
});

function newSale() {
  lastSale.value = null;
}

async function logout() {
  try {
    await clearSession();
  } finally {
    await navigateTo("/login");
  }
}

function lockScreen() {
  showUserMenu.value = false;
  navigateTo(`/page-lock-screen?redirect=${encodeURIComponent(route.path)}`);
}
</script>

<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <!-- Top bar. Padded for a notch/status-bar via env(safe-area-inset-*)
         since this bar is the very top of the screen when installed as a
         standalone PWA on iOS/Android (see app.vue's apple-mobile-web-app
         meta tags). -->
    <div
      class="flex items-center gap-4 border-b border-border bg-card px-4 py-2.5"
      style="padding-top: max(0.625rem, env(safe-area-inset-top)); padding-left: max(1rem, env(safe-area-inset-left)); padding-right: max(1rem, env(safe-area-inset-right))"
    >
      <button
        type="button"
        class="relative flex size-11 shrink-0 items-center justify-center rounded-lg text-xl lg:hidden"
        @click="showOrderDrawer = true"
      >
        <i class="fa fa-shopping-cart"></i>
        <span
          v-if="itemCount"
          class="absolute right-1 top-1 flex size-4.5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white"
          >{{ itemCount }}</span
        >
      </button>

      <NuxtLink to="/" class="flex shrink-0 items-center gap-2">
        <span class="flex size-9 items-center justify-center rounded-xl bg-primary text-lg text-white">🧾</span>
        <span class="max-sm:hidden leading-tight">
          <span class="block text-base font-extrabold">CaisseBi</span>
          <span class="block text-2xs text-body">{{ cashSession?.cashRegister?.name ?? "Aucune caisse ouverte" }}</span>
        </span>
      </NuxtLink>

      <div class="relative min-w-0 flex-1">
        <i class="fa fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-body text-2xs"></i>
        <input
          v-model="search"
          type="search"
          placeholder="Rechercher un produit ou scanner un code-barres..."
          class="h-10 w-full rounded-full border border-border bg-bodybg pl-9 pr-3 focus:border-primary"
          @keyup.enter="onSearchEnter"
        />
      </div>

      <NuxtLink
        to="/"
        class="flex shrink-0 items-center gap-2 rounded-full border border-border px-3.5 py-2 text-2sm font-semibold hover:border-primary"
        title="Retour au tableau de bord"
      >
        <i class="fa fa-table-columns"></i>
        <span class="max-sm:hidden">Tableau de bord</span>
      </NuxtLink>

      <div class="relative shrink-0">
        <button
          type="button"
          class="flex items-center gap-2 rounded-full border border-border py-1.5 pl-1.5 pr-3 hover:border-primary"
          @click="showUserMenu = !showUserMenu"
        >
          <span class="flex size-7 items-center justify-center rounded-full bg-primarylight text-primary">
            <i class="fa fa-user text-2xs"></i>
          </span>
          <span class="max-sm:hidden text-2sm font-semibold">{{ user?.name }}</span>
          <i class="fa fa-chevron-down text-2xs text-body"></i>
        </button>
        <div v-if="showUserMenu" class="fixed inset-0 z-10" @click="showUserMenu = false" />
        <div
          v-if="showUserMenu"
          class="absolute right-0 top-full z-20 mt-2 w-52 rounded-xl border border-border bg-card p-1.5 shadow-lg"
        >
          <p class="px-2.5 py-1.5 text-2xs text-body">{{ user?.role }}</p>
          <button
            v-if="cashSession && user?.role !== 'CASHIER'"
            type="button"
            class="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left hover:bg-bodybg"
            @click="showCloseSession = true; showUserMenu = false"
          >
            <i class="fa fa-cash-register text-body"></i> Fermer la caisse
          </button>
          <button
            type="button"
            class="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left hover:bg-bodybg"
            @click="lockScreen"
          >
            <i class="fa fa-lock text-body"></i> Verrouiller
          </button>
          <button
            type="button"
            class="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-danger hover:bg-dangerlight"
            @click="logout"
          >
            <i class="fa fa-sign-out-alt"></i> Déconnexion
          </button>
        </div>
      </div>

      <ClientOnly>
        <div class="max-md:hidden shrink-0 text-end text-2xs text-body">
          <p class="capitalize">{{ dateLabel }}</p>
          <p class="font-semibold text-body">{{ timeLabel }}</p>
        </div>
      </ClientOnly>
    </div>

    <div class="flex items-center justify-between border-b border-border bg-card">
      <PosCategoryTabs
        class="flex-1"
        :categories="categories ?? []"
        :active-id="activeCategoryId"
        @select="activeCategoryId = $event"
      />
      <div class="max-sm:hidden shrink-0 flex items-center gap-1 pr-4">
        <button
          type="button"
          class="flex size-8 items-center justify-center rounded-lg"
          :class="viewMode === 'grid' ? 'bg-primary text-white' : 'bg-primarylight text-primary'"
          title="Vue grille"
          @click="viewMode = 'grid'"
        >
          <i class="fa fa-th-large text-2xs"></i>
        </button>
        <button
          type="button"
          class="flex size-8 items-center justify-center rounded-lg"
          :class="viewMode === 'list' ? 'bg-primary text-white' : 'bg-primarylight text-primary'"
          title="Vue liste"
          @click="viewMode = 'list'"
        >
          <i class="fa fa-list text-2xs"></i>
        </button>
      </div>
    </div>

    <p v-if="errorMessage" class="bg-dangerlight text-danger px-4 py-2 text-sm">{{ errorMessage }}</p>

    <div class="flex min-h-0 flex-1 overflow-hidden">
      <div class="min-h-0 flex-1 overflow-y-auto">
        <PosProductGrid
          :products="filteredProducts"
          :currency="company?.currency ?? ''"
          :view-mode="viewMode"
          @select="selectProduct"
        />
      </div>

      <!-- Order panel: fixed column on desktop, stays put while products scroll -->
      <div class="max-lg:hidden h-full w-[26rem] shrink-0 border-l border-border">
        <PosOrderPanel
          :currency="company?.currency ?? ''"
          :can-edit-price="user?.role === 'OWNER' || user?.role === 'MANAGER' || user?.role === 'GERANT'"
          v-model:selected-method="selectedMethod"
          @pay="showPayment = true"
        />
      </div>
    </div>

    <!-- Order drawer: mobile -->
    <div v-if="showOrderDrawer" class="fixed inset-0 z-40 lg:hidden">
      <div class="absolute inset-0 bg-black/50" @click="showOrderDrawer = false" />
      <div class="absolute inset-y-0 right-0 w-full max-w-sm">
        <PosOrderPanel
          :currency="company?.currency ?? ''"
          :can-edit-price="user?.role === 'OWNER' || user?.role === 'MANAGER' || user?.role === 'GERANT'"
          v-model:selected-method="selectedMethod"
          @pay="showPayment = true"
          @close="showOrderDrawer = false"
        />
      </div>
    </div>

    <PosPaymentModal
      v-if="showPayment"
      :total="total"
      :currency="company?.currency ?? ''"
      :loading="paying"
      :initial-method="selectedMethod"
      @close="showPayment = false"
      @confirm="confirmPayment"
    />

    <PosReceiptView v-if="lastSale" :sale="lastSale" :company="company" @new-sale="newSale" />

    <!-- Blocking: cash register must be open before any operation -->
    <PosOpenSessionModal v-if="!cashSession" :registers="cashRegisters ?? []" @opened="onSessionOpened" />

    <PosCloseSessionModal
      v-if="showCloseSession && cashSession"
      :session-id="cashSession.id"
      :currency="company?.currency ?? ''"
      @close="showCloseSession = false"
      @closed="onSessionClosed"
    />
  </div>
</template>
