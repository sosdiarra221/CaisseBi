<template>
  <div class="content-body" ref="SweetAlert">
    <CommonNav title="Sweet Alert" name="Sweet Alert" />
    <div class="container">
      <div class="row">
        <div class="xl:w-1/4 col-xxl-4 lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet Wrong</h4>
              <div class="card-content">
                <div class="sweetalert">
                  <button @click="showAlert('wrong')" class="btn btn bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white sweet-wrong">Sweet Wrong</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /# column -->
        <div class="xl:w-1/4 col-xxl-4 lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet Message</h4>
              <div class="card-content">
                <div class="sweetalert">
                  <button @click="showAlert('message')" class="btn btn bg-info hover:bg-infohover hover:shadow-btninfo text-white sweet-message">Sweet Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /# column -->
        <div class="xl:w-1/4 col-xxl-4 lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet Text</h4>
              <div class="card-content">
                <div class="sweetalert">
                  <button @click="showAlert('text')" class="btn btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white sweet-text">Sweet Text</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /# column -->
        <div class="xl:w-1/4 col-xxl-4 lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet Success</h4>
              <div class="card-content">
                <div class="sweetalert">
                  <button @click="showAlert('success')" class="btn btn bg-success hover:bg-successhover hover:shadow-btnsuccess text-white sweet-success">Sweet Success</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /# column -->
        <div class="xl:w-1/4 col-xxl-4 lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet Confirm</h4>
              <div class="card-content">
                <div class="sweetalert">
                  <button @click="showAlert('confirm')" class="btn btn bg-warning hover:bg-warninghover hover:shadow-btnwarning text-white sweet-confirm">Sweet Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /# column -->
        <div class="xl:w-1/4 col-xxl-4 lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet Confirm Or Cancel</h4>
              <div class="card-content">
                <div class="sweetalert5">
                  <button @click="showAlert('cancel')" class="btn btn bg-warning hover:bg-warninghover hover:shadow-btnwarning text-white sweet-success-cancel">Sweet Confirm Or Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /# column -->
        <div class="xl:w-1/4 col-xxl-4 lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet Image Message</h4>
              <div class="card-content">
                <div class="sweetalert">
                  <button @click="showAlert('image-message')" class="btn btn bg-info hover:bg-infohover hover:shadow-btninfo text-white sweet-image-message">Sweet Image Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /# column -->
        <div class="xl:w-1/4 col-xxl-4 lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet HTML</h4>
              <div class="card-content">
                <div class="sweetalert">
                  <button @click="showAlert('html')" class="btn btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white sweet-html">Sweet HTML</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /# column -->
        <div class="lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet Auto Close</h4>
              <div class="card-content">
                <div class="sweetalert">
                  <button @click="showAlert('auto')" class="btn btn bg-danger hover:bg-dangerhover hover:shadow-btndanger text-white sweet-auto">Sweet Auto btn-close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /# column -->
        <div class="lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet Prompt</h4>
              <div class="card-content">
                <div class="sweetalert">
                  <button @click="showAlert('prompt')" class="btn btn bg-success hover:bg-successhover hover:shadow-btnsuccess text-white sweet-prompt">Sweet Prompt</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /# column -->
        <div class="lg:w-1/3 md:w-1/2">
          <div class="card">
            <div class="sm:p-5 p-4">
              <h4 class="text-base mb-2">Sweet Ajax</h4>
              <div class="card-content"></div>
              <div class="sweetalert">
                <button @click="showAlert('ajax')" class="btn btn bg-info hover:bg-infohover hover:shadow-btninfo text-white sweet-ajax">Sweet Ajax</button>
              </div>
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
import Swal from "sweetalert2";
// import IMAGE from "@/constent/Theme";

export default defineComponent({
  name: "sweetalerts_",
  components: {},
  setup() {
    const SweetAlert = ref<HTMLElement | null>(null);
    onMounted(() => {
      SweetAlert.value?.setAttribute("style", `height:${window.innerHeight - 66}px`);
    });
    return { SweetAlert };
  },
  methods: {
    showAlert(value: string) {
      switch (value) {
        case "wrong":
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong !!",
          });
          break;
        case "message":
          Swal.fire("Hey, Here s a message !!");
          break;
        case "text":
          Swal.fire({
            title: "Hey, Here s a message !!",
            text: "It s pretty, isn t it?",
          });
          break;
        case "success":
          Swal.fire({
            icon: "success",
            title: "Success Alert",
            text: "This is a success alert.",
          });
          break;
        case "confirm":
          Swal.fire({
            icon: "warning",
            title: "Are you sure to delete ?",
            text: "You will not be able to recover this imaginary file !!",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            showCancelButton: true,
          });
          break;
        case "cancel":
          Swal.fire({
            icon: "warning",
            title: "Are you sure to delete ?",
            text: "You will not be able to recover this imaginary file !!",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            showCancelButton: true,
          });
          break;
        case "image-message":
          Swal.fire({
            // imageUrl: IMAGE.imageHand,
            title: "Sweet !!",
            text: "true",
          });
          break;
        case "html":
          Swal.fire({
            title: "Sweet !!",
            text: "true",
          });
          break;
        case "auto":
          Swal.fire({
            title: "Sweet auto close alert !!",
            text: "Hey, i will close in 2 seconds !!",
          });
          setTimeout(() => {
            Swal.close();
          }, 2000);
          break;

        case "prompt":
          Swal.fire({
            title: "Enter an input !!",
            text: "Write something interesting !!",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            showCancelButton: true,
          });
          break;
        case "ajax":
          Swal.fire({
            icon: "warning",
            title: "Sweet ajax request !!",
            text: "Submit to run ajax request !!",
            confirmButtonText: "Ok",
            cancelButtonText: "Cancel",
            showCancelButton: true,
          });
          break;
        default:
          break;
      }
    },
  },
});
</script>
<style>
.swal2-image {
  width: 20% !important;
}
</style>
