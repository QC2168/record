# javascript进阶
## 浏览器的工作原理

在浏览器中`JavaScript`代码是如何执行的

`js`也可以`node`里执行，因为里边有`v8`引擎

![image-20211222201942856](https://gitee.com/QC2168/note-img/raw/master/202112222019125.png)

- 加载`html`文件（首先）
  - 遇到`link`标签下载对应的`css`文件
  - 遇到`script`标签下载对应的`css`文件

## 浏览器内核

解析过程是经过浏览器内核处理

不同浏览器是不同的内核组成的，内核也是浏览器非常重要的组成部分

| 内核    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| Gecko   | 早期`Netscape`和`Mozilla FireFox`浏览器使用                  |
| Trident | 微软开发，`IE4-IE11`使用，`Edge`浏览器现使用`Blink`          |
| Webkit  | 苹果基于`KHTML`开发、开源，用于`Safari`，（`chrome`之前也在使用） |
| Blink   | 是`Webkit`的一个分支，`Google`开发，目前应用于`Google Chrome`、`Edge`、`Opera`等 |



## 排版引擎

`layout engine`

内核的另外一个叫法，也有称为浏览器引擎（`browser engine`），页面渲染引擎（`rendering engine`），样板引擎



## 浏览器渲染过程

加载html文件时，遇到script标签之后，会停止解析HTML，去加载执行JavaScript代码

（JavaScript代码由js引擎处理）

![image-20211222203338833](https://gitee.com/QC2168/note-img/raw/master/202112222033032.png)

## JavaScript引擎

- JavaScript是高级语言，最终需要被转成机器指令来执行
- 我们编写的JavaScript代码无论是给浏览器 / Node执行，最后都是需要被CPU执行的
- 但CPU只认识自己的指令集，即机器语言，才能被CPU所执行
- 所以我们需要**`JavaScript`引擎**把**`JavaScript`代码**转化为**CPU指令**来执行

![image-20211222204535128](https://gitee.com/QC2168/note-img/raw/master/202112222045233.png)

常见的JavaScript引擎

| 名称           | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| SpiderMonkey   | 第一款JavaScript引擎，由Brendan Eich开发（也就是JavaScript作者） |
| Chakra         | 微软开发，用于IE浏览器                                       |
| JavaScriptCore | Webkit中的js引擎，小程序中也用到了，apple开发                |
| V8             | Google开发的，也帮助chrome从众多浏览器中脱颖而出             |

## 浏览器内核和JavaScript引擎的关系

（ 以webkit为例 ）

webCore负责HTML CSS解析、布局、渲染等工作

JavaScriptCore 解析、执行JavaScript代码

## V8引擎的原理

V8是用C++开发的，是一个开源、高性能的JavaScript和WebAssembly引擎

可以在多个平台运行，Win系统，macOS，使用X64、IA-21，ARM或者MIPS处理器的linux系统上运行

V8使用得比较多的有Chrome和Node.js等

V8可以独立运行，嵌套到任何C++程序中

## V8引擎架构图

![image-20211222210135934](https://gitee.com/QC2168/note-img/raw/master/202112222101126.png)

```
const name = '张三'
```

V8引擎中的Parse或者PreParser会对这行代码进行词法分析，会生成一个tokens（是一个数组），每个值是一个对象`tokens:[{type:'keyword',value:'const'},{type:'identidfier',value:'name'} ...]`

划分出不同的类型之后，再进行语法分析生成AST抽象语法树（www.astexplorer.net 推荐一个在线生成AST抽象语法树）之后，经过ignition（V8引擎中一个库）转为`bytecode`字节码，V8再将组字节码（字节码是跨平台的）转换为CPU的指令集

TurboFan库，收集函数执行的信息，会标签执行次数比较多的函数，并将这个函数优化成机器指令。（后续不再进行转换，提高性能）



## 相关模块说明

- Parse是一个解析器会将JavaScript代码转成AST

  - 如果函数没有被调用，那么是不会被转换成AST的

- PerParse预解析

  - 不是所有JavaScript代码，在一开始就会被执行，如果对所有JavaScript代码进行解析，必然会影响页面运行效率

  - 所以有了**`lazy Parsing`** 延迟解析方案，它的作用是将不必要的函数进行预解析，只解析暂时需要的代码，而对函数的全量解析是在函数被调用时才会进行

  - 例如以下代码，对f2函数进行预解析处理

    ```javascript
    function f1(){
      function f2(){
        var name='张三'
      }
    }
    f1()
    ```

    

- Ignition是一个解释器，会将AST转换成ByteCode字节码

  - 同时会收集TurboFan优化所需要的信息（例如函数参数的类型信息，有了类型才能进行真实的运算）
  - 如果函数只调用一次，Ignition会执行解析执行byteCode

- TurboFan是一个编译器，可以将字节码编译为CPU可以直接执行的机器码

  - 如果一个函数被多次调用，那么就会被标记为热点函数，并经过TurboFan转换成优化的机器码，提高代码的执行性能
  - 后续如果执行函数过程中，类型发生了变化，之前优化的机器码不能正确处理，就会逆向转换为字节码





## 全局代码执行



## 变量环境 / 记录

## 早期ECMA的版本规范

AO / GO

VO : GO

VO : AO

ECMAScript5 之前

每一个执行上下文会被关联到一个变量对象（Variable object，VO），在源代码中的变量和函数声明会被作为属性添加到VO中。对于函数来说，参数也会被添加到VO中

## 最新ECMA的版本规范

Variable Environment 变量环境 

每一个执行上下文会关联到一个变量环境（variable environment）中，在执行代码中变量和函数的声明会作为环境记录（environment record）添加到变量环境中，对于函数来说，参数也会被作为环境记录添加到变量记录中



## 认识内存管理

不管什么样的编程语言，在代码执行过程中都是需要给他分配内存的，不同的是某些编程语言需要我们手动的管理内存，某些编程语言会可以自动帮助我们管理内存

## **磁盘 TO 内存 TO CPU**

## 内存管理生命周期

1. 分配申请你需要的内存（申请）
2. 使用分配的内存（存放数据，比如对象等）
3. 不需要使用时，对其进行释放

> JavaScript通常情况下是不需要手动来管理的（还有java、JavaScript、python、swift、dart等，它们都会自动帮助我们管理内存），手动管理（C、C++，早期OC）

- javaScript会在定义变量时为我们**分配内存**
- 内存分配方式的不同
  - JS对于**基本数据类型**内存的分配会在执行时**直接在栈空间分配**
  - JS对于**复杂数据类型**内存的分配会在栈内存中**开辟一块空间**，并且将这块空间的**指针返回值变量引用**



## 垃圾回收

- **内存大小有限**，当内存不再需要时，需要**对其进行释放**，以便**腾出更多内存**空间
- 在手动管理内存的语言中，我们需要**通过一些方式来进行内存释放**，例如free函数：
  - 这种管理方式**效率非常低**，影响我们编写**逻辑代码的效率**
  - 并且这种方式对开发者要求也很高，并且**一不小心就会产生内存泄漏**
- 所以大部分现代编程语言都有自己的垃圾回收机制
  - 垃圾回收 英文是**Garbage Collection** 简称GC
  - 对于那些**不再使用的对象**，都称之为**垃圾**，需要被**回收**，以**释放更多的内存**空间
  - 而我们的语言运行环境，比如java运行环境JVM，JavaScript运行环境js引擎都有垃圾回收器
  - 垃圾回收器简称**GC**，很多地方看到**GC**其实就是垃圾回收器

- GC算法
  - 引用技术
  - 标记清除
    - 设置一个根对象（root object），垃圾回收器会定期从这个根开始，找所有从根开始有引用到的对象，对于哪些没有引用到的对象，就认为不可用对象（不可达对象）
    - 这个算法很好解决了循环引用问题
    - js引擎比较广泛的采用标记清除算法，当然类似于V8引擎为了进行更好优化，它在算法实现细节上也会结合一些其他算法，进行选择

## JS函数

jS中是函数一等公民

一等公民说明这个东西很灵活，函数作为参数、返回值

- 在JavaScript中，函数是非常重要的，并且是一等公民
  - 那么就意味着函数的使用是非常灵活
  - 函数可以作为另外一个函数的参数，也可以作为另外一个函数的返回值来使用
- 自己编写高阶函数
- 使用内置的高阶函数
- vue3（composition api）和react（hooks）也开始使用函数式编程





## JavaScript中闭包的定义

- 计算机科学中的定义
  - 闭包（Closure），称为**词法闭包**（Lexical Closure）或者**函数闭包**（function closure）
  - 是在支持头等函数（**作为第一公民**）的编程语言中，实现词法绑定的一种技术
  - 闭包在实现上是一个**结构体**，它存储了**一个函数和一个关联的环境**（相当于一个符号查找表）
  - 闭包跟函数最大的区别在于，在捕捉闭包的时候，它的**自由变量**会在捕捉时被确定，这样即使脱离了捕捉时的上下文，它也能照常运行（**这句话是核心**）
- 闭包的概念出现于60年代，最早实现闭包的程序是Scheme，那么我们就可以理解为什么JavaScript中有闭包
  - 因为JavaScript中有大量的设计是来源于Scheme
- MDN对闭包解释
  - 一个函数和对其周围状态（`lexical environment`，**词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样子的组合就是**闭包**（closure）；
  - 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域
  - 在JavaScript中，**每当创建一个函数，闭包就会在函数创建时同时被创建出来**
- 总结
  - 一个普通的函数function，如果它可以访问外层作用于的自由变量，那么这个函数就是一个闭包
  - 从广义的角度来说，JavaScript中的函数都是闭包
  - 从狭义的角度来说，JavaScript中一个函数，如果访问了外层作用域的变量，那么它就是一个闭包

## 闭包内存泄漏

## 闭包内存回收

![image-20211228210643885](https://gitee.com/QC2168/note-img/raw/master/202112282106110.png)

```
setTimeout(() => {
  arrayFns=null
}, 3000);
```

![image-20211228211300204](https://gitee.com/QC2168/note-img/raw/master/202112282113310.png)

![image-20211228211726580](https://gitee.com/QC2168/note-img/raw/master/202112282117754.png)

## 为什么需要this

- 在常见的编程语言中，几乎都有this这个关键字（Objective-C中使用的是self），但是JavaScript中的this和常见的面向对象语言的this不太一样

  - 常见面向对象的编程语言中，比如java，C++，Swift，Dart等等一系列语言中，this通常只会出现在类方法中

  - 也就是你需要有一个类，类中方法（特别是实例方法）中，this代表的是当前调用对象

  - 但是JavaScript中的this更加灵活，无论是它出现的位置还是它代表的含义

  - ```javascript
    class Person{
    	name:'hxh',
    	speak(){
    		console.log(this) // 当前实例对象
    	}
    }
    ```


## this的作用

```javascript
var obj={
  name:'hxh',
  eating:function(){
    console.log(obj.name+'在吃东西');
  },
  running:function(){
    console.log(obj.name+'在跑步');
  },
  studying:function(){
    console.log(obj.name+'在学习');
  },
}
// 从某些角度来说，开发中如果没有obj，很多的问题我们也是有解决方案的
// 但是如果没有this，会让我们编写代码变得非常不方便
obj.eating()
obj.running()
obj.studying()

var obj={
  name:'hxh',
  eating:function(){
    console.log(this.name+'在吃东西');
  },
  running:function(){
    console.log(this.name+'在跑步');
  },
  studying:function(){
    console.log(this.name+'在学习');
  },
}
```

## this指向什么

1. 函数在调用时，JavaScript会默认给this绑定一个值
2. this的绑定和定义的位置是没有关系的
3. this1的绑定和调用方式以及调用位置有关系
4. this是在运行时被绑定的

## 全局作用域中的this指向

大多数情况下，this都是出现在函数中的，而在全局作用域中也有this

- 浏览器中全局作用域中的this指向`window` （`globalObject`）
- NODE中全局作用域中的this指向 `{}` （空对象）
  - 因为在`node`执行的时候，`node`会把这个`js`文件当成一个模块，加载模块，编译代码，放到一个函数里面.`apply`({})
  - 在`node`环境下如果执行打印`window`会报错`no defined`

```javascript
浏览器环境：
console.log(this); // window
Node环境：
console.log(this); // {}
console.log(window); // 在node会报错, no defined
```

## this绑定规则

## 默认绑定

- 独立的函数调用可以理解成函数没有被绑定到某个对象上进行调用

## 默认绑定的案例一

```javascript
function foo(){
  console.log(this);
}
// 默认绑定，是一个独立函数，没有绑定对象
// 指向window
foo()
```

## 默认绑定的案例二

```javascript
function foo1(){
  console.log(this); // window
}

function foo2(){
  console.log(this); // window
  foo1()
}

function foo3(){
  console.log(this); // window
  foo2()
}

foo3()
```

## 默认绑定的案例三

```javascript
var obj={
  name:'hxh',
  foo:function(){
    console.log(this);
  }
}

var bar=obj.foo
obj.foo() // {name: 'hxh', foo: ƒ}
// 和位置没有关系
bar() // window
```

## 默认绑定的案例四

```javascript
function foo() {
  console.log(this);
}
var obj = {
  name: "hxh",
  foo: foo
};

var bar = obj.foo;
// 和位置没有关系
bar(); // window
```

## 默认绑定的案例五

```javascript
function foo(){  return function(){    console.log(this);  }}var fn=foo()// 也是独立调用fn() // window
```

## 默认绑定的案例六

```javascript
var obj={  eating:fn // 隐式绑定}obj.eating() // {eating: ƒ}
```

## 隐式绑定

- 它的调用位置是通过某个对象发起的函数调用，例如`obj2.bar()`
- object对象会被js引擎绑定到fn函数中this里面

## 隐式绑定的案例一

```javascript
function foo(){  console.log(this);}// 独立函数调用// foo()var obj={  name:'hxh',  foo:foo}obj.foo() // obj对象
```

## 隐式绑定的案例二

```javascript
var obj={  name:'hxh',  eating:function (){    console.log(this.name+'在吃东西');  },  running:function(){    console.log(this.name+'在跑步');  }}obj.eating()obj.running()var fn=obj.eatingfn() // 获取不到this.name，this指向fn
```

## 隐式绑定的案例三

```javascript
var obj1={  name:'obj1',  foo:function(){    console.log(this);  }}var obj2={  name:'obj2',  bar:obj1.foo}obj2.bar() // obj2对象
```

## 显示绑定

- 前提条件
  - 必须在调用的对象内部有一个对函数的引用（比如一个属性）
  - 假使没有这样引用，在进行调用时，会报找不到该函数的错误
  - 正是通过这个引用，间接的将this绑定到这个对象上
- 如果不希望在对象内部包含这个函数的引用，同时又希望在这个对象上强制调用
  - JavaScript所有的函数都可以使用call和apply方法（这个和prototype有关）
  - 这两个函数的第一个参数都要求是一个对象，这个对象是给this准备的
  - 调用这个函数时，会将this绑定到这个传入的对象上

## 显示绑定的案例 | call apply

```javascript
function foo(){  console.log('函数被调用了');  console.log(this);}var obj={  name:'obj'}foo() // windowfoo.call(obj) // objfoo.apply(obj) // objfoo.apply('aaa') // aaa// call和apply有什么区别// call和apply在执行函数时，是可以明确的绑定this，这个绑定规则称之为显示绑定function sum(num1,num2){  console.log(num1+num2,this);}sum(10,20)sum.call('call',10,20)sum.apply('apply',[10,20])
```

- foo直接调用和call / apply调用的不同在于this绑定的不同
- foo直接调用指向的是全局对象（window）

显示绑定的案例 | bind

```javascript
function foo(){  console.log(this);}foo.b('aaa') // 'aaa'
```

- 默认绑定和显示绑定bind会发生冲突，之所以优先级为 显示绑定高于默认绑定

> bind会在堆内容开辟一块新的空间来存放这个新的函数

## new绑定

- JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字
- 使用new关键字来调用函数是，会执行如下的操作
  - 创建一个全新的对象，内部将调用一个函数时（构造器）
  - 这个新对象会被执行prototype连接
  - 这个新对象会绑定到函数调用的this上（**this的绑定在这个步骤完成**）
  - 如果函数没有返回其他对象，表达式会返回这个新对象

## new绑定的案例

```
function Person(name,age) {  this.name=name  this.age=age  return this;}var p1 = new Person('hxh',21);console.log(p1.name,p1.age);
```

## 规律优先级

- 默认规则优先级最低
- 显示绑定优先级高于隐式绑定
- new绑定优先级高于隐式绑定
- new绑定优先级高于bind
  - new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高
  - new绑定可以和bind一起使用，new绑定优先级更高



new绑定 -> 显示绑定 -> 隐式绑定

## this规则之外

## 忽略显示绑定

## ES6箭头函数

- 箭头函数不使用this的四种标准规则（也就是不绑定this），而是根据外层作用域来决定this



## 箭头函数 arrow function

- 箭头函数是**ES6之后增加**的一种编写函数的方法，并且它比函数表达式要更加简洁：
  - 箭头函数**不会绑定this、arguments属性**
  - 箭头函数不能作为构造函数来使用（**不能和new一起来使用，会抛出错误**）



## 实现apply、call、bind函数

![image-20220102161416445](https://gitee.com/QC2168/note-img/raw/master/202201021614548.png)

apply call bind 绑定的this对象，在内部保存的是内存地址

> 注意：练习函数、this、调用关系，不考虑一些边界情况，其实它底层实现是C++代码，但这里我们通过JavaScript来模拟这些函数

## call实现

```javascript
Function.prototype.mycall = function (thisArg, ...args) {
  console.log("mycall被调用了");
  // 获取需要被执行的函数
  var fn = this;
  // 对thisArg转成对象类型（防止传入的是非对象类型）
  thisArg = thisArg ? Object(thisArg) : window;
  //调用需要被执行的函数
  thisArg.fn = fn;
  var result = thisArg.fn(...args);
  // 删除属性
  delete thisArg.fn;

  // 将最终的结果返回出去
  return result;
};
```

## apply实现

```javascript
Function.prototype.myapply = function (thisArg, args=[]) {
  // 获取需要被执行的函数
  var fn = this;
  // 将thisArg转成对象
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  // 调用需要执行的函数
  thisArg.fn=fn
  var result=thisArg.fn(...args)
  // 删除属性
  delete thisArg.fn
  // 返回数据
  return result
};
function foo(){
  console.log(this);
}
function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2);
  return num1 + num2;
}
```

## bind实现

```javascript
Function.prototype.mybind = function (thisArg, ...argArray) {
  // 获取到真实需要调用的函数
  var fn = this;
  // 绑定this
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  function proxyFn(...args) {
    // 将函数放到thisArg中进行调用
    thisArg.fn = fn;
    // 特殊情况，将传入的两个数组进行合并
    var finalArgs = [...argArray, ...args];
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  }
  // 返回结果
  return proxyFn;
};

```

## arguments

- arguments是一个对应传递给函数的参数的类数组（`array-like`）对象
- array-like意味着它不是一个数组类型，而是一个对象类型
  - 但它却拥有一些特性，比如length比如可以通过index来访问
  - 但它却没有数组的一些方法，比如`forEach`、`map`等

## 理解JavaScript纯函数

函数式编程中有个非常重要的概念叫纯函数，JavaScript符合函数式编程的范式，所以也有纯函数的概念

- 在react开发中纯函数是被多次提及的
- 比如react中组件就被要求像是一个纯函数，redux中有一个reducer的概念，也是要求必须是纯函数
- 所以掌握纯函数对于理解很多框架的设计是非常有帮助的

纯函数的维基百科定义

- 在程序设计中，若一个函数符合以下条件，那么这个函数被称为函数
- 此函数在**相同的输入值时**，需产生相同的**输出**
- 函数的**输出和输入值以外的其他隐藏信息或状态无关**，也和由**IO设备产生的外部输出无关**
- 该函数不能**有语义上可观察的函数副作用**，例如“**触发事件**”，使输出设备输出，或更改输出值以外物件的内容等

总结一下

- 确定的输入，一定会产生确定的输出
- 函数在执行过程中，不能产生副作用



## 副作用的理解

- 副作用英文为side effect，这里表示在**执行一个函数**时，除了返回函数值之外，还对**调用函数产生了附加的影响**，比如**修改全局变量**，**修改参数**，**改变外部的存储**
- 副作用往往是产生BUG的温床



## 纯函数

- slice 截取数组的时候不会对原数组进行任何

  - ```javascript
    var names=['abc','cba','df','zs']
    
    // slice 生成新数组，原数组不动  这里是纯函数
    var newNames1=names.slice(0,3)
    console.log(newNames1); // [ 'abc', 'cba', 'df' ]
    console.log(names); // [ 'abc', 'cba', 'df', 'zs' ]
    ```

- splice 截取数组的时候会对原数组进行操作，所以不是一个纯函数

  - ```javascript
    // splice 会修改原数组 （产生副作用）
    // 不符合纯函数的要求
    // 在开发的时候尽量使用纯函数
    var newNames2=names.splice(2)
    console.log(newNames2); // [ 'df', 'zs' ]
    console.log(names); // [ 'df', 'zs' ]
    ```

## 练习纯函数的案例

## foo

```javascript
// foo是纯函数
// 相同的输入一定的产生相同的输出
// 没有修改外界的数据
// 在执行时不会产生副作用
function foo(num1,num2){
  return num1*2+num2*num2
}
```

## bar

```javascript
// bar不是纯函数
// 修改了外界的变量
var name='hxh' 
function bar(){
  console.log('bar其他代码执行');
  name='abc'
}

bar()
console.log(name);
// abc
```

## baz

```javascript
// baz不是一个纯函数
// 修改了外面对象的值
function baz(info){
  info.age=100
}

var obj={
  name:'hxh',
  age:18
}

baz(obj)
console.log(obj);
// 修改了原来的值
// { name: 'hxh', age: 100 }
```

## test

```javascript
// test是一个纯函数
// 没有修改其他值
// 相同的输入一定的产生相同的输出
function test(info){
  return {
    ...info,
    age:100
  }
}

console.log(test(obj));
// { name: 'hxh', age: 100 }
console.log(obj);
// { name: 'hxh', age: 18 }
```

## 特殊

```javascript
function printInfo(info){
  // 严格来说，它不是纯函数（有输出）
  console.log(info.name,info.age);
  info.name='abc';
}
```

## 纯函数的优点

- 纯函数在函数式编程中非常**重要**
  - 可以**安心的编写和使用**（不会影响外部的数据）
  - 在**写纯函数的时候**保证了函数的纯度，**只单纯实现自己的业务逻辑**即可，**不需要关心**传入的内容是**任何获取**或者**依赖其他外部变量**是否已经发生了改变
  - 在**用的时候**，确定**你的输入内容不会被任意篡改**，并且**自己确定的输入**，一定会**有确定的输出**

## JavaScript柯里化

- 柯里化也是属于函数式编程里面一个非常重要的概念

  - 在计算机科学中，**柯里化**（Currying），又译为**卡瑞化**、**加里化**
  - 把接收的**多个参数的函数**，变成**接收一个单一参数**（最初函数的第一个参数）的函数，并且返回**接收余下的参数**，而且**返回结果的新函数的计数**
  - 柯里化声称“**如果你固定某些参数，你将得到接收余下参数的一个函数**

- 柯里化总结

  - **只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数**
  - 这个过程就称之为**柯里化**

  

## 柯里化过程

拆分函数参数

```javascript
function foo(a,b,c,d){
  return a+b+c+d
}

foo(10,20,30,40)

// 柯里化的过程
function foo(a){
  return function(b){
    return function(c){
      return function(d){
        a+b+c+d
      }
    }
  }
}

foo()
```

## 柯里化的作用

## 让函数的职责单一

- 在函数式编程中，一个函数只**处理一个问题**，而不是将**很多个问题交给一个函数来处理**（**单一职责原则**）
- 我们是否就可以**将每次传入的参数在单一的函数中进行处理**，处理完之后在下一个函数中再使用处理后的结果

## 例子一

假如，我们需要经常把一个数字5和另外一个数字进行相加操作。

**普通做法**

```javascript
function sum(m,n){
  return m+n
}
console.log(sum(5,10));
```

**柯里化**

```javascript
const makeAdder=count=>num=>count+num;

var res=makeAdder(5)(10)
var adder5=makeAdder(5)
console.log(res); 
console.log(adder5(10));
```

## 例子二

在项目中我们封装了一个常用的方法log，在正常使用的情况下，前面两个参数传入是一致的，此时我们可以使用柯里化来优化以下代码段

```javascript
function log(date,type,msg){
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${msg}]`);
}

log(new Date(),'DEBUG','查找一个到BUG')
log(new Date(),'DEBUG','查找一个到BUG')
```

**柯里化**

```javascript
const log=date=>type=>msg=>console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${msg}]`);

var defineLog=log(new Date())
defineLog('DEBUG')('找到一个BUG')
defineLog('DEBUG')('找到一个BUG')
```

## 实现柯里化

```javascript
function hyCurrying(fn) {
  function curried(...args) {
    // 判断当前已经接收到的参数的个数，和参数本身需要接收的参数一致
    // 1.当已经传入的参数，大于等于 需要的参数时，就执行函数
    // console.log(args.length);
    // fn有个length属性，可以通过这个属性获取参数
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      // 没有达到个数时，需要返回一个新的函数，继续来接收的参数
      function curried2(...args2) {
        // 接收到参数之后，递归调用curried函数检查函数的个数是否达到要求
        return curried.apply(this, [...args, ...args2]);
      }
      return curried2;
    }
  }
  return curried;
}
```

使用封装的柯里化函数，将我们的方法传入即可

```javascript
var curryAdd = hyCurrying(add1);
var r1=add1(10, 20, 30);
var r2=curryAdd(10, 20, 30);
var r3=curryAdd(10, 20)(30);
```



## 组合函数

组合函数在`JavaScript`开发过程中一种对函数的使用技巧、模式，假使你现在要处理一项业务，需要调用到两个函数，而这两个函数是依次调用的，那么我们可以将这个函数组合起来（这个过程就是组合函数（`compose function`））

举个例子，下面有`double`和`square`函数，我们业务场景是先调用`double`再将`double`函数返回的数据传递给square函数处理，我们可以使用组合函数方式组合以上两个函数

**普通使用**

```javascript
function double(num){
  return num*2
}

function square(num){
  return num**2
}

var count=10
var res=square(double(count))
console.log(res); // 400
```

**组合函数的使用**

```javascript
function double(num){
  return num*2
}

function square(num){
  return num**2
}

function composeFn(m,n){
  return function(count){
    return n(m(count))
  }
}

var newFn=composeFn(double,square)
var res2=newFn(count)
console.log(res2); // 400
```

## 实现组合函数

```javascript
function MyCompose(...fns) {
  var length = fns.length;
  // 判断传入的参数是否为函数
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== "function") {
      throw new TypeError("Expected arguments are functions");
    }
  }
  // 返回一个接收参数的函数
  function compose(...args) {
    // 当前执行函数索引
    var index = 0;
    // 调用当前索引对应的函数
    var result = length ? fns[index].apply(this, args) : args;
    while (++index < length) {
      // 将上一次返回的结果，传入到下一个函数中
      var result = fns[index].call(this, result);
    }
    return result;
  }
  return compose;
}

// 调用通用组合函数

function double(num) {
  return num * 2;
}

function square(num) {
  return num ** 2;
}

console.log(MyCompose(double, square)(10));
```

## 结合律

结合律 （英文为 `associativity`），函数的组合要满足结合律，例如`a`、`b`、`c`三个函数进行组合，可以将`a`和`b`进行组合，或者是`b`和`c`进行组合。这个特性计算结合律。

```javascript
let fn = compose(a,b,c);
let ass1 = compose(compose(a,b),c);
let ass2 = compose(composea,(b,c));
```

## pointfree

`pointfree`是一种编程风格，这种风格也被称之为`Tacit programming`，`point`代表形参，意思是没有形参的编程风格。

```javascript
// pointfree风格，带有word形参
var word = (word) => word.toUpperCase();

// pointfree风格，没有任何形参
var word = compose(toUpperCase);
```

也就是说，我们完全可以把数据处理的过程，定义成一种与参数无关的合成运算。不需要用到代表数据的那个参数，只要把一些简单的运算步骤合成在一起即可。

它省去了对参数命名的麻烦，代码也更加简洁优雅。`pointfree`是基础函数的组合的高级函数，这些高级函数往往应用在我们的业务中。

## Debug

从上面的知识中，我们知道组合函数是多个函数的组合，当组合函数返回的结果与预期不符合时，如何去调试它？

- 对中间的值进行打印，并且知道当前执行位置

```javascript
var log = MyCurrying((t, v) => {
  console.log(t, v);
  return v;
});
```

- 在组合函数中，按照从左往右的顺序，给个函数套上log函数，就可以知道每次输出的值

```javascript
var newFn = MyCompose(double,log('double--'),square,log('double--'));
var res2 = newFn(10);
// double-- 20
// double-- 400
// 400
```

## with语句

## eval语句

eval是一个特殊的函数，它可以将传入的字符串当JavaScript代码来运行

```javascript
console.log(eval('1+1')); // 2
console.log(1+1); // 2
```

- 实际开发中不要使用eval
  - eval可读性很差
  - eval是一个字符串，有被篡改的可能
  - eval执行必须经过js解释器，不能被js引擎优化

## 严格模式

- 在ECMAScript5标准中，JavaScript提出了严格模式的概念（Strict Mode）
  - 是一个有限制性的JavaScript模式，从而**使代码隐式的脱离了懒散（sloppy）模式**
  - 支持严格模式的浏览器在**检测代码中有严格模式时**（开头 `use strict`），会以更加严格模式对代码进行检测和执行
- 严格模式对正常的JavaScript语义进行了一些限制
  - 严格模式通过抛出错误来消除一些原有的静默错误（例如 123.name=‘island’，这不会造成严重的错误，所以不会报错，但严格模式下不能这样子写）
  - 严格模式让**js引擎在执行代码时可以进行更多的优化**（不需要对一些特殊的语法进行处理）
  - 严格模式禁用了**在ECMAScript未来版本中可以会定义的一些语法**（保留字class const let和关键字function var new）（保留字会升级成关键字）

## 如何开启严格模式

- 在JS文件中开启严格模式
  - 在文件开头写`use strict`
- 在单个function开启严格模式
  - 在函数的开头写`use strict`

## 严格模式的限制



## 面向对象

- 面向对象是现实的抽象方式
- 对象是JavaScript中一个非常重要的概念，这是因为对象可以将多个相关的数据封装到一起，更好的描述一个事务
- JavaScript支持多种编程范式，包括函数式编程和面向对象编程
  - 对象是一组属性的无序集合，像是一个哈希表，有key和value组成
  - key是标识符的名称，value可以是任意类型，也可以是对象或者函数
  - 如果值是函数，我们称为对象的方法

## Object.defineProperty

该方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象

MDN：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

```
语法 Object.defineProperty(obj, prop, descriptor)
```

- obj 要定义属性的对象。
- prop 要定义或修改的属性的名称或 [`Symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 。
- descriptor 要定义或修改的属性描述符。



## 属性描述符

## 数据属性描述符

- configurable表示属性是否通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符
  - 当我们直接在一个对象上定义某个属性时，这个属性的configurable为true
  - 当我们通过属性描述符定义一个属性时，这个属性的configurable默认为false
- enumerable表示属性是否可以通过for-in 和 object.keys查看，返回该属性
  - 当我们在一个对象上定义某个属性时，这个enumerable属性为true
  - 当我们通过属性描述符定义一个属性时，这个enumerable属性为false
- writable表示是否可以修改属性的值
  - 当我们在一个对象上定义某个属性时，这个writable属性为true
  - 当我们通过属性描述符定义一个属性时，这个writable属性为false
- value属性的值，读取属性时会返回该值，修改属性时也会被修改
  - 默认情况下为undefined

```javascript
// 通过字面量方式创建的对象，数据属性描述符默认都是true
var obj={
  name:'_island',
  age:18
}

Object.defineProperty(obj,'address',{
  // 这个属性不能删除 // 不能重新定义属性描述符
  configurable:false,
  value:'广州市',
  // 配置属性是否可以枚举
  enumerable:true,
  writable:false

  // 如果以上属性不写，默认都是false
})

delete obj.address
console.log(obj.address); // 广州市
//   enumerable:false
console.log(obj); // { name: '_island', age: 18 }
//   enumerable:true
console.log(obj); // { name: '_island', age: 18, address: '广州市' }

obj.address='潮汕'
console.log(obj);// { name: '_island', age: 18, address: '广州市' }
```

## 定义多个属性描述符

可以`Object.defineProperties`属性定义多个属性描述符，每个属性以对象的形式进行定义。

```
var obj = {
  // 私有属性
  _age: 18,
};

Object.defineProperties(obj, {
  name: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: "_island"
  },
  age:{
    configurable:false,
    enumerable:false,
    get:()=>{
      console.log('调用了ages get');
      return this._age
    },
    set:(val)=>{
      console.log('调用了ages set');
      this._age=val
    }
  }
});
// 除了上面的写法，也可以这样子写，但会有一点差异，比如可枚举
var obj = {
  // 私有属性
  _age: 18,
  // 也可以这样子写
  set age(val) {
    this._age = val;
  },
  get age() {
    return this._age;
  }
};
```

## 存取属性描述符

- configurable表示属性是否通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符
  - 当我们直接在一个对象上定义某个属性时，这个属性的configurable为true
  - 当我们通过属性描述符定义一个属性时，这个属性的configurable默认为false
- enumerable表示属性是否可以通过for-in 和 object.keys查看，返回该属性
  - 当我们在一个对象上定义某个属性时，这个enumerable属性为true
  - 当我们通过属性描述符定义一个属性时，这个enumerable属性为false
- get
  - 获取属性时会执行的函数，默认为undefined
- set
  - 设置属性时会执行的函数，默认为undefined

```javascript
var obj={
  name:'_island',
  age:18,
  _address:'广州市'
}

// 隐藏某个私有属性
// 截获某个属性的访问和设置的过程，也会使用存取属性描述符
Object.defineProperty(obj,'address',{
  enumerable:true,
  configurable:true,
  get:function(){
    foo()
      return this._address
  },
  set:function(val){
    this._address=val
  }
})

console.log(obj.address);
obj.address='潮汕'
console.log(obj.address);

function foo(){
  console.log('获取了address的值');
}
```

## 获取属性描述符

```javascript
var obj = {
  // 私有属性
  _age: 18,
};

Object.defineProperties(obj, {
  name: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: "_island"
  },
  age:{
    configurable:false,
    enumerable:false,
    get:()=>{
      console.log('调用了ages get');
      return this._age
    },
    set:(val)=>{
      console.log('调用了ages set');
      this._age=val
    }
  }
});
```

```javascript
// 获取属性描述符
console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// {
//   value: '_island',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
console.log(Object.getOwnPropertyDescriptor(obj,'age'));
// {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: false,
//   configurable: false
// }

// 获取对象所有描述符
console.log(Object.getOwnPropertyDescriptors(obj));
// {
//   _age: { value: 18, writable: true, enumerable: true, configurable: true }, 
//   name: {
//     value: '_island',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: false,
//     configurable: false
//   }
// }
```

## 额外的Object方法

- `Object.preventExtensions()`方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
- `Object.seal()`方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。
- `Object.freeze()` 方法可以**冻结**一个对象。一个被冻结的对象再也不能被修改



```javascript
var obj={
  name:'_island',
  age:18
}

// 禁止对象添加新的属性
Object.preventExtensions(obj)
obj.address='广州市'
console.log(obj); // { name: '_island', age: 18 }

// 方法二
Object.seal(obj)
delete obj.name
console.log(obj.name); // _island

// 让属性不能进行修改操作
Object.freeze(obj)
obj.name='abc'
console.log(obj.name); // _island
```



## 工厂模式

是一种常见的设计模式，通过该工厂方法产生想要的对象

```javascript
function createPerson(name, age, height, address) {
  var p = new Object();
  p.name = name;
  p.age = age;
  p.address = address;
  p.height = height;
  p.eating = () => console.log(this.name + "在吃东西");
  p.running = () => console.log(this.name + "在跑步");
  return p;
}

var p1 = createPerson("张三", 18, 1.88, "广州市");
var p2 = createPerson("李四", 18, 1.58, "北京市");
var p3 = createPerson("王五", 16, 1.66, "上海市");

// 工厂模式的缺点
// 获取不到对象最真实的类型
console.log(p1, p2, p3);

```

## 构造函数

- 别名为构造器constructor，是一种特殊的方法，用来初始化对象时会调用的函数
- 在JavaScript中的构造函数有点不太一样
- 构造函数的首字母一般是大写

## 通过new调用函数

1. 在内存中创建一个新的对象（空对象）
2. 这个对象内部的prototype属性会被赋值为该构造函数的prototype属性
3. 构造函数内部的this会指向创建出来的新对象
4. 执行函数的内部代码（函数体代码）
5. 如果构造函数没有返回非空对象，则返回创建出来的新对象

```javascript
function foo(){

}

// foo是一个普通的函数

// 换一种方式来调用foo函数
new foo()

// 通过new去调用函数和通过普通方式调用函数有什么区别
```

## 使用new去创建一个新的对象

```javascript
// 规范 构造函数的首字母一般是大写
function Person(name,age,height,address){
  this.name=name;
  this.age=age;
  this.height=height
  this.address=address
  
  this.eating=function(){
    console.log(this.name+'在吃东西');
  }
  this.running=function(){
    console.log(this.name+'在跑步');
  }
}

var p1=new Person('张三',18,1.88,'广州市')
var p2=new Person('李四',17,1.78,'广州市')
console.log(p1);

console.log(p1.eating===p2.eating);
console.log(p1.running===p2.running);
```

## 原型

- 每个对象都有原型 (隐式原型)

- JavaScript当中每个对象都有一个特殊的内置属性prototype(原型),这个特殊的对象可以指向另外一个对象

```javascript
var obj={
  name:'_island'
  // 这里面隐藏了prototype
}

// 空对象也是有prototype
 var info ={ 
// [[prototype]]
}
```

浏览器为了给开发者可以去查看这个属性,给对象中提供了一个属性,可以让我们查看这个原型对象(浏览器提供)

```javascript
// __proto__

console.log(obj.__proto__);

console.log(info.__proto__);
```

ECMA5之后,提供了一个方法来获取这个原型

```javascript
console.log(Object.getPrototypeOf(obj));
```

## 原型的作用

当我们从一个对象中获取一个属性,它会触发到[[get]]操作
1.在当前对象中，去查找对应的属性，如果找到了就直接用
2.如果没有查找，就会沿着原型链去查找[[prototype ]]

```javascript
obj.age=18
obj.__proto__.age=20
console.log(obj.age);
```

## 函数的原型

在JavaScript中，函数也是一个对象，也有prototype隐式原型

由于它是函数，它还会多出一个显示原型prototype属性也是指向`__proto__`

```javascript
function foo(){

}


console.log(foo.__proto__);
console.log(foo.prototype); // 与__proto__一样

var f1=new foo()
var f2=new foo()
console.log(f1.__proto__===foo.prototype); // true
console.log(f2.__proto__===foo.prototype); // true
```

## 函数原型上的属性

```javascript
function foo(){

}

console.log(foo.prototype); // {}
console.log(Object.getOwnPropertyDescriptors(foo.prototype));
// {
//   constructor: {
//     value: [Function: foo],
//     writable: true,
//     enumerable: false, // 不可枚举
//     configurable: true
//   }
// }

```

直接在原型上添加name属性

```javascript
foo.prototype.name='_island';
var f1=new foo()
console.log(f1.name); //_island
```

假使，需要在prototype属性上添加很多的属性，可以直接修改整个prototype对象

> 直接赋值会让prototype属性中的constructor方法消失

添加constructor属性

```javascript
foo.prototype={
  constructor:foo, // 但这样子添加的话enumerable（可枚举）是true
  name:'_island',
  age:18
}
```

```javascript
// 真实开发中我们可以通过object.defineProperty方式添加constructor
Object.defineProperty(obj,'constructor',{
  enumerable:false,
  configurable:true,
  writable:true,
  value:foo
})
```

## 原型和构造函数创建对象

在之前，我们创建对象，每个对象都是一个独立的内存空间，这样会出现一个问题也就是方法都是相同的。它们没有必要重新开辟一块新的空间

**使用原型来给构造函数添加方法**

```javascript
function Person(name,age,height,address){
    // Person.prototype.name=name
    // Person.prototype.age=age
    // Person.prototype.height=height
    // Person.prototype.address=address
    this.name=name
    this.age=age
    this.height=height
    this.address=address
    // 如果是方法时，可以写上原型上
    Person.prototype.running=function(){
      console.log(this.name+'在跑步');
    }
}

var p1=new Person('_island',18,1.8,'广州市')
var p2=new Person('abc',18,1.7,'广州市')
console.log(p1.name);
```

## 面向对象

- 面向对象有三大特性
  - 封装，把属性和方法封装到一个类中
  - 继承，面向对象中非常重要的，可以减少重复代码数量，也是多态前提（纯面向对象中）
  - 多态，不同对象在执行时表现出不同的形态

## JavaScript原型链

当我们从一个对象上获取一个属性，它会触发到[[get]]操作

- 先从这个对象中查找这个属性
- 如果这个对象中没有这个属性，会从这个对象中的`__proto__`原型中进行查找
- 原型上还会有原型

```javascript
obj.__proto__={

}

obj.__proto__.__proto__={

}

obj.__proto__.__proto__.__proto__={
  name:'abc'
}

// abc
console.log(obj.name);
```

## 原型链的尽头 

其实在`obj`的原型就是我们最顶层的原型

从`object`创建出来的对象的原型都是`[object null prototype]{}`

## 关于`[object null prototype]{}`

- 该对象有原型属性，它已经指向null了（最顶层原型）
- 该对象上有很多默认的属性和方法

顶层来自`Object.prototype`对象

```javascript
obj.__proto__===Object.prototype  // true
```

## 继承

## 继承的作用

在没有继承的时候，我们的代码是下面这样子的，会有很多的冗余代码。

```
function Student(name,age,sno){
  this.name=name
  this.age=age
  this.sno=sno
}

Student.prototype.running=function(){
  console.log(this.name+'在跑步');
}
Student.prototype.eating=function(){
  console.log(this.name+'在吃饭');
}
Student.prototype.studying=function(){
  console.log(this.name+'在学习');
}

// teacher
function Teacher(name,age,title){
  this.name=name
  this.age=age
  this.sno=sno
}

Teacher.prototype.running=function(){
  console.log(this.name+'在跑步');
}
Teacher.prototype.eating=function(){
  console.log(this.name+'在吃饭');
}
Teacher.prototype.studying=function(){
  console.log(this.name+'在学习');
}
```

## 借用构造函数

## 父类原型给子类使用

## 原生式继承

## 寄生式继承

- 寄生式继承是与原型式继承紧密相关的一种思想，并且同样由道格拉斯 克罗克福德提出和推广的
- 寄生式继承的思路是结合原型类继承和工厂模式的一种方式
- 即创建一个封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再将这个对象返回

## ES6

> 又称，es2015，ecma2015

- 按照前面的构造函数方式创建的类，不仅仅和编写普通函数过于类似，而且代码并不容易理解
  - 在es6新的标准中使用了class关键字来直接定义类
  - 但是类本质上依然是前面所讲的构造函数，原型链的语法糖而已
  - 所以学好了前面的构造函数，原型链更有利我们理解类的概念和继承关系
- 定义类的方式
  - 声明类  `class`
  - 类表达式 `var foo = class {}`

在`ES6`（`ECMAScript6`）之前，`JavaScript`语法中是不支持类的，导致面向对象编程方法无法直接使用，但我们可以通过function来实现模拟出类，而随着`JavaScript`的更新，在`ES6`出现了中出现`class`关键字，可以用于定义类。接下来让我们看看它的如何使用的。

## class

下面我们来看看如何使用`class`关键字声明一个类。

```javascript
class Animal {

}

// or

const Animal = class {

}
```

而在`ES6`之前，我们都是通过以下这样子的方式来模拟出类的。

```javascript
function Animal(){

}
```

## 类的构造函数

每一个类都可以有一个自己的构造函数，这个名称是固定的`constructor`，当我们通过`new`调用一个类时，这个类就会调用自己的`constructor`方法（构造函数）。

- 它用于创建对象时给类传递一些参数
- 每一个类只能有一个构造函数，否则报错

通过`new`调用一个类时，会调用构造函数，执行如下操作过程：

1. 在内存中开辟一块新的空间用于创建新的对象
2. 这个对象内部的`prototype`属性会被赋值为该类的`prototype`属性
3. 构造函数内的this，指向创建出来的新对象
4. 执行构造函数的内部代码
5. 如果函数没有返回对象，则返回`this`

```javascript
class Animal  {
  // 类的构造方法
  // 用于接收函数
  constructor(name) {
    this.name = name;
  }
}

var a = new Animal("ABC");
console.log(a); // Animal { name: 'ABC' }
```

上面这个例子中，我们在`class`中定义的`constructor`，这个就是构造方法，而`this`代表的是实例对象。

这个`class`，你可以把它看作构造函数的另外一种写法，因为它和它的构造函数的相等的，即是类本身指向构造函数。

```javascript
console.log(Animal === Animal.prototype.constructor); // true
```

其实，在类上的所有方法都会放在`prototype`属性上。

## 类中的属性

## 实例属性

实例的属性必须定义在类的方法里，就如上面的例子，我们在构造函数中定义`name`这个属性。

```javascript
class Animal{
  constructor(name,height,weight) {
    this.name = name;
    this.height = height
    this.weight = weight
  }
}
```

## 静态属性

当我们把一个属性赋值给类本身，而不是赋值给它`prototype`，这样子的属性被称之为静态属性（`static`）。

静态属性直接通过类来访问，无需在实例中访问。

```javascript
class Foo{
  static name ='_island'
}

console.log(Foo.name);
```

## 私有属性

私有属性只能在类中读取、写入，不能通过外部引用私有字段。

```javascript
class Animal{
  #age;
  constructor(name,age){
    this.name=name
    this.#age=age
  }
}

var a = new Animal('_island',18)
console.log(a); // Animal { name: '_island' }
console.log(a.name); // _island
console.log(a.age); // undefined
console.log(a.#age); // Private field '#age' must be declared in an enclosing class
```

我们通过`getOwnPropertyDescriptors`方法获取到它的属性，同样也是获取不到。

```javascript
console.log(Object.getOwnPropertyDescriptors(a))

{
  name: {
    value: '_island',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
```

> 私有字段仅能在字段声明中预先定义。

> 公共和私有字段声明是JavaScript标准委员会[TC39](https://tc39.es/)提出的[实验性功能（第3阶段）](https://github.com/tc39/proposal-class-fields)。浏览器中的支持是有限的，但是可以通过[Babel](https://babeljs.io/)等系统构建后使用此功能。

## 类中的方法

## 实例方法

在`ES6`之前，我们定义类中的方法是类中的原型上进行定义的，防止类中的方法重复在多个对象上。

```javascript
function Animal() {}
Animal.prototype.eating = function () {
  console.log(this.name + " eating");
};
```

在`ES6`中，定义类中的方法更加简洁，直接在类中定义即可，这样子的写法即优雅可读性也强。

```javascript
class Animal{
  eating() {
    console.log(this.name + " eating");
  }
}
```

## 静态方法

静态方法与上面提到的静态属性是一样的，在方法前面使用`static`关键字进行声明，之后调用这个方法时不需要通过类的实例来调用，可以直接通过类名来调用它。

```javascript
class Animal{
  static createName(name) {
    return name
  }
}

var a2 = Animal.createName("_island");
console.log(a2); // _island
```

## 私有方法

在面向对象中，私有方法是一个常见需求，但是在ES6中没有提供，我们可以通过某个方法来实现它。

```
class Foo {
  __getBloodType() {
    return "O";
  }
}

```

> 需要注意的是，通过下划线开头通常我们会局限它是一个私有方法，但是在类的外部还是可以正常调用到这个方法的

## 类的继承

`extends`关键字用于扩展子类，创建一个类作为另外一个类的一个子类。

它会将父类中的属性和方法一起继承到子类的，减少子类中重复的业务代码。

这对比之前在`ES5`中修改原型链实现继承的方法的可读性要强很多，而且写法很简洁。

## extends的使用

```javascript
class Animal{

}

// dog 继承 Animal 类
class dog extends Animal {

}
```

## 继承类的属性和方法

下面这个例子，我们定义了`dog`这个类，通过`extends`关键字继承了`Animal`类的属性和方法。

在子类的`constructor`方法中，我们使用了`super`关键字，在子类中它是必须存在的，否则新建实例时会抛出异常。这是因为子类的this对象是继承自父类的this对象，如果不调用`super`方法，子类就得不到`this`对象。

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  eating() {
    console.log(this.name + " eating");
  }
}

// dog 继承 Animal 类
class dog extends Animal {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
  }
  speaking() {
    console.log(this.name + " speaking");
  }
}

var d = new dog("tom", 4);
d.eating(); // tom eating
d.speaking(); // tom speaking
console.log(d.name); // tom
```

## Super

**super**关键字用于访问和调用一个对象的父对象上的函数。

`super`指的是超级、顶级、父类的意思

在子类的构造函数中使用`this`或者返回默认对象之前，必须先通过`super`调用父类的构造函数。

下面这段代码，子类的`constructor`方法中先调用了`super`方法，它代表了父类的构造函数，也就是说我们把参数传递进去之后，其实它是调用了父类的构造函数。

```javascript
class Animal{
  constructor(name)
}

class dog{
  constructor(name,type,weight){
    super(name)
    this.type=type
    this.weight=weight
  }
}
```

下面这段代码使用super调用父类的方法

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  eating() {
    console.log(this.name + " eating");
  }
}

// dog 继承 Animal 类
class dog extends Animal {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
  }
  speaking() {
    super.eating()
    console.log(this.name + " speaking");
  }
  
}

var d = new dog("tom",4);
d.speaking(); // tom eating tom speaking
```

## Getter 和 Setter

在类内部也可以使用`get`和`set`关键字，对应某个属性设置存值和取值函数，拦截属性的存取行为。

```javascript
class Animal {
  constructor() {
    this._age = 3;
  }

  get age() {
    return this._age;
  }

  set age(val) {
    this._age = val;
  }
}

var a = new Animal();
console.log(a.age); // 3
a.age = 4;
console.log(a.age); //4
```

## 关于class扩展

## 严格模式

在类和模块的内部，默认是严格模式，所以不需要使用`use strict`指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。

## name属性

`ES6`中的类只是`ES5`构造函数的一层包装，所以函数的许多属性都被`class`继承了，包括`name`属性。

```javascript
class Animal{

}
console.log(Animal.name); // Animal
```

## 变量提升

`class`不存在变量提升，这与我们在`ES5`中实现类的不同的，`function`关键字会存在变量提升。

```javascript
new Foo(); // ReferenceError
class Foo {}
```

在`ES6`之后，我们在定义类以及它内部的属性方法，还有继承操作的语法变得非常简洁且易懂，`class`是一个语法糖，其内部还是通过`ES5`中的语法来实现的。且有些浏览器不支持`class`语法，我们可以通过`babel`来进行转换。

## ES6知识点

## 什么是ES6

`ES6`是`ECMAScript 6.0`是简称，其实它在2015年6月就发布出来了，所以又称`ES2015`，目的是使`JavaScript`这一门语言可以来编写更加复杂的大型应用。

## let 和 const

`ES6`中新增了`let`和`const`用于声明变量、常量。我们知道通过`var`关键字声明的变量都会在`window`对象上。而使用`let`和`const`关键字声明的变量、常量只局限在当前作用域内使用，且没有作用域提升。

```javascript
let age = 18;
const num = 10;
```

## 数据解构

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

## 字符串模板

在`ES6`中我们可以在字符串中使用变量和表达式。使得字符串和变量之间拼接起来的语法更加优雅。

```javascript
const city ='Guangzhou'

// ES5中
console.log('I live in '+city) // I live in Guangzhou
// ES6中
console.log(`I live in ${city}`) // I live in Guangzhou
```

## 函数的默认参数

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

## 函数剩余参数

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

## 箭头函数

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

## 箭头函数的简写

```javascript
// 函数体里只有一条函数时可以这样子写，并默认将这条语句返回(省略return)
const foo = (m, n) => console.log(m + n);

// 当只有一个参数时,()可以省略掉 ,多个参数不能省略
const foo = name=>console.log(name);
```

## 箭头函数注意事项

- 箭头函数不能作为构造函数使用
- 箭头函数没有原型
- 箭头函数内没有`arguments`
- 箭头函数不能使用`yield`关键字

## 关于箭头函数的指向问题

- 箭头函数没有`this`，它的`this`是它的父级
- `this`是在定义箭头函数时绑定的

## Class关键字

关于`class`关键字，我在另外一篇文章中有详细介绍Class的用法和相关扩展知识点。

> [点击直达 JS进阶 | 详解ES6中的Class](https://juejin.cn/post/7058477703262896159)

## 数值的表示

在`ES6`中支持了进制的字面量，需要在数字前面添加对应的标识符号。

```javascript
const num1 = 100; // 十进制
const num2 = 0b100; // 二进制
const num3 = 00100; // 八进制
const num4 = 0x100; // 十六进制
console.log(num1, num2, num3, num4); // 100 4 64 256
```

## 字符串方法

`ES6`中字符串对象的新增方法（常用方法）

| 方法         | 返回值               | 说明                         |
| ------------ | -------------------- | ---------------------------- |
| `includes`   | 布尔值               | 判断字符串中是否有子串       |
| `startsWith` | 布尔值               | 判断字符串是否以指定字符开头 |
| `endsWith`   | 布尔值               | 判断字符串是否以指定字符结尾 |
| `padStart`   | 补全之后的字符串     | 补全字符串：开头补全         |
| `padEnd`     | 补全之后的字符串     | 补全字符串：尾部补全         |
| `trimStart`  | 返回消除之后的字符串 | 消除字符串开头的空格         |
| `trimEnd`    | 返回消除之后的字符串 | 消除字符串尾部的空格         |

## includes

`includes`方法用于判断字符串中是否有子串，返回布尔值。

```javascript
const str = "hello world";
const str2 = "hello world hello world";
// 判断字符串中是否包含子串
const s1 = str.includes("hello");
console.log(s1); // true
```

## startsWith

`startsWith`方法用于判断字符串是否以指定字符开头。

```javascript
// 判断字符串开头是否为h
const ish = str.startsWith("h");
console.log(ish); // true
```

## endsWith

`endsWith`方法用于判断字符串是否以指定字符结尾。

```javascript
// 判断字符串结尾是否为d
const isd = str.endsWith("d");
console.log(isd); // true
```

## padStart

`padStart`方法用于从起始开始补全字符串。返回补全之后的字符串，不会修改原字符串。

```javascript
const str4 = "100";
console.log(str4.padStart(6, "000")); // 000100
```

## padEnd

`endsWith`方法用于从尾部补全字符串。返回补全之后的字符串，不会修改原字符串。

```javascript
const str5 = "200";
console.log(str5.padEnd(6, "000")); // 200000
```

> `padStart` / `padEnd` 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。

## trimStart

`trimStart`用于消除字符串开头的空格，返回消除之后的字符串，不会修改原字符串。

## trimEnd

`trimStart`用于消除字符串尾部的空格，返回消除之后的字符串，不会修改原字符串。

```javascript
const str6 = "  _island  ";
console.log(str6.trimStart()); // '_island  '
console.log(str6.trimEnd()); // '  _island'
```

## ES6新增数据结构

## Symbol

`Symbol`是`ES6`中新增的一个基本数据类型之一，它是一个函数。每一个从`Symbol`函数返回的`Symbol`值都是独一无二的，`symbol`值作为对象属性的标识符，也是唯一的用途的。

```javascript
const s1 = Symbol()
const s2 = Symbol()
console.log(s1 === s2); // false
```

## symbol作为key

第一种方式，直接在对象的字面量中添加。

```javascript
// symbol作为key
const obj={
  [s1]:'abc',
  [s2]:'cc',
}
```

第二种方式，通过添加数组方式添加。

```javascript
// 需要用数组方式来获取，不能通过点语法，否则会获取到字符串key
console.log(obj[s1]);

```

第三种方式，通过对象中的`defineProperty`方法添加。

```javascript
const s4=Symbol()
Object.defineProperty(obj,s4,{
  configurable:true,
  enumerable:true,
  writable:true,
  value:'ff'
})
```

## 通过symbol获取对应的值

需要用数组方式来获取，不能通过点语法，否则会获取到字符串key。

```javascript
console.log(obj[s1]);
```

`symbol`不能被隐式转换成`string`类型。

```javascript
let Sym = Symbol("Sym")
alert(Sym)  // TypeError: Cannot convert a Symbol value to a string
```

我们不能直接`alert`一个`symbol`对象，但是我们可以通过`toString`的方式或者`.description`来获取`symbol`对象的描述符。

```javascript
let sym = Symbol('a')
console.log(sym.description); // 'a'
```

## 遍历symbol

在使用`for`遍历、`object.keys`中是获取不到`symbol`健的，对此`object`还提供了`getOwnPropertySymbols`方法，用于获取对象中所有symbol的key。

```javascript
const sKeys=(Object.getOwnPropertySymbols(obj));
for(const skey of sKeys){
  console.log(obj[skey]);
}
```

## 全局symbol对象注册

有时，我们可能需要多个`symbol`的值是一致的，我们可以通过`symbol`提供的静态方法`for`方法传入一样的描述符来使它们的值一致。

## Symbol.for

该方法会在使用给定键搜索运行时符号注册表中的现有符号，并在找到时返回它。否则，使用此键在全局符号注册表中创建一个新符号。

```javascript
const sa=Symbol.for('cc')
const sb=Symbol.for('cc')
console.log(sa===sb); //true
```

## Symbol.keyFor

该方法用于获取全局`symbol`的描述符。

```javascript
const key =Symbol.keyFor(sb)
console.log(key); // c
```

## Set

`Set`对象（类似数组）允许你存放任何数据类型，但里面的值不能重复。

```javascript
const s1 = new Set()
s1.add(10)
s1.add(20)
s1.add(30)
s1.add(40)

console.log(s1) // Set(4) { 10, 20, 30, 40 }

s1.add(20)
console.log(s1) // Set(4) { 10, 20, 30, 40 }
```

## Set常用方法

| 方法     | 返回值            | 说明                      |
| -------- | ----------------- | ------------------------- |
| `size`   | `set`对象中的数量 | 返回set对象中的数量       |
| `add`    | `Set`对象         | 添加元素                  |
| `delete` | `boolean`         | 删除元素                  |
| `has`    | `boolean`         | `Set`对象中是否存在这个值 |
| `clear`  | 无                | 清空`Set`对象中的值       |

## WeakSet

`WeakSet`是类似`Set`的另外一种数据结构，内部数据也不能有重复值。

- 它与`Set`的区别
  - `WeakSet`只能存放对象类型，不能存放基本数据类型
  - `WeakSet`对元素是弱引用

## 基本使用

```javascript
const weakSet = new WeakSet();
let obj = {
  name: "_island"
};

weakSet.add(obj);
```

## WeakSet常用方法

| 方法     | 返回值        | 说明                          |
| -------- | ------------- | ----------------------------- |
| `add`    | `weakset`对象 | 添加元素                      |
| `delete` | `boolean`     | 删除元素                      |
| `has`    | `boolean`     | `weakset`对象中是否存在这个值 |

## 关于遍历

`WeakSet`不能被遍历，因为它只是对对象进行弱引用，如果遍历去获取元素，有可能导致对象不能被`GC`回收。

所以`WeakSet`中的对象是不能获取的

## Map

`ES6`新增的数据结构，用于存储映射关系。我们知道在`JavaScript`中对象中是不能用对象来作为`key`的。（假如我们把对象作为`key`，其内部会将对象转换为字符串`[object object]`）

```javascript
const obj1 = { name: "_island" };
const obj2 = { name: "QC2125" };
const obj3={
  [obj1]:'a',
  [obj2]:'b',
}

console.log(obj3);
// { '[object Object]': 'b' }
```

而`Map`则可以把对象作为`key`进行存储，可以通过`set`方法添加到`Map`中，也直接通过字面量的方式添加。

```javascript
const obj1 = { name: "_island" };
const obj2 = { name: "QC2125" };
const map = new Map();
map.set(obj1, "a");
map.set(obj2, "b");
console.log(map); // Map(2) { { name: '_island' } => 'a', { name: 'QC2125' } => 'b' }

// or
const map2 = new Map([[obj1,'a'],[obj2,'b']])
```

## Map常用方法

| 方法     | 返回值            | 说明                      |
| -------- | ----------------- | ------------------------- |
| `get`    | 获取对应的元素    | 通过`key`获取对应元素     |
| `size`   | `Map`对象中的数量 | 返回`Map`对象中的数量     |
| `set`    | `Map`对象         | 添加元素                  |
| `delete` | `boolean`         | 删除元素                  |
| `has`    | `boolean`         | `Set`对象中是否存在这个值 |
| `clear`  | 无                | 清空`Set`对象中的值       |

## 遍历Map

通过`foreach`语句遍历`Map`

```javascript
map2.forEach((item) => console.log(item));
```

通过`for..of`遍历`Map`

```javascript
for ([val, key] of map2) {
  console.log(`${key}---${val}`);
}
```

## WeakMap

和`Map`类似，也是以键值对的形式存在的

- 和Map的区别
  - `WeakMap`的`key`只能使用对象，不接受其他的类型作为`key`
  - `WeakMap`的`key`对对象是弱引用

## 基本使用

```javascript
const weakMap = new WeakMap();
weakMap.set(obj, "a");
console.log(weakMap.get(obj)); // a
```

## WeakMap常用方法

| 方法     | 返回值        | 说明                           |
| -------- | ------------- | ------------------------------ |
| `get`    | `weakmap`对象 | 获取元素                       |
| `delete` | `boolean`     | 删除元素                       |
| `has`    | `boolean`     | `weaksmap`对象中是否存在这个值 |

## 关于遍历

和`WeakSet`一样，正因为它是弱引用，`WeakMap`的`key`是不可枚举的，如果`key`可枚举那其列表将会受`GC`影响。

## ES7语法

## array includes

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

在`includes`方法里可以内数组中判断出是否存在`NaN`值，而`indexOf`无法正确判断出来。

```javascript
const names = ["abc", "cba", "nba", "mba", NaN];

if (names.indexOf(NaN) !== -1) {
  console.log("包含NaN");
}

if (names.includes(NaN)) {
  console.log("包含NaN");
}
```

## 求幂运算符

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

## 什么是BigInt

是一种内置对象，它可以是任意大的整数。它解决了`Number`类型的限制。

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

## 与Number的区别

- `BigInt`不能使用`Math`对象中的方法
- 不能和`Nunber`进行运算
- `BigInt`转`Number`类型可能出现失去精度

## ES8语法

`ES8`又称`ES2017`，在`ES6`之后的语法我们都统称为`ES6+`，下面我们来看看`ES8`中新增的新语法。它们都是一些非常实用的功能

- `Object.values`
- `Object.entries`
- 字符串填充
- 函数参数的逗号
- `Object.getOwnPropertyDescriptors`
- `async`

## Object values

该方法可以获取对象中所有的value值。

```javascript
const obj = {
  name: "_island",
  age: 18
};

console.log(Object.values(obj)); // [ '_island', 18 ]
```

## Object entries

该方法用于将一个对象的可枚举健值转换为一个数组。方便后续遍历数据

```javascript
const obj = {
  name: "_island",
  age: 18
};

// 将一个对象转为一个数组，方便后续遍历
console.log(Object.entries(obj)); // [ [ 'name', '_island' ], [ 'age', 18 ] ]
```

## 字符串填充

## 函数参数的逗号

ES8之后，可以在函数的参数后面尾随逗号。

```javascript
function foo(m,n,){

}

foo(20,30,)
```

## Object getOwnPropertyDescriptors

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

## async

`async`函数是一个异步函数，且需要搭配`await`关键字使用。它可以使`Promise`的异步执行的像同步代码一样执行。

```javascript
async function foo() {
  const res = await new Promise((res) => {
    setTimeout(() => res("ok"), 2000);
  });
  console.log(res);
}
foo(); // ok
```

## ES9的语法

Async iterators

Object spread operators

Promis finally

## ES10语法

## 数组降维

`Array.flat`方法会将一个数组进行降维操作，并合成一个新的数组返回。（如果没有参数传入，默认降维深度为`1`）

```javascript
const nums = [1, 2, [3, 4], [5, 6, [7, 8]]];
const newNums1 = nums.flat(1);
console.log(newNums1); // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

const newNums2 = nums.flat(2);
console.log(newNums2); // [1, 2, 3, 4, 5, 6, 7, 8]
```

##  遍历降维

`Array.flatMap`方法会将传入的函数映射到数组中的每一个元素。并返回每个元素的结果集合，再进行`flat`操作（降维深度为`1`）。

```javascript
const nums2 = [1, 2, 3, 4, 6];
const newNums3 = nums2.flatMap((item) => {
  return item * 2;
});

console.log(newNums3); // [ 2, 4, 6, 8, 12 ]
```

## 和Array.map()的对比

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

## Object fromEntries

Object.fromEntries方法用于将一个`key-value`的二维数组转换为一个对象。

```javascript
const arr = [
  ["name", "_island"],
  ["age", 18]
];

const obj = Object.fromEntries(arr);
console.log(obj); // { name: '_island', age: 18 }
```

## trim

在`ES10`中对字符串对象新增了`trimStart`、`trimEnd`方法，用于处理字符串前、后的空格内容。

```
const str6 = "  _island  ";
console.log(str6.trimStart()); // '_island  '
console.log(str6.trimEnd()); // '  _island'
```

## Symbol description

在`ES10`中，`Symbol`类型可以声明时传入一个`Symbol`描述符。

```javascript
const s1 = Symbol("Symbol描述符");
```

## 可选的Catch的参数

在过去try语句中catch子句必须接受一个错误参数，而在ES10中，我们可以不创建这个错误参数也可以正常允许。

```javascript
// 之前的写法
try{}catch(e){}
// ES10之后的写法
try{}catch{}
```

## 更友好的String.toString

ES10之后，`toString`方法会返回精确的字符，这包括空格和注释。

```javascript
function /* _island */ foo /* age 18 */() {}

// 之前
console.log(foo.toString()); // function foo(){}
// ES10之后
console.log(foo.toString()); // function /* comment */ foo /* another comment */() {}
```



## ES11

## BigInt

## 空值合并

可选链

全局this

动态导入

promise.allSettled

import mate

## ES12

FinalizationRegistry

WeakRef

字符串分隔符

逻辑与

replaceAll

## Proxy

## 监听对象操作

某些场景下，需要监听一个对象的操作，当这个操作触发时执行另外的一个函数，就像vue2中的watchApi，它可以监听data数据中某个属性的改变并操作指定的函数。

我们看看下面这份代码，使用Object.defineProperty（对象属性描述符）对对象的监听，将一个对象进行遍历，并设定getter、setter方法进行监听和拦截。

```javascript
const obj = {
  name: "_island",
  age: 18,
};

Object.keys(obj).forEach(key=>{
  let val=obj[key]
  Object.defineProperty(obj,key,{
    get: function () {
      console.log(key+"调用了get方法");
      return val
    },
    set: function (newVal) {
      console.log(key+"调用了set方法");
      val=newVal
    }
  })
})

obj.name='QC2125'
obj.age=30
console.log(obj.name);
```

通过这种方式监听的缺点

- `Object.defineProperty`的设计初衷并不是为了去监听拦截一个对象中的属性
- 也实现不了更加丰富的操作，比如添加、删除属性

## 认识Proxy

`Proxy`对象用于创建一个对象的代理，是用于监听一个对象的相关操作。代理对象可以监听我们对原对象的操作。

接下来我们将通过一个监听对象的属性操作来认识学习下什么是`Proxy`。

Proxy对象需要传入两个参数，分别是需要被`Proxy`代理的对象和一系列的捕获器（后面会讲）。

```javascript
const obj={
  name:'_island'
}

const objProxy=new Proxy(obj,{});

console.log(objProxy);
```

![image-20220204200341915](https://gitee.com/QC2168/note-img/raw/master/202202042003373.png)

打印出来可以看到的是一个`Proxy`对象。下面我们开始看看`Proxy`中的捕获器对象。

## 捕获器

Proxy捕获共有`13`个，它们用于我们对对象、函数的方法调用监听。

| 对象中的方法                       | 对应触发条件                                                 |
| ---------------------------------- | ------------------------------------------------------------ |
| handler.getPrototypeOf()           | `Object.getPrototypeOf` 方法的捕捉器                         |
| handler.setPrototypeOf()           | `Object.setPrototypeOf` 方法的捕捉器                         |
| handler.isExtensible()             | `Object.isExtensible` 方法的捕捉器                           |
| handler.preventExtensions()        | `Object.preventExtensions` 方法的捕捉器                      |
| handler.getOwnPropertyDescriptor() | `Object.getOwnPropertyDescriptor` 方法的捕捉器。             |
| handler.defineProperty()           | `Object.defineProperty` 方法的捕捉器                         |
| handler.has()                      | `in` 操作符的捕捉器                                          |
| handler.get()                      | 属性读取操作的捕捉器                                         |
| handler.set()                      | 属性设置操作的捕捉器                                         |
| handler.deleteProperty()           | `delete` 操作符的捕捉器                                      |
| handler.ownKeys()                  | `Object.getOwnPropertyNames` 方法和 `Object.getOwnPropertySymbols` 方法的捕捉器 |
| handler.apply()                    | 函数被`apply`调用操作的捕捉器                                |
| handler.construct()                | `new` 操作符的捕捉器                                         |

在实例化Proxy对象时，第二个参数传入的是捕获器集合，我们在其对象内定义一个`get`捕获器，用于监听获取对象值的操作。

```javascript
// 定义一个普通的对象obj
const obj = {
  name: "_island"
};

// 代理obj这个对象，并传入get捕获器
const objProxy = new Proxy(obj, {
  // get捕获器
  get: function (target, key) {
    console.log(`捕获到对象获取${key}属性的值操作`);
    return target[key];
  },
});

// 通过代理对象操作obj对象
console.log(objProxy.name);
// 捕获到对象获取name属性的值操作
// _island
```

`get`**捕获器会被继承**

```javascript
let proto = new Proxy(
  {},
  {
    get(target, key) {
      console.log("GET " + key);
      return target[key];
    }
  }
);

let obj = Object.create(proto);
console.log(obj.foo); // GET foo
```

新增另外一个捕获器`set`，用于监听对象的某个属性被设置时触发。在这里你可以判断一个对象属性即将被设定的值是否符合预期等业务处理。

```javascript
// set捕获器
set: function (target, key, val) {
  console.log(`捕获到对象设置${key}属性的值操作,新值为${val}`);
  target[key] = val;
}

console.log(objProxy.name = "QC2125");
// 捕获到对象设置name属性的值操作,新值为QC2125
console.log(objProxy.name);
// 捕获到对象获取name属性的值操作
// QC2125
```

我们也可以监听对象是否调用了`Object.getPrototypeOf`、`Object.prototype.__proto__`、`Object.prototype.isPrototypeOf`、`Reflect.getPrototypeOf`、`instanceof`操作，使用`getPrototypeOf`捕获器即可。

```javascript
// 监听getPrototypeOf
getPrototypeOf: function () {
  console.log(`监听到对象获取原型操作`);
},
```

## 对象监听案例

在`ES5`之前，我们监听对象的操作方式是通过`Object.defineProperty`方法来实现的。我们看下面这个案例。

```javascript
// 定义一个Object对象
const obj = {
  name: "_island",
  age: 18
};

Object.keys(obj).forEach((key) => {
  let val = obj[key];
  Object.defineProperty(obj, key, {
    get: function () {
      console.log(key + "调用了get方法");
      return val;
    },
    set: function (newVal) {
      console.log(key + "调用了set方法");
      val = newVal;
    }
  });
});

// 操作obj对象
obj.name = "QC2125";
// name调用了set方法
obj.age = 30;
// age调用了set方法
console.log(obj.name); 
// name调用了get方法
// QC2125
```

`Object.defineProperty`的设计初衷并不是为了去监听拦截一个对象中的属性，且他也实现不了更加丰富的操作，例如添加、删除属性等操作。所以在ES6中新增了`Proxy`对象，用于监听`Object`、`Function`的操作。

我们将上面通过`Object.defineProperty`实现对象监听的方法修改成`Proxy`方案。

```javascript
const obj = {
  name: "_island",
  age: 18
};

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get: function (target, key) {
    console.log(`监听到了${key}被获取值`);
    return target[key];
  },
  // 设置值时的捕获器
  set: function (target, key, newValue) {
    console.log(`监听到了${key}被设置值`);
    target[key] = newValue;
  }
});

console.log(objProxy.name);
// 监听到了name被获取值
// _island
console.log(objProxy.age);
// 监听到了age被获取值
// 18
objProxy.name = "QC2125";
// 监听到了name被设置值
console.log(objProxy.name);
// 监听到了name被获取值
// QC2125
```

## Reflect

`Reflect`是一个对象，翻译过来是反射的意思，它提供了很多操作`JavaScript`对象的方法， 是为了弥补`Object`中对象的一些缺陷。且所有属性和方法都是静态的

## 为什么会有Reflect

在早期，`JavaScript`这门语言中的一些内部方法都被部署到了`Object`这个对象上。就例如`getPrototype`、`deinfeProperty`等`API`、类似`in`、`delete`操作符都放到了`Object`对象上了。但`Object`作为一个构造函数（`Reflect`并非一个构造函数，不能通过new关键字调用），这些方法放到它身上并不合适，所以在`ES6`之后的内部新方法会部署到`Reflect`对象中。

## 使用Reflect对象操作Object对象

Reflect对象让我们操作`Object`对象不再是通过点语法了，而是变成了函数行为。

我们看下面的例子，获取对象属性可以使用`Reflect.get`方法、将对象的属性赋值可以使用`Reflect.set`方法。

```javascript
const obj = {
  name: "_island",
  age: 18
};

// 获取对应属性的值
console.log(obj.name); // _island
console.log(Reflect.get(obj, "name")); // _island

// 对对象的属性赋值操作
obj.name = "abc";
Reflect.set(obj, "name", "abc");
console.log(Reflect.get(obj, "name")); // abc


// 判断一个对象中是否有该属性
console.log("name" in obj); // true
console.log(Reflect.has(obj, "name")); // true
```

## Reflect中的方法

| 对象中的方法                       | 说明                     |
| ---------------------------------- | ------------------------ |
| Reflect.apply()                    | 对一个函数进行apply调用  |
| Reflect.construct()                | 对构造函数进行new操作    |
| Reflect.defineProperty()           | 定义一个属性             |
| Reflect.deleteProperty()           | 删除一个属性             |
| Reflect.get()                      | 获取一个属性             |
| Reflect.getOwnPropertyDescriptor() | 获取一个属性描述符       |
| Reflect.getPrototypeOf()           | 获取一个对象的原型       |
| Reflect.has()                      | 判断一个属性是否在对象中 |
| Reflect.isExtensible()             | 判断可以扩展             |
| Reflect.ownKeys()                  | 获取一个对象中的key集合  |
| Reflect.preventExtensions()        | 使一个对象不可扩展       |
| Reflect.set()                      | 设置一个属性             |
| Reflect.setPrototypeOf()           | 设置一个对象的原型       |

`Reflect`对象中一些方法与`Object`相同，但它们存在一些细微的区别，如果你想更加了解可以阅读[Reflect和Object中的方法区别](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)。

在返回值方便`Reflect`对象中的方法设计的更加合理。比如`defineProperty`方法，如果没有将属性设置成功，在`Reflect`中会返回`boolean`值，而`Object`对象中如果没有定义成功则会抛出`TypeError`。

## Reflect搭配Proxy

`Reflect`对象中的方法和上一篇文章将到的`Proxy`对象的方法的对应的，`Proxy`对象中的方法也能在`Reflect`对象中调用。

通常我们将`Reflect`对象搭配`Proxy`一起使用，我们看下面这个`Reflect`搭配`Proxy`对象使用的案例。

```javascript
const obj = {
  name: "_island"
};

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // 原来的写法
    // return target[key]
    // 使用Reflect
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newVal, receiver) {
    // 原来的写法
    // target[key]=newVal
    // 使用Reflect
    Reflect.set(target, key, newVal, receiver);
  },
});

