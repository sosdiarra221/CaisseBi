<script lang="ts" setup>
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";
</script>

<template>
  <div class="xl:w-1/3 lg:w-1/2">
    <div class="card">
      <div
        class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <h4 class="text-base">Timeline</h4>
      </div>
      <div class="sm:py-5 py-4">
        <div
          id="DZ_W_TimeLine"
          class="widget-timeline dz-scroll overflow-y-scroll overflow-x-hidden h-[370px] px-6"
        >
          <ul class="timeline relative">
            <li class="mb-3.6 relative">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-primarylight bg-card primary p-1"
              ></div>
              <a
                class="timeline-panel bg-primarylight border-primarylight"
                href="javascript:void(0);"
              >
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >10 minutes ago</span
                >
                <h6 class="text-2xs">
                  Youtube, a video-sharing website, goes live
                  <strong class="text-primary">$500</strong>.
                </h6>
              </a>
            </li>
            <li class="mb-3.6 relative">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-infolight bg-card info p-1"
              ></div>
              <a
                class="timeline-panel bg-infolight border-infolight"
                href="javascript:void(0);"
              >
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >20 minutes ago</span
                >
                <h6 class="text-2xs">
                  New order placed <strong class="text-info">#XF-2356.</strong>
                </h6>
                <p>Quisque a consequat ante Sit amet magna at volutapt...</p>
              </a>
            </li>
            <li class="mb-3.6 relative">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-dangerlight bg-card danger p-1"
              ></div>
              <a
                class="timeline-panel bg-dangerlight border-dangerlight"
                href="javascript:void(0);"
              >
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >30 minutes ago</span
                >
                <h6 class="text-2xs">
                  john just buy your product
                  <strong class="text-warning">Sell $250</strong>
                </h6>
              </a>
            </li>
            <li class="mb-3.6 relative">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-successlight bg-card success p-1"
              ></div>
              <a
                class="timeline-panel bg-successlight border-successlight"
                href="javascript:void(0);"
              >
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >15 minutes ago</span
                >
                <h6 class="text-2xs">StumbleUpon is acquired by eBay.</h6>
              </a>
            </li>
            <li class="mb-3.6 relative">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-warninglight bg-card warning p-1"
              ></div>
              <a
                class="timeline-panel bg-warninglight border-warninglight"
                href="javascript:void(0);"
              >
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >20 minutes ago</span
                >
                <h6 class="text-2xs">
                  Mashable, a news website and blog, goes live.
                </h6>
              </a>
            </li>
            <li class="mb-3.6 relative">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-[#6e6e6e] bg-card dark p-1"
              ></div>
              <a
                class="timeline-panel bg-light border-light"
                href="javascript:void(0);"
              >
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >20 minutes ago</span
                >
                <h6 class="text-[13px] text-dark">
                  Mashable, a news website and blog, goes live.
                </h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:w-1/3 lg:w-1/2">
    <div class="card">
      <div
        class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <h4 class="text-base">Timeline 2</h4>
      </div>
      <div class="p-0">
        <div
          id="DZ_W_TimeLine11"
          class="widget-timeline dz-scroll style-1 overflow-y-scroll overflow-x-hidden h-[370px] my-6 px-6 relative"
        >
          <ul class="timeline relative">
            <li class="relative mb-3.6">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-primarylight p-1 primary"
              ></div>
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >10 minutes ago</span
                >
                <h6 class="text-2xs">
                  Youtube, a video-sharing website, goes live
                  <strong class="text-primary">$500</strong>.
                </h6>
              </a>
            </li>
            <li class="relative mb-3.6">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-primarylight p-1 info"
              ></div>
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >20 minutes ago</span
                >
                <h6 class="text-2xs">
                  New order placed <strong class="text-info">#XF-2356.</strong>
                </h6>
                <p class="leading-[18px]">
                  Quisque a consequat ante Sit amet magna at volutapt...
                </p>
              </a>
            </li>
            <li class="relative mb-3.6">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-primarylight p-1 danger"
              ></div>
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >30 minutes ago</span
                >
                <h6 class="text-2xs">
                  john just buy your product
                  <strong class="text-warning">Sell $250</strong>
                </h6>
              </a>
            </li>
            <li class="relative mb-3.6">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-primarylight p-1 success"
              ></div>
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >15 minutes ago</span
                >
                <h6 class="text-2xs">StumbleUpon is acquired by eBay.</h6>
              </a>
            </li>
            <li class="relative mb-3.6">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-primarylight p-1 warning"
              ></div>
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >20 minutes ago</span
                >
                <h6 class="text-2xs">
                  Mashable, a news website and blog, goes live.
                </h6>
              </a>
            </li>
            <li class="relative mb-3.6">
              <div
                class="timeline-badge rounded-full size-[22px] left-0 absolute top-2.5 border-2 border-primarylight p-1 dark"
              ></div>
              <a class="timeline-panel text-muted" href="javascript:void(0);">
                <span class="text-xs block mb-1.1 opacity-80 tracking-[1px]"
                  >20 minutes ago</span
                >
                <h6 class="text-2xs">
                  Mashable, a news website and blog, goes live.
                </h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:w-1/3 lg:w-1/2">
    <div class="card">
      <div
        class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <h4 class="text-base">Notifications</h4>
      </div>
      <div class="sm:py-5 py-4">
        <div
          id="DZ_W_Todo1"
          class="widget-media dz-scroll overflow-y-scroll overflow-x-hidden h-[370px] px-6"
        >
          <ul class="timeline relative">
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2"
                >
                  <img
                    alt="image"
                    width="50"
                    src="assets/images/avatar/1.jpg"
                  />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Dr sultads Send you Photo</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <div class="relative self-end mt-1.1">
                  <CustomeDropDown>
                    <template #trigger>
                      <button
                        type="button"
                        class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                      >
                        <svg
                          width="18px"
                          height="18px"
                          viewBox="0 0 24 24"
                          version="1.1"
                        >
                          <g
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <rect x="0" y="0" width="24" height="24" />
                            <circle
                              fill="var(--primary)"
                              cx="5"
                              cy="12"
                              r="2"
                            />
                            <circle
                              fill="var(--primary)"
                              cx="12"
                              cy="12"
                              r="2"
                            />
                            <circle
                              fill="var(--primary)"
                              cx="19"
                              cy="12"
                              r="2"
                            />
                          </g>
                        </svg>
                      </button>
                    </template>
                    <template #menu>
                      <div
                        class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                      >
                        <a
                          class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                          href="javascript:void(0);"
                          >Edit</a
                        >
                        <a
                          class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                          href="javascript:void(0);"
                          >Delete</a
                        >
                      </div>
                    </template>
                  </CustomeDropDown>
                </div>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-info bg-infolight"
                >
                  KG
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Resport created successfully</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-success bg-successlight"
                >
                  <i class="fa fa-home"></i>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Reminder : Treatment Time!</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2"
                >
                  <img
                    alt="image"
                    width="50"
                    src="assets/images/avatar/1.jpg"
                  />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Dr sultads Send you Photo</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-danger bg-dangerlight"
                >
                  KG
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Resport created successfully</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-primary bg-primarylight"
                >
                  <i class="fa fa-home"></i>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Reminder : Treatment Time!</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:w-1/3 lg:w-1/2">
    <div class="card border-0 pb-0">
      <div
        class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <h4 class="text-base">Notifications 2</h4>
      </div>
      <div class="sm:py-5 py-4">
        <div
          id="DZ_W_Todo2"
          class="widget-media dz-scroll overflow-y-scroll overflow-x-hidden h-[370px] px-6"
        >
          <ul class="timeline relative">
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2"
                >
                  <img
                    alt="image"
                    width="50"
                    src="assets/images/avatar/1.jpg"
                  />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Dr sultads Send you Photo</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-info bg-infolight"
                >
                  KG
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">
                    Resport created successfully
                    <span class="badge bg-warning text-white">Warning</span>
                  </h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-success bg-successlight"
                >
                  <i class="fa fa-home"></i>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">Reminder : Treatment Time!</h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2"
                >
                  <img
                    alt="image"
                    width="50"
                    src="assets/images/avatar/1.jpg"
                  />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">
                    Dr sultads Send you Photo
                    <span class="badge bg-dangerlight text-danger">Danger</span>
                  </h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-danger bg-dangerlight"
                >
                  KG
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">
                    Resport created successfully
                    <span class="badge bg-successlight text-success"
                      >Success</span
                    >
                  </h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-primary bg-primarylight"
                >
                  <i class="fa fa-home"></i>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">
                    Reminder : Treatment Time!
                    <span class="badge bg-successlight text-success"
                      >Success</span
                    >
                  </h5>
                  <small class="block">29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:w-1/3 lg:w-1/2">
    <div class="card border-0 pb-0">
      <div
        class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <h4 class="text-base">Message</h4>
      </div>
      <div class="sm:py-5 py-4">
        <div
          id="DZ_W_Todo3"
          class="widget-media dz-scroll overflow-y-scroll overflow-x-hidden h-[370px] px-6"
        >
          <ul class="timeline relative">
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2"
                >
                  <img
                    alt="image"
                    width="50"
                    src="assets/images/avatar/1.jpg"
                  />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">
                    Alfie Mason <small>29 July 2020</small>
                  </h5>
                  <p class="mb-1 text-xs">
                    I shared this on my fb wall a few months back..
                  </p>
                  <a
                    href="javascript:void(0);"
                    class="bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn btn-xxs"
                    >Reply</a
                  >{{ " " }}
                  <a
                    href="javascript:void(0);"
                    class="bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white btn btn-xxs"
                    >Delete</a
                  >
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-info bg-infolight"
                >
                  KG
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">
                    Jacob Tucker <small>29 July 2020</small>
                  </h5>
                  <p class="mb-1 text-xs">
                    I shared this on my fb wall a few months back..
                  </p>
                  <a
                    href="javascript:void(0);"
                    class="bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn btn-xxs"
                    >Reply</a
                  >{{ " " }}
                  <a
                    href="javascript:void(0);"
                    class="bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white btn btn-xxs"
                    >Delete</a
                  >
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-success bg-successlight"
                >
                  <img
                    alt="image"
                    width="50"
                    src="assets/images/avatar/2.jpg"
                  />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">
                    Jack Ronan <small>29 July 2020</small>
                  </h5>
                  <p class="mb-1 text-xs">
                    I shared this on my fb wall a few months back..
                  </p>
                  <a
                    href="javascript:void(0);"
                    class="bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn btn-xxs"
                    >Reply</a
                  >{{ " " }}
                  <a
                    href="javascript:void(0);"
                    class="bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white btn btn-xxs"
                    >Delete</a
                  >
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2"
                >
                  <img
                    alt="image"
                    width="50"
                    src="assets/images/avatar/1.jpg"
                  />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">
                    Noah Baldon <small>29 July 2020</small>
                  </h5>
                  <p class="mb-1 text-xs">
                    I shared this on my fb wall a few months back..
                  </p>
                  <a
                    href="javascript:void(0);"
                    class="bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn btn-xxs"
                    >Reply</a
                  >{{ " " }}
                  <a
                    href="javascript:void(0);"
                    class="bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white btn btn-xxs"
                    >Delete</a
                  >
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-danger bg-dangerlight"
                >
                  PU
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">
                    Thomas Grady <small>02:26 PM</small>
                  </h5>
                  <p class="mb-1 text-xs">
                    I shared this on my fb wall a few months back..
                  </p>
                  <a
                    href="javascript:void(0);"
                    class="bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn btn-xxs"
                    >Reply</a
                  >{{ " " }}
                  <a
                    href="javascript:void(0);"
                    class="bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white btn btn-xxs"
                    >Delete</a
                  >
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div
                  class="flex items-center justify-center size-9 rounded-full overflow-hidden font-bold self-start mr-2 text-primary bg-primarylight"
                >
                  <img
                    alt="image"
                    width="50"
                    src="assets/images/avatar/3.jpg"
                  />
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-1 leading-6">
                    Oscar Weston <small>29 July 2020</small>
                  </h5>
                  <p class="mb-1 text-xs">
                    I shared this on my fb wall a few months back..
                  </p>
                  <a
                    href="javascript:void(0);"
                    class="bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn btn-xxs"
                    >Reply</a
                  >{{ " " }}
                  <a
                    href="javascript:void(0);"
                    class="bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white btn btn-xxs"
                    >Delete</a
                  >
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:w-1/3 lg:w-1/2">
    <div class="card border-0 pb-0">
      <div
        class="relative sm:px-5 sm:py-4 p-4 !pb-0 flex justify-between items-center flex-wrap"
      >
        <h4 class="text-base">To Do List</h4>
      </div>
      <div class="sm:py-5 py-4">
        <div
          id="DZ_W_Todo4"
          class="widget-media dz-scroll overflow-y-scroll overflow-x-hidden h-[370px] px-6"
        >
          <ul class="timeline relative">
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="form-check checkbox-success check-lg mr-3">
                  <input
                    type="checkbox"
                    class="form-check-input size-6"
                    id="customCheckBox1"
                    required
                  />
                  <label
                    class="ml-[0.313rem] mt-[0.113rem]"
                    for="customCheckBox1"
                  ></label>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-0">Get up</h5>
                  <small>29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="form-check checkbox-warning check-lg mr-3">
                  <input
                    type="checkbox"
                    class="form-check-input size-6"
                    id="customCheckBox2"
                    required
                  />
                  <label
                    class="ml-[0.313rem] mt-[0.113rem]"
                    for="customCheckBox2"
                  ></label>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-0">Stand up</h5>
                  <small>29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="form-check checkbox-primary check-lg mr-3">
                  <input
                    type="checkbox"
                    class="form-check-input size-6"
                    id="customCheckBox3"
                    required
                  />
                  <label
                    class="ml-[0.313rem] mt-[0.113rem]"
                    for="customCheckBox3"
                  ></label>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-0">Don't give up the fight.</h5>
                  <small>29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="form-check checkbox-info check-lg mr-3">
                  <input
                    type="checkbox"
                    class="form-check-input size-6"
                    id="customCheckBox4"
                    required
                  />
                  <label
                    class="ml-[0.313rem] mt-[0.113rem]"
                    for="customCheckBox4"
                  ></label>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-0">Do something else</h5>
                  <small>29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="form-check checkbox-success check-lg mr-3">
                  <input
                    type="checkbox"
                    class="form-check-input size-6"
                    id="customCheckBox5"
                    required
                  />
                  <label
                    class="ml-[0.313rem] mt-[0.113rem]"
                    for="customCheckBox5"
                  ></label>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-0">Get up</h5>
                  <small>29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
            <li>
              <div class="flex items-center py-[0.8rem] px-3 -mx-1.1">
                <div class="form-check checkbox-warning check-lg mr-3">
                  <input
                    type="checkbox"
                    class="form-check-input size-6"
                    id="customCheckBox6"
                    required
                  />
                  <label
                    class="ml-[0.313rem] mt-[0.113rem]"
                    for="customCheckBox6"
                  ></label>
                </div>
                <div class="media-body flex-1">
                  <h5 class="mb-0">Stand up</h5>
                  <small>29 July 2020 - 02:26 PM</small>
                </div>
                <CustomeDropDown>
                  <template #trigger>
                    <button
                      type="button"
                      class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center"
                    >
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--primary)" cx="5" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="12" cy="12" r="2" />
                          <circle fill="var(--primary)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </button>
                  </template>
                  <template #menu>
                    <div
                      class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1"
                    >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Edit</a
                      >
                      <a
                        class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                        href="javascript:void(0);"
                        >Delete</a
                      >
                    </div>
                  </template>
                </CustomeDropDown>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
