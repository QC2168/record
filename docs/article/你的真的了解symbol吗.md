# 你真的了解Symbol吗
### 什么是Symbol

`Symbol`是`ES6`中新增的一种基本数据类型，它是一个函数，会返回一个`Symbol`类型的值，每一个`Symbol`函数返回的值都是唯一的，它们可以被作为对象属性的标识符。

`Symbol`也具有静态属性和静态方法，它的静态属性会暴露几个内建的成员对象；它的静态方法会暴露全局`Symbol`注册。

> 注意Symbol不算是一个完整的构造函数，因为它不能使用new关键字进行调用

### 语法

```javascript

Symbol([description])

```

### typeof

```javascript

typeof Symbol(); // Symbol

```

> description是Symbol的标识符，是可选的（该特性是在ES10新增的）
### 上手Symbol基本用法

👇 使用`Symbol`值作为对象的key 👇

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

对面上面的例子你可能还不太明白Symbol的用途，我们在看下面这个例子。

```javascript

let info = {}

info.name='zhangshan'
info.age = 18

obj.s1
// zhangshan
obj.age
// 18

let age = Symbol('age')
info[age] = 20
info[age]
// 20

// 注意，请不要这样子定义属性，否则无法获取到对应的Symbol实例
info[Symbol('age')] = 20
```
从这个例子中，我们在info对象中设置了两个age属性，一个是Symbol符号定义，另外一个是通过字面量的方式定义。按ES6之前的写法在没有Symbol的情况下我们是没法在一个对象在设定同名的属性，而在这个例子中我们利用Symbol的唯一性给info对象再定义一个age属性。当你要获取对应的值时只需要通过对应的Symbol获取即可。
> Symbol('age') ：Symbol函数接收一个参数description，它是可选的，用来对Symbol的描述，可用于调试但不是访问 Symbol 本身。

### 获取对象中的Symbol

在`ES6`中，新增了`Object.getOwnPropertySymbols()`方法，用于获取一个对象中的`Symbol`属性的数组。

```javascript

let age = Symbol()
let info = {
    name:'zhangshan',
    [age]:18
}

console.log(Object.getOwnPropertySymbols(info))
// ['Symbol()']

```
它和`Object.getOwnPropertyNames()`方法类似，但是它不能获取到对象中的`Symbol`属性。
```javascript

console.log(Object.getOwnPropertyNames(info))
// ['name']

```

在`Object.keys`和`for...in`循环语句中也是无法获取到`Symbol`属性的

```javascript

for(const key in info){
    console.log(key)
}
// name

console.log(Object.keys(info))
// ['name']

```

### 全局Symbol

在前面的例子中我们定义的`s1`是一个本地的`Symbol`，如果你的项目中在运行时需要共享和复用`Symbol`实例，这就需要使用到`Symbol.for`和`Symbol.keyFor`方法了
### Symbol.for
`Symbol.for`方法，它接收一个`key`值，用于从`Symbol`注册表中获取对应的`Symbol`并返回，如果没有找到就创建一个新的`Symbol`与这个`key`进行关联，并放入全局`Symbol`注册表中。

```javascript

// 创建全局Symbol  key为foo
const fooGlob = Symbol.for('foo')

// 从全局注册表中获取foo Symbol
const fooGlob2 = Symbol.for('foo')

// 获取全局Symbol符号,需要传入标识符foo
const getFooGlob=Symbol.keyFor('foo')

```
> Symbol.for()和Symbol()不同之处是前者创建的Symbol都会存入到全局Symbol注册表中，在获取时如果有该Symbol时会返回该Symbol，否则创建。后者则是每次都会创建一个不同的Symbol实例。

### Symbol.keyFor

`Symbol.keyFor`方法用于获取全局`Symbol`注册表中与某个`Symbol`关联的键，它接收一个参数`sym`用于需要查找键值的某个`Symbol`，该方法会返回一个查找到`Symbol`的`key`值，否则返回`undefined`

```javascript

// 创建全局Symbol  key为foo
const fooGlob = Symbol.for('foo')

console.log(Symbol.keyFor(fooGlob))
// foo

// 创建本地Symbol 描述符为foo
const localFoo = Symbol('foo')
console.log(Symbol.keyFor(localFoo))
// undefined

```

### Symbol.length

`Symbol`也有`length`属性，值为`0`。

### 使用场景

在实际项目开发中，有哪些情景会使用到`Symbol`呢？

#### 模拟private

