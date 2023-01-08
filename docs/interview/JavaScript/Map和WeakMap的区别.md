---
title: Map和WeakMap的区别
tags: [JavaScript]
---

## Map和WeakMap的区别

- `Map`对键名是强引用，`weakMap`是弱引用。
- `Map`可以被遍历，`weakMap`不能被遍历
- `Map`的键可以是任意类型，`weakMap`只能是对象作为键名

## 强引用和弱引用

通常，我们创建一个对象都是建立一个强引用的关系

```js
// 当前foo指向一个对象
// 当foo指向null时，浏览器会把foo变量被GC
let foo = {foo:'foo'}

// 过一会 foo会被GC
foo = null
```

`Map`对于键是强引用关系

```js
let m = new Map();

foo = {
  foo: "foo",
};

// 建立强引用关系
m.set(foo,'foo');

foo = null;

// 由于map对键是强引用关系，map对于原foo内存地址还有引用关系，所以对应的内存地址并没有被回收
setTimeout(() => {
  console.log(m);
  // Map(1) {{…} => 'foo'}
}, 4000);
```

而`weakMap`对于键是弱引用关系，当对应的键被回收之后，值也自动被清空了

```js
let foo = {foo:'foo'}

let wm = new weakMap()

wm.set(foo,'foo');

foo = null;
// 由于weakMap是弱引用关系，foo被垃圾回收之后，wm中foo对应的值也被清除了
setTimeout(() => {
  console.log(wm);
  // WeakMap {}
}, 4000);
```





