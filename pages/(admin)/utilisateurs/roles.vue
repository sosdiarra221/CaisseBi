<script lang="ts" setup>
definePageMeta({ layout: "home" });

// Server-side already 403s (requireRole(["OWNER"]) on /api/role-permissions),
// but a raw error page is a bad UX for someone who just isn't OWNER — bounce
// them home the same way middleware/auth.global.ts does for CASHIER routes.
const { user } = useUserSession();
if (user.value?.role !== "OWNER") {
  await navigateTo("/");
}

const toast = useToast();

const MODULES: { key: string; label: string }[] = [
  { key: "produits", label: "Produits" },
  { key: "stock", label: "Stock" },
  { key: "ventes", label: "Ventes" },
  { key: "rapports", label: "Rapports" },
  { key: "depenses", label: "Dépenses" },
];

const ROLES: { key: "MANAGER" | "GERANT" | "CASHIER"; label: string }[] = [
  { key: "MANAGER", label: "Manager" },
  { key: "GERANT", label: "Gérant" },
  { key: "CASHIER", label: "Caissier" },
];

const { data: permissions, refresh } = await useFetch<Record<string, string[]>>("/api/role-permissions");

const pending = reactive<Record<string, boolean>>({});

function isGranted(role: string, moduleKey: string): boolean {
  return permissions.value?.[role]?.includes(moduleKey) ?? false;
}

async function toggle(role: "MANAGER" | "GERANT" | "CASHIER", moduleKey: string) {
  const cellKey = `${role}:${moduleKey}`;
  const granted = !isGranted(role, moduleKey);
  pending[cellKey] = true;
  try {
    await $fetch("/api/role-permissions", {
      method: "PATCH",
      body: { role, module: moduleKey, granted },
    });
    await refresh();
    const roleLabel = ROLES.find((r) => r.key === role)?.label ?? role;
    const moduleLabel = MODULES.find((m) => m.key === moduleKey)?.label ?? moduleKey;
    toast.success(
      granted
        ? `Accès "${moduleLabel}" accordé à ${roleLabel}.`
        : `Accès "${moduleLabel}" retiré à ${roleLabel}.`
    );
  } catch (e: any) {
    toast.error(e?.data?.statusMessage || "Erreur lors de la mise à jour.");
  } finally {
    pending[cellKey] = false;
  }
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Rôles & Permissions" name="Rôles & Permissions" />
    <div class="container">
      <div class="card !h-auto">
        <div class="flex items-center justify-between border-b border-border py-4 px-5">
          <h4 class="text-base">Accès par module</h4>
          <NuxtLink to="/utilisateurs" class="text-primary text-sm">← Retour aux utilisateurs</NuxtLink>
        </div>
        <div class="p-5">
          <p class="mb-4 text-sm text-body">
            Le Propriétaire a toujours accès à tout. Cochez les modules auxquels un Manager, un Gérant ou un
            Caissier peut accéder — le changement est appliqué immédiatement.
          </p>
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="border-b border-border">
                  <th class="pb-3 font-medium">Module</th>
                  <th v-for="role in ROLES" :key="role.key" class="pb-3 font-medium text-center">
                    {{ role.label }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="mod in MODULES" :key="mod.key" class="border-b border-border">
                  <td class="py-3">{{ mod.label }}</td>
                  <td v-for="role in ROLES" :key="role.key" class="py-3 text-center">
                    <input
                      type="checkbox"
                      class="size-4 cursor-pointer accent-primary disabled:cursor-not-allowed disabled:opacity-50"
                      :checked="isGranted(role.key, mod.key)"
                      :disabled="pending[`${role.key}:${mod.key}`]"
                      @change="toggle(role.key, mod.key)"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
