<script lang="ts" setup>
import CommonNav from "~/components/CommonNav.vue";

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
  <div class="content-body default-height">
    <CommonNav title="CkEditor" name="CkEditor" />
    <div class="container">
      <div class="row">
        <div class="w-full">
          <div class="card">
            <div class="border-b border-border relative py-4.5 px-5 flex justify-between items-center flex-wrap">
              <h4 class="text-base">Form CkEditor</h4>
            </div>
            <div class="sm:p-5 p-4 custom-ekeditor">
              <div id="ckeditor">
                <Editor :editor="TypeEditor" :config="config" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
