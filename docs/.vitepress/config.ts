import { defineConfigWithTheme, DefaultTheme } from "vitepress";
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import UnoCSS from 'unocss/vite'
import { getPosts } from "./theme/utils";

export interface PostItem {
  frontMatter: any
  regularPath: string
}
interface ThemeExtends extends DefaultTheme.Config {
  post: PostItem[]
}

export default defineConfigWithTheme<ThemeExtends>({
  title:'_island Record',
  lang: 'zh-CN',
  description: '哈喽，这是_island的记录小站',
  head: [['link', { rel: 'icon', href: 'avatar.png' }]],
  vite: {
    build: {
      target: 'modules'
    },
    plugins: [
      // @ts-ignore
      AutoSidebar({
        ignoreIndexItem: true
      }),
      // @ts-ignore
      UnoCSS(),
    ]
  },
  themeConfig: {
    post: await getPosts(),
    outline: false,
    outlineTitle: '目录',
    logo:"avatar.png",
    docFooter: {
      prev: false,
      next: false,
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
    lastUpdatedText: "最后更新时间",
  },
  markdown: {
    config: async (md) => {
      const taskListsModule = await import("markdown-it-task-lists");
      md.use(taskListsModule.default);
    },
  },
});
