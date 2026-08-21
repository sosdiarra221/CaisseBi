<script lang="ts" setup>
import { Collapse } from "vue-collapsed";

import OptionSelect from "~/components/OptionSelect.vue";
// @ts-ignore
import Flatpickr from "vue-flatpickr-component";

const expanded = ref({ open1: true, open2: true });

const date = ref(new Date());

const config = ref({
  inline: false,
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  enableTime: false,
});
</script>

<template>
  <div class="content-body">
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="shadow-default rounded-lg mb-4 bg-card">
            <div class="flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.open1 = !expanded.open1">
              <div class="cpa text-base font-semibold"><i class="fa-sharp fa-solid fa-filter mr-2"></i>Filter</div>
              <a href="javascript:void(0);">
                <span :class="expanded.open1 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
              </a>
            </div>
            <Collapse :when="expanded.open1">
              <div class="sm:p-5 p-4 border-t border-border">
                <div class="row">
                  <div class="xl:w-1/4 sm:w-1/2 w-full">
                    <label class="form-label text-secondary">Title</label>
                    <input
                      type="text"
                      class="form-control relative h-11 border border-border block rounded-lg py-1.5 px-3 duration-500 focus:border-primary w-full xl:mb-0 mb-4"
                      id="exampleFormControlInput1"
                      placeholder="Title"
                    />
                  </div>
                  <div class="xl:w-1/4 sm:w-1/2 w-full mb-4 xl:mb-0">
                    <label class="form-label text-secondary">Status</label>
                    <OptionSelect
                      class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                      :options="[{ lable: 'Select Status' }, { lable: 'Published' }, { lable: 'Draft' }, { lable: 'Trash' }, { lable: 'Private' }, { lable: 'Pending' }]"
                    />
                  </div>
                  <div class="xl:w-1/4 sm:w-1/2 w-full">
                    <label class="form-label text-secondary">Date</label>
                    <div class="relative">
                      <!-- <input
                        name="flatpickr"
                        class="flatpickr relative bg-transparent h-11 border border-border block rounded-md py-1.5 px-3 duration-500 focus:border-primary w-full sm:mb-0 mb-4"
                        placeholder="02/08/2024"
                      /> -->
                      <Flatpickr
                        v-model="date"
                        :config="config"
                        class="flatpickr relative bg-transparent h-11 border border-border block rounded-md py-1.5 px-3 duration-500 focus:border-primary w-full sm:mb-0 mb-4"
                        placeholder="Select date"
                        name="date"
                      />
                      <i class="fa-regular fa-calendar absolute right-3.6 bottom-3.6"></i>
                    </div>
                  </div>
                  <div class="xl:w-1/4 sm:w-1/2 w-full self-end">
                    <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mr-2" title="Click here to Search" type="button">
                      <i class="fa-sharp fa-solid fa-filter mr-1"></i>Filter
                    </button>
                    <button class="btn text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white" title="Click here to remove filter" type="button">
                      Remove Filter
                    </button>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div class="mb-6 pb-4">
            <NuxtLink to="/content-add" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Add Content</NuxtLink>
          </div>
          <div class="shadow-default rounded-lg mb-4 bg-card" x-data="{expanded:true}">
            <div class="flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.open2 = !expanded.open2">
              <div class="cpa text-base font-semibold"><i class="fa-solid fa-file-lines mr-1"></i>Contact List</div>
              <a href="javascript:void(0);">
                <span :class="expanded.open2 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
              </a>
            </div>
            <Collapse :when="expanded.open2">
              <div class="sm:p-5 p-4 border-t border-border">
                <div class="overflow-x-auto table-scroll">
                  <table class="table table-bordered table-striped table-condensed flip-content mb-4 w-full">
                    <thead>
                      <tr class="border-b border-border">
                        <th class="text-secondary p-2 border-b border-border capitalize whitespace-nowrap text-base font-medium text-left">S.No</th>
                        <th class="text-secondary p-2 border-b border-border capitalize whitespace-nowrap text-base font-medium text-left">Title</th>
                        <th class="text-secondary p-2 border-b border-border capitalize whitespace-nowrap text-base font-medium text-left">Status</th>
                        <th class="text-secondary p-2 border-b border-border capitalize whitespace-nowrap text-base font-medium text-left">Modified</th>
                        <th class="text-secondary p-2 border-b border-border capitalize whitespace-nowrap text-base font-medium text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-y border-border">
                        <td>1</td>
                        <td>About Us</td>
                        <td>Published</td>
                        <td>18 Feb, 2024</td>
                        <td class="text-right">
                          <a href="javascript:void(0);" class="size-10 leading-10 inline-block text-center text-white bg-warning duration-300 hover:bg-warninghover hover:shadow-btnwarning rounded-lg">
                            <i class="fa fa-edit"></i> </a
                          >{{ " " }}
                          <a href="javascript:void(0);" class="size-10 leading-10 inline-block text-center text-white bg-danger duration-300 hover:bg-dangerhover hover:shadow-btndanger rounded-lg">
                            <i class="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="border-y border-border">
                        <td>2</td>
                        <td>FAQ</td>
                        <td>Published</td>
                        <td>13 Jan, 2024</td>
                        <td class="text-right">
                          <a href="javascript:void(0);" class="size-10 leading-10 inline-block text-center text-white bg-warning duration-300 hover:bg-warninghover hover:shadow-btnwarning rounded-lg">
                            <i class="fa fa-edit"></i> </a
                          >{{ " " }}
                          <a href="javascript:void(0);" class="size-10 leading-10 inline-block text-center text-white bg-danger duration-300 hover:bg-dangerhover hover:shadow-btndanger rounded-lg">
                            <i class="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="border-y border-border">
                        <td>3</td>
                        <td>Pricing</td>
                        <td>Published</td>
                        <td>13 Jan, 2024</td>
                        <td class="text-right">
                          <a href="javascript:void(0);" class="size-10 leading-10 inline-block text-center text-white bg-warning duration-300 hover:bg-warninghover hover:shadow-btnwarning rounded-lg">
                            <i class="fa fa-edit"></i> </a
                          >{{ " " }}
                          <a href="javascript:void(0);" class="size-10 leading-10 inline-block text-center text-white bg-danger duration-300 hover:bg-dangerhover hover:shadow-btndanger rounded-lg">
                            <i class="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="border-y border-border">
                        <td>4</td>
                        <td>Schedule</td>
                        <td>Published</td>
                        <td>13 Jan, 2024</td>
                        <td class="text-right">
                          <a href="javascript:void(0);" class="size-10 leading-10 inline-block text-center text-white bg-warning duration-300 hover:bg-warninghover hover:shadow-btnwarning rounded-lg">
                            <i class="fa fa-edit"></i> </a
                          >{{ " " }}
                          <a href="javascript:void(0);" class="size-10 leading-10 inline-block text-center text-white bg-danger duration-300 hover:bg-dangerhover hover:shadow-btndanger rounded-lg">
                            <i class="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                      <tr class="border-y border-border">
                        <td>5</td>
                        <td>Under Maintenance</td>
                        <td>Published</td>
                        <td>25 Jan, 2024</td>
                        <td class="text-right">
                          <a href="javascript:void(0);" class="size-10 leading-10 inline-block text-center text-white bg-warning duration-300 hover:bg-warninghover hover:shadow-btnwarning rounded-lg">
                            <i class="fa fa-edit"></i> </a
                          >{{ " " }}
                          <a href="javascript:void(0);" class="size-10 leading-10 inline-block text-center text-white bg-danger duration-300 hover:bg-dangerhover hover:shadow-btndanger rounded-lg">
                            <i class="fa fa-times"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="flex items-center justify-between max2lg:justify-center flex-wrap">
                    <span class="mr-4 max2lg:mb-4">Page 1 of 5, showing 2 records out of 8 total, starting on record 1, ending on 2</span>
                    <nav>
                      <ul class="flex mb-2 sm:mb-0">
                        <li>
                          <a
                            class="z-1 size-10 rounded-lg flex justify-center items-center text-base ml-[7px] border border-border duration-500 hover:bg-primary hover:text-white"
                            href="javascript:void(0);"
                          >
                            <i class="fa-solid fa-angle-left"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            class="z-1 size-10 rounded-lg flex justify-center items-center text-base ml-[7px] border border-border duration-500 hover:bg-primary hover:text-white"
                            href="javascript:void(0);"
                            >1</a
                          >
                        </li>
                        <li>
                          <a
                            class="z-1 size-10 rounded-lg flex justify-center items-center text-base ml-[7px] border border-border duration-500 hover:bg-primary hover:text-white"
                            href="javascript:void(0);"
                            >2</a
                          >
                        </li>
                        <li>
                          <a
                            class="z-1 size-10 rounded-lg flex justify-center items-center text-base ml-[7px] border border-border duration-500 hover:bg-primary hover:text-white"
                            href="javascript:void(0);"
                            >3</a
                          >
                        </li>
                        <li>
                          <a
                            class="z-1 size-10 rounded-lg flex justify-center items-center text-base ml-[7px] border border-border duration-500 hover:bg-primary hover:text-white"
                            href="javascript:void(0);"
                          >
                            <i class="fa-solid fa-angle-right"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
