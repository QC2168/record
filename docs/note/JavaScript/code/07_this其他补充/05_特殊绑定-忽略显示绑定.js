function foo(){
  console.log(this);
}

foo.apply('abc')
foo.apply([])
// 如果是null undefined 自动将this绑定成全局对象window
foo.apply(null)
foo.apply(undefined)

var bar=foo.bind(null)
bar() // window