import { h, defineComponent, onMounted, ref } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

export default defineComponent({
  props: {
    code: {
      type: String,
      required: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots, attrs }) {
    // Ref to hold the processed code
    const highlightedCode = ref("");

    const defaultSlot = (slots && slots.default && slots.default()) || [];
    const code = props.code || (defaultSlot && defaultSlot.length && defaultSlot[0]?.children) || "";
    const inline = props.inline;
    const language = "javascript";
    const className = `language-${language}`;

    // Prism.js language setup
    const prismLanguage = Prism.languages[language];

    // Highlight code only on the client
    onMounted(() => {
      if (prismLanguage) {
        highlightedCode.value = Prism.highlight(code, prismLanguage, language);
      } else if (process.env.NODE_ENV === "development") {
        console.error(`Prism component for language "${language}" not found. Did you forget to include it?`);
      }
    });

    // Render function
    return () => {
      if (inline) {
        return h("code", {
          class: [className],
          innerHTML: highlightedCode.value,
        });
      }

      return h(
        "pre",
        {
          ...attrs,
          class: [attrs.class, className],
        },
        [
          h("code", {
            ...attrs,
            class: [attrs.class, className],
            innerHTML: highlightedCode.value,
          }),
        ]
      );
    };
  },
});
