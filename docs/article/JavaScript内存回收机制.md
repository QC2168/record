### JavaScript 内存回收机制

### 什么是内存回收机制

垃圾回收又称为GC（Garbage Collection）是指一种自动内存管理机制，在JavaScript中当我们声明一个变量时会在内存中开辟一块内存空间用于存放这个变量，当这个变量被使用过后，你可能再也不需要他了，此时你可以将他标记为NULL（此时它就被称为垃圾可以被处理掉），它将会被JavaScript引擎自动回收。从而释放内存空间。

JavaScript通常情况下是不需要手动来管理的，它们都会自动帮助我们管理内存，同样有自动管理内存的语言还有java、python、swift、dart等

手动管理的编程语言（C、C++，早期OC等）

### 举个例子

我们都知道

### 垃圾回收策略

垃圾回收策略主要有标记清理、引用计数

#### 标记清理

标记清理法 `mark-and-sweep`，是JavaScript最常用的垃圾回收策略。目前市面上大多数浏览器的JS引擎都是使用标记清理法

> 不同的浏览器还对此算法进行额外的加工优化算法。在回收的频率上也会有所差异

给变量标记的方法有很多种，例如在变量进入上下文时，我们将变量推入到一个列表中在，这里存放着在上下文的变量。而另外一个表存放不在上下文中的变量

当我们使用JavaScript当一个作用域中定义一个变量时，这个变量将会被JS引擎在当前上文中进行标记，在正常情况下这个时候变量是不可能被回收的，因为可能在某些时候我们还需要用到它。当变量离开作用域时，也会被添加上离开上下文的标记。


在标记法的整个执行过程大概过程是
- 垃圾收集器会给内存中的所有变量做一个标记
- 当变量离开上下文时，会在做一次标记，代表这个变量可销毁
- 清理所有可销毁的变量，释放内存空间，之后就是等待下一轮回收

#### 缺点

标记清理法也有个缺点，当每一轮清理完变量之后，会出现大量不连续的内存碎片，当空间碎片太多时可能会导致程序在运行过程中需要较大内存空间对象时，无法找到足够的连续内存而不得不再提前触发一次垃圾回收动作。

#### 引用计数 `reference counting`

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

在上面这个例子中，obj1和obj2都是互相引用的状态，它们是计数都是2，在引用计数策略情况下，在上下文执行之后，这两个对象并不会被销毁（计数永远不会变成0）。所以在Netscape4.0时，就采用了标记清理策略。

#### 扩展

在IE8之前，BOM和DOM中的对象是C++实现的组件对象模型（COM即Component Object Model）对象，而COM对象使用引用计数实现垃圾回收。即使IE的JS引擎使用了标记清理策略，但存取的COM对象仍然是引用计数策略。

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

为了修复这个问题，在IE9之后BOM和DOM对象都被改成了JavaScript对象，避免了使用两种不同的垃圾回收算法导致出现问题。

### 垃圾回收调用时机



### FinalizationRegistry

`FinalizationRegistry`对象可以让你在对象被垃圾回收时请求一个回调

我们直接看下面这个例子，我们创建了一个registry对象，
```javascript
const registry = new FinalizationRegistry(heldValue => {
    console.log(heldValue) // foo被销毁了
});

let foo = { bar: 0 }
registry.register(foo,'foo被销毁了');

foo = null

```

#### 浏览器大战
> 在1998年，微软公司的IE浏览器取代了网景公司Netscape浏览器
> 在200!