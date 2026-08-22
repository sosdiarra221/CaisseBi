<script lang="ts" setup>
import { formatAmount, formatDate } from "~/lib/format";

definePageMeta({ layout: "home" });

const NAVY = "#182B6B";
const GOLD = "#F5A524";

const { data: company } = await useFetch("/api/company");

function firstDayOfMonthStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-01`;
}
const todayStr = new Date().toISOString().slice(0, 10);

type Preset = "day" | "week" | "month" | "year";

const from = ref(firstDayOfMonthStr());
const to = ref(todayStr);
const activePreset = ref<Preset | null>("month");

const presets: { id: Preset; label: string }[] = [
  { id: "day", label: "Jour" },
  { id: "week", label: "Semaine" },
  { id: "month", label: "Mois" },
  { id: "year", label: "Année" },
];

function toDateStr(d: Date) {
  return d.toISOString().slice(0, 10);
}

function applyPreset(preset: Preset) {
  const now = new Date();
  let start: Date;
  let end: Date;

  if (preset === "day") {
    start = new Date(now);
    end = new Date(now);
  } else if (preset === "week") {
    const day = now.getDay();
    const diffToMonday = day === 0 ? -6 : 1 - day;
    start = new Date(now);
    start.setDate(now.getDate() + diffToMonday);
    end = new Date(start);
    end.setDate(start.getDate() + 6);
  } else if (preset === "month") {
    start = new Date(now.getFullYear(), now.getMonth(), 1);
    end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  } else {
    start = new Date(now.getFullYear(), 0, 1);
    end = new Date(now.getFullYear(), 11, 31);
  }

  from.value = toDateStr(start);
  to.value = toDateStr(end);
  activePreset.value = preset;
  applyFilter();
}

function onManualDateChange() {
  activePreset.value = null;
}

const { data: report, refresh } = await useFetch("/api/reports/accounting", {
  query: { from, to },
});

async function applyFilter() {
  await refresh();
}

const fromDate = computed(() => new Date(`${from.value}T00:00:00`));
const toDate = computed(() => new Date(`${to.value}T00:00:00`));
const printedOnDate = computed(() => new Date());

const companyCity = computed(() => {
  const address = company.value?.address;
  if (!address) return "";
  const parts = address.split(",").map((p) => p.trim()).filter(Boolean);
  return parts.length ? parts[0] : "";
});

const netPositive = computed(() => (report.value?.net ?? 0) >= 0);

const statCards = computed(() => [
  {
    label: "Chiffre d'affaires",
    value: `${formatAmount(report.value?.revenue ?? 0)} ${company.value?.currency ?? ""}`,
    icon: "fa-money-bill-wave",
    bg: "#eaf6ee",
    iconBg: "#2fb344",
  },
  {
    label: "Ventes",
    value: String(report.value?.salesCount ?? 0),
    icon: "fa-receipt",
    bg: "#eaf1fb",
    iconBg: NAVY,
  },
  {
    label: "Total dépenses",
    value: `${formatAmount(report.value?.totalExpenses ?? 0)} ${company.value?.currency ?? ""}`,
    icon: "fa-file-invoice-dollar",
    bg: "#fdecec",
    iconBg: "#e7515a",
  },
  {
    label: "Dépenses enregistrées",
    value: String(report.value?.expensesCount ?? 0),
    icon: "fa-list",
    bg: "#f3eefc",
    iconBg: "#8a5cf6",
  },
  {
    label: "Résultat net",
    value: `${formatAmount(report.value?.net ?? 0)} ${company.value?.currency ?? ""}`,
    icon: netPositive.value ? "fa-arrow-trend-up" : "fa-arrow-trend-down",
    bg: netPositive.value ? "#eaf6ee" : "#fdecec",
    iconBg: netPositive.value ? "#2fb344" : "#e7515a",
  },
]);

const categories = computed(() => report.value?.expensesByCategory ?? []);
const totalExpenses = computed(() => report.value?.totalExpenses ?? 0);

// Chronological "Détail des transactions": merges the individual expense
// rows (real category + description) with the individual sale rows
// (automatic "Vente" category, "Vente #000123" description — same padding
// style as ReceiptTicket.vue) into one combined ledger, additive to the
// existing per-category expense summary table below.
interface TransactionRow {
  key: string;
  date: string;
  category: string;
  description: string;
  amount: number;
  kind: "expense" | "sale";
}

const transactions = computed<TransactionRow[]>(() => {
  const expenseRows: TransactionRow[] = (report.value?.expenses ?? []).map((e: any) => ({
    key: `expense-${e.id}`,
    date: e.date,
    category: e.category,
    description: e.description || "—",
    amount: Number(e.amount),
    kind: "expense",
  }));
  const saleRows: TransactionRow[] = (report.value?.sales ?? []).map((s: any) => ({
    key: `sale-${s.id}`,
    date: s.createdAt,
    category: "Vente",
    description: `Vente #${String(s.number).padStart(6, "0")}`,
    amount: Number(s.total),
    kind: "sale",
  }));
  return [...expenseRows, ...saleRows].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
});