利用Symbol模拟private属性，让其外部无法访问到。
```javascript

const _Phone = Symbol()
export default class Foo{
    constructor(phone){
        this[_Phone] = phone
    }
}

```
> 在ES12中新增`Private Class Fields and Methods`，可以使得属性或方法无法被外界访问

#### 单例模式

```javascript
// Person.js

class Person{
    constructor(){
        this.name = '_island',
        this.age = 18
    }
}

const key = Symbol.for('Person')

if(!window[key]){
    window[key] = new Person()
}

export default window[key]

```

#### 代替魔法字符串

例如你的项目中有一个角色选择功能，你可能会根据它们的标识来判断做一些对应事件。

```javascript

if(type === 'DOCTOR'){
    // 一些要处理的事情
}

if(type === 'PATIENT'){
    // 一些要处理的事情
}

```

但是上面这种代码不是最好的解决方案，我们可以通过Symbol的方式对上面的代码进行修改。

```javascript

const UserType = {
    DOCTOR: Symbol(),
    PATIENT: Symbol()
}

if(type === UserType.DOCTOR){
    // 一些要处理的事情
}

if(type === UserType.PATIENT){
    // 一些要处理的事情
}

```
> 如果你的项目是使用typescript的，推荐使用enum来管理
## 常用内置符号
在`ES6`中也引入了一些常用的**内置符号**，也就是`well-known Symbol`。
它们用于暴露语言内部行为，开发者可以访问、重写、模拟这些行为。改变原生结构的行为，比如下面所说的for-of循环会在遍历对象上使用[Symbol.iterator],如果我们重写下[Symbol.iterator]的值，将改变迭代对象时的行为。

> 所有的内置符号属性都是不可写，不可枚举，不可配置的,它们就是全局函数Symbol的普通字符串属性，指向一个符号的实例

> 注意 在提到ECMAScript 规范时，经常会引用符号在规范中的名称，前缀为@@。比如@@iterator 指的就是Symbol.iterator
### Symbol.iterator

`iterator`是一个迭代器，当对象拥有了这一个迭代器之后可以使用`for...of`语句进行遍历。
在`Array`实例对象中存在`[Symbol.iterator]`属性，因此它可以使用`for...of`进行遍历。
```JavaScript

[][Symbol.iterator]
// f values() { [native code] }

```
如果你使用`for...of`语句去遍历一个对象时，控制台将抛出一个类型错误，告诉你遍历的对象不是一个`iterable`,因为`object`实例对象上不存在`[Symbol.iterator]`属性。

```javascript
let obj={a:'12'}
for(const item of obj){
    // Uncaught TypeError: obj is not iterable
    console.log(item)
}
```

