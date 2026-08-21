<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import MultiButton from "~/components/uiElement/MultiButton.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Button" name="Button" />
    <div class="container">
      <!--element-area-->
      <div class="element-wrapper flex rounded-lg border border-border bg-card shadow-sm mb-4">
        <div class="bg-card rounded-s-lg w-[16.875rem] max-xl:w-64 sticky top-20 h-full z-[2] max-xl:hidden">
          <div class="p-6 border-b border-border">
            <h2 class="mb-2">Button.</h2>
            <p class="mb-4 text-sm">
              Make use of Tailwind's unique button styles to enhance actions in forms, dialogs, and various other elements, featuring comprehensive support for multiple sizes, states, and additional
              functionalities.
            </p>
            <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Button</a>
          </div>
          <div class="overflow-hidden" id="right-sidebar">
            <h4 class="pt-4 px-6 text-base">Button</h4>
            <div class="pt-1.1 demo-right-tabs" id="rightSidebarScroll">
              <ul class="navbar-nav nav flex flex-wrap" id="menu-bar">
                <li class="relative"><a href="#default-button" class="scroll block py-2 px-6 leading-normal w-[270px]">Default Button</a></li>
                <li class="relative"><a href="#button-sizes" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Sizes</a></li>
                <li class="relative"><a href="#button-icon-style" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Sizes Icon</a></li>
                <li class="relative"><a href="#button-style" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Style</a></li>
                <li class="relative"><a href="#button-right-icons" class="scroll block py-2 px-6 leading-normal w-[270px]">CTA Buttons</a></li>
                <li class="relative"><a href="#dropdown-button" class="scroll block py-2 px-6 leading-normal w-[270px]">Dropdown Button</a></li>
                <li class="relative"><a href="#button-transparent" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Transparent</a></li>
                <li class="relative"><a href="#disabled-button" class="scroll block py-2 px-6 leading-normal w-[270px]">Disabled Button</a></li>
                <li class="relative"><a href="#square-buttons" class="scroll block py-2 px-6 leading-normal w-[270px]">Square Buttons</a></li>
                <li class="relative"><a href="#button-block" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Block</a></li>
                <li class="relative"><a href="#social-button" class="scroll block py-2 px-6 leading-normal w-[270px]">Social Button</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-[calc(100%_-_270px)] max-3xl:w-[calc(100%_-_236px)] max-xl:!w-full border-l border-border">
          <div class="container-fluid !p-0">
            <!-- row -->
            <div class="row">
              <MultiButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
