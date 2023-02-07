---
title: Map和Object的区别
tags: [JavaScript]
---

## Map和Object的区别

- `Map`的键可以是任何数据类型，`Object`的键只能是`string`或`symbol`
- `Map`的键是有序的，遍历时根据插入顺序返回，`Object`是无需的
- `Map`的键数可以通过`size`属性获取，`Object`不能直接获取，例如可以通过`Object.keys(foo).length`获取
- `Map`可以直接迭代，因为它是`iterable`，`Object`不能直接被迭代
