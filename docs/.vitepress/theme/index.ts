import DefaultTheme from "vitepress/theme";
import MyLayout from "./MyLayout.vue";
import List from "./List.vue"
import 'uno.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app }) {
    app.component("List", List);
  },
};
