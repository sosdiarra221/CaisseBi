<script lang="ts" setup>
import OptionSelect from "~/components/OptionSelect.vue";
import { Collapse } from "vue-collapsed";
import MenuAccordian from "~/components/menu/MenuAccordian.vue";

const expanded = reactive({
  show1: true,
  show2: true,
  show3: true,
  show4: true,
});

const tab = ref<string>("tab-Viewall");
const select = ref(false);
</script>

<template>
  <div class="content-body">
    <div class="container">
      <!-- Row -->
      <div class="row">
        <div class="w-full">
          <div class="shadow-default rounded-lg mb-4 bg-card">
            <div class="flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.show1 = !expanded.show1">
              <div class="cpa text-base font-semibold"><i class="fa fa-list-alt mr-2"></i>Menu</div>
              <div class="tools">
                <a href="javascript:void(0);" class="inline-block">
                  <span :class="expanded.show1 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                </a>
              </div>
            </div>
            <Collapse :when="expanded.show1">
              <div class="sm:p-5 p-4 border-t border-border">
                <div class="row items-center">
                  <div class="xl:w-1/4 col-xxl-3 xl:mb-0 mb-4">
                    <h6 class="mb-0">Select a menu to edit:</h6>
                  </div>
                  <div class="xl:w-1/2 col-xxl-5 xl:mb-0 mb-4">
                    <OptionSelect
                      class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999]  nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                      :options="[{ lable: 'Select Menu' }, { lable: 'India' }, { lable: 'Information' }, { lable: 'New Menu' }, { lable: 'Page Menu' }]"
                    />
                  </div>
                  <div class="xl:w-1/4 col-xxl-4">
                    <a href="javascript:void(0);" class="btn text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover">Select</a>
                    <span class="mx-2">or</span>
                    <a href="javascript:void(0);" class="text-primary">create new menu</a>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div class="row">
            <div class="xl:w-1/3">
              <div class="shadow-default rounded-lg mb-4 bg-card">
                <div class="flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.show2 = !expanded.show2">
                  <div class="cpa text-base font-semibold">Menus</div>
                  <div class="tools">
                    <a href="javascript:void(0);" class="inline-block">
                      <span :class="expanded.show2 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                    </a>
                  </div>
                </div>
                <Collapse :when="expanded.show2">
                  <div class="sm:p-5 p-4 border-t border-border">
                    <div class="shadow-default rounded-lg mb-4 bg-card border border-border">
                      <div class="flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.show3 = !expanded.show3">
                        <div class="cpa text-base font-semibold">Page</div>
                        <div class="tools">
                          <a href="javascript:void(0);" class="inline-block">
                            <span :class="expanded.show3 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                          </a>
                        </div>
                      </div>
                      <Collapse :when="expanded.show3">
                        <div class="border-t border-border overflow-hidden transition-all duration-600" x-data="{ tab: 'tab-Viewall' }">
                          <div class="sm:p-6 p-4">
                            <ul class="tab-my nav nav-tabs flex flex-wrap" id="myTab" role="tablist">
                              <li class="nav-item">
                                <button
                                  class="my-2 mx-0.5 py-2 px-4 block rounded-lg border border-transparent duration-500"
                                  @click.prevent="tab = 'tab-Viewall'"
                                  :class="{ 'bg-primary text-white': tab == 'tab-Viewall' }"
                                >
                                  View All
                                </button>
                              </li>
                              <li class="nav-item">
                                <button
                                  class="my-2 mx-0.5 py-2 px-4 block rounded-lg border border-transparent duration-500"
                                  @click.prevent="tab = 'tab-Search'"
                                  :class="{ 'bg-primary text-white': tab == 'tab-Search' }"
                                >
                                  Search
                                </button>
                              </li>
                            </ul>
                            <div class="tab-content-area ItemsCheckboxSec">
                              <Transition enter-active-class="transition-all duration-700 easy-in-out" enter-from-class="opacity-0" enter-to-class="opacity-100" v-show="tab == 'tab-Viewall'">
                                <div class="border border-border mb-4 p-4 rounded-lg">
                                  <div class="form-check custom-checkbox">
                                    <input class="form-check-input" type="checkbox" :checked="select" value="" id="flexCheckDefault" />
                                    <label class="form-check-label ml-1.1 mt-0.5 font-semibold" for="flexCheckDefault"> Privacy Policy </label>
                                  </div>
                                  <div class="form-check custom-checkbox">
                                    <input class="form-check-input" type="checkbox" :checked="select" value="" id="flexCheckDefault-1" />
                                    <label class="form-check-label ml-1.1 mt-0.5 font-semibold" for="flexCheckDefault-1"> Contact Us </label>
                                  </div>
                                  <div class="form-check custom-checkbox">
                                    <input class="form-check-input" type="checkbox" :checked="select" value="" id="flexCheckDefault-2" />
                                    <label class="form-check-label ml-1.1 mt-0.5 font-semibold" for="flexCheckDefault-2"> Important Information </label>
                                  </div>
                                  <div class="form-check custom-checkbox">
                                    <input class="form-check-input" type="checkbox" :checked="select" value="" id="flexCheckDefault-3" />
                                    <label class="form-check-label ml-1.1 mt-0.5 font-semibold" for="flexCheckDefault-3"> About Us </label>
                                  </div>
                                  <div class="form-check custom-checkbox">
                                    <input class="form-check-input" type="checkbox" :checked="select" value="" id="flexCheckDefault-4" />
                                    <label class="form-check-label ml-1.1 mt-0.5 font-semibold" for="flexCheckDefault-4"> Dummy Co </label>
                                  </div>
                                </div>
                              </Transition>
                              <Transition enter-active-class="transition-all duration-700 easy-in-out" enter-from-class="opacity-0" enter-to-class="opacity-100" v-show="tab == 'tab-Search'">
                                <div class="border border-border mb-4 p-2.5 rounded-lg">
                                  <label for="exampleFormControlInput1" class="form-label text-secondary">Search</label>
                                  <input
                                    type="text"
                                    class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                    id="exampleFormControlInput1"
                                    placeholder="Enter Page Name"
                                  />
                                </div>
                              </Transition>
                              <div class="flex items-center flex-wrap mb-2">
                                <a @click="select = true" href="javascript:void(0);" class="checkAllInput hover:text-primary">Select All</a><span class="mx-2">|</span>
                                <a @click="select = false" href="javascript:void(0);" class="unCheckAllInput hover:text-primary">Deselect All</a>
                              </div>
                              <a class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mt-2.5">Add to Menu</a>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                    <div class="shadow-default rounded-lg mb-4 bg-card border border-border">
                      <div class="flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.show4 = !expanded.show4">
                        <div class="cpa text-base font-semibold">Links</div>
                        <div class="tools">
                          <a href="javascript:void(0);" class="inline-block">
                            <span :class="expanded.show4 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                          </a>
                        </div>
                      </div>
                      <Collapse :when="expanded.show4">
                        <div class="sm:p-5 p-4 border-t border-border">
                          <div class="row items-center">
                            <div class="xl:w-1/3 mb-4">
                              <label class="text-secondary">URL :</label>
                            </div>
                            <div class="xl:w-2/3 mb-4">
                              <input type="text" class="form-control relative h-11 border border-border block rounded-lg py-1.5 px-3 duration-500 focus:border-primary w-full" placeholder="" />
                            </div>
                            <div class="xl:w-1/3">
                              <label class="xl:mb-0 text-nowrap text-secondary">Link Text :</label>
                            </div>
                            <div class="xl:w-2/3">
                              <input
                                type="text"
                                class="form-control relative h-11 border border-border block rounded-lg py-1.5 px-3 duration-500 focus:border-primary w-full"
                                placeholder="Menu items"
                              />
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
            <MenuAccordian />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
