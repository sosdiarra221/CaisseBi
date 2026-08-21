<script lang="ts" setup>
import { formatAmount, formatDate } from "~/lib/format";

definePageMeta({ layout: "home" });

const NAVY = "#182B6B";
const GOLD = "#F5A524";

const route = useRoute();
const { data: company } = await useFetch("/api/company");

// Session picker: recent sessions to choose from in the (non-printed) filter
// bar. Selection defaults to the ?sessionId= query param if present,
// otherwise the most recently closed session, falling back to the current
// open one if nothing has ever been closed yet.
const { data: sessionList } = await useFetch("/api/cash-sessions");

const queryId = route.query.sessionId ? Number(route.query.sessionId) : null;
function defaultSessionId(): number | null {
  if (queryId) return queryId;
  const list = sessionList.value ?? [];
  const lastClosed = list.find((s: any) => s.status === "CLOSED");
  return (lastClosed ?? list[0])?.id ?? null;
}

const selectedId = ref<number | null>(defaultSessionId());

const { data: session, refresh } = await useFetch(
  () => (selectedId.value ? `/api/cash-sessions/${selectedId.value}` : null)
);

watch(selectedId, () => refresh());

// Manual formatting throughout, same rationale as pages/(admin)/rapports/index.vue:
// avoids Node-vs-browser ICU differences (Number.toLocaleString) causing
// SSR/CSR hydration mismatches. Short dates use the shared formatDate() from
// lib/format.ts; formatLongDate/formatTime aren't covered there so stay local.
const MONTHS_FR = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];
function pad2(n: number) {
  return String(n).padStart(2, "0");
}
function formatLongDate(d: Date) {
  return `${d.getDate()} ${MONTHS_FR[d.getMonth()]} ${d.getFullYear()}`;
}
function formatTime(d: Date) {
  return `${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

const companyCity = computed(() => {
  const address = company.value?.address;
  if (!address) return "";
  const parts = address.split(",").map((p) => p.trim()).filter(Boolean);
  return parts.length ? parts[0] : "";
});

const openedAtDate = computed(() => (session.value?.openedAt ? new Date(session.value.openedAt) : null));
const closedAtDate = computed(() => (session.value?.closedAt ? new Date(session.value.closedAt) : null));

// Chronological cash-drawer ledger. This is a *cash* journal, so it only
// tracks CASH-method payments (a sale paid by card/mobile money never
// touches this drawer) plus the manual cashIn/cashOut adjustments entered at
// closing (server/api/cash-sessions/close.post.ts) — mirroring exactly the
// numbers that close.post.ts used to compute theoreticalAmount, so the
// running balance in this table reconciles with the session's own
// theoretical/counted/gap fields instead of inventing a second source of
// truth.
interface LedgerRow {
  time: Date;
  label: string;
  detail: string;
  amountIn: number | null;
  amountOut: number | null;
  balance: number;
}

const ledger = computed<LedgerRow[]>(() => {
  const s = session.value;
  if (!s) return [];
  const rows: LedgerRow[] = [];
  let balance = Number(s.startingFloat);

  rows.push({
    time: new Date(s.openedAt),
    label: "Ouverture de caisse",
    detail: `Fond initial — ${s.user?.name ?? "—"}`,
    amountIn: Number(s.startingFloat),
    amountOut: null,
    balance,
  });

  const cashSales = (s.sales ?? [])
    .map((sale: any) => ({
      sale,
      cash: (sale.payments ?? []).filter((p: any) => p.method === "CASH").reduce((sum: number, p: any) => sum + Number(p.amount), 0),
    }))
    .filter((x: any) => x.cash > 0)
    .sort((a: any, b: any) => new Date(a.sale.createdAt).getTime() - new Date(b.sale.createdAt).getTime());

  for (const { sale, cash } of cashSales) {
    balance += cash;
    rows.push({
      time: new Date(sale.createdAt),
      label: `Vente n°${sale.number}`,
      detail: "Encaissement espèces",
      amountIn: cash,
      amountOut: null,
      balance,
    });
  }

  if (s.status === "CLOSED") {
    if (Number(s.cashIn) > 0) {
      balance += Number(s.cashIn);
      rows.push({
        time: closedAtDate.value ?? new Date(s.openedAt),
        label: "Entrée manuelle",
        detail: "Ajout à la caisse (déclaré à la fermeture)",
        amountIn: Number(s.cashIn),
        amountOut: null,
        balance,
      });
    }
    if (Number(s.cashOut) > 0) {
      balance -= Number(s.cashOut);
      rows.push({
        time: closedAtDate.value ?? new Date(s.openedAt),
        label: "Sortie manuelle",
        detail: "Retrait de la caisse (déclaré à la fermeture)",
        amountIn: null,
        amountOut: Number(s.cashOut),
        balance,
      });
    }
  }

  return rows;
});

const cashSalesTotal = computed(() => Number(session.value?.paymentTotals?.CASH ?? 0));
const gap = computed(() => (session.value?.gap !== null && session.value?.gap !== undefined ? Number(session.value.gap) : null));

const statCards = computed(() => [
  { label: "Fond initial", value: formatAmount(session.value?.startingFloat ?? 0), icon: "fa-vault", bg: "#eaf1fb", iconBg: NAVY },
  { label: "Ventes espèces", value: formatAmount(cashSalesTotal.value), icon: "fa-money-bill-wave", bg: "#eaf6ee", iconBg: "#2fb344" },
  {
    label: "Montant théorique",
    value: session.value?.theoreticalAmount != null ? formatAmount(session.value.theoreticalAmount) : "—",
    icon: "fa-calculator",
    bg: "#fff6e5",
    iconBg: GOLD,
  },
  {
    label: "Montant compté",
    value: session.value?.countedAmount != null ? formatAmount(session.value.countedAmount) : "—",
    icon: "fa-coins",
    bg: "#f3eefc",
    iconBg: "#8a5cf6",
  },
  {
    label: "Écart",
    value: gap.value !== null ? formatAmount(gap.value) : "—",
    icon: gap.value === null ? "fa-minus" : gap.value < 0 ? "fa-arrow-down" : gap.value > 0 ? "fa-arrow-up" : "fa-check",
    bg: gap.value !== null && gap.value !== 0 ? "#fdecec" : "#eaf6ee",
    iconBg: gap.value !== null && gap.value !== 0 ? "#e7515a" : "#2fb344",
  },
]);

/**
 * Hand-authored print CSS injected via useHead — see the identical recipe
 * and rationale (double-injected Tailwind stylesheet breaking `print:`
 * utilities) in pages/(admin)/rapports/index.vue.
 */
const printCss = `
@media print {
  @page { size: A4 portrait; margin: 12mm; }
  html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; height: auto !important; }
  body * { visibility: hidden !important; }
  #cash-journal, #cash-journal * { visibility: visible !important; }
  #cash-journal {
    display: block !important;
    position: absolute !important;
    inset: 0 auto auto 0 !important;
    width: 100% !important;
    box-shadow: none !important;
    border-radius: 0 !important;
  }
  .journal-print-hide { display: none !important; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
}
`;

useHead(() => ({
  style: [{ innerHTML: printCss, id: "journal-print-style" }],
}));

function printJournal() {
  window.print();
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Caisse" name="Journal de caisse" />
    <div class="container">
      <!-- Filter bar: excluded from print -->
      <div class="card !h-auto mb-6 journal-print-hide">
        <div class="p-5 flex flex-wrap items-end gap-3">
          <NuxtLink to="/caisse" class="btn border border-border h-10">
            <i class="fa fa-arrow-left mr-2"></i>Retour
          </NuxtLink>
          <div class="w-full max-w-xs">
            <label class="mb-1 block">Session de caisse</label>
            <select v-model="selectedId" class="h-10 w-full rounded-lg border border-border bg-transparent px-3">
              <option v-for="s in sessionList" :key="s.id" :value="s.id">
                {{ s.cashRegister?.name }} — {{ s.user?.name }} — {{ formatDate(new Date(s.openedAt)) }}
                ({{ s.status === "OPEN" ? "en cours" : "clôturée" }})
              </option>
            </select>
          </div>
          <button type="button" class="btn h-10 ml-auto text-white" :style="{ background: NAVY }" @click="printJournal" :disabled="!session">
            <i class="fa fa-print mr-2"></i>Imprimer / Exporter en PDF
          </button>
        </div>
      </div>

      <p v-if="!session" class="text-body">Aucune session de caisse disponible.</p>

      <!-- Printable document -->
      <div v-else id="cash-journal" class="mx-auto max-w-[900px] overflow-hidden rounded-2xl bg-white text-black shadow-lg">
        <!-- Gold top bar -->
        <div style="height: 8px" :style="{ background: GOLD }"></div>

        <!-- Header band -->
        <div class="flex flex-wrap items-start justify-between gap-4 p-6">
          <div class="flex shrink-0 items-center">
            <img src="assets/images/logo-caissebi.png" alt="CaisseBi" style="max-width: 140px" />
          </div>

          <div class="flex-1 min-w-[260px] text-center">
            <div class="mx-auto inline-block rounded-xl px-8 py-3 text-white" :style="{ background: NAVY }">
              <div class="flex items-center justify-center gap-2 text-lg font-extrabold tracking-wide">
                <i class="fa fa-vault" :style="{ color: GOLD }"></i>
                <span>JOURNAL DE CAISSE</span>
              </div>
              <div class="mx-auto mt-1 h-[3px] w-24 rounded" :style="{ background: GOLD }"></div>
              <p class="mt-1 text-xs text-white/90">{{ session.cashRegister?.name }} – {{ company?.name }}</p>
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
          </div>
        </div>

        <!-- Light-blue info bar -->
        <div class="grid grid-cols-4 max-sm:grid-cols-2 gap-4 px-6 py-3 text-sm" style="background: #eaf1fb">
          <div>
            <p class="text-xs text-body">Caissier</p>
            <p class="font-semibold" :style="{ color: NAVY }">{{ session.user?.name ?? "—" }}</p>
          </div>
          <div>
            <p class="text-xs text-body">Ouverture</p>
            <p class="font-semibold" :style="{ color: NAVY }">
              {{ openedAtDate ? `${formatDate(openedAtDate)} ${formatTime(openedAtDate)}` : "—" }}
            </p>
          </div>
          <div>
            <p class="text-xs text-body">Fermeture</p>
            <p class="font-semibold" :style="{ color: NAVY }">
              {{ closedAtDate ? `${formatDate(closedAtDate)} ${formatTime(closedAtDate)}` : "En cours" }}
            </p>
          </div>
          <div>
            <p class="text-xs text-body">Statut</p>
            <p class="font-semibold" :style="{ color: NAVY }">{{ session.status === "OPEN" ? "Ouverte" : "Clôturée" }}</p>
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

        <!-- Section banner -->
        <div class="mx-6 rounded-lg px-4 py-2 text-sm font-bold text-white" :style="{ background: NAVY }">
          Mouvements de caisse (espèces)
        </div>

        <!-- Table -->
        <div class="p-6 pt-4">
          <table class="w-full text-sm" style="border-collapse: collapse">
            <thead>
              <tr :style="{ background: NAVY }" class="text-white">
                <th class="py-2 pl-3 text-left font-semibold">Heure</th>
                <th class="py-2 text-left font-semibold">Mouvement</th>
                <th class="py-2 text-left font-semibold">Détail</th>
                <th class="py-2 text-right font-semibold">Entrée</th>
                <th class="py-2 text-right font-semibold">Sortie</th>
                <th class="py-2 pr-3 text-right font-semibold">Solde</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in ledger" :key="i" class="border-b" style="border-color: #eef0f7">
                <td class="py-1.5 pl-3">{{ formatTime(row.time) }}</td>
                <td class="py-1.5">{{ row.label }}</td>
                <td class="py-1.5">{{ row.detail }}</td>
                <td class="py-1.5 text-right">{{ row.amountIn !== null ? formatAmount(row.amountIn) : "—" }}</td>
                <td class="py-1.5 text-right">{{ row.amountOut !== null ? formatAmount(row.amountOut) : "—" }}</td>
                <td class="py-1.5 pr-3 text-right font-semibold">{{ formatAmount(row.balance) }}</td>
              </tr>
              <tr class="font-bold" style="background: #eaf1fb">
                <td colspan="5" class="py-2 pl-3 text-right" :style="{ color: NAVY }">
                  {{ session.status === "OPEN" ? "Solde actuel (théorique)" : "Montant théorique en fin de session" }}
                </td>
                <td class="py-2 pr-3 text-right" :style="{ color: NAVY }">
                  {{ formatAmount(session.status === "OPEN" ? ledger[ledger.length - 1]?.balance ?? 0 : session.theoreticalAmount) }}
                  {{ company?.currency }}
                </td>
              </tr>
              <tr v-if="session.status === 'CLOSED'" class="font-bold">
                <td colspan="5" class="py-2 pl-3 text-right" :style="{ color: NAVY }">Montant compté à la fermeture</td>
                <td class="py-2 pr-3 text-right" :style="{ color: NAVY }">{{ formatAmount(session.countedAmount) }} {{ company?.currency }}</td>
              </tr>
              <tr v-if="session.status === 'CLOSED'" class="font-bold">
                <td colspan="5" class="py-2 pl-3 text-right" :style="{ color: gap === 0 ? NAVY : gap! < 0 ? '#e7515a' : '#2fb344' }">Écart</td>
                <td class="py-2 pr-3 text-right" :style="{ color: gap === 0 ? NAVY : gap! < 0 ? '#e7515a' : '#2fb344' }">
                  {{ formatAmount(gap ?? 0) }} {{ company?.currency }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Footer: signatures -->
        <div class="px-6 pb-6">
          <p class="mb-4 text-sm text-body">
            Fait{{ companyCity ? ` à ${companyCity}` : "" }}, le {{ formatLongDate(closedAtDate ?? new Date()) }}
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

        <!-- Bottom banner -->
        <div class="py-3 text-center text-sm font-semibold text-white" :style="{ background: NAVY }">
          CaisseBi – Simple • Rapide • Fiable
        </div>
      </div>
    </div>
  </div>
</template>
