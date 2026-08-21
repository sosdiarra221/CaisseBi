<script lang="ts" setup>
import OverviewChart from "~/components/dashboard/OverviewChart.vue";
import TodoItem from "~/components/TodoItem.vue";
import bg from "~/assets/images/rainbow.gif";
import VueApexCharts from "vue3-apexcharts";
useHead({
  bodyAttrs: {
    "data-sidebar-style": "mini",
    "data-sidebarbg": "color_3",
    "data-nav-headerbg": "color_3",
    "data-headerbg": "color_1",
    "data-primary": "color_10",
    "data-typography": "inter",
  },
});

definePageMeta({
  layout: "nosidebar",
});

const state = {
  series: [75],
  options: {
    chart: {
      type: "radialBar",
      offsetY: 0,
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -180,
        endAngle: 180,
        track: {
          background: "#F1EAFF",
          strokeWidth: "100%",
          margin: 3,
        },

        hollow: {
          margin: 20,
          size: "60%",
          background: "transparent",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
        },

        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 5,
            fontSize: "24px",
            color: "#000000",
            fontWeight: 600,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1600,
        options: {
          chart: {
            height: 150,
          },
        },
      },
    ],
    grid: {
      padding: {
        top: -10,
      },
    },
    /* stroke: {
				  dashArray: 4,
				  colors:'#6EC51E'
				}, */
    fill: {
      type: "gradient",
      colors: "#7A849B",
      gradient: {
        shade: "black",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [64, 43, 64, 0.5],
      },
    },
    labels: ["Average Results"],
  },
};

const state2 = {
  series: [37.5, 7.8, 12.5, 5.2, 19, 18],
  options: {
    chart: {
      type: "donut",
      width: 350,
    },
    colors: ["var(--primary)", "#F89D16", "#313949", "#21C68A", "#FF7A59", "#E9EDF5"],
    legend: {
      show: false,
    },
    stroke: {
      curve: "monotoneCubic",
      lineCap: "round",
      radius: 80,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        size: 200,
        donut: {
          size: "80%",
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
    responsive: [
      {
        breakpoint: 1199,
        options: {
          chart: {
            width: 250,
          },
        },
      },
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 170,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 300,
          },
        },
      },
    ],
  },
};
</script>

