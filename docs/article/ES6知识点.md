### 温故而知新，本文将讲一讲关于ES6中常用的一些知识点

在日常开发中，我们常常会用到`ES6`中的一些语法，在面试中也会被经常被问到相关`ES6`的知识，例如`let`和`const`、箭头函数和普通函数有什么区别等等...

对此，就有了这一篇文章，将为大家介绍`ES6`常用中的知识点，后续也会介绍`ES7-12`中的新语法。

### 什么是ES6

`ES6`是`ECMAScript 6.0`是简称，其实它在2015年6月就发布出来了，所以又称`ES2015`，目的是使`JavaScript`这一门语言可以来编写更加复杂的大型应用。

### let 和 const

`ES6`中新增了`let`和`const`用于声明变量、常量。我们知道通过`var`关键字声明的变量都会在`window`对象上。而使用`let`和`const`关键字声明的变量、常量只局限在当前作用域内使用，且没有作用域提升。

```javascript
let age = 18;
const num = 10;
```

### 数据解构

一个从数组或者对象中方便获取数据的方法（`Destructuring`）。

数组中的解构有基本解构过程、顺序解构、解构出数组、默认值。

```javascript
const arr = [10, 20, 30];
const [item1, item2, item3] = arr;
console.log(item1, item2, item3); // 10 20 30
```

对象中的解构有基本解构过程、任意顺序、重命名、默认值。

```javascript
const { name, age } = obj;
console.log(name); // _island
console.log(age); // 18
```

### 字符串模板

在`ES6`中我们可以在字符串中使用变量和表达式。使得字符串和变量之间拼接起来的语法更加优雅。

```javascript
const city ='Guangzhou'

// ES5中
console.log('I live in '+city) // I live in Guangzhou
// ES6中
console.log(`I live in ${city}`) // I live in Guangzhou
```

### 函数的默认参数

在`ES6`中，我们可以给函数的参数定义一个默认值，当这个参数没有被传入时则使用这个默认参数。

我们先看看看在`ES5`中如何实现的函数默认值

```javascript
function foo(name,age){
var name=name || '_island'
var age=age || 18
console.log('name is '+name);
console.log('age is '+age);
}

foo() // name is _island  age is 18
foo('abc',17)// name is abc  age is 17
```

而在`ES6`之后，我们直接在函数形参后面定义一个默认值即可，我们稍微修改下上面的例子。

```javascript
function foo(name='_island',age=18){
  console.log('name is '+name);
  console.log('age is '+age);
}

foo() // name is _island  age is 18
foo('abc',17)// name is abc  age is 17
```

### 函数剩余参数

`ES6`中引用了`rest parameter`，可以将不定数量的参数放到一个数组中。在函数最后的一个参数放入`...args`，在函数体中`args`是一个数组。

```javascript
function sum(a,b,c,...args){
  console.log(a,b,c);
  console.log('---args');
  console.log(args);
}

sum(1,2,3,4,5,6,7,8,9,10)
// 1 2 3
// ---args
// [
//   4, 5,  6, 7,
//   8, 9, 10
// ]

```

- 与`arguments`区别
  - 剩余次数只包含没有对应实参，而`arguments`对象包含了传给函数的所有实参
  - `rest`参数是一个数组，而`argument`对象是伪数组
  - 剩余参数必须放在最后面

### 箭头函数

在`ES6`中新增箭头函数，因为它的定义用的就箭头。我们看看它的用法。

```javascript
// ES5
function foo() {}

// ES6
const foo = () => {};
```

当有参数和函数体时，箭头函数是这样子声明的

```javascript
// ES5
function foo(m, n) {
  console.log(m + n);
}

// ES6
const foo = (m, n) => {
  console.log(m + n);
};
```

#### 箭头函数的简写

```javascript
// 函数体里只有一条函数时可以这样子写，并默认将这条语句返回(省略return)
const foo = (m, n) => console.log(m + n);

// 当只有一个参数时,()可以省略掉 ,多个参数不能省略
const foo = name=>console.log(name);
```

#### 箭头函数注意事项

- 箭头函数不能作为构造函数使用
- 箭头函数没有原型
- 箭头函数内没有`arguments`
- 箭头函数不能使用`yield`关键字

#### 关于箭头函数的指向问题

- 箭头函数没有`this`，它的`this`是它的父级
- `this`是在定义箭头函数时绑定的

#### Class关键字

关于`class`关键字，我在另外一篇文章中有详细介绍Class的用法和相关扩展知识点。

> [点击直达 JS进阶 | 详解ES6中的Class](https://juejin.cn/post/7058477703262896159)

### 数值的表示

在`ES6`中支持了进制的字面量，需要在数字前面添加对应的标识符号。

```javascript
const num1 = 100; // 十进制
const num2 = 0b100; // 二进制
const num3 = 00100; // 八进制
const num4 = 0x100; // 十六进制
console.log(num1, num2, num3, num4); // 100 4 64 256
```

### 字符串方法

`ES6`中字符串对象的新增方法（常用方法）

| 方法         | 返回值 | 说明                         |
| ------------ | ------ | ---------------------------- |
| `startsWith` | 布尔值 | 判断字符串是否以指定字符开头 |
| `endsWith`   | 布尔值 | 判断字符串是否以指定字符结尾 |

#### startsWith

`startsWith`方法用于判断字符串是否以指定字符开头。

```javascript
// 判断字符串开头是否为h
const ish = str.startsWith("h");
console.log(ish); // true
```

#### endsWith

`endsWith`方法用于判断字符串是否以指定字符结尾。

```javascript
// 判断字符串结尾是否为d
const isd = str.endsWith("d");
console.log(isd); // true
```

