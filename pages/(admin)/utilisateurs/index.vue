<script lang="ts" setup>

definePageMeta({ layout: "home" });

const DT_LANGUAGE = {
  search: "",
  searchPlaceholder: "Rechercher...",
  lengthMenu: "Afficher _MENU_ utilisateurs",
  info: "Affichage de _START_ à _END_ sur _TOTAL_ utilisateurs",
  infoEmpty: "Aucun utilisateur",
  infoFiltered: "(filtré depuis _MAX_ utilisateurs)",
  zeroRecords: "Aucun utilisateur ne correspond à la recherche",
  emptyTable: "Aucun utilisateur.",
  paginate: { previous: "Précédent", next: "Suivant" },
};

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string
  );
}

const { user } = useUserSession();
const { data: users, refresh } = await useFetch("/api/users");
// 403s for non-OWNER (store management is Direction-only) — the store
// picker below simply doesn't render for them, since they can't create or
// edit users anyway (server-enforced).
const { data: stores } = await useFetch("/api/stores");
const toast = useToast();
const { confirmAction } = useConfirm();

const showForm = ref(false);
const editing = ref<any>(null);
const saving = ref(false);
const errorMessage = ref("");

const form = reactive({
  name: "",
  email: "",
  username: "",
  password: "",
  pinCode: "",
  role: "CASHIER" as "OWNER" | "MANAGER" | "GERANT" | "CASHIER",
  storeId: null as number | null,
});

// 4-digit PIN — required on create (it's now the login credential, along
// with the identifiant), optional on edit (leave blank to keep the current
// PIN unchanged, mirroring the password field).
const pinCodeValid = computed(() => !form.pinCode || /^\d{4}$/.test(form.pinCode));

function openCreate() {
  editing.value = null;
  Object.assign(form, { name: "", email: "", username: "", password: "", pinCode: "", role: "CASHIER", storeId: null });
  showForm.value = true;
}

function openEdit(u: any) {
  editing.value = u;
  Object.assign(form, { name: u.name, email: u.email, username: u.username, password: "", pinCode: "", role: u.role, storeId: u.storeId });
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
      const body: any = { name: form.name, username: form.username, role: form.role };
      if (form.role !== "OWNER") body.storeId = form.storeId;
      if (form.password) body.password = form.password;
      if (form.pinCode) body.pinCode = form.pinCode;
      await $fetch(`/api/users/${editing.value.id}`, { method: "PATCH", body });
    } else {
      const body: any = {
        name: form.name,
        email: form.email,
        username: form.username,
        password: form.password,
        pinCode: form.pinCode,
        role: form.role,
        storeId: form.role === "OWNER" ? null : form.storeId,
      };
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

const ROLE_LABELS: Record<string, string> = {
  OWNER: "Direction",
  MANAGER: "Manager",
  GERANT: "Gérant",
  CASHIER: "Caissier",
};

const columns = [
  {
    data: "name",
    render: (name: string, type: string) => (type === "display" ? escapeHtml(name) : name),
  },
  {
    data: "username",
    className: "max-md:hidden",
    render: (username: string, type: string) => (type === "display" ? escapeHtml(username) : username),
  },
  {
    data: "email",
    className: "max-lg:hidden",
    render: (email: string, type: string) => (type === "display" ? escapeHtml(email) : email),
  },
  {
    data: "role",
    render: (role: string, type: string) => (type === "display" ? escapeHtml(ROLE_LABELS[role] ?? role) : role),
  },
  {
    data: "store.name",
    className: "max-lg:hidden",
    defaultContent: "—",
    render: (name: string, type: string) => (type === "display" ? escapeHtml(name ?? "Tous les magasins") : name ?? ""),
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
        <div class="p-5">
          <div class="overflow-x-auto">
            <AppDataTable
              id="usersTable"
              :data="users ?? []"
              :columns="columns"
              :options="tableOptions"
            >
              <thead>
                <tr>
                  <th class="!border-border !font-medium">Nom</th>
                  <th class="!border-border !font-medium max-md:hidden">Identifiant</th>
                  <th class="!border-border !font-medium max-lg:hidden">Email</th>
                  <th class="!border-border !font-medium">Rôle</th>
                  <th class="!border-border !font-medium max-lg:hidden">Magasin</th>
                  <th class="!border-border !font-medium">Statut</th>
                  <th class="!border-border !font-medium text-end">Actions</th>
                </tr>
              </thead>
            </AppDataTable>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showForm" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div class="w-full max-w-md rounded-xl bg-card p-6">
        <h4 class="mb-4 text-base">{{ editing ? "Modifier" : "Nouvel" }} utilisateur</h4>
        <p v-if="errorMessage" class="mb-3 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">{{ errorMessage }}</p>

        <label class="mb-1">Nom</label>
        <input v-model="form.name" type="text" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

        <label class="mb-1">Identifiant</label>
        <input v-model="form.username" type="text" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />
        <p class="-mt-2 mb-3 text-2xs text-body">Utilisé avec le code PIN pour se connecter (page de connexion).</p>

        <label class="mb-1">Email</label>
        <input v-model="form.email" type="email" :disabled="!!editing" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary disabled:opacity-60" />

        <label class="mb-1">{{ editing ? "Nouveau mot de passe (optionnel)" : "Mot de passe" }}</label>
        <input v-model="form.password" type="password" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

        <label class="mb-1">{{ editing ? "Code PIN (4 chiffres, optionnel)" : "Code PIN (4 chiffres)" }}</label>
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
        <p v-else class="mb-3 text-2xs text-body">Utilisé avec l'identifiant pour se connecter, et pour le déverrouillage rapide de session.</p>

        <label class="mb-1">Rôle</label>
        <select v-model="form.role" class="mb-3 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
          <option value="OWNER">Direction</option>
          <option value="MANAGER">Manager</option>
          <option value="GERANT">Gérant</option>
          <option value="CASHIER">Caissier</option>
        </select>

        <template v-if="form.role !== 'OWNER'">
          <label class="mb-1">Magasin</label>
          <select v-model="form.storeId" class="mb-5 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
            <option :value="null" disabled>Sélectionner...</option>
            <option v-for="s in stores" :key="s.id" :value="s.id">{{ s.name }}</option>
          </select>
        </template>
        <p v-else class="mb-5 text-2xs text-body">La Direction voit tous les magasins et peut basculer entre eux.</p>

        <div class="flex gap-2">
          <button type="button" class="btn flex-1 border border-border" @click="showForm = false">Annuler</button>
          <button
            type="button"
            class="btn flex-1 bg-primary text-white"
            :disabled="
              saving ||
              !form.name ||
              !form.username ||
              !pinCodeValid ||
              (form.role !== 'OWNER' && !form.storeId) ||
              (!editing && (!form.email || !form.password || !form.pinCode))
            "
            @click="save"
          >
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
