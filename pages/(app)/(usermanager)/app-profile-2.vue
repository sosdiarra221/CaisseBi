<script lang="ts" setup>
import { Collapse } from "vue-collapsed";
import CommonNav from "~/components/CommonNav.vue";
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";

const open = reactive({ collapse1: true, collapse2: true, collapse3: true, collapse4: true, collapse5: true, collapse6: true });
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Profile Detail" name="Profile Detail" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card card-profile">
            <div class="p-7.5 max-w-[380px] my-auto rounded-md bg-white dark:bg-[#000000e6] text-center">
              <div class="img-wrraper relative mb-2.5">
                <div>
                  <img src="../../../assets/images/user1.jpg" class="inline-block rounded-full size-20 border-[7px] border-[#3e5fce14]" alt="" />
                </div>
                <NuxtLink
                  class="icon-wrapper absolute bottom-0 mx-6 size-7.5 bg-white dark:bg-black dark:shadow-[0_0_6px_3px_rgba(255,255,255,0.1)] dark:text-white text-primary text-center leading-[30px] rounded-full shadow-[0_0_6px_3px_rgba(68,102,242,0.1)]"
                  to="/edit-profile"
                  ><i class="fa-solid fa-pencil"></i
                ></NuxtLink>
              </div>
              <div class="user-details">
                <div class="title">
                  <a target="_blank" href=""> <h4 class="mb-2">Thomas Fleming</h4></a>
                  <h6 class="mb-5">Web Designer</h6>
                </div>
                <ul class="flex items-center justify-center">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="text-center mx-1 text-2sm font-medium rounded-lg text-primary bg-primarylight leading-[30px] size-7.5 block duration-500 hover:bg-primary hover:text-white dark:text-white"
                      ><i class="fa-brands fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="text-center mx-1 text-2sm font-medium rounded-lg text-primary bg-primarylight leading-[30px] size-7.5 block duration-500 hover:bg-primary hover:text-white dark:text-white"
                      ><i class="fa-brands fa-skype"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="text-center mx-1 text-2sm font-medium rounded-lg text-primary bg-primarylight leading-[30px] size-7.5 block duration-500 hover:bg-primary hover:text-white dark:text-white"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="text-center mx-1 text-2sm font-medium rounded-lg text-primary bg-primarylight leading-[30px] size-7.5 block duration-500 hover:bg-primary hover:text-white dark:text-white"
                      ><i class="fa-brands fa-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="text-center mx-1 text-2sm font-medium rounded-lg text-primary bg-primarylight leading-[30px] size-7.5 block duration-500 hover:bg-primary hover:text-white dark:text-white"
                      ><i class="fa fa-rss"></i
                    ></a>
                  </li>
                </ul>
                <ul class="flex justify-center">
                  <li class="sm:py-3.5 py-1.1 sm:px-5 px-2.5 mx-[9px] mt-11 bg-primarylight rounded-md">
                    <div class="sm:text-base font-medium text-secondary">325</div>
                    <span>Follower</span>
                  </li>
                  <li class="sm:py-3.5 py-1.1 sm:px-5 px-2.5 mx-[9px] mt-11 bg-primarylight rounded-md">
                    <div class="sm:text-base font-medium text-secondary">450</div>
                    <span>Following</span>
                  </li>
                  <li class="sm:py-3.5 py-1.1 sm:px-5 px-2.5 mx-[9px] mt-11 bg-primarylight rounded-md">
                    <div class="sm:text-base font-medium text-secondary">500</div>
                    <span>Likes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="xl:w-1/3">
          <div class="row">
            <div class="w-full">
              <div class="card">
                <div class="sm:px-5 sm:pt-5 pb-0 p-4">
                  <div>
                    <div class="mb-5 bg-transparent">
                      <h2 class="card-toggle-btn relative rounded-md duration-500 cursor-pointer">
                        <button class="relative flex items-center justify-between w-full text-base" @click="open.collapse1 = !open.collapse1">
                          About Me
                          <i :class="`ac-icon ${open.collapse1 ? 'ti-minus' : 'ti-plus'}`"></i>
                        </button>
                      </h2>
                      <Collapse :when="open.collapse1">
                        <div class="py-4 content">
                          <div class="about-me">
                            <ul>
                              <li class="flex items-center mb-3.6">
                                <i class="fa-solid fa-briefcase text-center mx-1 text-2sm mr-3.6 rounded-lg text-primary bg-primarylight leading-[35px] size-9 block"></i>
                                <div>
                                  <h6>Software Engineer at W3itexperts</h6>
                                  <span>Oct 2021 - Present</span>
                                </div>
                              </li>
                              <li class="flex items-center mb-3.6">
                                <i class="fa-solid fa-book text-center mx-1 text-2sm mr-3.6 rounded-lg text-primary bg-primarylight leading-[35px] size-9 block"></i>
                                <div>
                                  <h6>Techno India NJR Institute</h6>
                                  <span>Nov-2019 at University Usa</span>
                                </div>
                              </li>
                              <li class="flex items-center mb-3.6">
                                <i class="fa-solid fa-location-dot text-center mx-1 text-2sm mr-3.6 rounded-lg text-primary bg-primarylight leading-[35px] size-9 block"></i>
                                <div>
                                  <h6>Lived In Usa</h6>
                                  <span>Oct 2019 - Present</span>
                                </div>
                              </li>
                              <li class="flex items-center mb-3.6">
                                <i class="fa-solid fa-location-dot text-center mx-1 text-2sm mr-3.6 rounded-lg text-primary bg-primarylight leading-[35px] size-9 block"></i>
                                <div>
                                  <h6>Blood Group</h6>
                                  <span>A+</span>
                                </div>
                              </li>
                              <li class="flex items-center text-secondary mb-3.6 text-base font-medium">Social Networks</li>
                            </ul>
                            <div>
                              <a href="javascript:void(0)" class="btn !block w-full text-white text-center bg-[#1877F2] hover:bg-[#0b5fcc] mb-2"
                                ><i class="fa-brands fa-facebook-f mr-2"></i>Facebook</a
                              >
                              <a href="javascript:void(0)" class="btn !block w-full text-white text-center bg-[#4CAF50] hover:bg-[#3d8b40] mb-2"><i class="fa-brands fa-whatsapp mr-2"></i>WhatsApp</a>
                              <a href="javascript:void(0)" class="btn !block w-full text-white text-center bg-[#03A9F4] hover:bg-[#0286c2] mb-2"><i class="fa-brands fa-skype mr-2"></i>Skype</a>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full">
              <div class="card">
                <div class="sm:px-5 sm:pt-5 pb-0 p-4">
                  <div>
                    <div class="mb-5 bg-transparent">
                      <h2 class="card-toggle-btn relative rounded-md duration-500 cursor-pointer">
                        <button class="relative flex items-center justify-between w-full text-base" @click="open.collapse2 = !open.collapse2">
                          Followers
                          <i :class="`ac-icon ${open.collapse2 ? 'ti-minus' : 'ti-plus'}`"></i>
                        </button>
                      </h2>
                      <Collapse :when="open.collapse2">
                        <div class="py-4 content">
                          <div class="flex items-center mb-4">
                            <img src="../../../assets/images/contacts/pic2.jpg" class="inline-block mr-2.5 size-10 min-w-10 rounded-md relative object-cover avatar-md" alt="" />
                            <div>
                              <h6 class="text-sm whitespace-nowrap"><a href="javascript:void(0)">Liam Antony</a></h6>
                              <span>Web Doveloper</span>
                            </div>
                          </div>
                          <div class="flex items-center mb-4">
                            <img src="../../../assets/images/contacts/pic3.jpg" class="inline-block mr-2.5 size-10 min-w-10 rounded-md relative object-cover avatar-md" alt="" />
                            <div>
                              <h6 class="text-sm whitespace-nowrap"><a href="javascript:void(0)">Ricky Noah</a></h6>
                              <span>Php Doveloper</span>
                            </div>
                          </div>
                          <div class="flex items-center mb-4">
                            <img src="../../../assets/images/contacts/pic3.jpg" class="inline-block mr-2.5 size-10 min-w-10 rounded-md relative object-cover avatar-md" alt="" />
                            <div>
                              <h6 class="text-sm whitespace-nowrap"><a href="javascript:void(0)">Oliver Elijah</a></h6>
                              <span>Ux Designer</span>
                            </div>
                          </div>
                          <div class="flex items-center mb-4">
                            <img src="../../../assets/images/contacts/pic1.jpg" class="inline-block mr-2.5 size-10 min-w-10 rounded-md relative object-cover avatar-md" alt="" />
                            <div>
                              <h6 class="text-sm whitespace-nowrap"><a href="javascript:void(0)">James William</a></h6>
                              <span class="dark:text-white text-xs">Web Designer</span>
                            </div>
                          </div>
                          <div class="flex items-center">
                            <img src="../../../assets/images/contacts/d4.jpg" class="inline-block mr-2.5 size-10 min-w-10 rounded-md relative object-cover avatar-md" alt="" />
                            <div>
                              <h6 class="text-sm whitespace-nowrap"><a href="javascript:void(0)">Benjamin Lucas</a></h6>
                              <span>Asp Doveloper</span>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="card">
                <div class="sm:px-5 sm:pt-5 pb-0 p-4">
                  <div>
                    <div class="mb-5 bg-transparent">
                      <h2 class="card-toggle-btn relative rounded-md duration-500 cursor-pointer">
                        <button class="relative flex items-center justify-between w-full text-base" @click="open.collapse3 = !open.collapse3">
                          Following
                          <i :class="`ac-icon ${open.collapse3 ? 'ti-minus' : 'ti-plus'}`"></i>
                        </button>
                      </h2>
                      <Collapse :when="open.collapse3">
                        <div class="py-4 content">
                          <div class="flex items-center mb-4">
                            <img src="../../../assets/images/contacts/pic2.jpg" class="inline-block mr-2.5 size-10 min-w-10 rounded-md relative object-cover avatar-md" alt="" />
                            <div>
                              <h6 class="text-sm whitespace-nowrap"><a href="javascript:void(0)">Liam Antony</a></h6>
                              <span>Web Doveloper</span>
                            </div>
                          </div>
                          <div class="flex items-center mb-4">
                            <img src="../../../assets/images/contacts/pic3.jpg" class="inline-block mr-2.5 size-10 min-w-10 rounded-md relative object-cover avatar-md" alt="" />
                            <div>
                              <h6 class="text-sm whitespace-nowrap"><a href="javascript:void(0)">Ricky Noah</a></h6>
                              <span>Php Doveloper</span>
                            </div>
                          </div>
                          <div class="flex items-center mb-4">
                            <img src="../../../assets/images/contacts/pic3.jpg" class="inline-block mr-2.5 size-10 min-w-10 rounded-md relative object-cover avatar-md" alt="" />
                            <div>
                              <h6 class="text-sm whitespace-nowrap"><a href="javascript:void(0)">Oliver Elijah</a></h6>
                              <span>Ux Designer</span>
                            </div>
                          </div>
                          <div class="flex items-center mb-4">
                            <img src="../../../assets/images/contacts/pic1.jpg" class="inline-block mr-2.5 size-10 min-w-10 rounded-md relative object-cover avatar-md" alt="" />
                            <div>
                              <h6 class="text-sm whitespace-nowrap"><a href="javascript:void(0)">James William</a></h6>
                              <span class="dark:text-white text-xs">Web Designer</span>
                            </div>
                          </div>
                          <div class="flex items-center">
                            <img src="../../../assets/images/contacts/d4.jpg" class="inline-block mr-2.5 size-10 min-w-10 rounded-md relative object-cover avatar-md" alt="" />
                            <div>
                              <h6 class="text-sm whitespace-nowrap"><a href="javascript:void(0)">Benjamin Lucas</a></h6>
                              <span>Asp Doveloper</span>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="card">
                <div class="sm:px-5 sm:pt-5 pb-0 p-4">
                  <div>
                    <div class="mb-5 bg-transparent">
                      <h2 class="card-toggle-btn relative rounded-md duration-500 cursor-pointer" id="headingOne4">
                        <button class="relative flex items-center justify-between w-full text-base" @click="open.collapse4 = !open.collapse4">
                          Interest
                          <i :class="`ac-icon ${open.collapse4 ? 'ti-minus' : 'ti-plus'}`"></i>
                        </button>
                      </h2>
                      <Collapse :when="open.collapse4">
                        <div class="py-4 content">
                          <div class="profile-interest">
                            <div class="row !mx-[-0.0437rem] !mt-6" id="lightgallery">
                              <a
                                href="assets/images/profile/2.jpg"
                                data-exthumbimage="assets/images/profile/2.jpg"
                                data-src="../../../assets/images/profile/2.jpg"
                                class="mb-1 sm:!w-1/3 !w-1/2 !px-0.5"
                              >
                                <img src="../../../assets/images/profile/2.jpg" alt="" class="px-1 py-1 max-w-full h-auto rounded-lg" />
                              </a>
                              <a
                                href="assets/images/profile/3.jpg"
                                data-exthumbimage="assets/images/profile/3.jpg"
                                data-src="../../../assets/images/profile/3.jpg"
                                class="mb-1 sm:!w-1/3 !w-1/2 !px-0.5"
                              >
                                <img src="../../../assets/images/profile/3.jpg" alt="" class="px-1 py-1 max-w-full h-auto rounded-lg" />
                              </a>
                              <a
                                href="assets/images/profile/4.jpg"
                                data-exthumbimage="assets/images/profile/4.jpg"
                                data-src="../../../assets/images/profile/4.jpg"
                                class="mb-1 sm:!w-1/3 !w-1/2 !px-0.5"
                              >
                                <img src="../../../assets/images/profile/4.jpg" alt="" class="px-1 py-1 max-w-full h-auto rounded-lg" />
                              </a>
                              <a
                                href="assets/images/profile/3.jpg"
                                data-exthumbimage="assets/images/profile/3.jpg"
                                data-src="../../../assets/images/profile/3.jpg"
                                class="mb-1 sm:!w-1/3 !w-1/2 !px-0.5"
                              >
                                <img src="../../../assets/images/profile/3.jpg" alt="" class="px-1 py-1 max-w-full h-auto rounded-lg" />
                              </a>
                              <a
                                href="assets/images/profile/4.jpg"
                                data-exthumbimage="assets/images/profile/4.jpg"
                                data-src="../../../assets/images/profile/4.jpg"
                                class="mb-1 sm:!w-1/3 !w-1/2 !px-0.5"
                              >
                                <img src="../../../assets/images/profile/4.jpg" alt="" class="px-1 py-1 max-w-full h-auto rounded-lg" />
                              </a>
                              <a
                                href="assets/images/profile/2.jpg"
                                data-exthumbimage="assets/images/profile/2.jpg"
                                data-src="../../../assets/images/profile/2.jpg"
                                class="mb-1 sm:!w-1/3 !w-1/2 !px-0.5"
                              >
                                <img src="../../../assets/images/profile/2.jpg" alt="" class="px-1 py-1 max-w-full h-auto rounded-lg" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="card">
                <div class="sm:px-5 sm:pt-5 pb-0 p-4">
                  <div>
                    <div class="mb-5 bg-transparent">
                      <h2 class="card-toggle-btn relative rounded-md duration-500 cursor-pointer">
                        <button class="relative flex items-center justify-between w-full text-base" @click="open.collapse5 = !open.collapse5">
                          Our Latest News
                          <i :class="`ac-icon ${open.collapse5 ? 'ti-minus' : 'ti-plus'}`"></i>
                        </button>
                      </h2>
                      <Collapse :when="open.collapse5">
                        <div class="py-4 content">
                          <div class="profile-news">
                            <div class="flex items-start py-4">
                              <img src="../../../assets/images/profile/5.jpg" alt="image" class="mr-4 rounded-lg" width="75" />
                              <div class="media-body">
                                <h6 class="mb-2"><NuxtLink to="/post-details" class="text-secondary">Collection of textile samples</NuxtLink ></h6>
                                <p class="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
                              </div>
                            </div>
                            <div class="flex items-start py-4">
                              <img src="../../../assets/images/profile/6.jpg" alt="image" class="mr-4 rounded-lg" width="75" />
                              <div class="media-body">
                                <h6 class="mb-2"><NuxtLink to="/post-details" class="text-secondary">Collection of textile samples</NuxtLink ></h6>
                                <p class="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
                              </div>
                            </div>
                            <div class="flex items-start py-4">
                              <img src="../../../assets/images/profile/7.jpg" alt="image" class="mr-4 rounded-lg" width="75" />
                              <div class="media-body">
                                <h6 class="mb-2"><NuxtLink to="/post-details" class="text-secondary">Collection of textile samples</NuxtLink></h6>
                                <p class="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="card">
                <div class="sm:px-5 sm:pt-5 pb-0 p-4">
                  <div>
                    <div class="mb-5 bg-transparent">
                      <h2 class="card-toggle-btn relative rounded-md duration-500 cursor-pointer" id="headingOne5">
                        <button class="relative flex items-center justify-between w-full text-base" @click="open.collapse6 = !open.collapse6">
                          Friends
                          <i :class="`ac-icon ${open.collapse6 ? 'ti-minus' : 'ti-plus'}`"></i>
                        </button>
                      </h2>
                      <Collapse :when="open.collapse6">
                        <div class="py-4 content">
                          <div class="friend-list">
                            <img src="../../../assets/images/profile/friends/f3.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/contacts/pic2.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/contacts/pic3.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/profile/friends/f2.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/contacts/pic1.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/contacts/d4.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/profile/friends/f4.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/profile/friends/f1.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/profile/friends/f3.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/contacts/pic2.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/contacts/pic3.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                            <img src="../../../assets/images/profile/friends/f2.jpg" class="inline-block ml-2 mb-4 size-[45px] rounded-md relative object-cover avatar-md" alt="" />
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-2/3">
          <div class="row">
            <div class="w-full">
              <div class="card">
                <div class="relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                  <div class="flex items-center">
                    <img src="../../../assets/images/user1.jpg" class="inline-block mr-2.5 size-10 rounded-full relative object-cover" alt="" />
                    <div>
                      <h5 class="mb-0"><a href="javascript:void(0)" class="text-secondary">Thomas Fleming</a></h5>
                      <span>8 Hours ago</span>
                    </div>
                  </div>
                  <CustomeDropDown class="mb-4 inline-block relative">
                    <template #trigger>
                      <div class="btn bg-light text-textdark size-9 !leading-9 !p-0 text-center">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.5202 17.4167C13.5202 18.81 12.3927 19.9375 10.9994 19.9375C9.60601 19.9375 8.47852 18.81 8.47852 17.4167C8.47852 16.0233 9.60601 14.8958 10.9994 14.8958C12.3927 14.8958 13.5202 16.0233 13.5202 17.4167ZM9.85352 17.4167C9.85352 18.0492 10.3669 18.5625 10.9994 18.5625C11.6319 18.5625 12.1452 18.0492 12.1452 17.4167C12.1452 16.7842 11.6319 16.2708 10.9994 16.2708C10.3669 16.2708 9.85352 16.7842 9.85352 17.4167Z"
                            fill="var(--secondary)"
                          />
                          <path
                            d="M13.5202 4.58369C13.5202 5.97699 12.3927 7.10449 10.9994 7.10449C9.60601 7.10449 8.47852 5.97699 8.47852 4.58369C8.47852 3.19029 9.60601 2.06279 10.9994 2.06279C12.3927 2.06279 13.5202 3.19029 13.5202 4.58369ZM9.85352 4.58369C9.85352 5.21619 10.3669 5.72949 10.9994 5.72949C11.6319 5.72949 12.1452 5.21619 12.1452 4.58369C12.1452 3.95119 11.6319 3.43779 10.9994 3.43779C10.3669 3.43779 9.85352 3.95119 9.85352 4.58369Z"
                            fill="var(--secondary)"
                          />
                          <path
                            d="M13.5202 10.9997C13.5202 12.393 12.3927 13.5205 10.9994 13.5205C9.60601 13.5205 8.47852 12.393 8.47852 10.9997C8.47852 9.6063 9.60601 8.4788 10.9994 8.4788C12.3927 8.4788 13.5202 9.6063 13.5202 10.9997ZM9.85352 10.9997C9.85352 11.6322 10.3669 12.1455 10.9994 12.1455C11.6319 12.1455 12.1452 11.6322 12.1452 10.9997C12.1452 10.3672 11.6319 9.8538 10.9994 9.8538C10.3669 9.8538 9.85352 10.3672 9.85352 10.9997Z"
                            fill="var(--secondary)"
                          />
                        </svg>
                      </div>
                    </template>
                    <template #menu>
                      <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1">
                        <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                        <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                      </div>
                    </template>
                  </CustomeDropDown>
                </div>
                <div class="sm:px-5 sm:pb-5 p-4 pt-0">
                  <div class="post-img">
                    <img src="../../../assets/images/post/post1.jpg" alt="" class="rounded-md w-full" />
                  </div>
                  <div class="post-see flex items-center mt-4">
                    <ul>
                      <li class="avatar-list avatar-list-stacked">
                        <img
                          src="../../../assets/images/contacts/pic1.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                        <img
                          src="../../../assets/images/contacts/pic777.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                        <img
                          src="../../../assets/images/contacts/pic666.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                      </li>
                    </ul>
                    <h6 class="mb-0 ml-4">+3 people see this post</h6>
                  </div>
                  <div class="mt-4">
                    <span
                      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type specimen book.</span
                    >
                  </div>
                  <ul class="post-comment flex mt-4">
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-regular fa-heart mr-2"></i>Like</a></label
                      >
                    </li>
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-regular fa-message mr-2"></i>Comment</a></label
                      >
                    </li>
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-solid fa-share mr-2"></i>Share</a></label
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="card">
                <div class="relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                  <div class="flex items-center">
                    <img src="../../../assets/images/profile/friends/f2.jpg" class="inline-block mr-2.5 size-10 rounded-full relative object-cover" alt="" />
                    <div>
                      <h5 class="mb-0"><a href="javascript:void(0)" class="text-secondary">Thomas Fleming</a></h5>
                      <span>8 Hours ago</span>
                    </div>
                  </div>
                  <CustomeDropDown class="mb-4 inline-block relative">
                    <template #trigger>
                      <div class="btn bg-light text-textdark size-9 !leading-9 !p-0 text-center">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.5202 17.4167C13.5202 18.81 12.3927 19.9375 10.9994 19.9375C9.60601 19.9375 8.47852 18.81 8.47852 17.4167C8.47852 16.0233 9.60601 14.8958 10.9994 14.8958C12.3927 14.8958 13.5202 16.0233 13.5202 17.4167ZM9.85352 17.4167C9.85352 18.0492 10.3669 18.5625 10.9994 18.5625C11.6319 18.5625 12.1452 18.0492 12.1452 17.4167C12.1452 16.7842 11.6319 16.2708 10.9994 16.2708C10.3669 16.2708 9.85352 16.7842 9.85352 17.4167Z"
                            fill="var(--secondary)"
                          />
                          <path
                            d="M13.5202 4.58369C13.5202 5.97699 12.3927 7.10449 10.9994 7.10449C9.60601 7.10449 8.47852 5.97699 8.47852 4.58369C8.47852 3.19029 9.60601 2.06279 10.9994 2.06279C12.3927 2.06279 13.5202 3.19029 13.5202 4.58369ZM9.85352 4.58369C9.85352 5.21619 10.3669 5.72949 10.9994 5.72949C11.6319 5.72949 12.1452 5.21619 12.1452 4.58369C12.1452 3.95119 11.6319 3.43779 10.9994 3.43779C10.3669 3.43779 9.85352 3.95119 9.85352 4.58369Z"
                            fill="var(--secondary)"
                          />
                          <path
                            d="M13.5202 10.9997C13.5202 12.393 12.3927 13.5205 10.9994 13.5205C9.60601 13.5205 8.47852 12.393 8.47852 10.9997C8.47852 9.6063 9.60601 8.4788 10.9994 8.4788C12.3927 8.4788 13.5202 9.6063 13.5202 10.9997ZM9.85352 10.9997C9.85352 11.6322 10.3669 12.1455 10.9994 12.1455C11.6319 12.1455 12.1452 11.6322 12.1452 10.9997C12.1452 10.3672 11.6319 9.8538 10.9994 9.8538C10.3669 9.8538 9.85352 10.3672 9.85352 10.9997Z"
                            fill="var(--secondary)"
                          />
                        </svg>
                      </div>
                    </template>
                    <template #menu>
                      <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1">
                        <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                        <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                      </div>
                    </template>
                  </CustomeDropDown>
                </div>
                <div class="sm:px-5 sm:pb-5 p-4 pt-0">
                  <div class="row">
                    <div class="xl:w-1/2 w-full">
                      <div class="post-img">
                        <img src="../../../assets/images/post/post11.jpg" class="mr-4 rounded-md w-full max-xl:mb-[10px]" alt="" />
                      </div>
                    </div>
                    <div class="xl:w-1/2 w-full">
                      <div class="post-img">
                        <img src="../../../assets/images/post/post12.jpg" alt="" class="rounded-md w-full" />
                      </div>
                    </div>
                  </div>
                  <div class="post-see flex items-center mt-4">
                    <ul>
                      <li class="avatar-list avatar-list-stacked">
                        <img
                          src="../../../assets/images/contacts/pic1.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                        <img
                          src="../../../assets/images/contacts/pic777.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                        <img
                          src="../../../assets/images/contacts/pic666.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                      </li>
                    </ul>
                    <h6 class="mb-0 ml-4">+3 people see this post</h6>
                  </div>
                  <div class="mt-4">
                    <span
                      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type specimen book.</span
                    >
                  </div>
                  <ul class="post-comment flex mt-4">
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-regular fa-heart mr-2"></i>Like</a></label
                      >
                    </li>
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-regular fa-message mr-2"></i>Comment</a></label
                      >
                    </li>
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-solid fa-share mr-2"></i>Share</a></label
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="card">
                <div class="relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                  <div class="flex items-center">
                    <img src="../../../assets/images/user1.jpg" class="inline-block mr-2.5 size-10 rounded-full relative object-cover" alt="" />
                    <div>
                      <h5 class="mb-0"><a href="javascript:void(0)" class="text-secondary">Thomas Fleming</a></h5>
                      <span>8 Hours ago</span>
                    </div>
                  </div>
                  <CustomeDropDown class="mb-4 inline-block relative">
                    <template #trigger>
                      <div class="btn bg-light text-textdark size-9 !leading-9 !p-0 text-center">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.5202 17.4167C13.5202 18.81 12.3927 19.9375 10.9994 19.9375C9.60601 19.9375 8.47852 18.81 8.47852 17.4167C8.47852 16.0233 9.60601 14.8958 10.9994 14.8958C12.3927 14.8958 13.5202 16.0233 13.5202 17.4167ZM9.85352 17.4167C9.85352 18.0492 10.3669 18.5625 10.9994 18.5625C11.6319 18.5625 12.1452 18.0492 12.1452 17.4167C12.1452 16.7842 11.6319 16.2708 10.9994 16.2708C10.3669 16.2708 9.85352 16.7842 9.85352 17.4167Z"
                            fill="var(--secondary)"
                          />
                          <path
                            d="M13.5202 4.58369C13.5202 5.97699 12.3927 7.10449 10.9994 7.10449C9.60601 7.10449 8.47852 5.97699 8.47852 4.58369C8.47852 3.19029 9.60601 2.06279 10.9994 2.06279C12.3927 2.06279 13.5202 3.19029 13.5202 4.58369ZM9.85352 4.58369C9.85352 5.21619 10.3669 5.72949 10.9994 5.72949C11.6319 5.72949 12.1452 5.21619 12.1452 4.58369C12.1452 3.95119 11.6319 3.43779 10.9994 3.43779C10.3669 3.43779 9.85352 3.95119 9.85352 4.58369Z"
                            fill="var(--secondary)"
                          />
                          <path
                            d="M13.5202 10.9997C13.5202 12.393 12.3927 13.5205 10.9994 13.5205C9.60601 13.5205 8.47852 12.393 8.47852 10.9997C8.47852 9.6063 9.60601 8.4788 10.9994 8.4788C12.3927 8.4788 13.5202 9.6063 13.5202 10.9997ZM9.85352 10.9997C9.85352 11.6322 10.3669 12.1455 10.9994 12.1455C11.6319 12.1455 12.1452 11.6322 12.1452 10.9997C12.1452 10.3672 11.6319 9.8538 10.9994 9.8538C10.3669 9.8538 9.85352 10.3672 9.85352 10.9997Z"
                            fill="var(--secondary)"
                          />
                        </svg>
                      </div>
                    </template>
                    <template #menu>
                      <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1">
                        <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                        <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                      </div>
                    </template>
                  </CustomeDropDown>
                </div>
                <div class="sm:px-5 sm:pb-5 p-4 pt-0">
                  <div class="post-img">
                    <img src="../../../assets/images/post/post2.jpg" alt="" class="rounded-md w-full" />
                  </div>
                  <div class="post-see flex items-center mt-4">
                    <ul>
                      <li class="avatar-list avatar-list-stacked">
                        <img
                          src="../../../assets/images/contacts/pic1.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                        <img
                          src="../../../assets/images/contacts/pic777.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                        <img
                          src="../../../assets/images/contacts/pic666.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                        <img
                          src="../../../assets/images/contacts/pic777.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                      </li>
                    </ul>
                    <h6 class="mb-0 ml-4">+35 people see this post</h6>
                  </div>
                  <div class="mt-4">
                    <span
                      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type specimen book.</span
                    >
                  </div>
                  <ul class="post-comment flex mt-4">
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-regular fa-heart mr-2"></i>Like</a></label
                      >
                    </li>
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-regular fa-message mr-2"></i>Comment</a></label
                      >
                    </li>
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-solid fa-share mr-2"></i>Share</a></label
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="card">
                <div class="relative py-4.5 px-5 flex justify-between items-center flex-wrap">
                  <div class="flex items-center">
                    <img src="../../../assets/images/user1.jpg" class="inline-block mr-2.5 size-10 rounded-full relative object-cover" alt="" />
                    <div>
                      <h5 class="mb-0"><a href="javascript:void(0)" class="text-secondary">Thomas Fleming</a></h5>
                      <span>8 Hours ago</span>
                    </div>
                  </div>
                  <CustomeDropDown class="mb-4 inline-block relative">
                    <template #trigger>
                      <div class="btn bg-light text-textdark size-9 !leading-9 !p-0 text-center">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.5202 17.4167C13.5202 18.81 12.3927 19.9375 10.9994 19.9375C9.60601 19.9375 8.47852 18.81 8.47852 17.4167C8.47852 16.0233 9.60601 14.8958 10.9994 14.8958C12.3927 14.8958 13.5202 16.0233 13.5202 17.4167ZM9.85352 17.4167C9.85352 18.0492 10.3669 18.5625 10.9994 18.5625C11.6319 18.5625 12.1452 18.0492 12.1452 17.4167C12.1452 16.7842 11.6319 16.2708 10.9994 16.2708C10.3669 16.2708 9.85352 16.7842 9.85352 17.4167Z"
                            fill="var(--secondary)"
                          />
                          <path
                            d="M13.5202 4.58369C13.5202 5.97699 12.3927 7.10449 10.9994 7.10449C9.60601 7.10449 8.47852 5.97699 8.47852 4.58369C8.47852 3.19029 9.60601 2.06279 10.9994 2.06279C12.3927 2.06279 13.5202 3.19029 13.5202 4.58369ZM9.85352 4.58369C9.85352 5.21619 10.3669 5.72949 10.9994 5.72949C11.6319 5.72949 12.1452 5.21619 12.1452 4.58369C12.1452 3.95119 11.6319 3.43779 10.9994 3.43779C10.3669 3.43779 9.85352 3.95119 9.85352 4.58369Z"
                            fill="var(--secondary)"
                          />
                          <path
                            d="M13.5202 10.9997C13.5202 12.393 12.3927 13.5205 10.9994 13.5205C9.60601 13.5205 8.47852 12.393 8.47852 10.9997C8.47852 9.6063 9.60601 8.4788 10.9994 8.4788C12.3927 8.4788 13.5202 9.6063 13.5202 10.9997ZM9.85352 10.9997C9.85352 11.6322 10.3669 12.1455 10.9994 12.1455C11.6319 12.1455 12.1452 11.6322 12.1452 10.9997C12.1452 10.3672 11.6319 9.8538 10.9994 9.8538C10.3669 9.8538 9.85352 10.3672 9.85352 10.9997Z"
                            fill="var(--secondary)"
                          />
                        </svg>
                      </div>
                    </template>
                    <template #menu>
                      <div class="bg-bodybg border border-black/15 rounded-xl py-2 absolute top-full right-0 min-w-40 mt-1 z-1">
                        <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Delete</a>
                        <a class="py-2 px-5 block hover:bg-primarylight hover:text-primary" href="javascript:void(0)">Edit</a>
                      </div>
                    </template>
                  </CustomeDropDown>
                </div>
                <div class="sm:px-5 sm:pb-5 p-4 pt-0">
                  <div class="row">
                    <div class="xl:w-1/2 w-full">
                      <div class="post-img">
                        <img src="../../../assets/images/post/post12.jpg" class="mr-4 rounded-md w-full max-xl:mb-[10px]" alt="" />
                      </div>
                    </div>
                    <div class="xl:w-1/2 w-full">
                      <div class="post-img">
                        <img src="../../../assets/images/post/post13.jpg" alt="" class="rounded-md w-full" />
                      </div>
                    </div>
                  </div>
                  <div class="post-see flex items-center mt-4">
                    <ul>
                      <li class="avatar-list avatar-list-stacked">
                        <img
                          src="../../../assets/images/contacts/pic1.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                        <img
                          src="../../../assets/images/contacts/pic777.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                        <img
                          src="../../../assets/images/contacts/pic666.jpg"
                          class="inline-block size-7.5 me-[-13px] rounded-full border-2 border-white dark:border-white/20 relative object-cover duration-300 hover:z-1"
                          alt=""
                        />
                      </li>
                    </ul>
                    <h6 class="mb-0 ml-4">+3 people see this post</h6>
                  </div>
                  <div class="mt-4">
                    <span
                      >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type specimen book.</span
                    >
                  </div>
                  <ul class="post-comment flex mt-4">
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-regular fa-heart mr-2"></i>Like</a></label
                      >
                    </li>
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-regular fa-message mr-2"></i>Comment</a></label
                      >
                    </li>
                    <li>
                      <label class="mr-4"
                        ><a href="javascript:void(0)"><i class="fa-solid fa-share mr-2"></i>Share</a></label
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
</template>
