
import Inspect from 'vite-plugin-inspect'
import { defineConfig } from "vitepress";
import { scanMdToCreateSidebarGroup } from "./createSidebarGroup";
import sidebarPlugin from "./sidebar";

const path = require('path')

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/record/" : "",
  vite:{
    build:{
      target:'modules'
    },
    plugins:[
      Inspect(),
      sidebarPlugin()
    ]
  },
  themeConfig: {
    siteTitle: false,
    outline:"deep",
    outlineTitle: '目录',
    sidebar: {
      "/article/":[
        {
          text: '文章目录',
          items:scanMdToCreateSidebarGroup(
            "article",
            path.join(__dirname, "../article"),
            true
          ),
        }
      ] ,
      "/interview/": scanMdToCreateSidebarGroup(
        "interview",
        path.join(__dirname, "../interview")
      ),
      "/log/":[
        {
          text: '随手一记',
          items:scanMdToCreateSidebarGroup(
            "log",
            path.join(__dirname, "../log"),
            true
          ),
        }
      ]
    },
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
  }
});
