function foo(){
  console.log(this);
}

// foo.call('aaa')
// foo.call('aaa')
// foo.call('aaa')
// foo.call('aaa')

// 默认绑定和显示绑定bind冲突
// 优先级（显示绑定）->（默认绑定）
// bind是在堆内存开辟一块新的空间
var newFoo=foo.bind('aaa')
newFoo() // aaa
newFoo() // aaa
newFoo() // aaa
