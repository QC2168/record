---
title: 分享一个开箱即用的utools插件开发模板
tags: [other]
---

## utools-plugin-template

今天给大家带来一个开源的`utools`插件开发模板，让你更快的开发一个属于自己的`utools`插件

### 为什么用模板

因为模板可以帮助我们更快的开发，并且减少一些重复的配置工作，大大提高开发效率

这个模板也是我在开发`utools`插件时，萌生出的一个想法，因为当时我想开发一个插件的时候并没有一个基础模板，我得从官方开发者模板中一步一步的新建文件，并配置一些字段信息，这个过程显得有点繁琐，而且可能会出错的概率

### 模板界面

![20231125151027](https://raw.githubusercontent.com/QC2168/note-img/main/20231125151027.png)

### 模板功能

- 🌈 开箱即用的`Vite+Vue3`的`Utools`插件开发模板
- ⚡ 开发环境自动注入`HMR`字段
- 🦍 自动构建`upx`包
- 🧸 构建`utools/preload`文件，处理第三方依赖
- 🚀 构建桌面应用

### 模板使用

这个模板的使用也是很简单的，你只需要将这个模板克隆下来，并安装依赖，然后就可以开始开发自己的插件了

```bash
git clone https://github.com/QC2168/utools-plugin-template
cd utools-plugin-template
npm install
```

接下来，你只需要配置一些关于你的插件信息就可以了

由于涉及到比较多图片简介，这里就不一一贴出来了（详细见[`readme.md`](https://github.com/QC2168/utools-plugin-template/blob/main/README.md)）


### 集成Electron

在开发这个模板的过程中，也收集了一些用户反馈，有些开发者希望开发插件时，同时也能构建一个`exe`文件

所以这个模板集成了`Electron`的开发环境，可以让你更快的开发插件，并且可以直接打包成`exe`文件，让你的插件更加的方便使用

在开发/构建的时候，你只需要执行一条命令即可😜

```bash
# 本地开发
npm run dev:electron
# 构建应用
npm run build:electron
```

> `electron`集成部分使用了`caoxiemeihao`大佬的`vite-plugin-electron`插件来实现 🌹

这个是当项目运行`electron`时的开发界面

![20231125150942](https://raw.githubusercontent.com/QC2168/note-img/main/20231125150942.png)

### 模板功能实现

模板中的一些功能实现，实际上是依靠模板中的`@qc2168/vite-plugin-utools`插件实现的，也即是如果你想要模板中的功能也可以通过安装插件的方式在你的项目中实现（不包含`electron`部分）

这个也是因为在我开发`utools`插件时，踩的一个坑后开发出来的，最起初的目的是解决第三方依赖丢失问题

到后面在写模板时，又新增了插件热更新，插件打包等功能

插件仓库地址：[vite-plugin-utools](https://github.com/QC2168/vite-plugin-utools)

### 最后

希望这个模板能够帮助到你，如果有什么问题，欢迎提`issue`，我会尽力的解答你的问题

如果这个模板对你有帮助，请给这个项目点一个⭐️，谢谢！

模板仓库地址：[utools-plugin-template](https://github.com/QC2168/utools-plugin-template)
插件仓库地址：[vite-plugin-utools](https://github.com/QC2168/vite-plugin-utools)