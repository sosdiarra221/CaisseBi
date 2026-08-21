<script lang="ts" setup>
import { formatAmount, formatDate } from "~/lib/format";

const props = defineProps<{
  sale: {
    number: number;
    total: number | string;
    createdAt: string;
    user: { name: string };
    lines: { label: string; quantity: number; unitPrice: number | string; total: number | string }[];
    payments: { method: string; amount: number | string }[];
  };
  company: {
    name: string;
    address?: string | null;
    phone?: string | null;
    currency: string;
    receiptHeader?: string | null;
    receiptFooter?: string | null;
    receiptFormat?: string | null;
  };
  /**
   * When true, the ticket stays out of the normal page flow and only
   * appears for printing (used right after a POS sale, where a separate
   * "Vente validée" summary is what's actually shown on screen). Deliberately
   * NOT implemented as Tailwind's `hidden {bp}:block` — in this project's dev
   * setup, Vite sometimes double-injects the compiled Tailwind stylesheet,
   * and the bare `.hidden` rule from one copy can beat the `.print\:block`
   * media-query rule from the other, leaving the ticket blank when printed.
   * Hand-authoring the rule here (single source, injected via useHead like
   * the print sizing below) sidesteps that entirely.
   */
  screenHidden?: boolean;
}>();

const NAVY = "#182B6B";
const GOLD = "#F5A524";

const PAYMENT_OPTIONS = [
  { method: "CASH", label: "Espèces", icon: "fa-money-bill-wave" },
  { method: "WAVE", label: "Wave", icon: "fa-mobile-screen-button" },
  { method: "ORANGE_MONEY", label: "Orange Money", icon: "fa-mobile-screen-button" },
  { method: "CARD", label: "Carte bancaire", icon: "fa-credit-card" },
];

const usedMethods = computed(() => new Set(props.sale.payments.map((p) => p.method)));

const saleDate = computed(() => new Date(props.sale.createdAt));

// Thermal printers only understand a handful of real widths — everything
// else (margins, font size) is derived from this so the ticket actually
// fits the paper instead of getting clipped or printing microscopic text.
const paperWidth = computed(() => {
  switch (props.company.receiptFormat) {
    case "58mm":
      return "58mm";
    case "A5":
      return "148mm";
    default:
      return "80mm";
  }
});
const isNarrow = computed(() => props.company.receiptFormat === "58mm");

// Printing this ticket used to come out as a blank page: it normally lives
// inside a `position: fixed` modal with `overflow-y-auto`, and browsers'
// print engines routinely fail to paginate fixed/scroll-clipped ancestors
// (the content gets measured against the on-screen viewport, not the
// printed page, and is dropped). The fix is the standard "print only this
// element" trick: hide everything else via `visibility` (which — unlike
// `display: none` — doesn't collapse the fixed ancestor's box) and pull the
// ticket itself out to `position: absolute` at the page origin so it no
// longer depends on its ancestors' layout at all during print.
const printCss = computed(
  () => `
  ${props.screenHidden ? "#receipt-ticket { display: none; }" : ""}
  @media print {
    @page { size: ${paperWidth.value} auto; margin: 0; }
    html, body { margin: 0 !important; padding: 0 !important; background: #fff !important; height: auto !important; }
    body * { visibility: hidden !important; }
    #receipt-ticket, #receipt-ticket * { visibility: visible !important; }
    #receipt-ticket {
      display: block !important;
      position: absolute !important;
      inset: 0 auto auto 0 !important;
      width: ${paperWidth.value} !important;
      box-shadow: none !important;
      border-radius: 0 !important;
    }
    * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  }
`
);

useHead(() => ({
  style: [{ innerHTML: printCss.value, id: "receipt-print-style" }],
}));
</script>

