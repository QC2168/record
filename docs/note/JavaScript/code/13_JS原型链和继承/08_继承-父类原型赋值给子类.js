// 父类公共属性和方法
function Person() {
  (this.name = "_island"), (this.age = 18), (this.friends = []);
}

Person.prototype.eating = function () {
  console.log(this.name + " eating");
};
Person.prototype.running = function () {
  console.log(this.name + " running");
};
// 子类 特有属性和方法
function Student(name, age, friends, sno) {
  // 偷窃 stealing  (翻译 借用 构造函数)
  Person.call(this, name, age, friends);
  this.sno = sno;
}

// 直接将父类的原型赋值给子类，作为子类的原型
Student.prototype =Person.prototype
Student.prototype.studying = function () {
  console.log(this.name + " studying");
};


// 借用构造函数也有弊端
// 1 person函数至少被调用两次
// 2 stu的原型对象上会多出一些原型对象,但这些属性是没有存在的必要
var stu =new Student('_island',18,['abc'],27)

stu.running()
stu.eating()