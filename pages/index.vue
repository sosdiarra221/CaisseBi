<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
import { formatAmount, formatDate, WEEKDAYS_FR } from "~/lib/format";
import { productAvatar } from "~/lib/avatar";
import { Store } from "~/store/Store";

definePageMeta({ layout: "home" });

const { toggleMenu, viewportWidth } = Store;

const NAVY = "#182B6B";
const GOLD = "#F5A524";
const DONUT_COLORS = [NAVY, GOLD, "#3AC977", "#5B8DEF", "#E55555", "#8891B3"];
// Kept in sync with Sidebar.vue/Header2.vue's collapse widths — see the
// comment in Sidebar.vue for why this is a plain inline style.
const MARGIN_EXPANDED = "17.4rem";
const MARGIN_COLLAPSED = "5rem";
// Same mobile-nav breakpoint as Sidebar.vue/Header2.vue/app.vue: below it
// the sidebar is an off-canvas drawer, so this page shouldn't leave room
// for it.
const isMobileNav = computed(() => viewportWidth.value < 992);

const { data: summary, refresh: refreshSummary } = await useFetch("/api/dashboard/summary");
const { data: company, refresh: refreshCompany } = await useFetch("/api/company");

const currency = computed(() => company.value?.currency ?? "FCFA");

// Live clock for the greeting pill, same pattern as pages/(pos)/pos.vue.
// Rendered inside <ClientOnly> in the template: `new Date()` evaluated
// during SSR vs. at hydration time can land a tick apart and trip a
// hydration mismatch — pos.vue hit exactly this and this avoids repeating it.
const now = ref(new Date());
let clockTimer: ReturnType<typeof setInterval> | undefined;

// Dashboard polling: a plain interval refetch is "real-time enough" for a
// business dashboard — a websocket/SSE push would be a lot of moving parts
// for numbers where a ~30s lag is invisible to a human glancing at a
// screen. Paused while the tab is hidden so it doesn't burn requests in a
// background tab, and skips overlapping itself if a fetch is still pending.
let statsTimer: ReturnType<typeof setInterval> | undefined;
function pollStats() {
  if (document.hidden) return;
  refreshSummary();
  refreshCompany();
}
onMounted(() => {
  clockTimer = setInterval(() => (now.value = new Date()), 30_000);
  statsTimer = setInterval(pollStats, 30_000);
});
onUnmounted(() => {
  clockTimer && clearInterval(clockTimer);
  statsTimer && clearInterval(statsTimer);
});

const todayLabel = computed(() => `${WEEKDAYS_FR[now.value.getDay()]} ${formatDate(now.value)}`);
const nowTimeLabel = computed(() => now.value.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }));

function pctLabel(pct: number): string {
  const abs = Math.abs(pct);
  return `${abs.toFixed(1).replace(".", ",")}%`;
}

// --- Stat cards ------------------------------------------------------------
const revenueTrend = computed(() => summary.value?.revenueTrendPct ?? null);
const salesTrend = computed(() => summary.value?.salesTrendPct ?? null);

// --- "Évolution des ventes" (hourly revenue) chart --------------------------
const avgBasket = computed(() => {
  const count = summary.value?.salesCountToday ?? 0;
  return count > 0 ? (summary.value?.revenueToday ?? 0) / count : 0;
});

const hourlySeries = computed(() => [
  { name: "Chiffre d'affaires", data: (summary.value?.hourly ?? []).map((h) => Math.round(h.revenue)) },
]);
const hourlyOptions = computed(() => ({
  chart: { type: "area", height: 260, toolbar: { show: false }, zoom: { enabled: false } },
  colors: [GOLD],
  stroke: { curve: "smooth", width: 3 },
  markers: { size: 0, hover: { size: 5 } },
  fill: {
    type: "gradient",
    gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.02, stops: [0, 90, 100] },
  },
  dataLabels: { enabled: false },
  grid: { borderColor: "#EEF0F7", strokeDashArray: 4, padding: { left: 8, right: 8 } },
  xaxis: {
    categories: (summary.value?.hourly ?? []).map((h) => h.label),
    labels: { style: { colors: "#8891B3", fontSize: "11px" } },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: { labels: { style: { colors: "#8891B3", fontSize: "11px" }, formatter: (v: number) => formatAmount(Math.round(v)) } },
  tooltip: { y: { formatter: (v: number) => `${formatAmount(v)} ${currency.value}` } },
}));

