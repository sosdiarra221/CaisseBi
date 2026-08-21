<script lang="ts" setup>
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import { formatAmount, formatDate } from "~/lib/format";

DataTable.use(DataTablesCore);

definePageMeta({ layout: "home" });

// Fixed category list, mirrored from server/api/expenses/index.post.ts's
// EXPENSE_CATEGORIES — same "free string validated against a fixed list"
// approach as StockMovement.reason (see pages/(admin)/stock/mouvement.vue).
const CATEGORIES = [
  "Achats",
  "Salaires",
  "Loyer",
  "Transport",
  "Fournitures",
  "Électricité/Eau",
  "Maintenance",
  "Autre",
];

const CATEGORY_CLASSES: Record<string, string> = {
  Achats: "text-primary bg-primarylight",
  Salaires: "text-warning bg-warninglight",
  Loyer: "text-danger bg-dangerlight",
  Transport: "text-info bg-infolight",
  Fournitures: "text-success bg-successlight",
  "Électricité/Eau": "text-secondary bg-secondarylight",
  Maintenance: "text-dark bg-dark/10",
  Autre: "text-body bg-[#F1F2F4]",
};

const DT_LANGUAGE = {
  search: "",
  searchPlaceholder: "Rechercher...",
  lengthMenu: "Afficher _MENU_ dépenses",
  info: "Affichage de _START_ à _END_ sur _TOTAL_ dépenses",
  infoEmpty: "Aucune dépense",
  infoFiltered: "(filtré depuis _MAX_ dépenses)",
  zeroRecords: "Aucune dépense ne correspond à la recherche",
  emptyTable: "Aucune dépense enregistrée.",
  paginate: { previous: "Précédent", next: "Suivant" },
};

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

const { data: company } = await useFetch("/api/company");
const toast = useToast();
const { confirmDanger } = useConfirm();

// --- History filters ---
const filterCategory = ref("");
const filterFrom = ref("");
const filterTo = ref("");

const { data: expenses, refresh: refreshExpenses } = await useFetch("/api/expenses", {
  query: { category: filterCategory, from: filterFrom, to: filterTo },
  watch: [filterCategory, filterFrom, filterTo],
});

function resetFilters() {
  filterCategory.value = "";
  filterFrom.value = "";
  filterTo.value = "";
}

const totalAmount = computed(() =>
  (expenses.value ?? []).reduce((sum, e: any) => sum + Number(e.amount), 0)
);

// --- Add expense modal ---
const showForm = ref(false);
const today = new Date().toISOString().slice(0, 10);
const date = ref(today);
const amount = ref<number>(0);
const description = ref("");
const category = ref(CATEGORIES[0]);
const saving = ref(false);
const errorMessage = ref("");

function openCreate() {
  date.value = today;
  amount.value = 0;
  description.value = "";
  category.value = CATEGORIES[0];
  errorMessage.value = "";
  showForm.value = true;
}

function closeForm() {
  showForm.value = false;
}

