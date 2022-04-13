// 父类公共属性和方法
function Person() {
  (this.name = "_island"), (this.age = 18), (this.friends = []);
}

Person.prototype.eating = function () {
  console.log(this.name + " eating");
};

// 子类 特有属性和方法
function Student(name, age, friends, sno) {
  // 偷窃 stealing  (翻译 借用 构造函数)
  Person.call(this, name, age, friends);
  this.sno = sno;
}
Student.prototype = new Person();
Student.prototype.studying = function () {
  console.log(this.name + " studying");
};

// var stu = new Student('hxh',18,['abc'],27);
// console.log(stu.name);
// stu.eating();


// 两个不同的对象,修改引用的值会互相影响
var stu1 = new Student('_island',18,['abc'],27);
var stu2 = new Student('kobe',20,['bac'],12);
stu1.friends.push("cc");
console.log(stu1); //
console.log(stu2); //
console.log(stu1.friends); //
console.log(stu2.friends); //


// 借用构造函数也有弊端
// 1 person函数至少被调用两次
// 2 stu的原型对象上会多出一些原型对象,但这些属性是没有存在的必要