<template>
  <div
    id="receipt-ticket"
    class="receipt-ticket overflow-hidden rounded-2xl bg-white text-black shadow-lg"
    :style="{ width: paperWidth, fontSize: isNarrow ? '10px' : '11px' }"
  >
    <!-- Logo -->
    <div class="px-4 pb-1 pt-4 text-center">
      <img src="assets/images/logo-caissebi.png" alt="CaisseBi" class="mx-auto" style="max-width: 65%" />
    </div>

    <!-- Banner -->
    <div class="mx-4 mb-3 mt-2 rounded-lg py-1.5 text-center font-extrabold tracking-wide text-white" :style="{ background: NAVY, fontSize: isNarrow ? '11px' : '13px' }">
      TICKET DE CAISSE
    </div>

    <!-- Company / ticket info -->
    <div class="flex gap-2 px-4 pb-2">
      <div class="flex-1 space-y-1">
        <p class="font-bold" :style="{ color: NAVY }">{{ company.name }}</p>
        <p v-if="company.address" class="flex items-center gap-1">
          <i class="fa fa-map-marker-alt shrink-0" :style="{ color: GOLD }"></i>
          <span>{{ company.address }}</span>
        </p>
        <p v-if="company.phone" class="flex items-center gap-1">
          <i class="fa fa-phone shrink-0" :style="{ color: NAVY }"></i>
          <span>{{ company.phone }}</span>
        </p>
      </div>
      <div class="flex-1 space-y-1 border-l pl-2" style="border-color: #d8dcec">
        <p><span class="font-semibold">N° Ticket :</span> #{{ String(sale.number).padStart(6, "0") }}</p>
        <p><span class="font-semibold">Date :</span> {{ formatDate(saleDate) }}</p>
        <p><span class="font-semibold">Heure :</span> {{ saleDate.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }) }}</p>
      </div>
    </div>

    <!-- Items -->
    <table class="w-full px-4" style="border-collapse: collapse">
      <thead>
        <tr :style="{ background: NAVY }" class="text-white">
          <th class="py-1.5 pl-4 text-left font-semibold">Article</th>
          <th class="py-1.5 text-center font-semibold">Qté</th>
          <th class="py-1.5 text-right font-semibold">P.U.</th>
          <th class="py-1.5 pr-4 text-right font-semibold">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(line, i) in sale.lines" :key="i" class="border-b" style="border-color: #eef0f7">
          <td class="py-1.5 pl-4 pr-1">{{ line.label }}</td>
          <td class="py-1.5 text-center">{{ line.quantity }}</td>
          <td class="py-1.5 text-right">{{ formatAmount(Number(line.total) / line.quantity) }}</td>
          <td class="py-1.5 pr-4 text-right">{{ formatAmount(line.total) }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Total -->
    <div class="mx-4 my-3 flex items-center justify-between rounded-lg px-3 py-2" style="background: #eaf1fb">
      <span class="font-bold" :style="{ color: NAVY }">Total à payer</span>
      <span class="font-extrabold" :style="{ color: NAVY, fontSize: isNarrow ? '13px' : '15px' }">
        {{ formatAmount(sale.total) }} {{ company.currency }}
      </span>
    </div>

    <!-- Payment method -->
    <div class="mx-4 mb-2 flex items-center gap-2">
      <span class="h-px flex-1" style="background: #d8dcec"></span>
      <span class="shrink-0 rounded-full px-3 py-1 font-bold text-white" :style="{ background: NAVY, fontSize: isNarrow ? '9px' : '10px' }">
        MODE DE PAIEMENT
      </span>
      <span class="h-px flex-1" style="background: #d8dcec"></span>
    </div>
    <div class="mx-4 mb-3 grid grid-cols-2 gap-2">
      <div
        v-for="opt in PAYMENT_OPTIONS"
        :key="opt.method"
        class="flex items-center justify-between rounded-lg px-2 py-1.5"
        style="background: #f5f7fb"
      >
        <span class="flex items-center gap-1.5 truncate">
          <i class="fa shrink-0" :class="opt.icon" :style="{ color: usedMethods.has(opt.method) ? GOLD : '#b7bdd6' }"></i>
          <span class="truncate">{{ opt.label }}</span>
        </span>
        <i
          class="fa shrink-0"
          :class="usedMethods.has(opt.method) ? 'fa-check-square' : 'fa-square'"
          :style="{ color: usedMethods.has(opt.method) ? NAVY : '#c7cbe0' }"
        ></i>
      </div>
    </div>

    <p v-if="company.receiptHeader" class="px-4 pb-2 text-center">{{ company.receiptHeader }}</p>

    <!-- Footer -->
    <div class="px-4 pb-4 text-center">
      <p class="mb-2 font-bold italic" :style="{ color: NAVY }">
        {{ company.receiptFooter || "Merci pour votre confiance !" }}
      </p>
      <div class="mb-2 flex items-center gap-2">
        <span class="h-px flex-1" style="background: #d8dcec"></span>
        <i class="fa fa-handshake" :style="{ color: GOLD }"></i>
        <span class="h-px flex-1" style="background: #d8dcec"></span>
      </div>
      <p class="font-semibold" :style="{ color: NAVY }">CaisseBi – La Caisse, toujours à votre service</p>
    </div>
  </div>
</template>
