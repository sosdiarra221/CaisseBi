<script lang="ts" setup>
import VueApexCharts from "vue3-apexcharts";
import TodoItem from "../TodoItem.vue";
import OptionSelect from "../OptionSelect.vue";

const state = reactive({
  series: [17, 8, 8, 17, 17, 8, 25],
  chartOptions: {
    chart: {
      type: "donut",
      width: 250,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "90%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 20,
            },
            value: {
              show: true,
              fontSize: "24px",
              fontWeight: "600",
              offsetY: -16,
            },
            total: {
              show: true,
              fontSize: "14px",
              color: "#888888",
              fontWeight: "500",
              label: "Total",

              formatter: function (w: { globals: { seriesTotals: any[] } }) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    colors: ["var(--primary)", "var(--success)", "var(--danger)", "var(--warning)", "var(--purple)", "var(--dark)", "var(--secondary)"],
    labels: ["Laptop", "Phone", "Keyboard", "Mouse", "Monitors", "Watch", "Earbuds"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      colors: ["var(--white)"],
    },
    responsive: [
      {
        breakpoint: 1480,
        options: {
          chart: {
            type: "donut",
            width: 250,
          },
        },
      },
    ],
  },
});

const state2 = reactive({
  series: [30, 40, 20, 10],
  chartOptions: {
    chart: {
      type: "donut",
      width: 250,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "90%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 12,
            },
            value: {
              show: true,
              fontSize: "24px",
              fontFamily: "Arial",
              fontWeight: "500",
              offsetY: -17,
            },
            total: {
              show: true,
              fontSize: "11px",
              fontWeight: "500",
              fontFamily: "Arial",
              label: "Total projects",

              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    colors: ["#FF9F00", "var(--primary)", "#3AC977", "#FF5E5E"],
    labels: ["Compete", "Pending", "Not Start"],
    dataLabels: {
      enabled: false,
    },
  },
});
</script>

<template>
  <div class="xl:col-span-6 col-span-12">
    <div class="grid grid-cols-12 gap-x-6 sticky top-0 z-0">
      <div class="col-xxl-12 xl:col-span-12 md:col-span-6 col-span-12">
        <div class="card">
          <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
            <div>
              <h4>Projects Contributions</h4>
              <small class="block">84 New Tasks & 29 Guides</small>
            </div>
            <div class="ms-auto">
              <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
            </div>
          </div>
          <div class="sm:p-5 p-4">
            <div class="flex items-center duration-500 hover:bg-light rounded-lg my-1 p-2 group">
              <div class="size-[45px] border border-border rounded-lg flex items-center justify-center bg-white">
                <img src="../../assets/images/logo/google.png" alt="" />
              </div>
              <div class="ml-4">
                <h6 class="font-semibold">Piper Aerostar</h6>
                <span class="fs-13">piper-aircraft-class.jsp</span>
              </div>
              <div class="ms-auto">
                <span class="badge badge-sm bg-light text-dark duration-500 group-hover:bg-primary group-hover:text-white">0</span>
              </div>
            </div>
            <div class="flex items-center duration-500 hover:bg-light rounded-lg my-1 p-2 group">
              <div class="size-[45px] border border-border rounded-lg flex items-center justify-center bg-white">
                <img src="../../assets/images/logo/figma.png" alt="" />
              </div>
              <div class="ml-4">
                <h6 class="font-semibold">Cirrus SR22</h6>
                <span class="fs-13">cirrus-aircraft.jsp</span>
              </div>
              <div class="ms-auto">
                <span class="badge badge-sm bg-light text-dark duration-500 group-hover:bg-primary group-hover:text-white">3</span>
              </div>
            </div>
            <div class="flex items-center duration-500 hover:bg-light rounded-lg my-1 p-2 group">
              <div class="size-[45px] border border-border rounded-lg flex items-center justify-center bg-white">
                <img src="../../assets/images/logo/slack.png" alt="" />
              </div>
              <div class="ml-4">
                <h6 class="font-semibold">Beachcraft Baron</h6>
                <span class="fs-13">baron-class.pyt</span>
              </div>
              <div class="ms-auto">
                <span class="badge badge-sm bg-light text-dark duration-500 group-hover:bg-primary group-hover:text-white">0</span>
              </div>
            </div>
            <div class="flex items-center duration-500 hover:bg-light rounded-lg my-1 p-2 group">
              <div class="size-[45px] border border-border rounded-lg flex items-center justify-center bg-white">
                <img src="../../assets/images/logo/html.png" alt="" />
              </div>
              <div class="ml-4">
                <h6 class="font-semibold">Cessna SF150</h6>
                <span class="fs-13">cessna-aircraft-class.jsp</span>
              </div>
              <div class="ms-auto">
                <span class="badge badge-sm bg-light text-dark duration-500 group-hover:bg-primary group-hover:text-white">0</span>
              </div>
            </div>
            <div class="bg-primarylight border border-primary rounded-lg text-2sm p-4 mt-4 text-secondary">
              <strong class="text-primary">Intive New .NET Collaborators</strong> to creating great outstanding business to business .jsp modutr class scripts
            </div>
          </div>
        </div>
      </div>

      <div class="col-xxl-12 xl:col-span-12 md:col-span-6 col-span-12">
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

      <div class="col-xxl-12 col-span-12">
        <div class="card">
          <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
            <div class="clearfix">
              <h4>Top Selling Categories</h4>
              <small class="block">7 Category</small>
            </div>
          </div>
          <div class="sm:p-5 p-4 !pt-1">
            <div class="row items-center">
              <div class="sm:w-1/2 mb-4 flex justify-center">
                <div id="chartTopSelling">
                  <ClientOnly>
                    <VueApexCharts width="250px" :series="state.series" :options="state.chartOptions" />
                  </ClientOnly>
                </div>
              </div>
              <div class="sm:w-1/2 mb-4">
                <div class="flex justify-between mb-4">
                  <div class="text-secondary"><i class="fa-solid fa-square text-primary me-1"></i> Laptop</div>
                  <span>20</span>
                </div>
                <div class="flex justify-between mb-4">
                  <div class="text-secondary"><i class="fa-solid fa-square text-success me-1"></i> Phone</div>
                  <span>05</span>
                </div>
                <div class="flex justify-between mb-4">
                  <div class="text-secondary"><i class="fa-solid fa-square text-danger me-1"></i> Keyboard</div>
                  <span>05</span>
                </div>
                <div class="flex justify-between mb-4">
                  <div class="text-secondary"><i class="fa-solid fa-square text-warning me-1"></i> Mouse</div>
                  <span>20</span>
                </div>
                <div class="flex justify-between mb-4">
                  <div class="text-secondary"><i class="fa-solid fa-square text-purple me-1"></i> Monitors</div>
                  <span>21</span>
                </div>
                <div class="flex justify-between mb-4">
                  <div class="text-secondary"><i class="fa-solid fa-square text-secondary me-1"></i> Watch</div>
                  <span>04</span>
                </div>
                <div class="flex justify-between mb-4">
                  <div class="text-secondary"><i class="fa-solid fa-square text-secondary me-1"></i> Earbuds</div>
                  <span>25</span>
                </div>
              </div>
            </div>
            <div class="border border-border rounded-lg p-4 sm:flex items-center justify-between">
              <p>Category report for a company's quarterly sales performance</p>
              <div class="w-full ms-auto sm:text-end mt-2 sm:mt-0">
                <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Download Report</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="xl:col-span-12 md:col-span-6 col-span-12">
        <div class="card overflow-hidden">
          <div class="text-center flex justify-between sm:pt-6 py-5 sm:p-5 px-4 items-center relative flex-wrap">
            <h4 class="heading">My To Do Items</h4>
            <div>
              <a href="javascript:void(0);" class="text-primary mr-2">View All</a>
              <a href="javascript:void(0);" class="text-secondary"> + Add To Do</a>
            </div>
          </div>
          <div class="card-body p-0">
            <TodoItem />
          </div>
        </div>
      </div>

      <div class="xl:col-span-12 md:col-span-6 col-span-12">
        <div class="card">
          <div class="relative pt-4.5 px-5 flex justify-between items-center flex-wrap">
            <h4>Projects Status</h4>
            <OptionSelect
              class-name="nice-select py-1.1 px-3.6 rounded-lg bg-light mx-1.1 inline-flex items-center border-0 sm:h-[34px] h-[26px] text-secondary max-sm:text-xs style-1"
              :options="[{ lable: 'Today' }, { lable: 'Week' }, { lable: 'Month' }]"
            />
          </div>
          <div class="sm:p-5 p-4">
            <div id="chartProjectChart" class="project-chart flex justify-center">
              <ClientOnly>
                <VueApexCharts width="250px" :series="state2.series" :options="state2.chartOptions" />
              </ClientOnly>
            </div>
            <div class="mt-4">
              <div class="flex justify-between mb-4">
                <div class="text-secondary"><i class="fa-solid fa-square text-primary me-1"></i> Completed Projects</div>
                <span>40 Projects</span>
              </div>
              <div class="flex justify-between mb-4">
                <div class="text-secondary"><i class="fa-solid fa-square text-success me-1"></i> Progress Projects</div>
                <span>20 Projects</span>
              </div>
              <div class="flex justify-between mb-4">
                <div class="text-secondary"><i class="fa-solid fa-square text-danger me-1"></i> Cancelled</div>
                <span>10 Projects</span>
              </div>
              <div class="flex justify-between mb-4">
                <div class="text-secondary"><i class="fa-solid fa-square text-warning me-1"></i> Yet to Start</div>
                <span>30 Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
