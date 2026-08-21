<script lang="ts" setup>
import bg from "~/assets/images/no-img-avatar.png";
import CommonNav from "~/components/CommonNav.vue";
import OptionSelect from "~/components/OptionSelect.vue";
import Multiselect from "vue-multiselect";

const bgPicked = ref<string>(bg);
const Editor = ref<any>(null);
const TypeEditor = ref<any>(null);
const config = ref();

onMounted(async () => {
  const { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } = await import("ckeditor5");
  const { Ckeditor } = await import("@ckeditor/ckeditor5-vue");
  Editor.value = Ckeditor;
  TypeEditor.value = ClassicEditor;
  const editorConfig = {
    toolbar: ["undo", "redo", "|", "bold", "italic"],
    plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
  };
  config.value = editorConfig;
});

function pickImgHandler(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    bgPicked.value = URL.createObjectURL(target.files[0]);
  }
}

const value = ref([]);
</script>

<template>
  <div class="content-body">
    <CommonNav title="Ecommerce" name="Add Product" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="grid grid-cols-12 gap-x-6">
            <div class="xl:col-span-8 col-span-12">
              <div class="card !h-auto">
                <div class="sm:p-5 p-4">
                  <form>
                    <div class="mb-4">
                      <label class="form-label">Category Name <span class="text-danger">*</span></label>
                      <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent" placeholder="Food" />
                    </div>
                  </form>
                  <label class="form-label">Description</label>
                  <Editor :editor="TypeEditor" :config="config" />
                </div>
              </div>
              <div class="card !h-auto">
                <div class="sm:p-5 p-4">
                  <form>
                    <div class="mb-4">
                      <label class="form-label">Meta Tag Title <span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                        placeholder="Meta Tag Name"
                      />
                    </div>
                  </form>
                  <label class="form-label">Meta Tag Description</label>
                  <Editor :editor="TypeEditor" :config="config" />
                  <div class="mt-4">
                    <label class="form-label">Meta Tag Keywords <span class="text-danger">*</span></label>
                    <input
                      type="text"
                      class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                      placeholder="Meta Tag Keywords"
                    />
                  </div>
                </div>
              </div>
              <div class="card !h-auto">
                <div class="border-b border-border relative py-4 px-5">
                  <h4 class="text-base">Automation</h4>
                </div>
                <div class="sm:p-5 p-4">
                  <div class="row">
                    <div class="sm:w-1/2">
                      <div class="check-ai">
                        <div class="form-check relative !p-0">
                          <input class="form-check-input" type="radio" value="manual" name="automationSelect" id="ManualInput" checked />
                          <label class="form-check-label" for="ManualInput">
                            <span class="text-secondary block font-semibold sm:text-2sm mb-2">Manual</span>
                            <span class="font-semibold">Add products to this category one by one by manually selecting this category during product creation or update.</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="sm:w-1/2 sm:mt-0 mt-4">
                      <div class="check-ai">
                        <div class="form-check relative !p-0">
                          <input class="form-check-input" type="radio" value="automatic" name="automationSelect" id="AutomaticInput" />
                          <label class="form-check-label" for="AutomaticInput">
                            <span class="text-secondary block font-semibold sm:text-2sm mb-2">Automatic</span>
                            <span class="font-semibold">Add products to this category one by one by manually selecting this category during product creation or update.</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="w-full">
                      <div class="check-sub-bx mt-4" style="display: none">
                        <div class="row">
                          <div class="xl:w-1/4">
                            <div class="mb-4">
                              <label class="form-label">Product Tag <span class="text-danger">*</span></label>
                              <OptionSelect
                                class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                                :options="[{ lable: 'Product Title' }, { lable: 'Product Tag' }, { lable: 'Product Price' }]"
                              />
                            </div>
                          </div>
                          <div class="xl:w-1/4">
                            <div class="mb-4">
                              <label class="form-label">Product Margin <span class="text-danger">*</span></label>
                              <OptionSelect
                                class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                                :options="[{ lable: 'is less then' }, { lable: 'is equal to' }, { lable: 'is greater then' }]"
                              />
                            </div>
                          </div>
                          <div class="xl:w-1/4">
                            <div class="mb-4">
                              <label for="exampleFormControlInput1" class="form-label">Quntity <span class="text-danger">*</span></label>
                              <input
                                type="number"
                                class="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-primary bg-transparent"
                                id="exampleFormControlInput1"
                                placeholder="1"
                              />
                            </div>
                          </div>
                          <div class="xl:w-1/4 self-end">
                            <div class="mb-4">
                              <button class="btn btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white btn-sm" id="add-btn">
                                <i class="fa-solid fa-plus mr-4"></i>Add another condition
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:col-span-4 col-span-12">
              <div class="sticky top-29 mb-6">
                <div class="card !h-auto">
                  <div class="border-b border-border relative py-4 px-5 flex justify-between items-center flex-wrap">
                    <h4 class="text-base">Thumbnail</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <div class="avatar-upload flex items-center">
                      <div class="relative">
                        <div class="border border-border p-2 mb-2.5 rounded-lg">
                          <div
                            id="imagePreview"
                            class="inline-block relative object-cover bg-cover bg-no-repeat bg-center h-29 w-full"
                            :style="`background-image: url(${bgPicked})`"
                          ></div>
                        </div>
                        <div class="change-btn flex items-center flex-wrap">
                          <input type="file" class="form-control hidden" id="imageUpload" accept=".png, .jpg, .jpeg" @change="pickImgHandler" />
                          <label for="imageUpload" class="btn btn bg-primarylight hover:shadow-btnprimary text-primary btn-sm">Select Image</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card !h-auto">
                  <div class="border-b border-border relative py-4 px-5 flex justify-between items-center flex-wrap">
                    <h4 class="text-base">Tag</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <Multiselect class="select2-hidden-accessible" :options="['orange', 'purple']" :searchable="true" :multiple="true" v-model="value" />
                  </div>
                </div>

                <div class="card !h-auto">
                  <div class="border-b border-border relative py-4 px-5 flex justify-between items-center flex-wrap">
                    <h4 class="text-base">Status</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <label class="form-label">Status Type</label>

                    <OptionSelect
                      class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                      :options="[{ lable: 'Published' }, { lable: 'Scheduled' }]"
                    />
                  </div>
                </div>
                <div class="card !h-auto">
                  <div class="border-b border-border relative py-4 px-5 flex justify-between items-center flex-wrap">
                    <h4 class="text-base">Product Template</h4>
                  </div>
                  <div class="sm:p-5 p-4">
                    <label class="form-label">Select a store template</label>
                    <OptionSelect
                      class-name="py-1.5 px-3 h-11 border border-border rounded-lg w-full duration-500 focus:border-[#999999] nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                      :options="[{ lable: 'Electronics' }, { lable: 'Office stationary' }, { lable: 'Fashion' }]"
                    />
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
