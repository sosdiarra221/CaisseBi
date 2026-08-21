<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";

const Breadcrumb = ref<HTMLElement | null>(null);
onMounted(() => {
  Breadcrumb.value?.setAttribute("style", `height:${window.innerHeight - 66}px`);
});
</script>

<template>
  <div class="content-body default-height" ref="Breadcrumb">
    <CommonNav title="Breadcrumb" name="Breadcrumb" />
    <div class="container">
      <div class="row">
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Example</h4>
            </div>
            <div class="sm:p-5 p-4">
              <nav aria-label="breadcrumb">
                <ol class="flex flex-wrap items-center mb-4">
                  <li class="breadcrumb-item">Home</li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol class="flex flex-wrap items-center mb-4">
                  <li class="text-secondary"><a href="javascript:void(0);">Home</a></li>
                  <li class="before:content-['>'] before:leading-6 before:pr-2 before:float-left pl-2">Library</li>
                </ol>
              </nav>
              <nav aria-label="breadcrumb">
                <ol class="flex flex-wrap items-center mb-4">
                  <li class="text-secondary"><a href="javascript:void(0);">Home</a></li>
                  <li class="before:content-['>'] before:leading-6 before:pr-2 before:float-left pl-2 text-secondary"><a href="javascript:void(0);">Library</a></li>
                  <li class="before:content-['>'] before:leading-6 before:pr-2 before:float-left pl-2">Data</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Dividers</h4>
            </div>
            <div class="sm:p-5 p-4">
              <nav>
                <ol class="flex flex-wrap items-center mb-4">
                  <li class="text-secondary"><a href="javascript:void(0);">Home</a></li>
                  <li class="before:content-['>'] before:leading-6 before:pr-2 before:float-left pl-2">Library</li>
                </ol>
              </nav>
              <nav>
                <ol class="flex flex-wrap items-center mb-4">
                  <li class="text-secondary"><a href="javascript:void(0);">Home</a></li>
                  <li class="before:content-['/'] before:leading-6 before:pr-2 before:float-left pl-2">Library</li>
                </ol>
              </nav>
              <nav>
                <ol class="flex flex-wrap items-center mb-4">
                  <li class="text-secondary"><a href="javascript:void(0);">Home</a></li>
                  <li class="before:content-['~'] before:leading-6 before:pr-2 before:float-left pl-2">Library</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Icon</h4>
            </div>
            <div class="sm:p-5 p-4">
              <nav>
                <ol class="flex flex-wrap items-center mb-4">
                  <li class="text-secondary"><a href="javascript:void(0);">Home</a></li>
                  <li class="before:content-['\f101'] before:font-['Font_Awesome_5_Free'] before:font-black before:leading-6 before:pr-2 before:float-left pl-2">Library</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div class="xl:w-1/2">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Without Divider</h4>
            </div>
            <div class="sm:p-5 p-4">
              <nav>
                <ol class="flex flex-wrap items-center mb-4">
                  <li class="text-secondary"><a href="javascript:void(0);">Home</a></li>
                  <li class="pl-2">Library</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
