<script lang="ts" setup>
import { ref } from "vue";
import { code1, code2, code3 } from "./CodeHeightlighter";
import HighLighter from "~/lib/HighLighter";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";
// import { component as VueCodeHighlight } from 'vue-code-highlight';

const tab = reactive({
  basic: "BasicPreview",
  always: "BasicPreview",
  default: "BasicPreview",
  bordered: "BasicPreview",
  withoutspace: "BasicPreview",
  spacewithborder: "BasicPreview",
  rightposition: "BasicPreview",
  withicon: "BasicPreview",
  headerbackground: "BasicPreview",
  solidbackground: "BasicPreview",
  activebackground: "BasicPreview",
  headershadow: "BasicPreview",
  roundedstylish: "BasicPreview",
  gradient: "BasicPreview",
});
const isExpanded = ref<null | number>(null);
const isExpanded2 = ref<null | number>(0);
const isExpanded3 = ref<null | number>(0);
const isExpanded4 = ref<null | number>(0);
const isExpanded5 = ref<null | number>(0);
const isExpanded6 = ref<null | number>(0);
const isExpanded7 = ref<null | number>(0);
const isExpanded8 = ref<null | number>(0);
const isExpanded9 = ref<null | number>(0);
const isExpanded10 = ref<null | number>(0);
const isExpanded11 = ref<null | number>(0);
const isExpanded12 = ref<null | number>(0);
const isExpanded13 = ref<null | number>(0);
const isExpanded14 = ref<null | number>(0);

const toggleHandler = (category: string, index: number) => {
  switch (category) {
    case "one":
      if (isExpanded.value == index) {
        isExpanded.value = null;
      } else {
        isExpanded.value = index;
      }
      break;
    case "two":
      if (isExpanded2.value == index) {
        isExpanded2.value = null;
      } else {
        isExpanded2.value = index;
      }
      break;
    case "three":
      if (isExpanded3.value == index) {
        isExpanded3.value = null;
      } else {
        isExpanded3.value = index;
      }
      break;
    case "four":
      if (isExpanded4.value == index) {
        isExpanded4.value = null;
      } else {
        isExpanded4.value = index;
      }
      break;
    case "five":
      if (isExpanded5.value == index) {
        isExpanded5.value = null;
      } else {
        isExpanded5.value = index;
      }
      break;
    case "six":
      if (isExpanded6.value == index) {
        isExpanded6.value = null;
      } else {
        isExpanded6.value = index;
      }
      break;
    case "saven":
      if (isExpanded7.value == index) {
        isExpanded7.value = null;
      } else {
        isExpanded7.value = index;
      }
      break;
    case "nine":
      if (isExpanded9.value == index) {
        isExpanded9.value = null;
      } else {
        isExpanded9.value = index;
      }
      break;
    case "ten":
      if (isExpanded10.value == index) {
        isExpanded10.value = null;
      } else {
        isExpanded10.value = index;
      }
      break;
    case "eleven":
      if (isExpanded11.value == index) {
        isExpanded11.value = null;
      } else {
        isExpanded11.value = index;
      }
      break;
    case "twelve":
      if (isExpanded12.value == index) {
        isExpanded12.value = null;
      } else {
        isExpanded12.value = index;
      }
      break;
    case "turnitin":
      if (isExpanded13.value == index) {
        isExpanded13.value = null;
      } else {
        isExpanded13.value = index;
      }
      break;
    case "fortin":
      if (isExpanded14.value == index) {
        isExpanded14.value = null;
      } else {
        isExpanded14.value = index;
      }
      break;
  }
};
</script>

