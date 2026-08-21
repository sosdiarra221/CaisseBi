<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";
import OptionSelect from "~/components/OptionSelect.vue";
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Edit Profile" name="Edit Profile" />
    <div class="container">
      <div class="row">
        <div class="xl:w-1/4 lg:w-1/3 w-full">
          <div class="clearfix">
            <div class="card text-center flex flex-col max-sm:mb-7.5">
              <div class="p-0">
                <div class="pt-6 p-12">
                  <div class="author-profile text-center">
                    <div class="relative mx-auto mb-[13px] inline-block">
                      <img src="../../../assets/images/user1.jpg" alt="" class="w-[130px] rounded-full" />
                      <div class="upload-link" title="" data-toggle="tooltip" data-placement="right" data-original-title="update">
                        <input type="file" class="update-flie" />
                        <i class="fa fa-camera"></i>
                      </div>
                    </div>
                    <div class="author-info">
                      <h6 class="text-2sm font-medium">Nella Vita</h6>
                      <span class="block">Developer</span>
                    </div>
                  </div>
                </div>
                <div class="info-list">
                  <ul>
                    <li class="flex items-center justify-between border-t border-border text-2sm py-4.5 px-7.5"><NuxtLink to="/app-profile">Models</NuxtLink><span class="font-medium">36</span></li>
                    <li class="flex items-center justify-between border-t border-border text-2sm py-4.5 px-7.5">
                      <NuxtLink to="/uc-lightgallery">Gallery</NuxtLink><span class="font-medium">3</span>
                    </li>
                    <li class="flex items-center justify-between border-t border-border text-2sm py-4.5 px-7.5"><NuxtLink to="/app-profile">Lessons</NuxtLink><span class="font-medium">1</span></li>
                  </ul>
                </div>
              </div>
              <div class="p-7.5 block border-t border-border">
                <div class="relative flex flex-wrap items-stretch w-full mb-4">
                  <div class="h-[45px] border border-border overflow-hidden leading-[34px] relative w-full block py-1.5 px-3 rounded-lg text-center text-2xs bg-d-bg dark:text-white">Portfolio</div>
                </div>
                <div class="relative flex flex-wrap items-stretch w-full">
                  <a
                    href="https://www.dexignzone.com/"
                    target="_blank"
                    class="h-[45px] border border-border overflow-hidden leading-[34px] relative w-full block py-1.5 px-3 text-primary rounded-lg text-center text-2xs bg-d-bg dark:text-white"
                    >https://www.dexignzone.com/</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-3/4 lg:w-2/3">
          <div class="card max-sm:mb-7.5 profile-card">
            <div class="border-b border-border relative sm:p-7.5 p-6 justify-between items-center flex-wrap flex">
              <h6 class="relative after:content-[''] after:h-[3px] after:w-full after:bg-primary after:absolute after:-bottom-7.5 after:left-0 max-sm:after:bottom-[-22px]">Account setup</h6>
            </div>
            <form class="profile-form">
              <div class="sm:p-10 p-6 !pb-0">
                <div class="row">
                  <div class="sm:w-1/2 w-full !mb-7.5">
                    <label class="sm:text-2sm text-dark dark:text-white mb-4">First Name</label>
                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" value="John" />
                  </div>
                  <div class="sm:w-1/2 w-full !mb-7.5">
                    <label class="sm:text-2sm text-dark dark:text-white mb-4">Last Name</label>
                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" value="Smith" />
                  </div>
                  <div class="sm:w-1/2 w-full !mb-7.5">
                    <label class="sm:text-2sm text-dark dark:text-white mb-4">Specialty</label>
                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" value="Developer" />
                  </div>
                  <div class="sm:w-1/2 w-full !mb-7.5">
                    <label class="sm:text-2sm text-dark dark:text-white mb-4">Skills</label>
                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" value="HTML,  JavaScript,  PHP" />
                  </div>
                  <div class="sm:w-1/2 w-full !mb-7.5">
                    <label class="sm:text-2sm text-dark dark:text-white mb-4">Gender</label>
                    <OptionSelect
                      class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                      :options="[{ lable: 'Please select' }, { lable: 'Male' }, { lable: 'Female' }, { lable: 'Other' }]"
                    />
                  </div>
                  <div class="sm:w-1/2 w-full !mb-7.5">
                    <label class="sm:text-2sm text-dark dark:text-white mb-4">DOB</label>
                    <div class="relative">
                      <input
                        name="flatpickr"
                        class="flatpickr relative bg-transparent h-11 border border-border block rounded-md py-1.5 px-3 duration-500 focus:border-primary w-full sm:mb-0 mb-4"
                        placeholder="02/08/2024"
                      />
                      <i class="fa-regular fa-calendar absolute right-3.6 bottom-3.6"></i>
                    </div>
                  </div>
                  <div class="sm:w-1/2 w-full !mb-7.5">
                    <label class="sm:text-2sm text-dark dark:text-white mb-4">Phone</label>
                    <input type="number" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" value="12345" />
                  </div>
                  <div class="sm:w-1/2 w-full !mb-7.5">
                    <label class="sm:text-2sm text-dark dark:text-white mb-4">Email address</label>
                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" value="demo@gmail.com" />
                  </div>
                  <div class="sm:w-1/2 w-full !mb-7.5">
                    <label class="sm:text-2sm text-dark dark:text-white mb-4">Country</label>
                    <OptionSelect
                      class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                      :options="[{ lable: 'Please select' }, { lable: 'Russia' }, { lable: 'Canada' }, { lable: 'China' }, { lable: 'India' }]"
                    />
                  </div>
                  <div class="sm:w-1/2 w-full !mb-7.5">
                    <label class="sm:text-2sm text-dark dark:text-white mb-4">City</label>
                    <OptionSelect
                      class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                      :options="[{ lable: 'Please select' }, { lable: 'Krasnodar' }, { lable: 'Tyumen' }, { lable: 'Chelyabinsk' }, { lable: 'Moscow' }]"
                    />
                  </div>
                </div>
              </div>
              <div class="py-5 px-10 max-sm:p-6 flex items-center justify-between border-t border-border">
                <button class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">UPDATE</button>
                <NuxtLink to="/page-register" class="text-2sm text-primary dark:text-white">Forgot your password?</NuxtLink >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
