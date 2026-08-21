<script lang="ts" setup>
import { ref } from "vue";
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

const tabPanel = ref<string>("list-home");
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
          <h4 class="uppercase text-sm">Basic List Group</h4>
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
            <div class="basic-list-group">
              <ul class="list-group">
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">Cras justo odio</li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">
                  Dapibus ac facilisis in
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">Morbi leo risus</li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">
                  Porta ac consectetur ac
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">
                  Vestibulum at eros
                </li>
              </ul>
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
          <h4 class="uppercase text-sm">List Active items</h4>
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
            <div class="basic-list-group">
              <ul class="list-group">
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight !bg-primary !text-white">
                  Cras justo odio
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">
                  Dapibus ac facilisis in
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">Morbi leo risus</li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">
                  Porta ac consectetur ac
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">
                  Vestibulum at eros
                </li>
              </ul>
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
          <h4 class="uppercase text-sm">List Disabled items</h4>
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
            <div class="basic-list-group">
              <ul class="list-group">
                <li
                  class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight !bg-[#1F2025] !text-white pointer-events-none"
                >
                  Cras justo odio
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">
                  Dapibus ac facilisis in
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">Morbi leo risus</li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">
                  Porta ac consectetur ac
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">
                  Vestibulum at eros
                </li>
              </ul>
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
          <h4 class="uppercase text-sm">Links and buttons items</h4>
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
            <div class="basic-list-group">
              <div class="list-group">
                <a
                  href="javascript:void(0);"
                  class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight !bg-primary !text-white"
                  >Cras justo odio
                </a>
                <a
                  href="javascript:void(0);"
                  class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white"
                  >Dapibus ac facilisis in</a
                >
                <a
                  href="javascript:void(0);"
                  class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white"
                  >Morbi leo risus</a
                >
                <a
                  href="javascript:void(0);"
                  class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white"
                  >Porta ac consectetur ac</a
                >
                <a
                  href="javascript:void(0);"
                  class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight !bg-[#1F2025] !text-white pointer-events-none"
                  >Vestibulum at eros</a
                >
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
          <h4 class="uppercase text-sm">Flush</h4>
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
            <div class="basic-list-group">
              <ul class="list-group list-group-flush">
                <li class="block py-4 px-6 hover:bg-primarylight dark:text-white ">Cras justo odio</li>
                <li class="block py-4 px-6 hover:bg-primarylight dark:text-white ">Dapibus ac facilisis in</li>
                <li class="block py-4 px-6 hover:bg-primarylight dark:text-white ">Morbi leo risus</li>
                <li class="block py-4 px-6 hover:bg-primarylight dark:text-white ">Porta ac consectetur ac</li>
                <li class="block py-4 px-6 hover:bg-primarylight dark:text-white ">Vestibulum at eros</li>
              </ul>
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
          <h4 class="uppercase text-sm">With badges</h4>
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
            <div class="basic-list-group">
              <ul class="list-group">
                <li
                  class="py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight flex justify-between items-center dark:text-white"
                >
                  Cras justo odio <span class="badge bg-primary text-white">14</span>
                </li>
                <li
                  class="py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight flex justify-between items-center dark:text-white"
                >
                  Dapibus ac facilisis in <span class="badge bg-primary text-white">2</span>
                </li>
                <li
                  class="py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight flex justify-between items-center dark:text-white"
                >
                  Cras justo odio <span class="badge bg-primary text-white">14</span>
                </li>
                <li
                  class="py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight flex justify-between items-center dark:text-white"
                >
                  Morbi leo risus <span class="badge bg-primary text-white">1</span>
                </li>
                <li
                  class="py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight flex justify-between items-center dark:text-white"
                >
                  Morbi leo risus <span class="badge bg-primary text-white">1</span>
                </li>
              </ul>
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
          <h4 class="uppercase text-sm">Custom content</h4>
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
            <div class="basic-list-group">
              <div class="list-group">
                <a
                  href="javascript:void(0);"
                  class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight !bg-primary !text-white"
                >
                  <div class="flex w-full justify-between">
                    <h5 class="mb-4 text-white">List group item heading</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1 text-white sm:text-sm">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small>Donec id elit non mi porta.</small>
                </a>
                <a
                  href="javascript:void(0);"
                  class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white"
                >
                  <div class="flex w-full justify-between">
                    <h5 class="mb-4">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1 dark:text-white sm:text-sm">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
                <a
                  href="javascript:void(0);"
                  class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white"
                >
                  <div class="flex w-full justify-between">
                    <h5 class="mb-4">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1 dark:text-white sm:text-sm">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  <small class="text-muted">Donec id elit non mi porta.</small>
                </a>
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
          <h4 class="uppercase text-sm">Contextual</h4>
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
            <div class="basic-list-group">
              <ul class="list-group">
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white">
                  Dapibus ac facilisis in
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight text-primary">
                  This is a primary list group item
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight text-secondary">
                  This is a secondary list group item
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight text-success">
                  This is a success list group item
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight text-danger">
                  This is a danger list group item
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight text-warning">
                  This is a warning list group item
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight text-info">
                  This is a info list group item
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight text-dark dark:text-white">
                  This is a light list group item
                </li>
                <li class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight text-dark dark:text-white">
                  This is a dark list group item
                </li>
              </ul>
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
          <h4 class="uppercase text-sm">List Tab</h4>
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
            <div class="basic-list-group">
              <div class="row" x-data="{ tab: 'list-home' }">
                <div class="lg:w-1/2 xl:w-1/4 col-xxl-3">
                  <div class="list-group mb-4" id="list-tab1" role="tablist">
                    <a
                      class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white !text-white !bg-primary"
                      @click.prevent="tabPanel = 'list-home'"
                      :class="{ ' !text-white !bg-primary': tabPanel == 'list-home' }"
                      >Home</a
                    >
                    <a
                      class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white"
                      @click.prevent="tabPanel = 'list-profile'"
                      :class="{ ' !text-white !bg-primary': tabPanel == 'list-profile' }"
                      >Profile</a
                    >
                    <a
                      class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white"
                      @click.prevent="tabPanel = 'list-messages'"
                      :class="{ ' !text-white !bg-primary': tabPanel == 'list-messages' }"
                      >Messages</a
                    >
                    <a
                      class="block py-4 px-6 border border-border -mt-px first:rounded-t-lg last:rounded-b-lg first:mt-0 hover:bg-primarylight dark:text-white"
                      @click.prevent="tabPanel = 'list-settings'"
                      :class="{ ' !text-white !bg-primary': tabPanel == 'list-settings' }"
                      >Settings</a
                    >
                  </div>
                </div>
                <div class="lg:w-1/2 xl:w-3/4 col-xxl-9">
                  <div class="tab-content" id="nav-tabContent">
                    <Transition
                      v-show="tabPanel == 'list-home'"
                      enter-active-class="transition-all duration-500 easy-in-out"
                      enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
                      enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
                    >
                      <template>
                        <h4 class="mb-6">Home Tab Content</h4>
                        <p class="mb-4">
                          Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat
                          proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip
                          nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.
                        </p>
                      </template>
                    </Transition>
                    <Transition
                      v-show="tabPanel == 'list-profile'"
                      role="tabpanel'"
                      enter-active-class="transition-all duration-500 easy-in-out"
                      enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
                      enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
                    >
                      <template>
                        <h4 class="mb-6">Profile Tab Content</h4>
                        <p class="mb-4">
                          Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem
                          culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi
                          culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.
                        </p>
                      </template>
                    </Transition>
                    <Transition
                      v-show="tabPanel == 'list-messages'"
                      enter-active-class="transition-all duration-500 easy-in-out"
                      enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
                      enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
                    >
                      <template>
                        <template>
                          <h4 class="mb-6">Message Tab Content</h4>
                          <p class="mb-4">
                            Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet
                            cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum
                            id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla
                            laborum elit adipisicing pariatur cillum.
                          </p>
                        </template>
                      </template>
                    </Transition>
                    <Transition
                      v-show="tabPanel == 'list-settings'"
                      enter-active-class="transition-all duration-500 easy-in-out"
                      enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
                      enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
                    >
                      <template>
                        <h4 class="mb-6">Settings Tab Content</h4>
                        <p class="mb-4">
                          Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris
                          sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure
                          commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor
                          eiusmod eu pariatur culpa mollit in irure.
                        </p>
                      </template>
                    </Transition>
                  </div>
                </div>
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
</template>
