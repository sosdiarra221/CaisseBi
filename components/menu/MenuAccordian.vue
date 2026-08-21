<script lang="ts" setup>
import { Collapse } from "vue-collapsed";

const accordian = reactive({
  show1: true,
  show2: true,
  show3: true,
  show4: true,
  show5: true,
});
</script>

<template>
  <div class="xl:w-2/3">
    <div class="shadow-default rounded-lg mb-4 bg-card">
      <div class="content-title flex justify-between items-center py-4 sm:px-6 px-[1.2rem] flex-wrap">
        <div class="cpa text-base font-semibold flex items-center flex-wrap">
          <span class="pr-4 sm:pb-0 pb-4">Menu Name</span>
          <input
            type="text"
            class="py-1.5 px-3 h-11 border border-border rounded-lg block duration-500 focus:border-primary bg-transparent text-inherited w-auto sm:mb-0 mb-4"
            placeholder="information"
          />
        </div>
        <button type="button" class="btn btn-sm bg-secondary text-white hover:shadow-btnsecondary sm:ml-auto mb-2 sm:mb-0">Save Menu</button>
      </div>
      <div class="rounded-0 border-t border-border">
        <div class="sm:p-5 p-4">
          <h6 class="mb-0">Menu Structure</h6>
          <p class="mb-4">Add Menus items from the column on the left.</p>
          <div class="xl:w-7/12">
            <div class="dd" id="nestable">
              <ol class="dd-list">
                <li class="dd-item menu-ac-item relative" data-id="1">
                  <div>
                    <div class="mb-5">
                      <div class="card-toggle-btn duration-500 border border-border cursor-pointer relative rounded-lg" @click="accordian.show1 = !accordian.show1">
                        <div class="move-media dd-handle py-2 px-4 flex h-full bg-none absolute top-0 text-xl left-0 text-white items-center cursor-all-scroll bg-primary m-0 rounded-s-md border-0">
                          <i class="fa-solid fa-arrows-up-down-left-right"></i>
                        </div>
                        <button class="contact relative rounded-lg duration-500 pl-[65px] py-4 pr-7 flex items-center justify-between w-full text-sm">
                          Contact Us
                          <i :class="`${!accordian.show1 ? 'ti-plus' : 'ti-minus'} ac-icon`"></i>
                        </button>
                      </div>
                      <Collapse :when="accordian.show1">
                        <div class="content">
                          <div class="py-4 px-5 mt-[-5px] rounded-es-md rounded-ee-md border border-border border-t-0">
                            <div class="row">
                              <div class="w-full">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">URL</label>
                                    <input
                                      type="text"
                                      class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                      placeholder="https://bodyclub.dexignzone.com/xhtml/about-us.html"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="xl:w-1/2">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">Navigation Label</label>
                                    <input
                                      type="text"
                                      class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                      placeholder="Contact Us"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="xl:w-1/2">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">Title Attribute</label>
                                    <input
                                      type="text"
                                      class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                      placeholder="Contact Us"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="flex items-center">
                                <a href="javascript:void(0);" class="hover:text-danger duration-400">Remove</a><span class="mx-2">|</span>

                                <a href="javascript:void(0);" class="hover:text-primary duration-400"> Cancel </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </li>
                <li class="dd-item menu-ac-item relative" data-id="2">
                  <div>
                    <div class="mb-5">
                      <div class="card-toggle-btn duration-500 border border-border cursor-pointer relative rounded-lg" @click="accordian.show2 = !accordian.show2">
                        <div class="move-media dd-handle py-2 px-4 flex h-full bg-none absolute top-0 text-xl left-0 text-white items-center cursor-all-scroll bg-primary m-0 rounded-s-md border-0">
                          <i class="fa-solid fa-arrows-up-down-left-right"></i>
                        </div>
                        <button class="contact relative rounded-lg duration-500 pl-[65px] py-4 pr-7 flex items-center justify-between w-full text-sm">
                          Privacy Policy
                          <i :class="`${!accordian.show2 ? 'ti-plus' : 'ti-minus'} ac-icon`"></i>
                        </button>
                      </div>
                      <Collapse :when="accordian.show2">
                        <div class="content">
                          <div class="py-4 px-5 mt-[-5px] rounded-es-md rounded-ee-md border border-border border-t-0">
                            <div class="row">
                              <div class="xl:w-1/2">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">Navigation Label</label>
                                    <input
                                      type="text"
                                      class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                      placeholder="Privacy Policy"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="xl:w-1/2">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">Title Attribute</label>
                                    <input
                                      type="text"
                                      class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                      placeholder="Privacy Policy"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="w-full">
                                <p class="h-11 border border-border block rounded-lg p-2.5 w-full mb-4">Original: <a href="javascript:void(0);">Privacy Policy</a></p>
                              </div>
                              <div class="flex items-center">
                                <a href="javascript:void(0);" class="hover:text-danger duration-400">Remove</a><span class="mx-2">|</span>
                                <a href="javascript:void(0);" class="hover:text-primary duration-400"> Cancel </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </li>
                <li class="dd-item menu-ac-item relative" data-id="3">
                  <div>
                    <div class="mb-5">
                      <div class="card-toggle-btn duration-500 border border-border cursor-pointer relative rounded-lg" @click="accordian.show3 = !accordian.show3">
                        <div class="move-media dd-handle py-2 px-4 flex h-full bg-none absolute top-0 text-xl left-0 text-white items-center cursor-all-scroll bg-primary m-0 rounded-s-md border-0">
                          <i class="fa-solid fa-arrows-up-down-left-right"></i>
                        </div>
                        <button class="contact relative rounded-lg duration-500 pl-[65px] py-4 pr-7 flex items-center justify-between w-full text-sm">
                          Terms and Conditions
                          <i :class="`${!accordian.show3 ? 'ti-plus' : 'ti-minus'} ac-icon`"></i>
                        </button>
                      </div>
                      <Collapse :when="accordian.show3">
                        <div class="content">
                          <div class="py-4 px-5 mt-[-5px] rounded-es-md rounded-ee-md border border-border border-t-0">
                            <div class="row">
                              <div class="xl:w-1/2">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">Navigation Label</label>
                                    <input
                                      type="text"
                                      class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                      placeholder="Terms and Conditions"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="xl:w-1/2">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">Title Attribute</label>
                                    <input
                                      type="text"
                                      class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                      placeholder="Terms and Conditions"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="w-full">
                                <p class="h-11 border border-border block rounded-lg p-2.5 w-full mb-4">Original: <a href="javascript:void(0);">Terms and Conditions</a></p>
                              </div>
                              <div class="flex items-center">
                                <a href="javascript:void(0);" class="hover:text-danger duration-400">Remove</a><span class="mx-2">|</span>
                                <a href="javascript:void(0);" class="hover:text-primary duration-400"> Cancel </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </li>
                <li class="dd-item menu-ac-item relative" data-id="4">
                  <div>
                    <div class="mb-5">
                      <div class="card-toggle-btn duration-500 border border-border cursor-pointer relative rounded-lg" @click="accordian.show4 = !accordian.show4">
                        <div class="move-media dd-handle py-2 px-4 flex h-full bg-none absolute top-0 text-xl left-0 text-white items-center cursor-all-scroll bg-primary m-0 rounded-s-md border-0">
                          <i class="fa-solid fa-arrows-up-down-left-right"></i>
                        </div>
                        <button class="contact relative rounded-lg duration-500 pl-[65px] py-4 pr-7 flex items-center justify-between w-full text-sm">
                          About Us
                          <i :class="`${!accordian.show4 ? 'ti-plus' : 'ti-minus'} ac-icon`"></i>
                        </button>
                      </div>
                      <Collapse :when="accordian.show4">
                        <div class="content">
                          <div class="py-4 px-5 mt-[-5px] rounded-es-md rounded-ee-md border border-border border-t-0">
                            <div class="row">
                              <div class="xl:w-1/2">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">Navigation Label</label>
                                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent" placeholder="About Us" />
                                  </div>
                                </form>
                              </div>
                              <div class="xl:w-1/2">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">Title Attribute</label>
                                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent" placeholder="About Us" />
                                  </div>
                                </form>
                              </div>
                              <div class="w-full">
                                <p class="h-11 border border-border block rounded-lg p-2.5 w-full mb-4">Original: <a href="javascript:void(0);">About Us</a></p>
                              </div>
                              <div class="flex items-center">
                                <a href="javascript:void(0);" class="hover:text-danger duration-400">Remove</a><span class="mx-2">|</span>
                                <a href="javascript:void(0);" class="hover:text-primary duration-400"> Cancel </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </li>
                <li class="dd-item menu-ac-item relative" data-id="5">
                  <div>
                    <div class="mb-5">
                      <div class="card-toggle-btn duration-500 border border-border cursor-pointer relative rounded-lg" @click="accordian.show5 = !accordian.show5">
                        <div class="move-media dd-handle py-2 px-4 flex h-full bg-none absolute top-0 text-xl left-0 text-white items-center cursor-all-scroll bg-primary m-0 rounded-s-md border-0">
                          <i class="fa-solid fa-arrows-up-down-left-right"></i>
                        </div>
                        <button class="contact relative rounded-lg duration-500 pl-[65px] py-4 pr-7 flex items-center justify-between w-full text-sm">
                          Important Information
                          <i :class="`${!accordian.show5 ? 'ti-plus' : 'ti-minus'} ac-icon`"></i>
                        </button>
                      </div>
                      <Collapse :when="accordian.show5">
                        <div class="content">
                          <div class="py-4 px-5 mt-[-5px] rounded-es-md rounded-ee-md border border-border border-t-0">
                            <div class="row">
                              <div class="xl:w-1/2">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">Navigation Label</label>
                                    <input
                                      type="text"
                                      class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                      placeholder="Important Information"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="xl:w-1/2">
                                <form>
                                  <div class="mb-4">
                                    <label class="form-label text-secondary">Title Attribute</label>
                                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent" placeholder="" />
                                  </div>
                                </form>
                              </div>
                              <div class="w-full">
                                <p class="h-11 border border-border block rounded-lg p-2.5 w-full mb-4">Original: <a href="javascript:void(0);">Terms and Conditions</a></p>
                              </div>
                              <div class="flex items-center">
                                <a href="javascript:void(0);" class="hover:text-danger duration-400">Remove</a><span class="mx-2">|</span>
                                <a href="javascript:void(0);" class="hover:text-primary duration-400"> Cancel </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div class="style-1 mb-0 border-0">
        <div class="content-title flex justify-between items-center py-2 sm:px-7.5 px-[0.938rem] border-t border-[#E6E6E6] dark:border-transparent">
          <div class="cpa text-base font-semibold">Delete Menu</div>
          <button type="button" class="btn btn-sm bg-secondary text-white hover:shadow-btnsecondary my-2">Save Menu</button>
        </div>
      </div>
    </div>
  </div>
</template>
