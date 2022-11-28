---
title: JS进阶-this指向什么
tags: [JavaScript]
---


## 前言

在面向对象语言中 `this` 表示当前对象的一个引用，但在 `JavaScript` 中的表现略有不同，它会随着执行环境的改变而改变。

## this是什么

`this`是当前执行上下文（`global`、`function` 或 `eval`）的一个属性，在非严格模式下，总是指向一个对象，在严格模式下可以是任意值。

大多数情况下，`this`会出现在函数中，而在全局作用域中也有`this`。

## 全局作用域中的this

上面说到在全局作用域中我们也是可以直接打印`this`的。

```javascript
浏览器环境：
console.log(this); // window
Node环境：
console.log(this); // {}
console.log(window); // 在node会报错, no defined
```

从这可以看出`this`在不同的环境上是不一样的。

## this的作用

在`JavaScript`中我们在一个对象中想给本身的一个属性赋值往往会使用`this.[attr]=xx`，这里可以看出this指向的是当前`test`对象，当没有`this`时你也可以使用`[object name].[attr]`的语法来操作属性，但这样子会有个弊端，也就是说当你的对象中里面有很多个方法，而这些方法中很多出现`[object name].[attr]`语法，那么后续修改对象名称，方法里对于对象名称也需要修改，很不方便。这也即是`this`的作用。

```javascript
// 没有使用this
const test = {
  prop: 42,
  func: function() {
    return test.prop;
  },
};

console.log(test.func());
```

```javascript
// 使用this，this指向当前test对象
const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
```

## this的绑定规则

`this`的绑定规则总有四种分别是默认绑定、隐式绑定、显示绑定、`new`绑定。下面将对这四种方式展开说明。让你更好的理解`this`的绑定

## 默认绑定

- 独立的函数调用可以理解成函数没有被绑定到某个对象上进行调用

```javascript
function foo(){
  console.log(this);
}
// 默认绑定，是一个独立函数，没有绑定对象
// 指向window
foo()
```

## 隐式绑定

- 它的调用位置是通过某个对象发起的函数调用，例如`obj2.bar()`
- `object`对象会被`js`引擎绑定到`fn`函数中`this`里面

```javascript
function foo(){
  console.log(this);
}

// 独立函数调用
// foo()

var obj={
  name:'hxh',
  foo:foo
}


obj.foo() // obj对象
```

## 显示绑定

- 前提条件
  - 必须在调用的对象内部有一个对函数的引用（比如一个属性）
  - 假使没有这样引用，在进行调用时，会报找不到该函数的错误
  - 正是通过这个引用，间接的将`this`绑定到这个对象上
- 如果不希望在对象内部包含这个函数的引用，同时又希望在这个对象上强制调用
  - `JavaScript`所有的函数都可以使用`call`和`apply`方法（这个和`prototype`有关）
  - 这两个函数的第一个参数都要求是一个对象，这个对象是给`this`准备的
  - 调用这个函数时，会将`this`绑定到这个传入的对象上

```javascript
function foo(){
  console.log('函数被调用了');
  console.log(this);
}
var obj={
  name:'obj'
}

foo() // window

foo.call(obj) // obj
foo.apply(obj) // obj
foo.apply('aaa') // aaa
```

## new绑定

- 我们通过一个`new`关键字调用一个函数时（构造器），这个时候`this`是在调用这个构造器时创建出来的对象

```javascript
function Person(name,age) {
  this.name=name
  this.age=age
}
// 自动生成新的obj对象
// 生成的对象赋值到Person中的this
var p1 = new Person('hxh',21);
console.log(p1.name,p1.age);
```

## 箭头函数

在箭头函数中没有`this`，如果你在箭头函数中打印`this`，`this`将根据外层作用域来决定this

```javascript
var foo=()=>{
  console.log(this); // window
}
```

## 绑定规则优先级

> 默认绑定 < 隐式绑定 < 显示绑定 < new绑定

## 显示绑定高于隐式绑定

```javascript
var obj={
  name:'obj',
  foo:function(){
    console.log(this);
  }
}

// 隐式绑定
obj.foo()
// call apply 绑定高于隐式绑定
obj.foo.call('abc')
```

## new绑定优先级高于隐式绑定

```javascript
var obj={
  name:'obj',
  foo:function (){
    console.log(this)
  }
}

// 打印obj代表隐式绑定优先级高
// 打印foo代表new绑定优先级高
// new优先级高于隐式绑定
var fn=new obj.foo() // foo
```

`new`绑定和`call`、`apply`是不允许同时使用的，所以不存在谁的优先级更高。

## new绑定优先级高于bind

```javascript
function foo(){
  console.log(this);
}

var bar=foo.bind('aaa')

var obj=new bar() // foo {}
```

## 严格模式下的this

在严格模式下，函数中的`this`默认不是`window`，而是`undefined`

```javascript
'use strict';

console.log(this);// Window

function foo(){
  console.log(this); // undefined
}

foo()
```

