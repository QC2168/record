// 隐式绑定 object.fn()
// object对象会被js引擎绑定到fn函数中this里面

function foo(){
  console.log(this);
}

// 独立函数调用
// foo()

var obj={
  name:'hxh',
  foo:foo
}


obj.foo() // obj对象


// 案例二
var obj={
  name:'hxh',
  eating:function (){
    console.log(this.name+'在吃东西');
  },
  running:function(){
    console.log(this.name+'在跑步');
  }
}

obj.eating()
obj.running()

var fn=obj.eating
fn() // 获取不到this.name，this指向fn


// 案例三
var obj1={
  name:'obj1',
  foo:function(){
    console.log(this);
  }
}

var obj2={
  name:'obj2',
  bar:obj1.foo
}

obj2.bar() // obj2对象