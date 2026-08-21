<script lang="ts" setup>
import { formatAmount } from "~/lib/format";
const props = defineProps<{
  total: number;
  currency: string;
  loading: boolean;
  initialMethod: "CASH" | "WAVE" | "ORANGE_MONEY" | "CARD";
}>();
const emit = defineEmits<{
  confirm: [payload: { method: "CASH" | "CARD" | "WAVE" | "ORANGE_MONEY"; amount: number; printImmediately: boolean }];
  close: [];
}>();

const { playTap } = useClickSound();

// Payment-method icon badges for the POS payment modal. Cash/Card keep the
// original hand-drawn SVGs (0 0 100 100 viewBox, own rounded-square
// background). Wave and Orange Money use the real official brand assets
// (assets/images/payment/wave.jpg, assets/images/payment/orange-money.svg)
// instead of hand-drawn recreations — see badge markup below. POS only, by
// design (see the ticket: components/pos/ReceiptTicket.vue deliberately
// keeps its plain checklist icons, no payment-method logos on the printed
// receipt).
const ICON_CASH = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="22" fill="#2FB344"/><rect x="18" y="34" width="64" height="36" rx="6" fill="white" fill-opacity="0.15"/><rect x="18" y="34" width="64" height="36" rx="6" stroke="white" stroke-width="4"/><circle cx="50" cy="52" r="10" stroke="white" stroke-width="4"/><path d="M28 42v20M72 42v20" stroke="white" stroke-width="4" stroke-linecap="round"/></svg>`;
const ICON_CARD = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" rx="22" fill="#182B6B"/><rect x="16" y="30" width="68" height="44" rx="7" stroke="white" stroke-width="4"/><path d="M16 44h68" stroke="white" stroke-width="4"/><rect x="24" y="56" width="18" height="7" rx="2" fill="white"/></svg>`;

const methods: { value: "CASH" | "WAVE" | "ORANGE_MONEY" | "CARD"; label: string; iconSvg?: string }[] = [
  { value: "CASH", label: "Espèces", iconSvg: ICON_CASH },
  { value: "WAVE", label: "Wave" },
  { value: "ORANGE_MONEY", label: "Orange Money" },
  { value: "CARD", label: "Carte bancaire", iconSvg: ICON_CARD },
];

const method = ref<"CASH" | "WAVE" | "ORANGE_MONEY" | "CARD">(props.initialMethod);
const receivedInput = ref<string>(String(props.total));

const received = computed(() => Number(receivedInput.value || 0));
const change = computed(() => Math.max(0, received.value - props.total));
const canValidate = computed(() => method.value !== "CASH" || received.value >= props.total);

watch(method, (m) => {
  if (m !== "CASH") receivedInput.value = String(props.total);
});

function pressKey(key: string) {
  playTap();
  if (method.value !== "CASH") return;
  if (key === "C") {
    receivedInput.value = "";
  } else if (key === "back") {
    receivedInput.value = receivedInput.value.slice(0, -1);
  } else {
    if (receivedInput.value.length >= 9) return;
    receivedInput.value = (receivedInput.value === "0" ? "" : receivedInput.value) + key;
  }
}

