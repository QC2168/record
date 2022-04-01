vite项目优化

### 前言

作者最近在开发的项目有一个使用到了`vite`构建工具，

先上一张项目未优化，当时看到这个就是我的天！这个包怎么这么大！



![image-20220330160809121](https://raw.githubusercontent.com/QC2168/note-img/main/202204011715896.png)

### 配置路由懒加载

当打包构建应用时，`JavaScript` 包会变得非常大，影响页面加载。这时，我们可以将这些组件拆分出来，变成多个chunk，当用户首次进入页面时才会加载对应的文件。避免一次性将所有组件请求下来。

```
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

### 分析构建

安装`rollup-plugin-visualizer`插件，该插件用于分析依赖大小占比。

```
npm install  rollup-plugin-visualizer @types/rollup-plugin-visualizer -D
```

在`vite.config.ts`中引入并使用它。

```
import { visualizer } from 'rollup-plugin-visualizer';
```

```
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

### 代码压缩

安装`vite-plugin-compress`插件，对项目中的代码进行`gzip`压缩或`brotli`压缩

```
npm install vite-plugin-compress -s
```

在`vite.config.ts`中引入并使用它。

```
import compress from 'vite-plugin-compress'
```

```
export default defineConfig({
  // ...
  plugins: [
    compress(),
  ]
});
```

![image-20220330171007111](https://raw.githubusercontent.com/QC2168/note-img/main/202204011715901.png)

### 图片压缩

安装`vite-plugin-imagemin`插件，对项目中的图片进行压缩处理。

```
npm i vite-plugin-imagemin -D
```

在`vite.config.ts`中引入并使用它。

```
import viteImagemin from 'vite-plugin-imagemin'
```

```
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

### 兼容

目前，大部分的浏览器支持了ESM，但部分旧版浏览器不支持ESM，此时就需要使用@vitejs/plugin-legacy来兼容这些旧版的浏览器。[详细请戳这里](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy#readme)

