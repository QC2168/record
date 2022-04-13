// this指向什么，跟函数所处的位置是没有关系的
// 跟函数被调用的方式是有关系的
function foo(){
  console.log(this);
}

// 直接调用
foo() // window

//  创建一个对象，对象中的函数指向foo
var obj={
  name:'hxh',
  foo
}

obj.foo() // obj
对象

//  apply 调用
foo.apply('abc')