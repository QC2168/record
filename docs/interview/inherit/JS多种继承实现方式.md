---
title: JS多种继承实现方式
tags: [JavaScript]
---

## JS多种继承实现方式

### 类式继承
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

 