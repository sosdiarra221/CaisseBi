<script lang="ts" setup>
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";

DataTable.use(DataTablesCore);

definePageMeta({ layout: "home" });

const DT_LANGUAGE = {
  search: "",
  searchPlaceholder: "Rechercher...",
  lengthMenu: "Afficher _MENU_ catégories",
  info: "Affichage de _START_ à _END_ sur _TOTAL_ catégories",
  infoEmpty: "Aucune catégorie",
  infoFiltered: "(filtré depuis _MAX_ catégories)",
  zeroRecords: "Aucune catégorie ne correspond à la recherche",
  emptyTable: "Aucune catégorie.",
  paginate: { previous: "Précédent", next: "Suivant" },
};

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

const { data: categories, refresh } = await useFetch("/api/categories");
const toast = useToast();
const { confirmDanger } = useConfirm();

const showForm = ref(false);
const editing = ref<any>(null);
const name = ref("");
const parentId = ref<number | null>(null);
const saving = ref(false);
const errorMessage = ref("");

function openCreate() {
  editing.value = null;
  name.value = "";
  parentId.value = null;
  showForm.value = true;
}

function openEdit(cat: any) {
  editing.value = cat;
  name.value = cat.name;
  parentId.value = cat.parentId;
  showForm.value = true;
}

async function save() {
  saving.value = true;
  errorMessage.value = "";
  try {
    if (editing.value) {
      await $fetch(`/api/categories/${editing.value.id}`, {
        method: "PATCH",
        body: { name: name.value, parentId: parentId.value },
      });
    } else {
      await $fetch("/api/categories", {
        method: "POST",
        body: { name: name.value, parentId: parentId.value },
      });
    }
    showForm.value = false;
    toast.success(editing.value ? "Catégorie modifiée." : "Catégorie créée.");
    await refresh();
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}

async function remove(cat: any) {
  const ok = await confirmDanger({
    title: `Supprimer "${cat.name}" ?`,
    text: "Cette action est irréversible.",
    confirmText: "Supprimer",
  });
  if (!ok) return;
  try {
    await $fetch(`/api/categories/${cat.id}`, { method: "DELETE" });
    toast.success("Catégorie supprimée.");
    await refresh();
  } catch (e: any) {
    toast.error(e?.data?.statusMessage || "Erreur");
  }
}

const columns = [
  {
    data: "name",
    render: (name: string, type: string) => (type === "display" ? escapeHtml(name) : name),
  },
  {
    data: null,
    className: "max-sm:hidden",
    render: (_d: any, type: string, row: any) => {
      const parentName = categories.value?.find((c) => c.id === row.parentId)?.name ?? "—";
      return type === "display" ? escapeHtml(parentName) : parentName;
    },
  },
  {
    data: "_count.products",
    defaultContent: 0,
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    className: "text-end",
    render: (_d: any, type: string) => {
      if (type !== "display") return "";
      return `<div class="flex justify-end gap-1.5">
        <button type="button" class="js-edit row-action-btn text-primary hover:bg-primarylight" title="Modifier"><i class="fa fa-pen"></i></button>
        <button type="button" class="js-delete row-action-btn text-danger hover:bg-dangerlight" title="Supprimer"><i class="fa fa-trash"></i></button>
      </div>`;
    },
  },
];

const tableOptions = {
  order: [[0, "asc"]] as any,
  language: DT_LANGUAGE,
  createdRow: (row: HTMLElement, data: any) => {
    row.querySelector(".js-edit")?.addEventListener("click", () => openEdit(data));
    row.querySelector(".js-delete")?.addEventListener("click", () => remove(data));
  },
};
</script>

<template>
  <div class="content-body">
    <CommonNav title="Catégories" name="Catégories" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex items-center justify-between border-b border-border py-4 px-5">
          <h4 class="text-base">Catégories</h4>
          <button type="button" class="btn bg-primary text-white btn-sm" @click="openCreate">
            + Ajouter
          </button>
        </div>
        <div class="p-5">
          <div class="overflow-x-auto">
            <DataTable
              id="categoriesTable"
              class="display table !mb-6 text-left"
              :data="categories ?? []"
              :columns="columns"
              :options="tableOptions"
            >
              <thead>
                <tr>
                  <th class="!border-border !font-medium">Nom</th>
                  <th class="!border-border !font-medium max-sm:hidden">Catégorie parente</th>
                  <th class="!border-border !font-medium">Produits</th>
                  <th class="!border-border !font-medium text-end">Actions</th>
                </tr>
              </thead>
            </DataTable>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showForm" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div class="w-full max-w-md rounded-xl bg-card p-6">
        <h4 class="mb-4 text-base">{{ editing ? "Modifier" : "Nouvelle" }} catégorie</h4>
        <p v-if="errorMessage" class="mb-3 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
          {{ errorMessage }}
        </p>
        <label class="mb-1">Nom</label>
        <input
          v-model="name"
          type="text"
          class="mb-4 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
        />
        <label class="mb-1">Catégorie parente</label>
        <select
          v-model="parentId"
          class="mb-5 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
        >
          <option :value="null">Aucune</option>
          <option
            v-for="cat in categories?.filter((c) => c.id !== editing?.id)"
            :key="cat.id"
            :value="cat.id"
          >
            {{ cat.name }}
          </option>
        </select>
        <div class="flex gap-2">
          <button type="button" class="btn flex-1 border border-border" @click="showForm = false">
            Annuler
          </button>
          <button
            type="button"
            class="btn flex-1 bg-primary text-white"
            :disabled="saving || !name"
            @click="save"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
