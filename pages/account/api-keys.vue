<script lang="ts" setup>
import CommoneProfile from "~/components/account/CommoneProfile.vue";
import CommonNav from "~/components/CommonNav.vue";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";

const open = ref<boolean>(false);
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Api keys" name="Api keys" />
    <div class="container">
      <CommoneProfile title="Api keys" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12">
            <div class="card">
              <div class="relative py-4 px-5 flex justify-between items-center flex-wrap">
                <h4 class="heading mb-0">API Keys</h4>
                <button class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Create A Key</button>
              </div>
              <div class="sm:p-5 p-4 !pt-0">
                <div class="overflow-x-auto">
                  <table class="table mb-1 w-full text-left">
                    <thead>
                      <tr>
                        <th class="font-medium sm:text-base border-b border-border">Label</th>
                        <th class="font-medium sm:text-base border-b border-border">API Keys</th>
                        <th class="font-medium sm:text-base border-b border-border">Created</th>
                        <th class="font-medium sm:text-base border-b border-border">Status</th>
                        <th class="font-medium sm:text-base border-b border-border text-end">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="border-b border-border">none set</td>
                        <td class="border-b border-border">
                          <div class="select-text-wrap flex justify-between">
                            <div class="text-select-copy">hhhhhh5782516nsdzjvn54</div>
                            <button class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
                          </div>
                        </td>
                        <td class="border-b border-border">Nov 01, 2024</td>
                        <td class="border-b border-border">
                          <span class="badge badge-sm text-success bg-successlight">Active</span>
                        </td>
                        <td class="border-b border-border text-end">
                          <CustomeDropDown class="relative">
                            <template #trigger>
                              <button class="btn btn-sm bg-light text-textdark !leading-[1.6] dropdown-toggle">Options</button>
                            </template>
                            <template #menu>
                              <div :class="`bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left`">
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">Navitare</td>
                        <td class="border-b border-border">
                          <div class="select-text-wrap flex justify-between">
                            <div class="text-select-copy">hhhhhh5782516nsdzjvn54</div>
                            <button class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
                          </div>
                        </td>
                        <td class="border-b border-border">Sep 27, 2024</td>
                        <td class="border-b border-border">
                          <span class="badge badge-sm text-info bg-infolight">Review</span>
                        </td>
                        <td class="border-b border-border text-end">
                          <CustomeDropDown class="relative">
                            <template #trigger>
                              <button class="btn btn-sm bg-light text-textdark !leading-[1.6] dropdown-toggle">Options</button>
                            </template>
                            <template #menu>
                              <div :class="`bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left`">
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">Docs API Key</td>
                        <td class="border-b border-border">
                          <div class="select-text-wrap flex justify-between">
                            <div class="text-select-copy">hhhhhh5782516nsdzjvn54</div>
                            <button class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
                          </div>
                        </td>
                        <td class="border-b border-border">Jul 09, 2024</td>
                        <td class="border-b border-border">
                          <span class="badge badge-sm text-danger bg-dangerlight">Inactive</span>
                        </td>
                        <td class="border-b border-border text-end">
                          <CustomeDropDown class="relative">
                            <template #trigger>
                              <button class="btn btn-sm bg-light text-textdark !leading-[1.6] dropdown-toggle">Options</button>
                            </template>
                            <template #menu>
                              <div :class="`bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left`">
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">Identity Key</td>
                        <td class="border-b border-border">
                          <div class="select-text-wrap flex justify-between">
                            <div class="text-select-copy">jk076590ygghgh324vd3568</div>
                            <button class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
                          </div>
                        </td>
                        <td class="border-b border-border">May 14, 2024</td>
                        <td class="border-b border-border">
                          <span class="badge badge-sm text-success bg-successlight">Active</span>
                        </td>
                        <td class="border-b border-border text-end">
                          <CustomeDropDown class="relative">
                            <template #trigger>
                              <button class="btn btn-sm bg-light text-textdark !leading-[1.6] dropdown-toggle">Options</button>
                            </template>
                            <template #menu>
                              <div :class="`bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left`">
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">Remore Interface</td>
                        <td class="border-b border-border">
                          <div class="select-text-wrap flex justify-between">
                            <div class="text-select-copy">nzsdvnn584948941</div>
                            <button class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
                          </div>
                        </td>
                        <td class="border-b border-border">Dec 30, 2024</td>
                        <td class="border-b border-border">
                          <span class="badge badge-sm text-success bg-successlight">Active</span>
                        </td>
                        <td class="border-b border-border text-end">
                          <CustomeDropDown class="relative">
                            <template #trigger>
                              <button class="btn btn-sm bg-light text-textdark !leading-[1.6] dropdown-toggle">Options</button>
                            </template>
                            <template #menu>
                              <div :class="`bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left`">
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">none set</td>
                        <td class="border-b border-border">
                          <div class="select-text-wrap flex justify-between">
                            <div class="text-select-copy">nzsdvnn584948941</div>
                            <button class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
                          </div>
                        </td>
                        <td class="border-b border-border">Oct 25, 2024</td>
                        <td class="border-b border-border">
                          <span class="badge badge-sm text-danger bg-dangerlight">Inactive</span>
                        </td>
                        <td class="border-b border-border text-end">
                          <CustomeDropDown class="relative">
                            <template #trigger>
                              <button class="btn btn-sm bg-light text-textdark !leading-[1.6] dropdown-toggle">Options</button>
                            </template>
                            <template #menu>
                              <div :class="`bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left`">
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                                <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                              </div>
                            </template>
                          </CustomeDropDown>
                        </td>
                      </tr>
                      <tr>
                        <td class="border-b border-border">Test App</td>
                        <td class="border-b border-border">
                          <div class="select-text-wrap flex justify-between">
                            <div class="text-select-copy">nzsdvnn584948941</div>
                            <button class="btn-select-text btn !p-0 ml-6"><i class="las la-copy text-lg"></i></button>
                          </div>
                        </td>
                        <td class="border-b border-border">Apr 03, 2024</td>
                        <td class="border-b border-border">
                          <span class="badge badge-sm text-success bg-successlight">Active</span>
                        </td>
                        <td class="border-b border-border text-end">
                          <div class="relative" x-data="{ open: false }">
                            <button class="btn btn-sm bg-light text-textdark !leading-[1.6] dropdown-toggle" @click="open = true">Options</button>
                            <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left" @click.away="open = false" style="display: none">
                              <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)" @click="open = false">Delete</a>
                              <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)" @click="open = false">Edit</a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12">
            <div class="card">
              <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                <h4 class="heading mb-0">API Overview</h4>
              </div>
              <div class="p-0">
                <div class="border-b p-6 border-border">
                  <h6 class="mb-2">How to set API</h6>
                  <p class="text-sm mb-4">Elevate your post: Integrate images for impact, smooth flow, humor, and clarity on complex subjects</p>
                  <a href="javascript:void(0);" class="btn bg-light text-textdark">Get Started</a>
                </div>
                <div class="p-6">
                  <h6 class="mb-2">Developer Tools</h6>
                  <p class="text-sm mb-4">Craft your blog post: Choose a topic, outline, research, and fact-check diligently.</p>
                  <a href="javascript:void(0);" class="btn bg-light text-textdark">Create CLI Rule</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
