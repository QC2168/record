---
title: less和sass有什么区别
tags: [CSS]
---

## less和scss有什么区别

::: tip 温馨提示

这里不会描述它们之间的详细用法

:::


它们两者都是`CSS`预处理器，它们都在`CSS`的基础上，追加了动态语言的特性，诸如变量，继承，运算，循环等，在节省代码的同时，而增加了`CSS`代码的可读性。


> 在浏览器中，只认识`CSS`文件，并不认识`less`、`sass`文件，所以需要有一个编译过程，将这些文件转成浏览器可读的`CSS`文件才能正常运行，例如`webpack`的`loader`


## 不同之处

| 类型     | `Sass`                | `Less`       |
| -------- | --------------------- | ------------ |
| 变量     | `$`开头                 | `@`开头        |
| 文件后缀 | `.sass`、`.scss`      | `.less`      |
| 处理方式 | 服务端处理            | 客户端处理   |
| 实现不同 | `Ruby`、`dart`、`lib` | `JavaScript` |

> `Sass`3支持不用花括号，使用缩进（像`Python`，`stylus`也是这样的）


```css
#box
  width: 100px;
  height: 100px;
  background-color: #red;
```

::: tip sass和scss的区别

- 文件后缀名：
  - `sass`版本`3.0`之前为`.sass`
  - 版本`3.0`之后为.`scss`。

:::

## 补充下SASS

`SASS`一共有三个版本，具体如下

### ruby sass

`sass`的第一个版本，但在`2019/3/26`已经停止了维护支持，因为前端`Node`无处不在，且`SASS`在性能上的需求已经超过了`RUby`的能力

### dart sass

后来，`SASS`团队使用了`DART`对`SASS`进行了重写，在这个版本中，它可以被编译成纯`JavaScript`文件，可以快速简单的集成到`Web`开发中

### lib sass

`libSASS`是采用`C`/`C++`实现的，主要目的是简单、快速、易于集成
