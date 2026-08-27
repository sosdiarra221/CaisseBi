<script lang="ts" setup>
import Multiselect from "vue-multiselect";
import { RESTAURANT_UNITS } from "~/lib/units";

definePageMeta({ layout: "home" });

const DT_LANGUAGE = {
  search: "",
  searchPlaceholder: "Rechercher...",
  lengthMenu: "Afficher _MENU_ articles",
  info: "Affichage de _START_ à _END_ sur _TOTAL_ articles",
  infoEmpty: "Aucun article",
  infoFiltered: "(filtré depuis _MAX_ articles)",
  zeroRecords: "Aucun article ne correspond à la recherche",
  emptyTable: "Aucun article.",
  paginate: { previous: "Précédent", next: "Suivant" },
};

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

const { data: articles, refresh } = await useFetch("/api/articles", { query: { includeInactive: "true" } });
const toast = useToast();
const { confirmDanger } = useConfirm();

// Preset restaurant units plus any custom ones already in use — so
// existing custom values show up selected, not blank, when editing.
const unitOptions = ref<string[]>([...RESTAURANT_UNITS]);
watchEffect(() => {
  for (const a of articles.value ?? []) {
    if (a.unit && !unitOptions.value.includes(a.unit)) unitOptions.value.push(a.unit);
  }
});
function addUnitTag(tag: string) {
  unitOptions.value.push(tag);
  form.unit = tag;
}

const showForm = ref(false);
const editing = ref<any>(null);
const saving = ref(false);
const errorMessage = ref("");

const form = reactive({ designation: "", quantity: 0, unit: "" as string | null });

function openCreate() {
  editing.value = null;
  Object.assign(form, { designation: "", quantity: 0, unit: null });
  showForm.value = true;
}

function openEdit(a: any) {
  editing.value = a;
  Object.assign(form, { designation: a.designation, quantity: Number(a.quantity), unit: a.unit });
  showForm.value = true;
}

async function save() {
  saving.value = true;
  errorMessage.value = "";
  try {
    if (editing.value) {
      await $fetch(`/api/articles/${editing.value.id}`, {
        method: "PATCH",
        body: { designation: form.designation, unit: form.unit },
      });
    } else {
      await $fetch("/api/articles", {
        method: "POST",
        body: { designation: form.designation, quantity: form.quantity, unit: form.unit },
      });
    }
    showForm.value = false;
    toast.success(editing.value ? "Article modifié." : "Article créé.");
    await refresh();
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}

async function toggleActive(a: any) {
  if (a.active) {
    const ok = await confirmDanger({
      title: `Désactiver "${a.designation}" ?`,
      text: "Cet article ne sera plus proposé dans les mouvements.",
      confirmText: "Désactiver",
    });
    if (!ok) return;
  }
  await $fetch(`/api/articles/${a.id}`, {
    method: a.active ? "DELETE" : "PATCH",
    body: a.active ? undefined : { active: true },
  });
  toast.success(a.active ? "Article désactivé." : "Article réactivé.");
  await refresh();
}

const columns = [
  {
    data: "designation",
    render: (v: string, type: string) => (type === "display" ? escapeHtml(v) : v),
  },
  {
    data: "quantity",
    render: (v: any, type: string) => (type === "display" ? escapeHtml(Number(v).toLocaleString("fr-FR")) : Number(v)),
  },
  {
    data: "unit",
    render: (v: string, type: string) => (type === "display" ? escapeHtml(v) : v),
  },
  {
    data: "active",
    render: (active: boolean, type: string) => {
      if (type !== "display") return active ? 1 : 0;
      return active
        ? '<span class="rounded-full bg-successlight px-2.5 py-1 text-2xs font-semibold text-success">Actif</span>'
        : '<span class="rounded-full bg-dangerlight px-2.5 py-1 text-2xs font-semibold text-danger">Désactivé</span>';
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    className: "text-end",
    render: (_d: any, type: string, row: any) => {
      if (type !== "display") return "";
      const toggleIcon = row.active ? "fa-ban" : "fa-rotate-left";
      const toggleTitle = row.active ? "Désactiver" : "Réactiver";
      return `<div class="flex justify-end gap-1.5">
        <button type="button" class="js-edit row-action-btn text-primary bg-primarylight hover:bg-primary hover:text-white" title="Modifier"><i class="fa fa-pen"></i></button>
        <button type="button" class="js-toggle row-action-btn text-danger bg-dangerlight hover:bg-danger hover:text-white" title="${toggleTitle}"><i class="fa ${toggleIcon}"></i></button>
      </div>`;
    },
  },
];

const tableOptions = {
  order: [[0, "asc"]] as any,
  language: DT_LANGUAGE,
  createdRow: (row: HTMLElement, data: any) => {
    row.querySelector(".js-edit")?.addEventListener("click", () => openEdit(data));
    row.querySelector(".js-toggle")?.addEventListener("click", () => toggleActive(data));
  },
};
</script>

<template>
  <div class="content-body">
    <CommonNav title="Articles" name="Articles / Ingrédients" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 px-5">
          <h4 class="text-base">Articles</h4>
          <button type="button" class="btn bg-primary text-white btn-sm" @click="openCreate">
            + Ajouter
          </button>
        </div>
        <div class="p-5">
          <div class="overflow-x-auto">
            <AppDataTable
              id="articlesTable"
              :data="articles ?? []"
              :columns="columns"
              :options="tableOptions"
            >
              <thead>
                <tr>
                  <th class="!border-border !font-medium">Désignation</th>
                  <th class="!border-border !font-medium">Quantité</th>
                  <th class="!border-border !font-medium">Mesure</th>
                  <th class="!border-border !font-medium">Statut</th>
                  <th class="!border-border !font-medium text-end">Actions</th>
                </tr>
              </thead>
            </AppDataTable>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showForm" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div class="w-full max-w-2xl rounded-xl bg-card p-6 my-8">
        <h4 class="mb-4 text-base">{{ editing ? "Modifier" : "Nouvel" }} article</h4>
        <p v-if="errorMessage" class="mb-3 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
          {{ errorMessage }}
        </p>

        <label class="mb-1">Désignation</label>
        <input
          v-model="form.designation"
          type="text"
          class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
        />

        <label v-if="!editing" class="mb-1">Quantité initiale</label>
        <input
          v-if="!editing"
          v-model.number="form.quantity"
          type="number"
          min="0"
          step="0.001"
          class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
        />
        <p v-else class="mb-3 text-2xs text-body">
          La quantité se modifie uniquement via Articles &gt; Mouvement.
        </p>

        <label class="mb-1">Mesure</label>
        <Multiselect
          v-model="form.unit"
          :options="unitOptions"
          placeholder="Choisir ou saisir une unité..."
          select-label=""
          deselect-label=""
          selected-label=""
          :taggable="true"
          tag-placeholder="Ajouter cette unité"
          @tag="addUnitTag"
        />

        <div class="mt-5 flex gap-2">
          <button type="button" class="btn flex-1 border border-border" @click="showForm = false">Annuler</button>
          <button
            type="button"
            class="btn flex-1 bg-primary text-white"
            :disabled="saving || !form.designation || !form.unit"
            @click="save"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