<template>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Button group</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.basic = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.basic == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.basic = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.basic == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>

      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.basic == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="btn-group relative inline-flex align-middle rounded-lg">
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary focus:bg-primaryhover focus:shadow-btnprimary text-white">Left</button>
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary focus:bg-primaryhover focus:shadow-btnprimary text-white">Middle</button>
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary focus:bg-primaryhover focus:shadow-btnprimary text-white">Right</button>
            </div>
          </div>
        </Transition>

        <Transition
          v-show="tab.basic == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
          class="p-7.5 bg-black"
        >
          <HighLighter :code="code1" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Vertical dropdown variation</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.always = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.always == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.always = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.always == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.always == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="btn-group relative inline-flex align-middle rounded-lg">
              <button type="button" class="btn bg-danger hover:bg-dangerhover hover:shadow-btndanger focus:bg-dangerhover focus:shadow-btndanger text-white">Left</button>
              <button type="button" class="btn bg-warning hover:bg-warninghover hover:shadow-btnwarning focus:bg-warninghover focus:shadow-btnwarning text-white">Middle</button>
              <button type="button" class="btn bg-success hover:bg-successhover hover:shadow-btnsuccess focus:bg-successhover focus:shadow-btnsuccess text-white">Right</button>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.always == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
          class="p-7.5 bg-black"
        >
          <HighLighter :code="code2" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Button group</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.default = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.default == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.default = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.default == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.default == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="btn-group relative inline-flex align-middle rounded-lg">
              <button type="button" class="btn border border-primary first:border-r-0 last:border-l-0 text-primary hover:bg-primaryhover hover:shadow-btnprimary hover:text-white">
                Left
              </button>
              <button type="button" class="btn border border-primary first:border-r-0 last:border-l-0 text-primary hover:bg-primaryhover hover:shadow-btnprimary hover:text-white">
                Middle
              </button>
              <button type="button" class="btn border border-primary first:border-r-0 last:border-l-0 text-primary hover:bg-primaryhover hover:shadow-btnprimary hover:text-white">
                Right
              </button>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.default == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="code3" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Checkbox Button Groups</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.bordered = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.bordered == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.bordered = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.bordered == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.bordered == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="btn-group relative inline-flex align-middle rounded-lg">
              <input type="checkbox" class="btn-check" id="btncheck1" />
              <label class="btn border border-primary !rounded-s-lg border-r-0 last:border-l-0 text-primary btn-outline-primary" for="btncheck1">Checkbox 1</label>

              <input type="checkbox" class="btn-check" id="btncheck2" />
              <label class="btn border border-primary last:border-l-0 text-primary btn-outline-primary" for="btncheck2">Checkbox 2</label>

              <input type="checkbox" class="btn-check" id="btncheck3" />
              <label class="btn border border-primary last:border-l-0 text-primary btn-outline-primary" for="btncheck3">Checkbox 3</label>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.bordered == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="code1" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Radio Button Groups</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.withoutspace = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.withoutspace == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.withoutspace = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.withoutspace == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.withoutspace == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="btn-group relative inline-flex align-middle rounded-lg">
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" checked />
              <label class="btn border border-primary !rounded-s-lg border-r-0 last:border-l-0 text-primary btn-outline-primary" for="btnradio1">Radio 1</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio2" />
              <label class="btn border border-primary last:border-l-0 text-primary btn-outline-primary" for="btnradio2">Radio 2</label>

              <input type="radio" class="btn-check" name="btnradio" id="btnradio3" />
              <label class="btn border border-primary last:border-l-0 text-primary btn-outline-primary" for="btnradio3">Radio 3</label>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.withoutspace == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="code2" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Button toolbar</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.spacewithborder = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.spacewithborder == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.spacewithborder = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.spacewithborder == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.spacewithborder == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="btn-group relative inline-flex align-middle rounded-lg me-2 mb-2">
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">1</button>
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">2</button>
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">3</button>
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">4</button>
            </div>
            <div class="btn-group relative inline-flex align-middle rounded-lg me-2 mb-2">
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">5</button>
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">6</button>
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">7</button>
            </div>
            <div class="btn-group relative inline-flex align-middle rounded-lg mb-2">
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !rounded-lg">8</button>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.spacewithborder == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="code3" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Button Sizing</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.spacewithborder = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.spacewithborder == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.spacewithborder = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.spacewithborder == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.spacewithborder == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="btn-group relative inline-flex align-middle rounded-lg mb-2 btn-group-lg">
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Left</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Middle</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Right</button>
            </div>
            {{ " " }}
            <div class="btn-group relative inline-flex align-middle rounded-lg mb-2">
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Left</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Middle</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Right</button>
            </div>
            {{ " " }}
            <div class="btn-group relative inline-flex align-middle rounded-lg mb-2 btn-group-sm">
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Left</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Middle</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Right</button>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.withoutspace == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="code1" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Button Nesting</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.withicon = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.withicon == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.withicon = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.withicon == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.withicon == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="btn-group relative inline-flex align-middle rounded-lg">
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">1</button>
              <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">2</button>
              <CustomeDropDown role="group" class="btn-group relative inline-flex align-middle rounded-lg">
                <template #trigger>
                  <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white w-full !rounded-none dropdown-toggle" type="button">Dropdown</button>
                </template>
                <template #menu>
                  <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full min-w-40 mt-1 z-1">
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Dropdown link</a>
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Dropdown link</a>
                  </div>
                </template>
              </CustomeDropDown>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.withicon == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="code2" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Vertical variation</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.headerbackground = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.headerbackground == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.headerbackground = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.headerbackground == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.headerbackground == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="relative inline-flex flex-col items-start justify-center btn-group-vertical">
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Button</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Button</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Button</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Button</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Button</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" type="button">Button</button>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.headerbackground == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="code3" />
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Vertical dropdown variation</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.solidbackground = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.solidbackground == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.solidbackground = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.solidbackground == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.solidbackground == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div role="group" class="relative inline-flex flex-col items-start justify-center btn-group-vertical">
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white w-full" type="button">Button</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white w-full" type="button">Button</button>
              <CustomeDropDown role="group" class="btn-group relative inline-flex align-middle rounded-lg">
                <template #trigger>
                  <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white w-full !rounded-none dropdown-toggle" type="button">Dropdown</button>
                </template>
                <template #menu>
                  <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full min-w-40 mt-1 z-1">
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Dropdown link</a>
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Dropdown link</a>
                  </div>
                </template>
              </CustomeDropDown>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white w-full" type="button">Button</button>
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white w-full" type="button">Button</button>
              <CustomeDropDown role="group" class="btn-group relative inline-flex align-middle rounded-lg">
                <template #trigger>
                  <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white w-full !rounded-none dropdown-toggle" type="button">Dropdown</button>
                </template>
                <template #menu>
                  <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full min-w-40 mt-1 z-1">
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Dropdown link</a>
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Dropdown link</a>
                  </div>
                </template>
              </CustomeDropDown>

              <CustomeDropDown role="group" class="btn-group relative inline-flex align-middle rounded-lg">
                <template #trigger>
                  <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white w-full !rounded-none dropdown-toggle" type="button">Dropdown</button>
                </template>
                <template #menu>
                  <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full min-w-40 mt-1 z-1">
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Dropdown link</a>
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Dropdown link</a>
                  </div>
                </template>
              </CustomeDropDown>

              <CustomeDropDown role="group" class="btn-group relative inline-flex align-middle rounded-lg">
                <template #trigger>
                  <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white w-full !rounded-t-none !rounded-b-lg dropdown-toggle" type="button">
                    Dropdown
                  </button>
                </template>
                <template #menu>
                  <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full min-w-40 mt-1 z-1">
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Dropdown link</a>
                    <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Dropdown link</a>
                  </div>
                </template>
              </CustomeDropDown>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.solidbackground == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="code1" />
        </Transition>
      </div>
    </div>
  </div>
</template>