objProxy.name = "abc";
console.log(objProxy.name); // abc
```

在上面，`Proxy`对象中`get`、`set`捕获器多了一个`receiver`参数，这是这两个捕获器特有的，这个`receiver`参数是当前代理的目标。

当`Proxy`和`Reflect`搭配使用时，`Proxy`对象会拦截对应的操作，后者完成对应的操作，如果传入`receiver`，那么`Reflect.get`属性会触发`Proxy.defineProperty`捕获器。我们再上面这里案例上再新增一些代码。

```javascript
const obj = {
  name: "_island"
};

const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // 原来的写法
    // return target[key]
    // 使用Reflect
    console.log(receiver);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, newVal, receiver) {
    // 原来的写法
    // target[key]=newVal
    // 使用Reflect
    Reflect.set(target, key, newVal, receiver);
  },
  defineProperty: function (target, key, attr) {
    console.log("defineProperty");
    console.log(target, key, attr);
    Reflect.defineProperty(target, key, attr);
  }
});

objProxy.name = "abc";
console.log(objProxy.name); 
// defineProperty
// { name: '_island' } name { value: 'abc' }
// { name: 'abc' }
// abc
```

传入在我们获取代理对象中的`name`属性时，当`Reflect`有`receiver`参数传入时，获取属性值时会获取到`receiver`中的，所以会触发`defineProperty`捕获器，如果没有传入`receiver`参数，则不会触发`defineProperty`捕获器。

## 总结

- `Reflect`对象中集合了`JavaScript`内部方法
- 操作`Object`对象的方式变成了函数行为
- `Reflect`对象中的方法返回结果更加合理
