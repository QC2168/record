// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eating() {
//     console.log(this.name + " eating");
//   }
//   running() {
//     console.log(this.name + " running");
//   }
//   readingBook() {
//     console.log("page1");
//     console.log("page2");
//     console.log("page3");
//   }

//   static staticFn() {
//     console.log("staticFn");
//   }
// }

// class Student extends Person {
//   constructor(name, age, sno) {
//     // 在子类的构造函数中使用this或者返回默认对象之前，必先通过super调用父类的构造函数
//     super(name, age);
//     this.sno = sno;
//   }
//   studying() {}

//   //
//   running() {
//     console.log("student" + this.name + " running");
//   }
//   readingBook() {
//     super.readingBook();
//     console.log("page4");
//     console.log("page5");
//     console.log("page6");
//   }

//   // 重新静态方法
//   static staticFn() {
//     super.staticFn();
//     console.log("student staticFn");
//   }
// }

// var stu = new Student("_island", 18, 27);
// console.log(stu);
// // 方法也会被继承过来
// stu.eating(); // _island eating
// // 子类对父类方法的重写
// // stu.running();
// // stu.readingBook();
// // page1
// // page2
// // page3
// // page4
// // page5
// // page6

// Student.staticFn();
// // staticFn
// // student staticFn

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

var d = new dog("tom", 4);
// d.eating(); // tom eating
d.speaking(); // tom speaking
// console.log(d.name); // tom
