// es5
// function Animal() {}
// Animal.prototype.eating = function () {
//   console.log(this.name + " eating");
// };

class Animal {
  constructor(name) {
    this.name = name;

  }

  // 创建出来的对象进行访问
  eating() {
    console.log(this.name + " eating");
  }
  running() {
    console.log(this.name + " running");
  }

  // 类的访问器方法
  get address() {
    return this._address;
  }

  set address(val) {
    this._address = val;
  }

  // 类的静态方法（类方法）
  // 通过类名去访问
  static createName(name) {
    return name
  }
}

var p = new Animal("_island", 18);
p.eating(); // _island eating
p.running(); // _island running

console.log(Object.getOwnPropertyDescriptors(Animal.prototype));
// {
//   constructor: {
//     value: [class Animal],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   eating: {
//     value: [Function: eating],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   running: {
//     value: [Function: running],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
var a2 = Animal.createName("_island");
console.log(a2); // _island
