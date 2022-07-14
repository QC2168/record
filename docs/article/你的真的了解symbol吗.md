# 你真的了解symbol吗
### 什么是Symbol

Symbol是ES6中新增的一种基本数据类型，它是一个函数，会返回一个symbol类型的值，每一个Symbol函数返回的值都是唯一的，它们可以被作为对象属性的标识符。

Symbol也具有静态属性和静态方法，它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局symbol注册。

> Symbol不算是一个完整的构造函数，因为它不能使用new关键字进行调用

### 语法

```javascript

Symbol([description])

```

> description是symbol的标识符，是可选的（该特性是在ES10新增的）
### 上手

👇 使用`symbol`值作为对象的key 👇

```javascript

let s1 = Symbol()
// Symbol()

let obj = {
    [s1]:'s1'
}
// obj => {Symbol(): 's1'}

obj.s1
// undefined

obj[s1]
// 's1'

```
上面例子我们使用Symbol函数创建了s1，之后使用了`s1`作为`obj1`中`key`，这里有个需要注意的点，当我们使用变量去定义一个对象的key时需要使用`[]`包裹着，否则会被自动转化成string类型。这也就是为什么obj.s1时获取到的是undefined而不是对应的's1'。

### 使用场景

### Symbol.for
### Symbol.keyFor
## 常用内置符号
### Symbol.iterator
### Symbol.asyncIterator
### Symbol.hasInstance
### Symbol.hasInstance
### Symbol.isConcatSpreadable
> @@符号
