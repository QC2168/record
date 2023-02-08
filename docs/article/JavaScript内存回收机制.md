---
title: JS进阶-内存回收机制（GC）
tags: [JavaScript]
---


## JavaScript 内存回收机制

## 什么是内存回收机制

垃圾回收又称为`GC`（`Garbage Collection`）是指一种自动内存管理机制，在`JavaScript`中当我们声明一个变量时会在内存中开辟一块内存空间用于存放这个变量，当这个变量被使用过后，你可能再也不需要他了，此时你可以将他标记为`NULL`（此时它就被称为垃圾可以被处理掉），它将会被`JavaScript`引擎自动回收。从而释放内存空间。

`JavaScript`通常情况下是不需要手动来管理的，它们都会自动帮助我们管理内存，同样有自动管理内存的语言还有`java`、`python`、`swift`、`dart`等

手动管理的编程语言（`C`、`C++`，早期`OC`等），这些语言需要开发者手动的进行内存管理。

## 垃圾回收策略

垃圾回收策略主要有标记清理、引用计数

## 标记清理

标记清理法 `mark-and-sweep`，是`JavaScript`最常用的垃圾回收策略。目前市面上大多数浏览器的JS引擎都是使用标记清理法

> 不同的浏览器还对此算法进行额外的加工优化算法。在回收的频率上也会有所差异

给变量标记的方法有很多种，例如在变量进入上下文时，我们将变量推入到一个列表中在，这里存放着在上下文的变量。而另外一个表存放不在上下文中的变量

当我们使用`JavaScript`当一个作用域中定义一个变量时，这个变量将会被JS引擎在当前上文中进行标记，在正常情况下这个时候变量是不可能被回收的，因为可能在某些时候我们还需要用到它。当变量离开作用域时，也会被添加上离开上下文的标记。


在标记法的整个执行过程大概过程是
- 垃圾收集器会给内存中的所有变量做一个标记
- 当变量离开上下文时，会在做一次标记，代表这个变量可销毁
- 清理所有可销毁的变量，释放内存空间，之后就是等待下一轮回收

## 缺点

标记清理法也有个缺点，当每一轮清理完变量之后，会出现大量不连续的内存碎片，当空间碎片太多时可能会导致程序在运行过程中需要较大内存空间对象时，无法找到足够的连续内存而不得不再提前触发一次垃圾回收动作。

## 引用计数 `reference counting`

引用计数也是一种垃圾回收策略，但是没有那么常用。

它主要是做法是将每一个变量值都记录它的引用次数，这样子说您可能不太明白，我们举个例子。

```javascript
// 声明一个变量
let foo = 100

// 声明一个bar的对象，此时bar.count引用了foo变量，foo计数+1
let bar = {
    count:foo
}

// 反之，我们把bar.count的值覆盖掉的话，foo的计数-1

bar.count = 200

```

引用计数最初是被`Netscape3.0`浏览器所采用，但很快就遇到了严重的问题：循环引用。

```javascript
let obj1 = {
    other = obj2
}

let obj2 = {
    other = obj1
}
```

在上面这个例子中，`obj1`和`obj2`都是互相引用的状态，它们是计数都是2，在引用计数策略情况下，在上下文执行之后，这两个对象并不会被销毁（计数永远不会变成0）。所以在`Netscape4.0`时，就采用了标记清理策略。

## 扩展

在`IE8`之前，`BOM`和`DOM`中的对象是`C++`实现的组件对象模型（`COM`即`Component Object Model`）对象，而`COM`对象使用引用计数实现垃圾回收。即使IE的JS引擎使用了标记清理策略，但存取的`COM`对象仍然是引用计数策略。

```javascript
let element = document.getElementById("some_element");
let myObject = new Object();
myObject.element = element;
element.someObject = myObject;
```

> 这里引用了JavaScript高级程序设计（第四版）P96的例子

从上面这个例子可以看出，myObject.element和element.someObject造成了循环引用。所以DOM将永远不会被回收，即使在页面上已经消失了。

或者，你可以先上面的例子一样，清除循环引用

```javascript
myObject.element = null;
element.someObject = null;
```

为了修复这个问题，在`IE9`之后`BOM`和`DOM`对象都被改成了`JavaScript`对象，避免了使用两种不同的垃圾回收算法导致出现问题。


## 内存管理

在使用`JavaScript`这种自动垃圾回收处理的编程语言环境中，可以大大降低开发者的心智负担，无需去关心内存管理。

通常情况下，分配给浏览器的内存要比我们使用的桌面软件要少得很多，这是因为出于安全考虑而不是别的，这个内存限制也会影响到变量分配，语句执行，调用栈的，也避免大量的`JavaScript`代码使得甚至耗尽系统中的内存导致操作系统崩溃。

内存的占用量保持在一个较小值可以使页面的性能更好，这也是优化内存占用的最佳手段，即只保存必要的数据，其他数据将被`GC`回收。

## let const 提升性能

在ES6中，新增了let和const关键字用来声明变量常量，这两个关键字在改善代码风格时，也改进了垃圾回收的过程。因为let和const都是以块级作为作用域的，所以比起var的话，如果块级作用域比函数作用域更早终止的情况下，那么let和const会被更早地被垃圾回收，释放内存。

