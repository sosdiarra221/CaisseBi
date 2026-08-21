<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import MultiCard from "~/components/uiElement/MultiCard.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Card" name="Card" />
    <div class="container">
      <div class="element-wrapper flex rounded-lg border border-border bg-card shadow-sm mb-4">
        <div class="bg-card rounded-s-lg w-[270px] max-xl:w-64 sticky top-20 h-full z-[2] max-xl:hidden">
          <div class="p-6 border-b border-border">
            <h2 class="mb-2">Card.</h2>
            <p class="mb-4 text-sm">
              Make use of Tailwind's unique Card styles to enhance actions in forms, dialogs, and various other elements, featuring comprehensive support for multiple sizes, states, and additional
              functionalities.
            </p>
            <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Card</a>
          </div>
          <div class="overflow-hidden" id="right-sidebar">
            <h4 class="pt-4 px-6 text-base">Card</h4>
            <div class="pt-1.1 demo-right-tabs" id="rightSidebarScroll">
              <ul class="navbar-nav nav flex flex-wrap" id="menu-bar">
                <li class="relative"><a href="#card-title-1" class="scroll block py-2 px-6 leading-normal w-[270px]">Card Title</a></li>
                <li class="relative"><a href="#card-title-2" class="scroll block py-2 px-6 leading-normal w-[270px]">Card Title-2</a></li>
                <li class="relative"><a href="#card-title-3" class="scroll block py-2 px-6 leading-normal w-[270px]">Card Title-3</a></li>
                <li class="relative"><a href="#special-title" class="scroll block py-2 px-6 leading-normal w-[270px]">Special Title Treatment</a></li>
                <li class="relative"><a href="#primary-card" class="scroll block py-2 px-6 leading-normal w-[270px]">Primary Card Title</a></li>
                <li class="relative"><a href="#secondary-card" class="scroll block py-2 px-6 leading-normal w-[270px]">Secondary Card Title</a></li>
                <li class="relative"><a href="#success-card" class="scroll block py-2 px-6 leading-normal w-[270px]">Success Card Title</a></li>
                <li class="relative"><a href="#danger-card" class="scroll block py-2 px-6 leading-normal w-[270px]">Danger Card Title</a></li>
                <li class="relative"><a href="#warning-card" class="scroll block py-2 px-6 leading-normal w-[270px]">Warning card title</a></li>
                <li class="relative"><a href="#info-card" class="scroll block py-2 px-6 leading-normal w-[270px]">Info card title</a></li>
                <li class="relative"><a href="#light-card" class="scroll block py-2 px-6 leading-normal w-[270px]">Light card title</a></li>
                <li class="relative"><a href="#dark-card" class="scroll block py-2 px-6 leading-normal w-[270px]">Dark card title</a></li>
                <li class="relative"><a href="#card-title-4" class="scroll block py-2 px-6 leading-normal w-[270px]">Card Title-4</a></li>
                <li class="relative"><a href="#card-title-5" class="scroll block py-2 px-6 leading-normal w-[270px]">Card Title-5</a></li>
                <li class="relative"><a href="#card-title-6" class="scroll block py-2 px-6 leading-normal w-[270px]">Card Title-6</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-[calc(100%_-_270px)] max-3xl:w-[calc(100%_-_236px)] max-xl:!w-full border-l border-border">
          <div class="container-fluid !p-0">
            <div class="row">
              <MultiCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
