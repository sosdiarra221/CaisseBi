<script lang="ts" setup>
import { ref } from "vue";
import { IMAGES } from "~/lib/Theme";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const open = ref(false);

const gallery = [IMAGES.profile2, IMAGES.profile3, IMAGES.profile4, IMAGES.profile3, IMAGES.profile4, IMAGES.profile2];
</script>

<template>
  <div class="xl:w-1/3 w-full">
    <div class="row">
      <div class="w-full">
        <div class="card">
          <div class="sm:p-5 p-4">
            <div class="profile-statistics">
              <div class="text-center">
                <div class="row">
                  <div class="flex-1">
                    <h3 class="mb-2">150</h3>
                    <span>Follower</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="mb-2">140</h3>
                    <span>Place Stay</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="mb-2">45</h3>
                    <span>Reviews</span>
                  </div>
                </div>
                <div class="mt-6">
                  <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-1 mr-1">Follow</a>
                  <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-1" @click="open = true">Send Message</a>
                </div>
              </div>
              <Transition as="template" v-show="open" enter-active-class="transition-all" enter-from-class="opacity-0" enter-to-class="opacity-100">
                <div class="relative z-10" @close="open = false">
                  <div class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto">
                    <div class="modal-dialog rounded-lg min-h-screen flex items-center justify-center" @click="open = false">
                      <div class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg">
                        <div class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border">
                          <h5 class="modal-title">Send Message</h5>
                          <button type="button" class="btn-close p-2 text-xs dark:invert" @click="open = false"></button>
                        </div>
                        <div class="relative p-7.5">
                          <div class="comment-form">
                            <div class="row">
                              <div class="lg:w-1/2">
                                <div class="mb-4">
                                  <label class="text-secondary form-label">Name <span class="text-danger">*</span></label>
                                  <input
                                    type="text"
                                    class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                                    value="Author"
                                    name="Author"
                                    placeholder="Author"
                                  />
                                </div>
                              </div>
                              <div class="lg:w-1/2">
                                <div class="mb-4">
                                  <label class="text-secondary form-label">Email <span class="text-danger">*</span></label>
                                  <input
                                    type="text"
                                    class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                                    value="Email"
                                    placeholder="Email"
                                    name="Email"
                                  />
                                </div>
                              </div>
                              <div class="w-full">
                                <div class="mb-4">
                                  <label class="text-secondary form-label">Comment <span class="text-danger">*</span></label>
                                  <textarea
                                    rows="8"
                                    class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                                    name="comment"
                                    placeholder="Comment"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="w-full">
                                <div class="mb-4">
                                  <input type="submit" value="Post Comment" class="btn !bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-1" name="submit" @click="open = false" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="card">
          <div class="sm:p-5 p-4">
            <div class="profile-blog">
              <h5 class="text-primary inline">Today Highlights</h5>
              <img src="../../assets/images/profile/1.jpg" alt="" class="max-w-full !h-auto mt-6 mb-6 w-full rounded-lg" />
              <h4 class="mb-2"><NuxtLink to="/post-details" class="text-secondary">Darwin Creative Agency Theme</NuxtLink></h4>
              <p class="mb-0">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="card">
          <div class="sm:p-5 p-4">
            <div class="profile-interest">
              <h5 class="text-primary inline">Interest</h5>
              <Lightgallery class="row !mt-4 sp4 gx-0" id="lightgallery" :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom] }">
                <a v-for="(img, ind) in gallery" :key="ind" :href="img" class="lg-item mb-1 sm:!w-1/3 !w-1/2 px-0.5">
                  <img :src="img" alt="" class="px-1 py-1 max-w-full !h-auto rounded-lg" />
                </a>
              </Lightgallery>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="card">
          <div class="sm:p-5 p-4">
            <div class="profile-news">
              <h5 class="text-primary inline">Our Latest News</h5>
              <div class="flex items-start pt-4 pb-4">
                <img src="../../assets/images/profile/5.jpg" alt="image" class="mr-4 rounded-lg" width="75" />
                <div class="media-body">
                  <h5 class="mb-2"><NuxtLink to="/post-details" class="text-secondary">Compete this projects Monday</NuxtLink></h5>
                  <p>I shared this on my fb wall a few months back, and I thought.</p>
                </div>
              </div>
              <div class="flex items-start pt-4 pb-4">
                <img src="../../assets/images/profile/6.jpg" alt="image" class="mr-4 rounded-lg" width="75" />
                <div class="media-body">
                  <h5 class="mb-2"><NuxtLink to="/post-details" class="text-secondary">Development planning</NuxtLink></h5>
                  <p>I shared this on my fb wall a few months back, and I thought.</p>
                </div>
              </div>
              <div class="flex items-start pt-4 pb-0">
                <img src="../../assets/images/profile/7.jpg" alt="image" class="mr-4 rounded-lg" width="75" />
                <div class="media-body">
                  <h5 class="mb-2"><NuxtLink to="/post-details" class="text-secondary">Software planning</NuxtLink></h5>
                  <p>I shared this on my fb wall a few months back, and I thought.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
