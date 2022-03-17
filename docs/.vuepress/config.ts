import {defineUserConfig} from 'vuepress';
import type {DefaultThemeOptions} from 'vuepress';
import Glob from 'glob';

interface MdType {
    link: string
    text: string
}

const getMd = (globPath: string) => {
    const result = []
    Glob.sync(`${globPath}.md`).forEach((md: string) => {
        result.push(md)
        // const text: string = path.basename(entry, path.extname(entry));
        // const pathname: string = path.dirname(entry);
        // entries[basename] = `${pathname}/${basename}`;
    });
    console.log(result)
    return result;
}

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'en-US',
    title: 'DIV记录站',
    description: '珍惜时间可以使生命变的更有价值',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        serviceWorker: {
            updatePopup: {
                // 刷新内容的弹窗
                message: '发现新内容',
                buttonText: '刷新'
            }
        },
        lastUpdated: true,
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            {
                text: '前端',
                children: [{
                    text: 'JS进阶',
                    link: '/note/JavaScript/'
                }],
            },
            {
                text: '文章',
                link: '/article/'
            },
        ],
        sidebar: {
            '/note/JavaScript/': [
                {
                    text: 'JavaScript进阶1',
                    collapsible: true,
                    children: ['JavaScript进阶.html',],
                },
            ],
            '/article/': ['2022年了你还不知道pnpm么.md', 'class.md', 'CSS按钮进度条.md', 'CSS涟漪按钮.md', 'ES10.md', 'ES6新增数据结构.md', 'ES6 知识点.md', 'ES7.md', 'ES8.md', 'GIT commit提交规范.md', 'JavaScript的this指向什么.md', 'ni.md', 'proxy和reflect.md', 'react中使用map.md', 'readme.md', 'ts封装网络请求.md', 'Vue3组件封装.md', 'webpack多页面自动引入.md', 'webpack项目优化.md', '写一个可视化代码占比页面.md', '学习promise.md', '微任务和宏任务.md', '快速认识下package.json.md', '手写promise.md',  '柯里化.md', '纯函数.md', '组合函数.md'],
        },
    },
});
