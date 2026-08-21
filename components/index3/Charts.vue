<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";

const state = reactive({
  series: [
    {
      name: "Net Profit",
      data: [100, 300, 200, 250, 200, 250, 200],
      /* radius: 30,	 */
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 70,
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

    colors: ["#01BD9B"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 1,
      curve: "smooth",
      colors: ["#01BD9B"],
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
      categories: ["Jan", "feb", "Mar", "Apr", "May", "June", "July"],
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
        enabled: true,
        formatter: undefined,
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
      colors: "#01BD9B",
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 0,
            color: "#01BD9B",
            opacity: 0.4,
          },
          {
            offset: 0.6,
            color: "#01BD9B",
            opacity: 0.4,
          },
          {
            offset: 100,
            color: "#01BD9B",
            opacity: 0,
          },
        ],
      },
    },
    tooltip: {
      enabled: false,
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val: string) {
          return "$" + val + " thousands";
        },
      },
    },
  },
});

const state2 = reactive({
  series: [
    {
      name: "Net Profit",
      data: [100, 300, 200, 250, 200, 240, 180, 230, 200, 250, 300],
      /* radius: 30,	 */
    },
  ],
  options: {
    chart: {
      type: "area",
      height: 42,
      width: 500,
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

    colors: ["#E55555"],
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    stroke: {
      show: true,
      width: 1,
      curve: "straight",
      colors: ["#E55555"],
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
        enabled: true,
        formatter: undefined,
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
      colors: "#E55555",
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 0,
            color: "#E55555",
            opacity: 0.5,
          },
          {
            offset: 0.6,
            color: "#E55555",
            opacity: 0.5,
          },
          {
            offset: 100,
            color: "#E55555",
            opacity: 0,
          },
        ],
      },
    },
    tooltip: {
      enabled: false,
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val: string) {
          return "$" + val + " thousands";
        },
      },
    },
  },
});
</script>

