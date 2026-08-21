<script setup lang="ts">
const props = defineProps<{
  toggleMenu: boolean;
  open: boolean;
}>();

import { ref, onMounted } from "vue";
const isCollapsed = ref<boolean>(props.open);
const height = ref<number | null>(null);

watch(
  () => props.toggleMenu,
  () => {
    isCollapsed.value = !isCollapsed.value;
    height.value = document.querySelector(".collapes-dropdown")?.scrollHeight ?? 0;
  }
);

onMounted(() => {
  height.value = document.querySelector(".collapes-dropdown")?.scrollHeight ?? 0;
});
</script>

<template>
  <div class="collapes-dropdown overflow-hidden transition-all" :style="`height: ${isCollapsed ? `auto` : '0px'};`">
    <slot />
  </div>
</template>
