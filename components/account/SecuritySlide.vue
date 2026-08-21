<script lang="ts" setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
</script>

<template>
  <div class="xl:col-span-3 lg:col-span-6 col-span-12">
    <div class="grid grid-cols-12 gap-x-6">
      <div class="col-span-12">
        <div class="card">
          <div class="p-6">
            <Carousel :items-to-show="1.1" class="owl-carousel owl-theme card-carousel card-carousel-dots p-2">
              <Slide class="item" v-for="el in 3" :key="el">
                <span class="mb-2 block">Recent Alerts</span>
                <h6 class="mb-2">Login Attempt Failed</h6>
                <p class="mb-4">To start a blog, think of a first brainstorm details</p>
                <div class="flex justify-between pt-1">
                  <span class="badge badge-sm text-primary bg-primarylight">2 mins ago</span>
                  <span class="badge badge-sm bg-light text-dark mr-2">Details</span>
                </div>
              </Slide>
              <template #addons>
                <Pagination class="owl-dots" />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
      <div class="col-span-12">
        <div class="card">
          <div class="p-6">
            <Carousel :items-to-show="1.1" class="owl-carousel owl-theme card-carousel card-carousel-dots p-2">
              <Slide class="item" v-for="el in 3" :key="el">
                <span class="mb-2 block">Recent Alerts</span>
                <h6 class="mb-2">Login Attempt Failed</h6>
                <p class="mb-4">To start a blog, think of a first brainstorm details</p>
                <div class="flex justify-between pt-1">
                  <span class="badge badge-sm text-primary bg-primarylight">2 mins ago</span>
                  <span class="badge badge-sm bg-light text-dark mr-2">Details</span>
                </div>
              </Slide>
              <template #addons>
                <Pagination class="owl-dots" />
              </template>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.owl-carousel .carousel__slide {
  display: unset;
  text-align: start;
  margin-right: 20px;
}

</style>
