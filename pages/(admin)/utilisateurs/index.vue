<script lang="ts" setup>
definePageMeta({ layout: "home" });

const { user } = useUserSession();
const { data: users, refresh } = await useFetch("/api/users");
const toast = useToast();
const { confirmAction } = useConfirm();

const showForm = ref(false);
const editing = ref<any>(null);
const saving = ref(false);
const errorMessage = ref("");

const form = reactive({
  name: "",
  email: "",
  password: "",
  pinCode: "",
  role: "CASHIER" as "OWNER" | "MANAGER" | "GERANT" | "CASHIER",
});

// 4-digit PIN, but optional — leave blank to skip setting one (create) or to
// keep the current PIN unchanged (edit), mirroring the password field.
const pinCodeValid = computed(() => !form.pinCode || /^\d{4}$/.test(form.pinCode));

function openCreate() {
  editing.value = null;
  Object.assign(form, { name: "", email: "", password: "", pinCode: "", role: "CASHIER" });
  showForm.value = true;
}

function openEdit(u: any) {
  editing.value = u;
  Object.assign(form, { name: u.name, email: u.email, password: "", pinCode: "", role: u.role });
  showForm.value = true;
}

async function save() {
  if (!pinCodeValid.value) {
    errorMessage.value = "Le code PIN doit contenir exactement 4 chiffres.";
    return;
  }
  saving.value = true;
  errorMessage.value = "";
  try {
    if (editing.value) {
      const body: any = { name: form.name, role: form.role };
      if (form.password) body.password = form.password;
      if (form.pinCode) body.pinCode = form.pinCode;
      await $fetch(`/api/users/${editing.value.id}`, { method: "PATCH", body });
    } else {
      const body: any = { name: form.name, email: form.email, password: form.password, role: form.role };
      if (form.pinCode) body.pinCode = form.pinCode;
      await $fetch("/api/users", {
        method: "POST",
        body,
      });
    }
    showForm.value = false;
    toast.success(editing.value ? "Utilisateur modifié." : "Utilisateur créé.");
    await refresh();
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}

async function toggleActive(u: any) {
  if (u.active) {
    const ok = await confirmAction({
      title: `Désactiver "${u.name}" ?`,
      text: "Cet utilisateur ne pourra plus se connecter.",
      confirmText: "Désactiver",
    });
    if (!ok) return;
  }
  await $fetch(`/api/users/${u.id}`, { method: "PATCH", body: { active: !u.active } });
  toast.success(u.active ? "Utilisateur désactivé." : "Utilisateur réactivé.");
  await refresh();
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Utilisateurs" name="Utilisateurs" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex items-center justify-between border-b border-border py-4 px-5">
          <h4 class="text-base">Utilisateurs</h4>
          <div class="flex items-center gap-2">
            <NuxtLink v-if="user?.role === 'OWNER'" to="/utilisateurs/roles" class="btn border border-border btn-sm">
              Gérer les rôles et permissions
            </NuxtLink>
            <button type="button" class="btn bg-primary text-white btn-sm" @click="openCreate">+ Ajouter</button>
          </div>
        </div>
        <div class="p-5 overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-border">
                <th class="pb-3 font-medium">Nom</th>
                <th class="pb-3 font-medium">Email</th>
                <th class="pb-3 font-medium">Rôle</th>
                <th class="pb-3 font-medium">Statut</th>
                <th class="pb-3 font-medium text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="u in users" :key="u.id" class="border-b border-border">
                <td class="py-3">{{ u.name }}</td>
                <td class="py-3">{{ u.email }}</td>
                <td class="py-3">{{ u.role }}</td>
                <td class="py-3">
                  <span :class="u.active ? 'text-success' : 'text-danger'">{{ u.active ? "Actif" : "Désactivé" }}</span>
                </td>
                <td class="py-3 text-end">
                  <button type="button" class="text-primary mr-3" @click="openEdit(u)">Modifier</button>
                  <button type="button" class="text-danger" @click="toggleActive(u)">
                    {{ u.active ? "Désactiver" : "Réactiver" }}
                  </button>
                </td>
              </tr>
              <tr v-if="!users?.length">
                <td colspan="5" class="py-6 text-center text-body">Aucun utilisateur.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="showForm" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div class="w-full max-w-md rounded-xl bg-card p-6">
        <h4 class="mb-4 text-base">{{ editing ? "Modifier" : "Nouvel" }} utilisateur</h4>
        <p v-if="errorMessage" class="mb-3 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">{{ errorMessage }}</p>

        <label class="mb-1">Nom</label>
        <input v-model="form.name" type="text" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

        <label class="mb-1">Email</label>
        <input v-model="form.email" type="email" :disabled="!!editing" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary disabled:opacity-60" />

        <label class="mb-1">{{ editing ? "Nouveau mot de passe (optionnel)" : "Mot de passe" }}</label>
        <input v-model="form.password" type="password" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

        <label class="mb-1">{{ editing ? "Code PIN (4 chiffres, optionnel)" : "Code PIN (4 chiffres, optionnel)" }}</label>
        <input
          v-model="form.pinCode"
          type="text"
          inputmode="numeric"
          maxlength="4"
          pattern="\d{4}"
          placeholder="1234"
          class="mb-1 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
          @input="form.pinCode = form.pinCode.replace(/\D/g, '').slice(0, 4)"
        />
        <p v-if="form.pinCode && !pinCodeValid" class="mb-3 text-2xs text-danger">Le code PIN doit contenir exactement 4 chiffres.</p>
        <p v-else class="mb-3 text-2xs text-body">Utilisé pour le déverrouillage rapide de session (écran de verrouillage).</p>

        <label class="mb-1">Rôle</label>
        <select v-model="form.role" class="mb-5 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
          <option value="OWNER">Propriétaire</option>
          <option value="MANAGER">Manager</option>
          <option value="GERANT">Gérant</option>
          <option value="CASHIER">Caissier</option>
        </select>

        <div class="flex gap-2">
          <button type="button" class="btn flex-1 border border-border" @click="showForm = false">Annuler</button>
          <button type="button" class="btn flex-1 bg-primary text-white" :disabled="saving || !form.name || !pinCodeValid || (!editing && (!form.email || !form.password))" @click="save">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
