// // 每个对象都有原型 (隐式原型)
// // JavaScript当中每个对象都有一个特殊的内置属性prototype(原型),这个特殊的对象可以指向另外一个对象
var obj={
  name:'_island'
  // 这里面隐藏了prototype
}
// // 这里面隐藏了prototype
//  var info ={ 
// // [[prototype]]
// }
// // [[prototype]]

// // 查看原型和原型的概念
// // 早期ECMA是没有规范如何查看[[prototype]]
// // 浏览器为了给开发者可以去查看这个属性,给对象中提供了一个属性,可以让我们查看这个原型对象(浏览器提供)
// // __proto__
// console.log(obj.__proto__);
// console.log(info.__proto__);

// // ECMA5之后,提供了一个方法来获取这个原型
// console.log(Object.getPrototypeOf(obj));

// 原型有什么用
// 当我们从一个对象中获取一个属性,它会触发到[[get]]操作
// 1.在当前对象中，去查找对应的属性，如果找到了就直接用
// 2.如果没有查找，就会沿着原型链去查找[[prototype ]]
// obj.age=18
// obj.__proto__.age=20
// console.log(obj.age);
