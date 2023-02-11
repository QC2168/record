---
title: null和undefined区别
tags: [JavaScript]
---

## null和undefined区别

- `null`指的是**空对象**，通常用于初始化、清空值
- `undefined`指的是**未定义**，例如`let foo`，先占用一个变量名`foo`，值为是`undefined`
  - undefined不是保留字，还可以将它设置成一个变量名

> 这两个都是`JavaScript`的基本数据类型
> 在使用`typeof null`时会返回`object`，这是`JavaScript`中的一个历史遗留的Bug