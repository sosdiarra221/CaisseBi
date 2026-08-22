<script lang="ts" setup>
import { formatAmount } from "~/lib/format";
import { productAvatar } from "~/lib/avatar";

definePageMeta({ layout: "home" });

const DT_LANGUAGE = {
  search: "",
  searchPlaceholder: "Rechercher...",
  lengthMenu: "Afficher _MENU_ produits",
  info: "Affichage de _START_ à _END_ sur _TOTAL_ produits",
  infoEmpty: "Aucun produit",
  infoFiltered: "(filtré depuis _MAX_ produits)",
  zeroRecords: "Aucun produit ne correspond à la recherche",
  emptyTable: "Aucun produit.",
  paginate: { previous: "Précédent", next: "Suivant" },
};

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

const { data: categories } = await useFetch("/api/categories");
const { data: products, refresh } = await useFetch("/api/products", { query: { includeInactive: "true" } });
const { data: company } = await useFetch("/api/company");
const toast = useToast();
const { confirmDanger } = useConfirm();

const showForm = ref(false);
const editing = ref<any>(null);
const saving = ref(false);
const errorMessage = ref("");

const imageFile = ref<File | null>(null);
const imagePreviewUrl = ref<string | null>(null);

const form = reactive({
  label: "",
  categoryId: null as number | null,
  type: "Produit",
  stockable: true,
  quantity: 0,
  alertThreshold: 5,
  purchasePrice: 0,
  salePrice: 0,
  barcode: "",
  reference: "",
});

function resetImageState() {
  if (imagePreviewUrl.value?.startsWith("blob:")) URL.revokeObjectURL(imagePreviewUrl.value);
  imageFile.value = null;
  imagePreviewUrl.value = null;
}

function openCreate() {
  editing.value = null;
  Object.assign(form, {
    label: "",
    categoryId: null,
    type: "Produit",
    stockable: true,
    quantity: 0,
    alertThreshold: 5,
    purchasePrice: 0,
    salePrice: 0,
    barcode: "",
    reference: "",
  });
  resetImageState();
  showForm.value = true;
}

function openEdit(product: any) {
  editing.value = product;
  Object.assign(form, {
    label: product.label,
    categoryId: product.categoryId,
    type: product.type,
    stockable: product.stockable,
    quantity: product.quantity,
    alertThreshold: product.alertThreshold,
    purchasePrice: Number(product.purchasePrice),
    salePrice: Number(product.salePrice),
    barcode: product.barcode ?? "",
    reference: product.reference ?? "",
  });
  resetImageState();
  imagePreviewUrl.value = product.image ?? null;
  showForm.value = true;
}

function closeForm() {
  showForm.value = false;
}

function onFileChange(e: Event) {
  const input = e.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
    toast.error("Format d'image non supporté (jpg, png ou webp uniquement).");
    input.value = "";
    return;
  }
  if (file.size > 2 * 1024 * 1024) {
    toast.error("Image trop volumineuse (2 Mo max).");
    input.value = "";
    return;
  }

  if (imagePreviewUrl.value?.startsWith("blob:")) URL.revokeObjectURL(imagePreviewUrl.value);
  imageFile.value = file;
  imagePreviewUrl.value = URL.createObjectURL(file);
}

