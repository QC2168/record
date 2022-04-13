Function.prototype.myapply = function (thisArg, args=[]) {
  // 获取需要被执行的函数
  var fn = this;
  // 将thisArg转成对象
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  // 调用需要执行的函数
  thisArg.fn=fn
  var result=thisArg.fn(...args)
  // 删除属性
  delete thisArg.fn
  // 返回数据
  return result
};
function foo(){
  console.log(this);
}
function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2);
  return num1 + num2;
}

// 系统调用
// var res=sum.apply('abc',[20,30])
// console.log(res);

// 自己实现的apply调用
// var res = sum.myapply("abc", [20, 30]);
// console.log(res);
foo.myapply('abc')