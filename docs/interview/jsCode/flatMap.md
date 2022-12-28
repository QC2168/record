---
title: 实现一个flatMap函数
tags: [JavaScript手写题]
---

## flatMap函数

```js
let myFlatMap = function (fn) {
    let target = this
    return (target.map(i => fn(i))).flat()
}
Array.prototype.myFlatMap = myFlatMap
```