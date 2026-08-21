<script lang="ts" setup>
import OptionSelect from "~/components/OptionSelect.vue";
import { Collapse } from "vue-collapsed";

// @ts-ignore
import Flatpickr from "vue-flatpickr-component";

const date = ref(new Date());

const config = ref({
  inline: false,
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  enableTime: false,
});

const expanded = reactive({
  show1: true,
  show2: true,
});

const dinamicHeight = ref<number>();

onMounted(() => {
  dinamicHeight.value = window.innerHeight - 66;
});
</script>

<template>
  <div :class="`content-body h-[${dinamicHeight}]`">
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="row">
            <div class="xl:w-1/3">
              <div class="shadow-default rounded-lg mb-4 bg-card">
                <div class="flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.show1 = !expanded.show1">
                  <div class="cpa text-base font-semibold">Add Blog Category</div>
                  <div class="tools">
                    <a href="javascript:void(0);" class="inline-block">
                      <span :class="expanded.show1 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                    </a>
                  </div>
                </div>
                <Collapse :when="expanded.show1">
                  <div class="sm:p-5 p-4 border-t border-border">
                    <div class="mb-4">
                      <label class="form-label">Name</label>
                      <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" placeholder="Name" />
                    </div>
                    <div class="mb-4">
                      <label class="form-label">Slug</label>
                      <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" placeholder="Slug" />
                    </div>
                    <div class="mb-4">
                      <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                      <textarea
                        class="py-1.5 px-3 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent resize-y"
                        id="exampleFormControlTextarea1"
                        rows="8"
                      ></textarea>
                    </div>
                    <div>
                      <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Save</button>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
            <div class="xl:w-2/3">
              <div class="shadow-default rounded-lg mb-4 bg-card" x-data="{expanded:true}">
                <div class="flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.show2 = !expanded.show2">
                  <div class="cpa text-base font-semibold">Blog List</div>
                  <div class="tools">
                    <a href="javascript:void(0);" class="inline-block">
                      <span :class="expanded.show2 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                    </a>
                  </div>
                </div>
                <Collapse :when="expanded.show2">
                  <div class="sm:p-5 p-4 border-t border-border">
                    <div class="overflow-x-auto table-scroll">
                      <table class="table table-bordered table-striped verticle-middle table-responsive-sm w-full mb-4">
                        <thead>
                          <tr class="border-y border-border">
                            <th class="!p-4 border border-border text-base font-medium text-left">S.No</th>
                            <th class="!p-4 border border-border text-base font-medium text-left">Name</th>
                            <th class="!p-4 border border-border text-base font-medium text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-y border-border bg-[#0000000d]">
                            <td class="border-x border-border !p-2.5 !pl-8">1</td>
                            <td class="border-x border-border !p-2.5">Beauty</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                          <tr class="border-y border-border">
                            <td class="border-x border-border !p-2.5 !pl-8">2</td>
                            <td class="border-x border-border !p-2.5">Fashion</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                          <tr class="border-y border-border bg-[#0000000d]">
                            <td class="border-x border-border !p-2.5 !pl-8">3</td>
                            <td class="border-x border-border !p-2.5">Lifestyle</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                          <tr class="border-y border-border">
                            <td class="border-x border-border !p-2.5 !pl-8">4</td>
                            <td class="border-x border-border !p-2.5">Food</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                          <tr class="border-y border-border bg-[#0000000d]">
                            <td class="border-x border-border !p-2.5 !pl-8">5</td>
                            <td class="border-x border-border !p-2.5">Beauty</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                          <tr class="border-y border-border">
                            <td class="border-x border-border !p-2.5 !pl-8">6</td>
                            <td class="border-x border-border !p-2.5">Fashion</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <div>
                                <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                                <span>{{ " " }}|{{ " " }}</span>
                                <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                                <span>{{ " " }}|{{ " " }}</span>
                                <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                                <span>{{ " " }}|{{ " " }}</span>
                                <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                              </div>
                            </td>
                          </tr>
                          <tr class="border-y border-border bg-[#0000000d]">
                            <td class="border-x border-border !p-2.5 !pl-8">7</td>
                            <td class="border-x border-border !p-2.5">Lifestyle</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                          <tr class="border-y border-border">
                            <td class="border-x border-border !p-2.5 !pl-8">8</td>
                            <td class="border-x border-border !p-2.5">Food</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                          <tr class="border-y border-border bg-[#0000000d]">
                            <td class="border-x border-border !p-2.5 !pl-8">9</td>
                            <td class="border-x border-border !p-2.5">Lifestyle</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                          <tr class="border-y border-border">
                            <td class="border-x border-border !p-2.5 !pl-8">10</td>
                            <td class="border-x border-border !p-2.5">Food</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                          <tr class="border-y border-border bg-[#0000000d]">
                            <td class="border-x border-border !p-2.5 !pl-8">11</td>
                            <td class="border-x border-border !p-2.5">Fashion</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                          <tr class="border-y border-border">
                            <td class="border-x border-border !p-2.5 !pl-8">12</td>
                            <td class="border-x border-border !p-2.5">Lifestyle</td>
                            <td class="border-x border-border text-right !p-2.5">
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Edit</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">Up</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-primary dark:text-white">down</a>
                              <span>{{ " " }}|{{ " " }}</span>
                              <a href="javascript:void(0);" class="hover:text-danger dark:text-white">delete</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
