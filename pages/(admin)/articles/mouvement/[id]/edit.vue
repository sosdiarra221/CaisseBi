<script lang="ts" setup>
definePageMeta({ layout: "home" });

const route = useRoute();
const router = useRouter();
const toast = useToast();

const { data: articles } = await useFetch("/api/articles");
const { data: movement, pending, error } = await useFetch(`/api/articles/movements/${route.params.id}`);

const saving = ref(false);
const errorMessage = ref("");

const initialLines = computed(() =>
  (movement.value?.lines ?? []).map((l: any) => ({ article: l.article, quantity: Number(l.quantity) }))
);

async function onSubmit(payload: { type: "IN" | "OUT"; observation: string; lines: { articleId: number; quantity: number }[] }) {
  saving.value = true;
  errorMessage.value = "";
  try {
    await $fetch(`/api/articles/movements/${route.params.id}`, {
      method: "PATCH",
      body: {
        type: payload.type,
        observation: payload.observation || undefined,
        lines: payload.lines,
      },
    });
    toast.success("Mouvement modifié.");
    await router.push(`/articles/mouvement/${route.params.id}`);
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Articles" name="Modifier le mouvement" />
    <div class="container">
      <div v-if="pending" class="py-10 text-center text-body">Chargement...</div>
      <div v-else-if="error || !movement" class="py-10 text-center text-danger">Mouvement introuvable.</div>

      <div v-else class="card !h-auto mx-auto max-w-2xl">
        <div class="border-b border-border py-4 px-5">
          <h4 class="text-base">Modifier le mouvement #{{ String(movement.number).padStart(6, "0") }}</h4>
        </div>
        <div class="p-5">
          <ArticlesMovementForm
            :articles="articles ?? []"
            :initial-type="(movement.type as 'IN' | 'OUT')"
            :initial-observation="movement.observation ?? ''"
            :initial-lines="initialLines"
            :saving="saving"
            :error-message="errorMessage"
            submit-label="Enregistrer"
            saving-label="Enregistrement..."
            @submit="onSubmit"
            @cancel="router.push(`/articles/mouvement/${route.params.id}`)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
