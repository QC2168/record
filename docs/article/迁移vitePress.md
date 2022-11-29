## vuepress1.x迁移vitepress

## 随便写点

# 移除vuepress
```bash
pnpm remove vuepress -D
```
# 安装vitepress
```bash
pnpm add vuepress vue@latest -D
```
> 踩了个坑，这里需要`vue@latest`升级到vue3.x版本，因为之前使用的vuepress是基于vue2.x版本的，否则到时候跑项目会报错！

将原本`docs`文件夹下的`.vuepress`重命名为`.vitepress`

```typescript

```

# 配置文件参数调整

`sidebar`中的`title`修改为`text`，子集`children`改成`items`
```typescript
// vuepress
sidebar: {
     "/article/": [
       {
         title: "文章列表",
         children: getChildren(path.join(__dirname, "../article"), "article"),
       },
     ],
   },
// vitepress
sidebar: {
  "/article/": [
    {
      text: "文章列表", // 必要的
      items: getChildren(path.join(__dirname, "../article"), "article"),
    },
  ],
},
```
> 这里的getChildren函数是我之前写的读取目录下所有`*.md`文件并生成一个个对象，提供给`items`属性。


# 给文章添加分类

随着文章越写越多，也没有进行分类，导致了找起来有点困难。

研究了一下，这里需要扩展下vitepress提供的默认主题

在`docs/.vitepress`中创建theme文件夹，并新建一个index.js和MyLayout.vue文件（和平时我们写`vue3`一样）。

```js
// docs/.vitepress/theme/index.js
// 导入默认主题
import DefaultTheme from "vitepress/theme";
// 引入我们布局
import MyLayout from "./MyLayout.vue";
export default {
  ...DefaultTheme,
  Layout: MyLayout,
};

```
同时vitepress也给开发者提供了一些钩子，和插槽。

这里使用`doc-before`插槽，也就在正文前面渲染指定的内容。

```vue
<!--  -->
<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
const data = useData();
const { Layout } = DefaultTheme;
// 通过tags属性,获取文章标签
const { frontmatter } = data;
</script>

<template>
  <Layout>
    <template #doc-before>
      <div>
        📁 标签
          <span class="tag" v-for="item in frontmatter.tags" :key="item">{{
            item
          }}</span>
      </div>
    </template>

    <template #aside-outline-before>目录</template>
  </Layout>
</template>
<style scoped>
.tag {
  padding: 3px 6px;
  font-size: 10px;
  border-radius: 50px;
  border: 1px solid gray;
}
</style>

```
文章
```markdown
<!-- 文章开头注明tags属性内容 -->
---
title: 2022年了你还不知道pnpm么
editLink: true
tags: [other]
---

## 这是标题

- 这里是文章内容...
- 这里是文章内容...
- 这里是文章内容...

```
预览效果如下
![20221128191508](https://github.com/QC2168/note-img/20221128191508.png)


## tailwind
由于平时比较习惯用tailwind，这里我把tailwind也配置一下

## 安装
```
pnpm install -D tailwindcss postcss autoprefixer && pnpm exec tailwindcss init -p
```
## 配置文件
```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: 'class',
  content: [
    './docs/.vitepress/**/*.js',
    './docs/.vitepress/**/*.vue',
    './docs/.vitepress/**/*.ts',
  ],
}

```
```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

稍微改下样式标签的样式

```html
<div class="flex mt-2">
<span v-for="item in frontmatter.tags" :key="item"
class="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded"
  >{{item}}</span>
</div>
```

![20221128193750](https://github.com/QC2168/note-img/20221128193750.png)
![20221128193803](https://github.com/QC2168/note-img/20221128193803.png)

接下来，需要手动把各个文章添加对应的标签即可。

按标签分类