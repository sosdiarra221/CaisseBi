<!-- @format -->

<template>
  <div class="content-body" ref="Toastr">
    <CommonNav title="Toastr" name="Toastr" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Toastr</h4>
            </div>
            <div class="sm:p-5 p-4">
              <button @click="notify('top-right')" type="button" class="btn btn bg-dark hover:bg-darkhover hover:shadow-btndark text-white mb-2 me-2" id="toastr-success-top-right">
                Top Right
              </button>
              <button
                @click="notify('bottom-right')"
                type="button"
                class="btn btn bg-dark hover:bg-darkhover hover:shadow-btndark text-white mb-2 me-2"
                id="toastr-success-bottom-right"
              >
                Bottom Right
              </button>
              <button
                @click="notify('bottom-left')"
                type="button"
                class="btn btn bg-dark hover:bg-darkhover hover:shadow-btndark text-white mb-2 me-2"
                id="toastr-success-bottom-left"
              >
                Bottom Left
              </button>
              <button @click="notify('top-left')" type="button" class="btn btn bg-dark hover:bg-darkhover hover:shadow-btndark text-white mb-2 me-2" id="toastr-success-top-left">
                Top Left
              </button>
              <button
                @click="notify('full-width')"
                type="button"
                class="btn btn bg-dark hover:bg-darkhover hover:shadow-btndark text-white mb-2 me-2"
                id="toastr-success-top-full-width"
              >
                Top Full Width
              </button>
              <button
                @click="notify('bottom-full-width')"
                type="button"
                class="btn btn bg-dark hover:bg-darkhover hover:shadow-btndark text-white mb-2 me-2"
                id="toastr-success-bottom-full-width"
              >
                Bottom Full Width
              </button>
              <button
                @click="notify('success-top-center')"
                type="button"
                class="btn btn bg-dark hover:bg-darkhover hover:shadow-btndark text-white mb-2 me-2"
                id="toastr-success-top-center"
              >
                Top Center
              </button>
              <button
                @click="notify('success-bottom-center')"
                type="button"
                class="btn btn bg-dark hover:bg-darkhover hover:shadow-btndark text-white mb-2 me-2"
                id="toastr-success-bottom-center"
              >
                Bottom Center
              </button>
              <button @click="notify('info')" type="button" class="btn btn bg-info hover:bg-infohover hover:shadow-btninfo text-white mb-2 me-2" id="toastr-info-top-right">
                Info
              </button>
              <button
                @click="notify('warning')"
                type="button"
                class="btn btn bg-warning hover:bg-warninghover hover:shadow-btnwarning text-white mb-2 me-2"
                id="toastr-warning-top-right"
              >
                Warning
              </button>
              <button
                @click="notify('error')"
                type="button"
                class="btn btn bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white mb-2 me-2"
                id="toastr-danger-top-right"
              >
                Error
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// @ts-ignore
import { toast } from "vue3-toastify";

export default defineComponent({
  name: "toast_",
  components: {},
  setup() {
    const Toastr = ref<HTMLElement | null>(null);
    onMounted(() => {
      Toastr.value?.setAttribute("style", `height:${window.innerHeight - 66}px`);
    });
    return { Toastr };
  },
  methods: {
    notify(toastType: string) {
      switch (toastType) {
        case "top-right":
          toast("This is a success massege", {
            autoClose: 1000,
            position: toast.POSITION.TOP_RIGHT,
          });
          break;
        case "bottom-right":
          toast("This is a success massege", {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_RIGHT,
          });
          break;
        case "bottom-left":
          toast("This is a success massege", {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_LEFT,
          });
          break;
        case "top-left":
          toast("This is a success massege", {
            autoClose: 1000,
            position: toast.POSITION.TOP_LEFT,
          });
          break;
        case "full-width":
          toast("This is a success massege", {
            autoClose: 1000,
            position: toast.POSITION.TOP_CENTER,
          });
          break;
        case "bottom-full-width":
          toast("This is a success massege", {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          break;
        case "success-top-center":
          toast("This is a success massege", {
            autoClose: 1000,
            position: toast.POSITION.TOP_CENTER,
          });
          break;
        case "success-bottom-center":
          toast("This is a success massege", {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_CENTER,
          });
          break;
        case "info":
          toast.info("This is a info massege", {
            autoClose: 1000,
          });
          break;
        case "warning":
          toast.warning("This is a warning massege", {
            autoClose: 1000,
          });
          break;
        case "error":
          toast.error("This is a error massege", {
            autoClose: 1000,
          });
          break;
        default:
          break;
      }
    },
  },
});
</script>
