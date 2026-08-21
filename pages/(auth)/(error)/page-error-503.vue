<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});
</script>

<template>
  <div class="flex min-h-screen h-full">
    <div class="container mt-0">
      <div class="row justify-center h-full items-center">
        <div class="md:w-1/2">
          <div
            class="error-page h-screen p-12 relative bg-blend-luminosity bg-cover"
          >
            <div
              class="error-inner z-1 absolute left-1/2 top-1/2 max-w-[500px] -translate-y-1/2 -translate-x-1/2 p-5 w-full text-center"
            >
              <div
                class="dz-error animate-dzerror relative font-black text-secondary lg:leading-[200px] lg:text-[200px] sm:leading-[150px] sm:text-[150px] leading-[80px] text-[80px] max-sm:tracking-[5px]"
                data-text="503"
              >
                503
              </div>
              <h4
                class="error-head sm:mb-10 mb-7.5 sm:text-3xl text-xl leading-[1.4]"
              >
                <i class="fa fa-times-circle text-danger"></i> Service
                Unavailable
              </h4>
              <NuxtLink
                to="/"
                class="btn bg-secondary hover:bg-secondaryhover hover:shadow-btnsecondary text-white"
                >BACK TO HOMEPAGE</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
