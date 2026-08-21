<script lang="ts" setup>
import { Transition } from "vue";
import EmailLeftContent from "~/components/app/email/emailLeftContent.vue";
import { Store } from "~/store/Store";

const tab = ref("home-tab");

const { toggleEmailSideMenu } = Store;
</script>

<template>
  <div class="content-body default-height">
    <CommonNav title="Email Read" name="Email Read" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div>
              <div class="row !mx-0">
                <div class="xl:w-1/4 col-xxl-4 !p-0">
                  <EmailLeftContent />
                </div>
                <div class="xl:w-1/4 col-xxl-4 !p-0">
                  <div class="border-end inbox-area-list">
                    <div class="flex items-center p-4">
                      <h4 class="text-base">Inbox</h4>
                      <div
                        :class="`float-right mb-2 sm:hidden inline-block size-10 leading-10 bg-primarylight text-primary rounded-lg text-center duration-300 hover:text-white hover:hover:bg-primaryhover email-tools-box dz-resp-tool ml-auto ${
                          toggleEmailSideMenu ? 'active' : ''
                        }`"
                        @click="toggleEmailSideMenu = !toggleEmailSideMenu"
                      >
                        <i class="fa-solid fa-list-ul"></i>
                      </div>
                    </div>
                    <div
                      class="relative flex flex-wrap items-stretch border-b border-border mb-4"
                    >
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 w-full bg-transparent"
                        placeholder="Search Codebyte..."
                      />
                      <span
                        class="input-group-text rounded-0 bg-transparent border-0"
                      >
                        <a href="javascript:void(0);"
                          ><i class="flaticon-search"></i
                        ></a>
                      </span>
                    </div>

                    <div class="pb-4 overflow-y-scroll relative h-[48.25rem]">
                      <div class="email-left-box">
                        <ul
                          class="flex flex-wrap mail-tab"
                          id="myTab"
                          role="tablist"
                        >
                          <li
                            class="border-b border-dashed border-border"
                            role="presentation"
                          >
                            <a
                              class="text-primary py-3 px-6 block relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-1 duration-500"
                              @click.prevent="tab = 'home-tab'"
                              :class="{
                                'after:bg-primary bg-primarylight':
                                  tab == 'home-tab',
                              }"
                            >
                              <div class="flex items-start">
                                <div>
                                  <h6 class="mb-2">Jack Lee</h6>
                                  <span>Insurance documents</span>
                                  <p
                                    class="line-clamp-2"
                                    :class="{
                                      'text-primary': tab == 'home-tab',
                                    }"
                                  >
                                    Hi Brian, Aliquip ipsum sunt sit sunt velit
                                    velit pariatur. Nisi incididunt eiusmod
                                    consequat ut cillum eu exercitation. Enim
                                    proident nostrud aute in. Non irure nisi
                                    duis aliquip commodo proident veniam
                                    adipisicing id velit. Enim magna Lorem
                                    fugiat tempor. Commodo non nulla incididunt
                                    irure voluptate. Fugiat culpa cillum aute
                                    quis. Voluptate veniam adipisicing dolor
                                    sint. Proident eiusmod quis duis ipsum sit
                                    eu. Deserunt reprehenderit adipisicing
                                    reprehenderit ipsum. Laborum in veniam amet
                                    occaecat tempor esse enim dolore elit sit
                                    quis adipisicing. Aute occaecat eiusmod enim
                                    cupidatat sunt. Best Regards, Sanders
                                    Beck...
                                  </p>
                                </div>
                                <span class="ms-auto flex items-center"
                                  ><i
                                    class="fa-regular text-warning fa-star me-1"
                                  ></i>
                                  Jan</span
                                >
                              </div>
                            </a>
                          </li>
                          <li
                            class="border-b border-dashed border-border"
                            role="presentation"
                          >
                            <a
                              class="text-primary py-3 px-6 block relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-1 duration-500"
                              @click.prevent="tab = 'profile-tab'"
                              :class="{
                                'after:bg-primary bg-primarylight':
                                  tab == 'profile-tab',
                              }"
                            >
                              <div class="flex items-start">
                                <div>
                                  <h6 class="mb-2">Samulas Jack</h6>
                                  <span>Insurance documents</span>
                                  <p
                                    class="line-clamp-2"
                                    :class="{
                                      'text-primary': tab == 'profile-tab',
                                    }"
                                  >
                                    Hi Brian, Aliquip ipsum sunt sit sunt velit
                                    velit pariatur. Nisi incididunt eiusmod
                                    consequat ut cillum eu exercitation. Enim
                                    proident nostrud aute in. Non irure nisi
                                    duis aliquip commodo proident veniam
                                    adipisicing id velit. Enim magna Lorem
                                    fugiat tempor. Commodo non nulla incididunt
                                    irure voluptate. Fugiat culpa cillum aute
                                    quis. Voluptate veniam adipisicing dolor
                                    sint. Proident eiusmod quis duis ipsum sit
                                    eu. Deserunt reprehenderit adipisicing
                                    reprehenderit ipsum. Laborum in veniam amet
                                    occaecat tempor esse enim dolore elit sit
                                    quis adipisicing. Aute occaecat eiusmod enim
                                    cupidatat sunt. Best Regards, Sanders
                                    Beck...
                                  </p>
                                </div>
                                <span class="ms-auto flex items-center"
                                  ><i
                                    class="fa-regular fa-star text-warning me-1"
                                  ></i>
                                  Feb</span
                                >
                              </div>
                            </a>
                          </li>
                          <li
                            class="border-b border-dashed border-border"
                            role="presentation"
                          >
                            <a
                              class="text-primary py-3 px-6 block relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-1 duration-500"
                              @click.prevent="tab = 'contact-tab'"
                              :class="{
                                'after:bg-primary bg-primarylight':
                                  tab == 'contact-tab',
                              }"
                            >
                              <div class="flex items-start">
                                <div>
                                  <h6 class="mb-2">Nella Beck</h6>
                                  <span>Insurance documents</span>
                                  <p
                                    class="line-clamp-2"
                                    :class="{
                                      'text-primary': tab == 'contact-tab',
                                    }"
                                  >
                                    Hi Brian, Aliquip ipsum sunt sit sunt velit
                                    velit pariatur. Nisi incididunt eiusmod
                                    consequat ut cillum eu exercitation. Enim
                                    proident nostrud aute in. Non irure nisi
                                    duis aliquip commodo proident veniam
                                    adipisicing id velit. Enim magna Lorem
                                    fugiat tempor. Commodo non nulla incididunt
                                    irure voluptate. Fugiat culpa cillum aute
                                    quis. Voluptate veniam adipisicing dolor
                                    sint. Proident eiusmod quis duis ipsum sit
                                    eu. Deserunt reprehenderit adipisicing
                                    reprehenderit ipsum. Laborum in veniam amet
                                    occaecat tempor esse enim dolore elit sit
                                    quis adipisicing. Aute occaecat eiusmod enim
                                    cupidatat sunt. Best Regards, Sanders
                                    Beck...
                                  </p>
                                </div>
                                <span class="ms-auto flex items-center"
                                  ><i class="fa fa-star text-warning me-1"></i>
                                  Apr</span
                                >
                              </div>
                            </a>
                          </li>
                          <li
                            class="border-b border-dashed border-border"
                            role="presentation"
                          >
                            <a
                              class="text-primary py-3 px-6 block relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-1 duration-500 after:bg-success"
                              @click.prevent="tab = 'contact-tab-1'"
                              :class="{
                                'after:!bg-primary bg-primarylight':
                                  tab == 'contact-tab-1',
                              }"
                            >
                              <div class="flex items-start">
                                <div>
                                  <h6 class="mb-2">Jhon Beck</h6>
                                  <span>Insurance documents</span>
                                  <p
                                    class="line-clamp-2"
                                    :class="{
                                      'text-primary': tab == 'contact-tab-1',
                                    }"
                                  >
                                    Hi Brian, Aliquip ipsum sunt sit sunt velit
                                    velit pariatur. Nisi incididunt eiusmod
                                    consequat ut cillum eu exercitation. Enim
                                    proident nostrud aute in. Non irure nisi
                                    duis aliquip commodo proident veniam
                                    adipisicing id velit. Enim magna Lorem
                                    fugiat tempor. Commodo non nulla incididunt
                                    irure voluptate. Fugiat culpa cillum aute
                                    quis. Voluptate veniam adipisicing dolor
                                    sint. Proident eiusmod quis duis ipsum sit
                                    eu. Deserunt reprehenderit adipisicing
                                    reprehenderit ipsum. Laborum in veniam amet
                                    occaecat tempor esse enim dolore elit sit
                                    quis adipisicing. Aute occaecat eiusmod enim
                                    cupidatat sunt. Best Regards, Sanders
                                    Beck...
                                  </p>
                                </div>
                                <span class="ms-auto flex items-center"
                                  ><i class="fa fa-star text-warning me-1"></i>
                                  Mar</span
                                >
                              </div>
                            </a>
                          </li>
                          <li
                            class="border-b border-dashed border-border"
                            role="presentation"
                          >
                            <a
                              class="text-primary py-3 px-6 block relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-1 duration-500"
                              @click.prevent="tab = 'contact-tab-2'"
                              :class="{
                                'after:bg-primary bg-primarylight':
                                  tab == 'contact-tab-2',
                              }"
                            >
                              <div class="flex items-start">
                                <div>
                                  <h6 class="mb-2">Yatin</h6>
                                  <span>Insurance documents</span>
                                  <p
                                    class="line-clamp-2"
                                    :class="{
                                      'text-primary': tab == 'contact-tab-2',
                                    }"
                                  >
                                    Hi Brian, Aliquip ipsum sunt sit sunt velit
                                    velit pariatur. Nisi incididunt eiusmod
                                    consequat ut cillum eu exercitation. Enim
                                    proident nostrud aute in. Non irure nisi
                                    duis aliquip commodo proident veniam
                                    adipisicing id velit. Enim magna Lorem
                                    fugiat tempor. Commodo non nulla incididunt
                                    irure voluptate. Fugiat culpa cillum aute
                                    quis. Voluptate veniam adipisicing dolor
                                    sint. Proident eiusmod quis duis ipsum sit
                                    eu. Deserunt reprehenderit adipisicing
                                    reprehenderit ipsum. Laborum in veniam amet
                                    occaecat tempor esse enim dolore elit sit
                                    quis adipisicing. Aute occaecat eiusmod enim
                                    cupidatat sunt. Best Regards, Sanders
                                    Beck...
                                  </p>
                                </div>
                                <span class="ms-auto flex items-center"
                                  ><i class="fa fa-star text-warning me-1"></i>
                                  Feb</span
                                >
                              </div>
                            </a>
                          </li>
                          <li
                            class="border-b border-dashed border-border"
                            role="presentation"
                          >
                            <a
                              class="text-primary py-3 px-6 block relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-1 duration-500"
                              @click.prevent="tab = 'contact-tab-3'"
                              :class="{
                                'after:bg-primary bg-primarylight':
                                  tab == 'contact-tab-3',
                              }"
                            >
                              <div class="flex items-start">
                                <div>
                                  <h6 class="mb-2">Hanu Beck</h6>
                                  <span>Insurance documents</span>
                                  <p
                                    class="line-clamp-2"
                                    :class="{
                                      'text-primary': tab == 'contact-tab-3',
                                    }"
                                  >
                                    Hi Brian, Aliquip ipsum sunt sit sunt velit
                                    velit pariatur. Nisi incididunt eiusmod
                                    consequat ut cillum eu exercitation. Enim
                                    proident nostrud aute in. Non irure nisi
                                    duis aliquip commodo proident veniam
                                    adipisicing id velit. Enim magna Lorem
                                    fugiat tempor. Commodo non nulla incididunt
                                    irure voluptate. Fugiat culpa cillum aute
                                    quis. Voluptate veniam adipisicing dolor
                                    sint. Proident eiusmod quis duis ipsum sit
                                    eu. Deserunt reprehenderit adipisicing
                                    reprehenderit ipsum. Laborum in veniam amet
                                    occaecat tempor esse enim dolore elit sit
                                    quis adipisicing. Aute occaecat eiusmod enim
                                    cupidatat sunt. Best Regards, Sanders
                                    Beck...
                                  </p>
                                </div>
                                <span class="ms-auto flex items-center"
                                  ><i
                                    class="fa-regular fa-paper-plane me-1"
                                  ></i>
                                  <i class="fa fa-star text-warning me-1"></i>
                                  Feb</span
                                >
                              </div>
                            </a>
                          </li>
                          <li
                            class="border-b border-dashed border-border"
                            role="presentation"
                          >
                            <a
                              class="text-primary py-3 px-6 block relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-1 duration-500 after:bg-secondary"
                              @click.prevent="tab = 'contact-tab-4'"
                              :class="{
                                'after:!bg-primary bg-primarylight':
                                  tab == 'contact-tab-4',
                              }"
                            >
                              <div class="flex items-start">
                                <div>
                                  <h6 class="mb-2">Nitesh Lewe</h6>
                                  <span>Apple documents</span>
                                  <p
                                    class="line-clamp-2"
                                    :class="{
                                      'text-primary': tab == 'contact-tab-4',
                                    }"
                                  >
                                    Hi Brian, Aliquip ipsum sunt sit sunt velit
                                    velit pariatur. Nisi incididunt eiusmod
                                    consequat ut cillum eu exercitation. Enim
                                    proident nostrud aute in. Non irure nisi
                                    duis aliquip commodo proident veniam
                                    adipisicing id velit. Enim magna Lorem
                                    fugiat tempor. Commodo non nulla incididunt
                                    irure voluptate. Fugiat culpa cillum aute
                                    quis. Voluptate veniam adipisicing dolor
                                    sint. Proident eiusmod quis duis ipsum sit
                                    eu. Deserunt reprehenderit adipisicing
                                    reprehenderit ipsum. Laborum in veniam amet
                                    occaecat tempor esse enim dolore elit sit
                                    quis adipisicing. Aute occaecat eiusmod enim
                                    cupidatat sunt. Best Regards, Sanders
                                    Beck...
                                  </p>
                                </div>
                                <span class="ms-auto flex items-center"
                                  ><i class="fa fa-star text-warning me-1"></i>
                                  Dec</span
                                >
                              </div>
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              class="text-primary py-3 px-6 block relative after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-1 duration-500"
                              @click.prevent="tab = 'contact-tab-5'"
                              :class="{
                                'after:bg-primary bg-primarylight':
                                  tab == 'contact-tab-5',
                              }"
                            >
                              <div class="flex items-start">
                                <div>
                                  <h6 class="mb-2">Liam Antony</h6>
                                  <span>Apple documents</span>
                                  <p
                                    class="line-clamp-2"
                                    :class="{
                                      'text-primary': tab == 'contact-tab-5',
                                    }"
                                  >
                                    Hi Brian, Aliquip ipsum sunt sit sunt velit
                                    velit pariatur. Nisi incididunt eiusmod
                                    consequat ut cillum eu exercitation. Enim
                                    proident nostrud aute in. Non irure nisi
                                    duis aliquip commodo proident veniam
                                    adipisicing id velit. Enim magna Lorem
                                    fugiat tempor. Commodo non nulla incididunt
                                    irure voluptate. Fugiat culpa cillum aute
                                    quis. Voluptate veniam adipisicing dolor
                                    sint. Proident eiusmod quis duis ipsum sit
                                    eu. Deserunt reprehenderit adipisicing
                                    reprehenderit ipsum. Laborum in veniam amet
                                    occaecat tempor esse enim dolore elit sit
                                    quis adipisicing. Aute occaecat eiusmod enim
                                    cupidatat sunt. Best Regards, Sanders
                                    Beck...
                                  </p>
                                </div>
                                <span class="ms-auto flex items-center"
                                  ><i
                                    class="fa-regular fa-paper-plane me-1"
                                  ></i>
                                  <i class="fa fa-star text-warning me-1"></i>
                                  Feb</span
                                >
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="xl:w-1/2 col-xxl-4 !p-0">
                  <div class="max-xl:hidden">
                    <div class="xl:hidden flex items-center p-4">
                      <h4 class="text-base">Inbox</h4>
                      <div class="ms-auto">
                        <div
                          class="float-right mb-2 sm:hidden inline-block size-10 leading-10 bg-primarylight text-primary rounded-lg text-center duration-300 hover:text-white hover:hover:bg-primaryhover dz-resp-tool dz-back-arrow me-2"
                        >
                          <i class="fa-solid fa-arrow-left"></i>
                        </div>
                        <div
                          class="float-right mb-2 sm:hidden inline-block size-10 leading-10 bg-primarylight text-primary rounded-lg text-center duration-300 hover:text-white hover:hover:bg-primaryhover email-tools-box dz-resp-tool"
                        >
                          <i class="fa-solid fa-list-ul"></i>
                        </div>
                      </div>
                    </div>
                    <div
                      class="xl:hidden inline-flex input-group border-b border-border mb-4"
                    >
                      <input
                        type="text"
                        class="form-control rounded-0 bg-transparent border-0"
                        placeholder="Search Codebyte..."
                      />
                      <span
                        class="input-group-text rounded-0 bg-transparent border-0"
                      >
                        <a href="javascript:void(0);"
                          ><i class="flaticon-search"></i
                        ></a>
                      </span>
                    </div>
                    <div class="tab-content" id="myTabContent">
                      <Transition
                        enter-active-class="transition-all duration-500 ease-in-out"
                        enter-from-class="opacity-0 transform translate-y-4"
                        enter-to-class="opacity-100 transform translate-y-0"
                        leave-active-class="transition-all duration-500 ease-in-out"
                        leave-from-class="opacity-100 transform translate-y-0"
                        leave-to-class="opacity-0 transform translate-y-4"
                        v-show="tab == 'home-tab'"
                      >
                        <div class="pl-6 pr-4 py-6">
                          <div class="flex items-center flex-wrap mb-4">
                            <img
                              src="../../../assets/images/contacts/pic2.jpg"
                              class="size-10 inline-block relative object-cover rounded-lg me-2"
                              alt=""
                            />
                            <div>
                              <a href="javascript:void(0);">
                                <h6 class="mb-1">Jack Lee</h6>
                              </a>
                              <span>Web Doveloper</span>
                            </div>
                            <div class="py-2 sm:ml-auto ml-0">
                              <button
                                class="btn bg-secondary text-white hover:shadow-btnsecondary btn-sm"
                              >
                                <i class="fa-solid fa-reply me-1"></i
                                >Reply</button
                              >{{ " " }}
                              <button
                                type="button"
                                class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm"
                              >
                                <i class="fa-solid fa-forward me-1"></i>Forward
                              </button>
                            </div>
                          </div>
                          <div class="read-content-body">
                            <h5 class="mb-4">Hi,Ingredia,</h5>
                            <p class="mb-2">
                              <strong>Ingredia Nutrisha,</strong> A collection
                              of textile samples lay spread out on the table -
                              Samsa was a travelling salesman - and above it
                              there hung a picture
                            </p>
                            <p class="mb-2">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of Lorem Ipsum decided
                              to leave for the far World of Grammar. Aenean
                              vulputate eleifend tellus. Aenean leo ligula,
                              porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis,
                              feugiat a, tellus.
                            </p>
                            <p class="mb-2">
                              Aenean vulputate eleifend tellus. Aenean leo
                              ligula, porttitor eu, consequat vitae, eleifend
                              ac, enim. Aliquam lorem ante, dapibus in, viverra
                              quis, feugiat a, tellus. Phasellus viverra nulla
                              ut metus varius laoreet. Quisque rutrum. Aenean
                              imperdiet. Etiam ultricies nisi vel augue.
                              Curabitur ullamcorper ultricies nisi. Nam eget
                              dui. Etiam rhoncus. Maecenas tempus, tellus eget
                              condimentum rhoncus, sem quam semper libero, sit
                              amet adipiscing sem neque sed ipsum. Nam quam
                              nunc, blandit vel, luctus pulvinar,
                            </p>
                            <h5 class="pt-4 mb-2">Kind Regards</h5>
                            <p class="mb-7.5">Mr Smith</p>
                            <hr />
                          </div>

                          <div class="mb-4 pt-4">
                            <textarea
                              name="write-email"
                              id="write-email"
                              cols="30"
                              rows="8"
                              class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                              placeholder="It's really an amazing.I want to know more about it..!"
                            ></textarea>
                          </div>
                          <div class="text-end">
                            <button
                              class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                              type="button"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </Transition>
                      <Transition
                        enter-active-class="transition-all duration-500 ease-in-out"
                        enter-from-class="opacity-0 transform translate-y-4"
                        enter-to-class="opacity-100 transform translate-y-0"
                        leave-active-class="transition-all duration-500 ease-in-out"
                        leave-from-class="opacity-100 transform translate-y-0"
                        leave-to-class="opacity-0 transform translate-y-4"
                        v-show="tab == 'profile-tab'"
                      >
                        <div class="pl-6 pr-4 py-6">
                          <div class="flex items-center flex-wrap mb-4">
                            <img
                              src="../../../assets/images/contacts/pic1.jpg"
                              class="size-10 inline-block relative object-cover rounded-lg me-2"
                              alt=""
                            />
                            <div>
                              <a href="javascript:void(0);">
                                <h6 class="mb-1">Samulas Jack</h6>
                              </a>
                              <span>Web Doveloper</span>
                            </div>
                            <div class="py-2 sm:ml-auto ml-0">
                              <button
                                class="btn bg-secondary text-white hover:shadow-btnsecondary btn-sm"
                              >
                                <i class="fa-solid fa-reply me-1"></i
                                >Reply</button
                              >{{ " " }}
                              <button
                                type="button"
                                class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm"
                              >
                                <i class="fa-solid fa-forward me-1"></i>Forward
                              </button>
                            </div>
                          </div>
                          <div class="read-content-body">
                            <h5 class="mb-4">Hi,Ingredia,</h5>
                            <p class="mb-2">
                              <strong>Ingredia Nutrisha,</strong> A collection
                              of textile samples lay spread out on the table -
                              Samsa was a travelling salesman - and above it
                              there hung a picture
                            </p>
                            <p class="mb-2">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of Lorem Ipsum decided
                              to leave for the far World of Grammar. Aenean
                              vulputate eleifend tellus. Aenean leo ligula,
                              porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis,
                              feugiat a, tellus.
                            </p>
                            <p class="mb-2">
                              Aenean vulputate eleifend tellus. Aenean leo
                              ligula, porttitor eu, consequat vitae, eleifend
                              ac, enim. Aliquam lorem ante, dapibus in, viverra
                              quis, feugiat a, tellus. Phasellus viverra nulla
                              ut metus varius laoreet. Quisque rutrum. Aenean
                              imperdiet. Etiam ultricies nisi vel augue.
                              Curabitur ullamcorper ultricies nisi. Nam eget
                              dui. Etiam rhoncus. Maecenas tempus, tellus eget
                              condimentum rhoncus, sem quam semper libero, sit
                              amet adipiscing sem neque sed ipsum. Nam quam
                              nunc, blandit vel, luctus pulvinar,
                            </p>
                            <h5 class="pt-4 mb-2">Kind Regards</h5>
                            <p class="mb-7.5">Mr Smith</p>
                            <hr />
                          </div>

                          <div class="mb-4 pt-4">
                            <textarea
                              name="write-email-1"
                              id="write-email-1"
                              cols="30"
                              rows="8"
                              class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                              placeholder="It's really an amazing.I want to know more about it..!"
                            ></textarea>
                          </div>
                          <div class="text-end">
                            <button
                              class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                              type="button"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </Transition>
                      <Transition
                        enter-active-class="transition-all duration-500 ease-in-out"
                        enter-from-class="opacity-0 transform translate-y-4"
                        enter-to-class="opacity-100 transform translate-y-0"
                        leave-active-class="transition-all duration-500 ease-in-out"
                        leave-from-class="opacity-100 transform translate-y-0"
                        leave-to-class="opacity-0 transform translate-y-4"
                        v-show="tab == 'contact-tab'"
                      >
                        <div class="pl-6 pr-4 py-6">
                          <div class="flex items-center flex-wrap mb-4">
                            <img
                              src="../../../assets/images/contacts/pic3.jpg"
                              class="size-10 inline-block relative object-cover rounded-lg me-2"
                              alt=""
                            />
                            <div>
                              <a href="javascript:void(0);">
                                <h6 class="mb-1">Nella Beck</h6>
                              </a>
                              <span>Web Doveloper</span>
                            </div>
                            <div class="py-2 sm:ml-auto ml-0">
                              <button
                                class="btn bg-secondary text-white hover:shadow-btnsecondary btn-sm"
                              >
                                <i class="fa-solid fa-reply me-1"></i
                                >Reply</button
                              >{{ " " }}
                              <button
                                type="button"
                                class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm"
                              >
                                <i class="fa-solid fa-forward me-1"></i>Forward
                              </button>
                            </div>
                          </div>
                          <div class="read-content-body">
                            <h5 class="mb-4">Hi,Ingredia,</h5>
                            <p class="mb-2">
                              <strong>Ingredia Nutrisha,</strong> A collection
                              of textile samples lay spread out on the table -
                              Samsa was a travelling salesman - and above it
                              there hung a picture
                            </p>
                            <p class="mb-2">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of Lorem Ipsum decided
                              to leave for the far World of Grammar. Aenean
                              vulputate eleifend tellus. Aenean leo ligula,
                              porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis,
                              feugiat a, tellus.
                            </p>
                            <p class="mb-2">
                              Aenean vulputate eleifend tellus. Aenean leo
                              ligula, porttitor eu, consequat vitae, eleifend
                              ac, enim. Aliquam lorem ante, dapibus in, viverra
                              quis, feugiat a, tellus. Phasellus viverra nulla
                              ut metus varius laoreet. Quisque rutrum. Aenean
                              imperdiet. Etiam ultricies nisi vel augue.
                              Curabitur ullamcorper ultricies nisi. Nam eget
                              dui. Etiam rhoncus. Maecenas tempus, tellus eget
                              condimentum rhoncus, sem quam semper libero, sit
                              amet adipiscing sem neque sed ipsum. Nam quam
                              nunc, blandit vel, luctus pulvinar,
                            </p>
                            <h5 class="pt-4 mb-2">Kind Regards</h5>
                            <p class="mb-7.5">Mr Smith</p>
                            <hr />
                          </div>

                          <div class="mb-4 pt-4">
                            <textarea
                              name="write-email-2"
                              id="write-email-2"
                              cols="30"
                              rows="8"
                              class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                              placeholder="It's really an amazing.I want to know more about it..!"
                            ></textarea>
                          </div>
                          <div class="text-end">
                            <button
                              class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                              type="button"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </Transition>
                      <Transition
                        enter-active-class="transition-all duration-500 ease-in-out"
                        enter-from-class="opacity-0 transform translate-y-4"
                        enter-to-class="opacity-100 transform translate-y-0"
                        leave-active-class="transition-all duration-500 ease-in-out"
                        leave-from-class="opacity-100 transform translate-y-0"
                        leave-to-class="opacity-0 transform translate-y-4"
                        v-show="tab == 'contact-tab-1'"
                      >
                        <div class="pl-6 pr-4 py-6">
                          <div class="flex items-center flex-wrap mb-4">
                            <img
                              src="../../../assets/images/contacts/pic3.jpg"
                              class="size-10 inline-block relative object-cover rounded-lg me-2"
                              alt=""
                            />
                            <div>
                              <a href="javascript:void(0);">
                                <h6 class="mb-1">Jhon Beck</h6>
                              </a>
                              <span>Web Doveloper</span>
                            </div>
                            <div class="py-2 sm:ml-auto ml-0">
                              <button
                                class="btn bg-secondary text-white hover:shadow-btnsecondary btn-sm"
                              >
                                <i class="fa-solid fa-reply me-1"></i
                                >Reply</button
                              >{{ " " }}
                              <button
                                type="button"
                                class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm"
                              >
                                <i class="fa-solid fa-forward me-1"></i>Forward
                              </button>
                            </div>
                          </div>
                          <div class="read-content-body">
                            <h5 class="mb-4">Hi,Ingredia,</h5>
                            <p class="mb-2">
                              <strong>Ingredia Nutrisha,</strong> A collection
                              of textile samples lay spread out on the table -
                              Samsa was a travelling salesman - and above it
                              there hung a picture
                            </p>
                            <p class="mb-2">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of Lorem Ipsum decided
                              to leave for the far World of Grammar. Aenean
                              vulputate eleifend tellus. Aenean leo ligula,
                              porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis,
                              feugiat a, tellus.
                            </p>
                            <p class="mb-2">
                              Aenean vulputate eleifend tellus. Aenean leo
                              ligula, porttitor eu, consequat vitae, eleifend
                              ac, enim. Aliquam lorem ante, dapibus in, viverra
                              quis, feugiat a, tellus. Phasellus viverra nulla
                              ut metus varius laoreet. Quisque rutrum. Aenean
                              imperdiet. Etiam ultricies nisi vel augue.
                              Curabitur ullamcorper ultricies nisi. Nam eget
                              dui. Etiam rhoncus. Maecenas tempus, tellus eget
                              condimentum rhoncus, sem quam semper libero, sit
                              amet adipiscing sem neque sed ipsum. Nam quam
                              nunc, blandit vel, luctus pulvinar,
                            </p>
                            <h5 class="pt-4 mb-2">Kind Regards</h5>
                            <p class="mb-7.5">Mr Smith</p>
                            <hr />
                          </div>

                          <div class="mb-4 pt-4">
                            <textarea
                              name="write-email-3"
                              id="write-email-3"
                              cols="30"
                              rows="8"
                              class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                              placeholder="It's really an amazing.I want to know more about it..!"
                            ></textarea>
                          </div>
                          <div class="text-end">
                            <button
                              class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                              type="button"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </Transition>
                      <Transition
                        enter-active-class="transition-all duration-500 ease-in-out"
                        enter-from-class="opacity-0 transform translate-y-4"
                        enter-to-class="opacity-100 transform translate-y-0"
                        leave-active-class="transition-all duration-500 ease-in-out"
                        leave-from-class="opacity-100 transform translate-y-0"
                        leave-to-class="opacity-0 transform translate-y-4"
                        v-show="tab == 'contact-tab-2'"
                      >
                        <div class="pl-6 pr-4 py-6">
                          <div class="flex items-center flex-wrap mb-4">
                            <img
                              src="../../../assets/images/contacts/pic2.jpg"
                              class="size-10 inline-block relative object-cover rounded-lg me-2"
                              alt=""
                            />
                            <div>
                              <a href="javascript:void(0);">
                                <h6 class="mb-1">Yatin</h6>
                              </a>
                              <span>Web Doveloper</span>
                            </div>
                            <div class="py-2 sm:ml-auto ml-0">
                              <button
                                class="btn bg-secondary text-white hover:shadow-btnsecondary btn-sm"
                              >
                                <i class="fa-solid fa-reply me-1"></i
                                >Reply</button
                              >{{ " " }}
                              <button
                                type="button"
                                class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm"
                              >
                                <i class="fa-solid fa-forward me-1"></i>Forward
                              </button>
                            </div>
                          </div>
                          <div class="read-content-body">
                            <h5 class="mb-4">Hi,Ingredia,</h5>
                            <p class="mb-2">
                              <strong>Ingredia Nutrisha,</strong> A collection
                              of textile samples lay spread out on the table -
                              Samsa was a travelling salesman - and above it
                              there hung a picture
                            </p>
                            <p class="mb-2">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of Lorem Ipsum decided
                              to leave for the far World of Grammar. Aenean
                              vulputate eleifend tellus. Aenean leo ligula,
                              porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis,
                              feugiat a, tellus.
                            </p>
                            <p class="mb-2">
                              Aenean vulputate eleifend tellus. Aenean leo
                              ligula, porttitor eu, consequat vitae, eleifend
                              ac, enim. Aliquam lorem ante, dapibus in, viverra
                              quis, feugiat a, tellus. Phasellus viverra nulla
                              ut metus varius laoreet. Quisque rutrum. Aenean
                              imperdiet. Etiam ultricies nisi vel augue.
                              Curabitur ullamcorper ultricies nisi. Nam eget
                              dui. Etiam rhoncus. Maecenas tempus, tellus eget
                              condimentum rhoncus, sem quam semper libero, sit
                              amet adipiscing sem neque sed ipsum. Nam quam
                              nunc, blandit vel, luctus pulvinar,
                            </p>
                            <h5 class="pt-4 mb-2">Kind Regards</h5>
                            <p class="mb-7.5">Mr Smith</p>
                            <hr />
                          </div>

                          <div class="mb-4 pt-4">
                            <textarea
                              name="write-email-4"
                              id="write-email-4"
                              cols="30"
                              rows="8"
                              class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                              placeholder="It's really an amazing.I want to know more about it..!"
                            ></textarea>
                          </div>
                          <div class="text-end">
                            <button
                              class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                              type="button"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </Transition>
                      <Transition
                        enter-active-class="transition-all duration-500 ease-in-out"
                        enter-from-class="opacity-0 transform translate-y-4"
                        enter-to-class="opacity-100 transform translate-y-0"
                        leave-active-class="transition-all duration-500 ease-in-out"
                        leave-from-class="opacity-100 transform translate-y-0"
                        leave-to-class="opacity-0 transform translate-y-4"
                        v-show="tab == 'contact-tab-3'"
                      >
                        <div class="pl-6 pr-4 py-6">
                          <div class="flex items-center flex-wrap mb-4">
                            <img
                              src="../../../assets/images/contacts/pic2.jpg"
                              class="size-10 inline-block relative object-cover rounded-lg me-2"
                              alt=""
                            />
                            <div>
                              <a href="javascript:void(0);">
                                <h6 class="mb-1">Hanu Beck</h6>
                              </a>
                              <span>Web Doveloper</span>
                            </div>
                            <div class="py-2 sm:ml-auto ml-0">
                              <button
                                class="btn bg-secondary text-white hover:shadow-btnsecondary btn-sm"
                              >
                                <i class="fa-solid fa-reply me-1"></i
                                >Reply</button
                              >{{ " " }}
                              <button
                                type="button"
                                class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm"
                              >
                                <i class="fa-solid fa-forward me-1"></i>Forward
                              </button>
                            </div>
                          </div>
                          <div class="read-content-body">
                            <h5 class="mb-4">Hi,Ingredia,</h5>
                            <p class="mb-2">
                              <strong>Ingredia Nutrisha,</strong> A collection
                              of textile samples lay spread out on the table -
                              Samsa was a travelling salesman - and above it
                              there hung a picture
                            </p>
                            <p class="mb-2">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of Lorem Ipsum decided
                              to leave for the far World of Grammar. Aenean
                              vulputate eleifend tellus. Aenean leo ligula,
                              porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis,
                              feugiat a, tellus.
                            </p>
                            <p class="mb-2">
                              Aenean vulputate eleifend tellus. Aenean leo
                              ligula, porttitor eu, consequat vitae, eleifend
                              ac, enim. Aliquam lorem ante, dapibus in, viverra
                              quis, feugiat a, tellus. Phasellus viverra nulla
                              ut metus varius laoreet. Quisque rutrum. Aenean
                              imperdiet. Etiam ultricies nisi vel augue.
                              Curabitur ullamcorper ultricies nisi. Nam eget
                              dui. Etiam rhoncus. Maecenas tempus, tellus eget
                              condimentum rhoncus, sem quam semper libero, sit
                              amet adipiscing sem neque sed ipsum. Nam quam
                              nunc, blandit vel, luctus pulvinar,
                            </p>
                            <h5 class="pt-4 mb-2">Kind Regards</h5>
                            <p class="mb-7.5">Mr Smith</p>
                            <hr />
                          </div>

                          <div class="mb-4 pt-4">
                            <textarea
                              name="write-email-5"
                              id="write-email-5"
                              cols="30"
                              rows="8"
                              class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                              placeholder="It's really an amazing.I want to know more about it..!"
                            ></textarea>
                          </div>
                          <div class="text-end">
                            <button
                              class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                              type="button"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </Transition>
                      <Transition
                        enter-active-class="transition-all duration-500 ease-in-out"
                        enter-from-class="opacity-0 transform translate-y-4"
                        enter-to-class="opacity-100 transform translate-y-0"
                        leave-active-class="transition-all duration-500 ease-in-out"
                        leave-from-class="opacity-100 transform translate-y-0"
                        leave-to-class="opacity-0 transform translate-y-4"
                        v-show="tab == 'contact-tab-4'"
                      >
                        <div class="pl-6 pr-4 py-6">
                          <div class="flex items-center flex-wrap mb-4">
                            <img
                              src="../../../assets/images/contacts/pic2.jpg"
                              class="size-10 inline-block relative object-cover rounded-lg me-2"
                              alt=""
                            />
                            <div>
                              <a href="javascript:void(0);">
                                <h6 class="mb-1">Nitesh Lewe</h6>
                              </a>
                              <span>Web Doveloper</span>
                            </div>
                            <div class="py-2 sm:ml-auto ml-0">
                              <button
                                class="btn bg-secondary text-white hover:shadow-btnsecondary btn-sm"
                              >
                                <i class="fa-solid fa-reply me-1"></i
                                >Reply</button
                              >{{ " " }}
                              <button
                                type="button"
                                class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm"
                              >
                                <i class="fa-solid fa-forward me-1"></i>Forward
                              </button>
                            </div>
                          </div>
                          <div class="read-content-body">
                            <h5 class="mb-4">Hi,Ingredia,</h5>
                            <p class="mb-2">
                              <strong>Ingredia Nutrisha,</strong> A collection
                              of textile samples lay spread out on the table -
                              Samsa was a travelling salesman - and above it
                              there hung a picture
                            </p>
                            <p class="mb-2">
                              Even the all-powerful Pointing has no control
                              about the blind texts it is an almost
                              unorthographic life One day however a small line
                              of blind text by the name of Lorem Ipsum decided
                              to leave for the far World of Grammar. Aenean
                              vulputate eleifend tellus. Aenean leo ligula,
                              porttitor eu, consequat vitae, eleifend ac, enim.
                              Aliquam lorem ante, dapibus in, viverra quis,
                              feugiat a, tellus.
                            </p>
                            <p class="mb-2">
                              Aenean vulputate eleifend tellus. Aenean leo
                              ligula, porttitor eu, consequat vitae, eleifend
                              ac, enim. Aliquam lorem ante, dapibus in, viverra
                              quis, feugiat a, tellus. Phasellus viverra nulla
                              ut metus varius laoreet. Quisque rutrum. Aenean
                              imperdiet. Etiam ultricies nisi vel augue.
                              Curabitur ullamcorper ultricies nisi. Nam eget
                              dui. Etiam rhoncus. Maecenas tempus, tellus eget
                              condimentum rhoncus, sem quam semper libero, sit
                              amet adipiscing sem neque sed ipsum. Nam quam
                              nunc, blandit vel, luctus pulvinar,
                            </p>
                            <h5 class="pt-4 mb-2">Kind Regards</h5>
                            <p class="mb-7.5">Mr Smith</p>
                            <hr />
                          </div>

                          <div class="mb-4 pt-4">
                            <textarea
                              name="write-email-6"
                              id="write-email-6"
                              cols="30"
                              rows="8"
                              class="py-1.5 px-3 bg-card leading-normal text-2xs rounded-lg border border-border w-full resize-y"
                              placeholder="It's really an amazing.I want to know more about it..!"
                            ></textarea>
                          </div>
                          <div class="text-end">
                            <button
                              class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white"
                              type="button"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </Transition>
                      <Transition
                        enter-active-class="transition-all duration-500 ease-in-out"
                        enter-from-class="opacity-0 transform translate-y-4"
                        enter-to-class="opacity-100 transform translate-y-0"
                        leave-active-class="transition-all duration-500 ease-in-out"
                        leave-from-class="opacity-100 transform translate-y-0"
                        leave-to-class="opacity-0 transform translate-y-4"
                        v-show="tab == 'contact-tab-5'"
                      >
                        <div class="empty-msg-bx">
                          <i class="flaticon-email fs-35"></i>
                          <h6>Select a mail to read</h6>
                        </div>
                      </Transition>
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
