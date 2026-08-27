<script lang="ts" setup>
definePageMeta({ layout: "home" });

const { data: articles } = await useFetch("/api/articles");
const toast = useToast();
const router = useRouter();

const saving = ref(false);
const errorMessage = ref("");

async function onSubmit(payload: { type: "IN" | "OUT"; observation: string; lines: { articleId: number; quantity: number }[] }) {
  saving.value = true;
  errorMessage.value = "";
  try {
    const movement = await $fetch("/api/articles/movements", {
      method: "POST",
      body: {
        type: payload.type,
        observation: payload.observation || undefined,
        lines: payload.lines,
      },
    });
    toast.success("Mouvement enregistré.");
    await router.push(`/articles/mouvement/${movement.id}`);
  } catch (e: any) {
    errorMessage.value = e?.data?.statusMessage || "Erreur";
  } finally {
    saving.value = false;
  }
}
</script>

<template>
  <div class="content-body">
    <CommonNav title="Articles" name="Nouveau mouvement" />
    <div class="container">
      <div class="card !h-auto mx-auto max-w-2xl">
        <div class="border-b border-border py-4 px-5">
          <h4 class="text-base">Nouveau mouvement d'articles</h4>
        </div>
        <div class="p-5">
          <ArticlesMovementForm
            :articles="articles ?? []"
            :saving="saving"
            :error-message="errorMessage"
            submit-label="Valider"
            saving-label="Enregistrement..."
            @submit="onSubmit"
            @cancel="router.push('/articles/mouvement')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
