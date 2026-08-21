<script lang="ts" setup>
const emit = defineEmits<{
  (event: "update:open", value: boolean): void;
}>();

function outsideHandler(e: Event) {
  const target = e.target as HTMLElement;

  if (!target.closest("#dropdown-custome")) {
    emit("update:open", false);
  }
}

function toggleAccordian() {
  let value = emit("update:open", true);
}
onMounted(() => {
  document.addEventListener("click", outsideHandler);
});
onUnmounted(() => {
  document.removeEventListener("click", outsideHandler);
});
</script>

<template>
  <div id="dropdown-custome" @click="toggleAccordian">
    <slot />
  </div>
</template>
