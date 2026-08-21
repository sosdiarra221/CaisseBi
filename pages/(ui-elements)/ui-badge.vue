<script lang="ts" setup>
import MultiBedge from "~/components/uiElement/MultiBedge.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Badge" name="Badge" />
    <div class="container">
      <div class="element-wrapper flex rounded-lg border border-border bg-card shadow-sm mb-4">
        <div class="bg-card rounded-s-lg w-[16.875rem] max-xl:w-64 sticky top-20 h-full z-[2] max-xl:hidden">
          <div class="p-6 border-b border-border">
            <h2 class="mb-2">Badge.</h2>
            <p class="mb-4 text-sm">
              Make use of Tailwind's unique Badge styles to enhance actions in forms, dialogs, and various other elements, featuring comprehensive support for multiple sizes,
              states, and additional functionalities.
            </p>
            <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Badge</a>
          </div>
          <div class="overflow-hidden" id="right-sidebar">
            <h4 class="pt-4 px-6 text-base">Badge</h4>
            <div class="pt-1.1 demo-right-tabs" id="rightSidebarScroll">
              <ul class="navbar-nav nav flex flex-wrap" id="menu-bar">
                <li class="relative"><a href="#badges-size" class="scroll block py-2 px-6 leading-normal w-[270px]">Badges Size</a></li>
                <li class="relative"><a href="#badges-light" class="scroll block py-2 px-6 leading-normal w-[270px]">Badges Light</a></li>
                <li class="relative"><a href="#badges" class="scroll block py-2 px-6 leading-normal w-[270px]">Badges</a></li>
                <li class="relative"><a href="#pill-badge" class="scroll block py-2 px-6 leading-normal w-[270px]">Pill Badge</a></li>
                <li class="relative"><a href="#link-badge" class="scroll block py-2 px-6 leading-normal w-[270px]">Link Badge</a></li>
                <li class="relative"><a href="#rounded-badge" class="scroll block py-2 px-6 leading-normal w-[270px]">Rounded Badge</a></li>
                <li class="relative"><a href="#rounded-outline" class="scroll block py-2 px-6 leading-normal w-[270px]">Rounded Outline Badge </a></li>
                <li class="relative"><a href="#outline-circle" class="scroll block py-2 px-6 leading-normal w-[270px]">Outline Circle Badge </a></li>
                <li class="relative"><a href="#circle-badge" class="scroll block py-2 px-6 leading-normal w-[270px]">Circle Badge</a></li>
                <li class="relative"><a href="#circle-badge-default" class="scroll block py-2 px-6 leading-normal w-[270px]">Circle Badge Default</a></li>
                <li class="relative"><a href="#number-badge" class="scroll block py-2 px-6 leading-normal w-[270px]">Number Badge</a></li>
                <li class="relative"><a href="#badge-sizes" class="scroll block py-2 px-6 leading-normal w-[270px]">Badge Sizes</a></li>
                <li class="relative"><a href="#badge-position" class="scroll block py-2 px-6 leading-normal w-[270px]">Badge Position</a></li>
                <li class="relative"><a href="#badge-button" class="scroll block py-2 px-6 leading-normal w-[270px]">Badge Button</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-[calc(100%_-_270px)] max-3xl:w-[calc(100%_-_236px)] max-xl:!w-full border-l border-border">
          <div class="container-fluid !p-0">
            <!-- row -->
            <div class="row">
              <MultiBedge />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
