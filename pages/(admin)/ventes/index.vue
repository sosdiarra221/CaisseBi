<script lang="ts" setup>
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import { formatAmount, formatDateTime } from "~/lib/format";

DataTable.use(DataTablesCore);

definePageMeta({ layout: "home" });

const DT_LANGUAGE = {
  search: "",
  searchPlaceholder: "Rechercher...",
  lengthMenu: "Afficher _MENU_ ventes",
  info: "Affichage de _START_ à _END_ sur _TOTAL_ ventes",
  infoEmpty: "Aucune vente",
  infoFiltered: "(filtré depuis _MAX_ ventes)",
  zeroRecords: "Aucune vente ne correspond à la recherche",
  emptyTable: "Aucune vente.",
  paginate: { previous: "Précédent", next: "Suivant" },
};

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

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

const columns = [
  {
    data: "createdAt",
    render: (value: string, type: string) => {
      const d = new Date(value);
      return type === "display" ? escapeHtml(formatDateTime(d)) : d.getTime();
    },
  },
  {
    data: "number",
    render: (value: number, type: string) => {
      const label = `#${String(value).padStart(6, "0")}`;
      return type === "display" ? escapeHtml(label) : value;
    },
  },
  {
    data: "user.name",
    className: "max-md:hidden",
    render: (value: string, type: string) => (type === "display" ? escapeHtml(value ?? "—") : (value ?? "")),
  },
  {
    data: "payments",
    orderable: false,
    render: (payments: any[], type: string) => {
      if (type !== "display") return "";
      return `<div class="flex flex-wrap gap-1">${(payments ?? [])
        .map((p) => `<span class="rounded-full bg-primarylight px-2.5 py-1 text-2xs font-semibold text-primary">${escapeHtml(methodLabels[p.method] ?? p.method)}</span>`)
        .join("")}</div>`;
    },
  },
  {
    data: "total",
    render: (value: string, type: string) => (type === "display" ? escapeHtml(`${formatAmount(value)} ${company.value?.currency ?? ""}`) : Number(value)),
  },
  {
    data: "status",
    render: (value: string, type: string) => {
      if (type !== "display") return value;
      const cls = value === "CANCELLED" ? "bg-dangerlight text-danger" : "bg-successlight text-success";
      const label = value === "CANCELLED" ? "Annulée" : "Validée";
      return `<span class="rounded-full px-2.5 py-1 text-2xs font-semibold ${cls}">${label}</span>`;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    className: "text-end",
    render: (_d: any, type: string, row: any) => {
      if (type !== "display") return "";
      const canCancel = user.value?.role !== "CASHIER" && row.status === "COMPLETED";
      return `<div class="flex justify-end gap-1.5">
        <button type="button" class="js-view row-action-btn text-primary hover:bg-primarylight" title="Voir le ticket"><i class="fa fa-eye"></i></button>
        ${canCancel ? `<button type="button" class="js-cancel row-action-btn text-danger hover:bg-dangerlight" title="Annuler la vente"><i class="fa fa-ban"></i></button>` : ""}
      </div>`;
    },
  },
];

const tableOptions = {
  order: [[0, "desc"]] as any,
  language: DT_LANGUAGE,
  createdRow: (row: HTMLElement, data: any) => {
    row.querySelector(".js-view")?.addEventListener("click", () => (viewingSaleId.value = data.id));
    row.querySelector(".js-cancel")?.addEventListener("click", () => cancelSale(data));
  },
};
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
            <DataTable
              id="salesTable"
              class="display table !mb-6 text-left"
              :data="sales ?? []"
              :columns="columns"
              :options="tableOptions"
            >
              <thead>
                <tr>
                  <th class="!border-border !font-medium">Date</th>
                  <th class="!border-border !font-medium">N° vente</th>
                  <th class="!border-border !font-medium max-md:hidden">Caissier</th>
                  <th class="!border-border !font-medium">Paiement</th>
                  <th class="!border-border !font-medium">Total</th>
                  <th class="!border-border !font-medium">Statut</th>
                  <th class="!border-border !font-medium text-end">Actions</th>
                </tr>
              </thead>
            </DataTable>
          </div>
        </div>
      </div>
    </div>

    <PosSaleReceiptModal v-if="viewingSaleId" :sale-id="viewingSaleId" @close="viewingSaleId = null" />
  </div>
</template>
