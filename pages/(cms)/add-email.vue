<script lang="ts" setup>
import { Collapse } from "vue-collapsed";

const expanded = ref(true);

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
</script>

<template>
  <div class="content-body">
    <div class="container">
      <div class="row">
        <div class="w-full">
          <NuxtLink to="/email-template" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white mb-6">List Email Template</NuxtLink>
        </div>
        <div class="w-full">
          <div class="shadow-default rounded-lg mb-4 bg-card">
            <div class="flex justify-between items-center py-4 sm:px-6 px-[1.2rem]" @click="expanded = !expanded">
              <div class="cpa text-base font-semibold"><i class="fa-solid fa-envelope mr-2"></i>Add Email Template</div>
              <div class="tools">
                <a href="javascript:void(0);" class="inline-block">
                  <span :class="expanded && '-rotate-180'" class="fas fa-chevron-down duration-300"></span>
                </a>
              </div>
            </div>
            <Collapse :when="expanded">
              <div class="sm:p-5 p-4 border-t border-border">
                <div class="row">
                  <div class="xl:w-1/2">
                    <form>
                      <div class="mb-4">
                        <label class="form-label">Title</label>
                        <input type="text" class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent" />
                        <div class="mt-1 text-xs text-[#6f767ebf]">Title should be meaning full like : registration email, forgot password email.</div>
                      </div>
                      <div class="mb-4">
                        <label class="form-label">Description</label>
                        <textarea class="py-1.5 px-3 !h-auto border border-border rounded-lg block w-full duration-500 focus:border-primary bg-transparent resize-y" rows="5"></textarea>
                        <div class="mt-1 text-xs text-[#6f767ebf]">Decribe about this email template.</div>
                      </div>
                    </form>
                  </div>
                  <div class="xl:w-1/2">
                    <div class="mb-4">
                      <label class="form-label">Slug</label>
                      <input class="py-1.5 px-3 h-11 border border-border rounded-lg block w-full bg-light" type="text" placeholder="Slug" aria-label="Disabled input example" disabled />
                      <div class="mt-1 text-xs text-[#6f767ebf]">slug will use for url. can't edited.</div>
                    </div>
                    <label class="form-label">placeholder</label>
                    <div class="new-scroll bg-[#eee] dark:bg-d-bg p-2.5 h-[150px] overflow-x-auto rounded-lg dz-scroll">
                      <div class="grid mb-4">
                        <h6 class="mb-0">User Configuration</h6>
                        <span>#USERNAME#: Username can display with this placeholder.</span>
                        <span>#USERNAME#: Username can display with this placeholder.</span>
                        <span>#LASTNAME#: Lastname can display with this placeholder.</span>
                        <span>#TELEPHONE#: Contact number can display with this placeholder.</span>
                        <span>#PASSWORD#: password can display with this placeholder.</span>
                        <span>#SITENAME#: Site name can display with this placeholder.</span>
                      </div>
                      <div class="grid mb-4">
                        <h6 class="mb-0">Config Configuration</h6>
                        <span>#SITENAME#: Site name can display with this placeholder.</span>
                        <span>#ADMINEMAIL#: Admin email can display with this placeholder.</span>
                        <span>#SUPPORTEMAIL#: Support email can display with this placeholder.</span>
                        <span>#SITEADDRESS#: Site address can display with this placeholder.</span>
                      </div>
                      <div class="grid mb-4">
                        <h6>Generate Configuration</h6>
                        <span>#ACTIVATIONLINK#: Activation link can display with this placeholder.</span>
                        <span>#SITELOGO#: Site logo can display with this placeholder.</span>
                        <span>#LOGINLINK#: Login link can display with this placeholder.</span>
                        <span>#REGESTERLINK#: Registration link can display with this placeholder.</span>
                        <span>#REGESTERLINK#: Registration link can display with this placeholder.</span>
                      </div>
                      <div class="grid mb-4">
                        <h6>Contact Configuration</h6>
                        <span>#NAME#: Contact user name can display with this placeholder.</span>
                        <span>#EMAIL#: Contact user email can display with this placeholder.</span>
                        <span>#MESSAGE#: Contact user message can display with this placeholder.</span>
                      </div>
                      <div class="grid mb-4">
                        <h6>Subscribe Configuration</h6>
                        <span>#USERNAME#: Subscribe user email can display with this placeholder.</span>
                      </div>
                      <div class="grid mb-4">
                        <h6>Order Configuration</h6>
                        <span>#STATUS#: Order Status can display with this placeholder.</span>
                        <span>#FIRSTNAME#: User first name can display with this placeholder.</span>
                        <span>#LASTNAME#: User last name can display with this placeholder.</span>
                        <span>#MESSAGE#: Delivery details or expected deliery date. This message will deliver to customer.</span>
                        <span>#ID#: Order number can display with this placeholder.</span>
                      </div>
                    </div>
                  </div>
                  <div class="w-full">
                    <label class="form-label mt-3 xl:mt-0">Email Template</label>
                    <div class="custom-ekeditor mb-4">
                      <div id="ckeditor">
                        <Editor :editor="TypeEditor" :config="config" />
                      </div>
                    </div>
                    <div class="mt-1 text-xs text-[#6f767ebf] mb-4">This design will show in recieved email and place holders will replace with dynamic content.</div>
                  </div>
                  <label class="form-label">Status</label>
                  <ul class="flex items-center mb-4">
                    <li>
                      <div class="form-check custom-checkbox mb-2">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label class="ml-1.1 mt-[0.113rem]" for="flexCheckDefault"></label>
                      </div>
                    </li>
                    <li>Active status template will use in email sending only.</li>
                  </ul>
                  <div class="text-right">
                    <button type="button" class="btn bg-primary hover:bg-primaryhover hover:shadow-btnprimary text-white">Save Email Template</button>
                  </div>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