## V8 隐藏类

不同的浏览器使用的`JavaScript`引擎会采用不同的性能优化策略，在日常开发中大家最常用的`chrome`浏览器是使用的V8引擎的，在V8引擎将我们的`JavaScript`代码编程时机器码时会利用一种 “隐藏类”的操作，会让你的代码性能更好。

```JavaScript
function Person(name){
    this.name = name;
}

let _island = new Person('_island')
let zhangsan = new Person('zhangsan')

```

我们看上面这个例子，在运行期间V8会将这两个实例共享相同的隐藏类，因为它们使用的是同一个`constructor`和原型。

下面，我们再拿上面的代码稍微改动下，看看什么情况下是不同的隐藏类。

```javascript
function Person(name){
    this.name = name;
}

let _island = new Person('_island')
let zhangsan = new Person('zhangsan')

// 添加一个新的属性age
_island.age = 18

```

在这例子，我们给`_island`添加一个新的属性`age`，此时这两个`Perso`n实例使用的就不是同一个隐藏类了，这将对性能有所影响。

如果再补充一句`delete _island.age`，在这句代码之后，它们还是共享同一个隐藏类

```javascript
delete _island.age
```

## 内存泄露

内存泄漏（`Memory Leak`）是指程序中已动态分配的堆内存由于某种原因程序未释放或无法释放，造成系统内存的浪费，导致程序运行速度减慢甚至系统崩溃等严重后果。

## 全局变量

```javascript
function foo(){
    bar = 'bar'
    return 'foo'
}
```
上面的例子在声明了全局变量但却没有去使用它。由于`bar`没有使用`var`或者是`let`、`const`关键字去定义，此时`JavaScript`引擎会把`bar`添加到`window`上面的，当函数执行结束之后`bar`并不会被销毁，这就造成了内存泄漏。也是常见也最容易修复的内存泄漏问题。

解决的方法也很简单，只需要上`bar`前面添加上`var` / `let` / `const`关键字即可。

## 定时器

定时器也可能会导致内存泄漏的出现，例如下面的例子，定时器中引用了一个外部的变量，只要定时器一直运行，那么这个变量将不会被垃圾回收。

```javascript

let name = '_island';

setInterval(() => {
    console.log(name)
}, 100);

```

## 事件监听

`EventTarget.addEventListener`也会造成内存泄漏的问题。

```javascript

const divDom = document.getElementById('div1');

const count = 0;

divDom.addEventListener('click',()=>count+=1)

```

上面的例子中，我们通过`addEventListener`给`divDom`添加了一个事件，直接在`addEventListener`第二个参数直接传入一个匿名函数，这样子的话，好处是占用的存储空间更小了。但是由于没有保持函数的引用会导致无需无法调用`removeEventListener`，`addEventListener`也会一直保留在内存中无法回收而导致内存泄漏问题。

我们改善下上面的例子，把上面的匿名函数抽离出来成`increase`函数

```javascript
const divDom = document.getElementById('div1');

const count = 0;

function increase(){
    // 一些要做的事情
}

divDom.addEventListener('click',increase)

// 销毁事件
divDom.removeEventListener('click',increase)
```

>  如果你没有移除事件，而是直接`parent.removeChild`，此时在`DomTree`上是没有这个元素的，但`clickHandler`也驻留在内存中。


## 闭包

闭包是指有权访问另外一个函数作用域中的变量的函数，它的应用场景有很多例如我们常用的工具函数防抖、节流、`react hook`等等。

闭包很容易在不知不觉的造成内存泄漏，从下面的例子中，`name`的内存会被泄露，因为`foo`函数返回的是一个函数，闭包一直在引用它，导致无法被垃圾回收。

```javascript
function foo(){
    let name = "_island"
    return function(){
        return name
    }
}
```

## FinalizationRegistry

> `FinalizationRegistry` 是 ES2021引入的新对象

`FinalizationRegistry`对象可以让你在对象被垃圾回收时请求一个回调

我们直接看下面这个例子，我们创建了一个`registry`对象，`FinalizationRegistry`接收一个函数，当执行垃圾回收时会触发执行这个函数。

接下来，我们把`foo`对象通过`registry.register`注册了`foo`，并传入了'`foo`被销毁了'，这是刚刚定义的函数形参`heldValue`。

最后，我们把`foo`指`向null`，在下一次GC后foo将会被销毁。

```javascript
const registry = new FinalizationRegistry(heldValue => {
    console.log(heldValue) // foo被销毁了
});

let foo = { bar: 0 }
registry.register(foo,'foo被销毁了');

foo = null
```


## 什么情况下会导致内存泄露
> 2023/2/8

- 遗留的全局变量
  - 在全局中创建了一个全局变量，在使用完之后未将它设定为`null`，导致无法被回收
- 计时器
  - 在业务中使用了`setInterval`定时器，但使用完未使用`clearInterval`导致没有被回收
- `DOM`引用
  - 获取`DOM`元素后，当`DOM`被删除，由于之前将`DOM`赋值在一个变量上，导致无法回收
- 闭包
  - 不正确的使用闭包很容易造成内存泄露
  - [关于js闭包是否真的会造成内存泄漏？](https://www.zhihu.com/question/31078912)