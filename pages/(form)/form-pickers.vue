<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";

import Flatpickr from "vue-flatpickr-component";

const date = ref(new Date());
const configDatepick = ref({
  inline: false,
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  enableTime: false,
});

const configDate = ref({
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  enableTime: false,
  mode: "range",
  defaultDate: [date, date],
});

import { ref } from "vue";

const selectedColor = ref("#7ab2fa");
const selectedColor2 = ref("#fa7a7a");
const selectedColor3 = ref("#bee0ab");
const selectedGradient = ref(`#7ab2fa`);
const selectedGradient2 = ref(`#fa7a7a`);
const selectedGradient3 = ref(`#bee0ab`);

// Update gradient when color changes
const updateGradient = () => {
  const lighterShade = lightenColor(selectedColor.value, 40); // Generate a lighter shade
  selectedGradient.value = `linear-gradient(45deg, ${selectedColor.value}, ${lighterShade})`;
};

const updateGradient2 = () => {
  const lighterShade = lightenColor(selectedColor.value, 40); // Generate a lighter shade
  selectedGradient2.value = `linear-gradient(45deg, ${selectedColor2.value}, ${lighterShade})`;
};

const updateGradient3 = () => {
  const lighterShade = lightenColor(selectedColor.value, 40); // Generate a lighter shade
  selectedGradient3.value = `linear-gradient(45deg, ${selectedColor3.value}, ${lighterShade})`;
};
// Helper to lighten a color
const lightenColor = (hex: any, percent: any) => {
  let [r, g, b] = hex
    .replace(/^#/, "")
    .match(/.{1,2}/g)
    .map((c) => parseInt(c, 16));

  r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
  g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
  b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

  return `#${[r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
};
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="CkEditor" name="CkEditor" />
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="xl:w-3/4">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Date Picker</h4>
            </div>
            <div class="sm:p-5 p-4 flex-auto">
              <div class="row">
                <div class="xl:w-1/3 mb-4">
                  <div class="example">
                    <p class="mb-1 text-dark">Date Range Pick</p>
                    <Flatpickr
                      :config="configDate"
                      class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary input-daterange-datepicker"
                      type="text"
                      id="daterange"
                    />
                  </div>
                </div>
                <div class="xl:w-1/3 mb-4">
                  <div class="example">
                    <p class="mb-1 text-dark">Date Range With Time</p>

                    <Flatpickr
                      :config="configDate"
                      class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary input-daterange-timepicker"
                      name="daterange"
                      type="text"
                    />
                  </div>
                </div>
                <div class="xl:w-1/3">
                  <div class="example">
                    <p class="mb-1 text-dark">Limit Selectable Dates</p>
                    <Flatpickr
                      :config="configDate"
                      class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary input-limit-datepicker"
                      type="text"
                      name="daterange"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4">
          <!-- Card -->
          <div class="card z-auto">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Pick-Date picker</h4>
            </div>
            <div class="sm:p-5 p-4 flex-auto">
              <p class="mb-1 text-dark">Default picker</p>
              <input
                name="datepicker"
                class="datepicker-default relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary"
                id="datepicker"
              />
            </div>
          </div>
          <!-- Card -->
        </div>

        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">flatpickr</h4>
            </div>
            <div class="sm:p-5 p-4 flex-auto">
              <div class="row">
                <div class="xl:w-1/3 lg:w-1/2 mb-4">
                  <div class="relative">
                    <p class="mb-1 text-dark">Default flatpickr</p>
                    <Flatpickr
                      v-model="date"
                      :config="configDatepick"
                      type="text"
                      class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary flatpickr"
                      :placeholder="date"
                      readonly
                    />
                    <i class="fa-regular fa-calendar absolute right-3.6 bottom-3.6"></i>
                  </div>
                </div>
                <div class="xl:w-1/3 lg:w-1/2 mb-4">
                  <div class="relative">
                    <p class="mb-1 text-dark">DateTime flatpickr</p>
                    <Flatpickr
                      v-model="date"
                      :config="configDatepick"
                      type="text"
                      class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary flatpickr"
                      :placeholder="date"
                      readonly
                    />
                    <i class="fa-regular fa-calendar absolute right-3.6 bottom-3.6"></i>
                  </div>
                </div>
                <div class="xl:w-1/3 lg:w-1/2 mb-4">
                  <div class="relative">
                    <p class="mb-1 text-dark">Range flatpickr</p>
                    <Flatpickr
                      v-model="date"
                      :config="configDatepick"
                      type="text"
                      class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary flatpickr"
                      :placeholder="date"
                      readonly
                    />
                    <i class="fa-regular fa-calendar absolute right-3.6 bottom-3.6 text-body-text"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Color Picker</h4>
            </div>
            <div class="sm:p-5 p-4 flex-auto">
              <div class="row">
                <div class="xl:w-1/3 lg:w-1/2 mb-4">
                  <div class="example">
                    <p class="mb-1 text-dark">Gradient Mode</p>
                    <div class="relative">
                      <!-- Hidden native input -->
                      <input type="color" v-model="selectedColor" class="absolute inset-0 w-1/2 h-11 opacity-0 cursor-pointer" @input="updateGradient" />

                      <!-- Custom picker display -->
                      <div class="color-display h-11 rounded-lg border border-border w-1/2 flex items-center justify-between px-4" :style="{ background: selectedGradient }">
                        <span class="text-white font-medium">{{ selectedColor }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xl:w-1/3 lg:w-1/2 mb-4">
                  <div class="example">
                    <p class="mb-1 text-dark">Gradient Mode</p>
                    <div class="relative">
                      <input type="color" v-model="selectedColor2" class="absolute inset-0 w-1/2 h-11 opacity-0 cursor-pointer" @input="updateGradient2" />
                      <div class="color-display h-11 rounded-lg border border-border w-1/2 flex items-center justify-between px-4" :style="{ background: selectedGradient2 }">
                        <span class="text-white font-medium">{{ selectedColor2 }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xl:w-1/3 lg:w-1/2 mb-4">
                  <div class="example">
                    <p class="mb-1 text-dark">Gradient Mode</p>
                    <div class="relative">
                      <!-- Hidden native input -->
                      <input type="color" v-model="selectedColor3" class="absolute inset-0 w-1/2 h-11 opacity-0 cursor-pointer" @input="updateGradient3" />

                      <!-- Custom picker display -->
                      <div class="color-display h-11 rounded-lg border border-border w-1/2 flex items-center justify-between px-4" :style="{ background: selectedGradient3 }">
                        <span class="text-white font-medium">{{ selectedColor3 }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
