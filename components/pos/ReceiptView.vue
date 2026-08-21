<script lang="ts" setup>
import { formatAmount } from "~/lib/format";
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
}>();
const emit = defineEmits<{ newSale: []; close: [] }>();

function print() {
  window.print();
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 print:bg-transparent print:p-0">
    <div class="w-full max-w-sm rounded-xl bg-card p-6 print:hidden text-center">
      <p class="mb-1 text-lg font-bold text-success">VENTE VALIDÉE</p>
      <p class="mb-1">Vente #{{ String(sale.number).padStart(6, "0") }}</p>
      <p class="mb-5 text-xl font-bold">
        {{ formatAmount(sale.total) }} {{ company.currency }}
      </p>
      <div class="flex flex-col gap-2">
        <button type="button" class="btn bg-primary text-white" @click="print">IMPRIMER / PDF</button>
        <button type="button" class="btn bg-primarylight text-primary" @click="emit('newSale')">
          NOUVELLE VENTE
        </button>
      </div>
    </div>

    <PosReceiptTicket :sale="sale" :company="company" screen-hidden />
  </div>
</template>
