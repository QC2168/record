// js语法允许函数内部再定义函数，嵌套定义
// 在很多编程语言中不支持这种语法
function foo() {
  function bar() {
    console.log("bar");
  }
  return bar;
}

var fn = foo();
fn(); // bar

function makeAdder(count){
  return function add(num){
    return count+num
  }
}

var add5=makeAdder(5)
console.log(add5(5));
console.log(add5(10));


var add10=makeAdder(10)
console.log(add10(5));
console.log(add10(10));


// 高阶函数：把一个函数如果接受另外一个函数作为参数，或者该函数会返回另外一个函数作为返回值的函数，那么这个函数称之为是一个高阶函数
