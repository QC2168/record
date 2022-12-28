---
title: trim函数
tags: [JavaScript手写题]
---

## trim函数

用于移除字符串两端的空白字符

```js
const trim=str=>str.replace(/^\s+|\s+$/g, "");
```

### 测试

```js
let str='  123'
let str2='  123   '
console.log(trim(str)); // 123
console.log(trim(str2)); // 123
```