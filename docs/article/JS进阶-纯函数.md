---
title: JS进阶-纯函数
tags: [JavaScript]
---


## 前言

在函数式编程中，有个非常重要的概念叫纯函数，在我们的日常开发中也会经常遇到，今天我们就来讲讲`JavaScript`中的纯函数，同时本文中也会结合一些案例更好的认识到纯函数

## 认识纯函数

- 在程序设计中，若一个函数符合以下条件，那么这个函数被称为函数
  - 此函数在**相同的输入值时**，需产生相同的**输出**
  - 函数的**输出和输入值以外的其他隐藏信息或状态无关**，也和由**IO设备产生的外部输出无关**
  - 该函数不能**有语义上可观察的函数副作用**，例如“**触发事件**”，使输出设备输出，或更改输出值以外物件的内容等

## 副作用

上面提到，纯函数不能有语义上可观察的函数副作用，这里副作用指的是执行一个函数时，除了返回函数值之外，还对**调用函数产生了附加的影响**

- 副作用不限于
  - 网络请求
  - 输出数据
  - 修改全局变量、参数、外部存储
  - `DOM`查询、操作
  - `Math.random`
  - 获取当前时间

> 副作用本身并不是个毒药，但某些情况下是必需的，所以并不是所有函数必须是纯函数

## 纯函数的例子

下面这个例子它是一个纯函数，符合函数在相同的输入值时，需产生相同的输出。

```JavaScript
function sum(a, b) {
  return a + b;
}
```

## 纯函数的重要性

- 纯函数在函数式编程中被广泛使用，比如react中组件就被要求像是一个纯函数，redux中有一个reducer的概念，也是要求必须是纯函数。
- 所以掌握纯函数对于理解很多框架的设计是非常有帮助的
- 并非所有函数必须是纯函数，比如发送网络请求、操作DOM元素的按钮的处理函数就不适合纯函数，这种事件处理函数可以调用其他纯函数来处理，以此减少项目中不纯的数量。

## JS中的纯函数

在`JavaScript`中内置的`API`也存在有纯函数，我们拿`Array`对象中的方法来说

`filter` 过滤数组中的元素，它不对原数组进行操作是一个纯函数

```JavaScript
var names = ["张三", "李四", "王五", "赵六"];
var newNames1 = names.filter((n) => n !== "张三");
console.log(newNames1); // [ '李四', '王五', '赵六' ]
console.log(names); // [ '张三', '李四', '王五', '赵六' ]
```

`splice` 截取数组的时候会对原数组进行操作，所以不是一个纯函数。

```JavaScript
var newNames2 = names.splice(2);
console.log(newNames2); // [ '王五', '赵六' ]
console.log(names); // [ '张三', '李四' ]
```

> 在日常开发中，尽量使用纯函数

## 练习案例

## 案例一

- 同样的输入有相同的输出

```JavaScript
function foo(num1, num2) {
  return num1 * 2 + num2 * num2;
}
```

## 案例二

- 修改了外部的变量

```JavaScript
var CC = "_island";
function bar() {
  console.log("bar其他代码执行");
  CC = "abc";
}

bar();
console.log(iname);
```

## 案例三

- 修改了对象外的值

```JavaScript
function bar(info) {
  info.age = 100;
}

var obj = {
  name: "hxh",
  age: 18
};
bar(obj)
console.log(obj);
```

## 案例四

- 同样的输入有相同的输出

```JavaScript
function test(info) {
  return {
    ...info,
    age: 100
  };
}

console.log(test(obj));
console.log(obj);
```

## 案例五

- 严格意义上，它不是一个纯函数，因为有输出（`console.log`）。

```JavaScript
function printInfo(info) {
  console.log(info.name, info.age);
  info.name = "abc";
}
```

