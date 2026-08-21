<script lang="ts" setup>
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import img1 from "assets/images/big/img1.jpg";
import img2 from "assets/images/big/img2.jpg";
import img3 from "assets/images/big/img3.jpg";
import img4 from "assets/images/big/img4.jpg";
import img5 from "assets/images/big/img5.jpg";
import img6 from "assets/images/big/img6.jpg";
import img7 from "assets/images/big/img7.jpg";
import img8 from "assets/images/big/img8.jpg";

const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }, { img: img5 }, { img: img6 }, { img: img7 }, { img: img8 }];

const Nestable = ref<HTMLElement | null>(null);
onMounted(() => {
  Nestable.value?.setAttribute("style", `height:${window.innerHeight - 66}px`);
});
</script>

<template>
  <div class="content-body"  ref="Nestable">
    <CommonNav title="Nestable" name="Nestable" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Light Gallery</h4>
            </div>
            <div class="sm:p-5 p-4 !pb-1">
              <Lightgallery :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom] }" id="lightgallery" class="row">
                <a :href="img" class="lg:w-1/4 md:w-1/2 mb-6" v-for="({ img }, ind) in images" :key="ind">
                  <img :src="img" alt="" style="width: 100%" class="rounded-lg" />
                </a>
              </Lightgallery>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
