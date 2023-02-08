---
title: call和apply的区别
tags: [JavaScript]
---

## call和apply的区别

- 两者的作用是一样的，区别在传入参数形式不同
- `apply`只接收两个参数，分别是`this`指向对象和参数集合（数组，伪数组）
  - `apply(thisArg)`
  - `apply(thisArg, argsArray)`
- `call`接收的参数是不固定的，第一个参数和`apply`一样是`this`指向对象，从第二个参数开始都是传入到原函数的参数，根据传入的顺序，依次传入
  - `function.call(thisArg, arg1, arg2, ...)`

> apply和call如果第一个参数是null或者undefined，会指向window（非严格模式下触发）
> apply和call手写题可移步 jsCode