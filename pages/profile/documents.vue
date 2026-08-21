<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import CommoneProfile from "~/components/profile/CommoneProfile.vue";
import DocumentTab1 from "~/components/profile/DocumentTab1.vue";
import DocumentTab2 from "~/components/profile/DocumentTab2.vue";


const tab = ref("project-list");
</script>
<template>
  <div class="content-body default-height">
    <CommonNav title="Documents" name="Documents" />
    <div class="container">
      <CommoneProfile title="Documents" />
      <div class="tab-content">
        <div class="flex justify-between items-center mb-3">
          <h5>Documents</h5>
          <div class="flex items-center">
            <ul class="flex flex-wrap nav-pills" id="myTabView" role="tablist">
              <li class="nav-item ms-1" role="presentation">
                <button class="btn bg-light size-8 !p-0 text-center" @click.prevent="tab = 'project-list'" :class="{ ' !bg-primary text-white': tab == 'project-list' }">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-list"
                  >
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                </button>
              </li>
              <li class="nav-item ms-1" role="presentation">
                <button class="btn bg-light size-8 !p-0 text-center" @click.prevent="tab = 'project-grid'" :class="{ ' !bg-primary text-white': tab == 'project-grid' }">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-grid"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content" id="myTabContentView">
          <transition name="fade" mode="out-in">
            <DocumentTab1 v-if="tab == 'project-list'" />
            <DocumentTab2 v-else />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
