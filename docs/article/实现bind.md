---
title: JS进阶-实现bind
tags: [JavaScript]
---

## JS进阶-实现bind

在`JavaScript`函数式编程中，`Function`的原型上有这么三个方法它们是用于改变`this`的指向的，说到这里相信大家都知道分别是哪三个方法了（`bind`、`call`、`apply`）。

## 为什么需要这些方法

这是因为在JavaScript这一门语言中，它的this指向是动态并非固定的，这时候我们就需要做三个方法来辅助我们来改变this的指向。

## bind

> `bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。（引用`MDN`）

## bind的用法

```javascript
let foo = {
  a: 100,
  bar: function () {
    console.log(this.a);
  }
};

let a = foo.a;
console.log(a); // 100

let bar = foo.bar;
// Cannot read properties of undefined
// 此时this指向了window
// bar() 

let bindBar = foo.bar.bind(foo);
bindBar(); // 100
```

通过上面对`bind`函数的介绍结合代码例子，相信你已经明白了bind函数的使用方法，`bindBar`即是`bind`函数返回的一个新函数。它是指向永远的指向了`foo`这个对象上。

## 手写bind函数

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
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  // 返回函数
  return function(...args) {
    // 考虑函数返回值
    return fn.apply(thisArg,[...argArray,...args])
  }
};
```

- 步骤分析
  1. 判断边界情况，如果执行bind函数的值非函数则抛出异常
  2. 获取当前调用`bind`函数的`this`值
  3. 处理边界情况，如果指向的`this`值没有传入时默认指向`window`。
  4. 定义返回一个匿名函数，
     - 接受`bind`后续传入的参数
     - 将用户函数放到`this`中进行调用
     - 处理参数，将预传入参数与传入的函数进行合并操作



在`bind`函数中有一个特点，当`bind`函数返回的新函数作为构造函数时它之前绑定的`this`值会失效，但是传入的参数不失效，目前我们的实现的bind并没有这个特点。

例如下面这个例子

```javascript
var foo = {
  name: "_island"
};
function Person(age) {
  console.log(this);
  console.log(this.name);
  console.log(age);
}

let bar = Person.bind(foo,18);
bar()
// {name: "_island"}
// _island 
// 18

let newBar=new bar();
// Person {constructor: Object}
//    <constructor>: "Person"
//    name: "Person"
// 这里的this.name失效了
// undefined
// 18
```

> 准确来说，JavaScript中的构造函数只是使用new调用的普通函数

从上面我们可以发现，当`bar`函数使用`new`关键字去调用时，之前的绑定的`foo`已经失效了。

由于使用了`new`关键字，此时的`this`是执行了`newBar`对象。。

## new绑定补充

当我们使用了`new`关键字去调用一个函数时会发生些什么事情？

1. 以构造器的`prototype`属性作为原型，创建一个新的对象（这个对象被绑定到构造函数中的this）
2. 使用第一步创建的对象（也就是`this`）和传入的参数给构造器执行
3. 如果构造器没有返回对象，则返回第一步创建的对象

## 接着优化下bind函数

```javascript
Function.prototype.mybind = function (thisArg, ...argArray) {
  // ...
  function proxyFn(...args) {
    // 当this是实例时，让this指向实例，否则指向原本的目标值
    return fn.apply(this instanceof proxyFn ? this : thisArg, [
      // 考虑函数返回值
      ...argArray,
      ...args,
    ]);
  }
  // 返回函数
  return proxyFn;
};
```

这里我们多出了在`apply`时判断了当前`this`是否属于`proxyFn`本身，也即是当作为构造函数时，如果是将绑定函数的this指实例。

将`this`指向实例之后，我们需要把它的原型对象也赋值过去

这也是为什么上面的代码不直接返回`proxyFn`这个函数。

```javascript
Function.prototype.mybind = function (thisArg, ...argArray) {
  // .. 
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

这里创建了一个中转函数`fNOP`，先将当前`bind`函数的`this`赋值给空函数的原型对象，在通过`new`关键字调用`fNOP`函数，目的是为了避免在修改`proxyFn`原型时也把绑定的函数原型一起被修改。

## 最终bind函数代码

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

