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

const { data: expenses, refresh } = await useFetch("/api/expenses", {
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

const sortedExpenses = computed(() =>
  [...(expenses.value ?? [])].sort(
    (a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime()
  )
);

const totalAmount = computed(() =>
  (expenses.value ?? []).reduce((sum: number, e: any) => sum + Number(e.amount), 0)
);
const expensesCount = computed(() => (expenses.value ?? []).length);

const categoryTotals = computed(() => {
  const map = new Map<string, number>();
  for (const e of expenses.value ?? []) {
    map.set(e.category, (map.get(e.category) ?? 0) + Number(e.amount));
  }
  return Array.from(map.entries())
    .map(([category, total]) => ({ category, total }))
    .sort((a, b) => b.total - a.total);
});
const topCategory = computed(() => categoryTotals.value[0] ?? null);

const statCards = computed(() => [
  {
    label: "Total dépenses",
    value: `${formatAmount(totalAmount.value)} ${company.value?.currency ?? ""}`,
    icon: "fa-file-invoice-dollar",
    bg: "#fdecec",
    iconBg: "#e7515a",
  },
  {
    label: "Nombre de dépenses",
    value: String(expensesCount.value),
    icon: "fa-list",
    bg: "#eaf1fb",
    iconBg: NAVY,
  },
  {
    label: "Catégorie principale",
    value: topCategory.value ? topCategory.value.category : "—",
    icon: "fa-tags",
    bg: "#f3eefc",
    iconBg: "#8a5cf6",
  },
]);

/**
 * Hand-authored print CSS, injected via useHead — NOT Tailwind's `print:`
 * utilities. This dev setup sometimes double-injects the compiled Tailwind
 * stylesheet, and a bare `.hidden` rule from one copy can beat the
 * `.print\:block` media-query rule from the other, silently breaking print
 * output. Same "print only this element" recipe as
 * pages/(admin)/comptabilite/index.vue.
 */
const printCss = `
@media print {
  @page { size: A4 portrait; margin: 12mm; }
  html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; height: auto !important; }
  body * { visibility: hidden !important; }
  #expense-report, #expense-report * { visibility: visible !important; }
  #expense-report {
    display: block !important;
    position: absolute !important;
    inset: 0 auto auto 0 !important;
    width: 100% !important;
    box-shadow: none !important;
    border-radius: 0 !important;
  }
  .expense-print-hide { display: none !important; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
}
`;

useHead(() => ({
  style: [{ innerHTML: printCss, id: "expense-report-print-style" }],
}));

function printReport() {
  window.print();
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Dépenses" name="Rapport des dépenses" />
    <div class="container">
      <!-- Filter bar: excluded from print -->
      <div class="card !h-auto mb-6 expense-print-hide">
        <div class="p-5">
          <div class="flex flex-wrap items-center gap-3">
            <NuxtLink to="/depenses" class="btn border border-border h-10 shrink-0">
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
      <div id="expense-report" class="mx-auto max-w-[900px] overflow-hidden rounded-2xl bg-white text-black shadow-lg">
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
                <i class="fa fa-file-invoice-dollar" :style="{ color: GOLD }"></i>
                <span>RAPPORT DES DÉPENSES</span>
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
        <div class="grid grid-cols-3 max-sm:grid-cols-1 gap-3 p-6">
          <div v-for="card in statCards" :key="card.label" class="rounded-xl p-3 text-center" :style="{ background: card.bg }">
            <div class="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full text-white" :style="{ background: card.iconBg }">
              <i class="fa" :class="card.icon"></i>
            </div>
            <p class="text-[11px] leading-tight text-body">{{ card.label }}</p>
            <p class="mt-1 text-sm font-bold" :style="{ color: NAVY }">{{ card.value }}</p>
          </div>
        </div>

        <!-- Section banner -->
        <div class="mx-6 rounded-lg px-4 py-2 text-sm font-bold text-white" :style="{ background: NAVY }">
          Détail des dépenses
        </div>

        <!-- Table -->
        <div class="p-6 pt-4">
          <table class="w-full text-sm" style="border-collapse: collapse">
            <thead>
              <tr :style="{ background: NAVY }" class="text-white">
                <th class="py-2 pl-3 text-left font-semibold">Date</th>
                <th class="py-2 text-left font-semibold">Catégorie</th>
                <th class="py-2 text-left font-semibold">Description</th>
                <th class="py-2 text-right font-semibold">Montant</th>
                <th class="py-2 pr-3 text-left font-semibold">Enregistré par</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="e in sortedExpenses" :key="e.id" class="border-b" style="border-color: #eef0f7">
                <td class="py-1.5 pl-3">{{ formatDate(e.date) }}</td>
                <td class="py-1.5">{{ e.category }}</td>
                <td class="py-1.5">{{ e.description || "—" }}</td>
                <td class="py-1.5 text-right">{{ formatAmount(e.amount) }}</td>
                <td class="py-1.5 pr-3">{{ e.user?.name ?? "—" }}</td>
              </tr>
              <tr v-if="!sortedExpenses.length">
                <td colspan="5" class="py-4 text-center text-body">Aucune dépense pour cette période.</td>
              </tr>
              <tr class="font-bold" style="background: #eaf1fb">
                <td colspan="3" class="py-2 pl-3" :style="{ color: NAVY }">Total dépenses</td>
                <td class="py-2 text-right" :style="{ color: NAVY }">{{ formatAmount(totalAmount) }} {{ company?.currency }}</td>
                <td class="py-2 pr-3"></td>
              </tr>
            </tbody>
          </table>
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
