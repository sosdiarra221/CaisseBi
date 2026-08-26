<script lang="ts" setup>
definePageMeta({ layout: "home" });

const { data: stores, refresh } = await useFetch("/api/stores");
const toast = useToast();
const { confirmAction } = useConfirm();

const showForm = ref(false);
const editing = ref<any>(null);
const saving = ref(false);
const errorMessage = ref("");

const form = reactive({ name: "", address: "", phone: "" });

function openCreate() {
  editing.value = null;
  Object.assign(form, { name: "", address: "", phone: "" });
  showForm.value = true;
}

function openEdit(store: any) {
  editing.value = store;
  Object.assign(form, { name: store.name, address: store.address ?? "", phone: store.phone ?? "" });
  showForm.value = true;
}

async function save() {
  saving.value = true;
  errorMessage.value = "";
  try {
    const body = { name: form.name, address: form.address || null, phone: form.phone || null };
    if (editing.value) {
      await $fetch(`/api/stores/${editing.value.id}`, { method: "PATCH", body });
    } else {
      await $fetch("/api/stores", { method: "POST", body });
    }
    showForm.value = false;
    toast.success(editing.value ? "Magasin modifié." : "Magasin créé.");
    await refresh();
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}

async function toggleActive(store: any) {
  if (store.active) {
    const ok = await confirmAction({
      title: `Désactiver "${store.name}" ?`,
      text: "Les comptes rattachés à ce magasin ne pourront plus s'y connecter.",
      confirmText: "Désactiver",
    });
    if (!ok) return;
  }
  await $fetch(`/api/stores/${store.id}`, { method: "PATCH", body: { active: !store.active } });
  toast.success(store.active ? "Magasin désactivé." : "Magasin réactivé.");
  await refresh();
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Magasins" name="Magasins" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex items-center justify-between border-b border-border py-4 px-5">
          <h4 class="text-base">Magasins</h4>
          <button type="button" class="btn bg-primary text-white btn-sm" @click="openCreate">+ Ajouter</button>
        </div>
        <div class="p-5">
          <div v-if="!stores?.length" class="py-10 text-center text-body">Aucun magasin.</div>
          <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div
              v-for="s in stores"
              :key="s.id"
              class="rounded-xl border border-border p-4"
              :class="!s.active ? 'opacity-60' : ''"
            >
              <div class="mb-2 flex items-start justify-between gap-2">
                <div>
                  <p class="font-semibold" style="color: #182b6b">{{ s.name }}</p>
                  <p v-if="s.address" class="text-2sm text-body">{{ s.address }}</p>
                  <p v-if="s.phone" class="text-2sm text-body">{{ s.phone }}</p>
                </div>
                <span
                  class="shrink-0 rounded-full px-2.5 py-1 text-2xs font-semibold"
                  :class="s.active ? 'bg-successlight text-success' : 'bg-dangerlight text-danger'"
                >
                  {{ s.active ? "Actif" : "Désactivé" }}
                </span>
              </div>
              <div class="mt-3 flex justify-end gap-1.5">
                <button type="button" class="row-action-btn text-primary bg-primarylight hover:bg-primary hover:text-white" title="Modifier" @click="openEdit(s)">
                  <i class="fa fa-pen"></i>
                </button>
                <button
                  type="button"
                  class="row-action-btn text-danger bg-dangerlight hover:bg-danger hover:text-white"
                  :title="s.active ? 'Désactiver' : 'Réactiver'"
                  @click="toggleActive(s)"
                >
                  <i class="fa" :class="s.active ? 'fa-ban' : 'fa-rotate-left'"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showForm" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div class="w-full max-w-md rounded-xl bg-card p-6">
        <h4 class="mb-4 text-base">{{ editing ? "Modifier" : "Nouveau" }} magasin</h4>
        <p v-if="errorMessage" class="mb-3 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">{{ errorMessage }}</p>

        <label class="mb-1">Nom</label>
        <input v-model="form.name" type="text" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

        <label class="mb-1">Adresse</label>
        <input v-model="form.address" type="text" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

        <label class="mb-1">Téléphone</label>
        <input v-model="form.phone" type="text" class="mb-5 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

        <div class="flex gap-2">
          <button type="button" class="btn flex-1 border border-border" @click="showForm = false">Annuler</button>
          <button type="button" class="btn flex-1 bg-primary text-white" :disabled="saving || !form.name" @click="save">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
