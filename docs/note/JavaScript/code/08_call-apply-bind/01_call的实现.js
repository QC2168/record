// 给所有函数添加mycall的方法
Function.prototype.mycall = function (thisArg, ...args) {
  console.log("mycall被调用了");
  // 获取需要被执行的函数
  var fn = this;
  // 对thisArg转成对象类型（防止传入的是非对象类型）
  thisArg = thisArg ? Object(thisArg) : window;
  //调用需要被执行的函数
  thisArg.fn = fn;
  var result = thisArg.fn(...args);
  // 删除属性
  delete thisArg.fn;

  // 将最终的结果返回出去
  return result;
};

// function foo() {
//   console.log("foo函数被执行", this);
// }

// foo.mycall({ name: "hxh" });
// foo.mycall("as");
// foo.mycall("");
// foo.mycall(null);
// foo.call()

function sum(num1, num2) {
  // console.log('sum函数被执行',this,num1,num2);
  return num1 + num2;
}

var res = sum.call({}, 20, 30);
console.log("系统调用结果", res);
var myres = sum.mycall({}, 20, 30);
console.log("mycall调用结果", myres);
