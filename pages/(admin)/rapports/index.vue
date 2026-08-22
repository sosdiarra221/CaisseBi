<script lang="ts" setup>
import { formatAmount, formatDate } from "~/lib/format";

definePageMeta({ layout: "home" });

const NAVY = "#182B6B";
const GOLD = "#F5A524";

const { data: company } = await useFetch("/api/company");
const router = useRouter();

const today = new Date().toISOString().slice(0, 10);
const date = ref(today);

const { data: report, refresh } = await useFetch("/api/reports/daily", {
  query: { date },
});

async function applyFilter() {
  await refresh();
}

// Manual formatting instead of Intl/toLocaleString: this codebase hit real
// SSR/CSR hydration mismatches from Node's ICU data vs the browser's picking
// different output for the same locale (see lib/format.ts). Dates use the
// shared formatDate(); only time-of-day isn't covered there, so stays local.
function pad2(n: number) {
  return String(n).padStart(2, "0");
}
function formatTime(d: Date) {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

const reportDate = computed(() => new Date(`${date.value}T00:00:00`));

const closedAtDate = computed(() => (report.value?.closedAt ? new Date(report.value.closedAt) : null));

// Best-effort city extraction: the Company model has no dedicated "city"
// field, so this takes the first comma-separated segment of the free-text
// address (this codebase's seeded convention is "City, Country", e.g.
// "Dakar, Sénégal" -> "Dakar"). If there's no address, the city portions of
// the document are simply omitted rather than fabricated.
const companyCity = computed(() => {
  const address = company.value?.address;
  if (!address) return "";
  const parts = address
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  return parts.length ? parts[0] : "";
});

const PAYMENT_LABELS: Record<string, { label: string; icon: string }> = {
  CASH: { label: "Espèces", icon: "fa-money-bill-wave" },
  CARD: { label: "Carte bancaire", icon: "fa-credit-card" },
  WAVE: { label: "Wave", icon: "fa-mobile-screen-button" },
  ORANGE_MONEY: { label: "Orange Money", icon: "fa-mobile-screen-button" },
};

const dominantPayment = computed(() => {
  const method = report.value?.dominantPaymentMethod;
  if (!method) return null;
  return PAYMENT_LABELS[method] ?? { label: method, icon: "fa-wallet" };
});

const statCards = computed(() => [
  {
    label: "Chiffre d'affaires total",
    value: `${formatAmount(report.value?.revenue ?? 0)} ${company.value?.currency ?? ""}`,
    icon: "fa-money-bill-wave",
    bg: "#eaf6ee",
    iconBg: "#2fb344",
  },
  {
    label: "Nombre de ventes",
    value: String(report.value?.salesCount ?? 0),
    icon: "fa-receipt",
    bg: "#eaf1fb",
    iconBg: NAVY,
  },
  {
    label: "Articles vendus",
    value: String(report.value?.articlesSold ?? 0),
    icon: "fa-box",
    bg: "#f3eefc",
    iconBg: "#8a5cf6",
  },
  {
    label: "Moyen de paiement",
    value: dominantPayment.value?.label ?? "—",
    icon: dominantPayment.value?.icon ?? "fa-wallet",
    bg: "#fff6e5",
    iconBg: GOLD,
  },
  {
    label: "Commandes annulées",
    value: String(report.value?.cancelledCount ?? 0),
    icon: "fa-ban",
    bg: "#fdecec",
    iconBg: "#e7515a",
  },
]);

const lines = computed(() => report.value?.lines ?? []);
const totalRevenue = computed(() => report.value?.revenue ?? 0);

/**
 * Print-only CSS, hand-authored and injected via useHead rather than
 * Tailwind's `print:` utilities. This dev setup sometimes double-injects the
 * compiled Tailwind stylesheet, and a bare `.hidden` rule from one copy can
 * beat a `.print\:block` media-query rule from the other, silently breaking
 * print output — it already happened on /ventes' receipt modal and /pos'
 * receipt view. Same "print only this element" recipe as ReceiptTicket.vue:
 * hide everything via visibility (doesn't collapse fixed/scrolling
 * ancestors like display:none would), then pull the report out to
 * position:absolute at the page origin so it doesn't depend on ancestor
 * layout during print.
 */
const printCss = `
@media print {
  @page { size: A4 portrait; margin: 12mm; }
  html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; height: auto !important; }
  body * { visibility: hidden !important; }
  #daily-report, #daily-report * { visibility: visible !important; }
  #daily-report {
    display: block !important;
    position: absolute !important;
    inset: 0 auto auto 0 !important;
    width: 100% !important;
    box-shadow: none !important;
    border-radius: 0 !important;
  }
  .rapport-print-hide { display: none !important; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
}
`;

useHead(() => ({
  style: [{ innerHTML: printCss, id: "rapport-print-style" }],
}));

function printReport() {
  window.print();
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Rapports" name="Rapport journalier" />
    <div class="container">
      <!-- Filter bar: excluded from print via .rapport-print-hide -->
      <div class="card !h-auto mb-6 rapport-print-hide">
        <div class="p-5 flex flex-wrap items-end gap-3">
          <button type="button" class="btn border border-border h-10" @click="router.back()">
            <i class="fa fa-arrow-left mr-2"></i>Retour
          </button>
          <div>
            <label class="mb-1 block">Date</label>
            <input v-model="date" type="date" class="h-10 rounded-lg border border-border bg-transparent px-3" />
          </div>
          <button type="button" class="btn bg-primary text-white h-10" @click="applyFilter">Afficher</button>
          <button type="button" class="btn h-10 ml-auto text-white" :style="{ background: NAVY }" @click="printReport">
            <i class="fa fa-print mr-2"></i>Imprimer / Exporter en PDF
          </button>
        </div>
      </div>

      <!-- Printable document -->
      <div id="daily-report" class="mx-auto max-w-[900px] overflow-hidden rounded-2xl bg-white text-black shadow-lg">
        <!-- Gold top bar -->
        <div style="height: 8px" :style="{ background: GOLD }"></div>

        <!-- Header band -->
        <div class="flex flex-wrap items-start justify-between gap-4 p-6">
          <!-- Logo -->
          <div class="flex shrink-0 items-center">
            <img src="assets/images/logo-caissebi.png" alt="CaisseBi" style="max-width: 140px" />
          </div>

          <!-- Center navy banner -->
          <div class="flex-1 min-w-[260px] text-center">
            <div class="mx-auto inline-block rounded-xl px-8 py-3 text-white" :style="{ background: NAVY }">
              <div class="flex items-center justify-center gap-2 text-lg font-extrabold tracking-wide">
                <i class="fa fa-chart-bar" :style="{ color: GOLD }"></i>
                <span>RAPPORT DES VENTES DU JOUR</span>
              </div>
              <div class="mx-auto mt-1 h-[3px] w-24 rounded" :style="{ background: GOLD }"></div>
              <p class="mt-1 text-xs text-white/90">Journal de caisse – {{ company?.name }}</p>
            </div>
          </div>

          <!-- Contact info -->
          <div class="shrink-0 space-y-1 text-right text-xs">
            <p v-if="company?.address" class="flex items-center justify-end gap-1.5">
              <span>{{ company.address }}</span>
              <i class="fa fa-map-marker-alt shrink-0" :style="{ color: GOLD }"></i>
            </p>
            <p v-if="company?.phone" class="flex items-center justify-end gap-1.5">
              <span>{{ company.phone }}</span>
              <i class="fa fa-phone shrink-0" :style="{ color: NAVY }"></i>
            </p>
            <p v-if="company?.email" class="flex items-center justify-end gap-1.5">
              <span>{{ company.email }}</span>
              <i class="fa fa-envelope shrink-0" :style="{ color: NAVY }"></i>
            </p>
            <p v-if="company?.website" class="flex items-center justify-end gap-1.5">
              <span>{{ company.website }}</span>
              <i class="fa fa-globe shrink-0" :style="{ color: NAVY }"></i>
            </p>
          </div>
        </div>

        <!-- Light-blue info bar -->
        <div class="grid grid-cols-3 gap-4 px-6 py-3 text-sm" style="background: #eaf1fb">
          <div>
            <p class="text-xs text-body">Date</p>
            <p class="font-semibold" :style="{ color: NAVY }">{{ formatDate(reportDate) }}</p>
          </div>
          <div>
            <p class="text-xs text-body">Heure de clôture</p>
            <p class="font-semibold" :style="{ color: NAVY }">
              {{ closedAtDate ? formatTime(closedAtDate) : "En cours" }}
            </p>
          </div>
          <div>
            <p class="text-xs text-body">Caissier</p>
            <p class="font-semibold" :style="{ color: NAVY }">{{ report?.cashier ?? "—" }}</p>
          </div>
        </div>

        <!-- Stat cards -->
        <div class="grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3 p-6">
          <div
            v-for="card in statCards"
            :key="card.label"
            class="rounded-xl p-3 text-center"
            :style="{ background: card.bg }"
          >
            <div
              class="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full text-white"
              :style="{ background: card.iconBg }"
            >
              <i class="fa" :class="card.icon"></i>
            </div>
            <p class="text-[11px] leading-tight text-body">{{ card.label }}</p>
            <p class="mt-1 text-sm font-bold" :style="{ color: NAVY }">{{ card.value }}</p>
          </div>
        </div>

        <!-- Section banner -->
        <div class="mx-6 rounded-lg px-4 py-2 text-sm font-bold text-white" :style="{ background: NAVY }">
          Détail des ventes
        </div>

        <!-- Table -->
        <div class="p-6 pt-4">
          <table class="w-full text-sm" style="border-collapse: collapse">
            <thead>
              <tr :style="{ background: NAVY }" class="text-white">
                <th class="py-2 pl-3 text-left font-semibold">N°</th>
                <th class="py-2 text-left font-semibold">Heure</th>
                <th class="py-2 text-left font-semibold">Article</th>
                <th class="py-2 text-center font-semibold">Quantité</th>
                <th class="py-2 text-right font-semibold">Prix unitaire</th>
                <th class="py-2 pr-3 text-right font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(line, i) in lines" :key="i" class="border-b" style="border-color: #eef0f7">
                <td class="py-1.5 pl-3">{{ line.saleNumber }}</td>
                <td class="py-1.5">{{ formatTime(new Date(line.time)) }}</td>
                <td class="py-1.5">{{ line.label }}</td>
                <td class="py-1.5 text-center">{{ line.quantity }}</td>
                <td class="py-1.5 text-right">{{ formatAmount(line.unitPrice) }}</td>
                <td class="py-1.5 pr-3 text-right">{{ formatAmount(line.total) }}</td>
              </tr>
              <tr v-if="!lines.length">
                <td colspan="6" class="py-4 text-center text-body">Aucune vente pour cette journée.</td>
              </tr>
              <tr class="font-bold" style="background: #eaf1fb">
                <td colspan="5" class="py-2 pl-3 text-right" :style="{ color: NAVY }">Total</td>
                <td class="py-2 pr-3 text-right" :style="{ color: NAVY }">
                  {{ formatAmount(totalRevenue) }} {{ company?.currency }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Footer: thank you + signatures -->
        <div class="grid grid-cols-1 gap-6 px-6 pb-4 md:grid-cols-2">
          <div class="rounded-xl p-4" style="background: #f5f7fb">
            <p class="font-bold italic" :style="{ color: NAVY }">
              <i class="fa fa-handshake mr-2" :style="{ color: GOLD }"></i>Merci pour votre confiance !
            </p>
          </div>
        </div>

        <div class="px-6 pb-6">
          <p class="mb-4 text-sm text-body">
            Fait{{ companyCity ? ` à ${companyCity}` : "" }}, le {{ formatDate(reportDate) }}
          </p>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <p class="mb-8 text-sm font-semibold" :style="{ color: NAVY }">Le Caissier</p>
              <div class="h-px w-full" style="background: #d8dcec"></div>
            </div>
            <div>
              <p class="mb-8 text-sm font-semibold" :style="{ color: NAVY }">Le Responsable</p>
              <div class="h-px w-full" style="background: #d8dcec"></div>
            </div>
          </div>
        </div>

        <!-- Stamp -->
        <div class="flex justify-end px-6 pb-6">
          <div
            class="flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 text-center text-white"
            :style="{ background: NAVY, borderColor: GOLD }"
          >
            <i class="fa fa-utensils mb-1 text-sm" :style="{ color: GOLD }"></i>
            <p class="px-2 text-[10px] font-bold leading-tight">{{ company?.name }}</p>
            <p v-if="companyCity" class="px-2 text-[9px] leading-tight text-white/80">{{ companyCity }}</p>
          </div>
        </div>

        <!-- Bottom banner -->
        <div class="py-3 text-center text-sm font-semibold text-white" :style="{ background: NAVY }">
          CaisseBi – Simple • Rapide • Fiable
        </div>
      </div>
    </div>
  </div>
</template>
