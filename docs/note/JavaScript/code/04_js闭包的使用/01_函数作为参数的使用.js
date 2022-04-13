// function foo(arg){
//   console.log('foo',arg);

// }
// foo(123)


// 将函数作为另外一个函数的参数
// function foo(fn){
//   fn()
// }

// function bar(){
//   console.log('bar');
// }

// foo(bar)


// 对于工具类的时候非常有用
// 从这里可以看出js非常灵活的
function calc(num1,num2,calcFn){
  console.log(calcFn(num1,num2));
}

function add(num1,num2){
  return num1+num2
}

function sub(num1,num2){
  return num1-num2
}

function mul(num1,num2){
  return num1*num2
}

var m=20
var n=30

calc(m,n,mul)