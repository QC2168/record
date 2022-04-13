function MyCurrying(fn) {
  function curried(...args) {
    // 判断当前已经接收到的参数的个数，和参数本身需要接收的参数一致
    // 1.当已经传入的参数，大于等于 需要的参数时，就执行函数
    // console.log(args.length);
    // fn有个length属性，可以通过这个属性获取参数
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      // 没有达到个数时，需要返回一个新的函数，继续来接收的参数
      function curried2(...args2) {
        // 接收到参数之后，递归调用curried函数检查函数的个数是否达到要求
        return curried.apply(this, [...args, ...args2]);
      }
      return curried2;
    }
  }
  return curried;
}
function double(num) {
  return num * 2;
}

function square(num) {
  return num ** 2;
}

var count = 10;
// var res=square(double(count))
// console.log(res);

// 组合以上函数
function composeFn(m, n) {
  return function (count) {
    return n(m(count));
  };
}
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
var log = MyCurrying((t, v) => {
  console.log(t, v);
  return v;
});
var newFn = MyCompose(double,log('double--'),square,log('double--'));

var res2 = newFn(count);
console.log(res2);
