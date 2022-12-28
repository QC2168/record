---
title: once函数
tags: [JavaScript手写题]
---

## once函数

`once`函数会记忆第一次返回的数据结果，每次返回都是记忆中的数据结果

```js
function once(fn) {
    let flag = false
    let res
    return function (...arg) {
        if (flag) return res
        res = fn(...arg)
        flag = true
        return res
    }
}
```