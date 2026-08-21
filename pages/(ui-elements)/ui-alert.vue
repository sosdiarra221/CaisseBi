<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import MulriAlerts from "~/components/uiElement/MulriAlerts.vue";
const tab = ref("");
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Alert" name="Alert" />
    <div class="container">
      <!--element-area-->
      <div class="element-wrapper flex rounded-lg border border-border bg-card shadow-sm mb-4">
        <div class="bg-card rounded-s-lg w-[16.875rem] max-xl:w-64 sticky top-20 h-full z-[2] max-xl:hidden">
          <div class="p-6 border-b border-border">
            <h2 class="mb-2">Alert.</h2>
            <p class="mb-4 text-sm">
              Make use of Tailwind's unique Alert styles to enhance actions in forms, dialogs, and various other elements, featuring comprehensive support for multiple sizes, states, and additional
              functionalities.
            </p>
            <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Alert</a>
          </div>
          <div class="overflow-hidden" id="right-sidebar">
            <h4 class="pt-4 px-6 text-base">Alert</h4>
            <div class="pt-1.1 demo-right-tabs" id="rightSidebarScroll">
              <ul class="navbar-nav nav flex flex-wrap" id="menu-bar">
                <li class="relative"><a href="#basic-alerts" class="scroll block py-2 px-6 leading-normal w-[270px]">Basic-Alerts</a></li>
                <li class="relative"><a href="#color-alerts" class="scroll block py-2 px-6 leading-normal w-[270px]">Solid color alerts</a></li>
                <li class="relative"><a href="#square-alerts" class="scroll block py-2 px-6 leading-normal w-[270px]">Square Alerts</a></li>
                <li class="relative"><a href="#rounded-alerts" class="scroll block py-2 px-6 leading-normal w-[270px]">Rounded Alerts</a></li>
                <li class="relative"><a href="#dismissable-alerts" class="scroll block py-2 px-6 leading-normal w-[270px]">Dismissable Alerts</a></li>
                <li class="relative"><a href="#alerts-alt" class="scroll block py-2 px-6 leading-normal w-[270px]">Alerts Alt</a></li>
                <li class="relative"><a href="#solid-alt" class="scroll block py-2 px-6 leading-normal w-[270px]">Solid Alt</a></li>
                <li class="relative"><a href="#dismissable-solid" class="scroll block py-2 px-6 leading-normal w-[270px]">Dismissable with solid</a></li>
                <li class="relative"><a href="#alert-link" class="scroll block py-2 px-6 leading-normal w-[270px]">Alert with Link</a></li>
                <li class="relative"><a href="#alert-link-color" class="scroll block py-2 px-6 leading-normal w-[270px]">Alert with Link and Solid Color</a></li>
                <li class="relative"><a href="#notifications" class="scroll block py-2 px-6 leading-normal w-[270px]">Inline Notifications</a></li>
                <li class="relative"><a href="#alert-icon-left" class="scroll block py-2 px-6 leading-normal w-[270px]">Alert Icon Left</a></li>
                <li class="relative"><a href="#alert-outline" class="scroll block py-2 px-6 leading-normal w-[270px]">Alert outline</a></li>
                <li class="relative"><a href="#alert-social" class="scroll block py-2 px-6 leading-normal w-[270px]">Alert Social</a></li>
                <li class="relative"><a href="#message-alert" class="scroll block py-2 px-6 leading-normal w-[270px]">Message Alert</a></li>
                <li class="relative"><a href="#message-alert-color" class="scroll block py-2 px-6 leading-normal w-[270px]">Message Alert Color</a></li>
                <li class="relative"><a href="#alert-icon-big" class="scroll block py-2 px-6 leading-normal w-[270px]">Alert left icon big </a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-[calc(100%_-_270px)] max-3xl:w-[calc(100%_-_236px)] max-xl:!w-full border-l border-border">
          <div class="container-fluid !p-0">
            <div class="row">
              <MulriAlerts />
            </div>
            <!-- /row -->
          </div>
        </div>
      </div>
      <!--/element-area-->
    </div>
  </div>
</template>
