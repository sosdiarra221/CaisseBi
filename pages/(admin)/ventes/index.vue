<script lang="ts" setup>
import { formatAmount, formatDateTime } from "~/lib/format";
definePageMeta({ layout: "home" });

const { user } = useUserSession();
const { data: company } = await useFetch("/api/company");
const toast = useToast();
const { confirmDanger } = useConfirm();

type Preset = "day" | "week" | "month" | "year";

const fromDate = ref("");
const toDate = ref("");
const method = ref("");
const activePreset = ref<Preset | null>(null);

function toDateStr(d: Date) {
  return d.toISOString().slice(0, 10);
}

function toRange(dateStr: string, endOfDay = false) {
  const d = new Date(dateStr);
  if (endOfDay) d.setHours(23, 59, 59, 999);
  return d.toISOString();
}

const presets: { id: Preset; label: string }[] = [
  { id: "day", label: "Jour" },
  { id: "week", label: "Semaine" },
  { id: "month", label: "Mois" },
  { id: "year", label: "Année" },
];

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

  fromDate.value = toDateStr(start);
  toDate.value = toDateStr(end);
  activePreset.value = preset;
}

function onManualDateChange() {
  activePreset.value = null;
}

function resetFilters() {
  fromDate.value = "";
  toDate.value = "";
  method.value = "";
  activePreset.value = null;
}

const from = computed(() => (fromDate.value ? toRange(fromDate.value) : ""));
const to = computed(() => (toDate.value ? toRange(toDate.value, true) : ""));

const { data: sales, refresh } = await useFetch("/api/sales", {
  query: { from, to, method },
  watch: [from, to, method],
});

const methodLabels: Record<string, string> = {
  CASH: "Espèces",
  CARD: "Carte",
  WAVE: "Wave",
  ORANGE_MONEY: "Orange Money",
};

const completedSales = computed(() => (sales.value ?? []).filter((s: any) => s.status !== "CANCELLED"));
const totalCA = computed(() => completedSales.value.reduce((sum: number, s: any) => sum + Number(s.total), 0));
const salesCount = computed(() => completedSales.value.length);
const avgTicket = computed(() => (salesCount.value ? totalCA.value / salesCount.value : 0));

const viewingSaleId = ref<number | null>(null);

