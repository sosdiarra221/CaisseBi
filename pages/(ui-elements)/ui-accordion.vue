<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import MultiAccorion from "~/components/uiElement/MultiAccorion.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Accordion" name="Accordion" />
    <div class="container">
      <!-- row -->
      <div class="element-wrapper flex rounded-lg border border-border bg-card shadow-sm mb-4">
        <div class="bg-card rounded-s-lg w-[16.875rem] max-xl:w-64 sticky top-20 h-full z-[2] max-xl:hidden">
          <div class="p-6 border-b border-border">
            <h2 class="mb-2">Accordion.</h2>
            <p class="mb-4 text-sm">
              Make use of Tailwind's unique Accordion styles to enhance actions in forms, dialogs, and various other elements, featuring comprehensive support for multiple sizes,
              states, and additional functionalities.
            </p>
            <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Accordion</a>
          </div>
          <div class="overflow-hidden" id="right-sidebar">
            <h4 class="pt-4 px-6 text-base">Accordion</h4>
            <div class="pt-1.1 demo-right-tabs" id="rightSidebarScroll">
              <ul class="navbar-nav nav flex flex-wrap" id="menu-bar">
                <li class="relative"><a href="#accordion-basic" class="scroll block py-2 px-6 leading-normal w-[270px]">Basic Accordion</a></li>
                <li class="relative"><a href="#accordion-alwaysopen" class="scroll block py-2 px-6 leading-normal w-[270px]">Always Open Accordion</a></li>
                <li class="relative"><a href="#accordion-one" class="scroll block py-2 px-6 leading-normal w-[270px]">Default Accordion</a></li>
                <li class="relative"><a href="#accordion-two" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion Bordered</a></li>
                <li class="relative"><a href="#accordion-three" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion without space</a></li>
                <li class="relative"><a href="#accordion-four" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion without space with border</a></li>
                <li class="relative"><a href="#accordion-five" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion indicator in Right position</a></li>
                <li class="relative"><a href="#accordion-six" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion with icon</a></li>
                <li class="relative"><a href="#accordion-seven" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion header background</a></li>
                <li class="relative"><a href="#accordion-eight" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion solid background</a></li>
                <li class="relative"><a href="#accordion-nine" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion active background</a></li>
                <li class="relative"><a href="#accordion-ten" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion header shadow</a></li>
                <li class="relative"><a href="#accordion-eleven" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion Rounded Stylish</a></li>
                <li class="relative"><a href="#accordion-twelve" class="scroll block py-2 px-6 leading-normal w-[270px]">Accordion Gradient</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-[calc(100%_-_270px)] max-3xl:w-[calc(100%_-_236px)] max-xl:!w-full border-l border-border">
          <div class="container-fluid !p-0">
            <div class="row">
              <MultiAccorion />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
