<script lang="ts" setup>
definePageMeta({ layout: "home" });

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
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-border">
                <th class="pb-3 font-medium">Nom</th>
                <th class="pb-3 font-medium">Catégorie parente</th>
                <th class="pb-3 font-medium">Produits</th>
                <th class="pb-3 font-medium text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cat in categories" :key="cat.id" class="border-b border-border">
                <td class="py-3">{{ cat.name }}</td>
                <td class="py-3">
                  {{ categories?.find((c) => c.id === cat.parentId)?.name ?? "—" }}
                </td>
                <td class="py-3">{{ cat._count?.products ?? 0 }}</td>
                <td class="py-3 text-end">
                  <button type="button" class="text-primary mr-3" @click="openEdit(cat)">
                    Modifier
                  </button>
                  <button type="button" class="text-danger" @click="remove(cat)">Supprimer</button>
                </td>
              </tr>
              <tr v-if="!categories?.length">
                <td colspan="4" class="py-6 text-center text-body">Aucune catégorie.</td>
              </tr>
            </tbody>
          </table>
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
