<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
// @ts-ignore
import { FormWizard, TabContent } from "vue3-form-wizard";

function onComplete() {
  alert("Yay. Done!");
}
</script>

<template>
  <div class="content-body default-height h-screen">
    <CommonNav title="Form Wizard" name="Form Wizard" />
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Form step</h4>
            </div>
            <div class="sm:p-5 p-4">
              <ClientOnly>
                <FormWizard on-complete="onComplete" id="smartwizard" class="form-wizard order-create" color="var(--primary)">
                  <tab-content>
                    <div id="wizard_Service" class="tab-pane" role="tabpanel">
                      <div class="row">
                        <div class="lg:w-1/2 mb-2">
                          <div class="mb-4">
                            <label class="text-label form-label">First Name*</label>
                            <input
                              type="text"
                              name="firstName"
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              placeholder="Parsley"
                              required
                            />
                          </div>
                        </div>
                        <div class="lg:w-1/2 mb-2">
                          <div class="mb-4">
                            <label class="text-label form-label">Last Name*</label>
                            <input
                              type="text"
                              name="lastName"
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              placeholder="Montana"
                              required
                            />
                          </div>
                        </div>
                        <div class="lg:w-1/2 mb-2">
                          <div class="mb-4">
                            <label class="text-label form-label">Email Address*</label>
                            <input
                              type="email"
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              id="inputGroupPrepend2"
                              aria-describedby="inputGroupPrepend2"
                              placeholder="example@example.com.com"
                              required
                            />
                          </div>
                        </div>
                        <div class="lg:w-1/2 mb-2">
                          <div class="mb-4">
                            <label class="text-label form-label">Phone Number*</label>
                            <input
                              type="number"
                              name="phoneNumber"
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              placeholder="Type No"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-lg-12 mb-4">
                          <div class="mb-4">
                            <label class="text-label form-label">Where are you from*</label>
                            <input
                              type="text"
                              name="place"
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </tab-content>
                  <tab-content>
                    <div id="wizard_Time" class="tab-pane" role="tabpanel">
                      <div class="row">
                        <div class="lg:w-1/2 mb-2">
                          <div class="mb-4">
                            <label class="text-label form-label">Company Name*</label>
                            <input
                              type="text"
                              name="firstName"
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              placeholder="Cellophane Square"
                              required
                            />
                          </div>
                        </div>
                        <div class="lg:w-1/2 mb-2">
                          <div class="mb-4">
                            <label class="text-label form-label">Company Email Address*</label>
                            <input
                              type="email"
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              id="emial1"
                              placeholder="example@example.com.com"
                              required
                            />
                          </div>
                        </div>
                        <div class="lg:w-1/2 mb-2">
                          <div class="mb-4">
                            <label class="text-label form-label">Company Phone Number*</label>
                            <input
                              type="text"
                              name="phoneNumber"
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              placeholder="(+1)408-657-9007"
                              required
                            />
                          </div>
                        </div>
                        <div class="lg:w-1/2 mb-2">
                          <div class="mb-4">
                            <label class="text-label form-label">Your position in Company*</label>
                            <input
                              type="text"
                              name="place"
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </tab-content>
                  <tab-content>
                    <div id="wizard_Details" class="tab-pane" role="tabpanel">
                      <div class="row">
                        <div class="sm:w-1/3 mb-2">
                          <h4>Monday *</h4>
                        </div>
                        <div class="!w-1/2 sm:!w-1/3 mb-2">
                          <div class="mb-4">
                            <input
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              value="9.00"
                              type="number"
                              name="input1"
                              id="input1"
                            />
                          </div>
                        </div>
                        <div class="!w-1/2 sm:!w-1/3 mb-2">
                          <div class="mb-4">
                            <input
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              value="6.00"
                              type="number"
                              name="input2"
                              id="input2"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="sm:w-1/3 mb-2">
                          <h4>Tuesday *</h4>
                        </div>
                        <div class="!w-1/2 sm:!w-1/3 mb-2">
                          <div class="mb-4">
                            <input
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              value="9.00"
                              type="number"
                              name="input3"
                              id="input3"
                            />
                          </div>
                        </div>
                        <div class="!w-1/2 sm:!w-1/3 mb-2">
                          <div class="mb-4">
                            <input
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              value="6.00"
                              type="number"
                              name="input4"
                              id="input4"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="sm:w-1/3 mb-2">
                          <h4>Wednesday *</h4>
                        </div>
                        <div class="!w-1/2 sm:!w-1/3 mb-2">
                          <div class="mb-4">
                            <input
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              value="9.00"
                              type="number"
                              name="input5"
                              id="input5"
                            />
                          </div>
                        </div>
                        <div class="!w-1/2 sm:!w-1/3 mb-2">
                          <div class="mb-4">
                            <input
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              value="6.00"
                              type="number"
                              name="input6"
                              id="input6"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="sm:w-1/3 mb-2">
                          <h4>Thrusday *</h4>
                        </div>
                        <div class="!w-1/2 sm:!w-1/3 mb-2">
                          <div class="mb-4">
                            <input
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              value="9.00"
                              type="number"
                              name="input7"
                              id="input7"
                            />
                          </div>
                        </div>
                        <div class="!w-1/2 sm:!w-1/3 mb-2">
                          <div class="mb-4">
                            <input
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              value="6.00"
                              type="number"
                              name="input8"
                              id="input8"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="sm:w-1/3 mb-2">
                          <h4>Friday *</h4>
                        </div>
                        <div class="!w-1/2 sm:!w-1/3 mb-2">
                          <div class="mb-4">
                            <input
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              value="9.00"
                              type="number"
                              name="input9"
                              id="input9"
                            />
                          </div>
                        </div>
                        <div class="!w-1/2 sm:!w-1/3 mb-2">
                          <div class="mb-4">
                            <input
                              class="relative h-11 border border-border block rounded-lg py-1.5 px-3 w-full duration-500 focus:border-primary bg-transparent"
                              value="6.00"
                              type="number"
                              name="input10"
                              id="input10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </tab-content>
                  <tab-content>
                    <div id="wizard_Payment" class="tab-pane" role="tabpanel">
                      <div class="row emial-setup">
                        <div class="lg:!w-1/4 !w-1/2">
                          <div class="mb-4">
                            <label for="mailclient11" class="mailclinet mailclinet-gmail">
                              <input type="radio" name="emailclient" id="mailclient11" />
                              <span class="mail-icon">
                                <i class="mdi mdi-google-plus" aria-hidden="true"></i>
                              </span>
                              <span class="text-base mt-2 text-center">I'm using Gmail</span>
                            </label>
                          </div>
                        </div>
                        <div class="lg:!w-1/4 !w-1/2">
                          <div class="mb-4">
                            <label for="mailclient12" class="mailclinet mailclinet-office">
                              <input type="radio" name="emailclient" id="mailclient12" />
                              <span class="mail-icon">
                                <i class="mdi mdi-office" aria-hidden="true"></i>
                              </span>
                              <span class="text-base mt-2 text-center">I'm using Office</span>
                            </label>
                          </div>
                        </div>
                        <div class="lg:!w-1/4 !w-1/2">
                          <div class="mb-4">
                            <label for="mailclient13" class="mailclinet mailclinet-drive">
                              <input type="radio" name="emailclient" id="mailclient13" />
                              <span class="mail-icon">
                                <i class="mdi mdi-google-drive" aria-hidden="true"></i>
                              </span>
                              <span class="text-base mt-2 text-center">I'm using Drive</span>
                            </label>
                          </div>
                        </div>
                        <div class="lg:!w-1/4 !w-1/2">
                          <div class="mb-4">
                            <label for="mailclient14" class="mailclinet mailclinet-another">
                              <input type="radio" name="emailclient" id="mailclient14" />
                              <span class="mail-icon">
                                <i class="fa fa-question-circle" aria-hidden="true"></i>
                              </span>
                              <span class="text-base mt-2 text-center">Another Service</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="w-full">
                          <div class="text-center">
                            <p class="sm:text-sm mb-4">Or if want skip this step entirely and setup it later</p>
                            <a href="javascript:void(0);">Skip step</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tab-content>
                </FormWizard>
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wizard-nav-pills li .stepTitle {
  display: none !important;
}
.wizard-nav-pills li .wizard-icon-circle{
  margin-top: 8px !important;
}

.wizard-nav-pills li a .wizard-icon-circle {
  width: 3rem !important;
  height: 3rem !important;
}
</style>
