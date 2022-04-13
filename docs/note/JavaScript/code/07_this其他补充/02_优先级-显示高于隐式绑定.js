var obj={
  name:'obj',
  foo:function(){
    console.log(this);
  }
}

// // 隐式绑定
// obj.foo()
// // call apply 绑定高于隐式绑定
// obj.foo.call('abc')

// bind隐式绑定
// var bar=obj.foo.bind('cba')
// bar()

// 明显的对比
// function foo(){
//   console.log(this);
// }
// var obj={
//   name:'obj',
//   foo:foo.bind('aaa')
// }
// obj.foo() // aaa
// console.log(foo==obj.foo); // false