function categoryShare(total: number): string {
  if (!totalExpenses.value) return "0 %";
  return `${Math.round((total / totalExpenses.value) * 100)} %`;
}

/**
 * Hand-authored print CSS, injected via useHead — NOT Tailwind's `print:`
 * utilities. This dev setup sometimes double-injects the compiled Tailwind
 * stylesheet, and a bare `.hidden` rule from one copy can beat the
 * `.print\:block` media-query rule from the other, silently breaking print
 * output (already bit /rapports, /caisse receipt, and the POS ticket).
 * Same "print only this element" recipe as ReceiptTicket.vue /
 * pages/(admin)/rapports/index.vue.
 */
const printCss = `
@media print {
  @page { size: A4 portrait; margin: 12mm; }
  html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; height: auto !important; }
  body * { visibility: hidden !important; }
  #accounting-report, #accounting-report * { visibility: visible !important; }
  #accounting-report {
    display: block !important;
    position: absolute !important;
    inset: 0 auto auto 0 !important;
    width: 100% !important;
    box-shadow: none !important;
    border-radius: 0 !important;
  }
  .accounting-print-hide { display: none !important; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
}
`;

useHead(() => ({
  style: [{ innerHTML: printCss, id: "accounting-print-style" }],
}));

function printReport() {
  window.print();
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Comptabilité" name="Rapport comptable" />
    <div class="container">
      <!-- Filter bar: excluded from print -->
      <div class="card !h-auto mb-6 accounting-print-hide">
        <div class="p-5">
          <div class="flex flex-wrap items-center gap-3">
            <NuxtLink to="/caisse" class="btn border border-border h-10 shrink-0">
              <i class="fa fa-arrow-left mr-2"></i>Retour
            </NuxtLink>
            <div class="flex items-center gap-2 text-2sm font-semibold" :style="{ color: NAVY }">
              <span class="flex size-7 items-center justify-center rounded-full bg-primarylight text-primary">
                <i class="fa fa-filter text-2xs"></i>
              </span>
              Période
            </div>
            <button type="button" class="btn h-10 ml-auto text-white" :style="{ background: NAVY }" @click="printReport">
              <i class="fa fa-print mr-2"></i>Imprimer / Exporter en PDF
            </button>
          </div>

          <div class="mt-3 flex flex-wrap items-end gap-3">
            <div class="flex flex-wrap gap-1.5">
              <button
                v-for="p in presets"
                :key="p.id"
                type="button"
                class="shrink-0 rounded-full px-3.5 py-1.5 text-2xs font-semibold duration-200"
                :class="activePreset === p.id ? 'bg-primary text-white' : 'bg-bodybg text-body border border-border hover:border-primary hover:text-primary'"
                @click="applyPreset(p.id)"
              >
                {{ p.label }}
              </button>
            </div>
            <div>
              <label class="mb-1 block text-2xs text-body">Du</label>
              <input v-model="from" type="date" class="h-10 rounded-lg border border-border bg-transparent px-3 text-2sm" @change="onManualDateChange" />
            </div>
            <div>
              <label class="mb-1 block text-2xs text-body">Au</label>
              <input v-model="to" type="date" class="h-10 rounded-lg border border-border bg-transparent px-3 text-2sm" @change="onManualDateChange" />
            </div>
            <button type="button" class="btn bg-primary text-white h-10" @click="applyFilter">Afficher</button>
          </div>
        </div>
      </div>

      <!-- Printable document -->
      <div id="accounting-report" class="mx-auto max-w-[900px] overflow-hidden rounded-2xl bg-white text-black shadow-lg">
        <!-- Gold top bar -->
        <div style="height: 8px" :style="{ background: GOLD }"></div>

        <!-- Header band -->
        <div class="flex flex-wrap items-start justify-between gap-4 p-6">
          <div class="flex shrink-0 items-center">
            <img src="assets/images/logo-grace-dor.png" alt="La Grâce d'Or" style="max-width: 140px" />
          </div>

          <div class="flex-1 min-w-[260px] text-center">
            <div class="mx-auto inline-block rounded-xl px-8 py-3 text-white" :style="{ background: NAVY }">
              <div class="flex items-center justify-center gap-2 text-lg font-extrabold tracking-wide">
                <i class="fa fa-scale-balanced" :style="{ color: GOLD }"></i>
                <span>RAPPORT COMPTABLE</span>
              </div>
              <div class="mx-auto mt-1 h-[3px] w-24 rounded" :style="{ background: GOLD }"></div>
              <p class="mt-1 text-xs text-white/90">{{ company?.name }}</p>
            </div>
          </div>

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
          </div>
        </div>

        <!-- Light-blue info bar -->
        <div class="grid grid-cols-3 gap-4 px-6 py-3 text-sm" style="background: #eaf1fb">
          <div>
            <p class="text-xs text-body">Période</p>
            <p class="font-semibold" :style="{ color: NAVY }">
              {{ formatDate(fromDate) }} — {{ formatDate(toDate) }}
            </p>
          </div>
          <div>
            <p class="text-xs text-body">Édité le</p>
            <p class="font-semibold" :style="{ color: NAVY }">{{ formatDate(printedOnDate) }}</p>
          </div>
          <div>
            <p class="text-xs text-body">Devise</p>
            <p class="font-semibold" :style="{ color: NAVY }">{{ company?.currency }}</p>
          </div>
        </div>

        <!-- Stat cards -->
        <div class="grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3 p-6">
          <div v-for="card in statCards" :key="card.label" class="rounded-xl p-3 text-center" :style="{ background: card.bg }">
            <div class="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full text-white" :style="{ background: card.iconBg }">
              <i class="fa" :class="card.icon"></i>
            </div>
            <p class="text-[11px] leading-tight text-body">{{ card.label }}</p>
            <p class="mt-1 text-sm font-bold" :style="{ color: NAVY }">{{ card.value }}</p>
          </div>
        </div>

        <!-- Section banner: chronological detail (sales + expenses) -->
        <div class="mx-6 rounded-lg px-4 py-2 text-sm font-bold text-white" :style="{ background: NAVY }">
          Détail des transactions
        </div>

        <!-- Table -->
        <div class="p-6 pt-4">
          <table class="w-full text-sm" style="border-collapse: collapse">
            <thead>
              <tr :style="{ background: NAVY }" class="text-white">
                <th class="py-2 pl-3 text-left font-semibold">Date</th>
                <th class="py-2 text-left font-semibold">Catégorie</th>
                <th class="py-2 text-left font-semibold">Description</th>
                <th class="py-2 pr-3 text-right font-semibold">Montant</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="t in transactions" :key="t.key" class="border-b" style="border-color: #eef0f7">
                <td class="py-1.5 pl-3">{{ formatDate(t.date) }}</td>
                <td class="py-1.5">
                  <span
                    class="rounded-full px-2 py-0.5 text-2xs font-semibold"
                    :style="t.kind === 'sale' ? { background: '#eaf6ee', color: '#2fb344' } : { background: '#fdecec', color: '#e7515a' }"
                  >
                    {{ t.category }}
                  </span>
                </td>
                <td class="py-1.5">{{ t.description }}</td>
                <td class="py-1.5 pr-3 text-right" :style="{ color: t.kind === 'sale' ? '#2fb344' : '#e7515a' }">
                  {{ t.kind === "sale" ? "+" : "−" }}{{ formatAmount(t.amount) }}
                </td>
              </tr>
              <tr v-if="!transactions.length">
                <td colspan="4" class="py-4 text-center text-body">Aucune transaction pour cette période.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Section banner -->
        <div class="mx-6 rounded-lg px-4 py-2 text-sm font-bold text-white" :style="{ background: NAVY }">
          Détail des dépenses par catégorie
        </div>

        <!-- Table -->
        <div class="p-6 pt-4">
          <table class="w-full text-sm" style="border-collapse: collapse">
            <thead>
              <tr :style="{ background: NAVY }" class="text-white">
                <th class="py-2 pl-3 text-left font-semibold">Catégorie</th>
                <th class="py-2 text-center font-semibold">Nombre</th>
                <th class="py-2 text-right font-semibold">Montant</th>
                <th class="py-2 pr-3 text-right font-semibold">Part</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cat in categories" :key="cat.category" class="border-b" style="border-color: #eef0f7">
                <td class="py-1.5 pl-3">{{ cat.category }}</td>
                <td class="py-1.5 text-center">{{ cat.count }}</td>
                <td class="py-1.5 text-right">{{ formatAmount(cat.total) }}</td>
                <td class="py-1.5 pr-3 text-right">{{ categoryShare(cat.total) }}</td>
              </tr>
              <tr v-if="!categories.length">
                <td colspan="4" class="py-4 text-center text-body">Aucune dépense pour cette période.</td>
              </tr>
              <tr class="font-bold" style="background: #eaf1fb">
                <td colspan="2" class="py-2 pl-3" :style="{ color: NAVY }">Total dépenses</td>
                <td class="py-2 text-right" :style="{ color: NAVY }">{{ formatAmount(totalExpenses) }} {{ company?.currency }}</td>
                <td class="py-2 pr-3 text-right" :style="{ color: NAVY }">100 %</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Summary banner: revenue - expenses = net -->
        <div class="mx-6 mb-6 rounded-xl p-4" :style="{ background: netPositive ? '#eaf6ee' : '#fdecec' }">
          <div class="flex flex-wrap items-center justify-between gap-3 text-sm">
            <div>
              <span class="text-body">Chiffre d'affaires</span>
              <span class="ml-2 font-semibold" :style="{ color: NAVY }">{{ formatAmount(report?.revenue ?? 0) }} {{ company?.currency }}</span>
            </div>
            <span class="text-body">−</span>
            <div>
              <span class="text-body">Total dépenses</span>
              <span class="ml-2 font-semibold" :style="{ color: NAVY }">{{ formatAmount(totalExpenses) }} {{ company?.currency }}</span>
            </div>
            <span class="text-body">=</span>
            <div>
              <span class="text-body">Résultat net</span>
              <span class="ml-2 text-base font-extrabold" :style="{ color: netPositive ? '#2fb344' : '#e7515a' }">
                {{ formatAmount(report?.net ?? 0) }} {{ company?.currency }}
              </span>
            </div>
          </div>
        </div>

        <!-- Footer: signatures -->
        <div class="px-6 pb-6">
          <p class="mb-4 text-sm text-body">
            Fait{{ companyCity ? ` à ${companyCity}` : "" }}, le {{ formatDate(printedOnDate) }}
          </p>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <p class="mb-8 text-sm font-semibold" :style="{ color: NAVY }">Le Comptable</p>
              <div class="h-px w-full" style="background: #d8dcec"></div>
            </div>
            <div>
              <p class="mb-8 text-sm font-semibold" :style="{ color: NAVY }">Le Responsable</p>
              <div class="h-px w-full" style="background: #d8dcec"></div>
            </div>
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
