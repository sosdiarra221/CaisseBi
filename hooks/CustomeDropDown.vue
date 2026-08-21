<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const toggleDropdown = (e: MouseEvent) => {
  isOpen.value = !isOpen.value;
};

function outsideClickHandler(e: Event) {
  let target = e.target as HTMLElement;
  if (!target.closest("#toggle_dropdown")) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", outsideClickHandler);
});
onUnmounted(() => {
  document.removeEventListener("click", outsideClickHandler);
});
</script>
<template>
  <div>
    <div @click="toggleDropdown" id="toggle_dropdown">
      <slot name="trigger"></slot>
    </div>
    <Transition enter-active-class="transition-all" enter-to-class="opacity-100 scale-100" enter-from-class="opacity-0 scale-90" v-show.transition.origin.top.left="isOpen" v-cloak>
      <slot name="menu"></slot>
    </Transition>
  </div>
</template>
