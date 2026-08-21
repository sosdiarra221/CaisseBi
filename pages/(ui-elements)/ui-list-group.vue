<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import MultiListGroup from "~/components/uiElement/MultiListGroup.vue";
</script>

<template>
  <div class="content-body default-height" ref="EditProfile">
    <CommonNav title="Edit Profile" name="Edit Profile" />
    <div class="container">
      <!-- row -->
      <div class="element-wrapper flex rounded-lg border border-border bg-card shadow-sm mb-4">
        <div class="bg-card rounded-s-lg w-[16.875rem] max-xl:w-64 sticky top-20 h-full z-[2] max-xl:hidden">
          <div class="p-6 border-b border-border">
            <h2 class="mb-2">List Group.</h2>
            <p class="mb-4 text-sm">
              Make use of Datatabls's unique Datatabls styles to enhance actions in forms, dialogs, and various other elements, featuring comprehensive support.
            </p>
            <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">List Group</a>
          </div>
          <div class="overflow-hidden" id="right-sidebar">
            <h4 class="pt-4 px-6 text-base">List Group</h4>
            <div class="pt-1.1 demo-right-tabs" id="rightSidebarScroll">
              <ul class="navbar-nav nav flex flex-wrap" id="menu-bar">
                <li class="relative active"><a href="#basic-list" class="scroll block py-2 px-6 leading-normal w-[270px]">Basic List Group</a></li>
                <li class="relative"><a href="#list-active" class="scroll block py-2 px-6 leading-normal w-[270px]">List Active items</a></li>
                <li class="relative"><a href="#list-disabled" class="scroll block py-2 px-6 leading-normal w-[270px]">List Disabled Item</a></li>
                <li class="relative"><a href="#link-button" class="scroll block py-2 px-6 leading-normal w-[270px]">Link And Button Item</a></li>
                <li class="relative"><a href="#flush" class="scroll block py-2 px-6 leading-normal w-[270px]">Flush</a></li>
                <li class="relative"><a href="#with-badges" class="scroll block py-2 px-6 leading-normal w-[270px]">With Badges</a></li>
                <li class="relative"><a href="#custom-content" class="scroll block py-2 px-6 leading-normal w-[270px]">Custom Content</a></li>
                <li class="relative"><a href="#contextual" class="scroll block py-2 px-6 leading-normal w-[270px]">Contextual</a></li>
                <li class="relative"><a href="#list-tab" class="scroll block py-2 px-6 leading-normal w-[270px]">List-Tab</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-[calc(100%_-_270px)] max-3xl:w-[calc(100%_-_236px)] max-xl:!w-full border-l border-border">
          <div class="container-fluid !p-0">
            <div class="row">
              <MultiListGroup />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
