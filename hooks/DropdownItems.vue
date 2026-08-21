<script lang="ts" setup>
const prop = defineProps<{
  open: boolean;
}>();

function outsideHandler(e: Event) {
  const target = e.target as HTMLElement;
  if (!target.closest("#dropdown-custome")) {
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
  <div id="dropdown-custome" :class="`${open ? 'open' : ''} z-10 transition-all hidden opacity-0 invisible scale-90 [&.open]:block [&.open]:opacity-100 [&.open]:visible [&.open]:scale-100`">
    <slot />
  </div>
</template>
