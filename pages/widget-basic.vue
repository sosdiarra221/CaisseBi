<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import WidgetCard from "~/components/widget/WidgetCard.vue";
import WidgetChart1 from "~/components/widget/WidgetChart1.vue";
import bg from "~/assets/images/big/img1.jpg";
import bg2 from "~/assets/images/big/img5.jpg";
import VueApexCharts from "vue3-apexcharts";
import ChartJsChart from "~/components/widget/ChartJsChart.vue";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";

const state1 = reactive({
  series: [
    {
      name: "bar chart",
      data: [33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29, 38],
      bars: {
        show: true,
        lineWidth: 0,
        fillColor: "#FFAA2B",
      },
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    bars: {
      show: true,
      lineWidth: 0,
      fillColor: "#ffaa2b",
    },
    chart: {
      type: "bar",
      height: 50,
      width: "100%",
      toolbar: {
        show: false,
      },
    },

    colors: ["#ffb64a"],
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false, // hide x-axis ticks
      },
      axisBorder: {
        show: false, // hide x-axis ticks
      },
    },
  },
});
const state2 = reactive({
  series: [
    {
      name: "bar chart",
      data: [73, 53, 50, 67, 3, 56, 19, 59, 37, 32, 40, 26, 71, 19, 4, 53, 55, 31, 37, 67, 10, 21],
      bars: {
        show: true,
        lineWidth: 0,
        fillColor: "#FFAA2B",
      },
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    bars: {
      show: true,
      lineWidth: 0,
      fillColor: "var(--primary)",
    },
    chart: {
      type: "bar",
      height: 50,
      width: "100%",
      toolbar: {
        show: false,
      },
    },

    colors: ["var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false, // hide x-axis ticks
      },
      axisBorder: {
        show: false, // hide x-axis ticks
      },
    },
  },
});
const state3 = reactive({
  series: [
    {
      name: "bar chart",
      data: [79, 72, 29, 6, 52, 32, 73, 40, 14, 75, 77, 39, 9, 15, 10],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },

    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    fill: {
      colors: ["#01a3ff"],
      opacity: 1,
      type: "solid",
    },

    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      offsetY: 40,
    },

    colors: ["var(--primary)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false, // hide x-axis ticks
      },
      axisBorder: {
        show: false, // hide x-axis ticks
      },
    },
  },
});
const state4 = reactive({
  series: [
    {
      name: "High - 2013",
      data: [27, 31, 35, 28, 45, 52, 24, 4, 50, 11, 54, 49, 72, 59, 75],
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },

    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    fill: {
      colors: ["#feac8e"],
      opacity: 1,
      type: "solid",
    },

    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      offsetY: 40,
    },

    colors: ["#ff6e1d"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    yaxis: {
      show: false,
    },
    xaxis: {
      show: false,
      labels: {
        show: false,
      },
      axisTicks: {
        show: false, // hide x-axis ticks
      },
      axisBorder: {
        show: false, // hide x-axis ticks
      },
    },
  },
});
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Widget" name="Widget" />
    <div class="container">
      <div class="row">
        <WidgetCard />
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card">
            <div class="p-6 flex-auto">
              <div class="media flex items-center ai-icon">
                <span class="mr-4 text-primary bg-primarylight size-[53px] flex items-center justify-center rounded-full">
                  <svg
                    id="icon-customers"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                <div class="media-body flex-1">
                  <p class="mb-1 leading-6 font-medium">CANDIDATE</p>
                  <h4 class="text-2xl inline-block">3280</h4>
                  <span class="badge bg-primary text-white">+3.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card">
            <div class="p-6 flex-auto">
              <div class="media flex items-center ai-icon">
                <span class="mr-4 text-warning bg-warninglight size-[53px] flex items-center justify-center rounded-full">
                  <svg
                    id="icon-orders"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-file-text"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </span>
                <div class="media-body flex-1">
                  <p class="mb-1 leading-6 font-medium">FORMS</p>
                  <h4 class="text-2xl inline-block">2570</h4>
                  <span class="badge bg-warning text-white">+3.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card">
            <div class="p-6 flex-auto">
              <div class="media flex items-center ai-icon">
                <span class="mr-4 text-danger bg-dangerlight size-[53px] flex items-center justify-center rounded-full">
                  <svg
                    id="icon-revenue"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-dollar-sign"
                  >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </span>
                <div class="media-body flex-1">
                  <p class="mb-1 leading-6 font-medium">REVENUE</p>
                  <h4 class="text-2xl inline-block">364.50K</h4>
                  <span class="badge bg-danger text-white">-3.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card">
            <div class="p-6 flex-auto">
              <div class="media flex items-center ai-icon">
                <span class="mr-4 text-success bg-successlight size-[53px] flex items-center justify-center rounded-full">
                  <svg
                    id="icon-database-widget"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-database"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </span>
                <div class="media-body flex-1">
                  <p class="mb-1 leading-6 font-medium">CANDIDATE</p>
                  <h4 class="text-2xl inline-block">364.50K</h4>
                  <span class="badge bg-success text-white">-3.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card !bg-info">
            <div class="sm:p-5 p-4">
              <div class="flex items-center justify-between flex-wrap">
                <div>
                  <h4 class="text-white mb-2">9,825</h4>
                  <h5 class="text-white mb-2">Total Students</h5>
                  <span class="text-white">+0,5% than last month</span>
                </div>
                <div>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M57.4998 47.5001C57.4998 48.1631 57.2364 48.799 56.7676 49.2678C56.2988 49.7367 55.6629 50.0001 54.9998 50.0001H24.9998C24.3368 50.0001 23.7009 49.7367 23.2321 49.2678C22.7632 48.799 22.4998 48.1631 22.4998 47.5001C22.4998 43.5218 24.0802 39.7065 26.8932 36.8935C29.7063 34.0804 33.5216 32.5001 37.4998 32.5001H42.4998C46.4781 32.5001 50.2934 34.0804 53.1064 36.8935C55.9195 39.7065 57.4998 43.5218 57.4998 47.5001ZM39.9998 10.0001C38.022 10.0001 36.0886 10.5866 34.4441 11.6854C32.7996 12.7842 31.5179 14.346 30.761 16.1732C30.0041 18.0005 29.8061 20.0112 30.192 21.951C30.5778 23.8908 31.5302 25.6726 32.9288 27.0711C34.3273 28.4697 36.1091 29.4221 38.0489 29.8079C39.9887 30.1938 41.9994 29.9957 43.8267 29.2389C45.6539 28.482 47.2157 27.2003 48.3145 25.5558C49.4133 23.9113 49.9998 21.9779 49.9998 20.0001C49.9998 17.3479 48.9463 14.8044 47.0709 12.929C45.1955 11.0536 42.652 10.0001 39.9998 10.0001ZM17.4998 10.0001C15.522 10.0001 13.5886 10.5866 11.9441 11.6854C10.2996 12.7842 9.0179 14.346 8.26102 16.1732C7.50415 18.0005 7.30611 20.0112 7.69197 21.951C8.07782 23.8908 9.03022 25.6726 10.4287 27.0711C11.8273 28.4697 13.6091 29.4221 15.5489 29.8079C17.4887 30.1938 19.4994 29.9957 21.3267 29.2389C23.1539 28.482 24.7157 27.2003 25.8145 25.5558C26.9133 23.9113 27.4998 21.9779 27.4998 20.0001C27.4998 17.3479 26.4463 14.8044 24.5709 12.929C22.6955 11.0536 20.152 10.0001 17.4998 10.0001ZM17.4998 47.5001C17.4961 44.8741 18.0135 42.2735 19.0219 39.8489C20.0304 37.4242 21.5099 35.2238 23.3748 33.3751C21.8487 32.7989 20.2311 32.5025 18.5998 32.5001H16.3998C12.7153 32.5067 9.18366 33.9733 6.57833 36.5786C3.97301 39.1839 2.50643 42.7156 2.49982 46.4001V47.5001C2.49982 48.1631 2.76321 48.799 3.23205 49.2678C3.70089 49.7367 4.33678 50.0001 4.99982 50.0001H17.9498C17.6588 49.1984 17.5066 48.3529 17.4998 47.5001Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card !bg-success">
            <div class="sm:p-5 p-4">
              <div class="flex items-center justify-content-between flex-wrap">
                <div>
                  <h4 class="text-white mb-2">653</h4>
                  <h5 class="text-white mb-2">Total Teachers</h5>
                  <span class="text-white">-2% than last month</span>
                </div>
                <div>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path
                        d="M59.0284 17.8807L30.7862 3.81817C30.2918 3.57103 29.7082 3.57103 29.2138 3.81817L0.971632 17.8807C0.375968 18.1794 3.05176e-05 18.787 3.05176e-05 19.4531C3.05176e-05 20.1192 0.375968 20.7268 0.971632 21.0255L29.2138 35.088C29.461 35.2116 29.7305 35.2734 30 35.2734C30.2696 35.2734 30.5391 35.2116 30.7862 35.088L59.0284 21.0255C59.6241 20.7268 60 20.1192 60 19.4531C60 18.787 59.6241 18.1794 59.0284 17.8807Z"
                        fill="white"
                      ></path>
                      <path
                        d="M56.4844 46.1441V26.2285L52.9688 27.9863V46.1441C50.9271 46.8722 49.4532 48.805 49.4532 51.0937V54.6093C49.4532 55.5809 50.2394 56.3671 51.211 56.3671H58.2422C59.2138 56.3671 60 55.5809 60 54.6093V51.0937C60 48.805 58.526 46.8722 56.4844 46.1441Z"
                        fill="white"
                      ></path>
                      <path
                        d="M32.3587 38.2329C31.6308 38.5967 30.8154 38.789 30 38.789C29.1846 38.789 28.3692 38.5967 27.6414 38.2329L10.5469 29.7441V33.5156C10.5469 40.4147 19.1578 45.8203 30 45.8203C40.8422 45.8203 49.4532 40.4147 49.4532 33.5156V29.7441L32.3587 38.2329Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clipPath>
                        <rect width="60" height="60" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="flex items-center justify-between flex-wrap">
                <div>
                  <h4 class="mb-2">653</h4>
                  <h5 class="mb-2">Events</h5>
                </div>
                <div>
                  <div class="inline-block relative donut-chart-sale mb-4">
                    <span class="donut1" data-peity='{ "fill": ["rgb(59, 215, 225)", "rgba(245, 245, 245, 1"],   "innerRadius": 33, "radius": 10}' style="display: none">5/7</span
                    ><svg class="peity" height="100" width="100">
                      <path d="M 50 0 A 50 50 0 1 1 1.2536043909088193 61.126046697815724 L 17.82737889799982 57.34319082055838 A 33 33 0 1 0 50 17" data-value="5" fill="rgb(59, 215, 225)"></path>
                      <path
                        d="M 1.2536043909088193 61.126046697815724 A 50 50 0 0 1 49.99999999999999 0 L 49.99999999999999 17 A 33 33 0 0 0 17.82737889799982 57.34319082055838"
                        data-value="2"
                        fill="rgba(245, 245, 245, 1"
                      ></path>
                    </svg>
                    <small class="absolute top-1/2 left-1/2 [transform:translate(-50%,_-50%)] text-lg font-semibold">62%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="flex items-center justify-between flex-wrap">
                <div>
                  <h4 class="mb-2">456</h4>
                  <h5 class="mb-2">Foods</h5>
                </div>
                <div>
                  <div class="inline-block relative donut-chart-sale mb-4">
                    <span class="donut1" data-peity='{ "fill": ["rgb(255, 97, 117)", "rgba(245, 245, 245, 1"],   "innerRadius": 33, "radius": 10}' style="display: none">5/8</span
                    ><svg class="peity" height="100" width="100">
                      <path d="M 50 0 A 50 50 0 1 1 14.64466094067263 85.35533905932738 L 26.665476220843935 73.33452377915607 A 33 33 0 1 0 50 17" data-value="5" fill="rgb(255, 97, 117)"></path>
                      <path
                        d="M 14.64466094067263 85.35533905932738 A 50 50 0 0 1 49.99999999999999 0 L 49.99999999999999 17 A 33 33 0 0 0 26.665476220843935 73.33452377915607"
                        data-value="3"
                        fill="rgba(245, 245, 245, 1"
                      ></path>
                    </svg>
                    <small class="absolute top-1/2 left-1/2 [transform:translate(-50%,_-50%)] text-lg font-semibold">38%</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card !bg-primary">
            <div class="p-6 flex-auto">
              <div class="media flex items-center">
                <span class="mr-4 text-white bg-[#ffffff40] size-[53px] flex items-center justify-center rounded-full">
                  <i class="la la-users text-[2rem]"></i>
                </span>
                <div class="media-body text-white flex-1">
                  <p class="mb-1 leading-6 uppercase font-medium text-white">Total Candidates</p>
                  <h3 class="text-white text-2xl leading-[1.2]">3280</h3>
                  <div class="progress mb-2 h-1.5 overflow-hidden bg-[#ffffff40] rounded-lg flex">
                    <div class="progress-bar animate-myanimation whitespace-nowrap rounded-lg bg-white" style="width: 80%"></div>
                  </div>
                  <small class="text-xs">80% Increase in 20 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card !bg-warning">
            <div class="p-6 flex-auto">
              <div class="media flex items-center">
                <span class="mr-4 text-white bg-[#ffffff40] size-[53px] flex items-center justify-center rounded-full">
                  <i class="la la-user text-[2rem]"></i>
                </span>
                <div class="media-body text-white flex-1">
                  <p class="mb-1 leading-6 uppercase font-medium text-white">New Candidates</p>
                  <h3 class="text-white text-2xl leading-[1.2]">245</h3>
                  <div class="progress mb-2 h-1.5 overflow-hidden bg-[#ffffff40] rounded-lg flex">
                    <div class="progress-bar animate-myanimation whitespace-nowrap rounded-lg bg-white" style="width: 50%"></div>
                  </div>
                  <small class="text-xs">50% Increase in 25 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card !bg-secondary dark:!bg-d-bg">
            <div class="p-6 flex-auto">
              <div class="media flex items-center">
                <span class="mr-4 text-white bg-[#ffffff40] size-[53px] flex items-center justify-center rounded-full">
                  <i class="la la-graduation-cap text-[2rem]"></i>
                </span>
                <div class="media-body text-white flex-1">
                  <p class="mb-1 leading-6 uppercase font-medium text-white">Total Candidates</p>
                  <h3 class="text-white text-2xl leading-[1.2]">28</h3>
                  <div class="progress mb-2 h-1.5 overflow-hidden bg-[#ffffff40] rounded-lg flex">
                    <div class="progress-bar animate-myanimation whitespace-nowrap rounded-lg bg-white" style="width: 76%"></div>
                  </div>
                  <small class="text-xs">76% Increase in 20 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card !bg-danger">
            <div class="p-6 flex-auto">
              <div class="media flex items-center">
                <span class="mr-4 text-white bg-[#ffffff40] size-[53px] flex items-center justify-center rounded-full">
                  <i class="la la-dollar text-[2rem]"></i>
                </span>
                <div class="media-body text-white flex-1">
                  <p class="mb-1 leading-6 uppercase font-medium text-white">TFees Collect</p>
                  <h3 class="text-white text-2xl leading-[1.2]">250$</h3>
                  <div class="progress mb-2 h-1.5 overflow-hidden bg-[#ffffff40] rounded-lg flex">
                    <div class="progress-bar animate-myanimation whitespace-nowrap rounded-lg bg-white" style="width: 30%"></div>
                  </div>
                  <small class="text-xs">30% Increase in 30 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card">
            <div class="p-6 flex-auto">
              <h4 class="text-base mb-2">Total Students</h4>
              <h3 class="xl:text-2xl mb-2">3280</h3>
              <div class="progress mb-2 h-1.5 overflow-hidden bg-[#e9ecef] dark:bg-[#17171E] rounded-lg flex">
                <div class="progress-bar animate-myanimation whitespace-nowrap rounded-lg bg-primary" style="width: 80%"></div>
              </div>
              <small>80% Increase in 20 Days</small>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card">
            <div class="p-6 flex-auto">
              <h4 class="text-base mb-2">New Students</h4>
              <h3 class="xl:text-2xl mb-2">245</h3>
              <div class="progress mb-2 h-1.5 overflow-hidden bg-[#e9ecef] dark:bg-[#17171E] rounded-lg flex">
                <div class="progress-bar animate-myanimation whitespace-nowrap rounded-lg bg-warning" style="width: 50%"></div>
              </div>
              <small>50% Increase in 25 Days</small>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card">
            <div class="p-6 flex-auto">
              <h4 class="text-base mb-2">Total Course</h4>
              <h3 class="xl:text-2xl mb-2">28</h3>
              <div class="progress mb-2 h-1.5 overflow-hidden bg-[#e9ecef] dark:bg-[#17171E] rounded-lg flex">
                <div class="progress-bar animate-myanimation whitespace-nowrap rounded-lg bg-primary" style="width: 76%"></div>
              </div>
              <small>76% Increase in 20 Days</small>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
          <div class="widget-stat card">
            <div class="p-6 flex-auto">
              <h4 class="text-base mb-2">Fees Collection</h4>
              <h3 class="xl:text-2xl mb-2">25160$</h3>
              <div class="progress mb-2 h-1.5 overflow-hidden bg-[#e9ecef] dark:bg-[#17171E] rounded-lg flex">
                <div class="progress-bar animate-myanimation whitespace-nowrap rounded-lg bg-success" style="width: 30%"></div>
              </div>
              <small>30% Increase in 30 Days</small>
            </div>
          </div>
        </div>
        <WidgetChart1 />

        <div class="xl:w-1/3 w-full">
          <div class="card overflow-hidden">
            <div class="text-center p-4 relative z-[1] overlay-box" :style="`background-image: url(${bg})`">
              <div class="profile-photo">
                <img src="assets/images/profile/profile.png" width="100" class="img-fluid rounded-full inline-block" alt="" />
              </div>
              <h3 class="mt-4 mb-1 text-white">Deangelo Sena</h3>
              <p class="text-white mb-0">Senior Manager</p>
            </div>
            <ul class="flex flex-col border-b border-border">
              <li class="flex p-4 text-dark text-sm justify-between dark:text-white"><span>Patient Gender</span> <strong>Female </strong></li>
              <li class="flex p-4 text-dark text-sm justify-between dark:text-white">
                <span>Years Old</span>
                <strong>Age: 24</strong>
              </li>
            </ul>
            <div class="py-4 px-5">
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-lg block w-full"><i class="fa fa-bell-o"></i> Reminder Alarm</button>
            </div>
          </div>
        </div>
        <div class="col-xxl-12 w-full">
          <div class="card">
            <div class="flex flex-wrap justify-between items-center sm:pt-6 py-5 sm:px-5 px-4 relative border-b border-border">
              <h4 class="text-base">Recent Payments Queue</h4>
            </div>
            <div class="sm:p-5 p-4 flex-auto">
              <div class="overflow-x-auto recentOrderTable">
                <table class="table w-full mb-4 min-w-[36rem] text-left">
                  <thead>
                    <tr>
                      <th scope="col" class="font-medium sm:text-base border-b border-border">Ward No.</th>
                      <th scope="col" class="font-medium sm:text-base border-b border-border">Patient</th>
                      <th scope="col" class="font-medium sm:text-base border-b border-border">Dr Name</th>
                      <th scope="col" class="font-medium sm:text-base border-b border-border">Date</th>
                      <th scope="col" class="font-medium sm:text-base border-b border-border">Status</th>
                      <th scope="col" class="font-medium sm:text-base border-b border-border">Bills</th>
                      <th scope="col" class="font-medium sm:text-base border-b border-border text-right"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border-b border-border">12</td>
                      <td class="border-b border-border">Mr. Bobby</td>
                      <td class="border-b border-border">Dr. Jackson</td>
                      <td class="border-b border-border">01 August 2020</td>
                      <td class="border-b border-border"><span class="badge text-white bg-success !rounded-full">Checkin</span></td>
                      <td class="border-b border-border">$120</td>
                      <td class="text-right border-b border-border">
                        <CustomeDropDown class="relative inline-block">
                          <template #trigger>
                            <div class="btn bg-primary hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <rect x="0" y="0" width="24" height="24" />
                                  <circle fill="#fff" cx="12" cy="5" r="2" />
                                  <circle fill="#fff" cx="12" cy="12" r="2" />
                                  <circle fill="#fff" cx="12" cy="19" r="2" />
                                </g>
                              </svg>
                            </div>
                          </template>
                          <template #menu>
                            <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                              <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Details</a>
                              <a class="py-2 px-5 block hover:bg-primarylight text-danger" href="javascript:void(0);">Cancel</a>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border">10</td>
                      <td class="border-b border-border">Mr. Dexter</td>
                      <td class="border-b border-border">Dr. Charles</td>
                      <td class="border-b border-border">31 July 2020</td>
                      <td class="border-b border-border"><span class="badge text-white bg-warning !rounded-full">Panding</span></td>
                      <td class="border-b border-border">$540</td>
                      <td class="text-right border-b border-border">
                        <CustomeDropDown class="relative inline-block">
                          <template #trigger>
                            <div class="btn bg-primary hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <rect x="0" y="0" width="24" height="24" />
                                  <circle fill="#fff" cx="12" cy="5" r="2" />
                                  <circle fill="#fff" cx="12" cy="12" r="2" />
                                  <circle fill="#fff" cx="12" cy="19" r="2" />
                                </g>
                              </svg>
                            </div>
                          </template>
                          <template #menu>
                            <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                              <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Details</a>
                              <a class="py-2 px-5 block hover:bg-primarylight text-danger" href="javascript:void(0);">Cancel</a>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border">03</td>
                      <td class="border-b border-border">Mr. Nathan</td>
                      <td class="border-b border-border">Dr. Frederick</td>
                      <td class="border-b border-border">30 July 2020</td>
                      <td class="border-b border-border"><span class="badge text-white bg-danger !rounded-full">Canceled</span></td>
                      <td class="border-b border-border">$301</td>
                      <td class="text-right border-b border-border">
                        <CustomeDropDown class="relative inline-block">
                          <template #trigger>
                            <div class="btn bg-primary hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <rect x="0" y="0" width="24" height="24" />
                                  <circle fill="#fff" cx="12" cy="5" r="2" />
                                  <circle fill="#fff" cx="12" cy="12" r="2" />
                                  <circle fill="#fff" cx="12" cy="19" r="2" />
                                </g>
                              </svg>
                            </div>
                          </template>
                          <template #menu>
                            <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                              <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Details</a>
                              <a class="py-2 px-5 block hover:bg-primarylight text-danger" href="javascript:void(0);">Cancel</a>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border">05</td>
                      <td class="border-b border-border">Mr. Aurora</td>
                      <td class="border-b border-border">Dr. Roman</td>
                      <td class="border-b border-border">29 July 2020</td>
                      <td class="border-b border-border"><span class="badge text-white bg-success !rounded-full">Checkin</span></td>
                      <td class="border-b border-border">$099</td>
                      <td class="text-right border-b border-border">
                        <CustomeDropDown class="relative inline-block">
                          <template #trigger>
                            <div class="btn bg-primary hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <rect x="0" y="0" width="24" height="24" />
                                  <circle fill="#fff" cx="12" cy="5" r="2" />
                                  <circle fill="#fff" cx="12" cy="12" r="2" />
                                  <circle fill="#fff" cx="12" cy="19" r="2" />
                                </g>
                              </svg>
                            </div>
                          </template>
                          <template #menu>
                            <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                              <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Details</a>
                              <a class="py-2 px-5 block hover:bg-primarylight text-danger" href="javascript:void(0);">Cancel</a>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-b border-border">06</td>
                      <td class="border-b border-border">Mr. Matthew</td>
                      <td class="border-b border-border">Dr. Samantha</td>
                      <td class="border-b border-border">28 July 2020</td>
                      <td class="border-b border-border"><span class="badge text-white bg-success !rounded-full">Checkin</span></td>
                      <td class="border-b border-border">$520</td>
                      <td class="text-right border-b border-border">
                        <CustomeDropDown class="relative inline-block">
                          <template #trigger>
                            <div class="btn bg-primary hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                  <rect x="0" y="0" width="24" height="24" />
                                  <circle fill="#fff" cx="12" cy="5" r="2" />
                                  <circle fill="#fff" cx="12" cy="12" r="2" />
                                  <circle fill="#fff" cx="12" cy="19" r="2" />
                                </g>
                              </svg>
                            </div>
                          </template>
                          <template #menu>
                            <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                              <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0);">Details</a>
                              <a class="py-2 px-5 block hover:bg-primarylight text-danger" href="javascript:void(0);">Cancel</a>
                            </div>
                          </template>
                        </CustomeDropDown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="xl:w-1/3 lg:w-1/2 col-xxl-4 sm:w-1/2">
          <div class="card text-white !bg-primary">
            <ul class="list-group flex flex-col list-group-flush">
              <li class="flex justify-between py-4 px-6"><span>Blood type :</span><strong>O+</strong></li>
              <li class="flex justify-between py-4 px-6"><span>Allergies :</span><strong>Penicilin, peanuts </strong></li>
              <li class="flex justify-between py-4 px-6"><span>Pressure :</span><strong>120/100 mmHG</strong></li>
              <li class="flex justify-between py-4 px-6"><span>Diseases :</span><strong>Diabetes</strong></li>
              <li class="flex justify-between py-4 px-6"><span>Temperture :</span><strong>34 Degree</strong></li>
            </ul>
          </div>
        </div>
        <div class="xl:w-1/3 lg:w-1/2 col-xxl-4 sm:w-1/2">
          <div class="card text-white !bg-warning">
            <ul class="list-group flex flex-col list-group-flush">
              <li class="flex justify-between py-4 px-6"><span>Regular Checkups</span><strong></strong></li>
              <li class="flex justify-between py-4 px-6"><span>Dr Theodore Handle :</span><strong>Dentist</strong></li>
              <li class="flex justify-between py-4 px-6"><span>Dr Valentino Morose :</span><strong>Surgeon</strong></li>
              <li class="flex justify-between py-4 px-6"><span>Dr Fleece Marigold :</span><strong>Clinical</strong></li>
              <li class="flex justify-between py-4 px-6"><span>Dr Eric Widget :</span><strong>Cardiology</strong></li>
            </ul>
          </div>
        </div>
        <div class="xl:w-1/3 col-xxl-4 w-full">
          <div class="card">
            <div class="sm:p-5 p-4 flex-auto text-center ai-icon text-primary">
              <svg id="rocket-icon" class="my-2" viewBox="0 0 24 24" width="80" height="80" stroke="currentColor" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <h4 class="my-2">You don’t have badges yet</h4>
              <a href="javascript:void(0);" class="my-2 !px-6 btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-lg"><i class="fa fa-usd"></i> Earn Budges</a>
            </div>
          </div>
        </div>

        <div class="xl:w-2/3 col-xxl-8 w-full">
          <div class="row">
            <div class="md:w-1/2">
              <div class="card overflow-hidden">
                <div class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap">
                  <div class="clearfix">
                    <h3 class="text-dark text-base">Blood pressure</h3>
                    <span>In the normal</span>
                  </div>
                  <div class="clearfix text-center">
                    <h3 class="text-primary mb-0">120/89</h3>
                    <span>mmHG</span>
                  </div>
                </div>
                <div class="sm:p-5 p-4 flex-auto text-center">
                  <div class="ico-sparkline">
                    <div id="spark-bar">
                      <ClientOnly>
                        <VueApexCharts height="130px" :series="state1.series" :options="state1.chartOptions" />
                      </ClientOnly>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="card overflow-hidden">
                <div class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap">
                  <div class="clearfix">
                    <h3 class="text-dark text-base">Heart Rate</h3>
                    <span class="text-danger text-sm">Above the normal</span>
                  </div>
                  <div class="clearfix text-center">
                    <h3 class="text-danger mb-0">107</h3>
                    <span>Per Min</span>
                  </div>
                </div>
                <div class="sm:p-5 p-4 flex-auto text-center">
                  <div class="ico-sparkline">
                    <div id="composite-bar">
                      <ClientOnly>
                        <VueApexCharts height="130px" :series="state2.series" :options="state2.chartOptions" />
                      </ClientOnly>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="card overflow-hidden">
                <div class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap">
                  <div class="clearfix">
                    <h3 class="text-dark text-base">Glucose Rate</h3>
                    <span>In the normal</span>
                  </div>
                  <div class="clearfix text-center">
                    <h3 class="text-success mb-0">97</h3>
                    <span>mg/dl</span>
                  </div>
                </div>
                <div class="sm:p-5 p-4 flex-auto text-center">
                  <div class="ico-sparkline">
                    <div id="sparkline8">
                      <ClientOnly>
                        <VueApexCharts height="80px" :series="state3.series" :options="state3.chartOptions" />
                      </ClientOnly>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:w-1/2">
              <div class="card overflow-hidden">
                <div class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap">
                  <div class="clearfix">
                    <h3 class="text-dark text-base">Clolesterol</h3>
                    <span>In the normal</span>
                  </div>
                  <div class="clearfix text-center">
                    <h3 class="text-info mb-0">124</h3>
                    <span>mg/dl</span>
                  </div>
                </div>
                <div class="sm:p-5 p-4 flex-auto text-center">
                  <div class="ico-sparkline">
                    <div id="sparkline9" class="height80;">
                      <ClientOnly>
                        <VueApexCharts height="80px" :series="state4.series" :options="state4.chartOptions" />
                      </ClientOnly>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="xl:w-1/3 w-full">
          <div class="card overflow-hidden">
            <div class="text-center p-12 relative z-[1] overlay-box" :style="`background-image: url(${bg2})`">
              <img src="assets/images/profile/profile.png" width="100" class="img-fluid rounded-full inline-block" alt="" />
              <h3 class="mt-4 mb-0 text-white">Deangelo Sena</h3>
            </div>
            <div class="sm:p-5 p-4 flex-auto">
              <div class="row text-center">
                <div class="!w-1/2">
                  <div class="bg-primarylight rounded-lg p-4">
                    <h4 class="mb-0">Female</h4>
                    <small class="">Patient Gender</small>
                  </div>
                </div>
                <div class="!w-1/2">
                  <div class="bg-primarylight rounded-lg p-4">
                    <h4 class="mb-0">Age: 24</h4>
                    <small class="">Years Old</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="py-4 px-5 f border-t border-border">
              <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-lg block w-full">View Profile</button>
            </div>
          </div>
        </div>

        <ChartJsChart />

        <div class="xl:w-1/4 sm:w-1/2">
          <div class="card overflow-hidden">
            <div class="p-5 text-white text-center bg-[#1877F2]">
              <span class="text-2xl relative px-2.5"><i class="fab fa-facebook-f"></i></span>
            </div>
            <div class="row">
              <div class="!w-1/2 border-r border-border">
                <div class="pt-4 pb-4 text-center">
                  <h4 class="m-1"><span class="counter">89</span> k</h4>
                  <p class="m-0">Friends</p>
                </div>
              </div>
              <div class="!w-1/2 border-border">
                <div class="pt-4 pb-4 text-center">
                  <h4 class="m-1"><span class="counter">119</span> k</h4>
                  <p class="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 sm:w-1/2">
          <div class="card overflow-hidden">
            <div class="p-5 text-white text-center bg-[#1976D2]">
              <span class="text-2xl relative px-2.5"><i class="fab fa-linkedin-in"></i></span>
            </div>
            <div class="row">
              <div class="!w-1/2 border-r border-border">
                <div class="pt-4 pb-4 text-center">
                  <h4 class="m-1"><span class="counter">89</span> k</h4>
                  <p class="m-0">Friends</p>
                </div>
              </div>
              <div class="!w-1/2 border-border">
                <div class="pt-4 pb-4 text-center">
                  <h4 class="m-1"><span class="counter">119</span> k</h4>
                  <p class="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 sm:w-1/2">
          <div class="card overflow-hidden">
            <div class="p-5 text-white text-center bg-google-plus">
              <span class="text-2xl relative px-2.5"><i class="fab fa-google-plus-g"></i></span>
            </div>
            <div class="row">
              <div class="!w-1/2 border-r border-border">
                <div class="pt-4 pb-4 text-center">
                  <h4 class="m-1"><span class="counter">89</span> k</h4>
                  <p class="m-0">Friends</p>
                </div>
              </div>
              <div class="!w-1/2 border-border">
                <div class="pt-4 pb-4 text-center">
                  <h4 class="m-1"><span class="counter">119</span> k</h4>
                  <p class="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 sm:w-1/2">
          <div class="card overflow-hidden">
            <div class="p-5 text-white text-center bg-twitter">
              <span class="text-2xl relative px-2.5"><i class="fab fa-twitter"></i></span>
            </div>
            <div class="row">
              <div class="!w-1/2 border-r border-border">
                <div class="pt-4 pb-4 text-center">
                  <h4 class="m-1"><span class="counter">89</span> k</h4>
                  <p class="m-0">Friends</p>
                </div>
              </div>
              <div class="!w-1/2 border-border">
                <div class="pt-4 pb-4 text-center">
                  <h4 class="m-1"><span class="counter">119</span> k</h4>
                  <p class="m-0">Followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
