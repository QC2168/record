## ES6语法

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

## ES7语法

`ES7`又称`ES2016`，在`ES6`之后的语法我们都统称为`ES6+`，下面我们来看看`ES7`中新增的新语法。

#### array includes

`includes`方法用于判断一个元素是否存在于一个数组中

在之前，我们判断一个值是否在数组中，通常会使用`Array.indexOf`来进行判断，而在`ES7`之后，我们可以使用`Array.includes`进行判断。

`ES5`中使用`Array.indexOf`方法：

```javascript
const names = ["abc", "cba", "nba", "mba", NaN];

if (names.indexOf("cba") !== -1) {
  console.log("包含abc元素");
}
```

`ES7`中使用`Array.includes`方法：

```javascript
const names = ["abc", "cba", "nba", "mba", NaN];

if (names.includes("cba", 2)) {
  console.log("包含abc元素");
}
```

关于`NaN`的判断

在includes方法里可以内数组中判断出是否存在`NaN`值，而`indexOf`无法正确判断出来。

```javascript
const names = ["abc", "cba", "nba", "mba", NaN];

if (names.indexOf(NaN) !== -1) {
  console.log("包含NaN");
}

if (names.includes(NaN)) {
  console.log("包含NaN");
}
```

#### 求幂运算符

求幂运算符（`**`）返回将第一个操作数加到第二个操作数的幂的结果。它等效于`Math.pow`，你可以理解它就和+、-运算符一样。

在ES5的时候，我们通过求一个数的次幂通常是通过`Math.pow`方法操作的。

```javascript
const result = Math.pow(3, 3);
```

现在，我们可以直接使用**运算符直接求幂。且写法简洁很多。

```javascript
const result2 = 3 ** 3;
```

也可以使用`BigInts`作为操作数。
> Bigint是ES11中新增的一种数据类型，更安全的标识整数值

## ES8语法

`ES8`又称`ES2017`，在`ES6`之后的语法我们都统称为`ES6+`，下面我们来看看`ES8`中新增的新语法。它们都是一些非常实用的功能：

- `Object.values`
- `Object.entries`
- 字符串填充
- 函数参数的逗号
- `Object.getOwnPropertyDescriptors`
- `async function`

#### Object values

该方法可以获取对象中所有的`value`值。

```javascript
const obj = {
  name: "_island",
  age: 18
};

console.log(Object.values(obj)); // [ '_island', 18 ]
```

#### Object entries

该方法用于将一个对象的可枚举健值转换为一个数组。方便后续遍历数据。

```javascript
const obj = {
  name: "_island",
  age: 18
};

// 将一个对象转为一个数组，方便后续遍历
console.log(Object.entries(obj)); // [ [ 'name', '_island' ], [ 'age', 18 ] ]
```

#### 字符串填充

##### padStart

`padStart`方法用于从起始开始补全字符串。返回补全之后的字符串，不会修改原字符串。

```javascript
const str4 = "100";
console.log(str4.padStart(6, "000")); // 000100
```

##### padEnd

`endsWith`方法用于从尾部补全字符串。返回补全之后的字符串，不会修改原字符串。

```javascript
const str5 = "200";
console.log(str5.padEnd(6, "000")); // 200000
```

> `padStart` / `padEnd` 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。

#### 函数参数的逗号

ES8之后，可以在函数的参数后面尾随逗号。

```javascript
function foo(m,n,){

}

foo(20,30,)
```

#### Object getOwnPropertyDescriptors

该方法用来获取一个对象的所有自身属性的描述符。

返回是描述符的有以下子集的组成：

| 属性           | 说明                                       |
| -------------- | ------------------------------------------ |
| `value`        | 属性值                                     |
| `writable`     | 该属性是否可写                             |
| `configurable` | 该属性是否可配置（是否可读写、删除该属性） |
| `enumerable`   | 该属性是否可枚举                           |
| `set`          | 设置属性时调用的函数                       |
| `get`          | 获取属性时调用的函数                       |

```javascript
const obj = {
  name: "_island"
};
console.log(Object.getOwnPropertyDescriptors(obj));

// {
//   name: {
//     value: '_island',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }
```

#### async function

`async`函数是一个异步函数，且可以搭配`await`关键字使用。它可以使`Promise`的异步执行的像同步代码一样执行。

`async`函数一定会返回一个`promise`对象，如果一个`async`函数的返回值看起来不是`promise`，那么它将会被隐式地包装在一个`promise`中。

