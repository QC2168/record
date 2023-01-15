---
title: DOM和BOM
tags: [Browser]
---

是不是有点回到刚开始学JavaScript的时候了，什么是DOM和什么是BOM？

## DOM

全称Document Object Model，是 HTML 和 XML 文档的编程接口。通过特定的接口可以访问对应的对象属性和方法，也可以获取节点信息。

也就是把一个文档（元素）作为一个对象来看待

像我们操作的页面元素这些都是DOM元素，例如创建一个DIV_DOM元素（[HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDivElement)）,可以对这个元素进行属性添加和修改（setAttribute），这些都是在操作DOM对象
```js
document.createElement('div')
// output <div>​</div>​
```

## BOM

全称Browser Object Model，也是一个对象的构造，主要和浏览器打交道，获取一些

你会发现从MDN上并找不到BOM，而是搜索到Window。因为没有这个标准，像IE浏览器就扩展了BOM对象，加入了activeXObject这个类

> JavaScript语法标准化组织是ECMA，DOM的是W3C，而BOM是各个浏览器厂商自己规定实现的

BOM对象可以访问浏览器中的组件，例如我们采用的历史记录前进后退，获取屏幕宽高度等内容。

主要可以分为六大类

1. document
2. event
3. history
4. location
5. screen
6. navigator


## 差异对比

### DOM
- 文档对象模型
- 顶级对象是document
- 可以用来操作html页面的元素
- 标准化是w3c来制定

### BOM
- 浏览器对象模型
- 顶级对象是window
- 用来和浏览器之间进行交互
- 是由各浏览器厂商在各自浏览器上定义，没有一个统一的标准
- 其实DOM对象就相当于是BOM儿子，因为DOM对象的操作都是由浏览器来执行的
