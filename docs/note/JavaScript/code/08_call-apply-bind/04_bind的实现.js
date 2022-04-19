// Function.prototype.mybind = function (thisArg, ...argArray) {
//   // 获取到真实需要调用的函数
//   var fn = this;
//   // 绑定this
//   thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

//   function proxyFn(...args) {
//     // 将函数放到thisArg中进行调用
//     thisArg.fn = fn;
//     // 特殊情况，将传入的两个数组进行合并
//     var finalArgs = [...argArray, ...args];
//     var result = thisArg.fn(...finalArgs);
//     delete thisArg.fn;
//     return result;
//   }
//   // 返回结果
//   return proxyFn;
// };

Function.prototype.mybind = function (thisArg, ...argArray) {
  // 接受绑定的this值和预传入参数
  // 判断绑定的函数
  if (typeof this !== "function") {
    throw new Error("调用bind方法必须是一个函数");
  }
  // 获取到真实需要调用的函数
  var fn = this;
  // 绑定this
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  // 创建一个中转的函数
  var fNOP = function () {};
  function proxyFn(...args) {
    // 当this是实例时，让this指向实例，否则指向原本的目标值
    return fn.apply(this instanceof fNOP ? this : thisArg, [
      // 考虑函数返回值
      ...argArray,
      ...args,
    ]);
  }

  // 使返回的函数原型也有当前this中的原型
  fNOP.prototype = this.prototype;
  proxyFn.prototype = new fNOP();
  // 返回函数
  return proxyFn;
};

var foo = {
  name: "_island",
};
function Person(age) {
  console.log(this);
  console.log(this.name);
  console.log(age);
}

let bar = Person.mybind(foo, 18);
bar();
// {name: "_island"}
// _island
// 18

let newBar = new bar();
// Person {constructor: Object}
//    <constructor>: "Person"
//    name: "Person"
// undefined
// 18
// function foo() {
//   console.log("foo被执行", this);
// }
// function sum(...args) {
//   var res = [...args].reduce((pre, val) => pre + val);
//   console.log(res);
// }

// // // 系统调用
// // var bar=foo.bind()
// // bar()

// // var newSum=sum.bind('aaa')
// // newSum(10,20)

// // 使用自己的bind
// // var bar=foo.mybind('abc')
// // bar()

// var newSum = sum.mybind("abc");
// newSum(10, 20);
