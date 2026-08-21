<script lang="ts" setup>
import { Dialog, TransitionRoot } from "@headlessui/vue";
import AppCalendor from "~/components/calendor/AppCalendor.vue";
import CommonNav from "~/components/CommonNav.vue";
import OptionSelect from "~/components/OptionSelect.vue";

const open = ref(false);
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Inbox" name="Inbox" />
    <div class="container">
      <div class="row">
        <div class="xl:w-1/4 col-xxl-4">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-lg mb-2 card-intro-title">Calendar</h4>
              <div>
                <div id="external-events" class="my-4">
                  <p class="mb-4">Drag and drop your event or click in the calendar</p>
                  <div class="external-event py-2 px-2.5 flex text-base items-center rounded-lg my-2.5 cursor-move bg-primarylight text-primary hover:shadow-btnprimary" data-class="bg-primary">
                    <i class="fa fa-move"></i><span>New Theme Release</span>
                  </div>
                  <div class="external-event py-2 px-2.5 flex text-base items-center rounded-lg my-2.5 cursor-move bg-warninglight text-warning hover:shadow-btnwarning" data-class="bg-warning">
                    <i class="fa fa-move"></i>My Event
                  </div>
                  <div class="external-event py-2 px-2.5 flex text-base items-center rounded-lg my-2.5 cursor-move bg-dangerlight text-danger hover:shadow-btndanger" data-class="bg-danger">
                    <i class="fa fa-move"></i>Meet manager
                  </div>
                  <div class="external-event py-2 px-2.5 flex text-base items-center rounded-lg my-2.5 cursor-move bg-infolight text-info hover:shadow-btninfo" data-class="bg-info">
                    <i class="fa fa-move"></i>Create New theme
                  </div>
                  <div class="external-event py-2 px-2.5 flex text-base items-center rounded-lg my-2.5 cursor-move bg-[#dddddd] text-[#444444] dark:shadow-btndark" data-class="bg-dark">
                    <i class="fa fa-move"></i>Project Launch
                  </div>
                  <div class="external-event py-2 px-2.5 flex text-base items-center rounded-lg my-2.5 cursor-move bg-[#dfe0e4] text-black hover:shadow-btnsecondary" data-class="bg-secondary">
                    <i class="fa fa-move"></i>Meeting
                  </div>
                </div>
                <!-- checkbox -->
                <div class="checkbox form-check block checkbox-event custom-checkbox pt-4 pb-12">
                  <input type="checkbox" class="form-check-input mr-2" id="drop-remove" />
                  <label class="form-check-label ml-1.1 mt-[0.113rem] text-sm" for="drop-remove">Remove After Drop</label>
                </div>
                <div x-data="{ open: false }">
                  <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !block w-full text-center" @click="open = true">
                    <span class="align-middle"><i class="ti-plus mr-2"></i></span> Create New
                  </a>
                  <!-- Modal Add Category -->
                  <TransitionRoot as="template" :show="open">
                    <Dialog class="relative z-10" @close="open = false">
                      <div class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto">
                        <div class="modal-dialog rounded-lg min-h-screen flex items-center justify-center">
                          <div class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg">
                            <div class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border">
                              <h4 class="text-lg mb-2 modal-title"><strong>Add a category</strong></h4>
                              <button type="button" class="btn-close p-2 text-xs dark:invert" @click="open = false"></button>
                            </div>
                            <div class="relative p-7.5">
                              <form>
                                <div class="row">
                                  <div class="md:w-1/2 w-full">
                                    <label class="control-label form-label">Category Name</label>
                                    <input
                                      class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                                      placeholder="Category Name"
                                      type="text"
                                      name="category-name"
                                    />
                                  </div>
                                  <div class="md:w-1/2 w-full">
                                    <label class="control-label form-label">Choose Category Color</label>
                                    <OptionSelect
                                      class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                                      :options="[{ lable: 'Success' }, { lable: 'Danger' }, { lable: 'Info' }, { lable: 'Pink' }, { lable: 'Primary' }, { lable: 'Warning' }]"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border">
                              <button @click="open = false" type="button" class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white">
                                Close
                              </button>
                              <button @click="open = false" type="button" class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover">Save</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog>
                  </TransitionRoot>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-9/12 col-xxl-8">
          <AppCalendor />
        </div>
      </div>
    </div>
  </div>
</template>