// --- "Répartition des ventes" (category) donut ------------------------------
const donutSeries = computed(() => (summary.value?.categoryBreakdown ?? []).map((c) => Math.round(c.total)));
const donutOptions = computed(() => ({
  chart: { type: "donut" },
  labels: (summary.value?.categoryBreakdown ?? []).map((c) => c.name),
  colors: DONUT_COLORS,
  legend: { show: false },
  dataLabels: { enabled: false },
  stroke: { width: 2, colors: ["#fff"] },
  plotOptions: {
    pie: {
      donut: {
        size: "72%",
        labels: {
          show: true,
          name: { show: true, offsetY: 18, color: "#8891B3", fontSize: "12px" },
          value: {
            show: true,
            offsetY: -14,
            fontSize: "16px",
            fontWeight: 700,
            color: NAVY,
            formatter: () => formatAmount(summary.value?.revenueToday ?? 0),
          },
          total: {
            show: true,
            label: "Total du jour",
            color: "#8891B3",
            fontSize: "12px",
            formatter: () => formatAmount(summary.value?.revenueToday ?? 0),
          },
        },
      },
    },
  },
  tooltip: { y: { formatter: (v: number) => `${formatAmount(v)} ${currency.value}` } },
}));
const categoryLegend = computed(() => {
  const total = summary.value?.revenueToday || 0;
  return (summary.value?.categoryBreakdown ?? []).map((c, i) => ({
    name: c.name,
    total: c.total,
    pct: total > 0 ? Math.round((c.total / total) * 100) : 0,
    color: DONUT_COLORS[i % DONUT_COLORS.length],
  }));
});

// --- "Mode de paiement" -----------------------------------------------------
const paymentTiles = computed(() => {
  const b = summary.value?.paymentBreakdown ?? { CASH: 0, CARD: 0, WAVE: 0, ORANGE_MONEY: 0 };
  const mobile = (b.WAVE ?? 0) + (b.ORANGE_MONEY ?? 0);
  const tiles: { key: string; label: string; icon: string; amount: number | null }[] = [
    { key: "CASH", label: "Espèces", icon: "fa-money-bill-wave", amount: b.CASH ?? 0 },
    { key: "CARD", label: "Carte bancaire", icon: "fa-credit-card", amount: b.CARD ?? 0 },
    { key: "ORANGE_MONEY", label: "Orange Money", icon: "fa-mobile-screen-button", amount: b.ORANGE_MONEY ?? 0 },
    { key: "WAVE", label: "Wave", icon: "fa-mobile-screen-button", amount: b.WAVE ?? 0 },
    { key: "MOBILE", label: "Mobile Money", icon: "fa-wallet", amount: mobile },
    { key: "OTHER", label: "+ Autres", icon: "fa-ellipsis", amount: null },
  ];
  const max = Math.max(0, ...tiles.filter((t) => t.amount !== null).map((t) => t.amount as number));
  return tiles.map((t) => ({ ...t, highlighted: t.amount !== null && max > 0 && t.amount === max }));
});

