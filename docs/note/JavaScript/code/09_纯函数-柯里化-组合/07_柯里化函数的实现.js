function add1(x, y, z) {
  return x + y + z;
}

function add2(x, y, z) {
  x = x + 2;
  y = y * 2;
  z = z * z;
  return x + y + z;
}

function log1(date, type, msg) {
  console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${msg}]`);
}

// 柯里化函数的实现
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

var curryAdd = MyCurrying(add1);
var r1=add1(10, 20, 30);
var r2=curryAdd(10, 20, 30);
var r3=curryAdd(10, 20)(30);
console.log(r1);
console.log(r2);
console.log(r3);