在`ES6`之后出现了数组扩展运算符，其实际也是利用了`iterator`实现的，如果被解构的目标不存在[Symbol.iterator]是无法被正常解构的
```javascript

const numbers = [1, 2, 3]
sum(...numbers)
// 6

```
> 如果你还不熟悉什么是扩展运算符可以[点击这里](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

#### 引出关于对象的扩展问题

但日常开发中我们也经常会在对象中使用`...扩展运算符`，按上面的说法`JavaScript`中的对象是不存在`[Symbol.iterator]`属性的，那么为什么在对象也是使用...扩展运算符？

在这里我们需要分清一下扩展运算符了，扩展运算符分为对象扩展运算符，数组扩展运算符。当在数组中使用扩展运算符时是数组扩展运算符，当在对象中使用扩展运算符时是对象扩展运算符，（好吧，有点废话了）

对象扩展运算符是在`ES9`之后新增的规范，也即是在`ES9`之后我们才可以在对象中使用对象扩展运算符。

```javascript
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

x; // 1
y; // 2
z; // { a: 3, b: 4 }
```

(Object Rest/Spread Properties)[https://github.com/tc39/proposal-object-rest-spread]

### Symbol.asyncIterator
`asyncIterator`是一个异步迭代器，配合着`for-await-of`语句使用。
当使用`for-await-of`语句循环对象时，内部会调用`asyncIterator`这个函数，遍历异步可迭代对象以及同步可迭代对象。

```javascript
    class Demo {
        constructor(num) {
            this.num = num
        }
        async *[Symbol.asyncIterator]() {
            let i = 0
            while (i < this.num) {
                yield new Promise(resolve => resolve(i++))
            }
        }
    }
    const d1 = new Demo(5)
    async function asyncCount() {
        // 实现遍历
        for await (const item of d1) {
            console.log(item);
        }
    }
    asyncCount()
```

### Symbol.hasInstance
`Symbol.hasInstance`用于判断某对象是否为某构造器的实例。因此你可以用它自定义 `instanceof` 操作符在某个类上的行为。

当我们用`instanceof`操作符，会调用`Symbol.hasInstance`函数来确定关系。

```javascript

function Foo(){}
let f = new Foo()
console.log(f instanceof Foo) // true
console.log(Foo[Symbol.hasInstance](f)) // true

```

也可以修改它的默认行为，在类中重新定义这个静态方法。

```javascript

class Bar {
  static [Symbol.hasInstance](instance) {
    return false;
  }
}


let b = new Bar()
console.log(b instanceof Bar) // false
console.log(Bar[Symbol.hasInstance](b)) // false
```
### Symbol.species
`Symbol.species`用于当使用`Array.prototype.Map()`时生成派生对象的构造方法，取代原有的对象。除了`Map`方法，在`filter`、`slice`等方法也部署了`Symbol.species`。

```javascript

class Foo extends Array {}

f.map(i=>i) instanceof Foo; // true
f.map(i=>i) instanceof Array; // true

// 改变返回时

class Bar extends Array{
    static get [Symbol.species](){
    return Array
    }
}

let b = new Bar(1,2,3)

b.map(i=>i) instanceof Bar; // false
b.map(i=>i) instanceof Array; // true

```

### Symbol.match
`Symbol.match`用于匹配正则表达式而不是字符串，当调用`String.prototype.match()`时，会先去调用该函数。

```javascript

const fooReg = /foo/;
console.log('/foo/'.startsWith(fooReg));
// TypeError: First argument to String.prototype.startsWith must not be a regular expression

fooReg[Symbol.match] = false;
console.log('/foo/'.startsWith(regexp1)); // true
```

> `Symbol.match`还用于标识对象是否具有正则表达式的行为，例如String中的startsWith、endsWith方法都会去检测第一个参数是否为正则表达式，如果是就抛出TypeError，你可以使用Symbol.match修改它的行为。


### Symbol.isConcatSpreadable
`Symbol.isConcatSpreadable`用于配置某些对象作为`Array.prototype.concat()`方法时是否展开其数组元素。

```javascript
//默认情况下，被拼接的元素是展开的
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1.concat(arr2)) //  [1, 2, 3, 4, 5, 6]

// 将arr2的isConcatSpreadable设置为false
arr2[Symbol.isConcatSpreadable]=false
console.log(arr1.concat(arr2)) //  [1, 2, 3, Array(3)]

```
### Symbol.toStringTag

`Symbol.toStringTag`由内置方法`Object.prototype.toString()`使用，当通过`toString()`方法获取时，会检索由`Symbol.toString`指定的实例标识符，默认情况下为`Object`，在内置类型已经指定了这个值，但自定义实例默认是`undefined`，可以在自定义类添加`Symbol.toStringTag`属性即可添加上你的实例标识符。

```javascript

// 内置类型
let m = new Map()
console.log(m.toString()) // [object Map]
console.log(m[Symbol.toStringTag]) // Map


// 自定义类
class Foo{}
let f = new Foo()
console.log(f.toString())
console.log(f[Symbol.toStringTag]) // undefined


// 自定义实例标识符
class Bar {
  get [Symbol.toStringTag]() {
    return 'bar';
  }
}

let b = new Bar()
console.log(b.toString()) // [object bar]
console.log(b[Symbol.toStringTag]) // bar

```

### Symbol.toPrimitive

`Symbol.toPrimitive`用于当一个对象被转换成数据类型时会调用该函数。

```javascript

const foo = {
  [Symbol.toPrimitive](hint) {
    console.log(hint)
    if (hint === 'string') {
      return 'bar';
    }
    return null;
  }
};

console.log(String(foo)) // bar

```
### Symbol.unscopables

`Symbol.unscopables`用于解除对象属性在`with`语句中的绑定。
```javascript

const foo = {
    name:'_island',
    age:18
}

foo[Symbol.unscopables] = {
  name: true
};

with(foo){
    console.log(name) // 打印空白，因为name在with环境中已经被排除了
    console.log(age) // 18
}
```

> 不推荐使用with语句，所以也就不推荐使用Symbol.unscopables

### Symbol.replace

当该对象被`String.prototype.replace`方法调用时会调用`Symbol.replace`，会返回该方法的返回值。

```javascript

class Foo{
    [Symbol.replace](string){
        return 'foo' + string
    }
}

console.log('bar'.replace(new Foo()))
// foobar
```