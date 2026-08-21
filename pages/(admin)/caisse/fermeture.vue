<script lang="ts" setup>
import { formatAmount } from "~/lib/format";
definePageMeta({ layout: "home" });

const { user } = useUserSession();
// Closing a register is Owner/Manager-only — a Cashier reaching this route
// directly (the link to it is already hidden for them) gets bounced, not
// just blocked at submit time, matching the corresponding API restriction.
if (user.value?.role === "CASHIER") {
  await navigateTo("/caisse");
}

const { data: current } = await useFetch("/api/cash-sessions/current");
const { data: detail } = await useFetch(
  () => (current.value ? `/api/cash-sessions/${current.value.id}` : null)
);

const countedAmount = ref<number>(0);
const cashIn = ref<number>(0);
const cashOut = ref<number>(0);
const saving = ref(false);
const errorMessage = ref("");
const result = ref<any>(null);

const cashSalesSoFar = computed(() => detail.value?.paymentTotals?.CASH ?? 0);
const theoreticalPreview = computed(
  () => Number(current.value?.startingFloat ?? 0) + cashSalesSoFar.value + cashIn.value - cashOut.value
);

async function close() {
  if (!current.value) return;
  saving.value = true;
  errorMessage.value = "";
  try {
    result.value = await $fetch("/api/cash-sessions/close", {
      method: "POST",
      body: {
        cashSessionId: current.value.id,
        countedAmount: countedAmount.value,
        cashIn: cashIn.value,
        cashOut: cashOut.value,
      },
    });
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Caisse" name="Fermeture de caisse" />
    <div class="container">
      <div v-if="!current && !result" class="card !h-auto max-w-md p-5">
        <p>Aucune caisse ouverte.</p>
      </div>

      <div v-else-if="result" class="card !h-auto max-w-md p-5">
        <p class="mb-3 text-success font-semibold">Caisse fermée avec succès.</p>
        <div class="flex justify-between py-1"><span>Fond initial</span><span>{{ formatAmount(result.startingFloat) }}</span></div>
        <div class="flex justify-between py-1"><span>Montant théorique</span><span>{{ formatAmount(result.theoreticalAmount) }}</span></div>
        <div class="flex justify-between py-1"><span>Montant compté</span><span>{{ formatAmount(result.countedAmount) }}</span></div>
        <div class="flex justify-between py-1 font-bold" :class="Number(result.gap) === 0 ? '' : Number(result.gap) < 0 ? 'text-danger' : 'text-success'">
          <span>Écart</span><span>{{ Number(result.gap) }}</span>
        </div>
        <NuxtLink to="/" class="btn bg-primary text-white mt-4 inline-block">Retour au tableau de bord</NuxtLink>
      </div>

      <div v-else class="card !h-auto max-w-md">
        <div class="p-5">
          <p v-if="errorMessage" class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
            {{ errorMessage }}
          </p>
          <div class="flex justify-between py-1"><span>Fond initial</span><span>{{ formatAmount(current.startingFloat) }}</span></div>
          <div class="flex justify-between py-1"><span>Ventes espèces</span><span>{{ formatAmount(cashSalesSoFar) }}</span></div>

          <label class="mb-1 mt-3 block">Entrées</label>
          <input v-model.number="cashIn" type="number" min="0" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

          <label class="mb-1">Sorties</label>
          <input v-model.number="cashOut" type="number" min="0" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

          <div class="flex justify-between py-2 border-t border-border mt-2 font-semibold">
            <span>Total théorique</span><span>{{ formatAmount(theoreticalPreview) }}</span>
          </div>

          <label class="mb-1 mt-3 block">Montant compté</label>
          <input v-model.number="countedAmount" type="number" min="0" class="mb-5 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

          <div class="flex gap-2">
            <NuxtLink to="/" class="btn flex-1 border border-border">ANNULER</NuxtLink>
            <button type="button" class="btn flex-1 bg-primary text-white" :disabled="saving" @click="close">
              CONFIRMER FERMETURE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
