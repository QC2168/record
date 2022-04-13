var obj = {
  name: "_island",
  age: 18
};

// 原型式继承函数
function createObject(o) {
  var newObj = {};
  // o的原型指向newObj
  Object.setPrototypeOf(newObj, o);
  return newObj;
}
//
function createObject2(o) {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}

// 这份代码和上面两个方法实现的代码是一样的
var info = Object.create(obj);

// info原型指向obj对象
var info = createObject(obj);
console.log(info);
console.log(info.__proto__);
