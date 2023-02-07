---
title: isNaN和Number.isNaN的区别
tags: [JavaScript]
---

## isNaN和Number.isNaN的区别

- `isNaN`会将传入的值转换为数值，如果不能被转换就返回`true`，反之返回false
- `Number.isNaN`会先判断是否为数字类型，如果是继续判断，否则直接返回`false`

```
isNaN('1')； // false
Number.isNaN('1')； // false
isNaN(NaN)； // true
Number.isNaN(NaN)； // true
```
### 关于NaN

NaN是一个警戒值，代表在进行数字类型中运算失败时返回的结果

它也不等于自身

```javascript
NaN === NaN // false
NaN !== NaN // true
```

