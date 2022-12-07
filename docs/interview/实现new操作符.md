---
title: 实现new操作符
tags: [JavaScript]
---

## 实现new运算符

`new`操作符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。（引用[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)）

new运算符用于创建一个实例对象，例如
```javascript
// 使用new操作符创建一个数组  等价于 let arr = [] (字面量形式)
let arr = new Array()
// 使用new操作符创建一个对象  等价于 let obj = {} (字面量形式)
let obj = new Object()
```
#### new需要搭配构造函数使用，通过new一个构造函数来创建一个实例。


## new主要做了些什么事情

1. 开辟一块新的空间，创建一个新的对象
2. 将这个空对象的`__proto__`属性指向构造函数的原型`prototype`
3. 将构造函数的`this`改变为这个空对象
4. 判断构建函数返回类型，如果有对象则返回对象，没有则返回`this`

## 手写new

```
```