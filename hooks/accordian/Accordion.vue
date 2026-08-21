<script lang="ts" setup>
const open = ref(false);
function outsideHandler(e: Event) {
  const target = e.target as HTMLElement;
  if (!target.closest("#accordion-custome")) {
    // togglemenu.value = false
  }
}
onMounted(() => {
  document.addEventListener("click", outsideHandler);
});
onUnmounted(() => {
  document.removeEventListener("click", outsideHandler);
});
</script>

<template>
  <div id="accordion-custome" :class="`${open ? 'open' : ''} z-10 transition-all hidden opacity-0 invisible scale-90 [&.open]:block [&.open]:opacity-100 [&.open]:visible [&.open]:scale-100`">
    <slot />
  </div>
</template>
