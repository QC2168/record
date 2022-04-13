// 案例一
function foo(){
  console.log(this);
}
// 默认绑定，是一个独立函数，没有绑定对象
// 指向window
foo()

// 案例二
function foo1(){
  console.log(this); // window
}

function foo2(){
  console.log(this); // window
  foo1()
}

function foo3(){
  console.log(this); // window
  foo2()
}

foo3()

// 案例三
var obj={
  name:'hxh',
  foo:function(){
    console.log(this);
  }
}

var bar=obj.foo
obj.foo() // {name: 'hxh', foo: ƒ}
// 和位置没有关系
bar() // window

// 案例四
function foo() {
  console.log(this);
}
var obj = {
  name: "hxh",
  foo: foo
};

var bar = obj.foo;
// 和位置没有关系
bar(); // window


// 案例五
function foo(){
  return function(){
    console.log(this);
  }
}

var fn=foo()
// 也是独立调用
fn() // window

var obj={
  eating:fn // 隐式绑定
}

obj.eating() // {eating: ƒ}