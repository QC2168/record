---
title: 判断一个是否为整数
tags: [JavaScript手写题]
---

## isInteger函数
```js
function isInteger(num) {
    return typeof num == "number" && num % 1 == 0 || typeof num == "bigint" && num % 1n == 0n;
}
```
### 测试
```js
console.log(isInteger(1)) // true
console.log(isInteger(1.1)) // false
console.log(isInteger('123')) // false
console.log(isInteger(1 + 1)) // true
console.log(isInteger(1n)) // true
console.log(isInteger(100n)) // true
```