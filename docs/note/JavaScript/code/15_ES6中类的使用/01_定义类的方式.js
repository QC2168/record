// 类的声明
class Foo{

}

// var Foo=class{}

var f=new Foo()
console.log(Object.getOwnPropertyDescriptors(f.__proto__));
console.log(typeof Foo); // function
console.log(f instanceof Foo); // true
console.log(f instanceof Object); //true
// {
//   constructor: {
//     value: [class Foo],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// }
