<script lang="ts" setup>
import { formatDateTime } from "~/lib/format";

const props = defineProps<{ saleId: number }>();
const emit = defineEmits<{ close: [] }>();

const { data: sale, pending, error } = await useFetch(() => `/api/sales/${props.saleId}`);

function print() {
  window.print();
}
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto print:bg-transparent print:p-0"
  >
    <div
      class="flex max-h-[90vh] w-full max-w-md flex-col overflow-hidden rounded-2xl bg-card print:max-h-none print:overflow-visible print:rounded-none print:bg-transparent"
    >
      <div class="flex shrink-0 items-center justify-between bg-primary px-6 py-4 text-white print:hidden">
        <div class="flex items-center gap-3">
          <span class="flex size-10 items-center justify-center rounded-xl bg-white/15 text-lg">
            <i class="fa fa-receipt"></i>
          </span>
          <div>
            <p class="font-bold leading-tight">
              Vente {{ sale ? "#" + String(sale.number).padStart(6, "0") : "" }}
            </p>
            <p class="text-2xs text-white/80">
              {{ sale ? formatDateTime(sale.createdAt) : "Chargement..." }}
            </p>
          </div>
        </div>
        <button type="button" class="text-2xl leading-none text-white/90 hover:text-white" @click="emit('close')">
          &times;
        </button>
      </div>

      <div
        class="flex justify-center overflow-y-auto bg-bodybg p-5 print:overflow-visible print:bg-transparent print:p-0"
      >
        <div v-if="pending" class="py-10 text-center text-body print:hidden">Chargement du ticket...</div>
        <div v-else-if="error || !sale" class="py-10 text-center text-danger print:hidden">
          Impossible de charger cette vente.
        </div>
        <PosReceiptTicket v-else :sale="sale" :company="sale.company" />
      </div>

      <div v-if="sale" class="flex shrink-0 gap-2 border-t border-border p-4 print:hidden">
        <button type="button" class="btn flex-1 border border-border" @click="emit('close')">Fermer</button>
        <button type="button" class="btn flex-1 bg-primary text-white" @click="print">
          <i class="fa fa-print mr-2"></i>Imprimer
        </button>
      </div>
    </div>
  </div>
</template>
