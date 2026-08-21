<script lang="ts" setup>
import { Collapse } from "vue-collapsed";
import OptionSelect from "~/components/OptionSelect.vue";
import bgImg from "~/assets/images/no-img-avatar.png";
// @ts-ignore
import Flatpickr from "vue-flatpickr-component";

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

const bgPick = ref(bgImg);

function imgpickHandler(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    bgPick.value = URL.createObjectURL(target.files[0]);
  }
}

const date = ref(new Date());

const configDatepick = ref({
  inline: false,
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
  enableTime: false,
});

const expanded = ref({
  open1: false,
  open2: true,
  open3: true,
  open4: true,
  open5: true,
  open6: true,
  open7: true,
  open8: true,
  open9: true,
  open10: true,
});

const childDropdown = reactive({
  show1: false,
  show2: false,
  show3: false,
});
const overflow = ref(false);
</script>

<template>
  <div class="content-body">
    <div class="container">
      <div class="row">
        <div class="w-full accordion-wrapper">
          <div class="mb-6" x-data="{expanded:false}">
            <div>
              <NuxtLink to="/add-email" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Content List</NuxtLink >{{ " " }}
              <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white" @click="expanded.open1 = !expanded.open1"> Screen Option </a>
            </div>

            <Collapse :when="expanded.open1">
              <div class="bg-card border border-primary p-6 pb-4 max-sm:py-5 max-sm:px-2 mb-4 mt-6 rounded-lg">
                <div class="row">
                  <h6 class="mb-4">Show on screen</h6>
                  <div class="xl:w-1/6 lg:w-1/4 sm:w-1/3 w-full">
                    <div class="form-check custom-checkbox !mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-1" />
                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold whitespace-nowrap" for="flexCheckDefault-1"> Page Attributes </label>
                    </div>
                  </div>
                  <div class="xl:w-1/6 lg:w-1/4 sm:w-1/3 w-full">
                    <div class="form-check custom-checkbox !mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-2" />
                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold whitespace-nowrap" for="flexCheckDefault-2"> Featured Image </label>
                    </div>
                  </div>
                  <div class="xl:w-1/6 lg:w-1/4 sm:w-1/3 w-full">
                    <div class="form-check custom-checkbox !mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-3" />
                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold" for="flexCheckDefault-3"> Excerpt </label>
                    </div>
                  </div>
                  <div class="xl:w-1/6 lg:w-1/4 sm:w-1/3 w-full">
                    <div class="form-check custom-checkbox !mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-4" />
                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold whitespace-nowrap" for="flexCheckDefault-4"> Custom Fields </label>
                    </div>
                  </div>
                  <div class="xl:w-1/6 lg:w-1/4 sm:w-1/3 w-full">
                    <div class="form-check custom-checkbox !mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-5" />
                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold whitespace-nowrap" for="flexCheckDefault-5"> Discussion </label>
                    </div>
                  </div>
                  <div class="xl:w-1/6 lg:w-1/4 sm:w-1/3 w-full">
                    <div class="form-check custom-checkbox !mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-6" />
                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold whitespace-nowrap" for="flexCheckDefault-6"> Slug </label>
                    </div>
                  </div>
                  <div class="xl:w-1/6 lg:w-1/4 sm:w-1/3 w-full">
                    <div class="form-check custom-checkbox !mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-7" />
                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold" for="flexCheckDefault-7"> Author </label>
                    </div>
                  </div>
                  <div class="xl:w-1/6 lg:w-1/4 sm:w-1/3 w-full">
                    <div class="form-check custom-checkbox !mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-8" />
                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold" for="flexCheckDefault-8"> Page Type </label>
                    </div>
                  </div>
                  <div class="xl:w-1/6 lg:w-1/4 sm:w-1/3 w-full">
                    <div class="form-check custom-checkbox !mb-4">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-9" />
                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold" for="flexCheckDefault-9"> Seo </label>
                    </div>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
          <div class="row">
            <div class="xl:w-2/3">
              <div class="card !h-auto">
                <div class="sm:p-5 p-4">
                  <div class="mb-4">
                    <label class="form-label text-secondary">Title</label>
                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent" placeholder="Title" />
                  </div>

                  <label class="form-label text-secondary">Description</label>
                  <div id="ckeditor">
                    <Editor :editor="TypeEditor" :config="config" />
                  </div>
                </div>
              </div>

              <div class="shadow-default rounded-lg mb-4 bg-card">
                <div class="content-title flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.open2 = !expanded.open2">
                  <div class="cpa text-base font-semibold">Custom Fields</div>
                  <div class="tools">
                    <a href="javascript:void(0);" class="inline-block">
                      <span :class="expanded.open2 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                    </a>
                  </div>
                </div>
                <Collapse :when="expanded.open2">
                  <div class="sm:p-5 p-4 border-t border-border">
                    <h6 class="mb-2">Add New Custom Field:</h6>
                    <div class="row">
                      <div class="sm:w-1/2 w-full">
                        <div class="mb-4">
                          <label class="form-label text-secondary">Title</label>
                          <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent" placeholder="Title" />
                        </div>
                      </div>
                      <div class="sm:w-1/2 w-full">
                        <label class="form-label text-secondary">Value</label>
                        <textarea class="py-1.5 px-3 h-auto border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent resize-y" rows="2"></textarea>
                      </div>
                    </div>
                    <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mt-4 sm:mt-0">Add Custom Field</button>
                    <span class="mt-4 block text-[#7e7e7ebf]">Custom fields can be used to extra metadata to a post that you can use in your theme.</span>
                  </div>
                </Collapse>
              </div>
              <div class="shadow-default rounded-lg mb-4 bg-card">
                <div class="content-title flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.open3 = !expanded.open3">
                  <div class="cpa text-base font-semibold">Discussion</div>
                  <div class="tools">
                    <a href="javascript:void(0);" class="inline-block">
                      <span :class="expanded.open3 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                    </a>
                  </div>
                </div>
                <Collapse :when="expanded.open3">
                  <div class="sm:p-5 p-4 border-t border-border">
                    <div class="form-check custom-checkbox">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-15" />
                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold" for="flexCheckDefault-15"> Allow comments. </label>
                    </div>
                  </div>
                </Collapse>
              </div>
              <div class="shadow-default rounded-lg mb-4 bg-card">
                <div class="content-title flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.open4 = !expanded.open4">
                  <div class="cpa text-base font-semibold">Slug</div>
                  <div class="tools">
                    <a href="javascript:void(0);" class="inline-block">
                      <span :class="expanded.open4 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                    </a>
                  </div>
                </div>
                <Collapse :when="expanded.open4">
                  <div class="sm:p-5 p-4 border-t border-border">
                    <label class="form-label text-secondary">Slug</label>
                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent" />
                  </div>
                </Collapse>
              </div>
              <div class="shadow-default rounded-lg mb-4 bg-card">
                <div class="content-title flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.open5 = !expanded.open5">
                  <div class="cpa text-base font-semibold">Author</div>
                  <div class="tools">
                    <a href="javascript:void(0);" class="inline-block">
                      <span :class="expanded.open5 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                    </a>
                  </div>
                </div>
                <Collapse :when="expanded.open5">
                  <div class="sm:p-5 p-4 border-t border-border" @click="overflow = true">
                    <label class="form-label text-secondary">User</label>
                    <OptionSelect
                      class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999]  nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                      :options="[{ lable: 'admin@gmail.com' }, { lable: 'India' }, { lable: 'Information' }, { lable: 'New Menu' }, { lable: 'Page Menu' }]"
                    />
                  </div>
                </Collapse>
              </div>
              <div class="shadow-default rounded-lg mb-4 bg-card" x-data="{expanded:true}">
                <div class="content-title flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.open6 = !expanded.open6">
                  <div class="cpa text-base font-semibold">Seo</div>
                  <div class="tools">
                    <a href="javascript:void(0);" class="inline-block">
                      <span :class="expanded.open6 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                    </a>
                  </div>
                </div>
                <Collapse :when="expanded.open6">
                  <div class="sm:p-5 p-4 border-t border-border">
                    <label class="form-label text-secondary">Page Title</label>
                    <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent mb-4" placeholder="Page title" />
                    <div class="row">
                      <div class="sm:w-1/2 w-full">
                        <label class="form-label text-secondary">Keywords</label>
                        <input
                          type="text"
                          class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent sm:mb-0 mb-4"
                          placeholder="Enter meta Keywords"
                        />
                      </div>
                      <div class="sm:w-1/2 w-full">
                        <label class="form-label text-secondary">Descriptions</label>
                        <textarea
                          class="relative bg-transparent !h-auto min-h-auto border border-border block rounded-lg p-3 duration-500 focus:border-primary w-full resize-y"
                          placeholder="Enter meta Keywords"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </div>
            <div class="xl:w-1/3">
              <div class="sticky mb-6 top-29">
                <div class="shadow-default rounded-lg mb-4 bg-card">
                  <div class="content-title flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.open7 = !expanded.open7">
                    <div class="cpa text-base font-semibold">Published</div>
                    <div class="tools">
                      <a href="javascript:void(0);" class="inline-block">
                        <span :class="expanded.open7 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                      </a>
                    </div>
                  </div>
                  <Collapse :when="expanded.open7">
                    <div class="sm:p-5 p-4 sm:py-4 py-4 border-t border-border">
                      <ul>
                        <li x-data="{expanded:false, overflow : false}" class="mb-2 py-2.5 rounded-lg border-dashed border-b border-border">
                          <div>
                            <label class="form-label mb-0 mr-2">
                              <i class="fa-solid fa-key"></i>
                              Status:
                            </label>
                            <strong><a href="javascript:void(0);" class="font-medium">Published</a></strong>
                            <a href="javascript:void(0);" class="badge text-primary bg-primarylight ml-4" @click="childDropdown.show1 = !childDropdown.show1">Edit</a>
                          </div>
                          <Collapse :when="childDropdown.show1">
                            <div class="p-4 mt-4 border-border border rounded-lg">
                              <div class="mb-2" @click="overflow = true">
                                <label class="from-label w-full">Content Type</label>
                                <OptionSelect
                                  class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999]  nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                                  :options="[{ lable: 'Select Status' }, { lable: 'Published' }, { lable: 'Draft' }, { lable: 'Trash' }, { lable: 'Private' }, { lable: 'Pending' }]"
                                />
                              </div>
                              <div class="mt-4">
                                <button class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mr-2">Ok</button>
                                <button class="btn btn-sm text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white">Cancel</button>
                              </div>
                            </div>
                          </Collapse>
                        </li>
                        <li x-data="{expanded:false}" class="mb-2 py-2.5 rounded-lg border-dashed border-b border-border">
                          <div>
                            <label class="form-label mb-0 mr-2">
                              <i class="fa-solid fa-eye"></i>
                              Visible:
                            </label>
                            <strong><a href="javascript:void(0);" class="font-medium">Public</a></strong>
                            <a href="javascript:void(0);" class="badge text-primary bg-primarylight ml-4" @click="childDropdown.show2 = !childDropdown.show2">Edit</a>
                          </div>
                          <Collapse :when="childDropdown.show2">
                            <div class="p-4 mt-4 border-border border rounded-lg">
                              <div class="basic-form">
                                <form>
                                  <div class="mb-4">
                                    <div class="radio">
                                      <input type="radio" name="optradio" class="form-check-input" />
                                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold">Public</label>
                                    </div>
                                    <div class="radio">
                                      <input type="radio" name="optradio" class="form-check-input" />
                                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold">Password Protected</label>
                                    </div>
                                    <div class="radio disabled">
                                      <input type="radio" name="optradio" class="form-check-input" />
                                      <label class="form-check-label ml-1.1 mt-0.5 font-semibold">Private</label>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div>
                                <button class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mr-2">Ok</button>
                                <button class="btn btn-sm text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white">Cancel</button>
                              </div>
                            </div>
                          </Collapse>
                        </li>
                        <li class="mb-2 py-2.5 rounded-lg">
                          <div>
                            <label class="form-label mb-0 mr-2">
                              <i class="fa-solid fa-calendar-days"></i>
                              Published
                            </label>
                            <strong><a href="javascript:void(0);" class="font-medium">on :24-09-2024 16:22:52 </a></strong>
                            <a href="javascript:void(0);" class="badge text-primary bg-primarylight ml-4" @click="childDropdown.show3 = !childDropdown.show3">Edit</a>
                          </div>
                          <Collapse :when="childDropdown.show3">
                            <div class="p-4 mt-4 border-border border rounded-lg">
                              <div class="basic-form mb-2 relative">
                                <Flatpickr
                                  v-model="date"
                                  :config="configDatepick"
                                  placeholder="Select date"
                                  name="flatpickr"
                                  class="flatpickr py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent"
                                />
                                <i class="fa-regular fa-calendar absolute right-3.6 bottom-3.6"></i>
                              </div>
                              <div class="mt-4">
                                <button class="btn btn-sm bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mr-2">Ok</button>
                                <button class="btn btn-sm text-danger bg-dangerlight border-dangerlight hover:bg-danger hover:shadow-btndanger hover:text-white">Cancel</button>
                              </div>
                            </div>
                          </Collapse>
                        </li>
                      </ul>
                    </div>
                    <div class="card-footer border-t border-border sm:px-5 sm:py-4 px-4 py-5 text-end">
                      <a href="javascript:void(0);" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white m">Publish</a>
                    </div>
                  </Collapse>
                </div>
                <div class="shadow-default rounded-lg mb-4 bg-card" x-data="{expanded:true,overflow:false}">
                  <div
                    class="content-title flex justify-between items-center py-4 sm:px-6 px-[1.2rem]"
                    @click="
                      expanded.open8 = !expanded.open8;
                      overflow = false;
                    "
                  >
                    <div class="cpa text-base font-semibold">Page Attributes</div>
                    <div class="tools">
                      <a href="javascript:void(0);" class="inline-block">
                        <span :class="expanded.open8 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                      </a>
                    </div>
                  </div>
                  <Collapse :when="expanded.open8">
                    <div class="sm:p-5 p-4 border-t border-border" @click="overflow = true">
                      <label class="form-label block">Title</label>
                      <OptionSelect
                        class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999]  nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                        :options="[
                          { lable: '(No Parent)' },
                          { lable: 'Privacy Policy' },
                          { lable: 'Contact Us' },
                          { lable: 'Important Information' },
                          { lable: 'Free shipping' },
                          { lable: 'Daily Gifts' },
                          { lable: 'Blog' },
                          { lable: 'About Us' },
                          { lable: 'Dummy Co' },
                        ]"
                      />
                    </div>
                  </Collapse>
                </div>
                <div class="shadow-default rounded-lg mb-4 bg-card" x-data="{expanded:true,overflow:false}">
                  <div
                    class="content-title flex justify-between items-center py-4 sm:px-6 px-[1.2rem]"
                    @click="
                      expanded.open9 = !expanded.open9;
                      overflow = false;
                    "
                  >
                    <div class="cpa text-base font-semibold">Page Type</div>
                    <div class="tools">
                      <a href="javascript:void(0);" class="inline-block">
                        <span :class="expanded.open9 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                      </a>
                    </div>
                  </div>
                  <Collapse :when="expanded.open9">
                    <div @click="overflow = true" class="sm:p-5 p-4 border-t border-border">
                      <label class="from-label block">Content Type</label>
                      <OptionSelect
                        class-name="py-1.5 px-3 h-auto border border-border rounded-lg w-full duration-500 focus:border-[#999999]  nice-select form-control border-border inline-flex justify-between items-center wide bg-transparent float-none"
                        :options="[{ lable: 'Page' }, { lable: 'Widget' }]"
                      />
                    </div>
                  </Collapse>
                </div>
                <div class="shadow-default rounded-lg mb-4 bg-card" x-data="{expanded:true}">
                  <div class="content-title flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded.open10 = !expanded.open10">
                    <div class="cpa text-base font-semibold">Featured Image</div>
                    <div class="tools">
                      <a href="javascript:void(0);" class="inline-block">
                        <span :class="expanded.open10 && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                      </a>
                    </div>
                  </div>
                  <Collapse :when="expanded.open10">
                    <div class="sm:p-5 p-4 border-t border-border">
                      <div class="avatar-upload flex items-center">
                        <div class="relative">
                          <div class="avatar-preview border border-border p-2 mb-2.5 rounded-lg">
                            <div class="block w-full h-[7.5rem] bg-cover bg-no-repeat bg-center" id="imagePreview" :style="`background-image: url(${bgPick})`"></div>
                          </div>
                          <div class="change-btn flex items-center flex-wrap">
                            <input type="file" class="hidden" id="imageUpload" accept=".png, .jpg, .jpeg" @change="imgpickHandler" />
                            <label for="imageUpload" class="btn text-primary bg-primarylight hover:shadow-btnprimary mb-2">Select Image</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
