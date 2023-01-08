---
title: softBind
tags: [JavaScript手写题]
---

## softBind函数

`softBind`与`bind`函数一样，返回一个指向`this`的新的函数，但`bind`函数多次调用只会将`this`指向第一次绑定的值，而`softBind`指向最后绑定的值

```js
Function.prototype.softBind = function (thisAry, ...args) {
    let fn = this
    // 接收剩下的参数
    const bound = function (...content) {
        const o = !this || this === (window || global) ? thisAry : this
        return fn.apply(o, [...args, ...content])
    }
    // 替换原型
    bound.prototype = Object.create(fn.prototype)
    return bound
}
```