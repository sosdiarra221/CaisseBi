<script lang="ts" setup>
import { Dialog, TransitionRoot } from "@headlessui/vue";

const tab = ref("tabtwo");
const open = ref({
  dialog1: false,
  dialog2: false,
  dialog3: false,
  dialog4: false,
});
const show = ref(false);
</script>

<template>
  <div class="xl:w-2/3 w-full">
    <div class="card !h-auto">
      <div class="sm:p-5 p-4">
        <div class="profile-tab">
          <div class="dz-tab-area">
            <ul class="nav nav-tabs flex flex-wrap border-b border-border">
              <li class="nav-item">
                <a
                  href="javascript:void(0)"
                  class="nav-link px-4 py-2 sm:mr-7.5 mr-0 block font-medium border-b border-transparent duration-500 hover:text-primary"
                  @click.prevent="tab = 'tabone'"
                  :class="{ '!border-primary text-primary': tab == 'tabone' }"
                  >Posts</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="javascript:void(0)"
                  class="nav-link px-4 py-2 sm:mr-7.5 mr-0 block font-medium border-b border-transparent duration-500 hover:text-primary"
                  @click.prevent="tab = 'tabtwo'"
                  :class="{ '!border-primary text-primary': tab == 'tabtwo' }"
                  >About Me</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="javascript:void(0)"
                  class="nav-link px-4 py-2 sm:mr-7.5 mr-0 block font-medium border-b border-transparent duration-500 hover:text-primary"
                  @click.prevent="tab = 'tabthree'"
                  :class="{
                    '!border-primary text-primary': tab == 'tabthree',
                  }"
                  >Setting</a
                >
              </li>
            </ul>
            <div class="tab-content-area">
              <Transition
                v-show="tab == 'tabone'"
                enter-active-class="transition-all duration-700 easy-in-out"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
              >
                <div class="my-post-content pt-4">
                  <div class="mb-7.5">
                    <textarea
                      name="textarea"
                      id="textarea"
                      cols="30"
                      rows="5"
                      class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y my-3.6"
                      placeholder="Please type what you want...."
                    ></textarea>
                    <div class="flex">
                      <div>
                        <a
                          href="javascript:void(0);"
                          class="btn bg-primarylight hover:shadow-btnprimary text-primary mr-1 !px-4"
                          @click="open.dialog1 = true"
                          ><i class="fa fa-link m-0"></i>
                        </a>
                        <!-- Modal -->
                        <TransitionRoot as="template" :show="open.dialog1">
                          <Dialog
                            class="relative z-10"
                            @close="open.dialog1 = false"
                          >
                            <div
                              class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
                            >
                              <div
                                class="modal-dialog rounded-lg min-h-screen flex items-center justify-center"
                                @click="open.dialog1 = false"
                              >
                                <div
                                  class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg"
                                >
                                  <div
                                    class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border"
                                  >
                                    <h5 class="modal-title">Social Links</h5>
                                    <button
                                      type="button"
                                      class="btn-close p-2 text-xs dark:invert"
                                      @click="open.dialog1 = false"
                                    ></button>
                                  </div>
                                  <div class="relative p-7.5">
                                    <a
                                      class="sm:size-[55px] sm:leading-[55px] size-10 leading-10 text-center rounded-lg sm:text-xl text-base inline-block text-white bg-[#3B5998]"
                                      href="javascript:void(0)"
                                    >
                                      <i class="fab fa-facebook-f"></i> </a
                                    >{{ " " }}
                                    <a
                                      class="sm:size-[55px] sm:leading-[55px] size-10 leading-10 text-center rounded-lg sm:text-xl text-base inline-block text-white bg-[#DE4E43]"
                                      href="javascript:void(0)"
                                    >
                                      <i class="fab fa-google-plus-g"></i> </a
                                    >{{ " " }}
                                    <a
                                      class="sm:size-[55px] sm:leading-[55px] size-10 leading-10 text-center rounded-lg sm:text-xl text-base inline-block text-white bg-[#007BB6]"
                                      href="javascript:void(0)"
                                    >
                                      <i class="fab fa-linkedin-in"></i> </a
                                    >{{ " " }}
                                    <a
                                      class="sm:size-[55px] sm:leading-[55px] size-10 leading-10 text-center rounded-lg sm:text-xl text-base inline-block text-white bg-[#8A5A4E]"
                                      href="javascript:void(0)"
                                    >
                                      <i class="fab fa-instagram"></i> </a
                                    >{{ " " }}
                                    <a
                                      class="sm:size-[55px] sm:leading-[55px] size-10 leading-10 text-center rounded-lg sm:text-xl text-base inline-block text-white bg-[#1EA1F3]"
                                      href="javascript:void(0)"
                                    >
                                      <i class="fab fa-twitter"></i> </a
                                    >{{ " " }}
                                    <a
                                      class="sm:size-[55px] sm:leading-[55px] size-10 leading-10 text-center rounded-lg sm:text-xl text-base inline-block text-white bg-[#CE201F]"
                                      href="javascript:void(0)"
                                    >
                                      <i class="fab fa-youtube"></i> </a
                                    >{{ " " }}
                                    <a
                                      class="sm:size-[55px] sm:leading-[55px] size-10 leading-10 text-center rounded-lg sm:text-xl text-base inline-block text-white bg-[#01C854]"
                                      href="javascript:void(0)"
                                    >
                                      <i class="fab fa-whatsapp"></i>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Dialog>
                        </TransitionRoot>
                      </div>

                      <div>
                        <a
                          href="javascript:void(0);"
                          class="btn bg-primarylight hover:shadow-btnprimary text-primary mr-1 !px-4"
                          @click="open.dialog2 = true"
                          ><i class="fa fa-camera m-0"></i>
                        </a>
                        <!-- Modal -->
                        <TransitionRoot as="template" :show="open.dialog2">
                          <Dialog
                            class="relative z-10"
                            @close="open.dialog2 = false"
                          >
                            <div
                              class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
                            >
                              <div
                                class="modal-dialog rounded-lg min-h-screen flex items-center justify-center"
                                @click="open.dialog2 = false"
                              >
                                <div
                                  class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg"
                                >
                                  <div
                                    class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border"
                                  >
                                    <h5 class="modal-title">Upload images</h5>
                                    <button
                                      type="button"
                                      class="btn-close p-2 text-xs dark:invert"
                                      @click="open.dialog2 = false"
                                    ></button>
                                  </div>
                                  <div class="relative p-7.5">
                                    <div
                                      class="flex flex-wrap items-stretch relative w-full custom_file_input mb-4"
                                    >
                                      <span
                                        class="flex items-center justify-center py-1.5 px-3 text-center text-sm whitespace-nowrap rounded-s-lg bg-light"
                                        >Upload</span
                                      >
                                      <div
                                        class="form-file border border-border rounded-e-md relative flex-1 w-[1%] ml-[-1px]"
                                      >
                                        <input
                                          type="file"
                                          class="leading-[47px] h-[47px] text-base font-semibold file:!bg-light file:!border-border file:border file:mr-4 w-full"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Dialog>
                        </TransitionRoot>
                      </div>

                      <div>
                        <a
                          href="javascript:void(0);"
                          class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-1 mr-1"
                          @click="open.dialog3 = true"
                          >Post</a
                        >
                        <!-- Modal -->
                        <TransitionRoot as="template" :show="open.dialog3">
                          <Dialog
                            class="relative z-10"
                            @close="open.dialog3 = false"
                          >
                            <div
                              class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
                            >
                              <div
                                class="modal-dialog rounded-lg min-h-screen flex items-center justify-center"
                                @click.away="open.dialog3 = false"
                              >
                                <div
                                  class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg"
                                >
                                  <div
                                    class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border"
                                  >
                                    <h5 class="modal-title">Post</h5>
                                    <button
                                      type="button"
                                      class="btn-close p-2 text-xs dark:invert"
                                      @click="open.dialog3 = false"
                                    ></button>
                                  </div>
                                  <div class="modal-body relative p-7.5 pt-0">
                                    <textarea
                                      name="textarea"
                                      id="textarea2"
                                      cols="30"
                                      rows="5"
                                      class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y my-3.6"
                                      placeholder="Please type what you want...."
                                    ></textarea>
                                    <a
                                      class="save-btn btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-1 mr-1"
                                      href="javascript:void(0)"
                                      @click="open.dialog3 = false"
                                      >Post</a
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Dialog>
                        </TransitionRoot>
                      </div>
                    </div>
                  </div>
                  <div class="profile-uoloaded-post border-bottom-1 pb-12">
                    <img
                      src="assets/images/profile/8.jpg"
                      alt=""
                      class="max-w-full !h-auto w-full mb-5 rounded-lg"
                    />
                    <NuxtLink class="post-title" to="/post-details"
                      ><h3 class="text-secondary mb-2">
                        Collection of textile samples lay spread
                      </h3></NuxtLink
                    >
                    <p class="mb-4">
                      A wonderful serenity has take possession of my entire soul
                      like these sweet morning of spare which enjoy whole
                      heart.A wonderful serenity has take possession of my
                      entire soul like these sweet morning of spare which enjoy
                      whole heart.
                    </p>
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mr-2"
                    >
                      <span class="mr-2"><i class="fa fa-heart"></i></span>Like
                    </button>
                    <button
                      class="btn bg-secondary hover:shadow-btnsecondary text-white mb-1 mr-1"
                      @click="open.dialog3 = true"
                    >
                      <span class="mr-2"><i class="fa fa-reply"></i></span>Reply
                    </button>
                  </div>
                  <div class="profile-uoloaded-post border-bottom-1 pb-12">
                    <img
                      src="assets/images/profile/9.jpg"
                      alt=""
                      class="max-w-full !h-auto w-full mb-5 rounded-lg"
                    />
                    <NuxtLink class="post-title" to="/post-details"
                      ><h3 class="text-secondary mb-2">
                        Collection of textile samples lay spread
                      </h3></NuxtLink
                    >
                    <p class="mb-4">
                      A wonderful serenity has take possession of my entire soul
                      like these sweet morning of spare which enjoy whole
                      heart.A wonderful serenity has take possession of my
                      entire soul like these sweet morning of spare which enjoy
                      whole heart.
                    </p>
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mr-2"
                    >
                      <span class="mr-2"><i class="fa fa-heart"></i></span>Like
                    </button>
                    <button
                      class="btn bg-secondary hover:shadow-btnsecondary text-white"
                      @click="open.dialog3 = true"
                    >
                      <span class="mr-2"><i class="fa fa-reply"></i></span>Reply
                    </button>
                  </div>
                  <div class="profile-uoloaded-post">
                    <img
                      src="assets/images/profile/8.jpg"
                      alt=""
                      class="max-w-full !h-auto w-full mb-5 rounded-lg"
                    />
                    <NuxtLink class="post-title" to="/post-details"
                      ><h3 class="text-secondary mb-2">
                        Collection of textile samples lay spread
                      </h3></NuxtLink
                    >
                    <p class="mb-4">
                      A wonderful serenity has take possession of my entire soul
                      like these sweet morning of spare which enjoy whole
                      heart.A wonderful serenity has take possession of my
                      entire soul like these sweet morning of spare which enjoy
                      whole heart.
                    </p>
                    <button
                      class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mr-2"
                    >
                      <span class="mr-2"><i class="fa fa-heart"></i></span>Like
                    </button>
                    <button
                      class="btn bg-secondary hover:shadow-btnsecondary text-white"
                      @click="open.dialog3 = true"
                    >
                      <span class="mr-2"><i class="fa fa-reply"></i></span>Reply
                    </button>
                  </div>
                  <!-- Modal -->
                  <TransitionRoot as="template" :show="open.dialog4">
                    <Dialog class="relative z-10" @close="open.dialog4 = false">
                      <div
                        class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
                      >
                        <div
                          class="modal-dialog rounded-lg min-h-screen flex items-center justify-center"
                          @click.away="open.dialog4 = false"
                        >
                          <div
                            class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg"
                          >
                            <div
                              class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border"
                            >
                              <h5 class="modal-title">Post Reply</h5>
                              <button
                                type="button"
                                class="btn-close p-2 text-xs dark:invert"
                                @click="open.dialog4 = false"
                              ></button>
                            </div>
                            <div class="relative p-7.5">
                              <form>
                                <textarea
                                  class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                                  rows="4"
                                >
