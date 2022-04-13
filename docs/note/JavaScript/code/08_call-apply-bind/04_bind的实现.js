Function.prototype.mybind = function (thisArg, ...argArray) {
  // 获取到真实需要调用的函数
  var fn = this;
  // 绑定this
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  function proxyFn(...args) {
    // 将函数放到thisArg中进行调用
    thisArg.fn = fn;
    // 特殊情况，将传入的两个数组进行合并
    var finalArgs = [...argArray, ...args];
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  }
  // 返回结果
  return proxyFn;
};

function foo() {
  console.log("foo被执行", this);
}
function sum(...args) {
  var res = [...args].reduce((pre, val) => pre + val);
  console.log(res);
}

// // 系统调用
// var bar=foo.bind()
// bar()

// var newSum=sum.bind('aaa')
// newSum(10,20)

// 使用自己的bind
// var bar=foo.mybind('abc')
// bar()

var newSum = sum.mybind("abc");
newSum(10, 20);
