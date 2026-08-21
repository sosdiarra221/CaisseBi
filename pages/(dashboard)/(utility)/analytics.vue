<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
import ProfileSiedbar from "~/components/analytics/ProfileSiedbar.vue";
import RevenueChart from "~/components/analytics/RevenueChart.vue";
import VisitorChart from "~/components/analytics/VisitorChart.vue";
import OptionSelect from "~/components/OptionSelect.vue";

useHead({
  bodyAttrs: {
    "data-sidebarbg": "color_4",
    "data-nav-headerbg": "color_4",
  },
});

const open = ref<number | null>(null);
const data = reactive([
  { text: "Total Sales", price: "$420", title: "Sales" },
  { text: "Send Invoices Total", price: "$1200", title: "Invoice" },
  { text: "Quotes Send", price: "20", title: "Quotes" },
  { text: "Total Contacts", price: "40k", title: "Contacts" },
  { text: "Total New Lead", price: "1.2k", title: "New Lead" },
  { text: "Total New Clients", price: "227", title: "New Clients" },
  { text: "Total Repeat Clients", price: "750", title: "Repeat Clients" },
  { text: "Total Order", price: "$420", title: "Order" },
]);
const tab = ref("common");

function showHandler(index: number) {
  if (index == open.value) {
    open.value = null;
  } else {
    open.value = index;
  }
}

onMounted(() => {
  document.addEventListener("click", function (e: Event) {
    let target = e.target as HTMLElement;
    if (!target.closest("#analytics_dropdown")) {
      open.value = null;
    }
  });
});

const state = {
  series: [37.5, 7.8, 12.5, 5.2, 19, 18],
  options: {
    chart: {
      type: "donut",
      parentHeightOffset: 0,
      sparkline: {
        enabled: true,
      },
    },
    colors: ["var(--primary)", "#F89D16", "#313949", "#21C68A", "#FF7A59", "#E9EDF5"],
    legend: {
      show: false,
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        size: 200,
        donut: {
          labels: {
            show: true,
            name: {
              show: false,
            },
            value: {
              show: true,
              formatter: function (val: string) {
                return val + "%";
              },
            },
            total: {
              show: true,
              formatter: function (w: any) {
                return w.globals.seriesTotals[0] + "%";
              },
            },
          },
        },
      },
    },
  },
};

definePageMeta({
  layout: "utility",
});
</script>

