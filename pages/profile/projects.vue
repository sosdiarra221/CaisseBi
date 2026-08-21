<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import CommoneProfile from "~/components/profile/CommoneProfile.vue";
import ProjectCards from "~/components/profile/ProjectCards.vue";


</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Project" name="Project" />
    <div class="container">
      <CommoneProfile title="Projects" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12">
            <div class="flex justify-between items-center mb-4">
              <h5 class="mb-0">My Projects</h5>
              <div class="flex items-center">
                <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm ms-2"
                  >+ New Project</a
                >
              </div>
            </div>
          </div>
          <ProjectCards />
        </div>
      </div>
    </div>
  </div>
</template>