```javascript
async function foo() {
  const res = await new Promise((res) => {
    setTimeout(() => res("ok"), 2000);
  });
  console.log(res);
}

foo(); // ok
```

## ES9

#### 对象属性扩展运算符
在ES6中新增了 ... 扩展运算符，这一特性需要对象拥有iterator属性才被使用。在ES9新增了对对象的扩展运算符，相比Object.assign可以更短的语法浅克隆一个对象

```javascript

let data={
    name:'_island',
    age:18,
}

console.log({...data}) // {name: '_island', age: 18}

```

> [Object literal notation vs JSON](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_notation_vs_json)


#### Promise.finally

Promise新增finally方法，与try-catch一样，无论结果是否成功或者失败，都执行finally中的代码块。
```javascript

let p1=Promise.resolve(true)
p1.then().finally(()=>console.log('finally')) // finally

```

#### 异步迭代

在For中可以使用await关键字，运行异步的代码块

```javascript

async function foo(){
  for await (const item of [1,2,3]){
    console.log(item)
  }
}
foo();
console.log('end')

```
## ES10语法

`ES10`又称`ES2019`，在`ES6`之后的语法我们都统称为`ES6+`，下面我们来看看`ES10`中新增的新语法。它们分别有：数组降维、键值列表转对象、字符串去除前/后空格等实际开发中实用功能。

#### 数组降维

`Array.flat`方法会将一个数组进行降维操作，并合成一个新的数组返回。（如果没有参数传入，默认降维深度为`1`）

```javascript
const nums = [1, 2, [3, 4], [5, 6, [7, 8]]];
const newNums1 = nums.flat(1);
console.log(newNums1); // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

const newNums2 = nums.flat(2);
console.log(newNums2); // [1, 2, 3, 4, 5, 6, 7, 8]
```

####  遍历降维

`Array.flatMap`方法会将传入的函数映射到数组中的每一个元素。并返回每个元素的结果集合，再进行`flat`操作（降维深度为`1`）。

```javascript
const nums2 = [1, 2, 3, 4, 6];
const newNums3 = nums2.flatMap((item) => {
  return item * 2;
});

console.log(newNums3); // [ 2, 4, 6, 8, 12 ]
```

##### 和Array.map()的对比

在一般情况下使用`map`和`flatMap`方法好像都可以。我们看下面这个案例，可以更好了解到`flatMap`的作用。

```javascript
const msg = ["hello world", "I live in Guangzhou", "my name is _island"];
const newMsg1 = msg.flatMap((item) => {
  return item.split(" ");
});

const newMsg2 = msg.map((item) => {
  return item.split(" ");
});

console.log(newMsg1);
// [
//   'hello', 'world',
//   'I',     'live',
//   'in',    'Guangzhou',
//   'my',    'name',
//   'is',    '_island'
// ]
console.log(newMsg2);
// [
//   [ 'hello', 'world' ],
//   [ 'I', 'live', 'in', 'Guangzhou' ],
//   [ 'my', 'name', 'is', '_island' ]
// ]
```

#### Object fromEntries

`Object.fromEntries`方法用于将一个`key-value`的二维数组转换为一个对象。

```javascript
const arr = [
  ["name", "_island"],
  ["age", 18]
];

const obj = Object.fromEntries(arr);
console.log(obj); // { name: '_island', age: 18 }
```

#### String trim

在`ES10`中对字符串对象新增了`trimStart`、`trimEnd`方法，用于处理字符串前、后的空格内容。

```javascript
const str6 = "  _island  ";
console.log(str6.trimStart()); // '_island  '
console.log(str6.trimEnd()); // '  _island'
```

#### Symbol description

在`ES10`中，`Symbol`类型可以声明时传入一个`Symbol`描述符。

```javascript
const s1 = Symbol("Symbol描述符");
```

#### 可选的Catch的参数

在过去`try`语句中`catch`子句必须接受一个错误参数，而在`ES10`中，我们可以不创建这个错误参数也可以正常允许。

```javascript
// 之前的写法
try{}catch(e){}
// ES10之后的写法
try{}catch{}
```

#### 更友好的String.toString 

`ES10`之后，`toString`方法会返回精确的字符，这包括空格和注释。

```javascript
function /* _island */ foo /* age 18 */() {}

// 之前
console.log(foo.toString()); // function foo(){}
// ES10之后
console.log(foo.toString()); // function /* comment */ foo /* another comment */() {}
```