async function submit() {
  if (!amount.value || amount.value <= 0) return;
  saving.value = true;
  errorMessage.value = "";
  try {
    await $fetch("/api/expenses", {
      method: "POST",
      body: {
        date: date.value,
        amount: amount.value,
        description: description.value || undefined,
        category: category.value,
      },
    });
    toast.success("Dépense enregistrée.");
    showForm.value = false;
    await refreshExpenses();
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}

async function removeExpense(e: any) {
  const ok = await confirmDanger({
    title: "Supprimer cette dépense ?",
    text: `${e.description || e.category} — ${formatAmount(e.amount)} ${company.value?.currency ?? ""}`,
    confirmText: "Supprimer",
  });
  if (!ok) return;
  try {
    await $fetch(`/api/expenses/${e.id}`, { method: "DELETE" });
    toast.success("Dépense supprimée.");
    await refreshExpenses();
  } catch (err: any) {
    toast.error(err?.data?.statusMessage || "Erreur");
  }
}

const columns = [
  {
    data: "date",
    render: (value: string, type: string) => {
      const d = new Date(value);
      return type === "display" ? escapeHtml(formatDate(d)) : d.getTime();
    },
  },
  {
    data: "category",
    render: (value: string, type: string) => {
      if (type !== "display") return value;
      const cls = CATEGORY_CLASSES[value] ?? "";
      return `<span class="badge badge-sm ${cls}">${escapeHtml(value)}</span>`;
    },
  },
  {
    data: "description",
    className: "max-md:hidden",
    defaultContent: "—",
    render: (value: string | null, type: string) => (type === "display" ? escapeHtml(value || "—") : (value ?? "")),
  },
  {
    data: "amount",
    render: (value: string, type: string) => (type === "display" ? escapeHtml(formatAmount(value)) : Number(value)),
  },
  {
    data: "user.name",
    className: "max-lg:hidden",
    render: (value: string, type: string) => (type === "display" ? escapeHtml(value ?? "—") : (value ?? "")),
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    className: "text-right",
    render: () => `<button type="button" class="js-delete text-danger">Supprimer</button>`,
  },
];

const tableOptions = {
  order: [[0, "desc"]] as any,
  language: DT_LANGUAGE,
  createdRow: (row: HTMLElement, data: any) => {
    row.querySelector(".js-delete")?.addEventListener("click", () => removeExpense(data));
  },
};
</script>

<template>
  <div class="content-body">
    <CommonNav title="Dépenses" name="Dépenses" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 px-5">
          <h4 class="text-base">Historique des dépenses</h4>
          <div class="flex flex-wrap gap-2">
            <NuxtLink to="/depenses/rapport" class="btn border border-border btn-sm">
              <i class="fa fa-file-invoice-dollar mr-1.5"></i>Rapport des dépenses
            </NuxtLink>
            <button type="button" class="btn bg-primary text-white btn-sm" @click="openCreate">
              + Ajouter
            </button>
          </div>
        </div>
        <div class="p-5">
          <div class="mb-4 flex flex-wrap items-end gap-3">
            <div class="w-full max-w-[220px]">
              <label class="mb-1 block">Catégorie</label>
              <select v-model="filterCategory" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
                <option value="">Toutes</option>
                <option v-for="c in CATEGORIES" :key="c" :value="c">{{ c }}</option>
              </select>
            </div>
            <div>
              <label class="mb-1 block">Du</label>
              <input v-model="filterFrom" type="date" class="h-11 rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
            </div>
            <div>
              <label class="mb-1 block">Au</label>
              <input v-model="filterTo" type="date" class="h-11 rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
            </div>
            <button
              v-if="filterCategory || filterFrom || filterTo"
              type="button"
              class="h-11 rounded-lg px-3 text-2sm text-body hover:text-danger"
              @click="resetFilters"
            >
              Réinitialiser
            </button>
            <div class="ml-auto text-right">
              <p class="text-2sm text-body">Total affiché</p>
              <p class="text-base font-bold">{{ formatAmount(totalAmount) }} {{ company?.currency }}</p>
            </div>
          </div>

          <div class="overflow-x-auto">
            <DataTable
              id="expensesTable"
              class="display table !mb-6 text-left"
              :data="expenses ?? []"
              :columns="columns"
              :options="tableOptions"
            >
              <thead>
                <tr>
                  <th class="!border-border !font-medium">Date</th>
                  <th class="!border-border !font-medium">Catégorie</th>
                  <th class="!border-border !font-medium max-md:hidden">Description</th>
                  <th class="!border-border !font-medium">Montant</th>
                  <th class="!border-border !font-medium max-lg:hidden">Enregistré par</th>
                  <th class="!border-border !font-medium text-right">Action</th>
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
        <div class="w-full max-w-2xl rounded-xl bg-card p-6 my-8">
          <h4 class="mb-4 text-base">Nouvelle dépense</h4>
          <p v-if="errorMessage" class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
            {{ errorMessage }}
          </p>

          <label class="mb-1">Date</label>
          <input v-model="date" type="date" class="mb-4 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

          <label class="mb-1">Montant</label>
          <input v-model.number="amount" type="number" min="1" class="mb-4 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

          <label class="mb-1">Catégorie</label>
          <select v-model="category" class="mb-4 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
            <option v-for="c in CATEGORIES" :key="c" :value="c">{{ c }}</option>
          </select>

          <label class="mb-1">Description</label>
          <textarea
            v-model="description"
            rows="4"
            placeholder="Ex : Facture SENELEC de juillet"
            class="mb-5 w-full rounded-lg border border-border bg-transparent px-3 py-2 focus:border-primary"
          ></textarea>

          <div class="flex gap-2">
            <button type="button" class="btn flex-1 border border-border" @click="closeForm">Annuler</button>
            <button type="button" class="btn flex-1 bg-primary text-white" :disabled="saving || !amount" @click="submit">
              {{ saving ? "Enregistrement..." : "Valider" }}
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
