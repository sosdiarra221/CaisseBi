<script lang="ts" setup>
import CommoneProfile from "~/components/account/CommoneProfile.vue";
import StatementData1 from "~/components/account/StatementData1.vue";
import StatementData2 from "~/components/account/StatementData2.vue";
import StatementData3 from "~/components/account/StatementData3.vue";
import StatementData4 from "~/components/account/StatementData4.vue";
import CommonNav from "~/components/CommonNav.vue";
import OptionSelect from "~/components/OptionSelect.vue";

const tab = ref<string>("tabWeek");
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Statements" name="Statements" />
    <div class="container">
      <CommoneProfile title="Statements" />
      <div class="tab-content">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="xl:col-span-4 col-span-12">
            <div class="grid grid-cols-12 gap-x-6">
              <div class="col-span-12">
                <div class="card">
                  <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                    <h4 class="heading mb-0">Earnings</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <p class="text-sm mb-4">Last 30 day earnings calculated. Apart from arranging the order of topics.</p>
                    <div class="grid grid-cols-12 gap-2 mb-4">
                      <div class="sm:col-span-4 col-span-6">
                        <div class="bg-light rounded-lg p-4">
                          <h5 class="mb-0 text-secondary">$6,840</h5>
                          <span class="text-2xs">Earnings</span>
                        </div>
                      </div>
                      <div class="sm:col-span-4 col-span-6">
                        <div class="bg-light rounded-lg p-4">
                          <h5 class="mb-0 text-secondary">+17,8%</h5>
                          <span class="text-2xs">Change</span>
                        </div>
                      </div>
                      <div class="sm:col-span-4 col-span-12">
                        <div class="bg-light rounded-lg p-4">
                          <h5 class="mb-0 text-secondary">$1,240</h5>
                          <span class="text-2xs">Fees</span>
                        </div>
                      </div>
                    </div>
                    <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Withdraw Earnings</a>
                  </div>
                </div>
              </div>
              <div class="col-span-12">
                <div class="card">
                  <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                    <h4 class="heading mb-0">Invoices</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <p class="text-sm mb-4">Download apart from order of the good awesome invoice topics.</p>
                    <form action="#">
                      <div class="flex">
                        <div class="clearfix grow">
                          <OptionSelect
                            class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                            :options="[{ lable: 'Seller Annual Fee' }, { lable: 'Seller Monthly Fee' }]"
                          />
                        </div>
                        <div class="clearfix ml-4">
                          <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white px-4">
                            <i class="fa fa-arrow-down"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-8 col-span-12">
            <div class="card">
              <div class="relative pt-4 px-5 justify-between items-center flex-wrap block sm:flex">
                <h4 class="heading mb-0">Statement</h4>
                <ul class="flex flex-wrap nav-pills mt-4 sm:mt-0 revenue-tab">
                  <li class="nav-item ms-1">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      :class="{ 'bg-primary text-white': tab == 'tabWeek' }"
                      @click.prevent="tab = 'tabWeek'"
                      type="button"
                    >
                      Week
                    </button>
                  </li>
                  <li class="nav-item ms-1">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      :class="{ 'bg-primary text-white': tab == 'tabMonth' }"
                      @click.prevent="tab = 'tabMonth'"
                      type="button"
                    >
                      Month
                    </button>
                  </li>
                  <li class="nav-item ms-1">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      :class="{ 'bg-primary text-white': tab == 'tabYear' }"
                      @click.prevent="tab = 'tabYear'"
                      type="button"
                    >
                      Year
                    </button>
                  </li>
                  <li class="nav-item ms-1">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      :class="{ 'bg-primary text-white': tab == 'tabAll' }"
                      @click.prevent="tab = 'tabAll'"
                      type="button"
                    >
                      All
                    </button>
                  </li>
                </ul>
              </div>
              <div class="sm:p-5 p-4">
                <div class="tab-content">
                  <transition name="fade" mode="out-in">
                    <StatementData1 v-if="tab == 'tabWeek'" />
                    <StatementData2 v-else-if="tab == 'tabMonth'" />
                    <StatementData3 v-else-if="tab == 'tabYear'" />
                    <StatementData4 v-else="tab == 'tabAll'" />
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
