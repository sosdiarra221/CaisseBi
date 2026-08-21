<script lang="ts" setup>
import { ref } from "vue";
import { Collapse } from "vue-collapsed";
import { code1, code2, code3 } from "./CodeHeightlighter";
import HighLighter from "~/lib/HighLighter";
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
          <h4 class="uppercase text-sm">Basic Accordion</h4>
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
            <div class="accordion-default" id="accordionExample">
              <div class="border -mt-px first:rounded-t-lg last:rounded-b-lg border-border" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('one', ind)">
                  <button
                    :class="{ active: isExpanded == ind }"
                    class="accordion-button py-[11px] px-3 text-sm inline-flex items-center w-full transition font-normal"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded == ind ? true : false">
                  <div class="py-3.5 px-5 border-t border-border">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
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
          <h4 class="uppercase text-sm">Always Open Accordion</h4>
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
            <div class="accordion-default" id="accordionExample">
              <div class="border -mt-px first:rounded-t-lg last:rounded-b-lg border-border" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('two', ind)">
                  <button
                    :class="{ active: isExpanded2 == ind }"
                    class="accordion-button py-[11px] px-3 text-sm inline-flex items-center w-full transition font-normal"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded2 == ind ? true : false">
                  <div class="py-3.5 px-5 border-t border-border">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
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
          <h4 class="uppercase text-sm">Default Accordion</h4>
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
            <div class="accordion-default" id="accordionExample">
              <div class="border -mt-px first:rounded-t-lg last:rounded-b-lg border-border overflow-hidden" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('three', ind)">
                  <button
                    :class="`${isExpanded3 == ind && 'active bg-primary text-white'} accordion-button py-[11px] px-3 text-sm flex items-center w-full transition font-normal`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded3 == ind ? true : false">
                  <div class="py-3.5 px-5 border-t border-border">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
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
          <h4 class="uppercase text-sm">Accordion bordered</h4>
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
            <div class="accordion accordion-danger-solid">
              <div class="border -mt-px first:rounded-t-lg last:rounded-b-lg border-border overflow-hidden" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('four', ind)">
                  <button
                    :class="`${
                      isExpanded4 == ind && 'active !bg-danger text-white'
                    } bg-dangerlight accordion-button py-[11px] px-3 text-sm flex items-center w-full transition font-normal`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded4 == ind ? true : false">
                  <div class="py-3.5 px-5 border-2 border-danger">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
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
          <h4 class="uppercase text-sm">Accordion without space</h4>
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
            <div class="accordion accordion-no-gutter accordion-header-bg">
              <div class="-mt-px first:rounded-t-lg last:rounded-b-lg overflow-hidden" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('five', ind)">
                  <button
                    :class="`${isExpanded5 == ind && 'active'}  bg-light accordion-button py-[11px] px-3 text-sm flex items-center w-full transition font-normal`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded5 == ind ? true : false">
                  <div class="py-3.5 px-5">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
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
          <h4 class="uppercase text-sm">Accordion without space with border</h4>
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
            <div class="accordion accordion-no-gutter accordion-header-bg">
              <div class="border -mt-px first:rounded-t-lg last:rounded-b-lg border-border" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('six', ind)">
                  <button
                    :class="`${isExpanded6 == ind && 'active'}  accordion-button py-[11px] px-3 text-sm inline-flex items-center w-full transition font-normal`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded6 == ind ? true : false">
                  <div class="py-3.5 px-5 border-t border-border">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
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
          <h4 class="uppercase text-sm">Accordion indicator in right position</h4>
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
            <div class="accordion accordion-no-gutter accordion-header-bg">
              <div class="-mt-px first:rounded-t-lg last:rounded-b-lg overflow-hidden" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('saven', ind)">
                  <button
                    :class="`${
                      isExpanded7 == ind && 'active'
                    }  accordion-button py-[11px] px-3 text-sm flex items-center w-full transition font-normal bg-light pl-12 after:left-4 after:right-auto`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded7 == ind ? true : false">
                  <div class="py-3.5 px-5">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
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
          <h4 class="uppercase text-sm">Accordion with icon</h4>
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
            <div class="accordion accordion-with-icon">
              <div class="border border-border -mt-px first:rounded-t-lg last:rounded-b-lg overflow-hidden" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('eight', ind)">
                  <button
                    :class="`${isExpanded8 == ind && 'active'}  accordion-button py-[11px] px-3 text-sm flex items-center w-full transition font-normal bg-bodybg`"
                    type="button"
                  >
                    <span class="absolute right-auto left-[25px] font-['themify'] before:content-['\e645']"></span>
                    <span class="pl-10">Accordion Item #{{ ind + 1 }}</span>
                  </button>
                </h2>
                <Collapse :when="isExpanded8 == ind ? true : false">
                  <div class="py-3.5 px-5 border-t border-border">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
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
          <h4 class="uppercase text-sm">Accordion header background</h4>
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
            <div class="accordion accordion-header-bg accordion-bordered">
              <div class="-mt-px first:rounded-t-lg last:rounded-b-lg overflow-hidden" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('nine', ind)">
                  <button
                    :class="`${isExpanded9 == ind && 'active'} accordion-button py-[11px] px-3 text-sm flex items-center
                   w-full transition font-normal ${ind == 1 ? 'bg-info' : 'bg-primary'}  text-white`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded9 == ind ? true : false">
                  <div class="py-3.5 px-5 border-t border-border">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
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
          <h4 class="uppercase text-sm">Accordion solid background</h4>
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
            <div class="accordion accordion-header-bg accordion-bordered">
              <div class="-mt-px first:rounded-t-lg last:rounded-b-lg overflow-hidden" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('ten', ind)">
                  <button
                    :class="`${isExpanded10 == ind && 'active'} accordion-button py-[11px] px-3 text-sm flex items-center
                   w-full transition font-normal bg-primary text-white`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded10 == ind ? true : false">
                  <div class="py-3.5 px-5 border-t border-border">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
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
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Accordion active background</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.activebackground = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.activebackground == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.activebackground = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.activebackground == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.activebackground == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="accordion-default" id="accordionExample">
              <div class="border -mt-px first:rounded-t-lg last:rounded-b-lg border-border overflow-hidden" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('eleven', ind)">
                  <button
                    :class="`${
                      isExpanded11 == ind && 'active !bg-info !text-white'
                    } accordion-button py-[11px] px-3 text-sm flex items-center w-full transition font-normal bg-bodybg`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded11 == ind ? true : false">
                  <div class="py-3.5 px-5 border-t border-border">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.activebackground == 'Basichtml'"
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
          <h4 class="uppercase text-sm">Accordion header shadow</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.headershadow = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.headershadow == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.headershadow = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.headershadow == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.headershadow == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="accordion accordion-header-shadow accordion-rounded-lg">
              <div class="-mt-px first:rounded-t-lg last:rounded-b-lg" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('twelve', ind)">
                  <button
                    :class="`${
                      isExpanded12 == ind && 'active'
                    } accordion-button py-[11px] px-3 text-sm inline-flex items-center shadow-accordion w-full transition border border-border font-normal`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded12 == ind ? true : false">
                  <div class="py-3.5 px-5">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.headershadow == 'Basichtml'"
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
          <h4 class="uppercase text-sm">Accordion rounded stylish</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.roundedstylish = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.roundedstylish == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.roundedstylish = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.roundedstylish == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.roundedstylish == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="accordion-default" id="accordionExample">
              <div class="border -mt-px first:rounded-t-lg last:rounded-b-lg border-border overflow-hidden" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('turnitin', ind)">
                  <button
                    :class="`${
                      isExpanded13 == ind && '!bg-primarylight !text-primary active'
                    } accordion-button py-[11px] px-3 text-sm flex items-center w-full transition font-normal bg-bodybg`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded13 == ind ? true : false">
                  <div class="py-3.5 px-5 border-t border-border">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.roundedstylish == 'Basichtml'"
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
          <h4 class="uppercase text-sm">Accordion gradient</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-13" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.gradient = 'BasicPreview'"
              :class="{ ' !text-white bg-primary': tab.gradient == 'BasicPreview' }"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="py-2 px-4 text-primary rounded-md duration-300"
              @click.prevent="tab.gradient = 'Basichtml'"
              :class="{ ' !text-white bg-primary': tab.gradient == 'Basichtml' }"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent-13">
        <Transition
          v-show="tab.gradient == 'BasicPreview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="accordion-default" id="accordionExample">
              <div class="-mt-px first:rounded-t-lg last:rounded-b-lg overflow-hidden" v-for="(_, ind) in 3" :key="ind">
                <h2 class="text-dark" @click="toggleHandler('fortin', ind)">
                  <button
                    :class="`${
                      isExpanded14 == ind && 'active'
                    } accordion-button py-[11px] px-3 text-sm flex items-center w-full transition font-normal bg-[linear-gradient(to_right,rgba(186,1,181,0.85)_0%,rgba(103,25,255,0.85)_100%)] text-white`"
                    type="button"
                  >
                    Accordion Item #{{ ind + 1 }}
                  </button>
                </h2>
                <Collapse :when="isExpanded14 == ind ? true : false">
                  <div class="py-3.5 px-5 bg-[linear-gradient(to_right,rgba(186,1,181,0.85)_0%,rgba(103,25,255,0.85)_100%)] text-white">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.gradient == 'Basichtml'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <HighLighter :code="code2" />
        </Transition>
      </div>
    </div>
  </div>
</template>
