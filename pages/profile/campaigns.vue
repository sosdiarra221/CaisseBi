<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import CommoneProfile from "~/components/profile/CommoneProfile.vue";


</script>
<template>
  <div class="content-body default-height">
    <CommonNav title="Campaigns" name="Campaigns" />
    <div class="container">
      <CommoneProfile title="Campaigns" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="col-span-12">
            <div class="flex justify-between items-center mb-3">
              <h5 class="mb-0">My Campaigns</h5>
              <div class="flex items-center">
                <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm ms-2"
                  >+ Add Campaign</a
                >
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card overflow-hidden">
              <div class="sm:p-5 p-4">
                <div class="p-2">
                  <div class="flex justify-between mb-6">
                    <div class="flex items-center">
                      <div class="rounded-lg size-[45px] min-w-[2.813rem] flex items-center justify-center">
                        <img src="assets/images/logo/large/twitch.png" width="35" alt="" />
                      </div>
                      <h3 class="ml-4 text-base text-secondary mb-2">Twitch Ads</h3>
                    </div>
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                  <h2 class="pt-1 mb-2">$450.00</h2>
                  <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.83334 14.1668L14.1667 5.8335"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.83334 5.8335H14.1667V14.1668"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span class="text-success me-1">+32.40%</span>
                    more spending
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card overflow-hidden">
              <div class="sm:p-5 p-4">
                <div class="p-2">
                  <div class="flex justify-between mb-6">
                    <div class="flex items-center">
                      <div class="rounded-lg size-[45px] min-w-[2.813rem] flex items-center justify-center">
                        <img src="assets/images/logo/large/twitter.png" width="35" alt="" />
                      </div>
                      <h3 class="ml-4 text-base text-secondary mb-2">Twitch Ads</h3>
                    </div>
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                  <h2 class="pt-1 mb-2">750K</h2>
                  <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.83334 14.1668L14.1667 5.8335"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.83334 5.8335H14.1667V14.1668"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span class="text-success me-1">+8.80%</span>
                    folowers growth
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card overflow-hidden">
              <div class="sm:p-5 p-4">
                <div class="p-2">
                  <div class="flex justify-between mb-6">
                    <div class="flex items-center">
                      <div class="rounded-lg size-[45px] min-w-[2.813rem] flex items-center justify-center">
                        <img src="assets/images/logo/large/spotify.png" width="35" alt="" />
                      </div>
                      <h3 class="ml-4 text-base text-secondary mb-2">Spotify Listerners</h3>
                    </div>
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                  <h2 class="pt-1 mb-2">1,125</h2>
                  <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.1667 5.8335L5.83337 14.1668"
                        stroke="var(--danger)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M14.1667 14.1668H5.83337V5.8335"
                        stroke="var(--danger)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span class="text-danger me-1">-10%</span>
                    less comments than usual
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card overflow-hidden">
              <div class="sm:p-5 p-4">
                <div class="p-2">
                  <div class="flex justify-between mb-6">
                    <div class="flex items-center">
                      <div class="rounded-lg size-[45px] min-w-[2.813rem] flex items-center justify-center">
                        <img src="assets/images/logo/large/telegram.png" width="35" alt="" />
                      </div>
                      <h3 class="ml-4 text-base text-secondary mb-2">Telegram Posts</h3>
                    </div>
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                  <h2 class="pt-1 mb-2">580</h2>
                  <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.83334 14.1668L14.1667 5.8335"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.83334 5.8335H14.1667V14.1668"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span class="text-success me-1">+25%</span>
                    more spending
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card overflow-hidden">
              <div class="sm:p-5 p-4">
                <div class="p-2">
                  <div class="flex justify-between mb-6">
                    <div class="flex items-center">
                      <div class="rounded-lg size-[45px] min-w-[2.813rem] flex items-center justify-center">
                        <img src="assets/images/logo/large/pinterest.png" width="35" alt="" />
                      </div>
                      <h3 class="ml-4 text-base text-secondary mb-2">Pintrest Posts</h3>
                    </div>
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                  <h2 class="pt-1 mb-2">120</h2>
                  <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.83334 14.1668L14.1667 5.8335"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.83334 5.8335H14.1667V14.1668"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span class="text-success me-1">+58.32%</span>
                    more posts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card overflow-hidden">
              <div class="sm:p-5 p-4">
                <div class="p-2">
                  <div class="flex justify-between mb-6">
                    <div class="flex items-center">
                      <div class="rounded-lg size-[45px] min-w-[2.813rem] flex items-center justify-center">
                        <img src="assets/images/logo/large/github.png" width="35" alt="" />
                      </div>
                      <h3 class="ml-4 text-base text-secondary mb-2">Github Contributes</h3>
                    </div>
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                  <h2 class="pt-1 mb-2">2,250</h2>
                  <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.1667 5.8335L5.83337 14.1668"
                        stroke="var(--danger)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M14.1667 14.1668H5.83337V5.8335"
                        stroke="var(--danger)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span class="text-danger me-1">-12.50%</span>
                    less contributes than usual
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card overflow-hidden">
              <div class="sm:p-5 p-4">
                <div class="p-2">
                  <div class="flex justify-between mb-6">
                    <div class="flex items-center">
                      <div class="rounded-lg size-[45px] min-w-[2.813rem] flex items-center justify-center">
                        <img src="assets/images/logo/large/youtube.png" width="35" alt="" />
                      </div>
                      <h3 class="ml-4 text-base text-secondary mb-2">Youtube Subscribers</h3>
                    </div>
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                  <h2 class="pt-1 mb-2">350</h2>
                  <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.83334 14.1668L14.1667 5.8335"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.83334 5.8335H14.1667V14.1668"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span class="text-success me-1">+5.50%</span>
                    subscribewrs growth
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card overflow-hidden">
              <div class="sm:p-5 p-4">
                <div class="p-2">
                  <div class="flex justify-between mb-6">
                    <div class="flex items-center">
                      <div class="rounded-lg size-[45px] min-w-[2.813rem] flex items-center justify-center">
                        <img src="assets/images/logo/large/reddit.png" width="35" alt="" />
                      </div>
                      <h3 class="ml-4 text-base text-secondary mb-2">Reddit Awards</h3>
                    </div>
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                  <h2 class="pt-1 mb-2">1.5M</h2>
                  <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.83334 14.1668L14.1667 5.8335"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.83334 5.8335H14.1667V14.1668"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span class="text-success me-1">+5.52%</span>
                    folowers growth
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card overflow-hidden">
              <div class="sm:p-5 p-4">
                <div class="p-2">
                  <div class="flex justify-between mb-6">
                    <div class="flex items-center">
                      <div class="rounded-lg size-[45px] min-w-[2.813rem] flex items-center justify-center">
                        <img src="assets/images/logo/large/google.png" width="35" alt="" />
                      </div>
                      <h3 class="ml-4 text-base text-secondary mb-2">Google Search</h3>
                    </div>
                    <button type="button" class="btn bg-light !py-1 !px-[7px] !text-lg self-start"><i class="fa-solid fa-border-all"></i></button>
                  </div>
                  <h2 class="pt-1 mb-2">25.5M</h2>
                  <p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.83334 14.1668L14.1667 5.8335"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M5.83334 5.8335H14.1667V14.1668"
                        stroke="var(--success)"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <span class="text-success me-1">+5.52%</span>
                    Users growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
