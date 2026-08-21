<script lang="ts" setup>
import { categoryIcon } from "~/lib/productIcons";

defineProps<{
  categories: { id: number; name: string }[];
  activeId: number | null;
}>();
const emit = defineEmits<{ select: [id: number | null] }>();

const NAVY = "#182B6B";
const GOLD = "#F5A524";
</script>

<template>
  <div class="relative border-b border-border bg-card">
    <div class="flex items-center gap-2.5 overflow-x-auto px-4 py-3.5">
      <button
        type="button"
        class="flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-bold duration-200"
        :class="activeId === null ? 'shadow-md' : 'border-border text-body hover:border-primary'"
        :style="activeId === null ? { background: NAVY, borderColor: NAVY, color: '#fff' } : {}"
        @click="emit('select', null)"
      >
        <span class="text-base leading-none">🏷️</span>
        Tout
      </button>
      <button
        v-for="cat in categories"
        :key="cat.id"
        type="button"
        class="flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-bold duration-200"
        :class="activeId === cat.id ? 'shadow-md' : 'border-border text-body hover:border-primary'"
        :style="
          activeId === cat.id
            ? { background: GOLD, borderColor: GOLD, color: NAVY }
            : {}
        "
        @click="emit('select', cat.id)"
      >
        <span class="text-base leading-none">{{ categoryIcon(cat.name) }}</span>
        {{ cat.name }}
      </button>
    </div>
    <!-- Fade hint on the right edge so a scrollable row reads as scrollable -->
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-8"
      style="background: linear-gradient(to right, transparent, var(--card, #fff))"
    ></div>
  </div>
</template>
