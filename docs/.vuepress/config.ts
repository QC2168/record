
import { defineConfig4CustomTheme } from "vuepress/config";
import type { recoTheme } from 'vuepress-theme-reco'
import getChildren from './autoSidebar'
import path from 'path'

export default defineConfig4CustomTheme<recoTheme>({
    theme: 'reco',
    chainWebpack(config, isServer) {
        // config 是一个 ChainableConfig 的实例
        config.node.set('node', true)
        config.node.set('process', true)
    },

    themeConfig: {
        navbar: true,
        sidebar: {
            "/article/": [{
                title: '文章列表',   // 必要的
                path: '/article/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: getChildren(path.join(__dirname, '../article'), 'article')

            },]
        },
        // sidebar: [
        //     {
        //         title: '欢迎学习',
        //         path: '/',
        //         collapsable: false, // 不折叠
        //         children: [
        //             { title: "学前必读", path: "/" }
        //         ]
        //     },
        //     {
        //       title: "基础学习",
        //       path: '/handbook/ConditionalTypes',
        //       collapsable: false, // 不折叠
        //       children: [
        //         { title: "条件类型", path: "/handbook/ConditionalTypes" },
        //         { title: "泛型", path: "/handbook/Generics" }
        //       ],
        //     }
        //   ],
        // 404 腾讯公益
        noFoundPageByTencent: false,
        nav: [
            { text: '首页', link: '/' },
            { text: '文章', link: '/article/' },
            {
                text: '笔记',
                items: [
                    { text: 'javascript', link: 'note/JavaScript/index' }
                ]
            }
        ]
    }
});