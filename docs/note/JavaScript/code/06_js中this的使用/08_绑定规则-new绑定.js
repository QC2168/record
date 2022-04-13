// 我们通过一个new关键字调用一个函数时（构造器），这个时候this是在调用这个构造器时创建出来的对象
// this=创建出来的对象
// 这个绑定过程就是new绑定
function Person(name,age) {
  this.name=name
  this.age=age
}
// 自动生成新的obj对象
// 生成的对象赋值到Person中的this
var p1 = new Person('hxh',21);
console.log(p1.name,p1.age);
