<script lang="ts" setup>
import EmailLeftContent from "~/components/app/email/emailLeftContent.vue";
import DropdownButton from "~/hooks/DropdownButton.vue";
import Dropdown from "~/hooks/DropdownItems.vue";
import { Store } from "~/store/Store";
const open = ref<boolean>(false);

const { toggleEmailSideMenu } = Store;
const checkboxHandler = (e: Event) => {
  let Target = e.target as HTMLInputElement;

  let elements =
    document.querySelectorAll<HTMLInputElement>(".form-check-input");
  elements.forEach((ele) => {
    if (Target.checked) {
      ele.checked = true;
    } else {
      ele.checked = false;
    }
    ele.addEventListener("input", function (event: Event) {
      if (!(event.target as HTMLInputElement).checked) {
        Target.checked = false;
      }
    });
  });
};
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Inbox" name="Inbox" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div>
              <div class="row !mx-0">
                <div class="xl:w-1/4 col-xxl-4 !p-0">
                  <EmailLeftContent />
                </div>

                <div class="xl:w-3/4 col-xxl-8 !p-0">
                  <div class="py-6">
                    <div role="toolbar" class="toolbar mx-3 flex items-center">
                      <div
                        class="relative inline-flex rounded-lg mb-1 pl-1 self-center"
                      >
                        <div class="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            class="form-check-input checkAll"
                            id="checkAll"
                            @input="checkboxHandler"
                          />
                          <label
                            class="ml-1.1 mt-[0.113rem]"
                            for="checkAll"
                          ></label>
                        </div>
                      </div>
                      <div class="relative inline-flex rounded-lg mb-1">
                        <button
                          class="btn bg-primarylight hover:shadow-btnprimary text-primary !px-4"
                          type="button"
                        >
                          <i class="ti-reload"></i>
                        </button>
                      </div>
                      <div
                        class="relative inline-flex rounded-lg mb-1"
                        x-data="{ open: false }"
                      >
                        <DropdownButton
                          @update:open="open = $event"
                          :open="open"
                          class="btn bg-primarylight hover:shadow-btnprimary text-primary dropdown-toggle !px-4 mx-2"
                          @click="open = !open"
                          >More <span class="caret"></span>
                        </DropdownButton>
                        <Dropdown :open="open">
                          <div
                            class="bg-bodybg border border-black/15 rounded-xl absolute top-full right-0 min-w-40 mt-1 z-1 text-left"
                          >
                            <a
                              href="javascript: void(0);"
                              class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                              >Mark as</a
                            >
                            <a
                              href="javascript: void(0);"
                              class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                              >Add to Tasks</a
                            >
                            <a
                              href="javascript: void(0);"
                              class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                              >Add Star</a
                            >
                            <a
                              href="javascript: void(0);"
                              class="py-2 px-5 block hover:bg-primarylight hover:text-primary"
                              >Mute</a
                            >
                          </div>
                        </Dropdown>
                      </div>
                      <div
                        :class="`email-tools-box float-right mb-2 sm:hidden inline-block size-10 leading-10 bg-primarylight text-primary rounded-lg text-center duration-300 hover:text-white hover:hover:bg-primaryhover ${
                          toggleEmailSideMenu ? 'active' : ''
                        }`"
                        @click="toggleEmailSideMenu = !toggleEmailSideMenu"
                      >
                        <i class="fa-solid fa-list-ul"></i>
                      </div>
                      <form class="hidden sm:block ml-auto">
                        <div
                          class="ml-auto w-full items-stretch flex-wrap sm:inline-flex hidden"
                        >
                          <input
                            type="text"
                            class="py-1.5 px-3 h-11 bg-card border border-border block rounded-s-lg"
                            placeholder="Search here"
                          />
                          <span
                            class="input-group-text border border-border border-l-0 !rounded-s-none bg-bodybg"
                          >
                            <a href="javascript:void(0);"
                              ><i class="fa-solid fa-magnifying-glass"></i
                            ></a>
                          </span>
                        </div>
                      </form>
                    </div>
                    <div class="block mt-4 email-list">
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div
                            class="flex after:absolute after:content-[''] after:bg-primary after:top-0 after:left-0 after:h-full after:w-[3px]"
                          >
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox2"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox2"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Ingredia Nutrisha, A collection of textile samples
                              lay spread out on the table - Samsa was a
                              travelling salesman - and above it there hung a
                              picture
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div class="flex">
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox3"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox3"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Almost unorthographic life One day however a small
                              line of blind text by the name of Lorem Ipsum
                              decided to leave for the far World of Grammar.
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div
                            class="flex after:absolute after:content-[''] after:bg-success after:top-0 after:left-0 after:h-full after:w-[3px]"
                          >
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox4"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox4"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Pointing has no control about the blind texts it
                              is an almost unorthographic life One day however a
                              small line of blind text by the name of
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div class="flex">
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox5"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox5"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however NuxtLink small
                              line of blind text by the name of
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div
                            class="flex after:absolute after:content-[''] after:bg-warning after:top-0 after:left-0 after:h-full after:w-[3px]"
                          >
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox6"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox6"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Ingredia Nutrisha, A collection of textile samples
                              lay spread out on the table - Samsa was a
                              travelling salesman - and above it there hung a
                              picture
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div class="flex">
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox7"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox7"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Almost unorthographic life One day however a small
                              line of blind text by the name of Lorem Ipsum
                              decided to leave for the far World of Grammar.
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div class="flex">
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox8"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox8"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Pointing has no control about the blind texts it
                              is an almost unorthographic life One day however a
                              small line of blind text by the name of
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div class="flex">
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox9"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox9"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div class="flex">
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox10"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox10"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Ingredia Nutrisha, A collection of textile samples
                              lay spread out on the table - Samsa was a
                              travelling salesman - and above it there hung a
                              picture
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div class="flex">
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox11"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox11"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Almost unorthographic life One day however a small
                              line of blind text by the name of Lorem Ipsum
                              decided to leave for the far World of Grammar.
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div class="flex">
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox12"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox12"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Pointing has no control about the blind texts it
                              is an almost unorthographic life One day however a
                              small line of blind text by the name of
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div class="flex">
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox13"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox13"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                      <div
                        class="relative block h-13.5 leading-[50px] border-b border-border duration-300 hover:bg-[#98a6ad26]"
                      >
                        <div>
                          <div class="flex">
                            <div class="pl-1 self-center">
                              <div
                                class="form-check custom-checkbox ml-2.5 mt-0.5"
                              >
                                <input
                                  type="checkbox"
                                  class="form-check-input"
                                  id="checkbox14"
                                />
                                <label
                                  class="ml-1.1 mt-[0.113rem]"
                                  for="checkbox14"
                                ></label>
                              </div>
                            </div>
                            <div class="ml-2">
                              <button class="align-middle">
                                <i class="fa fa-star text-lg pl-[0.4rem]"></i>
                              </button>
                            </div>
                          </div>
                          <NuxtLink
                            to="/email-read"
                            class="float-left absolute top-0 left-[90px] right-0 bottom-0"
                          >
                            <div
                              class="absolute top-0 left-0 right-[88px] text-ellipsis overflow-hidden whitespace-nowrap"
                            >
                              Ingredia Nutrisha, A collection of textile samples
                              lay spread out on the table - Samsa was a
                              travelling salesman - and above it there hung a
                              picture
                            </div>
                            <div class="absolute top-0 right-6">11:49 am</div>
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                    <!-- panel -->
                    <div class="row !mt-6">
                      <div class="w-full !pl-4">
                        <nav>
                          <ul
                            class="mb-5 pl-4 flex justify-center xl:justify-start"
                          >
                            <li class="mr-[7px]">
                              <a
                                class="size-7.5 leading-8 flex justify-center items-center text-primary bg-primarylight rounded-lg duration-500 hover:bg-primary hover:text-white ml-[7px]"
                                href="javascript:void(0);"
                                ><i class="la la-angle-left"></i>
                              </a>
                            </li>
                            <li class="mr-[7px]">
                              <a
                                class="size-7.5 leading-8 flex justify-center items-center text-primary rounded-lg duration-500 hover:bg-primary hover:text-white ml-[7px]"
                                href="javascript:void(0);"
                                >1
                              </a>
                            </li>
                            <li class="mr-[7px]">
                              <a
                                class="size-7.5 leading-8 flex justify-center items-center rounded-lg bg-primary text-white shadow-[0_0.625rem_1.25rem_0rem_var(--rgba-primary-1)] ml-[7px]"
                                href="javascript:void(0);"
                                >2
                              </a>
                            </li>
                            <li class="mr-[7px]">
                              <a
                                class="size-7.5 leading-8 flex justify-center items-center text-primary rounded-lg duration-500 hover:bg-primary hover:text-white ml-[7px]"
                                href="javascript:void(0);"
                                >3
                              </a>
                            </li>
                            <li class="mr-[7px]">
                              <a
                                class="size-7.5 leading-8 flex justify-center items-center text-primary rounded-lg duration-500 hover:bg-primary hover:text-white ml-[7px]"
                                href="javascript:void(0);"
                                >4
                              </a>
                            </li>
                            <li class="mr-[7px]">
                              <a
                                class="size-7.5 leading-8 flex justify-center items-center text-primary bg-primarylight rounded-lg duration-500 hover:bg-primary hover:text-white ml-[7px]"
                                href="javascript:void(0);"
                                ><i class="la la-angle-right"></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
