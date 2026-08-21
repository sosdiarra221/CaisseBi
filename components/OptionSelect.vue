<script setup lang="ts">
interface optionType {
  lable: string;
  img?: string;
}
defineProps<{
  options: optionType[];
  className: string;
}>();

const activeKey = ref<number>(0);
const menu = reactive({ toggleMenu: false });

function outsideclickHandler(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (!target.closest("#select_menu")) {
    menu.toggleMenu = false;
  }
}
onMounted(() => {
  document.addEventListener("click", outsideclickHandler);
});

onUnmounted(() => {
  document.removeEventListener("click", outsideclickHandler);
});
</script>
<template>
  <div :class="`relative flex  ${className}`" tabindex="0">
    <img :src="options[activeKey].img" alt="" class="select-img" v-if="options[activeKey].img" />
    <label id="select_menu" class="current cursor-pointer w-full p-0 m-0" @click="menu.toggleMenu = !menu.toggleMenu">{{ options[activeKey].lable }}</label>
    <ul
      :class="`${
        menu.toggleMenu ? 'open' : ''
      } z-50 w-full mt-1 list absolute scale-50 opacity-0 invisible [&.open]:opacity-100 [&.open]:visible [&.open]:scale-100 transition-all top-10 left-0`"
    >
      <li
        class="option flex flex-shrink cursor-pointer"
        @click="activeKey = ind"
        :class="{ 'selected focus': activeKey == ind }"
        v-for="({ lable, img }, ind) in options"
        :key="ind"
      >
        <img :src="img" alt="" class="select-img" v-if="img" />
        {{ lable }}
      </li>
    </ul>
  </div>
</template>
