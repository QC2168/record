---
title: bind
tags: [JavaScript手写题]
---

## 实现bind函数

## 基于apply实现版本

```javascript
Function.prototype.mybind = function (thisArg, ...argArray) {
  // 接受绑定的this值和预传入参数
  // 判断绑定的函数
  if (typeof this !== "function") {
    throw new Error("调用bind方法必须是一个函数");
  }
  // 获取到真实需要调用的函数
  var fn = this;
  // 绑定this
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  // 创建一个中转的函数
  var fNOP = function () {};
  function proxyFn(...args) {
    // 当this是实例时，让this指向实例，否则指向原本的目标值
    return fn.apply(this instanceof fNOP ? this : thisArg, [
      // 考虑函数返回值
      ...argArray,
      ...args,
    ]);
  }

  // 使返回的函数原型也有当前this中的原型
  // 这里也可以使用Object.create()
  fNOP.prototype = this.prototype;
  proxyFn.prototype = new fNOP();
  // 返回函数
  return proxyFn;
};
```