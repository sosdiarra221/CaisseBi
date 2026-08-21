<script lang="ts" setup>
import CommoneProfile from "~/components/account/CommoneProfile.vue";
import RefrralContent1 from "~/components/account/RefrralContent1.vue";
import RefrralContent2 from "~/components/account/RefrralContent2.vue";
import RefrralContent3 from "~/components/account/RefrralContent3.vue";
import RefrralContent4 from "~/components/account/RefrralContent4.vue";

const tab = ref<string>("tabWeek");
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Referrals" name="Referrals" />
    <div class="container">
      <CommoneProfile title="Referrals" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12">
            <div class="card">
              <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                <h4 class="heading mb-0">Referral Program</h4>
              </div>
              <div class="sm:p-5 p-4">
                <div class="grid grid-cols-12 gap-x-6 mb-4">
                  <div class="lg:col-span-6 col-span-12 mb-4">
                    <h6 class="mb-1 font-semibold">How to use Referral Program</h6>
                    <p class="text-sm mb-4">Elevate your post: Integrate images for impact, smooth flow, humor, and clarity on complex subjects</p>
                    <a href="javascript:void(0);" class="btn bg-light text-textdark">Get Started</a>
                  </div>
                  <div class="lg:col-span-6 col-span-12 mb-4">
                    <h6 class="mb-1 font-semibold">Your Referral Link</h6>
                    <p class="text-sm mb-4">Craft your blog post: Choose a topic, outline, research, and fact-check diligently</p>
                    <div class="select-text-wrap">
                      <div class="text-select-copy border border-border px-4 py-2 rounded-lg mb-4 text-primary">https://dexginzoen.com/reffer/</div>
                      <button type="button" class="btn bg-light text-textdark btn-select-text">Copy Link</button>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-12 gap-x-6 mb-2">
                  <div class="lg:col-span-3 sm:col-span-6 col-span-12 mb-4">
                    <div class="bg-purplelight rounded-lg p-4 text-center">
                      <h3 class="mb-0 font-semibold">$62,250.0</h3>
                      <span class="fs-14 text-purple">Net Earnings</span>
                    </div>
                  </div>
                  <div class="lg:col-span-3 sm:col-span-6 col-span-12 mb-4">
                    <div class="bg-successlight rounded-lg p-4 text-center">
                      <h3 class="mb-0 font-semibold">$7,325.00</h3>
                      <span class="fs-14 text-success">Balance</span>
                    </div>
                  </div>
                  <div class="lg:col-span-3 sm:col-span-6 col-span-12 mb-4">
                    <div class="bg-dangerlight rounded-lg p-4 text-center">
                      <h3 class="mb-0 font-semibold">$5,500.00</h3>
                      <span class="fs-14 text-danger">Avg Deal Size</span>
                    </div>
                  </div>
                  <div class="lg:col-span-3 sm:col-span-6 col-span-12 mb-4">
                    <div class="bg-primarylight rounded-lg p-4 text-center">
                      <h3 class="mb-0 font-semibold">$780.0</h3>
                      <span class="fs-14 text-primary">Referral Signups</span>
                    </div>
                  </div>
                </div>
                <div class="mb-4">
                  <p class="text-sm">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged.
                  </p>
                </div>
                <div class="bg-light/25 border border-border rounded-lg p-4 sm:flex items-center">
                  <i class="fa-solid fa-building-columns text-primary text-2xl self-start"></i>
                  <div class="sm:mx-4 my-4 sm:my-0">
                    <h6 class="font-semibold mb-1">Withdraw Your Funds to Bank</h6>
                    <p class="text-sm">Securely withdraw money to your bank account, with a $25 fee.</p>
                  </div>
                  <div class="clearfix flex-shrink-0 sm:ms-auto">
                    <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Withdraw Money</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-12">
            <div class="card !h-auto">
              <div class="relative pt-4 px-5 justify-between items-center flex-wrap block sm:flex">
                <h4 class="heading mb-0">Referred Users</h4>
                <ul class="flex flex-wrap nav-pills mt-4 sm:mt-0 revenue-tab" id="myTab2" role="tablist">
                  <li class="nav-item ms-1" role="presentation">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary !bg-primary !text-white"
                      @click.prevent="tab = 'tabWeek'"
                      :class="{ ' !bg-primary !text-white': tab == 'tabWeek' }"
                      type="button"
                    >
                      Week
                    </button>
                  </li>
                  <li class="nav-item ms-1" role="presentation">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      @click.prevent="tab = 'tabMonth'"
                      :class="{ ' !bg-primary !text-white': tab == 'tabMonth' }"
                      type="button"
                    >
                      Month
                    </button>
                  </li>
                  <li class="nav-item ms-1" role="presentation">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      @click.prevent="tab = 'tabYear'"
                      :class="{ ' !bg-primary !text-white': tab == 'tabYear' }"
                      type="button"
                    >
                      Year
                    </button>
                  </li>
                  <li class="nav-item ms-1" role="presentation">
                    <button
                      class="py-2 px-3 max-sm:py-1.5 max-sm:px-2 rounded-lg bg-light text-2xs mx-1.1 text-secondary"
                      @click.prevent="tab = 'tabAll'"
                      :class="{ ' !bg-primary !text-white': tab == 'tabAll' }"
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
                    <RefrralContent1 v-if="tab == 'tabWeek'" />
                    <RefrralContent2 v-else-if="tab == 'tabMonth'" />
                    <RefrralContent3 v-else-if="tab == 'tabYear'" />
                    <RefrralContent4 v-else="tab == 'tabAll'" />
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
