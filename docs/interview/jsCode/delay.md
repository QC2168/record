---
title: 延迟执行函数delay
tags: [JavaScript手写题]
---

## delay函数

```js
function delay(fn, wait, ...args) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fn(...args))
        }, wait)
    })
}
```

### 测试

```js
function foo(num) {
    return num
}

delay(foo, 2000, 10).then(res => console.log(res))
// 10
```