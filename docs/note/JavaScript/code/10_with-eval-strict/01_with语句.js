var msg='hello world'
var obj={name:'_island',age:18}
function foo(){
  function bar(){
    with(obj){
      console.log(msg);
      console.log('-----');
    }
  }
  bar()
  
}

foo()

var info={
  name:'kobe'
}

with(info){
  console.log(name);
}
// 扩展一个语句的作用域链
// with 语句可以形成自己的作用域,with会先查找传入的对象，如果没有，再沿着作用域链继续查找
// 不推荐使用with语句，它可能会出现混淆错误和兼容性问题的根源