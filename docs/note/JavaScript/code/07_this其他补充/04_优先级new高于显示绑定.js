
// new关键字不能和apply、call一起来使用
function foo(){
  console.log(this);
}

var bar=foo.bind('aaa')

var obj=new bar() // foo {}