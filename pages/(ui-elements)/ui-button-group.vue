<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import MultiGroupButton from "~/components/uiElement/MultiGroupButton.vue";
</script>

<template>
  <div class="content-body default-height" ref="EditProfile">
    <CommonNav title="Edit Profile" name="Edit Profile" />
    <div class="container">
      <!-- row -->
      <div class="element-wrapper flex rounded-lg border border-border bg-card shadow-sm mb-4">
        <div class="bg-card rounded-s-lg w-[16.875rem] max-xl:w-64 sticky top-20 h-full z-[2] max-xl:hidden">
          <div class="p-6 border-b border-border">
            <h2 class="mb-2">Button Group.</h2>
            <p class="mb-4 text-sm">
              Make use of Tailwind's unique Button Group styles to enhance actions in forms, dialogs, and various other elements, featuring comprehensive support for multiple sizes, states, and
              additional functionalities.
            </p>
            <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Button Group</a>
          </div>
          <div class="overflow-hidden" id="right-sidebar">
            <h4 class="pt-4 px-6 text-base">Button Group</h4>
            <div class="pt-1.1 demo-right-tabs" id="rightSidebarScroll">
              <ul class="navbar-nav nav flex flex-wrap" id="menu-bar">
                <li class="relative"><a href="#button-group" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Group</a></li>
                <li class="relative"><a href="#Mixed-style" class="scroll block py-2 px-6 leading-normal w-[270px]">Mixed Style</a></li>
                <li class="relative"><a href="#button-group-outline" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Group Outline</a></li>
                <li class="relative"><a href="#button-group-Checkbox" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Group Checkbox</a></li>
                <li class="relative"><a href="#button-group-Radio" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Group Radio</a></li>
                <li class="relative"><a href="#button-toolbar" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Toolbar</a></li>
                <li class="relative"><a href="#button-sizing" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Sizing</a></li>
                <li class="relative"><a href="#button-nesting" class="scroll block py-2 px-6 leading-normal w-[270px]">Button Nesting</a></li>
                <li class="relative"><a href="#vertical-variation" class="scroll block py-2 px-6 leading-normal w-[270px]">Vertical Variation</a></li>
                <li class="relative"><a href="#vertical-dropdown" class="scroll block py-2 px-6 leading-normal w-[270px]">Vertical Dropdown Variation</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-[calc(100%_-_270px)] max-3xl:w-[calc(100%_-_236px)] max-xl:!w-full border-l border-border">
          <div class="container-fluid !p-0">
            <div class="row">
              <MultiGroupButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
