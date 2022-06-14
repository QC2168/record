👇 **阅读本文你将学习到** 👇

- 类中的构造函数
- 类的实例、静态、私有属性
- 类的实例、静态、私有方法
- 类的继承
- `Getter and Setter`
- 关于`class`一些扩展知识点

在`ES6`（`ECMAScript6`）之前，`JavaScript`语法中是不支持类的，导致面向对象编程方法无法直接使用，但我们可以通过function来实现模拟出类，而随着`JavaScript`的更新，在`ES6`出现了中出现`class`关键字，可以用于定义类。接下来让我们看看它的如何使用的。

### class

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

### 类的构造函数

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

### 类中的属性

#### 实例属性

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

#### 静态属性

当我们把一个属性赋值给类本身，而不是赋值给它`prototype`，这样子的属性被称之为静态属性（`static`）。

静态属性直接通过类来访问，无需在实例中访问。

```javascript
class Foo{
  static name ='_island'
}

console.log(Foo.name);
```

#### 私有属性

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
>

> 公共和私有字段声明是JavaScript标准委员会[TC39](https://tc39.es/)提出的[实验性功能（第3阶段）](https://github.com/tc39/proposal-class-fields)。浏览器中的支持是有限的，但是可以通过[Babel](https://babeljs.io/)等系统构建后使用此功能。

### 类中的方法

#### 实例方法

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

#### 静态方法

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

#### 私有方法

在面向对象中，私有方法是一个常见需求，但是在ES6中没有提供，我们可以通过某个方法来实现它。

```
class Foo {
  __getBloodType() {
    return "O";
  }
}

```

> 需要注意的是，通过下划线开头通常我们会局限它是一个私有方法，但是在类的外部还是可以正常调用到这个方法的

### 类的继承

`extends`关键字用于扩展子类，创建一个类作为另外一个类的一个子类。

它会将父类中的属性和方法一起继承到子类的，减少子类中重复的业务代码。

这对比之前在`ES5`中修改原型链实现继承的方法的可读性要强很多，而且写法很简洁。

#### extends的使用

```javascript
class Animal{

}

// dog 继承 Animal 类
class dog extends Animal {

}
```

#### 继承类的属性和方法

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

#### Super

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

### Getter 和 Setter

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

### 关于class扩展

#### 严格模式

在类和模块的内部，默认是严格模式，所以不需要使用`use strict`指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。

#### name属性

`ES6`中的类只是`ES5`构造函数的一层包装，所以函数的许多属性都被`class`继承了，包括`name`属性。

```javascript
class Animal{

}
console.log(Animal.name); // Animal
```

#### 变量提升

`class`不存在变量提升，这与我们在`ES5`中实现类的不同的，`function`关键字会存在变量提升。

```javascript
new Foo(); // ReferenceError
class Foo {}
```

### 总结

在`ES6`之后，我们在定义类以及它内部的属性方法，还有继承操作的语法变得非常简洁且易懂，`class`是一个语法糖，其内部还是通过`ES5`中的语法来实现的。且有些浏览器不支持`class`语法，我们可以通过`babel`来进行转换。


