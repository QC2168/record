function MyCompose(...fns) {
  var length = fns.length;
  // 判断传入的参数是否为函数
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== "function") {
      throw new TypeError("Expected arguments are functions");
    }
  }
  // 返回一个接收参数的函数
  function compose(...args) {
    // 当前执行函数索引
    var index = 0;
    // 调用当前索引对应的函数
    var result = length ? fns[index].apply(this, args) : args;
    while (++index < length) {
      // 将上一次返回的结果，传入到下一个函数中
      var result = fns[index].call(this, result);
    }
    return result;
  }
  return compose;
}

function double(num) {
  return num * 2;
}

function square(num) {
  return num ** 2;
}

console.log(MyCompose(double, square)(10));
