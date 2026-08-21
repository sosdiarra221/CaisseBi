<script lang="ts" setup>
defineProps<{
  title: string;
  name: string;
}>();
</script>

<template>
  <div class="flex items-center justify-between relative z-1 flex-wrap py-2.5 px-5 bg-d-bg border-b border-border">
    <h5 class="sm:text-xl text-2sm">{{ title }}</h5>
    <ul class="flex flex-wrap items-center">
      <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
      <li class="font-semibold before:content-['>'] before:leading-6 before:pr-2 before:float-left pl-2 text-primary">
        <a href="javascript:void(0);">{{ name }}</a>
      </li>
    </ul>
  </div>
</template>