Message</textarea
                                >
                              </form>
                            </div>
                            <div
                              class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border"
                            >
                              <button
                                @click="open.dialog4 = false"
                                type="button"
                                class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
                              >
                                Close
                              </button>
                              <button
                                @click="open.dialog4 = false"
                                type="button"
                                class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover"
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog>
                  </TransitionRoot>
                </div>
              </Transition>

              <div v-if="tab == 'tabtwo'">
                <div class="profile-about-me">
                  <div class="pt-6 border-bottom-1 pb-4">
                    <h4 class="text-primary text-lg mb-2">About Me</h4>
                    <p class="mb-2">
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart. I am alone, and feel the charm of
                      existence was created for the bliss of souls like mine.I
                      am so happy, my dear friend, so absorbed in the exquisite
                      sense of mere tranquil existence, that I neglect my
                      talents.
                    </p>
                    <p class="mb-4">
                      A collection of textile samples lay spread out on the
                      table - Samsa was a travelling salesman - and above it
                      there hung a picture that he had recently cut out of an
                      illustrated magazine and housed in a nice, gilded frame.
                    </p>
                  </div>
                </div>
                <div class="profile-skills mb-12">
                  <h4 class="text-primary mb-2 text-lg">Skills</h4>
                  <a
                    href="javascript:void(0);"
                    class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1"
                    >Admin</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1"
                    >Dashboard</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1"
                    >Photoshop</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1"
                    >Tailwind</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1"
                    >Responsive</a
                  >
                  <a
                    href="javascript:void(0);"
                    class="btn bg-primarylight hover:shadow-btnprimary text-primary mb-1 mr-1"
                    >Crypto</a
                  >
                </div>
                <div class="profile-lang mb-12">
                  <h4 class="text-primary mb-2 text-lg">Language</h4>
                  <a href="javascript:void(0);" class="pr-4"
                    ><i class="flag-icon flag-icon-us"></i> English</a
                  >
                  <a href="javascript:void(0);" class="pr-4"
                    ><i class="flag-icon flag-icon-fr"></i> French</a
                  >
                  <a href="javascript:void(0);" class="pr-4"
                    ><i class="flag-icon flag-icon-bd"></i> Bangla</a
                  >
                </div>
                <div class="profile-personal-info">
                  <h4 class="text-primary text-lg mb-6">
                    Personal Information
                  </h4>
                  <div class="row mb-2">
                    <div class="sm:!w-1/4 !w-5/12">
                      <h5 class="mb-2">Name <span class="pull-end">:</span></h5>
                    </div>
                    <div class="sm:!w-9/12 !w-7/12">
                      <span>Mitchell C.Shay</span>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="sm:!w-1/4 !w-5/12">
                      <h5 class="mb-2">
                        Email <span class="pull-end">:</span>
                      </h5>
                    </div>
                    <div class="sm:!w-9/12 !w-7/12">
                      <span>example@examplel.com</span>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="sm:!w-1/4 !w-5/12">
                      <h5 class="mb-2">
                        Availability <span class="pull-end">:</span>
                      </h5>
                    </div>
                    <div class="sm:!w-9/12 !w-7/12">
                      <span>Full Time (Free Lancer)</span>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="sm:!w-1/4 !w-5/12">
                      <h5 class="mb-2">Age <span class="pull-end">:</span></h5>
                    </div>
                    <div class="sm:!w-9/12 !w-7/12"><span>27</span></div>
                  </div>
                  <div class="row mb-2">
                    <div class="sm:!w-1/4 !w-5/12">
                      <h5 class="mb-2">
                        Location <span class="pull-end">:</span>
                      </h5>
                    </div>
                    <div class="sm:!w-9/12 !w-7/12">
                      <span>Rosemont Avenue Melbourne, Florida</span>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="sm:!w-1/4 !w-5/12">
                      <h5 class="mb-2">
                        Year Experience <span class="pull-end">:</span>
                      </h5>
                    </div>
                    <div class="sm:!w-9/12 !w-7/12">
                      <span>07 Year Experiences</span>
                    </div>
                  </div>
                </div>
              </div>
              <Transition
                v-show="tab == 'tabthree'"
                enter-active-class="transition-all duration-700 easy-in-out"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
              >
                <div class="pt-4">
                  <div class="settings-form">
                    <h4 class="text-primary text-lg mb-2">Account Setting</h4>
                    <form>
                      <div class="row">
                        <div class="mb-4 md:w-1/2 w-full">
                          <label class="text-secondary">Email</label>
                          <input
                            type="email"
                            placeholder="Email"
                            class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                          />
                        </div>
                        <div class="mb-4 md:w-1/2 relative">
                          <label class="text-secondary">Password</label>
                          <input
                            :type="!show ? 'password' : 'text'"
                            class="dz-password py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                            value="123456"
                          />
                          <span
                            class="show-pass eye absolute right-6 bottom-2.5"
                            @click="show = !show"
                          >
                            <i class="fa fa-eye-slash"></i>
                            <i class="fa fa-eye"></i>
                          </span>
                        </div>
                      </div>
                      <div class="mb-4">
                        <label class="text-secondary">Address</label>
                        <input
                          type="text"
                          placeholder="1234 Main St"
                          class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        />
                      </div>
                      <div class="mb-4">
                        <label class="text-secondary">Address 2</label>
                        <input
                          type="text"
                          placeholder="Apartment, studio, or floor"
                          class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        />
                      </div>
                      <div class="row">
                        <div class="mb-4 md:w-1/2 w-full">
                          <label class="text-secondary">City</label>
                          <input
                            type="text"
                            class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                          />
                        </div>
                        <div class="mb-4 md:w-1/3 w-full">
                          <label class="text-secondary">State</label>

                          <OptionSelect
                            class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                            :options="[
                              { lable: 'Choose...' },
                              { lable: 'Option 1' },
                              { lable: 'Option 2' },
                              { lable: 'Option 3' },
                            ]"
                          />
                        </div>
                        <div class="mb-4 md:w-1/6 w-full">
                          <label class="text-secondary">Zip</label>
                          <input
                            type="text"
                            class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                          />
                        </div>
                      </div>
                      <div class="mb-4">
                        <div
                          class="form-check block min-h-[1.3125rem] pl-[1.5em] mb-0.5 custom-checkbox"
                        >
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="gridCheck"
                          />
                          <label
                            class="form-check-label mb-2 mt-[0.1875rem] ml-[0.3125rem]"
                            for="gridCheck"
                          >
                            Check me out</label
                          >
                        </div>
                      </div>
                      <button
                        class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-1"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
