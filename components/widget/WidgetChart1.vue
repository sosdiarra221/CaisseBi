<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
import VisitorChart from "./VisitorChart.vue";

const state = reactive({
  series: [17.6, 44.9, 37.5],
  chartOptions: {
    chart: {
      width: "100%",

      type: "pie",
    },
    fill: {
      colors: ["#9dbdff", "#b3ccff", "#7099ed"],
    },
    stroke: {
      width: 0, // set stroke width to 0
    },

    theme: {
      monochrome: {
        enabled: false,
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    // dataLabels: {
    //   formatter(val: any, opts: any) {
    //     const name = opts.w.globals.labels[opts.seriesIndex]
    //     return [name, val.toFixed(1) + '%']
    //   }
    // },
    legend: {
      show: false,
    },
  },
});
const state2 = reactive({
  series: [
    {
      name: "bar chart",
      data: [33, 22, 68, 54, 8, 30, 74, 7, 33, 22, 68, 54, 8, 30, 74, 7],
      bars: {
        show: true,
        lineWidth: 0,
        fillColor: "#0d99ff",
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
      fillColor: "#0d99ff",
    },
    chart: {
      type: "bar",
      height: 50,
      width: "100%",
      toolbar: {
        show: false,
      },
    },

    colors: ["#ffce78"],
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
      data: [140, 60, 16, -80, -140, 140, 30],
      bars: {
        show: true,
        lineWidth: 0,
        fillColor: "#0d99ff",
      },
    },
  ],
  chartOptions: {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
      },
    },
    grid: {
      borderWidth: 1,
      borderColor: "transparent",
    },
    bars: {
      show: true,
      lineWidth: 0,
      fillColor: "#0d99ff",
    },
    chart: {
      type: "bar",
      height: 50,
      width: "100%",
      toolbar: {
        show: false,
      },
    },

    colors: ["#3736af"],
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
const state4 = reactive({
  series: [
    {
      name: "High - 2013",
      data: [7, 6, 8, 7, 3, 8, 3, 3, 6, 5, 9, 2, 8],
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
      colors: ["#fa707e"],
      opacity: 1,
      type: "solid",
    },
    chart: {
      type: "area",
      height: 219,
      offsetY: 20,
      toolbar: {
        show: false,
      },
    },
    colors: ["#f77f8b", "#ffb64a"],
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

const state5 = reactive({
  series: [
    {
      name: "bar chart",
      data: [33, 22, 68, 54, 8, 30, 74, 7, 36, 5, 41, 19, 43, 29],
      bars: {
        show: true,
        lineWidth: 0,
        fillColor: "#0d99ff",
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
      fillColor: "#0d99ff",
    },
    chart: {
      type: "bar",
      height: 50,
      width: "100%",
      toolbar: {
        show: false,
      },
    },

    colors: ["#3adfae"],
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
</script>

<template>
  <div class="w-full">
    <div class="row">
      <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
        <div class="widget-stat card !bg-primary">
          <div
            class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap"
          >
            <h3 class="text-white text-base">Total Students</h3>
            <h5 class="text-white"><i class="fa fa-caret-up"></i> 422</h5>
          </div>
          <div class="sm:p-5 p-4 flex-auto text-center">
            <div class="ico-sparkline">
              <div id="sparkline12">
                <ClientOnly>
                  <VueApexCharts
                    type="pie"
                    height="130"
                    :series="state.series"
                    :options="state.chartOptions"
                  />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
        <div class="widget-stat card !bg-warning overflow-hidden">
          <div
            class="flex flex-wrap justify-between items-center sm:pt-6 py-5 sm:px-5 px-4 relative"
          >
            <h3 class="text-white text-base">New Students</h3>
            <h5 class="text-white"><i class="fa fa-caret-up"></i> 357</h5>
          </div>
          <div class="text-center p-0">
            <div class="ico-sparkline">
              <div id="spark-bar-2">
                <ClientOnly>
                  <VueApexCharts
                    :series="state2.series"
                    :options="state2.chartOptions"
                  />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
        <div class="widget-stat card !bg-secondary dark:!bg-d-bg">
          <div
            class="flex flex-wrap justify-between items-center sm:px-5 sm:pt-6 px-4 pt-5 max-sm:pb-5 relative z-[2] pb-4"
          >
            <h3 class="text-white text-base">Total Course</h3>
            <h5 class="text-white"><i class="fa fa-caret-up"></i> 547</h5>
          </div>
          <div class="p-0">
            <div class="px-4">
              <svg class="peity" height="140" width="100%">
                <rect
                  data-value="6"
                  fill="#1d69d6"
                  x="1.1804700000000001"
                  y="24.705882352941188"
                  width="9.443760000000001"
                  height="49.41176470588235"
                ></rect>
                <rect
                  data-value="2"
                  fill="#ffdede"
                  x="12.98517"
                  y="57.647058823529406"
                  width="9.443760000000001"
                  height="16.47058823529413"
                ></rect>
                <rect
                  data-value="8"
                  fill="#3693FF"
                  x="24.78987"
                  y="8.235294117647072"
                  width="9.443759999999997"
                  height="65.88235294117646"
                ></rect>
                <rect
                  data-value="4"
                  fill="#1d69d6"
                  x="36.59457"
                  y="41.17647058823529"
                  width="9.443759999999997"
                  height="32.941176470588246"
                ></rect>
                <rect
                  data-value="-3"
                  fill="#ffdede"
                  x="48.399269999999994"
                  y="74.11764705882354"
                  width="9.443760000000005"
                  height="24.70588235294116"
                ></rect>
                <rect
                  data-value="8"
                  fill="#3693FF"
                  x="60.20396999999999"
                  y="8.235294117647072"
                  width="9.443760000000005"
                  height="65.88235294117646"
                ></rect>
                <rect
                  data-value="1"
                  fill="#1d69d6"
                  x="72.00867"
                  y="65.88235294117646"
                  width="9.443760000000012"
                  height="8.235294117647072"
                ></rect>
                <rect
                  data-value="-3"
                  fill="#ffdede"
                  x="83.81336999999999"
                  y="74.11764705882354"
                  width="9.443760000000012"
                  height="24.70588235294116"
                ></rect>
                <rect
                  data-value="6"
                  fill="#3693FF"
                  x="95.61806999999999"
                  y="24.705882352941188"
                  width="9.443760000000026"
                  height="49.41176470588235"
                ></rect>
                <rect
                  data-value="-5"
                  fill="#1d69d6"
                  x="107.42276999999999"
                  y="74.11764705882354"
                  width="9.443760000000026"
                  height="41.17647058823529"
                ></rect>
                <rect
                  data-value="9"
                  fill="#ffdede"
                  x="119.22747"
                  y="0"
                  width="9.443759999999983"
                  height="74.11764705882354"
                ></rect>
                <rect
                  data-value="2"
                  fill="#3693FF"
                  x="131.03217"
                  y="57.647058823529406"
                  width="9.443759999999997"
                  height="16.47058823529413"
                ></rect>
                <rect
                  data-value="-8"
                  fill="#1d69d6"
                  x="142.83687"
                  y="74.11764705882354"
                  width="9.443759999999997"
                  height="65.88235294117646"
                ></rect>
                <rect
                  data-value="1"
                  fill="#ffdede"
                  x="154.64157"
                  y="65.88235294117646"
                  width="9.443759999999997"
                  height="8.235294117647072"
                ></rect>
                <rect
                  data-value="4"
                  fill="#3693FF"
                  x="166.44626999999997"
                  y="41.17647058823529"
                  width="9.443760000000026"
                  height="32.941176470588246"
                ></rect>
                <rect
                  data-value="8"
                  fill="#1d69d6"
                  x="178.25097"
                  y="8.235294117647072"
                  width="9.443759999999997"
                  height="65.88235294117646"
                ></rect>
                <rect
                  data-value="9"
                  fill="#ffdede"
                  x="190.05567000000002"
                  y="0"
                  width="9.443759999999969"
                  height="74.11764705882354"
                ></rect>
                <rect
                  data-value="8"
                  fill="#3693FF"
                  x="201.86037000000002"
                  y="8.235294117647072"
                  width="9.443759999999969"
                  height="65.88235294117646"
                ></rect>
                <rect
                  data-value="2"
                  fill="#1d69d6"
                  x="213.66507000000001"
                  y="57.647058823529406"
                  width="9.443759999999969"
                  height="16.47058823529413"
                ></rect>
                <rect
                  data-value="1"
                  fill="#ffdede"
                  x="225.46977"
                  y="65.88235294117646"
                  width="9.443759999999969"
                  height="8.235294117647072"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 sm:w-1/2">
        <div class="widget-stat card !bg-danger overflow-hidden">
          <div
            class="flex flex-wrap justify-between items-center sm:px-5 sm:pt-6 px-4 pt-5 max-sm:pb-5 relative z-[2] pb-4"
          >
            <h3 class="text-white text-base">Fees Collection</h3>
            <h5 class="text-white"><i class="fa fa-caret-up"></i> 3280$</h5>
          </div>
          <div class="p-0">
            <svg class="peity" height="150" width="100%">
              <polygon
                fill="#1d69d6"
                points="0 148.5 0 34.16666666666667 22.007833333333334 50.5 44.01566666666667 17.833333333333343 66.0235 34.16666666666667 88.03133333333334 99.5 110.03916666666667 17.833333333333343 132.047 99.5 154.05483333333333 99.5 176.06266666666667 50.5 198.0705 66.83333333333333 220.07833333333335 1.5 242.08616666666668 115.83333333333334 264.094 17.833333333333343 264.094 148.5"
              ></polygon>
              <polyline
                fill="none"
                points="0 34.16666666666667 22.007833333333334 50.5 44.01566666666667 17.833333333333343 66.0235 34.16666666666667 88.03133333333334 99.5 110.03916666666667 17.833333333333343 132.047 99.5 154.05483333333333 99.5 176.06266666666667 50.5 198.0705 66.83333333333333 220.07833333333335 1.5 242.08616666666668 115.83333333333334 264.094 17.833333333333343"
                stroke="#f77f8b"
                stroke-width="3"
                stroke-linecap="square"
              ></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:w-1/3 w-full">
    <div class="card">
      <div
        class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <h4 class="capitalize text-base">about me</h4>
      </div>
      <div class="sm:p-5 p-4 flex-auto sm:pb-0 pb-0">
        <p class="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <ul class="list-group flex flex-col list-group-flush">
          <li class="flex py-4 justify-between">
            <strong>Gender</strong>
            <span class="mb-0">Male</span>
          </li>
          <li class="flex py-4 justify-between">
            <strong>Education</strong>
            <span class="mb-0">PHD</span>
          </li>
          <li class="flex py-4 justify-between">
            <strong>Designation</strong>
            <span class="mb-0">Se. Professor</span>
          </li>
          <li class="flex py-4 justify-between">
            <strong>Operation Done</strong>
            <span class="mb-0">120</span>
          </li>
        </ul>
      </div>
      <div class="card-footer px-5 text-center border-t border-border">
        <div class="row">
          <div class="!w-1/3 py-4 border-r border-border">
            <h3 class="mb-1 text-primary">150</h3>
            <span class="text-sm">Projects</span>
          </div>
          <div class="!w-1/3 py-4 border-r border-border">
            <h3 class="mb-1 text-primary">140</h3>
            <span class="text-sm">Uploads</span>
          </div>
          <div class="!w-1/3 py-4 border-border">
            <h3 class="mb-1 text-primary">45</h3>
            <span class="text-sm">Tasks</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:w-2/3 col-xxl-8 w-full">
    <VisitorChart />
  </div>
  <div class="xl:w-1/3 lg:w-1/2 sm:w-1/2">
    <div class="card overflow-hidden flex flex-col">
      <div class="sm:p-5 p-4 flex-auto">
        <div class="text-center">
          <div class="profile-photo">
            <img
              src="assets/images/profile/profile.png"
              width="100"
              class="img-fluid rounded-full inline-block"
              alt=""
            />
          </div>
          <h3 class="mt-6 mb-1">Deangelo Sena</h3>
          <p class="mb-4">Senior Manager</p>
          <a
            class="inline-block py-[0.719rem] font-medium rounded-full border border-primary text-primary hover:bg-primaryhover hover:text-white duration-300 mt-4 px-12"
            href="javascript:void(0);"
            >Folllow</a
          >
        </div>
      </div>

      <div class="card-footer px-5 text-center border-t border-border">
        <div class="row">
          <div class="!w-1/3 py-4 border-r border-border">
            <h3 class="mb-1">150</h3>
            <span class="text-sm">Follower</span>
          </div>
          <div class="!w-1/3 py-4 border-r border-border">
            <h3 class="mb-1">140</h3>
            <span class="text-sm">Place Stay</span>
          </div>
          <div class="!w-1/3 py-4 border-border">
            <h3 class="mb-1">45</h3>
            <span class="text-sm">Reviews</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:w-1/3 sm:w-1/2">
    <div class="card overflow-hidden">
      <div class="bg-primary flex justify-between px-5 pt-6 relative z-[2]">
        <h4 class="text-base text-white">Active Users</h4>
        <span id="counter"></span>
      </div>
      <div class="bg-primary">
        <ClientOnly>
          <VueApexCharts
            id="activeUser"
            :series="state5.series"
            :options="state5.chartOptions"
          />
        </ClientOnly>
      </div>
      <div class="sm:p-5 p-4 flex-auto sm:pt-0 pt-0">
        <div class="list-group-flush mt-6">
          <div class="flex justify-between px-0 py-1 fw-semi-bold border-top-0">
            <p class="text-secondary text-sm">Top Active Pages</p>
            <p class="text-secondary text-sm">Active Users</p>
          </div>
          <div class="flex justify-between px-0 py-1">
            <p>/Tailwind-themes/</p>
            <p>3</p>
          </div>
          <div class="flex justify-between px-0 py-1">
            <p>/tags/html5/</p>
            <p>3</p>
          </div>
          <div class="justify-between px-0 py-1 hidden">
            <p>/</p>
            <p>2</p>
          </div>
          <div class="justify-between px-0 py-1 hidden">
            <p>/preview/falcon/dashboard/</p>
            <p>2</p>
          </div>
          <div class="flex justify-between px-0 py-1">
            <p>/100-best-themes...all-time/</p>
            <p>1</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
