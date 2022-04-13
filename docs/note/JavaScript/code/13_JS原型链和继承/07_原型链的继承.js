// 父类公共属性和方法
function Person(){
  this.name='_island',
  this.friend=[]
}

Person.prototype.eating=function(){
  console.log(this.name+' eating');
}


// 子类 特有属性和方法
function Student(){
  this.sno=111
}
Student.prototype=new Person()
Student.prototype.studying=function(){
  console.log(this.name+' studying');
}

var stu=new Student()
console.log(stu.name);
stu.eating();

// 原型链实现继承的弊端
// 打印stu对象,某些属性和方法看不到
// 弊端一
var obj={
  name:'_island'
}
console.log(stu);

// 弊端二
// 两个不同的对象,修改引用的值会互相影响
var stu1=new Student()
var stu2=new Student()
stu1.friend.push=['abc']
console.log(stu2.friend);//[ push: [ 'abc' ] ]
// 这是在stu1中添加新的属性
stu1.name='cc';
console.log(stu2.name); // _island
// 弊端三
// 不能传递参数

new Student('_island')