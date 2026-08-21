<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
defineProps<{
  title: string;
}>();

const tabLinks = [
  { lable: "Overview", link: "/account/overview" },
  { lable: "Settings", link: "/account/settings" },
  { lable: "Security", link: "/account/security" },
  { lable: "Activity", link: "/account/activity" },
  { lable: "Billing", link: "/account/billing" },
  { lable: "Statements", link: "/account/statements" },
  { lable: "Referrals", link: "/account/referrals" },
  { lable: "Api keys", link: "/account/api-keys" },
  { lable: "Logs", link: "/account/logs" },
];
const state = reactive({
  series: [
    {
      name: "Net Profit",
      data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
    },
  ],
  chartOptions: {
    chart: {
      type: "area",
      height: 100,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: ["var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 2,
      curve: "straight",
      colors: ["var(--primary)"],
    },
    grid: {
      show: false,
      borderColor: "#eee",
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: -1,
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    xaxis: {
      categories: ["Jan", "feb", "Mar", "Apr", "May", "June", "July", "August", "Sept", "Oct"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          fontSize: "12px",
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
        // formatter: false,
        offsetY: 0,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 0.9,
      colors: "var(--primary)",
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 0,
            color: "var(--primary)",
            opacity: 0.4,
          },
          {
            offset: 0.6,
            color: "var(--primary)",
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "white",
            opacity: 0,
          },
        ],
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val: string) {
          return "$" + val;
        },
      },
    },
  },
});
</script>

<template>
  <ClientOnly>
    <div class="card profile-overview">
      <div class="sm:p-7.5 p-3.6 flex">
        <div class="inline-block relative sm:me-6 me-4 mb-4 lg:mb-0 h-fit">
          <img src="../../assets/images/avatar/pic7.jpg" alt="" class="rounded-2xl size-40 min-w-40 max-lg:size-25 max-lg:min-w-25 max-sm:!size-20 max-sm:!min-w-20" />
          <span class="fa fa-circle border-[3px] border-white text-success absolute bottom-0 right-0 rounded-full"></span>
        </div>
        <div class="xl:flex grow">
          <div class="md:pr-12">
            <h3 class="font-semibold mb-1">Atkinson <img src="../../assets/images/blue-tick.png" alt="Blue Tick" class="inline-block" /></h3>
            <ul class="flex flex-wrap text-2sm items-center">
              <li class="mr-4 inline-flex items-center max-sm:text-2xs"><i class="las la-user me-1 text-lg"></i>Web Designer</li>
              <li class="mr-4 inline-flex items-center max-sm:text-2xs"><i class="las la-map-marker me-1 text-lg"></i>420 City Path, AU 123-456</li>
              <li class="mr-4 inline-flex items-center max-sm:text-2xs"><i class="las la-envelope me-1 text-lg"></i>info@gmail.com</li>
            </ul>
            <div class="md:flex hidden flex-wrap">
              <div class="border border-dashed border-border rounded-lg p-2 flex items-center mr-4 mt-4">
                <div class="size-[45px] bg-primarylight text-primary rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1V23" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                      d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                      stroke="var(--primary)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="ms-2">
                  <h3 class="font-semibold leading-none">$1,250</h3>
                  <span>Total Earnings</span>
                </div>
              </div>
              <div class="border border-dashed border-border rounded-lg p-2 flex items-center mr-4 mt-4">
                <div class="size-[45px] bg-primarylight text-primary rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="var(--primary)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="var(--primary)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="var(--primary)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="var(--primary)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="ms-2">
                  <h3 class="font-semibold leading-none">125</h3>
                  <span>New Referrals</span>
                </div>
              </div>
              <div class="border border-dashed border-border rounded-lg p-2 flex items-center mr-4 mt-4">
                <div class="size-[45px] bg-primarylight text-primary rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                      stroke="var(--primary)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                      stroke="var(--primary)"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="ms-2">
                  <h3 class="font-semibold leading-none">25</h3>
                  <span>New Deals</span>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 xl:mt-0 ms-auto flex flex-col xl:w-1/4">
            <div class="mb-4 xl:text-end flex flex-wrap">
              <a href="javascript:void(0);" class="btn bg-light text-textdark">Follow</a>
              <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white ms-2">Offer a Deal</a>
            </div>
            <div class="mt-auto flex items-center">
              <div class="mr-4">
                <span class="font-medium text-secondary block mb-1">Progress</span>
                <p class="flex">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.83334 14.1668L14.1667 5.8335" stroke="#01BD9B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M5.83334 5.8335H14.1667V14.1668" stroke="#01BD9B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <span class="text-success me-1">+3.50%</span>
                </p>
              </div>
              <div id="chartProfileProgress">
                <VueApexCharts type="area" height="75px" :options="state.chartOptions" :series="state.series" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-border flex flex-wrap justify-between items-center sm:px-7.5 px-3.6">
        <ul class="flex flex-wrap gap-x-4 max-sm:text-xs" id="tabMyProfileBottom" role="tablist">
          <li class="nav-item ms-1" role="presentation" v-for="({ lable, link }, ind) in tabLinks" :key="ind">
            <NuxtLink :to="link" :class="` ${title == lable ? 'border-secondary font-bold' : 'border-transparent'} block py-4 border-b-[3px]  text-secondary `">{{ lable }}</NuxtLink>
          </li>
        </ul>
        <ul class="md:flex hidden py-2">
          <li class="px-1">
            <a class="btn bg-light text-textdark size-9 !leading-9 !p-0 text-center" href="javascript:void(0);">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li class="px-1">
            <a class="btn bg-light text-textdark size-9 !leading-9 !p-0 text-center" href="javascript:void(0);">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li class="px-1">
            <a class="btn bg-light text-textdark size-9 !leading-9 !p-0 text-center" href="javascript:void(0);">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li class="px-1">
            <a class="btn bg-light text-textdark size-9 !leading-9 !p-0 text-center" href="javascript:void(0);">
              <i class="fa-brands fa-telegram"></i>
            </a>
          </li>
          <li class="px-1">
            <a class="btn bg-light text-textdark size-9 !leading-9 !p-0 text-center" href="javascript:void(0);">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </ClientOnly>
</template>
