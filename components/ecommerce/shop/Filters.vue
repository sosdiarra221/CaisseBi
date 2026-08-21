<script lang="ts" setup>
import noUiSlider from "nouislider";

const slider = ref<any>(null);

onMounted(() => {
  noUiSlider.create(slider.value, {
    start: [40, 346],
    connect: true,
    range: {
      min: 0,
      max: 400,
    },
  });
});
</script>

<template>
  <div class="sticky top-28 mb-6 max-md:top-0 max-md:relative">
    <div class="card">
      <div class="relative p-6 justify-between items-center flex-wrap flex pb-0">
        <h5><i class="fas fa-sort-amount-up-alt me-2"></i>Filters</h5>
        <a href="javascript:void(0);" class="text-primary">Clear All</a>
      </div>
      <div>
        <div class="px-6 mb-4 pt-4">
          <h6 class="pb-2 mb-3 border-b border-border">Categories</h6>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="ml-1.1 mt-[3px] font-semibold" for="flexCheckDefault"> Shop </label><span class="badge badge-xs bg-light text-dark float-end">2,712</span>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-1" />
            <label class="ml-1.1 mt-[3px] font-semibold" for="flexCheckDefault-1"> Watch </label><span class="badge badge-xs bg-light text-dark float-end">530</span>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-3" />
            <label class="ml-1.1 mt-[3px] font-semibold" for="flexCheckDefault-3"> Dresss </label><span class="badge badge-xs bg-light text-dark float-end">250</span>
          </div>
        </div>
        <div class="px-6 mb-4">
          <h6 class="pb-2 mb-3 border-b border-border">Price</h6>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-4" />
            <label class="ml-1.1 mt-[3px] font-semibold" for="flexCheckDefault-4"> $0 - $599 </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-5" />
            <label class="ml-1.1 mt-[3px] font-semibold" for="flexCheckDefault-5"> $0 - $599 </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-6" />
            <label class="ml-1.1 mt-[3px] font-semibold" for="flexCheckDefault-6"> $0 - $599 </label>
          </div>
        </div>
        <div class="px-6 mb-4">
          <h6 class="pb-2 mb-3 border-b border-border">Price Range</h6>
          <div class="price-slide range-slider mt-3">
            <div class="price">
              <div class="range-slider style-1">
                <div ref="slider" class="mb-3"></div>
                <span class="example-val" id="slider-margin-value-min">$40</span>
                <span class="example-val" id="slider-margin-value-max">$346</span>
              </div>
            </div>
          </div>
        </div>
        <div class="px-6 mb-4">
          <h6 class="pb-2 mb-3 border-b border-border">Discount</h6>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-7" />
            <label class="ml-1.1 mt-[3px] font-semibold" for="flexCheckDefault-7"> 0% - 20% </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-8" />
            <label class="ml-1.1 mt-[3px] font-semibold" for="flexCheckDefault-8"> 40% - 60% </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-9" />
            <label class="ml-1.1 mt-[3px] font-semibold" for="flexCheckDefault-9"> 0% - 20% </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-10" />
            <label class="ml-1.1 mt-[3px] font-semibold" for="flexCheckDefault-10"> 40% - 60% </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
