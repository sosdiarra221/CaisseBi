<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import CommoneProfile from "~/components/account/CommoneProfile.vue";
import TodoItem from "~/components/TodoItem.vue";
import ActivitContent1 from "~/components/profile/ActivitContent1.vue";
import ActivitContent2 from "~/components/profile/ActivitContent2.vue";
import ActivitContent3 from "~/components/profile/ActivitContent3.vue";
import ActivitContent4 from "~/components/profile/ActivityContent4.vue";

const tab = ref<string>("tabWeek3");
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Activity" name="Activity" />
    <div class="container">
      <CommoneProfile title="Activity" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-xxl-12 xl:col-span-4 col-span-12">
            <div class="grid grid-cols-12 gap-x-6 sticky top-0 z-0">
              <div class="col-xxl-6 lg:col-span-12 md:col-span-6 col-span-12">
                <div class="card overflow-hidden">
                  <div class="text-center flex justify-between sm:pt-6 py-5 sm:p-5 px-4 items-center relative flex-wrap">
                    <h4 class="heading">My To Do Items</h4>
                    <div>
                      <a href="javascript:void(0);" class="text-primary mr-2">View All</a>
                      <a href="javascript:void(0);" class="text-secondary"> + Add To Do</a>
                    </div>
                  </div>
                  <div>
                    <TodoItem />
                  </div>
                </div>
              </div>
              <div class="col-xxl-6 lg:col-span-12 md:col-span-6 col-span-12">
                <div class="card">
                  <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                    <h4>Activity</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <div class="widget-timeline-status">
                      <ul class="timeline">
                        <li>
                          <span class="timeline-status">08:30</span>
                          <div class="timeline-badge border-dark"></div>
                          <div class="timeline-panel">
                            <span>Quisque a consequat ante Sit amet magna at volutapt.</span>
                          </div>
                        </li>
                        <li>
                          <span class="timeline-status">10:30</span>
                          <div class="timeline-badge border-success"></div>
                          <div class="timeline-panel">
                            <span class="text-secondary font-semibold">Video Sharing</span>
                          </div>
                        </li>
                        <li>
                          <span class="timeline-status">02:42</span>
                          <div class="timeline-badge border-danger"></div>
                          <div class="timeline-panel">
                            <span class="text-secondary font-semibold">john just buy your product Sell <span class="text-primary">$250</span></span>
                          </div>
                        </li>
                        <li>
                          <span class="timeline-status">15:40</span>
                          <div class="timeline-badge border-info"></div>
                          <div class="timeline-panel">
                            <span>Mashable, a news website and blog, goes live.</span>
                          </div>
                        </li>
                        <li>
                          <span class="timeline-status">23:12</span>
                          <div class="timeline-badge border-warning"></div>
                          <div class="timeline-panel">
                            <span class="text-secondary font-semibold">StumbleUpon is acquired by <span class="text-primary">eBay</span></span>
                          </div>
                        </li>
                        <li>
                          <span class="timeline-status">11:12</span>
                          <div class="timeline-badge border-primary"></div>
                          <div class="timeline-panel">
                            <span>shared this on my fb wall a few months back.</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-12 xl:col-span-8 col-span-12">
            <div class="card" x-data="{ tab: 'tabWeek3' }">
              <div class="border-b border-border relative py-4 px-5 justify-between items-center flex-wrap gap-2 block sm:flex">
                <h4 class="heading mb-0">Jan 23, 2021</h4>
                <ul class="flex flex-wrap nav-pills mt-4 sm:mt-0 mix-profile-tab" id="myTab" role="tablist">
                  <li class="nav-item ms-1" role="presentation">
                    <button class="rounded-lg py-2.5 px-3.6 text-primary duration-500" @click.prevent="tab = 'tabWeek3'" :class="{ ' bg-primary !text-white': tab == 'tabWeek3' }" type="button">
                      Week
                    </button>
                  </li>
                  <li class="nav-item ms-1" role="presentation">
                    <button class="rounded-lg py-2.5 px-3.6 text-primary duration-500" @click.prevent="tab = 'tabMonth3'" :class="{ ' bg-primary !text-white': tab == 'tabMonth3' }" type="button">
                      Month
                    </button>
                  </li>
                  <li class="nav-item ms-1" role="presentation">
                    <button class="rounded-lg py-2.5 px-3.6 text-primary duration-500" @click.prevent="tab = 'tabYear3'" :class="{ ' bg-primary !text-white': tab == 'tabYear3' }" type="button">
                      Year
                    </button>
                  </li>
                  <li class="nav-item ms-1" role="presentation">
                    <button class="rounded-lg py-2.5 px-3.6 text-primary duration-500" @click.prevent="tab = 'tabAll3'" :class="{ ' bg-primary !text-white': tab == 'tabAll3' }" type="button">
                      All
                    </button>
                  </li>
                </ul>
              </div>
              <div class="sm:p-5 p-4">
                <div class="tab-content">
                  <transition name="fade" mode="out-in">
                    <ActivitContent1 v-if="tab == 'tabWeek3'" />
                    <ActivitContent2 v-else-if="tab == 'tabMonth3'" />
                    <ActivitContent3 v-else-if="tab == 'tabYear3'" />
                    <ActivitContent4 v-else />
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
