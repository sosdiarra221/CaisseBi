<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import MultiDataTable from "~/components/table/MultiDataTable.vue";
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
            <h2 class="mb-2">Datatables Table.</h2>
            <p class="mb-4 text-sm">
              Make use of Datatabls's unique Datatabls styles to enhance actions
              in forms, dialogs, and various other elements, featuring
              comprehensive support.
            </p>
            <a
              href="javascript:void(0);"
              class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
              >Datatables</a
            >
          </div>
          <div class="overflow-hidden" id="right-sidebar">
            <h4 class="pt-4 px-6 text-base">Datatables</h4>
            <div class="pt-1.1 demo-right-tabs" id="rightSidebarScroll">
              <ul class="navbar-nav nav flex flex-wrap" id="menu-bar">
                <li class="relative">
                  <a
                    href="#accordion-one"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Basic Datatable</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#accordion-two"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Datatable</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#accordion-six"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Responsive Datatable</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#accordion-three"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Profile Datatable</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#accordion-four"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Fees Collection</a
                  >
                </li>
                <li class="relative">
                  <a
                    href="#accordion-five"
                    class="scroll block py-2 px-6 leading-normal w-[270px]"
                    >Patient</a
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
              <ClientOnly>
                <MultiDataTable />
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
