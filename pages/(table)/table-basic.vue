<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import MultiTables from "~/components/table/MultiTables.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Basic Table" name="Basic Table" />
    <div class="container">
      <!-- row -->
      <div
        class="element-wrapper flex rounded-lg border border-border bg-card shadow-sm mb-4"
      >
        <div
          class="bg-card rounded-s-lg w-[16.875rem] max-xl:w-64 sticky top-20 h-full z-[2] max-xl:hidden"
        >
          <div class="p-6 border-b border-border">
            <h2 class="mb-2">Tailwind Table.</h2>
            <p class="mb-4 text-sm">
              Leverage Tailwind's versatile table components to improve actions
              in forms, dialogs, and other elements, offering full support for
              various sizes, states, and extended functionalities.
            </p>
            <a
              href="javascript:void(0);"
              class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
              >Tailwind Table</a
            >
          </div>
          <div class="overflow-hidden" id="right-sidebar">
            <h4 class="pt-4 px-6 text-base">Tailwind Table</h4>
            <div class="pt-1.1 demo-right-tabs" id="rightSidebarScroll">
              <ul class="navbar-nav nav flex flex-wrap" id="menu-bar">
                <li class="relative">
                  <a
                    href="#tailwind-table1"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Recent Payments Queue</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table2"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Exam Toppers</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table3"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Basic</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table4"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Table Striped</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table5"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Table Bordered</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table6"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Table Hover</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table7"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Hover Table</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table8"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Table Bordered</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table9"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Bordered Table</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table10"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Table Stripped</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table11"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Responsive Table</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table12"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Heading With Background</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table13"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Primary Table</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table14"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Primary Table Hover</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#tailwind-table15"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Contextual Table</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="w-[calc(100%_-_270px)] max-3xl:w-[calc(100%_-_236px)] max-xl:!w-full border-l border-border"
        >
          <div class="container-fluid !p-0">
            <div class="row">
              <MultiTables />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
