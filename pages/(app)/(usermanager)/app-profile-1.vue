<script lang="ts" setup>
import AppContentLeft from "~/components/app/AppContentLeft.vue";
import AppContentRight from "~/components/app/AppContentRight.vue";
import CommonProfileDetail from "~/components/app/CommonProfileDetail.vue";
import CommonNav from "~/components/CommonNav.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Profile Detail" name="Profile Detail" />
    <div class="container">
      <CommonProfileDetail />
      <div class="row">
        <AppContentLeft />
        <AppContentRight />
      </div>
    </div>
  </div>
</template>
