<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";

const popover = ref({
  left: false,
  right: false,
  bottom: false,
  top: false,
});

const Popover = ref<HTMLElement | null>(null);
onMounted(() => {
  Popover.value?.setAttribute("style", `height:${window.innerHeight - 66}px`);
});
</script>

<template>
  <div class="content-body default-height" ref="Popover">
    <CommonNav title="Popover" name="Popover" />
    <div class="container">
      <!-- row -->
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="uppercase text-sm">Tailwind popover</h4>
            </div>
            <div class="sm:p-5 p-4">
              <p class="mb-4 sm:text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam laborum dolorum culpa a maiores officia ab. Cumque necessitatibus voluptates soluta, ullam numquam
                nulla. Et a architecto veritatis sint, autem cupiditate iure illo pariatur eum, praesentium numquam ea quaerat ipsam? Corrupti nobis illo itaque quae, qui numquam
                vero ipsa, reiciendis sit repudiandae molestiae natus vel voluptatibus exercitationem ducimus neque harum ad, commodi excepturi repellat eos fugiat minus eius.
                Doloremque itaque repudiandae saepe quia temporibus? Vitae, reprehenderit aliquam facilis qui at quis provident in maiores illo laborum, voluptatem recusandae
                cupiditate nemo. Nulla iusto ad consequatur reprehenderit quod accusamus, vitae, blanditiis quae ut tenetur nobis animi dolorum consectetur dignissimos amet illo
                provident nam obcaecati eligendi molestias tempora? Ad nam nobis eaque consequatur tempore tenetur eius ipsum reprehenderit dignissimos inventore. Id recusandae
                nemo dicta rerum. Distinctio itaque, veniam dolore inventore aliquid assumenda neque. Deserunt!
              </p>
              <div class="popover-wrapper">
                <div class="popover inline-block relative mb-2 mr-2">
                  <button
                    type="button"
                    class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white dz-popover"
                    data-dz-popover="popover-left"
                    @click="popover.left = !popover.left"
                  >
                    Left
                  </button>
                  <Transition v-show="popover.left" enter-active-class="transition-all" enter-from-class="opacity-0" enter-to-class="opacity-100">
                    <div
                      class="dz-popover-content border-2 border-black rounded-lg absolute top-0 left-0 min-w-[290px] z-10 shadow-default translate-x-[-310px] max-2xl:translate-x-0 -translate-y-10 max-2xl:translate-y-[-7.75rem] max-2xl:top left"
                      id="popover-left"
                    >
                      <div class="popover-arroW absolute"></div>
                      <h3 class="popover-header py-2 px-4 bg-[#1F2025] text-white font-light sm:text-sm text-xs rounded-ss-md rounded-se-md">Popover in Left</h3>
                      <div class="popover-body p-4 sm:text-xs text-xxs bg-card leading-normal rounded-b-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                      </div>
                    </div>
                  </Transition>
                </div>
                <div class="popover inline-block relative mb-2 mr-2">
                  <button
                    type="button"
                    class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white dz-popover"
                    data-dz-popover="popover-top"
                    @click="popover.top = !popover.top"
                  >
                    Top
                  </button>
                  <Transition v-show="popover.top" enter-active-class="transition-all" enter-from-class="opacity-0" enter-to-class="opacity-100">
                    <div
                      class="dz-popover-content border-2 border-black rounded-lg absolute top-0 left-0 min-w-[290px] z-10 shadow-default translate-x-[-100px] -translate-y-28 top"
                      id="popover-top"
                    >
                      <h3 class="popover-header py-2 px-4 bg-[#1F2025] text-white font-light sm:text-sm text-xs rounded-ss-md rounded-se-md">Popover in Top</h3>
                      <div class="popover-body p-4 sm:text-xs text-xxs bg-card leading-normal rounded-b-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                      </div>
                    </div>
                  </Transition>
                </div>
                <div class="popover inline-block relative mb-2 mr-2">
                  <button
                    type="button"
                    class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white dz-popover"
                    data-dz-popover="popover-bottom"
                    @click="popover.bottom = !popover.bottom"
                  >
                    Bottom
                  </button>
                  <Transition v-show="popover.bottom" enter-active-class="transition-all" enter-from-class="opacity-0" enter-to-class="opacity-100">
                    <div
                      class="dz-popover-content border-2 border-black rounded-lg absolute left-0 min-w-[290px] z-10 shadow-default sm:translate-x-[-85px] translate-x-[-60px] translate-y-3 bottom"
                      id="popover-bottom"
                    >
                      <h3 class="popover-header py-2 px-4 bg-[#1F2025] text-white font-light sm:text-sm text-xs rounded-ss-md rounded-se-md">Popover in Bottom</h3>
                      <div class="popover-body p-4 sm:text-xs text-xxs bg-card leading-normal rounded-b-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                      </div>
                    </div>
                  </Transition>
                </div>
                <div class="popover inline-block relative mb-2">
                  <button
                    type="button"
                    class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white dz-popover"
                    data-dz-popover="popover-right"
                    @click="popover.right = !popover.right"
                  >
                    Right
                  </button>
                  <Transition v-show="popover.right" enter-active-class="transition-all" enter-from-class="opacity-0" enter-to-class="opacity-100">
                    <div
                      class="dz-popover-content border-2 border-black rounded-lg absolute sm:top-0 min-w-[290px] z-10 shadow-default sm:translate-x-[100px] translate-x-[0px] sm:-translate-y-8 translate-y-4 right sm:bottom"
                      id="popover-right"
                    >
                      <h3 class="popover-header py-2 px-4 bg-[#1F2025] text-white font-light sm:text-sm text-xs rounded-ss-md rounded-se-md">Popover in Right</h3>
                      <div class="popover-body p-4 sm:text-xs text-xxs bg-card leading-normal rounded-b-lg">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                      </div>
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
</template>
