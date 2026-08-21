<script lang="ts" setup>
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";
import Prism from "~/lib/HighLighter";
import { multitable } from "./CodeHeightlighter";

const { code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14 } = multitable;

const tab = reactive({
  basic: "Preview",
  always: "Preview",
  default: "Preview",
  bordered: "Preview",
  withoutspace: "Preview",
  spacewithborder: "Preview",
  rightposition: "Preview",
  withicon: "Preview",
  headerbackground: "Preview",
  solidbackground: "Preview",
  activebackground: "Preview",
  headershadow: "Preview",
  roundedstylish: "Preview",
  gradient: "Preview",
  alertsocial: "Preview",
  messagealert: "Preview",
  withsolidcolor: "Preview",
  lefticonbig: "Preview",
});
</script>

<template>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'Preview' }" id="basic-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Recent Payments Queue</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.basic = 'Preview'" :class="{ ' !text-white bg-primary': tab.basic == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.basic = 'html'" :class="{ ' !text-white bg-primary': tab.basic == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <!--tab-content-->
      <div class="tab-content" id="myTabContent">
        <Transition
          v-show="tab.basic == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[36rem] w-full">
                <thead>
                  <tr>
                    <th class="text-base text-dark tracking-[0.5px]" style="width: 80px"><strong class="font-bold">#</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold">PATIENT</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold">DR NAME</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold">DATE</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold">STATUS</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold">PRICE</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-base text-dark border-t border-border"><strong>01</strong></td>
                    <td class="border-t border-border">Mr. Bobby</td>
                    <td class="border-t border-border">Dr. Jackson</td>
                    <td class="border-t border-border">01 August 2020</td>
                    <td class="border-t border-border"><span class="badge text-success bg-successlight">Successful</span></td>
                    <td class="border-t border-border">$21.56</td>
                    <td class="border-t border-border text-right">
                      <CustomeDropDown class="relative">
                        <template #trigger>
                          <button type="button" class="btn size-7.5 !leading-8 !p-0 text-center bg-successlight hover:shadow-btnsuccess duration-300">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle fill="var(--text-dark)" cx="5" cy="12" r="2"></circle>
                                <circle fill="var(--text-dark)" cx="12" cy="12" r="2"></circle>
                                <circle fill="var(--text-dark)" cx="19" cy="12" r="2"></circle>
                              </g>
                            </svg>
                          </button>
                        </template>
                        <template #menu>
                          <div class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                            <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                            <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                          </div>
                        </template>
                      </CustomeDropDown>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-base text-dark border-t border-border"><strong>02</strong></td>
                    <td class="border-t border-border">Mr. Bobby</td>
                    <td class="border-t border-border">Dr. Jackson</td>
                    <td class="border-t border-border">01 August 2020</td>
                    <td class="border-t border-border"><span class="badge text-danger bg-dangerlight">Canceled</span></td>
                    <td class="border-t border-border">$21.56</td>
                    <td class="border-t border-border text-right">
                      <CustomeDropDown class="relative">
                        <template #trigger>
                          <button type="button" class="btn size-7.5 !leading-8 !p-0 text-center bg-successlight hover:shadow-btnsuccess duration-300">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle fill="var(--text-dark)" cx="5" cy="12" r="2"></circle>
                                <circle fill="var(--text-dark)" cx="12" cy="12" r="2"></circle>
                                <circle fill="var(--text-dark)" cx="19" cy="12" r="2"></circle>
                              </g>
                            </svg>
                          </button>
                        </template>
                        <template #menu>
                          <div class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                            <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                            <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                          </div>
                        </template>
                      </CustomeDropDown>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-base text-dark border-y border-border"><strong>03</strong></td>
                    <td class="border-y border-border">Mr. Bobby</td>
                    <td class="border-y border-border">Dr. Jackson</td>
                    <td class="border-y border-border">01 August 2020</td>
                    <td class="border-y border-border"><span class="badge text-warning bg-warninglight">Pending</span></td>
                    <td class="border-y border-border">$21.56</td>
                    <td class="border-y border-border text-right">
                      <CustomeDropDown class="relative">
                        <template #trigger>
                          <button type="button" class="btn size-7.5 !leading-8 !p-0 text-center bg-successlight hover:shadow-btnsuccess duration-300">
                            <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <circle fill="var(--text-dark)" cx="5" cy="12" r="2"></circle>
                                <circle fill="var(--text-dark)" cx="12" cy="12" r="2"></circle>
                                <circle fill="var(--text-dark)" cx="19" cy="12" r="2"></circle>
                              </g>
                            </svg>
                          </button>
                        </template>
                        <template #menu>
                          <div class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                            <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Edit</a>
                            <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Delete</a>
                          </div>
                        </template>
                      </CustomeDropDown>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.basic == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code1" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
      <!--/tab-content-->
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Exam Toppers</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.always = 'Preview'" :class="{ ' !text-white bg-primary': tab.always == 'Preview' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.always = 'html'" :class="{ ' !text-white bg-primary': tab.always == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab.always-content">
        <Transition
          v-show="tab.always == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[36rem] w-full ItemsCheckboxSec">
                <thead>
                  <tr>
                    <th class="text-base text-dark tracking-[0.5px]" style="width: 50px">
                      <div class="form-check mr-4">
                        <input type="checkbox" class="form-check-input checkAll size-6" id="checkInput" required />
                        <label class="ml-[0.313rem] mt-[0.113rem]" for="checkInput"></label>
                      </div>
                    </th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold">ROLL NO.</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold">NAME</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold">Email</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold">Date</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold">Status</strong></th>
                    <th class="text-base text-dark tracking-[0.5px]"><strong class="font-bold"></strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border-t border-border">
                      <div class="form-check mr-4">
                        <input type="checkbox" class="form-check-input size-6" id="customCheckBox2" required />
                        <label class="ml-[0.313rem] mt-[0.113rem]" for="customCheckBox2"></label>
                      </div>
                    </td>
                    <td class="border-t border-border"><strong>542</strong></td>
                    <td class="border-t border-border">
                      <div class="flex items-center">
                        <img src="assets/images/avatar/1.jpg" class="rounded-lg mr-2 min-w-[1.875rem]" width="24" alt="" />
                        <span class="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td class="border-t border-border">example@example.com</td>
                    <td class="border-t border-border">01 August 2020</td>
                    <td class="border-t border-border">
                      <div class="flex items-center"><i class="fa fa-circle text-success mr-1"></i> Successful</div>
                    </td>
                    <td class="border-t border-border text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fa fa-pencil"></i
                        ></a>
                        <a href="javascript:void(0);" class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300 sharp"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-t border-border">
                      <div class="form-check mr-4">
                        <input type="checkbox" class="form-check-input size-6" id="customCheckBox3" required />
                        <label class="ml-[0.313rem] mt-[0.113rem]" for="customCheckBox3"></label>
                      </div>
                    </td>
                    <td class="border-t border-border"><strong>542</strong></td>
                    <td class="border-t border-border">
                      <div class="flex items-center">
                        <img src="assets/images/avatar/2.jpg" class="rounded-lg mr-2 min-w-[1.875rem]" width="24" alt="" /> <span class="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td class="border-t border-border">example@example.com</td>
                    <td class="border-t border-border">01 August 2020</td>
                    <td class="border-t border-border">
                      <div class="flex items-center"><i class="fa fa-circle text-danger mr-1"></i> Canceled</div>
                    </td>
                    <td class="border-t border-border text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fa fa-pencil"></i
                        ></a>
                        <a href="javascript:void(0);" class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300 sharp"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-y border-border">
                      <div class="form-check mr-4">
                        <input type="checkbox" class="form-check-input size-6" id="customCheckBox4" required />
                        <label class="ml-[0.313rem] mt-[0.113rem]" for="customCheckBox4"></label>
                      </div>
                    </td>
                    <td class="border-y border-border"><strong>542</strong></td>
                    <td class="border-y border-border">
                      <div class="flex items-center">
                        <img src="assets/images/avatar/3.jpg" class="rounded-lg mr-2 min-w-[1.875rem]" width="24" alt="" /> <span class="w-space-no">Dr. Jackson</span>
                      </div>
                    </td>
                    <td class="border-y border-border">example@example.com</td>
                    <td class="border-y border-border">01 August 2020</td>
                    <td class="border-y border-border">
                      <div class="flex items-center"><i class="fa fa-circle text-warning mr-1"></i> Pending</div>
                    </td>
                    <td class="border-y border-border text-right">
                      <div class="flex">
                        <a
                          href="javascript:void(0);"
                          class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-primary hover:bg-primaryhover duration-300 mr-1"
                          ><i class="fa fa-pencil"></i
                        ></a>
                        <a href="javascript:void(0);" class="size-[1.625rem] leading-[1.625rem] rounded-lg text-center text-white bg-danger hover:bg-dangerhover duration-300 sharp"
                          ><i class="fa fa-trash"></i
                        ></a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.always == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code2" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Table Striped</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.default = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.default == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.default = 'html'" :class="{ ' !text-white bg-primary': tab.default == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.default == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[36rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium">#</th>
                    <th class="font-medium">Name</th>
                    <th class="font-medium">Status</th>
                    <th class="font-medium">Date</th>
                    <th class="font-medium text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border-t border-border">1</th>
                    <td class="border-t border-border">Kolor Tea Shirt For Man</td>
                    <td class="border-t border-border"><span class="badge text-primary bg-primarylight border border-primarylight">Sale</span></td>
                    <td class="border-t border-border">January 22</td>
                    <td class="border-t border-border text-right">$21.56</td>
                  </tr>
                  <tr>
                    <th class="border-t border-border">2</th>
                    <td class="border-t border-border">Kolor Tea Shirt For Women</td>
                    <td class="border-t border-border"><span class="badge text-white bg-success border border-success">Tax</span></td>
                    <td class="border-t border-border">January 30</td>
                    <td class="border-t border-border text-right">$55.32</td>
                  </tr>
                  <tr>
                    <th class="border-y border-border">3</th>
                    <td class="border-y border-border">Blue Backpack For Baby</td>
                    <td class="border-y border-border"><span class="badge text-white bg-danger border border-danger">Extended</span></td>
                    <td class="border-y border-border">January 25</td>
                    <td class="border-y border-border text-danger text-right">$14.85</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.default == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code3" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Table Bordered</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.withoutspace = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.withoutspace == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.withoutspace = 'html'"
              :class="{ ' !text-white bg-primary': tab.withoutspace == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.withoutspace == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium">#</th>
                    <th class="font-medium">Name</th>
                    <th class="font-medium">Status</th>
                    <th class="font-medium">Date</th>
                    <th class="font-medium text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-[#efefef] dark:bg-d-bg">
                    <th class="border-t border-border">1</th>
                    <td class="border-t border-border">Kolor Tea Shirt For Man</td>
                    <td class="border-t border-border"><span class="badge text-white bg-primary">Sale</span></td>
                    <td class="border-t border-border">January 22</td>
                    <td class="border-t border-border text-right">$21.56</td>
                  </tr>
                  <tr>
                    <th class="border-t border-border">2</th>
                    <td class="border-t border-border">Kolor Tea Shirt For Women</td>
                    <td class="border-t border-border"><span class="badge text-white bg-success">Tax</span></td>
                    <td class="border-t border-border">January 30</td>
                    <td class="border-t border-border text-right">$55.32</td>
                  </tr>
                  <tr class="bg-[#efefef] dark:bg-d-bg">
                    <th class="border-y border-border">3</th>
                    <td class="border-y border-border">Blue Backpack For Baby</td>
                    <td class="border-y border-border"><span class="badge text-white bg-danger">Extended</span></td>
                    <td class="border-y border-border">January 25</td>
                    <td class="border-y border-border text-danger text-right">$14.85</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.withoutspace == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code4" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Table Bordered</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.spacewithborder = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.spacewithborder == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.spacewithborder = 'html'"
              :class="{ ' !text-white bg-primary': tab.spacewithborder == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.spacewithborder == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium border border-border text-base">#</th>
                    <th class="font-medium border border-border text-base">Name</th>
                    <th class="font-medium border border-border text-base">Status</th>
                    <th class="font-medium border border-border text-base">Date</th>
                    <th class="font-medium text-right border border-border">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border border-t-0 border-border max-sm:font-bold">1</th>
                    <td class="border border-t-0 border-border">Kolor Tea Shirt For Man</td>
                    <td class="border border-t-0 border-border"><span class="badge text-white bg-primary">Sale</span></td>
                    <td class="border border-t-0 border-border">January 22</td>
                    <td class="border border-t-0 border-border text-right">$21.56</td>
                  </tr>
                  <tr>
                    <th class="border border-t-0 border-border max-sm:font-bold">2</th>
                    <td class="border border-t-0 border-border">Kolor Tea Shirt For Women</td>
                    <td class="border border-t-0 border-border"><span class="badge text-white bg-success">Tax</span></td>
                    <td class="border border-t-0 border-border">January 30</td>
                    <td class="border border-t-0 border-border text-right">$55.32</td>
                  </tr>
                  <tr>
                    <th class="border border-t-0 border-border max-sm:font-bold">3</th>
                    <td class="border border-t-0 border-border">Blue Backpack For Baby</td>
                    <td class="border border-t-0 border-border"><span class="badge text-white bg-danger">Extended</span></td>
                    <td class="border border-t-0 border-border">January 25</td>
                    <td class="border border-t-0 border-border text-danger text-right">$14.85</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.spacewithborder == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code5" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Table Hover</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.rightposition = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.rightposition == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.rightposition = 'html'"
              :class="{ ' !text-white bg-primary': tab.rightposition == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.rightposition == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium">#</th>
                    <th class="font-medium">Name</th>
                    <th class="font-medium">Status</th>
                    <th class="font-medium">Date</th>
                    <th class="font-medium text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-[#efefef] dark:bg-d-bg">
                    <th class="border-t border-border max-sm:font-bold">1</th>
                    <td class="border-t border-border">Kolor Tea Shirt For Man</td>
                    <td class="border-t border-border"><span class="badge text-white bg-primary border border-primary">Sale</span></td>
                    <td class="border-t border-border">January 22</td>
                    <td class="border-t border-border text-right">$21.56</td>
                  </tr>
                  <tr class="hover:bg-[#efefef] dark:bg-d-bg">
                    <th class="border-t border-border max-sm:font-bold">2</th>
                    <td class="border-t border-border">Kolor Tea Shirt For Women</td>
                    <td class="border-t border-border"><span class="badge text-white bg-success light">Tax</span></td>
                    <td class="border-t border-border">January 30</td>
                    <td class="border-t border-border text-right">$55.32</td>
                  </tr>
                  <tr class="hover:bg-[#efefef] dark:bg-d-bg">
                    <th class="border-y border-border max-sm:font-bold">3</th>
                    <td class="border-y border-border">Blue Backpack For Baby</td>
                    <td class="border-y border-border"><span class="badge text-white bg-danger">Extended</span></td>
                    <td class="border-y border-border">January 25</td>
                    <td class="border-y border-border text-danger text-right">$14.85</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.rightposition == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code6" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Hover Table</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.withicon = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.withicon == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.withicon = 'html'" :class="{ ' !text-white bg-primary': tab.withicon == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.withicon == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium" scope="col">#</th>
                    <th class="font-medium" scope="col">Product</th>
                    <th class="font-medium" scope="col">Popularity</th>
                    <th class="font-medium text-right" scope="col">Sales</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-[#efefef] dark:bg-d-bg">
                    <th class="border-t border-border">1</th>
                    <td class="border-t border-border">Air Conditioner</td>
                    <td class="border-t border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(127, 99, 244, 0.1)">
                        <div class="h-1.5 rounded-lg bg-primary" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border-t border-border text-right"><span class="badge border border-transparent bg-primarylight text-primary">70%</span></td>
                  </tr>
                  <tr class="hover:bg-[#efefef] dark:bg-d-bg">
                    <th class="border-t border-border">2</th>
                    <td class="border-t border-border">Textiles</td>
                    <td class="border-t border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(76, 175, 80, 0.1)">
                        <div class="h-1.5 rounded-lg bg-success" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border-t border-border text-right"><span class="badge border border-transparent text-white bg-success">70%</span></td>
                  </tr>
                  <tr class="hover:bg-[#efefef] dark:bg-d-bg">
                    <th class="border-t border-border">3</th>
                    <td class="border-t border-border">Milk Powder</td>
                    <td class="border-t border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(70, 74, 83, 0.1)">
                        <div class="h-1.5 rounded-lg bg-dark" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border-t border-border text-right"><span class="badge border border-transparent bg-[#312a2a33] text-white">70%</span></td>
                  </tr>
                  <tr class="hover:bg-[#efefef] dark:bg-d-bg">
                    <th class="border-t border-border">4</th>
                    <td class="border-t border-border">Vehicles</td>
                    <td class="border-t border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(255, 87, 34, 0.1)">
                        <div class="h-1.5 rounded-lg bg-danger" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border-t border-border text-right"><span class="badge border border-transparent text-white bg-danger">70%</span></td>
                  </tr>
                  <tr class="hover:bg-[#efefef] dark:bg-d-bg">
                    <th class="border-y border-border">5</th>
                    <td class="border-y border-border">Boats</td>
                    <td class="border-y border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(255, 193, 7, 0.1)">
                        <div class="h-1.5 rounded-lg bg-warning" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border-y border-border text-right"><span class="badge border border-transparent text-white bg-warning">70%</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.withicon == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code7" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Table Bordered</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.headerbackground = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.headerbackground == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.headerbackground = 'html'"
              :class="{ ' !text-white bg-primary': tab.headerbackground == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.headerbackground == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium border border-border text-base">#</th>
                    <th class="font-medium border border-border text-base">Name</th>
                    <th class="font-medium border border-border text-base">Status</th>
                    <th class="font-medium border border-border text-base">Date</th>
                    <th class="font-medium border border-border text-base text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border border-t-0 border-border">1</th>
                    <td class="border border-t-0 border-border">Kolor Tea Shirt For Man</td>
                    <td class="border border-t-0 border-border"><span class="badge bg-primary text-white">Sale</span></td>
                    <td class="border border-t-0 border-border">January 22</td>
                    <td class="border border-t-0 border-border text-right text-primary">$21.56</td>
                  </tr>
                  <tr>
                    <th class="border border-t-0 border-border">2</th>
                    <td class="border border-t-0 border-border">Kolor Tea Shirt For Women</td>
                    <td class="border border-t-0 border-border"><span class="badge bg-success text-white">Tax</span></td>
                    <td class="border border-t-0 border-border">January 30</td>
                    <td class="border border-t-0 border-border text-right text-success">$55.32</td>
                  </tr>
                  <tr>
                    <th class="border border-t-0 border-border">3</th>
                    <td class="border border-t-0 border-border">Blue Backpack For Baby</td>
                    <td class="border border-t-0 border-border"><span class="badge bg-danger text-white">Extended</span></td>
                    <td class="border border-t-0 border-border">January 25</td>
                    <td class="border border-t-0 border-border text-right text-danger">$14.85</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.headerbackground == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code7" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Bordered Table</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.solidbackground = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.solidbackground == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.solidbackground = 'html'"
              :class="{ ' !text-white bg-primary': tab.solidbackground == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.solidbackground == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium border border-border text-base" scope="col">Task</th>
                    <th class="font-medium border border-border text-base" scope="col">Progress</th>
                    <th class="font-medium border border-border text-base" scope="col">Deadline</th>
                    <th class="font-medium border border-border text-base" scope="col">Label</th>
                    <th class="font-medium text-right border border-border" scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-t-0 border-border">Air Conditioner</td>
                    <td class="border border-t-0 border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(127, 99, 244, 0.1)">
                        <div class="h-1.5 rounded-lg bg-primary" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border border-t-0 border-border">Apr 20,2018</td>
                    <td class="border border-t-0 border-border"><span class="badge border border-transparent bg-primarylight text-primary">70%</span></td>
                    <td class="border border-t-0 border-border text-right">
                      <span>
                        <a href="javascript:void(0);" class="mr-6" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a>
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-t-0 border-border">Textiles</td>
                    <td class="border border-t-0 border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(76, 175, 80, 0.1)">
                        <div class="h-1.5 rounded-lg bg-success" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border border-t-0 border-border">May 27,2018</td>
                    <td class="border border-t-0 border-border"><span class="badge border border-transparent text-white bg-success">70%</span></td>
                    <td class="border border-t-0 border-border text-right">
                      <span>
                        <a href="javascript:void(0);" class="mr-6" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a>
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-t-0 border-border">Milk Powder</td>
                    <td class="border border-t-0 border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(70, 74, 83, 0.1)">
                        <div class="h-1.5 rounded-lg bg-dark" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border border-t-0 border-border">May 18,2018</td>
                    <td class="border border-t-0 border-border"><span class="badge border border-transparent312a2a33] bg-[#312a2a33] text-white">70%</span></td>
                    <td class="border border-t-0 border-border text-right">
                      <span>
                        <a href="javascript:void(0);" class="mr-6" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a>
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-t-0 border-border">Vehicles</td>
                    <td class="border border-t-0 border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(255, 87, 34, 0.1)">
                        <div class="h-1.5 rounded-lg bg-danger" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border border-t-0 border-border">Mar 27,2018</td>
                    <td class="border border-t-0 border-border"><span class="badge border border-transparent text-white bg-danger">70%</span></td>
                    <td class="border border-t-0 border-border text-right">
                      <span>
                        <a href="javascript:void(0);" class="mr-6" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a>
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-t-0 border-border">Boats</td>
                    <td class="border border-t-0 border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(255, 193, 7, 0.1)">
                        <div class="h-1.5 rounded-lg bg-warning" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border border-t-0 border-border">Jun 28,2018</td>
                    <td class="border border-t-0 border-border"><span class="badge border border-transparent text-white bg-warning">70%</span></td>
                    <td class="border border-t-0 border-border text-right">
                      <span>
                        <a href="javascript:void(0);" class="mr-6" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a>
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.solidbackground == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code8" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Table Stripped</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.activebackground = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.activebackground == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.activebackground = 'html'"
              :class="{ ' !text-white bg-primary': tab.activebackground == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.activebackground == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium border border-border text-base" scope="col">Task</th>
                    <th class="font-medium border border-border text-base" scope="col">Progress</th>
                    <th class="font-medium border border-border text-base" scope="col">Deadline</th>
                    <th class="font-medium border border-border text-base" scope="col">Label</th>
                    <th class="font-medium text-base border border-border text-right" scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-[#efefef] dark:bg-d-bg">
                    <td class="border border-t-0 border-border">Air Conditioner</td>
                    <td class="border border-t-0 border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(127, 99, 244, 0.1)">
                        <div class="h-1.5 rounded-lg bg-primary" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border border-t-0 border-border">Apr 20,2018</td>
                    <td class="border border-t-0 border-border"><span class="badge border border-transparent text-white bg-primary light">70%</span></td>
                    <td class="border border-t-0 border-border text-right">
                      <span>
                        <a href="javascript:void(0);" class="mr-6" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a>
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-t-0 border-border">Textiles</td>
                    <td class="border border-t-0 border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(76, 175, 80, 0.1)">
                        <div class="h-1.5 rounded-lg bg-success" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border border-t-0 border-border">May 27,2018</td>
                    <td class="border border-t-0 border-border"><span class="badge border border-transparent text-white bg-success">70%</span></td>
                    <td class="border border-t-0 border-border text-right">
                      <span>
                        <a href="javascript:void(0);" class="mr-6" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a>
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a>
                      </span>
                    </td>
                  </tr>
                  <tr class="bg-[#efefef] dark:bg-d-bg">
                    <td class="border border-t-0 border-border">Milk Powder</td>
                    <td class="border border-t-0 border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(70, 74, 83, 0.1)">
                        <div class="h-1.5 rounded-lg bg-dark" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border border-t-0 border-border">May 18,2018</td>
                    <td class="border border-t-0 border-border"><span class="badge border border-transparent text-white bg-[#312a2a]">70%</span></td>
                    <td class="border border-t-0 border-border text-right">
                      <span>
                        <a href="javascript:void(0);" class="mr-6" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a>
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border border-t-0 border-border">Boats</td>
                    <td class="border border-t-0 border-border">
                      <div class="progress h-1.1 overflow-hidden" style="background: rgba(255, 193, 7, 0.1)">
                        <div class="h-1.5 rounded-lg bg-warning" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                      </div>
                    </td>
                    <td class="border border-t-0 border-border">Jun 28,2018</td>
                    <td class="border border-t-0 border-border"><span class="badge border border-transparent text-white bg-warning">70%</span></td>
                    <td class="border border-t-0 border-border text-right">
                      <span>
                        <a href="javascript:void(0);" class="mr-6" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a>
                        <a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.activebackground == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code9" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Responsive Table</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.headershadow = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.headershadow == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.headershadow = 'html'"
              :class="{ ' !text-white bg-primary': tab.headershadow == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.headershadow == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium text-base">Invoice</th>
                    <th class="font-medium text-base">User</th>
                    <th class="font-medium text-base">Date</th>
                    <th class="font-medium text-base">Amount</th>
                    <th class="font-medium text-base">Status</th>
                    <th class="font-medium text-base text-right">Country</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border-t border-border"><a href="javascript:void(0);">Order #26589</a></td>
                    <td class="border-t border-border">Herman Beck</td>
                    <td class="border-t border-border"><span class="text-muted">Oct 16, 2017</span></td>
                    <td class="border-t border-border">$45.00</td>
                    <td class="border-t border-border"><span class="badge text-white bg-success">Paid</span></td>
                    <td class="border-t border-border text-right">EN</td>
                  </tr>
                  <tr>
                    <td class="border-t border-border"><a href="javascript:void(0);">Order #58746</a></td>
                    <td class="border-t border-border">Mary Adams</td>
                    <td class="border-t border-border"><span class="text-muted">Oct 12, 2017</span></td>
                    <td class="border-t border-border">$245.30</td>
                    <td class="border-t border-border"><span class="badge text-info bg-infolight light">Shipped</span></td>
                    <td class="border-t border-border text-right">CN</td>
                  </tr>
                  <tr>
                    <td class="border-t border-border"><a href="javascript:void(0);">Order #98458</a></td>
                    <td class="border-t border-border">Caleb Richards</td>
                    <td class="border-t border-border"><span class="text-muted">May 18, 2017</span></td>
                    <td class="border-t border-border">$38.00</td>
                    <td class="border-t border-border"><span class="badge text-white bg-danger">Shipped</span></td>
                    <td class="border-t border-border text-right">AU</td>
                  </tr>
                  <tr>
                    <td class="border-y border-border"><a href="javascript:void(0);">Order #32658</a></td>
                    <td class="border-y border-border">June Lane</td>
                    <td class="border-y border-border"><span class="text-muted">Apr 28, 2017</span></td>
                    <td class="border-y border-border">$77.99</td>
                    <td class="border-y border-border"><span class="badge text-white bg-success">Paid</span></td>
                    <td class="border-y border-border text-right">FR</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.headershadow == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code10" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Heading With Background</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.roundedstylish = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.roundedstylish == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.roundedstylish = 'html'"
              :class="{ ' !text-white bg-primary': tab.roundedstylish == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.roundedstylish == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead class="thead-info">
                  <tr>
                    <th class="font-medium text-base text-white bg-info" scope="col">#</th>
                    <th class="font-medium text-base text-white bg-info" scope="col">First</th>
                    <th class="font-medium text-base text-white bg-info" scope="col">Last</th>
                    <th class="font-medium text-base text-white bg-info text-right" scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border-t border-border">1</th>
                    <td class="border-t border-border">Mark</td>
                    <td class="border-t border-border">Otto</td>
                    <td class="border-t border-border text-right">@mdo</td>
                  </tr>
                  <tr>
                    <th class="border-t border-border">2</th>
                    <td class="border-t border-border">Jacob</td>
                    <td class="border-t border-border">Thornton</td>
                    <td class="border-t border-border text-right">@fat</td>
                  </tr>
                  <tr>
                    <th class="border-y border-border">3</th>
                    <td class="border-y border-border">Larry</td>
                    <td class="border-y border-border">the Bird</td>
                    <td class="border-y border-border text-right">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.roundedstylish == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code11" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Primary Table</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.gradient = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.gradient == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button @click.prevent="tab.gradient = 'html'" :class="{ ' !text-white bg-primary': tab.gradient == 'html' }" class="py-2 px-4 text-primary rounded-md duration-300">
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.gradient == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead class="thead-info">
                  <tr>
                    <th class="font-medium text-white bg-primary" scope="col">#</th>
                    <th class="font-medium text-white bg-primary" scope="col">First</th>
                    <th class="font-medium text-white bg-primary" scope="col">Last</th>
                    <th class="font-medium text-right text-white bg-primary" scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="border-t border-border">1</th>
                    <td class="border-t border-border">Mark</td>
                    <td class="border-t border-border">Otto</td>
                    <td class="border-t border-border text-right">@mdo</td>
                  </tr>
                  <tr>
                    <th class="border-t border-border">2</th>
                    <td class="border-t border-border">Jacob</td>
                    <td class="border-t border-border">Thornton</td>
                    <td class="border-t border-border text-right">@fat</td>
                  </tr>
                  <tr>
                    <th class="border-y border-border">3</th>
                    <td class="border-y border-border">Larry</td>
                    <td class="border-y border-border">the Bird</td>
                    <td class="border-y border-border text-right">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.gradient == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code12" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Primary Table Hover</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.alertsocial = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.alertsocial == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.alertsocial = 'html'"
              :class="{ ' !text-white bg-primary': tab.alertsocial == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.alertsocial == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium text-base text-white bg-primarydark" scope="col">#</th>
                    <th class="font-medium text-base text-white bg-primarydark" scope="col">First</th>
                    <th class="font-medium text-base text-white bg-primarydark" scope="col">Last</th>
                    <th class="font-medium text-base text-white bg-primarydark text-right" scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-primary hover:bg-primary8">
                    <th class="py-3 px-[9px] border-t border-primarydark text-white">1</th>
                    <td class="border-t border-primarydark text-white">Mark</td>
                    <td class="border-t border-primarydark text-white">Otto</td>
                    <td class="border-t border-primarydark text-right text-white">@mdo</td>
                  </tr>
                  <tr class="bg-primary hover:bg-primary8">
                    <th class="py-3 px-[9px] border-t border-primarydark text-white">2</th>
                    <td class="border-t border-primarydark text-white">Jacob</td>
                    <td class="border-t border-primarydark text-white">Thornton</td>
                    <td class="border-t border-primarydark text-right text-white">@fat</td>
                  </tr>
                  <tr class="bg-primary hover:bg-primary8">
                    <th class="py-3 px-[9px] border-t border-primarydark text-white">3</th>
                    <td class="border-t border-primarydark text-white">Larry</td>
                    <td class="border-t border-primarydark text-white">the Bird</td>
                    <td class="border-t border-primarydark text-right text-white">@twitter</td>
                  </tr>
                  <tr class="bg-primary hover:bg-primary8">
                    <th class="py-3 px-[9px] border-t border-primarydark text-white">4</th>
                    <td class="border-t border-primarydark text-white">Larry</td>
                    <td class="border-t border-primarydark text-white">the Bird</td>
                    <td class="border-t border-primarydark text-right text-white">@twitter</td>
                  </tr>
                  <tr class="bg-primary hover:bg-primary8">
                    <th class="py-3 px-[9px] border-t border-primarydark text-white">5</th>
                    <td class="border-t border-primarydark text-white">Larry</td>
                    <td class="border-t border-primarydark text-white">the Bird</td>
                    <td class="border-t border-primarydark text-right text-white">@twitter</td>
                  </tr>
                  <tr class="bg-primary hover:bg-primary8">
                    <th class="py-3 px-[9px] border-t border-primarydark text-white">5</th>
                    <td class="border-t border-primarydark text-white">Larry</td>
                    <td class="border-t border-primarydark text-white">the Bird</td>
                    <td class="border-t border-primarydark text-right text-white">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.alertsocial == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code13" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="card !shadow-none !rounded-none !h-auto !border-x-0 !border-t-0 !mb-0" x-data="{ tab: 'colorAlerts' }" id="color-alerts">
      <div class="relative sm:p-7.5 p-4 !pb-0 flex justify-between items-center flex-wrap">
        <div>
          <h4 class="uppercase text-sm">Contextual Table</h4>
        </div>
        <ul class="flex p-1 rounded-md bg-primarylight max-sm:mt-2.5" id="myTab-1" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.messagealert = 'Preview'"
              :class="{ ' !text-white bg-primary': tab.messagealert == 'Preview' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Preview
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              @click.prevent="tab.messagealert = 'html'"
              :class="{ ' !text-white bg-primary': tab.messagealert == 'html' }"
              class="py-2 px-4 text-primary rounded-md duration-300"
            >
              Vue
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <Transition
          v-show="tab.messagealert == 'Preview'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="sm:p-7.5 p-4">
            <div class="overflow-x-auto">
              <table class="table text-left mb-4 min-w-[30rem] w-full">
                <thead>
                  <tr>
                    <th class="font-medium text-base">#</th>
                    <th class="font-medium text-base">Column heading</th>
                    <th class="font-medium text-base">Column heading</th>
                    <th class="font-medium text-base text-right">Column heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-active">
                    <td class="border-t border-border bg-[#e1e1e3] dark:bg-[#f4f5f933]">1</td>
                    <td class="border-t border-border bg-[#e1e1e3] dark:bg-[#f4f5f933]">Column content</td>
                    <td class="border-t border-border bg-[#e1e1e3] dark:bg-[#f4f5f933]">Column content</td>
                    <td class="border-t border-border bg-[#e1e1e3] dark:bg-[#f4f5f933] text-right">Column content</td>
                  </tr>
                  <tr class="table-primary">
                    <td class="border-t border-border text-primary bg-primarylight">1</td>
                    <td class="border-t border-border text-primary bg-primarylight">Column content</td>
                    <td class="border-t border-border text-primary bg-primarylight">Column content</td>
                    <td class="border-t border-border text-primary bg-primarylight text-right">Column content</td>
                  </tr>
                  <tr class="table-success">
                    <td class="border-t border-border text-success bg-[#2bc15533]">2</td>
                    <td class="border-t border-border text-success bg-[#2bc15533]">Column content</td>
                    <td class="border-t border-border text-success bg-[#2bc15533]">Column content</td>
                    <td class="border-t border-border text-success bg-[#2bc15533] text-right">Column content</td>
                  </tr>
                  <tr class="table-info">
                    <td class="border-t border-border text-info bg-[#461ee733]">3</td>
                    <td class="border-t border-border text-info bg-[#461ee733]">Column content</td>
                    <td class="border-t border-border text-info bg-[#461ee733]">Column content</td>
                    <td class="border-t border-border text-info bg-[#461ee733] text-right">Column content</td>
                  </tr>
                  <tr class="table-warning">
                    <td class="border-t border-border text-warning bg-[#fe802433]">4</td>
                    <td class="border-t border-border text-warning bg-[#fe802433]">Column content</td>
                    <td class="border-t border-border text-warning bg-[#fe802433]">Column content</td>
                    <td class="border-t border-border text-warning bg-[#fe802433] text-right">Column content</td>
                  </tr>
                  <tr class="table-danger">
                    <td class="border-t border-border text-danger bg-[#ff2e2e33]">5</td>
                    <td class="border-t border-border text-danger bg-[#ff2e2e33]">Column content</td>
                    <td class="border-t border-border text-danger bg-[#ff2e2e33]">Column content</td>
                    <td class="border-t border-border text-danger bg-[#ff2e2e33] text-right">Column content</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Transition>
        <Transition
          v-show="tab.messagealert == 'html'"
          enter-active-class="transition-all duration-500 easy-in-out"
          enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
          enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
        >
          <div class="p-7.5">
            <ClientOnly>
              <Prism :code="code14" />
            </ClientOnly>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
