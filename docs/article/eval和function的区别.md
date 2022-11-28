---
title: eval和function的区别
tags: [JavaScript]
---


## eval和function的区别

## eval
相信很多同学都知道`eval`函数，它是将一个字符串转化为`JavaScript`表达式的函数，返回值是字符串计算之后的结果。

## eval用法
```javascript
eval('1+1+2'); // 4
```
## eval作用域
默认情况下，调用`eval`函数执行字符串表达式时，它所在的作用域是在当前作用域中的。

```Javascript
let a = "globalA";
let b = "globalB";
function foo() {
  let a = "a";
  let b = "b";
  copyEval("console.log({a,b})");
}
foo(); // {a: 'a', b: 'b'}
```
如果是通过间接调用的方式，`eval`中的代码是工作在全局作用域中的，而不是在一个局部作用域中。
```javascript
const copyEval=eval
let a = "globalA";
let b = "globalB";
function foo() {
  let a = "a";
  let b = "b";
  copyEval("console.log({a,b})");
}
foo(); // {a: 'globalA', b: 'globalB'}

```

## 不用使用eval函数

但在日常开发中，切记不要使用`eval`函数，一旦`eval`函数中传入的代码是被篡改的，攻击者可以窃取当前环境下的数据。
使用`eval`函数也会让代码的可读性变得很差
性能差，在现代`js`引擎会对代码进行优化，如果使用`eval`的函数会破坏这个过程，`js`引擎将无法对`eval`函数中的值进行优化。
例如值中一些变量名，无法得到压缩等。

## function
上面提到`eval`的一些弊端，我们还有另外一种替代`eval`函数的方法，那就是`function`了。我们试试将上面用`eval`写法的代码转换为`function`。

```javascript
// eval
eval('1+1+2'); // 4
// function
Function("console.log(1+1+2)")()
// ƒ anonymous() {
//    console.log(1+1+2)
//    }
// 4
```
可以发现，`Function`返回的是一个匿名函数，我们还需要在它的后面添加上`()`来执行它。
## function作用域

上面在介绍`eval`函数时，我们知道`eval`函数中的表达式是在当前作用域执行的（除了间接调用的方式），而`function`是在全局作用域中执行的。
```javascript
let a = "globalA";
let b = "globalB";
function foo() {
  let a = "a";
  let b = "b";
  eval("console.log({a,b})");
  // {a: 'a', b: 'b'}
  Function("console.log({a,b})")();
  // {a: 'globalA', b: 'globalB'}
}
foo();
```
```javascript
const a = "a";
const b = "b";
const foo = {
  a: "fooA",
  b: "fooB",
};
with (foo) {
  console.log({ a, b });
  // {a: 'fooA', b: 'fooB'}
  Function('console.log({ a, b })')()
  // {a: 'a', b: 'b'}
}
```

也可以通过`apply`或是`call`函数来改变执行的作用域
```javascript
const a = "a";
const b = "b";
const foo = {
  a: "fooA",
  b: "fooB",
};
const bar = {
  a: "barA",
  b: "barB",
};
with (foo) {
  Function("console.log(this)").call(bar)
  // {a: 'barA', b: 'barB'}
}

```
## 为什么说function更有效呢

```javascript
eval("console.log(Date.now())");
Function("console.log(Date.now())")();
```

从这段代码中看上去它们都是在一件一样的事，但实际上并不是的，当你使用`eval`函数时，字符串表达式是在当前作用域上执行的，注意代码中的`Date`对象，如果当前作用域中有`Date`对象它读取的是最近的一个`Date`对象，而不是`window.Date`，而使用`function`中，函数是在全局作用域中执行的，浏览器可以直接拿到`window.Date`中的数据，无需再一层一层的寻找`Date`对象，从而提高效率。

## 总结

- `eval`函数是直接执行字符串表达式，而`function`是返回一个匿名函数需要再次调用
- `eval`的性能比`function`更低一些，无法被`js`引擎所优化
- 作用域不同，`eval`函数是在当前作用域中执行，`function`函数在是一个全局作用域中执行。