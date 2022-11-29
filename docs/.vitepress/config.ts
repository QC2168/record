import { defineConfig } from "vitepress";
import path from "path";
import { autoTagChildren } from "./autoSidebar";
export default defineConfig({
  title: "记录站",
  description: "欢迎来到我的站点",
  themeConfig: {
    logo: "./assets/avatar.jpg",
    siteTitle: false,
    sidebar: {
      "/article/": autoTagChildren(
        "article",
        path.join(__dirname, "../article")
      ),
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/article/index" },
      { text: "片段", link: "/snippets/index" },
      { text: "面试", link: "/interview/index" },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/QC2168' }
    ],
    lastUpdatedText:"更新时间",  },
});