<template>
  <div class="content-body bg-[#E1EEEF] dark:bg-d-bg">
    <div class="container">
      <div class="card !bg-primary">
        <div class="sm:p-5 p-4">
          <div class="grid grid-cols-12 md:gap-x-6 gap-6">
            <div class="md:col-span-3 col-span-6">
              <div class="relative py-4.5 px-[13px] rounded-lg flex overflow-hidden items-center cursor-pointer max-sm:h-auto group bg-card">
                <div class="flex items-center">
                  <span class="size-[3.4375rem] rounded-lg text-center leading-[3.2375rem] max-4xl:size-13.5 max-4xl:leading-[50px] bg-warning">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 0.25H4C3.00544 0.25 2.05161 0.645088 1.34835 1.34835C0.645088 2.05161 0.25 3.00544 0.25 4V19C0.25 19.9946 0.645088 20.9484 1.34835 21.6517C2.05161 22.3549 3.00544 22.75 4 22.75H19C19.9946 22.75 20.9484 22.3549 21.6517 21.6517C22.3549 20.9484 22.75 19.9946 22.75 19V4C22.75 3.00544 22.3549 2.05161 21.6517 1.34835C20.9484 0.645088 19.9946 0.25 19 0.25ZM16.875 8.5125L11.1625 16.0125C11.0461 16.1638 10.8965 16.2864 10.7253 16.3709C10.5542 16.4554 10.3659 16.4995 10.175 16.5C9.98513 16.501 9.79753 16.4588 9.62643 16.3765C9.45532 16.2942 9.30522 16.174 9.1875 16.025L6.1375 12.1375C6.03655 12.0078 5.96212 11.8595 5.91848 11.7011C5.87484 11.5426 5.86283 11.3772 5.88314 11.2141C5.90346 11.051 5.95569 10.8935 6.03687 10.7506C6.11804 10.6077 6.22657 10.4822 6.35625 10.3812C6.61815 10.1774 6.95032 10.0859 7.27968 10.1269C7.44276 10.1472 7.60025 10.1994 7.74314 10.2806C7.88604 10.3618 8.01155 10.4703 8.1125 10.6L10.15 13.2L14.875 6.95C14.9751 6.81868 15.1002 6.70836 15.2429 6.62536C15.3857 6.54235 15.5434 6.48828 15.7071 6.46622C15.8707 6.44417 16.0371 6.45457 16.1968 6.49682C16.3564 6.53908 16.5062 6.61237 16.6375 6.7125C16.7688 6.81263 16.8791 6.93765 16.9621 7.08042C17.0451 7.22318 17.0992 7.3809 17.1213 7.54456C17.1433 7.70823 17.1329 7.87463 17.0907 8.03427C17.0484 8.19392 16.9751 8.34368 16.875 8.475V8.5125Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                  <div class="ms-2">
                    <h4 class="xl:text-2.5xl text-base font-bold leading-tight">350</h4>
                    <span>Appointments</span>
                  </div>
                </div>
                <img src="assets/images/vector/check-icon.png" alt="" class="absolute top-3.6 right-0 opacity-10 duration-500 group-hover:scale-125" />
              </div>
            </div>
            <div class="md:col-span-3 col-span-6">
              <div class="relative py-4.5 px-[13px] rounded-lg flex overflow-hidden items-center cursor-pointer max-sm:h-auto group bg-card">
                <div class="flex items-center">
                  <span class="size-[3.4375rem] rounded-lg text-center leading-[3.2375rem] max-4xl:size-13.5 max-4xl:leading-[50px] bg-success">
                    <svg width="23" height="23" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.3201 4.65852H2.86175C2.35544 4.6591 1.87003 4.8592 1.51201 5.21494C1.15399 5.57068 0.952605 6.053 0.952026 6.55609V24.5829C0.952032 24.7573 1.00037 24.9282 1.09175 25.077C1.18312 25.2259 1.31399 25.3468 1.47 25.4266C1.626 25.5063 1.80111 25.5418 1.97609 25.5292C2.15108 25.5166 2.31918 25.4563 2.46195 25.355L8.5901 21.005L14.72 25.355C14.8628 25.4563 15.0309 25.5166 15.2058 25.5292C15.3808 25.5418 15.5559 25.5063 15.7119 25.4265C15.8679 25.3468 15.9988 25.2258 16.0901 25.077C16.1815 24.9282 16.2298 24.7572 16.2298 24.5829V6.55609C16.2292 6.053 16.0278 5.57068 15.6698 5.21494C15.3118 4.8592 14.8264 4.6591 14.3201 4.65852V4.65852Z"
                        fill="#fff"
                      ></path>
                      <path
                        d="M18.1395 0.863403H5.72635C5.4731 0.863403 5.23023 0.963364 5.05116 1.14129C4.87209 1.31923 4.77148 1.56055 4.77148 1.81218C4.77148 2.06382 4.87209 2.30514 5.05116 2.48307C5.23023 2.661 5.4731 2.76096 5.72635 2.76096H18.1395V20.7878C18.1395 21.0394 18.2401 21.2808 18.4192 21.4587C18.5983 21.6366 18.8412 21.7366 19.0944 21.7366C19.3476 21.7366 19.5905 21.6366 19.7696 21.4587C19.9487 21.2808 20.0493 21.0394 20.0493 20.7878V2.76096C20.0487 2.25788 19.8473 1.77556 19.4893 1.41982C19.1313 1.06408 18.6459 0.863979 18.1395 0.863403V0.863403Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                  <div class="ms-2">
                    <h4 class="xl:text-2.5xl text-base font-bold leading-tight">130</h4>
                    <span>Patients</span>
                  </div>
                </div>
                <img src="assets/images/vector/bookm.png" alt="" class="absolute top-3.6 right-0 duration-500 group-hover:scale-125" />
              </div>
            </div>
            <div class="md:col-span-3 col-span-6">
              <div class="relative py-4.5 px-[13px] rounded-lg flex overflow-hidden items-center cursor-pointer max-sm:h-auto group bg-card">
                <div class="flex items-center">
                  <span class="size-[3.4375rem] rounded-lg text-center leading-[3.2375rem] max-4xl:size-13.5 max-4xl:leading-[50px] bg-danger">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.4999 7.13426C12.1639 7.13426 10.8617 7.55464 9.7778 8.33585C8.69393 9.11705 7.88334 10.2195 7.46084 11.487C7.03834 12.7545 7.02536 14.1228 7.42373 15.3981C7.82209 16.6733 8.61162 17.791 9.68047 18.5926V23.6852C9.68047 24.3605 9.94874 25.0082 10.4263 25.4857C10.9038 25.9632 11.5514 26.2315 12.2268 26.2315H14.7731C15.4484 26.2315 16.096 25.9632 16.5736 25.4857C17.0511 25.0082 17.3194 24.3605 17.3194 23.6852V18.5926C18.3882 17.791 19.1777 16.6733 19.5761 15.3981C19.9745 14.1228 19.9615 12.7545 19.539 11.487C19.1165 10.2195 18.3059 9.11705 17.222 8.33585C16.1382 7.55464 14.836 7.13426 13.4999 7.13426ZM13.4999 5.86111C13.8376 5.86111 14.1614 5.72698 14.4002 5.48822C14.6389 5.24946 14.7731 4.92563 14.7731 4.58797V2.04167C14.7731 1.70401 14.6389 1.38018 14.4002 1.14142C14.1614 0.902659 13.8376 0.768524 13.4999 0.768524C13.1622 0.768524 12.8384 0.902659 12.5997 1.14142C12.3609 1.38018 12.2268 1.70401 12.2268 2.04167V4.58797C12.2268 4.92563 12.3609 5.24946 12.5997 5.48822C12.8384 5.72698 13.1622 5.86111 13.4999 5.86111ZM24.9582 12.2269H22.4119C22.0743 12.2269 21.7505 12.361 21.5117 12.5998C21.2729 12.8385 21.1388 13.1623 21.1388 13.5C21.1388 13.8377 21.2729 14.1615 21.5117 14.4003C21.7505 14.639 22.0743 14.7731 22.4119 14.7731H24.9582C25.2959 14.7731 25.6197 14.639 25.8585 14.4003C26.0973 14.1615 26.2314 13.8377 26.2314 13.5C26.2314 13.1623 26.0973 12.8385 25.8585 12.5998C25.6197 12.361 25.2959 12.2269 24.9582 12.2269ZM4.58788 12.2269H2.04158C1.70392 12.2269 1.38009 12.361 1.14133 12.5998C0.902567 12.8385 0.768433 13.1623 0.768433 13.5C0.768433 13.8377 0.902567 14.1615 1.14133 14.4003C1.38009 14.639 1.70392 14.7731 2.04158 14.7731H4.58788C4.92554 14.7731 5.24937 14.639 5.48813 14.4003C5.72689 14.1615 5.86102 13.8377 5.86102 13.5C5.86102 13.1623 5.72689 12.8385 5.48813 12.5998C5.24937 12.361 4.92554 12.2269 4.58788 12.2269ZM7.97445 6.39584L6.14112 4.58797C5.89294 4.35329 5.5617 4.22682 5.22027 4.23637C4.87884 4.24592 4.55519 4.39071 4.32051 4.63889C4.08584 4.88707 3.95937 5.21831 3.96892 5.55974C3.97847 5.90117 4.12326 6.22482 4.37144 6.45949L6.20477 8.22917C6.3278 8.34797 6.47351 8.44076 6.63319 8.50201C6.79287 8.56325 6.96325 8.5917 7.13417 8.58565C7.30567 8.585 7.47527 8.5497 7.63279 8.48188C7.79031 8.41406 7.9325 8.31511 8.05084 8.19098C8.2781 7.94248 8.39765 7.61407 8.38334 7.27763C8.36902 6.94119 8.222 6.62413 7.97445 6.39584ZM22.6538 4.65162C22.4153 4.4145 22.0926 4.2814 21.7563 4.2814C21.4199 4.2814 21.0972 4.4145 20.8587 4.65162L19.0254 6.39584C18.7882 6.63438 18.6551 6.95706 18.6551 7.29341C18.6551 7.62975 18.7882 7.95244 19.0254 8.19098C19.1437 8.31511 19.2859 8.41406 19.4434 8.48188C19.6009 8.5497 19.7705 8.585 19.942 8.58565C20.2698 8.58435 20.5845 8.45666 20.8205 8.22917L22.6538 6.45949C22.7732 6.34114 22.8679 6.20033 22.9325 6.04518C22.9972 5.89004 23.0304 5.72363 23.0304 5.55556C23.0304 5.38749 22.9972 5.22108 22.9325 5.06594C22.8679 4.91079 22.7732 4.76998 22.6538 4.65162Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                  <div class="ms-2">
                    <h4 class="xl:text-2.5xl text-base font-bold leading-tight">40</h4>
                    <span>Operations</span>
                  </div>
                </div>
                <img src="assets/images/vector/bulf.png" alt="" class="absolute top-3.6 right-0 duration-500 group-hover:scale-125" />
              </div>
            </div>
            <div class="md:col-span-3 col-span-6">
              <div class="relative py-4.5 px-[13px] rounded-lg flex overflow-hidden items-center cursor-pointer max-sm:h-auto group bg-card">
                <div class="flex items-center">
                  <span class="size-[3.4375rem] rounded-lg text-center leading-[3.2375rem] max-4xl:size-13.5 max-4xl:leading-[50px] bg-info">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 0.25H4C3.00544 0.25 2.05161 0.645088 1.34835 1.34835C0.645088 2.05161 0.25 3.00544 0.25 4V19C0.25 19.9946 0.645088 20.9484 1.34835 21.6517C2.05161 22.3549 3.00544 22.75 4 22.75H19C19.9946 22.75 20.9484 22.3549 21.6517 21.6517C22.3549 20.9484 22.75 19.9946 22.75 19V4C22.75 3.00544 22.3549 2.05161 21.6517 1.34835C20.9484 0.645088 19.9946 0.25 19 0.25ZM16.875 8.5125L11.1625 16.0125C11.0461 16.1638 10.8965 16.2864 10.7253 16.3709C10.5542 16.4554 10.3659 16.4995 10.175 16.5C9.98513 16.501 9.79753 16.4588 9.62643 16.3765C9.45532 16.2942 9.30522 16.174 9.1875 16.025L6.1375 12.1375C6.03655 12.0078 5.96212 11.8595 5.91848 11.7011C5.87484 11.5426 5.86283 11.3772 5.88314 11.2141C5.90346 11.051 5.95569 10.8935 6.03687 10.7506C6.11804 10.6077 6.22657 10.4822 6.35625 10.3812C6.61815 10.1774 6.95032 10.0859 7.27968 10.1269C7.44276 10.1472 7.60025 10.1994 7.74314 10.2806C7.88604 10.3618 8.01155 10.4703 8.1125 10.6L10.15 13.2L14.875 6.95C14.9751 6.81868 15.1002 6.70836 15.2429 6.62536C15.3857 6.54235 15.5434 6.48828 15.7071 6.46622C15.8707 6.44417 16.0371 6.45457 16.1968 6.49682C16.3564 6.53908 16.5062 6.61237 16.6375 6.7125C16.7688 6.81263 16.8791 6.93765 16.9621 7.08042C17.0451 7.22318 17.0992 7.3809 17.1213 7.54456C17.1433 7.70823 17.1329 7.87463 17.0907 8.03427C17.0484 8.19392 16.9751 8.34368 16.875 8.475V8.5125Z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </span>
                  <div class="ms-2">
                    <h4 class="xl:text-2.5xl text-base font-bold leading-tight">$2,400</h4>
                    <span>Earnings</span>
                  </div>
                </div>
                <img src="assets/images/vector/bulf2.png" alt="" class="absolute top-3.6 right-0 duration-500 group-hover:scale-125" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-x-6">
        <div class="xl:col-span-8 col-span-12">
          <OverviewChart title="Patient by Department" />
        </div>
        <div class="xl:col-span-4 col-span-12">
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
        <div class="xl:col-span-3 col-span-12">
          <div class="card !bg-primary rainbow-box relative z-1 flex flex-col" :style="`background-image: url(${bg}); background-size: cover; background-blend-mode: luminosity`">
            <div class="flex justify-between sm:pt-6 py-5 sm:p-5 px-4 items-center relative flex-wrap">
              <svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.9757 0.803847C16.1193 -0.267949 13.8322 -0.267949 11.9757 0.803847L3 5.986C1.14359 7.05779 0 9.03856 0 11.1822V21.5464C0 23.69 1.14359 25.6708 3 26.7426L11.9757 31.9247C13.8322 32.9965 16.1193 32.9965 17.9757 31.9247L26.9515 26.7426C28.8079 25.6708 29.9515 23.69 29.9515 21.5464V11.1821C29.9515 9.03855 28.8079 7.05779 26.9515 5.986L17.9757 0.803847ZM16.4757 6.08629C15.5475 5.5504 14.4039 5.5504 13.4757 6.0863L6.8247 9.92627C5.8965 10.4622 5.3247 11.4526 5.3247 12.5243V20.2043C5.3247 21.2761 5.8965 22.2665 6.82471 22.8024L13.4757 26.6423C14.4039 27.1782 15.5475 27.1782 16.4757 26.6423L23.1268 22.8024C24.055 22.2665 24.6268 21.2761 24.6268 20.2043V12.5243C24.6268 11.4525 24.055 10.4622 23.1268 9.92627L16.4757 6.08629Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div class="sm:p-5 p-4 !pt-0 flex-auto">
              <div class="finance">
                <h4 class="text-white max-xl:text-xl text-2xl mb-2 leading-normal">Your Health, safe and Secure</h4>
                <p class="text-white mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
              <div class="flex pt-4">
                <div class="avatar-list avatar-list-stacked">
                  <img
                    src="assets/images/contacts/pic555.jpg"
                    class="inline-block size-[38px] me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                    alt=""
                  />
                  <img
                    src="assets/images/contacts/pic666.jpg"
                    class="inline-block size-[38px] me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                    alt=""
                  />
                  <img
                    src="assets/images/contacts/pic777.jpg"
                    class="inline-block size-[38px] me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                    alt=""
                  />
                </div>
                <div class="ratting-data ml-5">
                  <h4 class="text-base text-white font-semibold">15k+</h4>
                  <span class="text-xs text-white">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:col-span-3 md:col-span-6 col-span-12">
          <div class="card">
            <div class="sm:p-5 p-4">
              <div class="relative">
                <div id="redial">
                  <ClientOnly>
                    <VueApexCharts height="160px" :series="state.series" :options="state.options" />
                  </ClientOnly>
                </div>
                <span class="right-sign absolute -bottom-10 left-1/2 -translate-x-1/2 z-1">
                  <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_3_700)">
                      <circle cx="46.5" cy="31.5" r="16.5" fill="#F8B940" />
                    </g>
                    <g clip-path="url(#clip0_3_700)">
                      <path
                        d="M52.738 25.3524C53.0957 24.9315 53.7268 24.8804 54.1476 25.2381C54.5684 25.5957 54.6196 26.2268 54.2619 26.6476L45.7619 36.6476C45.3986 37.0751 44.7549 37.1201 44.3356 36.7474L39.8356 32.7474C39.4228 32.3805 39.3857 31.7484 39.7526 31.3356C40.1195 30.9229 40.7516 30.8857 41.1643 31.2526L44.9002 34.5733L52.738 25.3524Z"
                        fill="#222B40"
                      />
                    </g>
                    <defs>
                      <filter id="filter0_d_3_700" x="0" y="0" width="93" height="93" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="15" />
                        <feGaussianBlur stdDeviation="15" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_700" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_700" result="shape" />
                      </filter>
                      <clipPath id="clip0_3_700">
                        <rect width="24" height="24" fill="white" transform="translate(35 19)" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </div>
              <div class="redia-date text-center mt-3.6">
                <h4 class="text-xl font-semibold mb-2">Appointments</h4>
                <p class="mb-4">Lorem ipsum dolor sit amet, consectetur</p>
                <NuxtLink to="/crm" class="btn border-warning text-textdark bg-warning">More Details</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-6 md:col-span-6 col-span-12">
          <div class="card flex flex-col">
            <div class="border-b border-border relative py-4.5 px-5 justify-between items-center flex-wrap flex gap-2">
              <div class="flex gap-2">
                <h4 class="text-base">Top Departments</h4>
              </div>
              <a class="text-2xs text-primary" href="javascript:void(0);"
                >Add Departments
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
                      <VueApexCharts width="350px" :series="state2.series" :options="state2.options" />
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
      </div>
    </div>
  </div>
</template>