<template>
  <div class="content-body bg-[#E7EAE1] dark:bg-d-bg">
    <div class="container">
      <div class="grid grid-cols-12 gap-x-6">
        <div class="lg:col-span-3 sm:col-span-4 col-span-6" v-for="({ price, title, text }, ind) in data" :key="ind">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="flex items-center justify-between">
                <div>
                  <h6 class="text-sm">{{ title }}</h6>
                </div>
                <div class="relative">
                  <a href="javascript:void(0);" role="button" @click="showHandler(ind)">
                    <svg id="analytics_dropdown" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9.99989" cy="10" r="0.833333" transform="rotate(105 9.99989 10)" stroke="var(--secondary)" stroke-width="1.5" stroke-linecap="round" />
                      <circle cx="9.99989" cy="5.00002" r="0.833333" transform="rotate(105 9.99989 5.00002)" stroke="var(--secondary)" stroke-width="1.5" stroke-linecap="round" />
                      <circle cx="9.99989" cy="15" r="0.833333" transform="rotate(105 9.99989 15)" stroke="var(--secondary)" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                  </a>
                  <Transition
                    enter-active-class="transition-all"
                    enter-to-class="opacity-100 scale-100"
                    enter-from-class="scale-0 opacity-0"
                    v-show.transition.origin.top.left="open == ind ? true : false"
                    v-cloak
                  >
                    <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-full min-w-40 mt-1 z-1">
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                      <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                    </div>
                  </Transition>
                </div>
              </div>
              <div>
                <h2>{{ price }}</h2>
                <p class="font-medium">{{ text }}</p>
              </div>
              <div class="flex items-center justify-between mt-12">
                <p class="me-1 text-2xs font-medium">Last</p>
                <OptionSelect
                  class-name="py-2 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select style-2 inline-flex items-center !py-1.1 !px-3 max-sm:hidden form-control !w-24"
                  :options="[{ lable: '30 Days' }, { lable: '20 Days' }, { lable: '15 Days' }, { lable: '10 Days' }]"
                />
                <a href="javascript:void(0);" class="ml-auto">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16.6665 10L17.1968 9.46967L17.7272 10L17.1968 10.5303L16.6665 10ZM4.1665 10.75C3.75229 10.75 3.4165 10.4142 3.4165 10C3.4165 9.58579 3.75229 9.25 4.1665 9.25V10.75ZM12.1968 4.46967L17.1968 9.46967L16.1362 10.5303L11.1362 5.53033L12.1968 4.46967ZM17.1968 10.5303L12.1968 15.5303L11.1362 14.4697L16.1362 9.46967L17.1968 10.5303ZM16.6665 10.75H4.1665V9.25H16.6665V10.75Z"
                      fill="#0176D3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-6 col-span-12">
          <div class="card flex flex-col">
            <div class="border-b border-border relative py-4.5 px-5 justify-between items-center flex-wrap flex gap-2">
              <div class="flex gap-2">
                <h4 class="card-title">Products Overview</h4>
              </div>
              <a class="text-2xs text-primary" href="javascript:void(0);"
                >Add Product
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="6" stroke="var(--primary)" stroke-width="1.5" />
                  <path d="M8 10L8 6" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="square" />
                  <path d="M10 8L6 8" stroke="var(--primary)" stroke-width="1.5" stroke-linecap="square" />
                </svg>
              </a>
            </div>
            <div class="sm:p-5 p-4">
              <div class="row items-center">
                <div class="lg:w-7/12 sm:w-1/2">
                  <div id="overview-chart">
                    <ClientOnly>
                      <VueApexCharts :series="state.series" :options="state.options" />
                    </ClientOnly>
                  </div>
                </div>
                <div class="lg:w-5/12 sm:w-1/2">
                  <div class="title">
                    <h5 class="mb-0 text-2sm">Cloth Market Cap</h5>
                    <h4 class="text-primary fs-20">272.07M</h4>
                  </div>
                  <div>
                    <p class="mb-2 font-medium">Overview</p>
                    <ul>
                      <li>
                        <a href="javascript:void(0);" class="flex justify-between mb-2 text-2xs">
                          <span class="flex items-center gap-2">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect y="0.257324" width="14" height="14" rx="4" fill="#0176D3" /></svg
                            >Cloths
                          </span>
                          <span class="text-secondary font-semibold">37.5%</span></a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="flex justify-between mb-2 text-2xs">
                          <span class="flex items-center gap-2">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect y="0.257324" width="14" height="14" rx="4" fill="#F89D16" /></svg
                            >Furnitur
                          </span>
                          <span class="text-secondary font-semibold">7.8%</span></a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="flex justify-between mb-2 text-2xs">
                          <span class="flex items-center gap-2">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect y="0.257324" width="14" height="14" rx="4" fill="#313949" /></svg
                            >Shoes
                          </span>
                          <span class="text-secondary font-semibold">12.5%</span></a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="flex justify-between mb-2 text-2xs">
                          <span class="flex items-center gap-2">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect y="0.257324" width="14" height="14" rx="4" fill="#21C68A" /></svg
                            >Toys
                          </span>
                          <span class="text-secondary font-semibold">5.2%</span></a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="flex justify-between mb-2 text-2xs">
                          <span class="flex items-center gap-2">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect y="0.257324" width="14" height="14" rx="4" fill="#FF7A59" /></svg
                            >Electronics
                          </span>
                          <span class="text-secondary font-semibold">19%</span></a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="flex justify-between mb-2 text-2xs">
                          <span class="flex items-center gap-2">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect y="0.257324" width="14" height="14" rx="4" fill="#E9EDF5" /></svg
                            >Others
                          </span>
                          <span class="text-secondary font-semibold">18%</span></a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-6 col-span-12">
          <VisitorChart />
        </div>
        <div class="lg:col-span-6 col-span-12">
          <RevenueChart />
        </div>
        <div class="lg:col-span-6 col-span-12">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap gap-2">
              <h4 class="card-title">Support</h4>
              <ul class="nav nav-tabs flex items-center support-tab">
                <li class="nav-item m-0">
                  <a
                    class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-secondary duration-500 text-2xs font-medium"
                    :class="{ 'bg-primary text-white': tab == 'common' }"
                    @click.prevent="tab = 'common'"
                    href="javascript:void(0);"
                    >Common Questions</a
                  >
                </li>
                <li class="nav-item m-0">
                  <a
                    class="nav-link mx-1 bg-light rounded-lg py-2 px-3 text-secondary duration-500 text-2xs font-medium"
                    :class="{ 'bg-primary text-white': tab == 'ticket' }"
                    @click.prevent="tab = 'ticket'"
                    href="javascript:void(0);"
                    >Ticket & Chat Support</a
                  >
                </li>
              </ul>
            </div>
            <div class="sm:p-5 p-4">
              <div class="tab-content">
                <!-- common list start -->
                <transition
                  v-show="tab == 'common'"
                  enter-active-class="transition-all duration-500 easy-in-out"
                  enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
                  enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
                >
                  <div class="row gx-3">
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">United Kingdom</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">0808-189-1224</a>
                      </div>
                    </div>
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">Indonesia</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">803-015-203-9781</a>
                      </div>
                    </div>
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">Malaysia</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">1800-813-018</a>
                      </div>
                    </div>
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">Singapore</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">800-120-6457</a>
                      </div>
                    </div>
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">India</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">+91-800-100</a>
                      </div>
                    </div>
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">All other countries</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">+1-512-758-7588</a>
                      </div>
                    </div>
                  </div>
                </transition>
                <transition
                  v-show="tab == 'ticket'"
                  enter-active-class="transition-all duration-500 easy-in-out"
                  enter-from-class="opacity-0 [transform:translate3d(0,1rem,0)]"
                  enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
                >
                  <div class="row gx-3">
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">Australia</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">1800-821-758</a>
                      </div>
                    </div>
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">New Zealand</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">0800-001046</a>
                      </div>
                    </div>
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">United Kingdom</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">0808-189-1224</a>
                      </div>
                    </div>
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">Indonesia</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">803-015-203-9781</a>
                      </div>
                    </div>
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">Malaysia</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">1800-813-018</a>
                      </div>
                    </div>
                    <div class="!w-1/2">
                      <div class="border border-[#D1DAEC] dark:border-white/20 p-3.6 rounded-lg mb-2.5 duration-700 hover:!border-primary hover:bg-[#F8FCFF] dark:hover:bg-primarylight">
                        <p class="text-primary text-2xs font-medium">Singapore</p>
                        <a class="text-2xs font-medium text-secondary" href="javascript:void(0);">800-120-6457</a>
                      </div>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
        <ProfileSiedbar />
      </div>
    </div>
  </div>
</template>
