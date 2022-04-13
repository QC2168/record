var obj ={
  name:'hxh'
}
var info ={
  name:'zs',
  friend:obj
}
var p ={
  name:'ls',
  friend:obj
}

// 计数存在弊端：循环引用
var obj1={friend:obj2}
var obj2={friend:obj1}
// 当忘记 obj1.friend=null，容易内存泄漏