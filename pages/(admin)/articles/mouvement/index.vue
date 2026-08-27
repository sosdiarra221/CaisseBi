<script lang="ts" setup>
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

const { data: movements } = await useFetch("/api/articles/movements");
const router = useRouter();

const columns = [
  {
    data: "number",
    render: (value: number, type: string) => {
      const label = `#${String(value).padStart(6, "0")}`;
      return type === "display" ? escapeHtml(label) : value;
    },
  },
  {
    data: "createdAt",
    render: (value: string, type: string) => {
      const d = new Date(value);
      return type === "display" ? escapeHtml(formatDateTime(d)) : d.getTime();
    },
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
    data: "lines",
    orderable: false,
    render: (lines: any[], type: string) => {
      if (type !== "display") return lines?.length ?? 0;
      const names = (lines ?? []).map((l) => l.article?.designation).filter(Boolean);
      const preview = names.slice(0, 2).join(", ");
      const extra = names.length > 2 ? ` +${names.length - 2}` : "";
      return escapeHtml(`${preview}${extra}`);
    },
  },
  {
    data: "user.name",
    className: "max-md:hidden",
    render: (value: string, type: string) => (type === "display" ? escapeHtml(value ?? "—") : (value ?? "")),
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    className: "text-end",
    render: (_d: any, type: string) => {
      if (type !== "display") return "";
      return `<div class="flex justify-end gap-1.5">
        <button type="button" class="js-view row-action-btn text-primary bg-primarylight hover:bg-primary hover:text-white" title="Voir"><i class="fa fa-eye"></i></button>
      </div>`;
    },
  },
];

const tableOptions = {
  order: [[1, "desc"]] as any,
  language: DT_LANGUAGE,
  createdRow: (row: HTMLElement, data: any) => {
    row.querySelector(".js-view")?.addEventListener("click", () => router.push(`/articles/mouvement/${data.id}`));
  },
};
</script>

<template>
  <div class="content-body">
    <CommonNav title="Articles" name="Mouvement d'articles" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 px-5">
          <h4 class="text-base">Historique des mouvements d'articles</h4>
          <NuxtLink to="/articles/mouvement/nouveau" class="btn bg-primary text-white btn-sm">
            + Ajouter
          </NuxtLink>
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
                  <th class="!border-border !font-medium">N°</th>
                  <th class="!border-border !font-medium">Date/heure</th>
                  <th class="!border-border !font-medium">Type</th>
                  <th class="!border-border !font-medium">Articles</th>
                  <th class="!border-border !font-medium max-md:hidden">Utilisateur</th>
                  <th class="!border-border !font-medium text-end">Actions</th>
                </tr>
              </thead>
            </AppDataTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
