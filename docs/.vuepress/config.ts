import { defineConfig4CustomTheme } from "vuepress/config";
import getChildren from "./autoSidebar";
import path from "path";

export default defineConfig4CustomTheme({
  base: "/record/",
  theme: "reco",
  host: "localhost",
  chainWebpack(config) {
    // config 是一个 ChainableConfig 的实例
    config.node.set("node", true);
    config.node.set("process", true);
  },

  themeConfig: {
    navbar: true,
    logo: "/assets/avatar.jpg",
    authorAvatar: "/assets/avatar.jpg",
    author: "_island",
    // 404 腾讯公益
    noFoundPageByTencent: false,
    sidebar: {
      "/article/": [
        {
          title: "文章列表", // 必要的
          path: "/article/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: getChildren(path.join(__dirname, "../article"), "article"),
        },
      ],
    },

    nav: [
      { text: "首页", link: "/" },
      { text: "文章", link: "/article/" },
      { text: "片段", link: "/snippet/" },
      { text: "面试", link: "/interview/" },
      {
        text: "关于",
        items: [
          {
            text: "掘金",
            link: "https://juejin.cn/user/2858385965322935/posts",
            icon: "reco-juejin",
          },
          {
            text: "GITHUB",
            link: "https://github.com/QC2168",
            icon: "reco-github",
          },
        ],
      },
    ],
  },
});
