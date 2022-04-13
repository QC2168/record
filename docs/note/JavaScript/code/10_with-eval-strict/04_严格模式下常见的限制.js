"use strict"
// 1.意外创建全局变量
// msg='hello world'
// console.log(msg);

// function foo(){
//   "use strict"
//   age=18
//   console.log(age); // Uncaught ReferenceError: age is not defined
// }
// foo()

// 2. 不允许参数有相同的名称
// function foo(x,y,x){
//   console.log(x,y,x);
// }
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context
// foo(10,20,30) // 30 20 30
// 相当于定义两次变量，会覆盖前面的变量

// 3.静默错误

// true.age=18  // Uncaught TypeError: Cannot create property 'age' on boolean 'true'
// NaN=123 // Uncaught TypeError: Cannot assign to read only property 'NaN' of object '#<Window>'
var obj={
}
Object.defineProperty(obj,"name",{
  configurable:false,
  writable:false,
  value:'_island'
})

// console.log(obj); // {name: '_island'}
// obj.name='hxh' // Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
// delete obj.name // Uncaught TypeError: Cannot delete property 'name' of #<Object>

// 4.不允许使用8进制模式
// var num=0123
// es6之后的语法
// var num2=0o123 // 八进制
// var num3=0x123 // 十六进制
// var num4=0b123 // 二进制
// console.log(num); // Uncaught SyntaxError: Octal literals are not allowed in strict mode.

// with语句在es6中不允许使用

// eval函数不会向上引用变量了
// var jsStr="msg='hello world';console.log(msg);"
// eval(jsStr)
// console.log(msg); // Uncaught ReferenceError: msg is not defined