async function cancelSale(sale: any) {
  const ok = await confirmDanger({
    title: `Annuler la vente #${String(sale.number).padStart(6, "0")} ?`,
    text: "Le stock des articles vendus sera restitué.",
    confirmText: "Annuler la vente",
  });
  if (!ok) return;
  try {
    await $fetch(`/api/sales/${sale.id}/cancel`, { method: "POST" });
    toast.success("Vente annulée.");
    await refresh();
  } catch (e: any) {
    toast.error(e?.data?.statusMessage || "Erreur");
  }
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Ventes" name="Historique des ventes" />
    <div class="container">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div class="card !h-auto p-5">
          <p class="text-body mb-1">Chiffre d'affaires</p>
          <p class="text-2xl font-bold text-primary">{{ formatAmount(totalCA) }} {{ company?.currency }}</p>
        </div>
        <div class="card !h-auto p-5">
          <p class="text-body mb-1">Nombre de ventes</p>
          <p class="text-2xl font-bold">{{ salesCount }}</p>
        </div>
        <div class="card !h-auto p-5">
          <p class="text-body mb-1">Panier moyen</p>
          <p class="text-2xl font-bold">{{ formatAmount(avgTicket) }} {{ company?.currency }}</p>
        </div>
      </div>

      <div class="card !h-auto">
        <div class="border-b border-border py-4 px-5">
          <h4 class="text-base">Ventes</h4>
        </div>
        <div class="p-5">
          <div class="mb-4 flex flex-wrap items-end gap-4">
            <div class="flex flex-wrap gap-2">
              <button
                v-for="p in presets"
                :key="p.id"
                type="button"
                class="shrink-0 rounded-full px-4 py-2 text-sm font-semibold duration-200"
                :class="activePreset === p.id ? 'bg-primary text-white' : 'bg-primarylight text-primary'"
                @click="applyPreset(p.id)"
              >
                {{ p.label }}
              </button>
            </div>

            <div class="flex flex-wrap items-end gap-3">
              <div>
                <label class="mb-1 block text-2xs text-body">Du</label>
                <input
                  v-model="fromDate"
                  type="date"
                  class="h-10 rounded-lg border border-border bg-transparent px-3"
                  @change="onManualDateChange"
                />
              </div>
              <div>
                <label class="mb-1 block text-2xs text-body">Au</label>
                <input
                  v-model="toDate"
                  type="date"
                  class="h-10 rounded-lg border border-border bg-transparent px-3"
                  @change="onManualDateChange"
                />
              </div>
              <select v-model="method" class="h-10 rounded-lg border border-border bg-transparent px-3">
                <option value="">Tous les paiements</option>
                <option value="CASH">Espèces</option>
                <option value="CARD">Carte</option>
                <option value="WAVE">Wave</option>
                <option value="ORANGE_MONEY">Orange Money</option>
              </select>
              <button
                v-if="fromDate || toDate || method"
                type="button"
                class="h-10 text-2sm text-body hover:text-danger"
                @click="resetFilters"
              >
                Réinitialiser
              </button>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="border-b border-border">
                  <th class="pb-3 font-medium">Date</th>
                  <th class="pb-3 font-medium">N° vente</th>
                  <th class="pb-3 font-medium max-md:hidden">Caissier</th>
                  <th class="pb-3 font-medium">Paiement</th>
                  <th class="pb-3 font-medium">Total</th>
                  <th class="pb-3 font-medium">Statut</th>
                  <th class="pb-3 font-medium text-end">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="s in sales"
                  :key="s.id"
                  class="border-b border-border duration-150 hover:bg-bodybg"
                >
                  <td class="py-3.5">{{ formatDateTime(s.createdAt) }}</td>
                  <td class="py-3.5">#{{ String(s.number).padStart(6, "0") }}</td>
                  <td class="py-3.5 max-md:hidden">{{ s.user.name }}</td>
                  <td class="py-3.5">
                    <div class="flex flex-wrap gap-1">
                      <span
                        v-for="(p, i) in s.payments"
                        :key="i"
                        class="rounded-full bg-primarylight px-2.5 py-1 text-2xs font-semibold text-primary"
                      >
                        {{ methodLabels[p.method] ?? p.method }}
                      </span>
                    </div>
                  </td>
                  <td class="py-3.5 font-semibold">{{ formatAmount(s.total) }} {{ company?.currency }}</td>
                  <td class="py-3.5">
                    <span
                      class="rounded-full px-2.5 py-1 text-2xs font-semibold"
                      :class="s.status === 'CANCELLED' ? 'bg-dangerlight text-danger' : 'bg-successlight text-success'"
                    >
                      {{ s.status === "CANCELLED" ? "Annulée" : "Validée" }}
                    </span>
                  </td>
                  <td class="py-3.5 text-end">
                    <button
                      type="button"
                      class="text-primary mr-3"
                      title="Voir le ticket"
                      @click="viewingSaleId = s.id"
                    >
                      <i class="fa fa-eye mr-1"></i>Voir
                    </button>
                    <button
                      v-if="user?.role !== 'CASHIER' && s.status === 'COMPLETED'"
                      type="button"
                      class="text-danger"
                      @click="cancelSale(s)"
                    >
                      Annuler
                    </button>
                  </td>
                </tr>
                <tr v-if="!sales?.length">
                  <td colspan="7" class="py-6 text-center text-body">Aucune vente.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <PosSaleReceiptModal v-if="viewingSaleId" :sale-id="viewingSaleId" @close="viewingSaleId = null" />
  </div>
</template>
