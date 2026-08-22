<script lang="ts" setup>
definePageMeta({ layout: "home" });

const { data: theoretical } = await useFetch("/api/stock/inventory");

const lines = reactive(
  (theoretical.value ?? []).map((l: any) => ({ ...l, real: l.theoretical }))
);

const toast = useToast();
const { confirmAction } = useConfirm();
const saving = ref(false);
const errorMessage = ref("");
const done = ref(false);

const gaps = computed(() => lines.map((l) => l.real - l.theoretical));

async function validate() {
  const ok = await confirmAction({
    title: "Valider l'inventaire ?",
    text: "Le stock sera ajusté selon les écarts constatés.",
    confirmText: "Valider",
  });
  if (!ok) return;

  saving.value = true;
  errorMessage.value = "";
  try {
    await $fetch("/api/stock/inventory", {
      method: "POST",
      body: { lines: lines.map((l) => ({ productId: l.productId, real: l.real })) },
    });
    done.value = true;
    toast.success("Inventaire validé et stock mis à jour.");
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Stock" name="Inventaire" />
    <div class="container">
      <div class="card !h-auto">
        <div class="border-b border-border py-4 px-5">
          <h4 class="text-base">Inventaire</h4>
        </div>
        <div class="p-5">
          <p v-if="done" class="mb-4 rounded-lg bg-successlight px-3 py-2 text-success text-sm">
            Inventaire validé et stock mis à jour.
          </p>
          <p v-if="errorMessage" class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
            {{ errorMessage }}
          </p>

          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="border-b border-border">
                  <th class="pb-3 font-medium">Produit</th>
                  <th class="pb-3 font-medium">Théorique</th>
                  <th class="pb-3 font-medium">Réel</th>
                  <th class="pb-3 font-medium">Écart</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(line, i) in lines" :key="line.productId" class="border-b border-border">
                  <td class="py-3">{{ line.label }}</td>
                  <td class="py-3">{{ line.theoretical }}</td>
                  <td class="py-3">
                    <input
                      v-model.number="line.real"
                      type="number"
                      min="0"
                      :disabled="done"
                      class="h-9 w-24 rounded-lg border border-border bg-transparent px-2 focus:border-primary"
                    />
                  </td>
                  <td class="py-3" :class="gaps[i] === 0 ? '' : gaps[i] > 0 ? 'text-success' : 'text-danger'">
                    {{ gaps[i] > 0 ? "+" : "" }}{{ gaps[i] }}
                  </td>
                </tr>
                <tr v-if="!lines.length">
                  <td colspan="4" class="py-6 text-center text-body">Aucun produit stockable.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            v-if="!done"
            type="button"
            class="btn mt-5 bg-primary text-white"
            :disabled="saving || !lines.length"
            @click="validate"
          >
            VALIDER L'INVENTAIRE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