<template>
  <div class="2xl:col-span-3 sm:col-span-6 col-span-12">
    <div class="card">
      <div class="sm:p-5 p-4">
        <div class="card-media flex">
          <div class="mr-4">
            <span>Page views</span>
            <h4 class="mb-2 text-2xl font-bold">37,543</h4>
            <span class="text-success text-xs">
              <svg class="me-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_63_657)">
                  <mask id="mask0_63_6577" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                    <path d="M0 0H14V14H0V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_63_658)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.8291 3.08748C14.0569 3.31529 14.0569 3.68463 13.8291 3.91244L8.28747 9.4541C8.05968 9.68189 7.69032 9.68189 7.46252 9.4541L4.95833 6.94991L0.995814 10.9124C0.768005 11.1402 0.39866 11.1402 0.170854 10.9124C-0.0569514 10.6846 -0.0569514 10.3153 0.170854 10.0875L4.54585 5.71248C4.77366 5.48468 5.143 5.48468 5.37081 5.71248L7.875 8.21668L13.0042 3.08748C13.232 2.85968 13.6013 2.85968 13.8291 3.08748Z"
                      fill="#01BD9B"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.33334 3.49996C9.33334 3.1778 9.59449 2.91663 9.91667 2.91663H13.4167C13.7388 2.91663 14 3.1778 14 3.49996V6.99996C14 7.32213 13.7388 7.58329 13.4167 7.58329C13.0945 7.58329 12.8333 7.32213 12.8333 6.99996V4.08329H9.91667C9.59449 4.08329 9.33334 3.82212 9.33334 3.49996Z"
                      fill="#01BD9B"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_63_657">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              09.52
            </span>
          </div>
          <div id="NewCustomers">
            <ClientOnly>
              <VueApexCharts height="70px" :series="state.series" :options="state.options" />
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="2xl:col-span-3 sm:col-span-6 col-span-12">
    <div class="card">
      <div class="sm:p-5 p-4">
        <div class="card-media flex items-center justify-between">
          <div class="mr-4">
            <span>Clients Added</span>
            <h4 class="mb-2 text-2xl font-bold">137+</h4>
            <span class="text-nowrap text-xs">
              <svg class="me-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_63_657)">
                  <mask id="mask0_63_657" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                    <path d="M0 0H14V14H0V0Z" fill="white"></path>
                  </mask>
                  <g mask="url(#mask0_63_658)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.8291 3.08748C14.0569 3.31529 14.0569 3.68463 13.8291 3.91244L8.28747 9.4541C8.05968 9.68189 7.69032 9.68189 7.46252 9.4541L4.95833 6.94991L0.995814 10.9124C0.768005 11.1402 0.39866 11.1402 0.170854 10.9124C-0.0569514 10.6846 -0.0569514 10.3153 0.170854 10.0875L4.54585 5.71248C4.77366 5.48468 5.143 5.48468 5.37081 5.71248L7.875 8.21668L13.0042 3.08748C13.232 2.85968 13.6013 2.85968 13.8291 3.08748Z"
                      fill="#01BD9B"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.33334 3.49996C9.33334 3.1778 9.59449 2.91663 9.91667 2.91663H13.4167C13.7388 2.91663 14 3.1778 14 3.49996V6.99996C14 7.32213 13.7388 7.58329 13.4167 7.58329C13.0945 7.58329 12.8333 7.32213 12.8333 6.99996V4.08329H9.91667C9.59449 4.08329 9.33334 3.82212 9.33334 3.49996Z"
                      fill="#01BD9B"
                    ></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_63_658">
                    <rect width="14" height="14" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <small class="text-success">15+</small>
              since last week
            </span>
          </div>
          <span class="donut1" data-peity='{ "fill": ["rgba(240, 151, 68, 1)", "rgba(240, 151, 68, 0.20)"],   "innerRadius": 25, "radius": 6}' style="display: none">5/7</span
          ><svg class="peity" height="5rem" width="5rem">
            <path d="M 35 0 A 35 35 0 1 1 0.8775230736361763 42.788232688471005 L 10.62680219545441 40.56302334890786 A 25 25 0 1 0 35 10" data-value="5" fill="rgba(240, 151, 68, 1)"></path>
            <path
              d="M 0.8775230736361763 42.788232688471005 A 35 35 0 0 1 34.99999999999999 0 L 34.99999999999999 10 A 25 25 0 0 0 10.62680219545441 40.56302334890786"
              data-value="2"
              fill="rgba(240, 151, 68, 0.20)"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
  <div class="2xl:col-span-3 sm:col-span-6 col-span-12">
    <div class="card">
      <div class="sm:p-5 p-4">
        <div class="card-media flex justify-between">
          <div class="mr-4">
            <span>Tasks Not Finished</span>
            <h4 class="mb-2 text-2xl font-bold">17</h4>
          </div>
          <div class="size-10 relative inline-block text-center leading-[2.5] border border-border rounded-lg duration-300 hover:bg-primary group">
            <a href="javascript:void(0);">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  class="group-hover:fill-white duration-300"
                  d="M9.40759 14.1965H10.7174V10.7382H14.1966V9.42842H10.7174V5.80342H9.40759V9.42842H5.80343V10.7382H9.40759V14.1965ZM10.0062 18.4579C8.83675 18.4579 7.73924 18.2365 6.7137 17.7937C5.68816 17.351 4.79122 16.7454 4.02289 15.9771C3.25455 15.2088 2.649 14.3115 2.20624 13.2854C1.76349 12.2593 1.54211 11.1609 1.54211 9.99026C1.54211 8.8196 1.76349 7.72099 2.20624 6.69442C2.649 5.66784 3.25429 4.77376 4.02209 4.01219C4.78991 3.25064 5.687 2.64773 6.71336 2.20348C7.73974 1.75923 8.83839 1.53711 10.0093 1.53711C11.1802 1.53711 12.2792 1.75911 13.3062 2.20311C14.3331 2.6471 15.2273 3.24965 15.9886 4.01078C16.7499 4.7719 17.3526 5.66692 17.7967 6.69584C18.2408 7.72477 18.4629 8.8243 18.4629 9.99444C18.4629 11.1644 18.2407 12.2621 17.7965 13.2876C17.3522 14.3131 16.7493 15.2085 15.9878 15.9739C15.2262 16.7392 14.3313 17.3446 13.3029 17.7899C12.2746 18.2352 11.1757 18.4579 10.0062 18.4579ZM10.0104 17.0385C11.9624 17.0385 13.6217 16.3527 14.9884 14.9812C16.3551 13.6096 17.0385 11.9457 17.0385 9.98957C17.0385 8.03758 16.3564 6.37824 14.9923 5.01153C13.6282 3.64483 11.9633 2.96148 9.99749 2.96148C8.05078 2.96148 6.39144 3.64353 5.01947 5.00763C3.64748 6.37173 2.96149 8.03668 2.96149 10.0025C2.96149 11.9492 3.64727 13.6085 5.01882 14.9805C6.39038 16.3525 8.05424 17.0385 10.0104 17.0385Z"
                  fill="#6F767E"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="progress-box">
          <div class="flex justify-between">
            <p class="text-xs">Complete Task</p>
            <p class="font-semibold text-secondary">60%</p>
          </div>
          <div class="flex overflow-hidden h-1.1 bg-light rounded-xl">
            <div class="progress-bar bg-success" style="width: 50%; height: 5px; border-radius: 4px" role="progressbar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="2xl:col-span-3 sm:col-span-6 col-span-12">
    <div class="card overflow-hidden">
      <div>
        <div class="card-media flex justify-between p-5 !pb-0">
          <div class="mr-4">
            <span>Page views</span>
            <h4 class="mb-2 text-2xl font-bold">37,543</h4>
          </div>
          <span class="text-danger text-xs">
            <svg class="me-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_63_657)">
                <mask id="mask0_63_6579" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
                  <path d="M0 0H14V14H0V0Z" fill="white"></path>
                </mask>
                <g mask="url(#mask0_63_659)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8291 3.08748C14.0569 3.31529 14.0569 3.68463 13.8291 3.91244L8.28747 9.4541C8.05968 9.68189 7.69032 9.68189 7.46252 9.4541L4.95833 6.94991L0.995814 10.9124C0.768005 11.1402 0.39866 11.1402 0.170854 10.9124C-0.0569514 10.6846 -0.0569514 10.3153 0.170854 10.0875L4.54585 5.71248C4.77366 5.48468 5.143 5.48468 5.37081 5.71248L7.875 8.21668L13.0042 3.08748C13.232 2.85968 13.6013 2.85968 13.8291 3.08748Z"
                    fill="#E55555"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.33334 3.49996C9.33334 3.1778 9.59449 2.91663 9.91667 2.91663H13.4167C13.7388 2.91663 14 3.1778 14 3.49996V6.99996C14 7.32213 13.7388 7.58329 13.4167 7.58329C13.0945 7.58329 12.8333 7.32213 12.8333 6.99996V4.08329H9.91667C9.59449 4.08329 9.33334 3.82212 9.33334 3.49996Z"
                    fill="#E55555"
                  ></path>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_63_6576">
                  <rect width="14" height="14" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            09.52
          </span>
        </div>
        <div id="NewExperience" class="mt-1.5">
          <ClientOnly>
            <VueApexCharts height="42px" :series="state2.series" :options="state2.options" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>
