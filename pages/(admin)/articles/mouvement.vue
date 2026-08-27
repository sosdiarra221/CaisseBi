<script lang="ts" setup>
import Multiselect from "vue-multiselect";
import { formatDateTime } from "~/lib/format";

definePageMeta({ layout: "home" });

const TYPE_LABELS: Record<string, string> = { IN: "Entrée", OUT: "Sortie" };
const TYPE_CLASSES: Record<string, string> = {
  IN: "text-success bg-successlight",
  OUT: "text-danger bg-dangerlight",
};

const DT_LANGUAGE = {
  search: "",
  searchPlaceholder: "Rechercher...",
  lengthMenu: "Afficher _MENU_ mouvements",
  info: "Affichage de _START_ à _END_ sur _TOTAL_ mouvements",
  infoEmpty: "Aucun mouvement",
  infoFiltered: "(filtré depuis _MAX_ mouvements)",
  zeroRecords: "Aucun mouvement ne correspond à la recherche",
  emptyTable: "Aucun mouvement d'article enregistré.",
  paginate: { previous: "Précédent", next: "Suivant" },
};

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

const { data: articles, refresh: refreshArticles } = await useFetch("/api/articles");
const { data: movements, refresh: refreshMovements } = await useFetch("/api/articles/movements");
const toast = useToast();

// --- Add movement modal: one type (Entrée/Sortie), N dynamic article+qty lines ---
const showForm = ref(false);
const type = ref<"IN" | "OUT">("IN");
const observation = ref("");
type FormLine = { article: any; quantity: number };
const lines = ref<FormLine[]>([{ article: null, quantity: 1 }]);
const saving = ref(false);
const errorMessage = ref("");

function openCreate() {
  type.value = "IN";
  observation.value = "";
  lines.value = [{ article: null, quantity: 1 }];
  errorMessage.value = "";
  showForm.value = true;
}

function addLine() {
  lines.value.push({ article: null, quantity: 1 });
}

function removeLine(i: number) {
  lines.value.splice(i, 1);
}

const validLines = computed(() => lines.value.filter((l) => l.article && l.quantity > 0));

async function submit() {
  if (!validLines.value.length) return;
  saving.value = true;
  errorMessage.value = "";
  try {
    await $fetch("/api/articles/movements", {
      method: "POST",
      body: {
        type: type.value,
        lines: validLines.value.map((l) => ({
          articleId: l.article.id,
          quantity: l.quantity,
          observation: observation.value || undefined,
        })),
      },
    });
    toast.success("Mouvement enregistré.");
    showForm.value = false;
    await Promise.all([refreshArticles(), refreshMovements()]);
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
    data: "article.designation",
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
    data: null,
    className: "max-sm:hidden",
    render: (_d: any, type: string, row: any) => {
      const label = `${Number(row.quantity).toLocaleString("fr-FR")} ${row.article?.unit ?? ""}`;
      return type === "display" ? escapeHtml(label) : Number(row.quantity);
    },
  },
  {
    data: "observation",
    className: "max-md:hidden",
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
    <CommonNav title="Articles" name="Mouvement d'articles" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 px-5">
          <h4 class="text-base">Historique des mouvements d'articles</h4>
          <button type="button" class="btn bg-primary text-white btn-sm" @click="openCreate">
            + Ajouter
          </button>
        </div>
        <div class="p-5">
          <div class="overflow-x-auto">
            <AppDataTable
              id="articleMovementsTable"
              :data="movements ?? []"
              :columns="columns"
              :options="tableOptions"
            >
              <thead>
                <tr>
                  <th class="!border-border !font-medium">Date/heure</th>
                  <th class="!border-border !font-medium">Article</th>
                  <th class="!border-border !font-medium">Type</th>
                  <th class="!border-border !font-medium max-sm:hidden">Quantité</th>
                  <th class="!border-border !font-medium max-md:hidden">Observation</th>
                  <th class="!border-border !font-medium max-md:hidden">Utilisateur</th>
                </tr>
              </thead>
            </AppDataTable>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showForm"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
      @click.self="showForm = false"
    >
      <div class="w-full max-w-2xl rounded-xl bg-card p-6 my-8">
        <h4 class="mb-4 text-base">Nouveau mouvement d'articles</h4>
        <p v-if="errorMessage" class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
          {{ errorMessage }}
        </p>

        <label class="mb-1">Type</label>
        <div class="mb-4 flex gap-4">
          <label class="flex items-center gap-2"><input v-model="type" type="radio" value="IN" /> Entrée</label>
          <label class="flex items-center gap-2"><input v-model="type" type="radio" value="OUT" /> Sortie</label>
        </div>

        <label class="mb-2 block">Articles</label>
        <div class="mb-3 space-y-3">
          <div
            v-for="(line, i) in lines"
            :key="i"
            class="flex flex-wrap items-end gap-2 rounded-lg border border-border p-3"
          >
            <div class="min-w-[220px] flex-1">
              <label class="mb-1 block text-2xs text-body">Article</label>
              <Multiselect
                v-model="line.article"
                :options="articles ?? []"
                label="designation"
                track-by="id"
                placeholder="Rechercher un article..."
                select-label=""
                deselect-label=""
                selected-label=""
                :show-labels="false"
              />
            </div>
            <div class="w-28 shrink-0">
              <label class="mb-1 block text-2xs text-body">Quantité</label>
              <input
                v-model.number="line.quantity"
                type="number"
                min="0.001"
                step="0.001"
                class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
              />
            </div>
            <span v-if="line.article?.unit" class="pb-2.5 text-2sm text-body">{{ line.article.unit }}</span>
            <button
              type="button"
              class="row-action-btn shrink-0 text-danger bg-dangerlight hover:bg-danger hover:text-white"
              title="Retirer cette ligne"
              :disabled="lines.length <= 1"
              @click="removeLine(i)"
            >
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <button type="button" class="mb-4 text-2sm font-semibold text-primary" @click="addLine">
          <i class="fa fa-plus mr-1.5"></i>Ajouter une ligne
        </button>

        <label class="mb-1">Observation (optionnel)</label>
        <textarea
          v-model="observation"
          rows="2"
          class="mb-5 w-full rounded-lg border border-border bg-transparent px-3 py-2 focus:border-primary"
        />

        <div class="flex gap-2">
          <button type="button" class="btn flex-1 border border-border" @click="showForm = false">Annuler</button>
          <button
            type="button"
            class="btn flex-1 bg-primary text-white"
            :disabled="saving || !validLines.length"
            @click="submit"
          >
            {{ saving ? "Enregistrement..." : "Valider" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