function confirm() {
  if (!canValidate.value) return;
  // A single "Encaisser" action validates the sale and prints the ticket in
  // one step — no separate print/validate choice.
  emit("confirm", { method: method.value, amount: props.total, printImmediately: true });
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4">
    <!-- max-h caps the card to the viewport (minus the p-4 backdrop margin)
         so tall content (stacked payment methods + keypad on a short phone
         screen, e.g. 375x812) scrolls inside the card instead of being
         clipped by overflow-hidden with the "Encaisser" button pushed off
         screen and unreachable. Header/footer stay put; only the middle
         section scrolls. -->
    <div class="flex max-h-[calc(100vh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-card">
      <div class="flex shrink-0 items-center justify-between bg-primary px-6 py-4 text-white">
        <div class="flex items-center gap-3">
          <span class="flex size-10 items-center justify-center rounded-xl bg-white/15 text-lg">
            <i class="fa fa-wallet"></i>
          </span>
          <div>
            <p class="font-bold leading-tight">Paiement</p>
            <p class="text-2xs text-white/80">Finaliser la commande</p>
          </div>
        </div>
        <button type="button" class="flex size-9 shrink-0 items-center justify-center text-2xl leading-none text-white/90 hover:text-white" @click="emit('close')">
          &times;
        </button>
      </div>

      <div class="grid min-h-0 flex-1 grid-cols-1 gap-5 overflow-y-auto p-6 sm:grid-cols-2">
        <div class="sm:col-span-2 flex flex-wrap items-end justify-between gap-4 rounded-xl bg-bodybg px-4 py-3.5">
          <div>
            <p class="text-2xs text-body">Total à payer</p>
            <p class="text-2xl font-bold text-primary">{{ formatAmount(total) }} {{ currency }}</p>
          </div>
          <div class="min-w-[160px]">
            <label class="mb-1 block text-2xs text-body">Montant donné</label>
            <div class="flex h-10 items-center rounded-lg border border-border bg-card px-3">
              <input
                :value="receivedInput"
                readonly
                class="w-full bg-transparent font-semibold outline-none"
              />
              <span class="text-2xs text-body">{{ currency }}</span>
            </div>
          </div>
        </div>

        <div>
          <p class="mb-2 text-2xs font-semibold uppercase text-body">Mode de paiement</p>
          <div class="flex flex-col gap-2">
            <button
              v-for="m in methods"
              :key="m.value"
              type="button"
              class="flex items-center gap-3 rounded-xl border p-3 text-left font-semibold duration-150"
              :class="
                method === m.value
                  ? 'border-primary bg-primarylight text-primary'
                  : 'border-border hover:border-primary'
              "
              @click="playTap(); method = m.value"
            >
              <span
                class="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg"
                :class="m.value === 'ORANGE_MONEY' ? 'bg-white p-1.5' : ''"
              >
                <img
                  v-if="m.value === 'WAVE'"
                  src="~/assets/images/payment/wave.jpg"
                  alt="Wave"
                  class="h-full w-full object-cover"
                />
                <img
                  v-else-if="m.value === 'ORANGE_MONEY'"
                  src="~/assets/images/payment/orange-money.svg"
                  alt="Orange Money"
                  class="h-full w-full object-contain"
                />
                <span v-else v-html="m.iconSvg"></span>
              </span>
              {{ m.label }}
            </button>
          </div>
        </div>

        <div>
          <p class="mb-2 text-2xs font-semibold uppercase text-body">Détail du paiement</p>
          <div class="mb-3 rounded-xl border border-border p-3.5 text-2sm">
            <div class="flex justify-between py-1">
              <span class="text-body">Montant à payer</span>
              <span class="font-semibold">{{ formatAmount(total) }} {{ currency }}</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-body">Montant donné</span>
              <span class="font-semibold">{{ formatAmount(received) }} {{ currency }}</span>
            </div>
            <div class="flex justify-between border-t border-border py-1.5 mt-1">
              <span class="font-semibold">Monnaie à rendre</span>
              <span class="font-bold" :class="method === 'CASH' ? 'text-success' : 'text-body'">
                {{ formatAmount(change) }} {{ currency }}
              </span>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-1.5" :class="method !== 'CASH' ? 'opacity-40 pointer-events-none' : ''">
            <button
              v-for="key in ['1', '2', '3', '4', '5', '6', '7', '8', '9']"
              :key="key"
              type="button"
              class="h-11 rounded-lg bg-bodybg font-semibold hover:bg-primarylight active:scale-95"
              @click="pressKey(key)"
            >
              {{ key }}
            </button>
            <button type="button" class="h-11 rounded-lg bg-dangerlight font-semibold text-danger active:scale-95" @click="pressKey('C')">
              C
            </button>
            <button type="button" class="h-11 rounded-lg bg-bodybg font-semibold hover:bg-primarylight active:scale-95" @click="pressKey('0')">
              0
            </button>
            <button type="button" class="h-11 rounded-lg bg-bodybg font-semibold hover:bg-primarylight active:scale-95" @click="pressKey('back')">
              <i class="fa fa-backspace"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="shrink-0 border-t border-border p-5">
        <button
          type="button"
          class="btn w-full bg-primary text-white hover:bg-primaryhover disabled:opacity-50"
          :disabled="!canValidate || loading"
          @click="confirm"
        >
          <i class="fa fa-print mr-1.5"></i>{{ loading ? "Validation..." : "Encaisser" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* The injected payment-method icon SVGs (via v-html) carry no width/height
   of their own — stretch them to fill their badge span edge-to-edge so all
   4 methods render at an identical, uniform icon size. */
.flex.size-9.shrink-0 :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
