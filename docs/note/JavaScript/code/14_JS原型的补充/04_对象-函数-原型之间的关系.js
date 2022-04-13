var obj={
  name:'_island'
}

console.log(obj.__proto__);
// 对象里边是有一个__proto__对象，隐式原型对象
// foo是函数，所以有prototype
// 它也是对象，会有__proto__
// prototype来自
// 创建一个函数，foo.prototype={constructor:foo}
// __proto__ 来自
// new Function() foo.__proto__ = Function.prototype
// Function.prototype = {constructor:Function}
function foo(){


}