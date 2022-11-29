---
title: vite项目优化
tags: [JavaScript]
---

## 前言

作者最近在开发的项目有一个使用到了`vite`构建工具，在构建项目时，当时看到这个就是我的天！这个包怎么这么大！于是，我对他做了一场小手术。

![images](https://raw.githubusercontent.com/QC2168/note-img/main/202204012100027.jpg)

![image-20220330160809121](https://raw.githubusercontent.com/QC2168/note-img/main/202204011715896.png)

下面我将给大家带来如何优化一个`vite`项目的几个小方法

![download](https://raw.githubusercontent.com/QC2168/note-img/main/202204012128638.jpg)

## 配置路由懒加载

当打包构建应用时，`JavaScript` 包会变得非常大，影响页面加载。这时，我们可以将这些组件拆分出来，变成多个chunk，当用户首次进入页面时才会加载对应的文件。避免一次性将所有组件请求下来。

```typescript
export default [
  { path: '/', component: import('../views/Register/index.vue') },
  { path: '/Login', component: import('../views/Login/index.vue') },
  { path: '/Register', component: import('../views/Register/index.vue') },
  { path: '/Questions', component: import('../views/Questions/index.vue') },
  { path: '/Report', component: import('../views/Report/index.vue') },
  { path: '/UserInfo', component: import('../views/UserInfo/index.vue') },
  { path: '/Record', component: import('../views/Record/index.vue') }
] as Array<RouteRecordRaw>;
```

## 分析构建

安装`rollup-plugin-visualizer`插件，该插件用于分析依赖大小占比。

```bash
npm install  rollup-plugin-visualizer @types/rollup-plugin-visualizer -D
```

在`vite.config.ts`中引入并使用它。

```typescript
import { visualizer } from 'rollup-plugin-visualizer';
```

```typescript
export default defineConfig({
  // ...
  plugins: [
    // 将这个visualizer插件放到最后的位置中
    visualizer()
  ]
});
```

当你配置完毕之后，在你下一次`npm build`项目时，会在目录下创建一个`stats.html`，里面即是你项目中的分析结果。分析中你可以将空间占比比较大的文件进行适当的优化。

![image-20220330165653454](https://raw.githubusercontent.com/QC2168/note-img/main/202204011715900.png)

## 代码压缩

安装`vite-plugin-compress`插件，对项目中的代码进行`gzip`压缩或`brotli`压缩

```bash
npm install vite-plugin-compress -s
```

在`vite.config.ts`中引入并使用它。

```typescript
import compress from 'vite-plugin-compress'
```

```typescript
export default defineConfig({
  // ...
  plugins: [
    compress(),
  ]
});
```

![image-20220330171007111](https://raw.githubusercontent.com/QC2168/note-img/main/202204011715901.png)

## 图片压缩

安装`vite-plugin-imagemin`插件，对项目中的图片进行压缩处理。

```bash
npm i vite-plugin-imagemin -D
```

在`vite.config.ts`中引入并使用它。

```typescript
import viteImagemin from 'vite-plugin-imagemin'
```

```typescript
export default defineConfig({
  // ...
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 20
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox'
          },
          {
            name: 'removeEmptyAttrs',
            active: false
          }
        ]
      }
    }),
  ]
});
```

## 优化包体积

在`vue3`中，许多的`Api`都是可以被`tree-shake`优化，也即是你的项目中使用到了某些`API`只打包这些被使用到的`API`，减少包的体积。在选择第三方库时，尽量使用ES版本就比如`lodash-es`和`lodash`，前者是`ES6`格式的代码可以被`tree-shake`，而`lodash`则是全部引入，体积较大。

## 兼容性优化

目前，大部分的浏览器支持了`ESM`，但部分旧版浏览器不支持`ESM`，此时就需要使用`@vitejs/plugin-legacy`来兼容这些旧版的浏览器。[详细请戳这里](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme)

安装`@vitejs/plugin-legacy`

```bash
npm install @vitejs/plugin-legacy -s
```

在`vite.config.ts`中引入并使用它。

```typescript
import legacy from '@vitejs/plugin-legacy'
```

```typescript
export default defineConfig({
  // ...
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
});
```

