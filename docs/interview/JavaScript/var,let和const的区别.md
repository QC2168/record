---
title: var,let和const的区别
tags: [JavaScript]
---

## var，let和const的区别

- `let`和`const`是`ES6`之后新增的关键词，用于在一个块级作用域声明变量，解决了`var`的全局变量污染问题
- `var`存在变量提升，而且会给全局对象上添加属性，`let`和`const`不会
- `var`可以重复声明变量，`let`和`const`不允许
- `var`和`let`可以重新进行赋值操作（指针改变），`const`不能
- `var`和`let`可以只声明，`const`必须提供初始值


