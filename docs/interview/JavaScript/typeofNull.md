---
title: typeofNull
tags: [JavaScript]
---

## typeof null

先说结果，是`Object`
```js
typeof null // object
```

### 历史上的BUG
这是`JavaScript`中的是一个`Bug`

在第一个版本的时候，所有值都储存在32位的单元中，每个单元包含一个小的类型标签（占`1-3bits`），剩下的位表示真实值。


|值|类型|
|---|---|
|000|Object|
|001|int|
|010|float|
|100|string|
|110|boolean|


**null是机器码，引用了一个空的对象，标记为0，最终类型是Object**

![20230203165743](https://raw.githubusercontent.com/QC2168/note-img/main/20230203165743.png)


### 曾经有个将null的提案...
```js
typeof null === 'null'
```
[历史讨论快照](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null)

### 判断是否null
```js
Object.prototype.toString.call(null); // [object Null]
```

### 参考资料
- [The history of “typeof null”](https://2ality.com/2013/10/typeof-null.html)
- [The typeof Operator](https://262.ecma-international.org/5.1/#sec-11.4.3)