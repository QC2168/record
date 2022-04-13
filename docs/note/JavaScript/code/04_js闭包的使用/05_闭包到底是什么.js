// function foo(){
//   var name="foo"
//   function bar(){
//     console.log('bar',name);
//   }
//   return bar
// }

// var fn=foo()
// // var fn=0xb00
// fn()
// // 闭包是两部分组成的
// // 函数+可以访问的自由变量

// - 一个普通的函数function，如果它可以访问外层作用于的自由变量，那么这个函数就是一个闭包
// - 从广义的角度来说，JavaScript中的函数都是闭包
// - 从狭义的角度来说，JavaScript中一个函数，如果访问了外层作用域的变量，那么它就是一个闭包
function foo(){

}