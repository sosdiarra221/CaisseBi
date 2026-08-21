<template>
  <div class="content-body">
    <CommonNav title="Nestable" name="Nestable" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Nestable</h4>
            </div>
            <div class="sm:p-5 p-4">
              <div class="row">
                <div class="md:w-1/2">
                  <div class="card-content">
                    <div class="nestable">
                      <div class="dd" id="nestable">
                        <ol class="dd-list">
                          <li class="dd-item" data-id="1">
                            <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 1</div>
                          </li>
                          <li class="dd-item" data-id="2">
                            <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 2</div>
                            <ol class="dd-list">
                              <li class="dd-item" data-id="3">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 3</div>
                              </li>
                              <li class="dd-item" data-id="4">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 4</div>
                              </li>
                              <li class="dd-item" data-id="5">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 5</div>
                                <ol class="dd-list">
                                  <li class="dd-item" data-id="6">
                                    <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 6</div>
                                  </li>
                                  <li class="dd-item" data-id="7">
                                    <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 7</div>
                                  </li>
                                  <li class="dd-item" data-id="8">
                                    <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 8</div>
                                  </li>
                                </ol>
                              </li>
                              <li class="dd-item" data-id="9">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 9</div>
                              </li>
                              <li class="dd-item" data-id="10">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 10</div>
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="md:w-1/2">
                  <div class="card-content">
                    <div class="nestable">
                      <div class="dd" id="nestable2">
                        <ol class="dd-list">
                          <li class="dd-item" data-id="13">
                            <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 13</div>
                          </li>
                          <li class="dd-item" data-id="13">
                            <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 13</div>
                          </li>
                          <li class="dd-item" data-id="14">
                            <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 14</div>
                          </li>
                          <li class="dd-item" data-id="15">
                            <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 15</div>
                            <ol class="dd-list">
                              <li class="dd-item" data-id="16">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 16</div>
                              </li>
                              <li class="dd-item" data-id="17">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 17</div>
                              </li>
                              <li class="dd-item" data-id="18">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 18</div>
                              </li>
                              <li class="dd-item" data-id="18">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 19</div>
                              </li>
                              <li class="dd-item" data-id="18">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 20</div>
                              </li>
                              <li class="dd-item" data-id="18">
                                <div class="dd-handle bg-primary text-white py-2 px-4 border border-border cursor-all-scroll h-auto rounded-[5px]">Item 21</div>
                              </li>
                            </ol>
                          </li>
                        </ol>
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

<script lang="ts">
import { defineComponent, computed } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import CommonNav from "~/components/CommonNav.vue";

export default defineComponent({
  name: "nested-test",
  components: {
    draggable: VueDraggableNext,
    CommonNav,
  },
  props: {
    value: {
      type: Array,
      required: false,
      default: null,
    },
    list: {
      type: Array,
      required: false,
      default: null,
    },
  },
  setup(props, { emit }) {
    // Emit the input event to update parent value
    const emitter = (value) => {
      emit("input", value);
    };

    // Drag options for draggable component
    const dragOptions = computed(() => ({
      animation: 0,
      group: "description",
      disabled: false,
      ghostClass: "ghost",
    }));

    // Determine which value to use: props.value or props.list
    const realValue = computed(() => (props.value ? props.value : props.list));

    return {
      dragOptions,
      realValue,
      emitter,
    };
  },
});
</script>
