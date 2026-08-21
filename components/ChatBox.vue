<script lang="ts" setup>
import CustomeDropDown from "~/hooks/CustomeDropDown.vue";
import { Store } from "~/store/Store";

const { chatbox } = Store;
const tab = ref("notes-tab");
const open = ref(false);
const chat = ref<boolean>(false);
const tabs = [
  { name: "notes-tab", lable: "Notes" },
  { name: "alerts-tab", lable: "Alerts" },
  { name: "chat-tab", lable: "Chat" },
];
</script>

<template>
  <div :class="`chatbox max-sm:w-[17.5rem] w-[340px] h-screen bg-card z-999 duration-500 fixed top-0 right-[-500px] ${chatbox ? 'active' : ''}`">
    <div class="chatbox-close" @click="chatbox = false"></div>
    <div class="dz-tab-area" x-data="{ tab: 'chat-tab' }">
      <ul class="nav nav-tabs flex justify-between flex-wrap bg-primarylight p-4 pb-0">
        <li class="nav-item" v-for="({ name, lable }, ind) in tabs" :key="ind">
          <a
            class="nav-link px-4 py-2 text-primary uppercase opacity-70 border-b-[3px] border-transparent block duration-500 font-semibold hover:opacity-100"
            href="javascript:void(0);"
            @click="tab = name"
            :class="{ ' !opacity-100 !border-primary': tab == name }"
            >{{ lable }}</a
          >
        </li>
      </ul>
      <div class="tab-content-area transition">
        <Transition v-show="tab == 'chat-tab'" enter-active-class="transition-all" enter-from-class="opacity-0" enter-to-class="opacity-100">
          <div class="tab-content">
            <div :class="`card sm:mb-4 mb-0 contacts_card dz-chat-user-box ${chat ? '!hidden' : ''}`">
              <div class="chat-list-header text-center flex justify-between py-3.6 px-5 items-center border-b border-border relative">
                <a href="javascript:void(0);" class="size-7.5 bg-primarylight rounded-md flex justify-center items-center"
                  ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <rect fill="var(--text-dark)" x="4" y="11" width="16" height="2" rx="1" />
                      <rect
                        fill="var(--text-dark)"
                        opacity="1.0"
                        transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                        x="4"
                        y="11"
                        width="16"
                        height="2"
                        rx="1"
                      />
                    </g></svg
                ></a>
                <div>
                  <h6 class="mb-1 text-2sm">Chat List</h6>
                  <p class="mb-0 text-xs text-muted leading-[1.2]">Show All</p>
                </div>
                <a href="javascript:void(0);" class="size-7.5 bg-primarylight rounded-md flex justify-center items-center"
                  ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <rect x="0" y="0" width="24" height="24" />
                      <circle fill="var(--text-dark)" cx="5" cy="12" r="2" />
                      <circle fill="var(--text-dark)" cx="12" cy="12" r="2" />
                      <circle fill="var(--text-dark)" cx="19" cy="12" r="2" />
                    </g></svg
                ></a>
              </div>
              <div class="overflow-y-scroll overflow-x-hidden relative contacts_body" id="DZ_W_Contacts_Body">
                <ul class="contacts">
                  <li class="name-first-letter">A</li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Archie Parker</span>
                        <p class="leading-[1.2] max-w-44">Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/2.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon offline absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Alfie Mason</span>
                        <p class="leading-[1.2] max-w-44">Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/3.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">AharlieKane</span>
                        <p class="leading-[1.2] max-w-44">Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/4.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon offline absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Athan Jacoby</span>
                        <p class="leading-[1.2] max-w-44">Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="name-first-letter">B</li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/5.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon offline absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Bashid Samim</span>
                        <p class="leading-[1.2] max-w-44">Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon offline absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Breddie Ronan</span>
                        <p class="leading-[1.2] max-w-44">Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/2.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon offline absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Ceorge Carson</span>
                        <p class="leading-[1.2] max-w-44">Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="name-first-letter">D</li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/3.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Darry Parker</span>
                        <p class="leading-[1.2] max-w-44">Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/4.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon offline absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Denry Hunter</span>
                        <p class="leading-[1.2] max-w-44">Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="name-first-letter">J</li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/5.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon offline absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Jack Ronan</span>
                        <p class="leading-[1.2] max-w-44">Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Jacob Tucker</span>
                        <p class="leading-[1.2] max-w-44">Kalid is online</p>
                      </div>
                    </div>
                  </li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/2.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon offline absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">James Logan</span>
                        <p class="leading-[1.2] max-w-44">Taherah left 7 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/3.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Joshua Weston</span>
                        <p class="leading-[1.2] max-w-44">Sami is online</p>
                      </div>
                    </div>
                  </li>
                  <li class="name-first-letter">O</li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/4.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon offline absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Oliver Acker</span>
                        <p class="leading-[1.2] max-w-44">Nargis left 30 mins ago</p>
                      </div>
                    </div>
                  </li>
                  <li class="dz-chat-user border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight" @click="chat = true">
                    <div class="flex items-center bd-highlight">
                      <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative">
                        <img src="assets/images/avatar/5.jpg" class="rounded-full w-full" alt="" />
                        <span class="online_icon offline absolute size-3 rounded-full -right-px bottom-0 border-2 border-border"></span>
                      </div>
                      <div class="user_info">
                        <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Oscar Weston</span>
                        <p class="leading-[1.2] max-w-44">Rashid left 50 mins ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div :class="`card chat dz-chat-history-box ${!chat ? '!hidden' : ''}`">
              <div class="chat-list-header text-center flex justify-between py-3.6 px-5 items-center border-b border-border relative">
                <a href="javascript:void(0);" class="dz-chat-history-back size-7.5 bg-primarylight rounded-md flex justify-center items-center" @click="chat = false">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <polygon points="0 0 24 0 24 24 0 24" />
                      <rect
                        fill="var(--text-dark)"
                        opacity="0.3"
                        transform="translate(15.000000, 12.000000) scale(-1, 1) rotate(-90.000000) translate(-15.000000, -12.000000) "
                        x="14"
                        y="7"
                        width="2"
                        height="10"
                        rx="1"
                      />
                      <path
                        d="M3.7071045,15.7071045 C3.3165802,16.0976288 2.68341522,16.0976288 2.29289093,15.7071045 C1.90236664,15.3165802 1.90236664,14.6834152 2.29289093,14.2928909 L8.29289093,8.29289093 C8.67146987,7.914312 9.28105631,7.90106637 9.67572234,8.26284357 L15.6757223,13.7628436 C16.0828413,14.136036 16.1103443,14.7686034 15.7371519,15.1757223 C15.3639594,15.5828413 14.7313921,15.6103443 14.3242731,15.2371519 L9.03007346,10.3841355 L3.7071045,15.7071045 Z"
                        fill="var(--text-dark)"
                        fill-rule="nonzero"
                        transform="translate(9.000001, 11.999997) scale(-1, -1) rotate(90.000000) translate(-9.000001, -11.999997) "
                      />
                    </g>
                  </svg>
                </a>
                <div>
                  <h6 class="mb-1 text-2sm">Chat with Khelesh</h6>
                  <p class="mb-0 text-xs leading-[1.2] text-success">Online</p>
                </div>
                <CustomeDropDown class="relative">
                  <template #trigger>
                    <a href="javascript:void(0);" class="size-7.5 bg-primarylight rounded-md flex justify-center items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <rect x="0" y="0" width="24" height="24" />
                          <circle fill="var(--text-dark)" cx="5" cy="12" r="2" />
                          <circle fill="var(--text-dark)" cx="12" cy="12" r="2" />
                          <circle fill="var(--text-dark)" cx="19" cy="12" r="2" />
                        </g>
                      </svg>
                    </a>
                  </template>
                  <template #menu>
                    <ul class="bg-bodybg border border-border rounded-xl py-2 absolute top-full right-0 min-w-60 text-start z-1 mt-1">
                      <li class="py-2 px-5 block"><i class="fa fa-user-circle text-primary mr-2"></i> View profile</li>
                      <li class="py-2 px-5 block"><i class="fa fa-users text-primary mr-2"></i> Add to btn-close friends</li>
                      <li class="py-2 px-5 block"><i class="fa fa-plus text-primary mr-2"></i> Add to group</li>
                      <li class="py-2 px-5 block"><i class="fa fa-ban text-primary mr-2"></i> Block</li>
                    </ul>
                  </template>
                </CustomeDropDown>
              </div>
              <div class="contacts_body style-1 p-4 dz-scroll overflow-y-scroll overflow-x-hidden relative" id="DZ_W_Contacts_Body3">
                <div class="flex justify-start mb-6">
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                  </div>
                  <div class="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-3.6 relative rounded-md rounded-ss-none">
                    Hi, how are you samim?
                    <span class="text-[11px] mt-1.1 block text-white opacity-50 msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div class="flex justify-end mb-6">
                  <div class="msg_cotainer_send mr-2.5 bg-bodybg text-secondary py-2.5 px-3.6 relative rounded-md rounded-se-none text-right">
                    Hi Khalid i am good tnx how about you?
                    <span class="text-[11px] mt-1.1 block opacity-50">8:55 AM, Today</span>
                  </div>
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/2.jpg" class="rounded-full w-full" alt="" />
                  </div>
                </div>
                <div class="flex justify-start mb-6">
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                  </div>
                  <div class="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-3.6 relative rounded-md rounded-ss-none">
                    I am good too, thank you for your chat template
                    <span class="text-[11px] mt-1.1 block text-white opacity-50 msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div class="flex justify-end mb-6">
                  <div class="msg_cotainer_send mr-2.5 bg-bodybg text-secondary py-2.5 px-3.6 relative rounded-md rounded-se-none text-right">
                    You are welcome
                    <span class="text-[11px] mt-1.1 block opacity-50">9:05 AM, Today</span>
                  </div>
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/2.jpg" class="rounded-full w-full" alt="" />
                  </div>
                </div>
                <div class="flex justify-start mb-6">
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                  </div>
                  <div class="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-3.6 relative rounded-md rounded-ss-none">
                    I am looking for your next templates
                    <span class="text-[11px] mt-1.1 block text-white opacity-50 msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div class="flex justify-end mb-6">
                  <div class="msg_cotainer_send mr-2.5 bg-bodybg text-secondary py-2.5 px-3.6 relative rounded-md rounded-se-none text-right">
                    Ok, thank you have a good day
                    <span class="text-[11px] mt-1.1 block opacity-50">9:10 AM, Today</span>
                  </div>
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/2.jpg" class="rounded-full w-full" alt="" />
                  </div>
                </div>
                <div class="flex justify-start mb-6">
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                  </div>
                  <div class="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-3.6 relative rounded-md rounded-ss-none">
                    Bye, see you
                    <span class="text-[11px] mt-1.1 block text-white opacity-50 msg_time">9:12 AM, Today</span>
                  </div>
                </div>
                <div class="flex justify-start mb-6">
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                  </div>
                  <div class="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-3.6 relative rounded-md rounded-ss-none">
                    Hi, how are you samim?
                    <span class="text-[11px] mt-1.1 block text-white opacity-50 msg_time">8:40 AM, Today</span>
                  </div>
                </div>
                <div class="flex justify-end mb-6">
                  <div class="msg_cotainer_send mr-2.5 bg-bodybg text-secondary py-2.5 px-3.6 relative rounded-md rounded-se-none text-right">
                    Hi Khalid i am good tnx how about you?
                    <span class="text-[11px] mt-1.1 block opacity-50">8:55 AM, Today</span>
                  </div>
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/2.jpg" class="rounded-full w-full" alt="" />
                  </div>
                </div>
                <div class="flex justify-start mb-6">
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                  </div>
                  <div class="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-3.6 relative rounded-md rounded-ss-none">
                    I am good too, thank you for your chat template
                    <span class="text-[11px] mt-1.1 block text-white opacity-50 msg_time">9:00 AM, Today</span>
                  </div>
                </div>
                <div class="flex justify-end mb-6">
                  <div class="msg_cotainer_send mr-2.5 bg-bodybg text-secondary py-2.5 px-3.6 relative rounded-md rounded-se-none text-right">
                    You are welcome
                    <span class="text-[11px] mt-1.1 block opacity-50">9:05 AM, Today</span>
                  </div>
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/2.jpg" class="rounded-full w-full" alt="" />
                  </div>
                </div>
                <div class="flex justify-start mb-6">
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                  </div>
                  <div class="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-3.6 relative rounded-md rounded-ss-none">
                    I am looking for your next templates
                    <span class="text-[11px] mt-1.1 block text-white opacity-50 msg_time">9:07 AM, Today</span>
                  </div>
                </div>
                <div class="flex justify-end mb-6">
                  <div class="msg_cotainer_send mr-2.5 bg-bodybg text-secondary py-2.5 px-3.6 relative rounded-md rounded-se-none text-right">
                    Ok, thank you have a good day
                    <span class="text-[11px] mt-1.1 block opacity-50">9:10 AM, Today</span>
                  </div>
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/2.jpg" class="rounded-full w-full" alt="" />
                  </div>
                </div>
                <div class="flex justify-start mb-6">
                  <div class="img_cont_msg block size-7.5 text-center font-semibold">
                    <img src="assets/images/avatar/1.jpg" class="rounded-full w-full" alt="" />
                  </div>
                  <div class="msg_cotainer ml-2.5 bg-primary text-white py-2.5 px-3.6 relative rounded-md rounded-ss-none">
                    Bye, see you
                    <span class="text-[11px] mt-1.1 block text-white opacity-50 msg_time">9:12 AM, Today</span>
                  </div>
                </div>
              </div>
              <div class="card-footer type_msg pt-2.5 px-5 pb-4 border-t border-border dark:border-transparent">
                <div class="input-group relative flex flex-wrap items-stretch justify-between w-full">
                  <textarea class="py-2.5 !h-auto min-h-auto resize-none flex-auto w-[1%] bg-transparent" placeholder="Type your message..."></textarea>
                  <div class="input-group-append">
                    <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-lg rounded-full size-[38px] mt-1.5 text-white text-center">
                      <i class="fa fa-location-arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
        <Transition v-show="tab == 'alerts-tab'" enter-active-class="transition-all" enter-from-class="opacity-0" enter-to-class="opacity-100">
          <div class="tab-content card sm:mb-4 mb-0 contacts_card">
            <div class="chat-list-header text-center flex justify-between py-3.6 px-5 items-center border-b border-border relative">
              <a href="javascript:void(0);" class="size-7.5 bg-primarylight rounded-md flex justify-center items-center"
                ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <circle fill="var(--text-dark)" cx="5" cy="12" r="2" />
                    <circle fill="var(--text-dark)" cx="12" cy="12" r="2" />
                    <circle fill="var(--text-dark)" cx="19" cy="12" r="2" />
                  </g></svg
              ></a>
              <div>
                <h6 class="mb-1 text-2sm">Notications</h6>
                <p class="mb-0 text-xs text-muted leading-[1.2]">Show All</p>
              </div>
              <a href="javascript:void(0);" class="size-7.5 bg-primarylight rounded-md flex justify-center items-center"
                ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                      fill="var(--text-dark)"
                      fill-rule="nonzero"
                      opacity="1"
                    />
                    <path
                      d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                      fill="var(--text-dark)"
                      fill-rule="nonzero"
                    />
                  </g></svg
              ></a>
            </div>

            <div class="overflow-y-scroll overflow-x-hidden relative contacts_body" id="DZ_W_Contacts_Body1">
              <ul class="contacts">
                <li class="name-first-letter">SEVER STATUS</li>
                <li class="border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight">
                  <div class="flex items-center bd-highlight">
                    <div class="img_cont flex items-center justify-center size-10 bg-primarylight text-primary rounded-full text-center font-semibold self-start mr-2.5 relative">
                      KK
                    </div>
                    <div class="user_info">
                      <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">David Nester Birthday</span>
                      <p class="text-primary leading-[1.2] max-w-44">Today</p>
                    </div>
                  </div>
                </li>
                <li class="name-first-letter">SOCIAL</li>
                <li class="border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight">
                  <div class="flex items-center bd-highlight">
                    <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative bg-successlight text-success">
                      RU
                    </div>
                    <div class="user_info">
                      <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Perfection Simplified</span>
                      <p class="leading-[1.2] max-w-44">Jame Smith commented on your status</p>
                    </div>
                  </div>
                </li>
                <li class="name-first-letter">SEVER STATUS</li>
                <li class="border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight">
                  <div class="flex items-center bd-highlight">
                    <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative bg-primarylight text-primary">
                      AU
                    </div>
                    <div class="user_info">
                      <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">AharlieKane</span>
                      <p class="leading-[1.2] max-w-44">Sami is online</p>
                    </div>
                  </div>
                </li>
                <li class="border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight">
                  <div class="flex items-center bd-highlight">
                    <div class="img_cont flex items-center justify-center size-10 rounded-full text-center font-semibold self-start mr-2.5 relative text-info bg-infolight">MO</div>
                    <div class="user_info">
                      <span class="text-secondary text-2sm mb-1.1 block max-w-44 font-medium leading-[1.2]">Athan Jacoby</span>
                      <p class="leading-[1.2] max-w-44">Nargis left 30 mins ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="card-footer"></div>
          </div>
        </Transition>
        <Transition v-show="tab == 'notes-tab'" enter-active-class="transition-all" enter-from-class="opacity-0" enter-to-class="opacity-100">
          <div class="tab-content card sm:mb-4 mb-0 note_card">
            <div class="chat-list-header text-center flex justify-between py-3.6 px-5 items-center border-b border-border relative">
              <a href="javascript:void(0);" class="size-7.5 bg-primarylight rounded-md flex justify-center items-center"
                ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect fill="var(--text-dark)" x="4" y="11" width="16" height="2" rx="1"></rect>
                    <rect
                      fill="var(--text-dark)"
                      opacity="1.0"
                      transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) "
                      x="4"
                      y="11"
                      width="16"
                      height="2"
                      rx="1"
                    ></rect>
                  </g></svg
              ></a>
              <div>
                <h6 class="mb-1 text-2sm">Notes</h6>
                <p class="mb-0 text-xs text-muted leading-[1.2]">Show All</p>
              </div>
              <a href="javascript:void(0);" class="size-7.5 bg-primarylight rounded-md flex justify-center items-center"
                ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                      fill="var(--text-dark)"
                      fill-rule="nonzero"
                      opacity="1"
                    />
                    <path
                      d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                      fill="var(--text-dark)"
                      fill-rule="nonzero"
                    />
                  </g></svg
              ></a>
            </div>
            <div class="overflow-y-scroll overflow-x-hidden relative contacts_body" id="DZ_W_Contacts_Body2">
              <ul class="contacts">
                <li class="border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight">
                  <div class="flex items-center bd-highlight">
                    <div class="user_info">
                      <span class="text-secondary text-2sm mb-1.1 block max-w-44 whitespace-nowrap font-medium leading-[1.2] text-ellipsis overflow-hidden"
                        >New order placed..</span
                      >
                      <p class="leading-[1.2] max-w-44">10 Aug 2020</p>
                    </div>
                    <div class="ml-auto">
                      <a
                        href="javascript:void(0);"
                        class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary size-6.1 !p-[0.1175rem] text-center text-white !leading-normal mr-1"
                        ><i class="fas fa-pencil-alt"></i
                      ></a>
                      <a href="javascript:void(0);" class="btn bg-danger hover:bg-dangerhover hover:shadow-btndanger size-6.1 !p-[0.1175rem] text-center text-white !leading-normal"
                        ><i class="fa fa-trash"></i
                      ></a>
                    </div>
                  </div>
                </li>
                <li class="border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight">
                  <div class="flex items-center bd-highlight">
                    <div class="user_info">
                      <span class="text-secondary text-2sm mb-1.1 block max-w-44 whitespace-nowrap font-medium leading-[1.2] text-ellipsis overflow-hidden"
                        >Youtube, a video-sharing website..</span
                      >
                      <p class="leading-[1.2] max-w-44">10 Aug 2020</p>
                    </div>
                    <div class="ml-auto">
                      <a
                        href="javascript:void(0);"
                        class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary size-6.1 !p-[0.1175rem] text-center text-white !leading-normal mr-1"
                        ><i class="fas fa-pencil-alt"></i
                      ></a>
                      <a href="javascript:void(0);" class="btn bg-danger hover:bg-dangerhover hover:shadow-btndanger size-6.1 !p-[0.1175rem] text-center text-white !leading-normal"
                        ><i class="fa fa-trash"></i
                      ></a>
                    </div>
                  </div>
                </li>
                <li class="border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight">
                  <div class="flex items-center bd-highlight">
                    <div class="user_info">
                      <span class="text-secondary text-2sm mb-1.1 block max-w-44 whitespace-nowrap font-medium leading-[1.2] text-ellipsis overflow-hidden"
                        >john just buy your product..</span
                      >
                      <p class="leading-[1.2] max-w-44">10 Aug 2020</p>
                    </div>
                    <div class="ml-auto">
                      <a
                        href="javascript:void(0);"
                        class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary size-6.1 !p-[0.1175rem] text-center text-white !leading-normal mr-1"
                        ><i class="fas fa-pencil-alt"></i
                      ></a>
                      <a href="javascript:void(0);" class="btn bg-danger hover:bg-dangerhover hover:shadow-btndanger size-6.1 !p-[0.1175rem] text-center text-white !leading-normal"
                        ><i class="fa fa-trash"></i
                      ></a>
                    </div>
                  </div>
                </li>
                <li class="border-b border-border py-3 px-4 cursor-pointer hover:bg-primarylight">
                  <div class="flex items-center bd-highlight">
                    <div class="user_info">
                      <span class="text-secondary text-2sm mb-1.1 block max-w-44 whitespace-nowrap font-medium leading-[1.2] text-ellipsis overflow-hidden">Athan Jacoby</span>
                      <p class="leading-[1.2] max-w-44">10 Aug 2020</p>
                    </div>
                    <div class="ml-auto">
                      <a
                        href="javascript:void(0);"
                        class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary size-6.1 !p-[0.1175rem] text-center text-white !leading-normal mr-1"
                        ><i class="fas fa-pencil-alt"></i
                      ></a>
                      <a href="javascript:void(0);" class="btn bg-danger hover:bg-dangerhover hover:shadow-btndanger size-6.1 !p-[0.1175rem] text-center text-white !leading-normal"
                        ><i class="fa fa-trash"></i
                      ></a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
