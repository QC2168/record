## vite-plugin-vitepress-auto-sidebar

### 💡 起因

在前一段时间，我开始将个人博客站点的技术栈从`vuepress`迁移到了`vitepress`，迁移的过程还是挺简单的，而且体验效果提升不少，默认是主题也非常好看。

也就是您当前正在访问的这个版本 ~

但是其中遇到了个问题，就是`vitepress`官方目前是不支持侧边栏的生成，这让我有点烦恼，而`vuepress`是可以自动生成的

于是我就萌生了一个想法，我能不能写了一个`vitepress`插件，通过这个插件来帮我实现了侧边栏的生成呢

后面查了一下，目前官方并没有开放`vitepress`插件功能

想了一下，既然`vitepress`是基于`vite`的，那我写了个`vite`插件好了，所以就有了`vite-plugin-vitepress-auto-sidebar`

### 🌈 功能

- [x] 自动创建侧边栏数据
- [x] 实时监听文件变动更新侧边栏数据

### 📦 安装
```bash
npm install vite-plugin-vitepress-auto-sidebar
```
### 🎨 使用

在`.vitepress/config.ts`文件中，追加插件即可。

```JavaScript
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
export default defineConfig({
  vite:{
    plugins:[
      // add plugin
      AutoSidebar()
    ]
  },
})
```

- 插件项目地址：[vite-plugin-vitepress-auto-sidebar](https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar)

- 插件示例代码：[example code](https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar/tree/main/example)

::: tip INFO
目前，插件还没有太多的功能，但已经有计划继续追加一些常用的功能上去

如果您使用过程中遇到了问题或者是有更好的建议，欢迎提issue或pr~ 😊😊
:::

