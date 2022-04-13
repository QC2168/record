"use strict";

function foo(){
  console.log(this);
}

foo() // undefined

// 在严格模式下，自执行函数会指向undefined
var obj={
  foo:foo
}
obj.foo() // {foo: ƒ}


// setTimeout的this
// 内部执行一般称之为黑盒子
// fn.apply （this == window）
setTimeout(function(){
  "use strict"
  console.log(this); // window
},200)