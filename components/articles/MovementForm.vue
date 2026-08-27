<script lang="ts" setup>
import Multiselect from "vue-multiselect";

type FormLine = { article: any; quantity: number };

const props = defineProps<{
  articles: any[];
  initialType?: "IN" | "OUT";
  initialObservation?: string;
  initialLines?: { article: any; quantity: number }[];
  saving: boolean;
  errorMessage: string;
  submitLabel: string;
  savingLabel: string;
}>();
const emit = defineEmits<{
  submit: [payload: { type: "IN" | "OUT"; observation: string; lines: { articleId: number; quantity: number }[] }];
  cancel: [];
}>();

const type = ref<"IN" | "OUT">(props.initialType ?? "IN");
const observation = ref(props.initialObservation ?? "");
const lines = ref<FormLine[]>(
  props.initialLines?.length ? props.initialLines.map((l) => ({ ...l })) : [{ article: null, quantity: 1 }]
);

function addLine() {
  lines.value.push({ article: null, quantity: 1 });
}
function removeLine(i: number) {
  lines.value.splice(i, 1);
}

const validLines = computed(() => lines.value.filter((l) => l.article && l.quantity > 0));

function submit() {
  if (!validLines.value.length) return;
  emit("submit", {
    type: type.value,
    observation: observation.value,
    lines: validLines.value.map((l) => ({ articleId: l.article.id, quantity: l.quantity })),
  });
}
</script>

<template>
  <div>
    <p v-if="errorMessage" class="mb-4 rounded-lg bg-dangerlight px-3 py-2 text-danger text-sm">
      {{ errorMessage }}
    </p>

    <label class="mb-1">Type</label>
    <div class="mb-4 flex gap-4">
      <label class="flex items-center gap-2"><input v-model="type" type="radio" value="IN" /> Entrée</label>
      <label class="flex items-center gap-2"><input v-model="type" type="radio" value="OUT" /> Sortie</label>
    </div>

    <label class="mb-2 block">Articles</label>
    <div class="mb-3 space-y-3">
      <div
        v-for="(line, i) in lines"
        :key="i"
        class="flex flex-wrap items-end gap-2 rounded-lg border border-border p-3"
      >
        <div class="min-w-[220px] flex-1">
          <label class="mb-1 block text-2xs text-body">Article</label>
          <Multiselect
            v-model="line.article"
            :options="articles ?? []"
            label="designation"
            track-by="id"
            placeholder="Rechercher un article..."
            select-label=""
            deselect-label=""
            selected-label=""
            :show-labels="false"
          />
        </div>
        <div class="w-28 shrink-0">
          <label class="mb-1 block text-2xs text-body">Quantité</label>
          <input
            v-model.number="line.quantity"
            type="number"
            min="0.001"
            step="0.001"
            class="h-11 w-full rounded-lg border border-border bg-transparent px-3 focus:border-primary"
          />
        </div>
        <span v-if="line.article?.unit" class="pb-2.5 text-2sm text-body">{{ line.article.unit }}</span>
        <button
          type="button"
          class="row-action-btn shrink-0 text-danger bg-dangerlight hover:bg-danger hover:text-white"
          title="Retirer cette ligne"
          :disabled="lines.length <= 1"
          @click="removeLine(i)"
        >
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </div>
    <button type="button" class="mb-4 text-2sm font-semibold text-primary" @click="addLine">
      <i class="fa fa-plus mr-1.5"></i>Ajouter une ligne
    </button>

    <label class="mb-1">Observation (optionnel)</label>
    <textarea
      v-model="observation"
      rows="2"
      class="mb-5 w-full rounded-lg border border-border bg-transparent px-3 py-2 focus:border-primary"
    />

    <div class="flex gap-2">
      <button type="button" class="btn flex-1 border border-border" @click="emit('cancel')">Annuler</button>
      <button
        type="button"
        class="btn flex-1 bg-primary text-white"
        :disabled="saving || !validLines.length"
        @click="submit"
      >
        {{ saving ? savingLabel : submitLabel }}
      </button>
    </div>
  </div>
</template>
