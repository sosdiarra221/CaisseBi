<script lang="ts" setup>
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";
</script>

<template>
  <div class="row">
    <div class="w-full">
      <div class="profile card p-4 pb-0">
        <div class="profile-head">
          <div class="photo-content relative">
            <div class="cover-photo rounded-lg"></div>
          </div>
          <div class="sm:flex block sm:py-3.6 sm:px-5 max-sm:pb-5">
            <div class="profile-photo max-sm:w-20 max-sm:mb-5 relative sm:mr-2.5 max-sm:mx-auto -mt-17 z-1 max-w-25">
              <img src="../../assets/images/profile/profile.png" class="max-w-full !h-auto rounded-full" alt="" />
            </div>
            <div class="sm:flex block w-full items-center max-sm:text-center">
              <div class="profile-name px-4 pt-2">
                <h4 class="text-primary text-lg">Mitchell C. Shay</h4>
                <p class="mb-4">UX / UI Designer</p>
              </div>
              <div class="profile-email px-2 pt-2">
                <h4 class="text-textdark text-lg">info@example.com</h4>
                <p class="mb-4">Email</p>
              </div>
              <CustomeDropDown class="dropdown ml-auto max-sm:absolute max-sm:top-7.5 max-sm:right-7.5">
                <template #trigger>
                  <a href="javascript:void(0);" class="btn bg-primarylight hover:shadow-btnprimary text-primary size-7.5 !leading-[30px] !p-0 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect x="0" y="0" width="24" height="24"></rect>
                        <circle fill="var(--primary)" cx="5" cy="12" r="2"></circle>
                        <circle fill="var(--primary)" cx="12" cy="12" r="2"></circle>
                        <circle fill="var(--primary)" cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  </a>
                </template>
                <template #menu>
                  <ul class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left">
                    <li class="py-2 px-5 block hover:bg-primarylight hover:text-primary"><i class="fa fa-user-circle text-primary me-2"></i> View profile</li>
                    <li class="py-2 px-5 block hover:bg-primarylight hover:text-primary"><i class="fa fa-users text-primary mr-2"></i>Add to close friends</li>
                    <li class="py-2 px-5 block hover:bg-primarylight hover:text-primary"><i class="fa fa-plus text-primary mr-2"></i>Add to group</li>
                    <li class="py-2 px-5 block hover:bg-primarylight hover:text-primary"><i class="fa fa-ban text-primary mr-2"></i> Block</li>
                  </ul>
                </template>
              </CustomeDropDown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
