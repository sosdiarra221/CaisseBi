<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import CommoneProfile from "~/components/profile/CommoneProfile.vue";
import { IMAGES } from "~/lib/Theme";


const cards = [
  { img: IMAGES.avatar6, name: "Lawrence" },
  { ele: "S", name: "Sean Bean" },
  { img: IMAGES.avatar5, name: "Alan Johnson" },
  { ele: "P", name: "Peter Marcus" },
  { img: IMAGES.avatar6, name: "Harvey" },
  { img: IMAGES.avatar5, name: "Johnson" },
  { ele: "A", name: "Marshall" },
  { ele: "N", name: "McDonald" },
  { ele: "K", name: "Karter" },
];
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Followers" name="Followers" />
    <div class="container">
      <CommoneProfile title="Followers" />
      <div class="tab-content" id="tabContentMyProfileBottom">
        <div class="grid grid-cols-12 gap-x-6">
          <div class="xl:col-span-4 sm:col-span-6 col-span-12" v-for="({ img, name, ele }, ind) in cards" :key="ind">
            <div class="card">
              <div class="text-center p-6">
                <div class="mx-auto inline-block relative mb-4">
                  <template v-if="img">
                    <img :src="img" alt="" class="size-16 min-w-16 rounded-full" />
                    <span class="fa fa-circle bored border-light text-success absolute bottom-0 right-0 me-1 text-xs"></span>
                  </template>
                  <template v-else>
                    <div
                      :class="{ 'bg-warninglight text-warning': ind == 6, 'bg-successlight text-success': ind == 7 }"
                      class="size-16 bg-infolight text-info rounded-full mx-auto flex items-center justify-center"
                    >
                      {{ ele }}
                    </div>
                  </template>
                </div>
                <div class="mb-6">
                  <h4>
                    <a href="javascript:void(0);" class="text-secondary">{{ name }}</a>
                  </h4>
                  <p class="text-2sm">Art Director at DexignZone.</p>
                </div>
                <div class="flex justify-center px-4 user-detail">
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$12,500.00</h6>
                    <span class="text-2xs">Avg. Deal</span>
                  </div>
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$150,500.00</h6>
                    <span class="text-2xs">Deals</span>
                  </div>
                </div>
                <button type="button" class="btn text-white bg-info hover:bg-infohover hover:shadow-btninfo border border-info btn-follow me-1 mt-6">
                  <i class="la la-user me-1 text-sm"></i>Follow
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card">
              <div class="text-center p-6">
                <div class="mx-auto inline-block relative mb-4">
                  <div class="size-16 bg-infolight text-info rounded-full mx-auto flex items-center justify-center">S</div>
                  <span class="fa fa-circle bored border-light text-success absolute bottom-0 right-0 me-1 text-xs"></span>
                </div>
                <div class="mb-6">
                  <h4>
                    <a href="javascript:void(0);" class="text-secondary">Sean Bean</a>
                  </h4>
                  <p class="text-2sm">Art Director at DexignZone.</p>
                </div>
                <div class="flex justify-center px-4 user-detail">
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$12,500.00</h6>
                    <span class="text-2xs">Avg. Deal</span>
                  </div>
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$150,500.00</h6>
                    <span class="text-2xs">Deals</span>
                  </div>
                </div>
                <button type="button" class="btn text-white bg-info hover:bg-infohover hover:shadow-btninfo border border-info btn-follow me-1 mt-6">
                  <i class="la la-user me-1 text-sm"></i>Follow
                </button>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card">
              <div class="text-center p-6">
                <div class="mx-auto inline-block relative mb-4">
                  <img src="assets/images/avatar/5.jpg" alt="" class="size-16 min-w-16 rounded-full" />
                  <span class="fa fa-circle bored border-light text-success absolute bottom-0 right-0 me-1 text-xs"></span>
                </div>
                <div class="mb-6">
                  <h4>
                    <a href="javascript:void(0);" class="text-secondary">Alan Johnson</a>
                  </h4>
                  <p class="text-2sm">Art Director at DexignZone.</p>
                </div>
                <div class="flex justify-center px-4 user-detail">
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$12,500.00</h6>
                    <span class="text-2xs">Avg. Deal</span>
                  </div>
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$150,500.00</h6>
                    <span class="text-2xs">Deals</span>
                  </div>
                </div>
                <button type="button" class="btn text-white bg-info hover:bg-infohover hover:shadow-btninfo border border-info btn-follow me-1 mt-6">
                  <i class="la la-user me-1 text-sm"></i>Follow
                </button>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card">
              <div class="text-center p-6">
                <div class="mx-auto inline-block relative mb-4">
                  <div class="size-16 bg-purplelight text-purple rounded-full mx-auto flex items-center justify-center">P</div>
                  <span class="fa fa-circle bored border-light text-success absolute bottom-0 right-0 me-1 text-xs"></span>
                </div>
                <div class="mb-6">
                  <h4>
                    <a href="javascript:void(0);" class="text-secondary">Peter Marcus</a>
                  </h4>
                  <p class="text-2sm">Art Director at DexignZone.</p>
                </div>
                <div class="flex justify-center px-4 user-detail">
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$12,500.00</h6>
                    <span class="text-2xs">Avg. Deal</span>
                  </div>
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$150,500.00</h6>
                    <span class="text-2xs">Deals</span>
                  </div>
                </div>
                <button type="button" class="btn text-white bg-info hover:bg-infohover hover:shadow-btninfo border border-info btn-follow me-1 mt-6">
                  <i class="la la-user me-1 text-sm"></i>Follow
                </button>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card">
              <div class="text-center p-6">
                <div class="mx-auto inline-block relative mb-4">
                  <img src="assets/images/avatar/6.jpg" alt="" class="size-16 min-w-16 rounded-full" />
                  <span class="fa fa-circle bored border-light text-success absolute bottom-0 right-0 me-1 text-xs"></span>
                </div>
                <div class="mb-6">
                  <h4>
                    <a href="javascript:void(0);" class="text-secondary">Harvey</a>
                  </h4>
                  <p class="text-2sm">Web Designer at DexignZone.</p>
                </div>
                <div class="flex justify-center px-4 user-detail">
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$12,500.00</h6>
                    <span class="text-2xs">Avg. Deal</span>
                  </div>
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$150,500.00</h6>
                    <span class="text-2xs">Deals</span>
                  </div>
                </div>
                <button type="button" class="btn text-white bg-info hover:bg-infohover hover:shadow-btninfo border border-info btn-follow me-1 mt-6">
                  <i class="la la-user me-1 text-sm"></i>Follow
                </button>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card">
              <div class="text-center p-6">
                <div class="mx-auto inline-block relative mb-4">
                  <img src="assets/images/avatar/5.jpg" alt="" class="size-16 min-w-16 rounded-full" />
                  <span class="fa fa-circle bored border-light text-success absolute bottom-0 right-0 me-1 text-xs"></span>
                </div>
                <div class="mb-6">
                  <h4>
                    <a href="javascript:void(0);" class="text-secondary">Johnson</a>
                  </h4>
                  <p class="text-2sm">PHP Developer at DexignZone.</p>
                </div>
                <div class="flex justify-center px-4 user-detail">
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$12,500.00</h6>
                    <span class="text-2xs">Avg. Deal</span>
                  </div>
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$150,500.00</h6>
                    <span class="text-2xs">Deals</span>
                  </div>
                </div>
                <button type="button" class="btn text-white bg-info hover:bg-infohover hover:shadow-btninfo border border-info btn-follow me-1 mt-6">
                  <i class="la la-user me-1 text-sm"></i>Follow
                </button>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card">
              <div class="text-center p-6">
                <div class="mx-auto inline-block relative mb-4">
                  <div class="size-16 bg-warninglight text-warning rounded-full mx-auto flex items-center justify-center">A</div>
                  <span class="fa fa-circle bored border-light text-success absolute bottom-0 right-0 me-1 text-xs"></span>
                </div>
                <div class="mb-6">
                  <h4>
                    <a href="javascript:void(0);" class="text-secondary">Marshall</a>
                  </h4>
                  <p class="text-2sm">React Developer at DexignZone.</p>
                </div>
                <div class="flex justify-center px-4 user-detail">
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$12,500.00</h6>
                    <span class="text-2xs">Avg. Deal</span>
                  </div>
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$150,500.00</h6>
                    <span class="text-2xs">Deals</span>
                  </div>
                </div>
                <button type="button" class="btn text-white bg-info hover:bg-infohover hover:shadow-btninfo border border-info btn-follow me-1 mt-6">
                  <i class="la la-user me-1 text-sm"></i>Follow
                </button>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card">
              <div class="text-center p-6">
                <div class="mx-auto inline-block relative mb-4">
                  <div class="size-16 bg-successlight text-success rounded-full mx-auto flex items-center justify-center">N</div>
                </div>
                <div class="mb-6">
                  <h4>
                    <a href="javascript:void(0);" class="text-secondary">McDonald</a>
                  </h4>
                  <p class="text-2sm">React Native Developer at DexignZone.</p>
                </div>
                <div class="flex justify-center px-4 user-detail">
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$12,500.00</h6>
                    <span class="text-2xs">Avg. Deal</span>
                  </div>
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$150,500.00</h6>
                    <span class="text-2xs">Deals</span>
                  </div>
                </div>
                <button type="button" class="btn text-white bg-info hover:bg-infohover hover:shadow-btninfo border border-info btn-follow me-1 mt-6">
                  <i class="la la-user me-1 text-sm"></i>Follow
                </button>
              </div>
            </div>
          </div>
          <div class="xl:col-span-4 sm:col-span-6 col-span-12">
            <div class="card">
              <div class="text-center p-6">
                <div class="mx-auto inline-block relative mb-4">
                  <div class="size-16 bg-primarylight text-primary rounded-full full-auto flex items-center justify-center">K</div>
                </div>
                <div class="mb-6">
                  <h4>
                    <a href="javascript:void(0);" class="text-secondary">Karter</a>
                  </h4>
                  <p class="text-2sm">Web Designer at DexignZone.</p>
                </div>
                <div class="flex justify-center px-4 user-detail">
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$12,500.00</h6>
                    <span class="text-2xs">Avg. Deal</span>
                  </div>
                  <div class="bg-light rounded-lg px-4 py-2 mx-2 grow">
                    <h6>$150,500.00</h6>
                    <span class="text-2xs">Deals</span>
                  </div>
                </div>
                <button type="button" class="btn text-white bg-info hover:bg-infohover hover:shadow-btninfo border border-info btn-follow me-1 mt-6">
                  <i class="la la-user me-1 text-sm"></i>Follow
                </button>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