// --- "Dernières ventes" -----------------------------------------------------
function saleTime(iso: string) {
  return new Date(iso).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

// --- License card -------------------------------------------------------
const { data: license } = useLicenseStatus();
const showLicenseModal = ref(false);
</script>

<template>
  <div
    class="content-body transition-[margin] duration-300 ease-in-out"
    :style="{
      background: '#F5F7FB',
      minHeight: '100vh',
      marginLeft: isMobileNav ? '0' : toggleMenu ? MARGIN_COLLAPSED : MARGIN_EXPANDED,
    }"
  >
    <div class="container-fluid px-4 py-6 sm:px-6">
      <!-- Greeting -->
      <div class="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-bold" :style="{ color: NAVY }">Bonjour 👋</h2>
          <p class="text-body">Voici un aperçu de l'activité de votre point de vente aujourd'hui.</p>
        </div>
        <ClientOnly>
          <div class="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-2sm font-semibold shadow-sm" :style="{ color: NAVY }">
            <i class="fa fa-calendar" :style="{ color: GOLD }"></i>
            <span>{{ todayLabel }}</span>
            <span class="text-body">·</span>
            <span>{{ nowTimeLabel }}</span>
            <i class="fa fa-chevron-down text-2xs text-body"></i>
          </div>
          <template #fallback>
            <div class="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-2sm font-semibold shadow-sm" :style="{ color: NAVY }">
              <i class="fa fa-calendar" :style="{ color: GOLD }"></i>
              <span>&nbsp;</span>
            </div>
          </template>
        </ClientOnly>
      </div>

      <!-- Stat cards -->
      <div class="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <!-- Chiffre d'affaires -->
        <div class="relative rounded-2xl bg-white p-5 shadow-sm">
          <span
            v-if="revenueTrend !== null"
            class="absolute right-4 top-4 flex items-center gap-1 text-2xs font-bold"
            :class="revenueTrend >= 0 ? 'text-success' : 'text-danger'"
          >
            <i class="fa" :class="revenueTrend >= 0 ? 'fa-caret-up' : 'fa-caret-down'"></i>
            {{ pctLabel(revenueTrend) }} vs hier
          </span>
          <div class="flex items-center gap-3.5">
            <div class="flex size-12 shrink-0 items-center justify-center rounded-full" style="background: #E8EFFE">
              <i class="fa fa-dollar-sign text-lg" style="color: #3B6FE0"></i>
            </div>
            <div class="min-w-0">
              <p class="mb-0.5 text-2xs text-body">Chiffre d'affaires</p>
              <p class="truncate text-xl font-bold" :style="{ color: NAVY }">{{ formatAmount(summary?.revenueToday ?? 0) }} {{ currency }}</p>
            </div>
          </div>
        </div>

        <!-- Ventes du jour -->
        <div class="relative rounded-2xl bg-white p-5 shadow-sm">
          <span
            v-if="salesTrend !== null"
            class="absolute right-4 top-4 flex items-center gap-1 text-2xs font-bold"
            :class="salesTrend >= 0 ? 'text-success' : 'text-danger'"
          >
            <i class="fa" :class="salesTrend >= 0 ? 'fa-caret-up' : 'fa-caret-down'"></i>
            {{ pctLabel(salesTrend) }} vs hier
          </span>
          <div class="flex items-center gap-3.5">
            <div class="flex size-12 shrink-0 items-center justify-center rounded-full" style="background: #E4F9EE">
              <i class="fa fa-cart-shopping text-lg" style="color: #1FA971"></i>
            </div>
            <div class="min-w-0">
              <p class="mb-0.5 text-2xs text-body">Ventes du jour</p>
              <p class="truncate text-xl font-bold" :style="{ color: NAVY }">{{ summary?.salesCountToday ?? 0 }}</p>
            </div>
          </div>
        </div>

        <!-- Stock faible -->
        <div class="relative rounded-2xl bg-white p-5 shadow-sm">
          <div class="flex items-center gap-3.5">
            <div class="flex size-12 shrink-0 items-center justify-center rounded-full" style="background: #FDE9E9">
              <i class="fa fa-box text-lg" style="color: #E55555"></i>
            </div>
            <div class="min-w-0">
              <p class="mb-0.5 text-2xs text-body">Stock faible</p>
              <p class="truncate text-xl font-bold" :class="(summary?.lowStockCount ?? 0) > 0 ? 'text-danger' : ''" :style="(summary?.lowStockCount ?? 0) > 0 ? {} : { color: NAVY }">
                {{ summary?.lowStockCount ?? 0 }}
              </p>
            </div>
          </div>
        </div>

        <!-- Sessions de caisse ouvertes (stand-in for "Clients enregistrés" — this app has no CRM/customer model) -->
        <div class="relative rounded-2xl bg-white p-5 shadow-sm">
          <div class="flex items-center gap-3.5">
            <div class="flex size-12 shrink-0 items-center justify-center rounded-full" style="background: #F1E9FE">
              <i class="fa fa-cash-register text-lg" style="color: #8B5CF6"></i>
            </div>
            <div class="min-w-0">
              <p class="mb-0.5 text-2xs text-body">Sessions de caisse ouvertes</p>
              <p class="truncate text-xl font-bold" :style="{ color: NAVY }">{{ summary?.openSessionsCount ?? 0 }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Évolution / Répartition -->
      <div class="mb-6 grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div class="overflow-hidden rounded-2xl bg-white shadow-sm xl:col-span-2">
          <div class="flex items-center justify-between px-5 py-3.5 text-white" :style="{ background: NAVY }">
            <span class="flex items-center gap-2 font-semibold"><i class="fa fa-chart-line"></i>Évolution des ventes</span>
            <span class="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-2xs font-semibold">
              Aujourd'hui <i class="fa fa-chevron-down text-[10px]"></i>
            </span>
          </div>
          <div class="p-5">
            <div class="mb-5 grid grid-cols-3 gap-3">
              <div class="flex items-center gap-2.5">
                <span class="flex size-9 shrink-0 items-center justify-center rounded-lg" :style="{ background: '#FCEFD9', color: GOLD }">
                  <i class="fa fa-sack-dollar"></i>
                </span>
                <div class="min-w-0">
                  <p class="truncate text-xs text-body">Chiffre d'affaires</p>
                  <p class="truncate text-sm font-bold" :style="{ color: NAVY }">{{ formatAmount(summary?.revenueToday ?? 0) }}</p>
                </div>
              </div>
              <div class="flex items-center gap-2.5">
                <span class="flex size-9 shrink-0 items-center justify-center rounded-lg" style="background: #E4F9EE; color: #1FA971">
                  <i class="fa fa-cart-shopping"></i>
                </span>
                <div class="min-w-0">
                  <p class="truncate text-xs text-body">Ventes</p>
                  <p class="truncate text-sm font-bold" :style="{ color: NAVY }">{{ summary?.salesCountToday ?? 0 }}</p>
                </div>
              </div>
              <div class="flex items-center gap-2.5">
                <span class="flex size-9 shrink-0 items-center justify-center rounded-lg" style="background: #E8EFFE; color: #3B6FE0">
                  <i class="fa fa-basket-shopping"></i>
                </span>
                <div class="min-w-0">
                  <p class="truncate text-xs text-body">Panier moyen</p>
                  <p class="truncate text-sm font-bold" :style="{ color: NAVY }">{{ formatAmount(Math.round(avgBasket)) }}</p>
                </div>
              </div>
            </div>
            <ClientOnly>
              <VueApexCharts type="area" height="260" :options="hourlyOptions" :series="hourlySeries" />
            </ClientOnly>
          </div>
        </div>

        <div class="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div class="flex items-center gap-2 px-5 py-3.5 font-semibold text-white" :style="{ background: NAVY }">
            <i class="fa fa-chart-pie"></i>Répartition des ventes
          </div>
          <div class="p-5">
            <div v-if="!summary?.categoryBreakdown?.length" class="py-10 text-center text-2sm text-body">
              Aucune vente aujourd'hui pour le moment.
            </div>
            <template v-else>
              <ClientOnly>
                <VueApexCharts type="donut" height="220" :options="donutOptions" :series="donutSeries" />
              </ClientOnly>
              <ul class="mt-3 space-y-2">
                <li v-for="c in categoryLegend" :key="c.name" class="flex items-center justify-between text-2sm">
                  <span class="flex items-center gap-2 truncate">
                    <span class="size-2.5 shrink-0 rounded-full" :style="{ background: c.color }"></span>
                    <span class="truncate">{{ c.name }}</span>
                  </span>
                  <span class="shrink-0 font-semibold" :style="{ color: NAVY }">{{ c.pct }}%</span>
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>

      <!-- Dernières ventes / Mode de paiement -->
      <div class="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div class="overflow-hidden rounded-2xl bg-white shadow-sm xl:col-span-2">
          <div class="flex items-center justify-between px-5 py-4">
            <h4 class="text-base font-bold" :style="{ color: NAVY }">Dernières ventes</h4>
            <NuxtLink to="/ventes" class="text-2sm font-semibold" :style="{ color: GOLD }">Voir tout →</NuxtLink>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-2sm">
              <thead>
                <tr class="border-y border-border text-left text-2xs uppercase text-body">
                  <th class="px-5 py-2.5 font-semibold">Produit</th>
                  <th class="px-3 py-2.5 font-semibold">Quantité</th>
                  <th class="px-3 py-2.5 font-semibold">Prix unitaire</th>
                  <th class="px-3 py-2.5 font-semibold">Total</th>
                  <th class="px-5 py-2.5 text-right font-semibold">Heure</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="!summary?.recentSaleLines?.length">
                  <td colspan="5" class="px-5 py-8 text-center text-body">Aucune vente récente.</td>
                </tr>
                <tr v-for="(line, i) in summary?.recentSaleLines ?? []" :key="`${line.saleId}-${i}`" class="border-b border-border last:border-0">
                  <td class="px-5 py-2.5">
                    <div class="flex items-center gap-2.5">
                      <img :src="productAvatar(line.label)" alt="" class="size-8 shrink-0 rounded-lg object-cover" />
                      <span class="truncate font-medium" :style="{ color: NAVY }">{{ line.label }}</span>
                    </div>
                  </td>
                  <td class="px-3 py-2.5">{{ line.quantity }}</td>
                  <td class="px-3 py-2.5">{{ formatAmount(line.unitPrice) }}</td>
                  <td class="px-3 py-2.5 font-semibold" :style="{ color: NAVY }">{{ formatAmount(line.total) }}</td>
                  <td class="px-5 py-2.5 text-right text-body">{{ saleTime(line.createdAt) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="flex flex-col gap-5">
          <div class="overflow-hidden rounded-2xl bg-white shadow-sm">
            <div class="flex items-center justify-between px-5 py-3.5 text-white" :style="{ background: NAVY }">
              <span class="flex items-center gap-2 font-semibold"><i class="fa fa-wallet"></i>Mode de paiement</span>
              <i class="fa fa-gear text-white/70"></i>
            </div>
            <div class="grid grid-cols-2 gap-2.5 p-4">
              <div
                v-for="tile in paymentTiles"
                :key="tile.key"
                class="rounded-xl border p-3 transition-colors"
                :class="tile.amount === null ? 'opacity-50' : ''"
                :style="{ borderColor: tile.highlighted ? GOLD : '#EEF0F7', background: tile.highlighted ? '#FFF8EC' : '#fff' }"
              >
                <div class="mb-1.5 flex size-8 items-center justify-center rounded-lg" :style="{ background: '#F5F7FB', color: NAVY }">
                  <i class="fa" :class="tile.icon"></i>
                </div>
                <p class="truncate text-2xs text-body">{{ tile.label }}</p>
                <p class="truncate text-2sm font-bold" :style="{ color: NAVY }">
                  {{ tile.amount === null ? "—" : formatAmount(tile.amount) }}
                </p>
              </div>
            </div>
          </div>

          <div class="overflow-hidden rounded-2xl p-5 text-white" :style="{ background: NAVY }">
            <div class="mb-4 flex items-center gap-3">
              <span class="flex size-11 shrink-0 items-center justify-center rounded-full" :style="{ background: 'rgba(245,165,36,0.2)', color: GOLD }">
                <i class="fa fa-shield-halved text-lg"></i>
              </span>
              <div class="min-w-0">
                <p class="font-bold">Licence</p>
                <p v-if="license?.active" class="text-2xs text-white/70">{{ license.daysRemaining }} jour{{ license.daysRemaining === 1 ? "" : "s" }} restant{{ license.daysRemaining === 1 ? "" : "s" }}</p>
                <p v-else class="text-2xs text-danger">Licence expirée</p>
              </div>
            </div>
            <button
              type="button"
              class="w-full rounded-full py-2.5 text-2sm font-bold"
              :style="{ background: GOLD, color: NAVY }"
              @click="showLicenseModal = true"
            >
              <i class="fa fa-key mr-1.5"></i>Gérer la licence
            </button>
          </div>
        </div>
      </div>
    </div>

    <LicenseModal :show="showLicenseModal" @close="showLicenseModal = false" />
  </div>
</template>
