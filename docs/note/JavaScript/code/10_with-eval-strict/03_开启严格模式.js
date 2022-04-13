// "use strict";
// 单个文件开启严格模式
var msg='hello world'
console.log(msg);
// true.foo='abc' // Uncaught TypeError: Cannot create property 'foo' on boolean 'true'


// 给单个函数开启严格模式
function foo(){
  "use strict";
  console.log('foo'); // Uncaught TypeError: Cannot create property 'bar' on boolean 'true'
  true.bar=123
}

foo()