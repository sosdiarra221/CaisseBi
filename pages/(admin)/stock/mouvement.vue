<script lang="ts" setup>
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import Multiselect from "vue-multiselect";
import { formatDateTime } from "~/lib/format";

DataTable.use(DataTablesCore);

definePageMeta({ layout: "home" });

const REASONS = [
  "Réception",
  "Produit gâté",
  "Produit périmé",
  "Produit cassé",
  "Perte",
  "Vol",
  "Utilisation interne",
  "Don",
  "Autre",
];

const TYPE_LABELS: Record<string, string> = { IN: "Entrée", OUT: "Sortie", ADJUSTMENT: "Ajustement" };
const TYPE_CLASSES: Record<string, string> = {
  IN: "text-success bg-successlight",
  OUT: "text-danger bg-dangerlight",
  ADJUSTMENT: "text-warning bg-warninglight",
};

const DT_LANGUAGE = {
  search: "",
  searchPlaceholder: "Rechercher...",
  lengthMenu: "Afficher _MENU_ mouvements",
  info: "Affichage de _START_ à _END_ sur _TOTAL_ mouvements",
  infoEmpty: "Aucun mouvement",
  infoFiltered: "(filtré depuis _MAX_ mouvements)",
  zeroRecords: "Aucun mouvement ne correspond à la recherche",
  emptyTable: "Aucun mouvement de stock enregistré.",
  paginate: { previous: "Précédent", next: "Suivant" },
};

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

const { data: products, refresh: refreshProducts } = await useFetch("/api/products");
const toast = useToast();

// --- History filters ---
const filterProduct = ref<any>(null);
const filterProductId = computed(() => filterProduct.value?.id);
const filterType = ref("");

const { data: movements, refresh: refreshMovements } = await useFetch("/api/stock/movements", {
  query: { productId: filterProductId, type: filterType },
  watch: [filterProductId, filterType],
});

function resetFilters() {
  filterProduct.value = null;
  filterType.value = "";
}

// --- Add movement modal ---
const showForm = ref(false);
const productId = ref<number | null>(null);
const type = ref<"IN" | "OUT">("IN");
const quantity = ref<number>(1);
const reason = ref(REASONS[0]);
const observation = ref("");
const saving = ref(false);
const errorMessage = ref("");

function openCreate() {
  productId.value = null;
  type.value = "IN";
  quantity.value = 1;
  reason.value = REASONS[0];
  observation.value = "";
  errorMessage.value = "";
  showForm.value = true;
}

function closeForm() {
  showForm.value = false;
}

async function submit() {
  if (!productId.value) return;
  saving.value = true;
  errorMessage.value = "";
  try {
    await $fetch("/api/stock/movements", {
      method: "POST",
      body: {
        productId: productId.value,
        type: type.value,
        quantity: quantity.value,
        reason: reason.value,
        observation: observation.value || undefined,
      },
    });
    toast.success("Mouvement enregistré.");
    showForm.value = false;
    await Promise.all([refreshProducts(), refreshMovements()]);
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
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
    data: "product.label",
    render: (label: string, type: string) => (type === "display" ? escapeHtml(label ?? "—") : (label ?? "")),
  },
  {
    data: "type",
    render: (value: string, type: string) => {
      if (type !== "display") return value;
      const cls = TYPE_CLASSES[value] ?? "";
      return `<span class="badge badge-sm ${cls}">${TYPE_LABELS[value] ?? value}</span>`;
    },
  },
  {
    data: "quantity",
    className: "max-sm:hidden",
  },
  {
    data: "reason",
    className: "max-md:hidden",
    render: (value: string, type: string) => (type === "display" ? escapeHtml(value ?? "—") : (value ?? "")),
  },
  {
    data: "observation",
    className: "max-lg:hidden",
    defaultContent: "—",
    render: (value: string | null, type: string) => (type === "display" ? escapeHtml(value || "—") : (value ?? "")),
  },
  {
    data: "user.name",
    className: "max-md:hidden",
    render: (value: string, type: string) => (type === "display" ? escapeHtml(value ?? "—") : (value ?? "")),
  },
];

