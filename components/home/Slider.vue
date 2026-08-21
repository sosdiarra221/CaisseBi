<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import { IMAGES } from "~/lib/Theme";

const slider = [
  { img: IMAGES.btc, name: "Bitcoin", category: " BTC/USDT" },
  { img: IMAGES.eth, name: "Ethereum", category: "ETH" },
  { img: IMAGES.bnb1, name: "Ripple", category: "RPL" },
  { img: IMAGES.ox, name: "Ethereum", category: "ETH" },
  { img: IMAGES.appc, name: "Ripple", category: "RPL" },
];
</script>

<template>
  <Swiper
    class="crypto-list"
    id="crypto-webticker"
    :modules="[Autoplay]"
    :slides-per-view="4"
    :loop="true"
    :speed="5000"
    :space-between="30"
    :no-swiping-class="'swiper-slide'"
    :autoplay="{
      delay: 0,
      disableOnInteraction: false,
      waitForTransition: false,
      pauseOnMouseEnter: false,
    }"
    :breakpoints="{
      1200: { slidesPerView: 4 },
      991: { slidesPerView: 3 },
      775: { slidesPerView: 2 },
      240: { slidesPerView: 1 },
    }"
  >
    <SwiperSlide v-for="{ img, category, name } in slider">
      <div class="card overflow-hidden hover:border-primary">
        <div class="py-3 px-5 flex items-center">
          <img :src="img" alt="" class="mr-2.5" />
          <div>
            <h4>
              {{ name }}<small class="text-xs text-body">{{ category }}</small>
            </h4>
            <p class="mb-0">
              $2092.56<span class="text-success ml-2.5 inline-block"
                >+2.97%</span
              >
            </p>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
