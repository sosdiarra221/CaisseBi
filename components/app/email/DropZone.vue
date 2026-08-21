<script lang="ts" setup>
// @ts-ignore
import vueDropzone from "dropzone-vue3";
const dropzoneOptions = {
  url: "https://httpbin.org/post",
  maxFilesize: 0.5,
  headers: { "My-Awesome-Header": "header value" },
};
</script>

<template>
  <ClientOnly>
    <vueDropzone class="dropzone border border-dashed border-border relative rounded-lg bg-bodybg min-h-[210px] h-[210px]" ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" />
  </ClientOnly>
</template>

<style>
.dropzone .dz-image{
     border-radius: 10px;
     overflow: hidden;
}
.dropzone .dz-image img {
  width: 120px;
 
}
</style>
