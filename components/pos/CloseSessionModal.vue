<script lang="ts" setup>
import { formatAmount } from "~/lib/format";
const props = defineProps<{ sessionId: number; currency: string }>();
const emit = defineEmits<{ closed: []; close: [] }>();

const toast = useToast();

const { data: detail, pending } = await useFetch(() => `/api/cash-sessions/${props.sessionId}`);

const cashIn = ref<number>(0);
const cashOut = ref<number>(0);
const countedAmount = ref<number | null>(null);
const saving = ref(false);
const errorMessage = ref("");
const result = ref<any>(null);

const cashSales = computed(() => detail.value?.paymentTotals?.CASH ?? 0);
const cardSales = computed(() => detail.value?.paymentTotals?.CARD ?? 0);
const mobileSales = computed(
  () => (detail.value?.paymentTotals?.WAVE ?? 0) + (detail.value?.paymentTotals?.ORANGE_MONEY ?? 0)
);
const theoreticalPreview = computed(
  () => Number(detail.value?.startingFloat ?? 0) + cashSales.value + cashIn.value - cashOut.value
);

async function submit() {
  if (countedAmount.value === null) return;
  saving.value = true;
  errorMessage.value = "";
  try {
    result.value = await $fetch("/api/cash-sessions/close", {
      method: "POST",
      body: {
        cashSessionId: props.sessionId,
        countedAmount: countedAmount.value,
        cashIn: cashIn.value,
        cashOut: cashOut.value,
      },
    });
    toast.success("Caisse fermée.");
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur lors de la fermeture";
  } finally {
    saving.value = false;
  }
}

function finish() {
  emit("closed");
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
    <div class="w-full max-w-lg overflow-hidden rounded-2xl bg-card">
      <div class="flex items-center justify-between bg-primary px-6 py-4 text-white">
        <div class="flex items-center gap-3">
          <span class="flex size-10 items-center justify-center rounded-xl bg-white/15 text-lg">
            <i class="fa fa-cash-register"></i>
          </span>
          <div>
            <p class="font-bold leading-tight">Fermeture de caisse</p>
            <p class="text-2xs text-white/80">{{ detail?.cashRegister?.name }} — {{ detail?.user?.name }}</p>
          </div>
        </div>
        <button
          v-if="!result"
          type="button"
          class="text-2xl leading-none text-white/90 hover:text-white"
          @click="emit('close')"
        >
          &times;
        </button>
      </div>

      <div v-if="pending" class="p-8 text-center text-body">Chargement du journal de caisse...</div>

      <template v-else-if="!result">
        <div class="p-6">
          <p class="mb-2 text-2xs font-semibold uppercase text-body">Journal de la session</p>
          <div class="mb-4 rounded-xl border border-border p-3.5 text-2sm">
            <div class="flex justify-between py-1">
              <span class="text-body">Fond initial</span>
              <span class="font-semibold">{{ formatAmount(detail?.startingFloat ?? 0) }} {{ currency }}</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-body">Nombre de ventes</span>
              <span class="font-semibold">{{ detail?.salesCount ?? 0 }}</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-body">Total encaissé</span>
              <span class="font-semibold">{{ formatAmount(detail?.salesTotal ?? 0) }} {{ currency }}</span>
            </div>
            <div class="mt-2 grid grid-cols-3 gap-2 border-t border-border pt-2">
              <div>
                <p class="text-2xs text-body">Espèces</p>
                <p class="font-semibold">{{ formatAmount(cashSales) }}</p>
              </div>
              <div>
                <p class="text-2xs text-body">Carte</p>
                <p class="font-semibold">{{ formatAmount(cardSales) }}</p>
              </div>
              <div>
                <p class="text-2xs text-body">Mobile</p>
                <p class="font-semibold">{{ formatAmount(mobileSales) }}</p>
              </div>
            </div>
          </div>

          <p v-if="errorMessage" class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
            {{ errorMessage }}
          </p>

          <div class="mb-4 grid grid-cols-2 gap-3">
            <div>
              <label class="mb-1 block text-2xs text-body">Entrées</label>
              <input
                v-model.number="cashIn"
                type="number"
                min="0"
                class="h-10 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
              />
            </div>
            <div>
              <label class="mb-1 block text-2xs text-body">Sorties</label>
              <input
                v-model.number="cashOut"
                type="number"
                min="0"
                class="h-10 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
              />
            </div>
          </div>

          <div class="mb-4 flex items-center justify-between rounded-xl bg-bodybg px-3.5 py-3">
            <span class="font-semibold">Total théorique (espèces)</span>
            <span class="text-lg font-bold text-primary">{{ formatAmount(theoreticalPreview) }} {{ currency }}</span>
          </div>

          <label class="mb-1 block">Montant compté en caisse</label>
          <input
            v-model.number="countedAmount"
            type="number"
            min="0"
            placeholder="0"
            class="mb-6 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
          />

          <button
            type="button"
            class="btn w-full bg-primary text-white hover:bg-primaryhover disabled:opacity-50"
            :disabled="saving || countedAmount === null"
            @click="submit"
          >
            <i class="fa fa-check mr-1.5"></i>{{ saving ? "Vérification..." : "Confirmer la fermeture" }}
          </button>
        </div>
      </template>

      <template v-else>
        <div class="p-6">
          <div class="mb-4 rounded-xl border border-border p-3.5 text-2sm">
            <div class="flex justify-between py-1">
              <span class="text-body">Fond initial</span>
              <span class="font-semibold">{{ formatAmount(result.startingFloat) }}</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-body">Montant théorique</span>
              <span class="font-semibold">{{ formatAmount(result.theoreticalAmount) }}</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-body">Montant compté</span>
              <span class="font-semibold">{{ formatAmount(result.countedAmount) }}</span>
            </div>
            <div class="mt-1 flex justify-between border-t border-border py-1.5 font-bold">
              <span>Écart</span>
              <span :class="Number(result.gap) === 0 ? 'text-success' : Number(result.gap) < 0 ? 'text-danger' : 'text-warning'">
                {{ Number(result.gap) > 0 ? "+" : "" }}{{ formatAmount(result.gap) }} {{ currency }}
              </span>
            </div>
          </div>
          <p v-if="Number(result.gap) === 0" class="mb-5 flex items-center gap-2 text-success">
            <i class="fa fa-check-circle"></i> Aucun écart constaté, caisse équilibrée.
          </p>
          <p v-else class="mb-5 flex items-center gap-2" :class="Number(result.gap) < 0 ? 'text-danger' : 'text-warning'">
            <i class="fa fa-exclamation-triangle"></i> Écart constaté sur cette session.
          </p>
          <button type="button" class="btn w-full bg-primary text-white hover:bg-primaryhover" @click="finish">
            Terminer
          </button>
        </div>
      </template>
    </div>
  </div>
</template>
