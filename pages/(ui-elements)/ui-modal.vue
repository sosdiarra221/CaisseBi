<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";

const open = ref({ model1: false, model2: false, model3: false, model4: false, model5: false, model6: false, model7: false });

const Modal = ref<HTMLElement | null>(null);
onMounted(() => {
  Modal.value?.setAttribute("style", `height:${window.innerHeight - 66}px`);
});
</script>

<template>
  <div class="content-body default-height" ref="Modal">
    <CommonNav title="Modal" name="Modal" />
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Tailwind Modal</h4>
            </div>
            <div class="sm:p-5 p-4">
              <p class="sm:text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, minima! Eligendi minima illum itaque harum aliquam vel, sunt magni dolorem! Cum quaerat est cupiditate
                saepe quidem, fugiat in at magni ad provident distinctio eum tempore laboriosam adipisci, tempora cumque ex quis unde voluptatem consequuntur. Excepturi quibusdam
                accusamus deleniti officiis ullam repellendus magni unde? Saepe quibusdam vel, ipsum numquam ratione tempore. Dolor optio aliquid in velit eaque, sed delectus
                reprehenderit quam quidem a eum id nostrum ullam obcaecati error deleniti modi quasi harum possimus voluptatum repellat saepe! Omnis dolor maiores eaque deserunt
                exercitationem incidunt autem et voluptatibus molestias quod explicabo ipsam nam vitae a architecto, consectetur quas facilis sed nulla, placeat eum ex, ducimus in.
                Hic quo necessitatibus autem tempora provident!
              </p>
              <div class="Tailwind-modal">
                <div class="inline-block">
                  <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-2" @click="open.model1 = true">Basic modal</button>
                  <!-- Modal -->
                  <transition enter-from-class="opacity-0  duration-800" enter-to-class="opacity-100 transition ease-in ease-in" enter-active-class="transition  duration-500">
                    <div
                      class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
                      @keydown.escape.prevent="open.model1 = false"
                      v-cloak
                      v-show="open.model1"
                    >
                      <div class="modal-dialog rounded-lg min-h-screen flex items-center justify-center" @click.away="open.model1 = false">
                        <div class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg">
                          <div class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close p-2 text-xs dark:invert" @click="open.model1 = false"></button>
                          </div>
                          <div class="relative p-7.5">Modal body text goes here.</div>
                          <div class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border">
                            <button
                              @click="open.model1 = false"
                              type="button"
                              class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
                            >
                              Close
                            </button>
                            <button @click="open.model1 = false" type="button" class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                {{ " " }}
                <div class="inline-block">
                  <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-2" @click="open.model2 = true">Long content Modal</button>
                  <!-- Modal -->
                  <transition enter-from-class="opacity-0  duration-800" enter-to-class="opacity-100 transition ease-in ease-in" enter-active-class="transition  duration-500">
                    <div
                      class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
                      id="exampleModalLong"
                      @keydown.escape.window="open.model2 = false"
                      v-cloak
                      v-show="open.model2"
                      x-transition:enter="transition ease-in duration-800"
                    >
                      <div class="modal-dialog rounded-lg min-h-screen flex items-center justify-center" @click.away="open.model2 = false">
                        <div class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg">
                          <div class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close p-2 text-xs dark:invert" @click="open.model2 = false"></button>
                          </div>
                          <div class="relative p-7.5">
                            <p class="mb-4">
                              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p class="mb-4">
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p class="mb-4">
                              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p class="mb-4">
                              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p class="mb-4">
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p class="mb-4">
                              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p class="mb-4">
                              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p class="mb-4">
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p class="mb-4">
                              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p class="mb-4">
                              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p class="mb-4">
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p class="mb-4">
                              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p class="mb-4">
                              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p class="mb-4">
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p class="mb-4">
                              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p class="mb-4">
                              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p class="mb-4">
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p class="mb-4">
                              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </div>
                          <div class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border">
                            <button
                              @click="open.model2 = false"
                              type="button"
                              class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
                            >
                              Close
                            </button>
                            <button @click="open.model2 = false" type="button" class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                {{ " " }}
                <div class="inline-block">
                  <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-2" @click="open.model3 = true">Modal centered</button>
                  <!-- Modal -->
                  <transition enter-from-class="opacity-0  duration-800" enter-to-class="opacity-100 transition ease-in ease-in" enter-active-class="transition  duration-500">
                    <div
                      class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
                      id="exampleModalCenter"
                      @keydown.escape.window="open.model3 = false"
                      v-cloak
                      v-show="open.model3"
                      x-transition:enter="transition ease-in duration-800"
                    >
                      <div class="modal-dialog rounded-lg min-h-screen flex items-center justify-center modal-dialog-centered" @click.away="open.model3 = false">
                        <div class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg">
                          <div class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close p-2 text-xs dark:invert" @click="open.model3 = false"></button>
                          </div>
                          <div class="relative p-7.5">
                            <p class="mb-4">
                              Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border">
                            <button
                              @click="open.model3 = false"
                              type="button"
                              class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
                            >
                              Close
                            </button>
                            <button @click="open.model3 = false" type="button" class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                {{ " " }}
                <div class="inline-block">
                  <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-2" @click="open.model4 = true">Modal with tooltip</button>
                  <!-- Modal -->
                  <transition enter-from-class="opacity-0  duration-800" enter-to-class="opacity-100 transition ease-in ease-in" enter-active-class="transition  duration-500">
                    <div
                      class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
                      id="exampleModalpopover"
                      @keydown.escape.window="open.model4 = false"
                      v-cloak
                      v-show="open.model4"
                    >
                      <div class="modal-dialog rounded-lg min-h-screen flex items-center justify-center modal-dialog-centered" @click.away="open.model4 = false">
                        <div class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg">
                          <div class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close p-2 text-xs dark:invert" @click="open.model4 = false"></button>
                          </div>
                          <div class="relative p-7.5">
                            <h5>Popover in a modal</h5>
                            <p class="mb-4">
                              This
                              <a
                                href="javascript:void(0);"
                                class="btn btn-sm bg-secondary hover:bg-secondaryhover hover:shadow-btnsecondary text-white dz-popover"
                                data-dz-popover="popover-right"
                                >button
                              </a>
                              triggers a popover on click.
                            </p>
                            <div
                              class="dz-popover-content border-2 border-secondary rounded-lg absolute sm:top-0 min-w-[16.125rem] z-10 shadow-default sm:translate-x-[110px] sm:translate-y-8 max-sm:hidden hide"
                              id="popover-right"
                            >
                              <h3 class="popover-header py-2 px-4 bg-secondary text-white font-light text-sm rounded-t-lg">Popover title</h3>
                              <div class="popover-body p-4 bg-card leading-normal rounded-b-lg">Popover body content is set in this attribute.</div>
                            </div>
                            <hr />
                            <h5>Tooltips in a modal</h5>
                            <p class="mb-4">
                              <a href="javascript:void(0);" class="tooltip-test text-primary">This link</a> and
                              <a href="javascript:void(0);" class="tooltip-test text-primary">that link</a> have tooltips on hover.
                            </p>
                          </div>
                          <div class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border">
                            <button
                              @click="open.model4 = false"
                              type="button"
                              class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
                            >
                              Close
                            </button>
                            <button @click="open.model4 = false" type="button" class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                {{ " " }}
                <div class="inline-block">
                  <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-2" @click="open.model5 = true">Grid Inside Modal</button>
                  <!-- Modal -->
                  <transition enter-from-class="opacity-0  duration-800" enter-to-class="opacity-100 transition ease-in ease-in" enter-active-class="transition  duration-500">
                    <div
                      class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto"
                      id="modalGrid"
                      @keydown.escape.window="open.model5 = false"
                      v-cloak
                      v-show="open.model5"
                      x-transition:enter="transition ease-in duration-800"
                    >
                      <div class="modal-dialog rounded-lg min-h-screen flex items-center justify-center" @click.away="open.model5 = false">
                        <div class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg">
                          <div class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close p-2 text-xs dark:invert" @click="open.model5 = false"></button>
                          </div>
                          <div class="relative p-7.5">
                            <div class="container">
                              <div class="row">
                                <div class="md:w-1/3">.md:w-1/3</div>
                                <div class="md:w-1/3 ml-auto">.md:w-1/3 .ml-auto</div>
                              </div>
                              <div class="row">
                                <div class="md:w-1/4 ml-auto">.md:w-1/4 .ml-auto</div>
                                <div class="md:w-1/6 ml-auto">.md:w-1/6 .ml-auto</div>
                              </div>
                              <div class="row">
                                <div class="md:w-1/2 ml-auto">.md:w-1/2 .ml-auto</div>
                              </div>
                              <div class="row">
                                <div class="sm:w-3/4">
                                  Level 1: .sm:w-3/4
                                  <div class="row">
                                    <div class="w-2/3 sm:w-1/2">Level 2: .w-2/3 .sm:w-1/2</div>
                                    <div class="w-1/3 sm:w-1/2">Level 2: .w-1/3 .sm:w-1/2</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border">
                            <button
                              @click="open.model5 = false"
                              type="button"
                              class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
                            >
                              Close
                            </button>
                            <button @click="open.model5 = false" type="button" class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                {{ " " }}
                <div class="inline-block">
                  <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-2" @click="open.model6 = true">Large modal</button>
                  <transition enter-from-class="opacity-0  duration-800" enter-to-class="opacity-100 transition ease-in ease-in" enter-active-class="transition  duration-500">
                    <div
                      class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto bd-example-modal-lg"
                      @keydown.escape.window="open.model6 = false"
                      v-cloak
                      v-show="open.model6"
                    >
                      <div class="modal-dialog rounded-lg min-h-screen flex items-center justify-center modal-lg" @click.away="open.model6 = false">
                        <div class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg">
                          <div class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close p-2 text-xs dark:invert" @click="open.model6 = false"></button>
                          </div>
                          <div class="relative p-7.5">Modal body text goes here.</div>
                          <div class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border">
                            <button
                              @click="open.model6 = false"
                              type="button"
                              class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
                            >
                              Close
                            </button>
                            <button @click="open.model6 = false" type="button" class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                {{ " " }}
                <div class="inline-block">
                  <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-2" @click="open.model7 = true">Small modal</button>
                  <transition enter-from-class="opacity-0  duration-800" enter-to-class="opacity-100 transition ease-in ease-in" enter-active-class="transition  duration-500">
                    <div
                      class="fixed inset-0 bg-black/50 transition-opacity z-[1055] overflow-x-hidden overflow-y-auto bd-example-modal-sm"
                      @keydown.escape.window="open.model7 = false"
                      v-cloak
                      v-show="open.model7"
                    >
                      <div class="modal-dialog rounded-lg min-h-screen flex items-center justify-center modal-sm" @click.away="open.model7 = false">
                        <div class="flex flex-col relative rounded-md w-full pointer-events-auto bg-bodybg">
                          <div class="flex justify-between items-center flex-wrap py-4 px-7.5 relative z-[2] border-b border-border">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close p-2 text-xs dark:invert" @click="open.model7 = false"></button>
                          </div>
                          <div class="relative p-7.5">Modal body text goes here.</div>
                          <div class="flex items-center justify-end flex-wrap py-4 px-7.5 border-t border-border">
                            <button
                              @click="open.model7 = false"
                              type="button"
                              class="btn m-1 text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white"
                            >
                              Close
                            </button>
                            <button @click="open.model7 = false" type="button" class="btn m-1 text-white bg-primary border-primary hover:bg-primaryhover hover:border-primaryhover">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                {{ " " }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