## ES11

#### 什么是BigInt（ES11）

是`ES11`中新增的一种基本数据类型，它可以是任意大的整数。它解决了`Number`类型的限制。

当一个数大于`Number`类型所能表示的最大整数时，这个数会被四舍五入。那么会损害程序的可靠性和安全性。

```javascript
9007199254740992 === 9007199254740993; // true
```

为了解决这个限制，可以使用`BigInt`类型来解决这个问题。

```javascript
BigInt("9007199254740998"); // 9007199254740998n
```

出了使用`BigInt`构造函数创建`BigInt`类型的值，也可以在数字后面添加上`n`即可。

```javascript
console.log(typeof 9007199254740998n) // bigint
```

##### 与Number的区别

- `BigInt`不能使用`Math`对象中的方法
- 不能和`Nunber`进行运算
- `BigInt`转`Number`类型可能出现失去精度


#### 异步导入模块

```javascript

module1 = await import("module.js")

import("module.js").then((module) => {
  // something
});

```

#### 导入导出全部模块

```javascript

// 导入
import * as echart from 'echart'
// 导出
export * as Api from './Api.js'

```

#### 可选链

```javascript

let info={
    name:'_island',
    age:18,
    address:{
        region:"guangzhou",
    }
}

// ES11之前的写法
let region=info.address&&info.address.region

// 可选链用法，当没有region这个属性时返回undefined
let region2=info.address?region
```

#### 空值合并运算符

空值合并操作符（`??`）是一个逻辑操作符，当左侧的操作数为 `null` 或者 `undefined` 时，返回其右侧操作数，否则返回左侧操作数。（引用`MDN`）

与 `||` 不同的是当左侧操作数为空字符串或0时，会直接返回右侧的操作数。而`??`不会。

```javascript

0 ?? 1 // 0
'' ?? '1' // ''

0 || 1 // 1
'' || '1' // '1'

```
> 注意 ？？ 优先级高于 || and &&

从上面可以得出当`''` 或 `0`是一个有效的值时，`||`将无法达到我们预想的效果。


#### Promise.AllSettled

`AllSettled`传入一组`Promise`对象，直到所有`Promise`的状态已经`fulfilled`或`rejected`后，再返回一个存放对应状态的对象数组。存放每个传入的`Promise`的结果

> 与Promise.all有点相似，但是all方法是在任意一个Promise rejected时结束

```javascript

const promise1 = Promise.resolve(1);
const promise2= Promise.reject(2);

const res=await Promise.allSettled([promise1,promise2])
console.log(res)

// [
//     {
//         "status": "fulfilled",
//         "value": 1
//     },
//     {
//         "status": "rejected",
//         "reason": 2
//     }
// ]

```
#### String.matchAll

`matchAll`返回一个被正则表达式匹配到的结果及分组数据的数组

```javascript

const array = [...'test1test2'.matchAll(/test[0-9]/g)];

console.log(array);
// [
//     [
//         "test1"
//     ],
//     [
//         "test2"
//     ]
// ]

```

> 如果你想更深入理解它，可以看看MDN中的[String.prototype.matchAll()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)

## ES12

#### Array.at

```javascript

let arr=[1,2,3,4,5];

// 获取数组中最后一项
console.log(arr[arr.length-1]) // 5
console.log(arr.at(-1)) // 5

```
#### String.replaceAll

`replaceAll`用于批量替换字符串中指定的字符，并返回一个新的字符串。

```javascript

'hello world'.replaceAll('o','O')
// 'hellO wOrld'

```
> 和replace一样，第一个参数也可以使用正则表达式，当必须给/g标志。
#### promise.any
#### WeakRef
#### ||=
#### &&=
#### ??=
#### FinalizationRegistry

`FinalizationRegistry` 对象可以让你在对象被垃圾回收时请求一个回调。

```javascript

const registry = new FinalizationRegistry(heldValue => {
  // 当foo这个对象被回收时，会执行下面代码
    console.log(heldValue) // foo被销毁了
});

let foo = { bar: 0 }
registry.register(foo,'foo被销毁了');

foo = null

```

```javascript
let foo = 1
// 释放foo
foo=null

```
#### 数字分割符

对于大量数我们可能很难直接看出它的数量，所以在`ES12`中引入通过下划线来分割数字。

```javascript
let distanceToSun = 91772000000;
// es12
let distanceToSun = 91_772_000_000;
```
#### Array.sort 性能


