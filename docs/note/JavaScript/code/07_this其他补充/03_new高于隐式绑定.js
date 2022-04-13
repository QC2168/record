var obj={
  name:'obj',
  foo:function (){
    console.log(this)
  }
}

// 打印obj代表隐式绑定优先级高
// 打印foo代表new绑定优先级高
// new优先级高于隐式绑定
var fn=new obj.foo() // foo