### 什么是Proxy

`Proxy`对象用于创建一个对象的代理，是用于监听一个对象的相关操作。代理对象可以监听我们对原对象的操作。

接下来我们将通过一个监听对象的属性操作来认识学习下什么是`Proxy`。

Proxy对象需要传入两个参数，分别是需要被`Proxy`代理的对象和一系列的捕获器（PS：下面会讲）。

```javascript
const obj={
  name:'_island'
}

const objProxy=new Proxy(obj,{});

console.log(objProxy);
```

![image-20220204200341915](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6d4a76a2240c4015bfd8182e16640b30~tplv-k3u1fbpfcp-zoom-1.image)

打印出来可以看到的是一个`Proxy`对象。下面我们开始看看`Proxy`中的捕获器对象。

#### Proxy捕获器

在实例化`Proxy`对象时，第二个参数传入的是捕获器集合，我们在其对象内定义一个`get`捕获器，用于监听获取对象值的操作。

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

在`objProxy`对象的拦截器中新增一个捕获器`set`，用于监听对象的某个属性被设置时触发。

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

如果不想这个属性被设定这个值，你可以抛出异常告诉开发者，该值不能被设定。

```javascript
set: function (target, key, val) {
  if (key==='age' && typeof val === "number") {
    target[key] = val;
  } else {
    throw new TypeError("该属性的值必须是Number类型");
  }
}
```

我们也可以监听对象是否调用了`getPrototypeOf`操作，使用`getPrototypeOf`捕获器即可。

```javascript
// 监听getPrototypeOf
getPrototypeOf: function () {
  console.log(`监听到对象getPrototypeOf操作`);
},
```

在`Proxy`中共有`13`个捕获器，它们用于我们对对象、函数的方法调用监听。下面是`Proxy`捕获器以及它们的触发条件。

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



#### this指向的问题

`Proxy`对象可以对我们的目标对象进行访问，但没有做任何拦截时，也不能保证与目标对象的行为一致，因为目标对象内部的`this`会自动改变为`Proxy`代理对象。我们看下面这个例子就知道了。

```javascript
const obj={
 name:'_island',
 foo:function(){
   return this === objProxy
 }
}

const objProxy=new Proxy(obj,{})
console.log(obj.foo()); // false
console.log(objProxy.foo()); // true
```

#### 对象监听案例

某些场景下，需要监听一个对象的操作，当这个操作触发时执行另外的一个函数，就像`vue2`中的`watchApi`，它可以监听`data`数据中某个属性的改变并操作指定的函数。

我们看看下面这份代码，在`ES5`中使用`Object.defineProperty`（对象属性描述符）对对象的监听，将一个对象进行遍历，并设定`getter`、`setter`方法进行监听和拦截。

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

`Object.defineProperty`的设计初衷并不是为了去监听拦截一个对象中的属性，且他也实现不了更加丰富的操作，例如添加、删除属性等操作。所以在`ES6`中新增了`Proxy`对象，用于监听`Object`、`Function`的操作。

我们将上面通过`Object.defineProperty`实现对象监听的方法修改成`Proxy`方案。在Vue3框架中的响应式原理也是用到了Proxy对象进行对属性的监听操作。

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

#### 小结

- `Reflect`对象中集合了`JavaScript`内部方法
- 操作`Object`对象的方式变成了函数行为
- `Reflect`对象中的方法返回结果更加合理

### 什么是Reflect

`Reflect`是一个对象，翻译过来是反射的意思，它提供了很多操作`JavaScript`对象的方法， 是为了弥补`Object`中对象的一些缺陷。且所有属性和方法都是静态的。

#### 为什么会有Reflect

在早期，`JavaScript`这门语言中的一些内部方法都被部署到了`Object`这个对象上。就例如`getPrototype`、`deinfeProperty`等`API`、类似`in`、`delete`操作符都放到了`Object`对象上了。但`Object`作为一个构造函数（`Reflect`并非一个构造函数，不能通过new关键字调用），这些方法放到它身上并不合适，所以在`ES6`之后的内部新方法会部署到`Reflect`对象中。

#### 使用Reflect对象操作Object对象

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

#### Reflect中的方法

| 对象中的方法                       | 说明                      |
| ---------------------------------- | ------------------------- |
| Reflect.apply()                    | 对一个函数进行`apply`调用 |
| Reflect.construct()                | 对构造函数进行`new`操作   |
| Reflect.defineProperty()           | 定义一个属性              |
| Reflect.deleteProperty()           | 删除一个属性              |
| Reflect.get()                      | 获取一个属性              |
| Reflect.getOwnPropertyDescriptor() | 获取一个属性描述符        |
| Reflect.getPrototypeOf()           | 获取一个对象的原型        |
| Reflect.has()                      | 判断一个属性是否在对象中  |
| Reflect.isExtensible()             | 判断可以扩展              |
| Reflect.ownKeys()                  | 获取一个对象中的`key`集合 |
| Reflect.preventExtensions()        | 使一个对象不可扩展        |
| Reflect.set()                      | 设置一个属性              |
| Reflect.setPrototypeOf()           | 设置一个对象的原型        |

`Reflect`对象中一些方法与`Object`相同，但它们存在一些细微的区别，如果你想更加了解可以阅读[Reflect和Object中的方法区别](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods)。

在返回值方便`Reflect`对象中的方法设计的更加合理。比如`defineProperty`方法，如果没有将属性设置成功，在`Reflect`中会返回`boolean`值，而`Object`对象中如果没有定义成功则会抛出`TypeError`。

#### Reflect搭配Proxy

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

#### 小结

`proxy`是一个的代理对象，它可以代理我们对原目标的操作。相比`Object.defineProperty`方法，`Proxy`监听的事件更加方法。
