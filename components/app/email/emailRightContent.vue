<script lang="ts" setup>
import { Store } from "~/store/Store";
import DropZone from "./DropZone.vue";

const { toggleEmailSideMenu } = Store;
</script>

<template>
  <div class="px-4 py-6">
    <div class="flex items-center justify-between">
      <h4 class="card-title sm:hidden mb-2 block">Email</h4>
      <div
        :class="`email-tools-box float-right mb-2 sm:hidden inline-block size-10 leading-10 bg-primarylight text-primary rounded-lg text-center duration-300 hover:text-white hover:hover:bg-primaryhover ${
          toggleEmailSideMenu ? 'active' : ''
        }`"
        @click="toggleEmailSideMenu = !toggleEmailSideMenu"
      >
        <i class="fa-solid fa-list-ul"></i>
      </div>
    </div>
    <div class="compose-content">
      <form action="#">
        <div class="mb-4">
          <input
            type="text"
            class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
            placeholder=" To:"
          />
        </div>
        <div class="mb-4">
          <input
            type="text"
            class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
            placeholder=" Subject:"
          />
        </div>
        <div class="mb-4">
          <textarea
            id="email-compose-editor"
            class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full duration-500 focus:border-primary resize-y"
            rows="8"
            placeholder="Enter text ..."
          ></textarea>
        </div>
      </form>
      <h5 class="mb-6 text-[#6a707e] text-[17px]">
        <i class="fa fa-paperclip mr-2 rotate-90"></i> Attatchment
      </h5>
      <DropZone />
    </div>
    <div class="text-start mt-6 mb-4">
      <button
        class="btn text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover mr-2"
        type="button"
      >
        <span class="mr-2"><i class="fa fa-paper-plane"></i></span>Send
      </button>
      <button
        class="btn text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
        type="button"
      >
        <span class="mr-2"><i class="fa fa-times"></i></span>Discard
      </button>
    </div>
  </div>
</template>