const tableOptions = {
  order: [[0, "desc"]] as any,
  language: DT_LANGUAGE,
};
</script>

<template>
  <div class="content-body">
    <CommonNav title="Stock" name="Mouvement de stock" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 px-5">
          <h4 class="text-base">Historique des mouvements</h4>
          <button type="button" class="btn bg-primary text-white btn-sm" @click="openCreate">
            + Ajouter
          </button>
        </div>
        <div class="p-5">
          <div class="mb-4 flex flex-wrap items-end gap-3">
            <div class="w-full max-w-xs">
              <label class="mb-1 block">Produit</label>
              <Multiselect
                v-model="filterProduct"
                :options="products ?? []"
                label="label"
                track-by="id"
                placeholder="Rechercher un produit..."
                select-label=""
                deselect-label=""
                selected-label=""
                :show-labels="false"
              />
            </div>
            <div class="w-full max-w-[190px]">
              <label class="mb-1 block">Type</label>
              <select v-model="filterType" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
                <option value="">Tous</option>
                <option value="IN">Entrée</option>
                <option value="OUT">Sortie</option>
                <option value="ADJUSTMENT">Ajustement</option>
              </select>
            </div>
            <button
              v-if="filterProduct || filterType"
              type="button"
              class="h-11 rounded-lg px-3 text-2sm text-body hover:text-danger"
              @click="resetFilters"
            >
              Réinitialiser
            </button>
          </div>

          <div class="overflow-x-auto">
            <DataTable
              id="movementsTable"
              class="display table !mb-6 text-left"
              :data="movements ?? []"
              :columns="columns"
              :options="tableOptions"
            >
              <thead>
                <tr>
                  <th class="!border-border !font-medium">Date/heure</th>
                  <th class="!border-border !font-medium">Produit</th>
                  <th class="!border-border !font-medium">Type</th>
                  <th class="!border-border !font-medium max-sm:hidden">Quantité</th>
                  <th class="!border-border !font-medium max-md:hidden">Motif</th>
                  <th class="!border-border !font-medium max-lg:hidden">Observation</th>
                  <th class="!border-border !font-medium max-md:hidden">Utilisateur</th>
                </tr>
              </thead>
            </DataTable>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showForm"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
      @click.self="closeForm"
    >
      <Transition
        appear
        enter-active-class="transition duration-200"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-150"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div class="w-full max-w-lg rounded-xl bg-card p-6 my-8">
            <h4 class="mb-4 text-base">Nouveau mouvement de stock</h4>
            <p v-if="errorMessage" class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
              {{ errorMessage }}
            </p>

            <label class="mb-1">Produit</label>
            <select v-model="productId" class="mb-4 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
              <option :value="null" disabled>Sélectionner...</option>
              <option v-for="p in products" :key="p.id" :value="p.id">{{ p.label }} (stock: {{ p.quantity }})</option>
            </select>

            <label class="mb-1">Type</label>
            <div class="mb-4 flex gap-4">
              <label class="flex items-center gap-2"><input v-model="type" type="radio" value="IN" /> Entrée</label>
              <label class="flex items-center gap-2"><input v-model="type" type="radio" value="OUT" /> Sortie</label>
            </div>

            <label class="mb-1">Quantité</label>
            <input v-model.number="quantity" type="number" min="1" class="mb-4 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

            <label class="mb-1">Motif</label>
            <select v-model="reason" class="mb-4 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
              <option v-for="r in REASONS" :key="r" :value="r">{{ r }}</option>
            </select>

            <label class="mb-1">Observation</label>
            <textarea v-model="observation" rows="2" class="mb-5 w-full rounded-lg border border-border bg-transparent px-3 py-2 focus:border-primary" />

            <div class="flex gap-2">
              <button type="button" class="btn flex-1 border border-border" @click="closeForm">Annuler</button>
              <button type="button" class="btn flex-1 bg-primary text-white" :disabled="saving || !productId" @click="submit">
                {{ saving ? "Enregistrement..." : "Valider" }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
  </div>
</template>
