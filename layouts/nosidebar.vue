<script lang="ts" setup>
import Header3 from "~/components/Header3.vue";
import Sidebar from "~/components/Sidebar.vue";
import { Store } from "~/store/Store";

const { profileSidebar } = Store;

function resizeHandler() {
  if (window.innerWidth <= 1600) {
    profileSidebar.value = false;
  } else {
    profileSidebar.value = true;
  }
}

onMounted(() => {
  resizeHandler();
  window.addEventListener("resize", resizeHandler);
});
onUnmounted(() => {
  window.addEventListener("resize", resizeHandler);
});
</script>

<template>
  <div id="main-wrapper" :class="`wallet-open show`">
    <Nav />
    <Header3 />
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
