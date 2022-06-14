### 为什么需要this

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


### this的作用

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

### this指向什么

1. 函数在调用时，JavaScript会默认给this绑定一个值
2. this的绑定和定义的位置是没有关系的
3. this1的绑定和调用方式以及调用位置有关系
4. this是在运行时被绑定的

### 全局作用域中的this指向

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

### this绑定规则

#### 默认绑定

- 独立的函数调用可以理解成函数没有被绑定到某个对象上进行调用

##### 默认绑定的案例一

```javascript
function foo(){
  console.log(this);
}
// 默认绑定，是一个独立函数，没有绑定对象
// 指向window
foo()
```

##### 默认绑定的案例二

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

##### 默认绑定的案例三

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

##### 默认绑定的案例四

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

##### 默认绑定的案例五

```javascript
function foo(){  return function(){    console.log(this);  }}var fn=foo()// 也是独立调用fn() // window
```

##### 默认绑定的案例六

```javascript
var obj={  eating:fn // 隐式绑定}obj.eating() // {eating: ƒ}
```

#### 隐式绑定

- 它的调用位置是通过某个对象发起的函数调用，例如`obj2.bar()`
- object对象会被js引擎绑定到fn函数中this里面

##### 隐式绑定的案例一

```javascript
function foo(){  console.log(this);}// 独立函数调用// foo()var obj={  name:'hxh',  foo:foo}obj.foo() // obj对象
```

##### 隐式绑定的案例二

```javascript
var obj={  name:'hxh',  eating:function (){    console.log(this.name+'在吃东西');  },  running:function(){    console.log(this.name+'在跑步');  }}obj.eating()obj.running()var fn=obj.eatingfn() // 获取不到this.name，this指向fn
```

##### 隐式绑定的案例三

```javascript
var obj1={  name:'obj1',  foo:function(){    console.log(this);  }}var obj2={  name:'obj2',  bar:obj1.foo}obj2.bar() // obj2对象
```

#### 显示绑定

- 前提条件
  - 必须在调用的对象内部有一个对函数的引用（比如一个属性）
  - 假使没有这样引用，在进行调用时，会报找不到该函数的错误
  - 正是通过这个引用，间接的将this绑定到这个对象上
- 如果不希望在对象内部包含这个函数的引用，同时又希望在这个对象上强制调用
  - JavaScript所有的函数都可以使用call和apply方法（这个和prototype有关）
  - 这两个函数的第一个参数都要求是一个对象，这个对象是给this准备的
  - 调用这个函数时，会将this绑定到这个传入的对象上

##### 显示绑定的案例 | call apply

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

#### new绑定

- JavaScript中的函数可以当做一个类的构造函数来使用，也就是使用new关键字
- 使用new关键字来调用函数是，会执行如下的操作
  - 创建一个全新的对象，内部将调用一个函数时（构造器）
  - 这个新对象会被执行prototype连接
  - 这个新对象会绑定到函数调用的this上（**this的绑定在这个步骤完成**）
  - 如果函数没有返回其他对象，表达式会返回这个新对象

##### new绑定的案例

```
function Person(name,age) {  this.name=name  this.age=age  return this;}var p1 = new Person('hxh',21);console.log(p1.name,p1.age);
```

#### 规律优先级

- 默认规则优先级最低
- 显示绑定优先级高于隐式绑定
- new绑定优先级高于隐式绑定
- new绑定优先级高于bind
  - new绑定和call、apply是不允许同时使用的，所以不存在谁的优先级更高
  - new绑定可以和bind一起使用，new绑定优先级更高



new绑定 -> 显示绑定 -> 隐式绑定

### this规则之外

#### 忽略显示绑定

#### ES6箭头函数

- 箭头函数不使用`this`的四种标准规则（也就是不绑定this），而是根据外层作用域来决定this

### 箭头函数 arrow function

- 箭头函数是**ES6之后增加**的一种编写函数的方法，并且它比函数表达式要更加简洁：
  - 箭头函数**不会绑定`this`、`arguments`属性**
  - 箭头函数不能作为构造函数来使用（**不能和new一起来使用，会抛出错误**）