async function save() {
  saving.value = true;
  errorMessage.value = "";

  let uploadedImageUrl: string | undefined;
  if (imageFile.value) {
    try {
      const body = new FormData();
      body.append("file", imageFile.value);
      const res = await $fetch<{ url: string }>("/api/uploads/product-image", { method: "POST", body });
      uploadedImageUrl = res.url;
    } catch (e: any) {
      errorMessage.value = e?.data?.statusMessage || "Erreur lors de l'envoi de l'image";
      toast.error(errorMessage.value);
      saving.value = false;
      return;
    }
  }

  try {
    if (editing.value) {
      const { quantity, ...data } = form;
      await $fetch(`/api/products/${editing.value.id}`, {
        method: "PATCH",
        body: uploadedImageUrl ? { ...data, image: uploadedImageUrl } : data,
      });
    } else {
      await $fetch("/api/products", {
        method: "POST",
        body: uploadedImageUrl ? { ...form, image: uploadedImageUrl } : form,
      });
    }
    showForm.value = false;
    toast.success(editing.value ? "Produit modifié." : "Produit créé.");
    await refresh();
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}

async function toggleActive(product: any) {
  if (product.active) {
    const ok = await confirmDanger({
      title: `Désactiver "${product.label}" ?`,
      text: "Le produit ne sera plus disponible à la vente.",
      confirmText: "Désactiver",
    });
    if (!ok) return;
  }
  await $fetch(`/api/products/${product.id}`, {
    method: product.active ? "DELETE" : "PATCH",
    body: product.active ? undefined : { active: true },
  });
  toast.success(product.active ? "Produit désactivé." : "Produit réactivé.");
  await refresh();
}

const columns = [
  {
    data: "label",
    render: (label: string, type: string, row: any) => {
      if (type !== "display") return label;
      const src = escapeHtml(row.image || productAvatar(row.label));
      return `<div class="flex items-center gap-2.5"><img src="${src}" alt="" class="size-9 shrink-0 rounded-lg object-cover" />${escapeHtml(label)}</div>`;
    },
  },
  {
    data: "category.name",
    defaultContent: "—",
    className: "max-md:hidden",
    render: (name: string, type: string) => (type === "display" ? escapeHtml(name ?? "—") : name ?? ""),
  },
  {
    data: "quantity",
    render: (quantity: number, type: string, row: any) => {
      if (!row.stockable) return type === "display" ? '<span class="text-body">N/A</span>' : -1;
      if (type !== "display") return quantity;
      const cls = quantity <= row.alertThreshold ? "text-danger font-semibold" : "";
      return `<span class="${cls}">${quantity}</span>`;
    },
  },
  {
    data: "salePrice",
    className: "max-sm:hidden",
    render: (price: any, type: string) => {
      if (type !== "display") return Number(price);
      return escapeHtml(`${formatAmount(price)} ${company.value?.currency ?? ""}`);
    },
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
    <CommonNav title="Produits" name="Produits" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-border py-4 px-5">
          <h4 class="text-base">Produits</h4>
          <button type="button" class="btn bg-primary text-white btn-sm" @click="openCreate">
            + Ajouter
          </button>
        </div>
        <div class="p-5">
          <div class="overflow-x-auto">
            <AppDataTable
              id="productsTable"
              :data="products ?? []"
              :columns="columns"
              :options="tableOptions"
            >
              <thead>
                <tr>
                  <th class="!border-border !font-medium">Produit</th>
                  <th class="!border-border !font-medium max-md:hidden">Catégorie</th>
                  <th class="!border-border !font-medium">Stock</th>
                  <th class="!border-border !font-medium max-sm:hidden">Prix vente</th>
                  <th class="!border-border !font-medium">Statut</th>
                  <th class="!border-border !font-medium text-end">Actions</th>
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
            <h4 class="mb-4 text-base">{{ editing ? "Modifier" : "Nouveau" }} produit</h4>
            <p v-if="errorMessage" class="mb-3 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
              {{ errorMessage }}
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-2 flex items-center gap-4">
                <img
                  :src="imagePreviewUrl || productAvatar(form.label || '?')"
                  alt=""
                  class="size-20 shrink-0 rounded-xl border border-border object-cover"
                />
                <div>
                  <label class="mb-1 block">Photo du produit</label>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    class="block text-2sm"
                    @change="onFileChange"
                  />
                  <p class="mt-1 text-2xs text-body">JPG, PNG ou WEBP, 2 Mo max.</p>
                </div>
              </div>
              <div class="col-span-2">
                <label class="mb-1">Libellé</label>
                <input v-model="form.label" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
              </div>
              <div>
                <label class="mb-1">Catégorie</label>
                <select v-model="form.categoryId" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
                  <option :value="null">Aucune</option>
                  <option v-for="c in categories" :key="c.id" :value="c.id">{{ c.name }}</option>
                </select>
              </div>
              <div>
                <label class="mb-1">Type</label>
                <input v-model="form.type" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
              </div>
              <div class="col-span-2 flex items-center gap-2">
                <input id="stockable" v-model="form.stockable" type="checkbox" class="form-check-input" />
                <label for="stockable">Produit stockable</label>
              </div>
              <div v-if="!editing && form.stockable">
                <label class="mb-1">Quantité initiale</label>
                <input v-model.number="form.quantity" type="number" min="0" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
              </div>
              <div>
                <label class="mb-1">Prix d'achat</label>
                <input v-model.number="form.purchasePrice" type="number" min="0" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
              </div>
              <div>
                <label class="mb-1">Prix de vente</label>
                <input v-model.number="form.salePrice" type="number" min="0" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
              </div>
              <div>
                <label class="mb-1">Seuil d'alerte</label>
                <input v-model.number="form.alertThreshold" type="number" min="0" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
              </div>
              <div>
                <label class="mb-1">Code-barres</label>
                <input v-model="form.barcode" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
              </div>
              <div>
                <label class="mb-1">Référence</label>
                <input v-model="form.reference" type="text" class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
              </div>
            </div>
            <div class="mt-5 flex gap-2">
              <button type="button" class="btn flex-1 border border-border" @click="closeForm">Annuler</button>
              <button type="button" class="btn flex-1 bg-primary text-white" :disabled="saving || !form.label" @click="save">
                {{ saving ? "Enregistrement..." : "Enregistrer" }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
  </div>
</template>
