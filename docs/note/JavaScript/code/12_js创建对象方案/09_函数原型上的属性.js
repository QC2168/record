function foo(){

}

console.log(foo.prototype);
console.log(Object.getOwnPropertyDescriptors(foo.prototype));
// {
//   constructor: {
//     value: [Function: foo],
//     writable: true,
//     enumerable: false, // 不可枚举
//     configurable: true
//   }
// }

console.log(foo.constructor.name);

// foo.prototype.name='_island';
// var f1=new foo()
// console.log(f1.name); //_island

// 当你要给prototype添加很多的对象时，此时如果使用点语法来添加会让[name].prototype重复很多
// 可以直接修改整个prototype对象
// foo.prototype={
//   name:'_island',
//   age:18
// }

// var f1=new foo()

// console.log(f1.name,f1.age); // _island 18

// 但是这样子赋值之后，没有constructor属性了

// foo.prototype={
//   constructor:foo, // 但这样子添加的话enumerable（可枚举）是true
//   name:'_island',
//   age:18
// }

// var f1=new foo()

// console.log(f1.name,f1.age); // _island 18

// // 真实开发中我们可以通过object.defineProperty方式添加constructor
// Object.defineProperty(obj,'constructor',{
//   enumerable:false,
//   configurable:true,
//   writable:true,
//   value:foo
// })