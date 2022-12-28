---
title: 累计计算的sum函数
tags: [JavaScript手写题]
---

## 累计计算的sum函数

```js
function sum(...num) {
    let f = (...args) => sum(...num, ...args)
    f.valueOf = () => num.reduce((p, i) => p + i, 0)
    return f
}
```

### 测试
```js
console.log(sum(1, 2, 3).valueOf()); //6
console.log(sum(2, 3)(2).valueOf()); //7
console.log(sum(1)(2)(3)(4).valueOf()); //10
console.log(sum(2)(2, 2)(2).valueOf()); //8
console.log(sum(1)(2)(3)(4)(5)(6).valueOf()); // 21
```