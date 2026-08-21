<script setup lang="ts">
import Header2 from "~/components/Header2.vue";
import Sidebar from "~/components/Sidebar.vue";
import { Store } from "~/store/Store";

const { profileSidebar, toggleMenu } = Store;
function resizeHandler() {
  if (window.innerWidth >= 1600) {
    profileSidebar.value = true;
  } else {
    profileSidebar.value = false;
  }
}

onMounted(() => {
  resizeHandler();
  window.addEventListener("resize", resizeHandler);
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeHandler);
});
</script>

<template>
  <div
    id="main-wrapper"
    :class="['wallet-open', 'show', profileSidebar ? 'active' : '', toggleMenu ? 'menu-toggle' : '']"
  >
    <Header2 />
    <Sidebar />
    <NuxtPage />
    <div class="footer">
      <div class="copyright">
        <p>
          Copyright © Une conception de PeneCorporate
          <span class="current-year"
            >&nbsp; {{ new Date().getFullYear() }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
