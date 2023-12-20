import { defineConfig } from "vitepress";
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/record/" : "",
  vite:{
    build:{
      target:'modules'
    },
    plugins:[
      // @ts-ignore
      AutoSidebar({
        ignoreIndexItem : true
      }),
      // @ts-ignore
      UnoCSS(),
    ]
  },
  themeConfig: {
    siteTitle: false,
    outline:"deep",
    outlineTitle: '目录',
    nav: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/article/index" },
      { text: "代码片段", link: "/snippets/index" },
      {
        text: '面试',
        items: [
          { text: '面试题', link: '/interview/index' },
          { text: '手写题', link: '/interview/jsCode/index' },
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/QC2168/record/edit/main/docs/:path',
      text: '编辑此页内容'
    },
    socialLinks: [{ icon: "github", link: "https://github.com/QC2168" }],
    lastUpdatedText: "更新时间",
  },
  markdown: {
    config: async (md) => {
      const taskListsModule = await import("markdown-it-task-lists");
      md.use(taskListsModule.default);
    },
  },
});
