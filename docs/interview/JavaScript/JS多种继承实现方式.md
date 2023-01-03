---
title: JS多种继承实现方式
tags: [JavaScript]
---

## JS多种继承实现方式

### 类式继承

- 原型中如果存在引用类型的数据,当修改一个实例时,其他实例中的值也会跟着改变
- 实例化子类时,无法给父类传参

```js
function SuperClass() {
  this.superValue = true;
  this.obj = {
    foo:'foo'
  }
}
SuperClass.prototype.getSuperValue = function() {
  return this.superValue;
}
function SubClass() {
  this.subValue = false;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function() {
  return this.subValue;
}
const instance = new SubClass();
console.log(instance)
console.log(instance.superValue) // true
console.log(instance.subValue) // false
console.log(instance instanceof SuperClass)// true
console.log(instance instanceof SubClass)// true
console.log(SubClass instanceof SuperClass)// false
```
### 构造函数继承
- 必须在构造函数中定义方法,因此函数不能被复用
- 子类不能访问父类的方法
```js
function Person(name) {
  this.friends = ['张三','李四'];
  this.name = name;
}
Person.prototype.friends = function() {
  console.log(this.friends);
}
function Worker(name) {
  // 继承父类构造函数中的属性方法
  Person.call(this,name);
}
//创建第一个子类实例
const p1 = new Worker('王五');
//创建第二个子类实例
const p2 = new Worker('老六');
console.log(p1)
console.log(p2)
console.log(p1 instanceof Worker) // true
```
### 组合式继承

- 父类构造函数会被调用两次
  - 第一次创建子类原型时
  - 第二次子类构造函数时
- 子类包含父类所有实例属性

```js
function Person(name) {
  this.friends = ['张三','李四'];
  this.name = name;
}
Person.prototype.friends = function() {
  console.log(this.friends);
}
function Worker(name) {
  // 继承父类
  Person.call(this,name);
  this.name=name
}
Worker.prototype=new Person()
Worker.prototype.getfriends=function(){
    console.log(this.friends);
}
//创建第一个子类实例
const p1 = new Worker('王五');
//创建第二个子类实例
const p2 = new Worker('老六');
console.log(p1)
console.log(p2)
console.log(p1.getfriends())
console.log(p1 instanceof Worker)
```
### 原型式继承

- 属性中如果包含引用数据类型,会被共享

```js
function inheritObject(o) {
    // 定义一个临时函数
    function F() {}
    //将函数的的原型继承父对象
    F.prototype = o;
    // 返回这个函数的实例，该对象的原型继承了父对象
    return new F();
}
function Person(name) {
    this.friends = ['张三','李四'];
    this.name = name;
}
Person.prototype.friends = function() {
    console.log(this.friends);
}
const p1=new Person('_island')
const p2 =inheritObject(p1)
// 等价于 Object.create(p1)
p2.name='_island(p2)'
console.log(p1.name)
console.log(p2.name)
```
### 寄生式继承

- 在对象上添加函数,会导致后续不好复用
- 类似构造函数方法

```js
const obj1 = {
    name:'_island'
}
function createNewObj(obj) {
    // 通过原型方式创建新的对象
    const o = Object.create(obj);
    // 拓展新对象
    o.time = Date.now()
    // 返回拓展后的新对象
    return o;
}
const obj2=createNewObj(obj1)
console.log(obj1)
console.log(obj2)
```
### 寄生组合式继承

这个方法只调用了一次父级函数，也没有在子类原型上面添加多余的属性，与原来的原型链保持不变

- 解决两次调用的方法是使用寄生组合式继承

```js
function Person(name) {
  this.friends = ['张三','李四'];
  this.name = name;
}
Person.prototype.friends = function() {
  console.log(this.friends);
}
function Worker(name) {
  //继承父类
  Person.call(this,name);
  this.name=name
}
Worker.prototype=new Person()
Worker.prototype.getfriends=function(){
    console.log(this.friends);
}
//创建第一个子类实例
const p1 = new Worker('王五');
//创建第二个子类实例
const p2 = new Worker('老六');
console.log(p1)
console.log(p2)
console.log(p1.getfriends())
console.log(p1 instanceof Worker)
```