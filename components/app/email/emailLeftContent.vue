<script lang="ts" setup>
import { Store } from "~/store/Store";

const { toggleEmailSideMenu } = Store;
</script>

<template>
  <div
    :class="`border-r border-border max-md:w-72 max-md:fixed max-md:h-full max-md:duration-500 max-md:left-[-22rem] max-md:top-0 max-md:z-999 mail-left-body ${
      toggleEmailSideMenu && 'active'
    }`"
  >
    <div class="pr-4 p-6 relative overflow-y-scroll h-[52rem] bg-card">
      <div class="mb-4 mt-6 sm:mt-0 email-left-box">
        <div class="p-0">
          <NuxtLink
            to="/email-compose"
            class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white !block w-full text-center"
            >Compose</NuxtLink
          >
        </div>
        <div class="mail-list border-b border-border pb-6 mt-6">
          <p class="text-primary font-medium text-sm mb-2">MAILBOXES</p>
          <NuxtLink
            to="/email-inbox"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center bg-primarylight text-primary group"
          >
            <i class="fa-regular fa-envelope align-middle pr-2.5 mr-2"></i>Inbox
            <span
              class="badge badge-sm bg-primary !py-[3px] !px-1.1 ml-auto text-white float-end"
              >2</span
            >
          </NuxtLink>

          <a
            href="javascript:void(0);"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
          >
            <i
              class="fa-regular fa-paper-plane align-middle pr-2.5 mr-2 group-hover:text-primary"
            ></i
            >Sent
          </a>
          <a
            href="javascript:void(0);"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
          >
            <i
              class="fa-regular fa-star align-middle pr-2.5 mr-2 group-hover:text-primary"
            ></i
            >Favorite
          </a>
          <a
            href="javascript:void(0);"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
          >
            <i
              class="fa-regular fa-file align-middle pr-2.5 mr-2 group-hover:text-primary"
            ></i
            >Draft
          </a>
          <a
            href="javascript:void(0);"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
          >
            <svg
              class="align-middle mr-[1.125rem] text-lg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:fill-primary group-hover:stroke-primary"
                d="M15.4425 10.0575L10.065 15.435C9.92569 15.5745 9.76026 15.6851 9.57816 15.7606C9.39606 15.8361
																	9.20087 15.8749 9.00375 15.8749C8.80663 15.8749 8.61144 15.8361 8.42934 15.7606C8.24724 15.6851 8.08181 15.5745 7.9425 15.435L1.5 9V1.5H9L15.4425
																	7.9425C15.7219 8.22354 15.8787 8.60372 15.8787 9C15.8787 9.39628 15.7219 9.77646 15.4425 10.0575Z"
                stroke="#666666"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                class="group-hover:fill-primary group-hover:stroke-primary"
                d="M5.25 5.25H5.268"
                stroke="#666666"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Important
          </a>
          <a
            href="javascript:void(0);"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
          >
            <i
              class="fa-regular fa-clock align-middle pr-2.5 mr-2 group-hover:text-primary"
            ></i>
            Scheduled
          </a>
          <a
            href="javascript:void(0);"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
          >
            <svg
              class="align-middle mr-[1.125rem] text-lg"
              width="15"
              height="15"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:fill-primary group-hover:stroke-primary"
                d="M5.5 8.25L11 13.75L16.5 8.25"
                stroke="#666666"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Move
          </a>
        </div>
        <div class="mail-list border-b border-border pb-6 mt-6">
          <p class="text-secondary mb-2 font-medium">Filter</p>
          <NuxtLink
            to="/email-inbox"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
            ><i
              class="fa-regular fa-star align-middle pr-2.5 mr-2 group-hover:text-primary"
            ></i>
            Starred
          </NuxtLink>
          <a
            href="javascript:void(0);"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
          >
            <svg
              class="align-middle mr-[1.125rem] text-lg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:fill-primary group-hover:stroke-primary"
                d="M15.4425 10.0575L10.065 15.435C9.92569 15.5745 9.76026 15.6851 9.57816 15.7606C9.39606 15.8361
																9.20087 15.8749 9.00375 15.8749C8.80663 15.8749 8.61144 15.8361 8.42934 15.7606C8.24724 15.6851 8.08181 15.5745 7.9425 15.435L1.5 9V1.5H9L15.4425
																7.9425C15.7219 8.22354 15.8787 8.60372 15.8787 9C15.8787 9.39628 15.7219 9.77646 15.4425 10.0575Z"
                stroke="#666666"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                class="group-hover:fill-primary group-hover:stroke-primary"
                d="M5.25 5.25H5.268"
                stroke="#666666"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
            >Important
          </a>
        </div>
        <div class="mail-list border-b border-border pb-6 mt-6">
          <p class="text-success mb-2 font-medium">LABELS</p>
          <a
            href="javascript:void(0);"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
          >
            <svg
              class="align-middle mr-[1.125rem] text-lg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:fill-primary group-hover:stroke-primary"
                d="M15.4425 10.0575L10.065 15.435C9.92569 15.5745 9.76026 15.6851 9.57816 15.7606C9.39606 15.8361
																9.20087 15.8749 9.00375 15.8749C8.80663 15.8749 8.61144 15.8361 8.42934 15.7606C8.24724 15.6851 8.08181 15.5745 7.9425 15.435L1.5 9V1.5H9L15.4425
																7.9425C15.7219 8.22354 15.8787 8.60372 15.8787 9C15.8787 9.39628 15.7219 9.77646 15.4425 10.0575Z"
                stroke="var(--primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                class="group-hover:fill-primary group-hover:stroke-primary"
                d="M5.25 5.25H5.268"
                stroke="var(--primary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Personal
          </a>
          <a
            href="javascript:void(0);"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
          >
            <svg
              class="align-middle mr-[1.125rem] text-lg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:fill-secondary group-hover:stroke-secondary"
                d="M15.4425 10.0575L10.065 15.435C9.92569 15.5745 9.76026 15.6851 9.57816 15.7606C9.39606 15.8361
																9.20087 15.8749 9.00375 15.8749C8.80663 15.8749 8.61144 15.8361 8.42934 15.7606C8.24724 15.6851 8.08181 15.5745 7.9425 15.435L1.5 9V1.5H9L15.4425
																7.9425C15.7219 8.22354 15.8787 8.60372 15.8787 9C15.8787 9.39628 15.7219 9.77646 15.4425 10.0575Z"
                stroke="var(--secondary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                class="group-hover:fill-secondary group-hover:stroke-secondary"
                d="M5.25 5.25H5.268"
                stroke="var(--secondary)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Work
          </a>
          <a
            href="javascript:void(0);"
            class="rounded-lg py-2.5 pr-2 pl-4 sm:text-2sm mb-1 overflow-hidden flex items-center hover:bg-primarylight dark:bg-white/10 dark:text-white dark:my-[13px] group"
          >
            <svg
              class="align-middle mr-[1.125rem] text-lg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="group-hover:fill-success group-hover:stroke-success"
                d="M15.4425 10.0575L10.065 15.435C9.92569 15.5745 9.76026 15.6851 9.57816 15.7606C9.39606 15.8361
																	9.20087 15.8749 9.00375 15.8749C8.80663 15.8749 8.61144 15.8361 8.42934 15.7606C8.24724 15.6851 8.08181 15.5745 7.9425 15.435L1.5 9V1.5H9L15.4425
																	7.9425C15.7219 8.22354 15.8787 8.60372 15.8787 9C15.8787 9.39628 15.7219 9.77646 15.4425 10.0575Z"
                stroke="#09BD3C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                class="group-hover:fill-success group-hover:stroke-success"
                d="M5.25 5.25H5.268"
                stroke="#09BD3C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Accounts
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
