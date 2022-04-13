var msg ='hello global'
function foo(){
  console.log(msg);
}

function bar(){
var msg='hello bar'
foo()

}
bar()

// 输出hello global
// 函数作用域与和调用者没有任何关系


function demo(){

}