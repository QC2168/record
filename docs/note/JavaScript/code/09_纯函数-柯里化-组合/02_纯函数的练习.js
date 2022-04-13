// foo是纯函数
// 相同的输入一定的产生相同的输出
// 没有修改外界的数据
// 在执行时不会产生副作用
function foo(num1, num2) {
  return num1 * 2 + num2 * num2;
}

// bar不是纯函数
// 修改了外界的变量
var iname = "_island";
function bar() {
  console.log("bar其他代码执行");
  iname = "abc";
}

bar();
console.log(iname);

// baz不是一个纯函数
// 修改了外面对象的值
function bar(info) {
  info.age = 100;
}

var obj = {
  name: "hxh",
  age: 18
};
bar(obj);
console.log(obj);

// test是一个纯函数
// 没有修改其他值
// 相同的输入一定的产生相同的输出
function test(info) {
  return {
    ...info,
    age: 100
  };
}

console.log(test(obj));
console.log(obj);

function printInfo(info) {
  // 严格来说，它不是纯函数（有输出）
  console.log(info.name, info.age);
  info.name = "abc";
}

// function sum(a, b) {
//   return a + b;
// }
