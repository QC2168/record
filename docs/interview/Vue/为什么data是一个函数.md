## 为什么data是一个函数

这是`Vue`为了独立组件与组件之间data数据的独立性而规定的

因为`Vue`组件被多次复用时，会创建多个实例，而这些实例是基于同一个构造函数的，如果`data`是一个对象的话，那么这些组件都会复用同一个对象。导致数据混乱。而`data`是一个函数的话，他们之间的数据是独立的，不会被互相影响。

### 举例

通过一个简单的`JS`例子来了解一下

```javascript
function Foo() {}
Foo.prototype.data = {
  name: "_island"
};
let cmp1 = new Foo();
let cmp2 = new Foo();
console.log(cmp1.data);
console.log(cmp2.data);

console.log("---");
console.log(`修改cmp2.data={name:test}`);
cmp2.data.name = "test";
console.log(cmp1.data); // {name:test}
console.log(cmp2.data); // {name:test}
```

因为数据共享的原因，当`cmp2`修改了`name`时，导致`cmp1`的`name`也被修改了

思考一下，如果将`prototype`修改成一个函数结果是怎么样的？

```javascript
function Foo() {
  this.data = this.data();
}
Foo.prototype.data = function () {
  return {
    name: "_island"
  };
};
let cmp1 = new Foo();
let cmp2 = new Foo();
console.log(cmp1.data);
console.log(cmp2.data);

console.log("---");
console.log(`修改cmp2.data={name:test}`);
cmp2.data.name = "test";
console.log(cmp1.data); // {name: _island}
console.log(cmp2.data); // {name: test}
```