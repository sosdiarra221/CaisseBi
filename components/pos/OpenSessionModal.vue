<script lang="ts" setup>
const props = defineProps<{ registers: { id: number; name: string }[] }>();
const emit = defineEmits<{ opened: [session: any] }>();

const { user } = useUserSession();
const toast = useToast();

const cashRegisterId = ref<number | null>(props.registers[0]?.id ?? null);
const startingFloat = ref<number>(0);
const saving = ref(false);
const errorMessage = ref("");

async function open() {
  if (!cashRegisterId.value) return;
  saving.value = true;
  errorMessage.value = "";
  try {
    const session = await $fetch("/api/cash-sessions/open", {
      method: "POST",
      body: { cashRegisterId: cashRegisterId.value, startingFloat: startingFloat.value },
    });
    toast.success("Caisse ouverte.");
    emit("opened", session);
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur lors de l'ouverture";
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
    <div class="w-full max-w-sm overflow-hidden rounded-2xl bg-card">
      <div class="flex items-center gap-3 bg-primary px-6 py-4 text-white">
        <span class="flex size-10 items-center justify-center rounded-xl bg-white/15 text-lg">
          <i class="fa fa-cash-register"></i>
        </span>
        <div>
          <p class="font-bold leading-tight">Ouverture de caisse</p>
          <p class="text-2xs text-white/80">Requise avant toute vente</p>
        </div>
      </div>

      <div class="p-6">
        <p class="mb-4 text-2sm text-body">
          Caissier : <strong class="text-body">{{ user?.name }}</strong>
        </p>

        <p v-if="errorMessage" class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
          {{ errorMessage }}
        </p>

        <label class="mb-1 block">Caisse</label>
        <select
          v-model="cashRegisterId"
          class="mb-4 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
        >
          <option v-for="r in registers" :key="r.id" :value="r.id">{{ r.name }}</option>
        </select>

        <label class="mb-1 block">Fond de démarrage</label>
        <input
          v-model.number="startingFloat"
          type="number"
          min="0"
          class="mb-6 h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
        />

        <button
          type="button"
          class="btn w-full bg-primary text-white hover:bg-primaryhover disabled:opacity-50"
          :disabled="saving || !cashRegisterId"
          @click="open"
        >
          <i class="fa fa-check mr-1.5"></i>{{ saving ? "Ouverture..." : "Ouvrir la caisse" }}
        </button>
      </div>
    </div>
  </div>
</template>
