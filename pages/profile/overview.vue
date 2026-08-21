<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import CommoneProfile from "~/components/profile/CommoneProfile.vue";
import ProfileLeft from "~/components/profile/ProfileLeft.vue";
import ProfileRight from "~/components/profile/ProfileRight.vue";


</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Overview" name="Overview" />
    <div class="container">
      <CommoneProfile title="Overview" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <ProfileLeft />
          <ProfileRight />
        </div>
      </div>
    </div>
  </div>
</template>
