import { defineConfig } from 'vitepress'
import getChildren from "./autoSidebar";
import path from "path";

export default defineConfig({
  title: "记录站",
  description: "欢迎来到我的站点",
  themeConfig: {
    logo: "./assets/avatar.jpg",
    siteTitle: false,
    sidebar: {
      "/article/": [
        {
          text: "文章列表", // 必要的
          items: getChildren(path.join(__dirname, "../article"), "article"),
        },
      ],
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/article" },
      { text: "片段", link: "/snippet" },
      { text: "面试", link: "/interview" },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/QC2168' }
    ],
    lastUpdatedText:"更新时间",
  },
});
