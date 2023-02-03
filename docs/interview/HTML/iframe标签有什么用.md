---
title: iframe标签有什么用
tags: [HTML]
---

## iframe标签有什么用

iframe是一个内联“框架”，用于将一个HTML页面嵌套到当前的HTML页面中

### 常用属性

- height-设置高度
- width-设置宽度
- name-定义框架名称
- frameborder-是否显示边框（0不显示，1显示边框）
- src-资源地址
- align-元素对齐方式

### 优点

- 可以用来加载广告，一些不需要优先加载的数据
- 可以用脚本并行下载
- 可以实现跨域通讯

### 缺点

- 会阻塞主页的onload事件
- 无法被一些搜索引擎发现
- 如果iframe多了，可能不好管理
