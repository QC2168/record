---
title: JS进阶-柯里化
tags: [JavaScript]
---


## 认识柯里化

柯里化（英文：`Currying`），又称之为卡瑞化、加里化。柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

它能**减少代码冗余**，**增加代码的可读性**

这样子说可能没太明白，我们看个例子

```javascript
function sum(a,b,c,d){
  return a+b+c+d
}

foo(10,20,30,40) // 100
```

上面`sum`函数是将传入的参数进行相加，如果把`sum`函数改成柯里化函数：

```javascript
function sum(a){
  return function(b){
    return function(c){
      return function(d){
        return a+b+c+d
      }
    }
  }
}
```

按照上面的写法，这个`sum`调用方式将是

```javascript
sum(10)(20)(30)(40) // 100

const add=sum(10)
add(20)(30)(40) // 100
```

**通过这个例子你可以知道，柯里化即时是把较多参数的函数转为可以分段传入函数参数的函数，可以减少对函数备份参数的传入。**

## 柯里化应用场景

在实际场景上的一个例子，`MyURL`函数用于生成一个拼接之后的`url`链接，它需要传入三个参数，分别是`protocol`, `domain`, `path`。

```javascript
function MyURL(protocol, domain, path) {
  return protocol + "://" + domain + "/" + path;
}
```

```javascript
MyURL('https','juejin.cn','user/2858385965322935');
// https://juejin.cn/user/2858385965322935
MyURL('https','juejin.cn','post/7055941374687838216');
// https://juejin.cn/post/7055941374687838216
MyURL('https','juejin.cn','post/7054594359206871053');
// https://juejin.cn/post/7054594359206871053
```

从上面三个调用`MyURL`函数中，会发现前两个参数一直保持不变。我们可能会想要把这个函数封装下，成为下面这种方式。

```javascript
function getUrl(path){
  return MyURL('http','juejin.cn',path);
}
```

这样子改对上面的调用只需要修改`path`参数即可，但是万一某一天需要改`domain`参数呢？

我们可以把上面`MyURL`函数进行柯里化操作，同样只需要传入`path`。这即是函数柯里化是目的，减少代码冗余、增加代码可读性。

```javascript
const justinPost=MyURL('http','juejin.cn')
justinPost('post/7055941374687838216')
// https://juejin.cn/post/7055941374687838216
justinPost('post/7054594359206871053')
// https://juejin.cn/post/7054594359206871053
```

## 柯里化函数实现

在上面的例子，我们需要手动将一个函数转为柯里化函数，我们可以手写实现将函数转换为柯里化函数的函数

下面即是柯里化函数实现的函数，一看就懂！

```javascript
// 柯里化函数的实现
function MyCurrying(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      function curried2(...args2) {
        return curried.apply(this, [...args, ...args2]);
      }
      return curried2;
    }
  }
  return curried;
}
```

## 解析写法

1. 在一开始，函数接收一个函数，将这个函数进行柯里化处理。
2. 先进行判断当前函数传入的参数数量是否大于原函数参数的数量，如果大于：通过`apply`方式调用函数
3. 如果没有达到原函数参数的数量：将返回一个函数继续接收剩余的参数
4. 调用返回的函数，当参数达到原函数参数的数量时，通过`apply`方式调用函数

## 思路

利用闭包的原理，将每次传递进来的参数存起来，当参数不符合预期时，返回一个新的函数接收剩余参数，继续调用，不符合则再递归。

## **知识点**

1. `Function.prototype.length`是获取函数参数的个数
2. 如果不使用`apply`方式调用原函数，会发生`this`指向不正确

## 柯里化的性能

在使用柯里化意味着有额外的内存开销

- 使用`arguments`对象比直接操作命名参数慢
- 作用域，闭包对内存的开销，性能下降
- 使用`call`、`apply`调用函数比直接调用函数会慢些，而且产生嵌套关系

## 总结

柯里化主要是以闭包为基本，利用闭包将函数的参数存起来，等到参数达到一定数量时执行函数。使用柯里化会让代码更加有灵活度，但也有一定的弊端，它用到了`arguments`、递归、闭包等会带来性能影响。在日常开发中，请结合实际情况使用柯里化函数。