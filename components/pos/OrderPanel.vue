<script lang="ts" setup>
import { formatAmount } from "~/lib/format";
const props = defineProps<{
  currency: string;
  selectedMethod: "CASH" | "WAVE" | "ORANGE_MONEY" | "CARD";
  canEditPrice?: boolean;
}>();
const emit = defineEmits<{
  pay: [];
  close: [];
  "update:selectedMethod": ["CASH" | "WAVE" | "ORANGE_MONEY" | "CARD"];
}>();

const { lines, setQuantity, removeLine, clear, itemCount, total, setUnitPrice, effectivePrice } = useCart();
const { playTap, playRemove } = useClickSound();

const paymentMethods: { value: "CASH" | "WAVE" | "ORANGE_MONEY" | "CARD"; label: string; icon: string; accent: string }[] = [
  { value: "CASH", label: "Espèces", icon: "fa-money-bill-wave", accent: "text-success" },
  { value: "WAVE", label: "Wave", icon: "fa-wallet", accent: "text-blue-500" },
  { value: "ORANGE_MONEY", label: "Orange Money", icon: "fa-mobile-alt", accent: "text-orange-500" },
  { value: "CARD", label: "Carte", icon: "fa-credit-card", accent: "text-purple-500" },
];

function step(productId: number, quantity: number) {
  playTap();
  setQuantity(productId, quantity);
}

function remove(productId: number) {
  playRemove();
  removeLine(productId);
}

const editingPriceId = ref<number | null>(null);
const editPriceValue = ref<string>("");

function startEditPrice(productId: number, currentPrice: number) {
  if (!props.canEditPrice) return;
  editingPriceId.value = productId;
  editPriceValue.value = String(Math.round(currentPrice));
}

function commitEditPrice(productId: number) {
  if (editingPriceId.value !== productId) return;
  const value = Number(editPriceValue.value);
  if (Number.isFinite(value) && value >= 0) {
    setUnitPrice(productId, value);
  }
  editingPriceId.value = null;
}
</script>

<template>
  <div class="flex h-full flex-col bg-card">
    <div class="flex items-center justify-between border-b border-border px-4 py-3.5">
      <div class="flex items-center gap-2">
        <i class="fa fa-shopping-cart text-primary"></i>
        <h5 class="text-base">Commande</h5>
        <span class="rounded-full bg-primarylight px-2.5 py-0.5 text-2xs font-bold text-primary">
          {{ itemCount }} article{{ itemCount > 1 ? "s" : "" }}
        </span>
      </div>
      <div class="flex items-center gap-3">
        <button
          v-if="lines.length"
          type="button"
          class="text-danger"
          title="Vider la commande"
          @click="clear"
        >
          <i class="fa fa-trash"></i>
        </button>
        <button type="button" class="lg:hidden text-2xl leading-none" @click="emit('close')">&times;</button>
      </div>
    </div>

    <div class="min-h-0 flex-1 overflow-y-auto px-4 py-2">
      <p v-if="!lines.length" class="py-10 text-center text-body">
        Aucun article. Touchez un produit pour l'ajouter.
      </p>
      <table v-else class="w-full text-left">
        <thead>
          <tr class="text-2xs text-body">
            <th class="pb-2 font-medium">Produit</th>
            <th class="pb-2 font-medium">Qté</th>
            <th class="pb-2 text-end font-medium">Prix</th>
            <th class="pb-2 text-end font-medium">Total</th>
            <th class="pb-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="line in lines" :key="line.productId" class="border-t border-border">
            <td class="py-2.5 pr-2 font-semibold">{{ line.label }}</td>
            <td class="py-2.5">
              <div class="flex items-center gap-1.5">
                <button
                  type="button"
                  class="flex size-8 shrink-0 items-center justify-center rounded-full bg-primarylight font-bold text-primary active:scale-95"
                  @click="step(line.productId, line.quantity - 1)"
                >
                  −
                </button>
                <span class="w-5 text-center font-semibold">{{ line.quantity }}</span>
                <button
                  type="button"
                  class="flex size-8 shrink-0 items-center justify-center rounded-full bg-primarylight font-bold text-primary active:scale-95"
                  @click="step(line.productId, line.quantity + 1)"
                >
                  +
                </button>
              </div>
            </td>
            <td class="py-2.5 text-end text-2xs">
              <input
                v-if="editingPriceId === line.productId"
                v-model="editPriceValue"
                type="number"
                min="0"
                autofocus
                class="h-7 w-20 rounded-md border border-primary bg-transparent px-1.5 text-end text-body outline-none"
                @keyup.enter="commitEditPrice(line.productId)"
                @blur="commitEditPrice(line.productId)"
              />
              <button
                v-else
                type="button"
                class="text-body"
                :class="canEditPrice ? 'underline decoration-dotted hover:text-primary' : ''"
                :title="canEditPrice ? 'Modifier le prix' : ''"
                @click="startEditPrice(line.productId, effectivePrice(line))"
              >
                {{ formatAmount(effectivePrice(line)) }}
                <i v-if="canEditPrice" class="fa fa-pen ml-1 text-[9px]"></i>
              </button>
            </td>
            <td class="py-2.5 text-end font-semibold">
              {{ formatAmount(line.unitPrice * line.quantity - line.discount) }}
            </td>
            <td class="py-2.5 pl-2 text-end">
              <button type="button" class="text-danger" title="Supprimer" @click="remove(line.productId)">
                <i class="fa fa-times"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Bottom-most interactive bar of the mobile drawer (see pos.vue): padded
         for a home-indicator via env(safe-area-inset-bottom) so "Payer" isn't
         flush against it when installed as a standalone PWA. -->
    <div class="border-t border-border px-4 py-4" style="padding-bottom: max(1rem, env(safe-area-inset-bottom))">
      <div class="mb-4 flex items-center justify-between rounded-xl bg-bodybg px-3.5 py-3">
        <span class="font-semibold">Total à payer</span>
        <span class="text-xl font-bold text-primary">{{ formatAmount(total) }} {{ currency }}</span>
      </div>

      <p class="mb-2 flex items-center gap-1.5 text-2xs font-semibold uppercase text-body">
        <i class="fa fa-wallet"></i> Mode de paiement
      </p>
      <div class="mb-4 grid grid-cols-2 gap-2">
        <button
          v-for="method in paymentMethods"
          :key="method.value"
          type="button"
          class="flex items-center gap-2 rounded-lg border p-2 text-2sm font-semibold duration-150"
          :class="
            selectedMethod === method.value
              ? 'border-primary bg-primarylight text-primary'
              : 'border-border text-body hover:border-primary'
          "
          @click="emit('update:selectedMethod', method.value)"
        >
          <i class="fa" :class="[method.icon, method.accent]"></i>
          {{ method.label }}
        </button>
      </div>

      <div class="flex gap-2">
        <button
          type="button"
          class="btn flex-1 border border-danger text-danger hover:bg-dangerlight"
          :disabled="!lines.length"
          @click="clear"
        >
          <i class="fa fa-times mr-1.5"></i>Annuler
        </button>
        <button
          type="button"
          class="btn flex-[2] bg-primary text-white hover:bg-primaryhover"
          :disabled="!lines.length"
          @click="emit('pay')"
        >
          <i class="fa fa-check mr-1.5"></i>Payer
        </button>
      </div>
    </div>
  </div>
</template>
