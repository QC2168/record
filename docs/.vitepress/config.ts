import { defineConfig } from "vitepress";
import path from "path";
import { autoTagChildren } from "./autoSidebar";
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/record/" : "",
  themeConfig: {
    siteTitle: false,
    sidebar: {
      "/article/": autoTagChildren(
        "article",
        path.join(__dirname, "../article")
      ),
      "/interview/": [...autoTagChildren(
        "interview",
        path.join(__dirname, "../interview")
      ),...autoTagChildren(
        "interview/jsCode",
        path.join(__dirname, "../interview/jsCode")
      )]
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/article/index" },
      { text: "片段", link: "/snippets/index" },
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
});
