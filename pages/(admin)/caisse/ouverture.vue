<script lang="ts" setup>
definePageMeta({ layout: "home" });

const { user } = useUserSession();
const { data: registers } = await useFetch("/api/cash-registers");
const { data: current } = await useFetch("/api/cash-sessions/current");

const cashRegisterId = ref<number | null>(registers.value?.[0]?.id ?? null);
const startingFloat = ref<number>(0);
const saving = ref(false);
const errorMessage = ref("");

async function open() {
  if (!cashRegisterId.value) return;
  saving.value = true;
  errorMessage.value = "";
  try {
    await $fetch("/api/cash-sessions/open", {
      method: "POST",
      body: { cashRegisterId: cashRegisterId.value, startingFloat: startingFloat.value },
    });
    await navigateTo("/pos");
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Caisse" name="Ouverture de caisse" />
    <div class="container">
      <div v-if="current" class="card !h-auto max-w-md p-5">
        <p>Une caisse est déjà ouverte : <strong>{{ current.cashRegister?.name }}</strong>.</p>
        <NuxtLink to="/pos" class="btn bg-primary text-white mt-4 inline-block">Aller au POS</NuxtLink>
      </div>
      <div v-else class="card !h-auto max-w-md">
        <div class="p-5">
          <p class="mb-4">Caissier : <strong>{{ user?.name }}</strong></p>
          <p v-if="errorMessage" class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
            {{ errorMessage }}
          </p>

          <label class="mb-1">Caisse</label>
          <select v-model="cashRegisterId" class="mb-4 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary">
            <option v-for="r in registers" :key="r.id" :value="r.id">{{ r.name }}</option>
          </select>

          <label class="mb-1">Fond de démarrage</label>
          <input v-model.number="startingFloat" type="number" min="0" class="mb-5 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary" />

          <button type="button" class="btn w-full bg-primary text-white" :disabled="saving || !cashRegisterId" @click="open">
            OUVRIR LA CAISSE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
