
// console.log(num1);

// foo()
// function foo(){
//   console.log(window);
//   console.log(this);
//   console.log(kk)
//   var kk=10
//   function bar(){
//     console.log('bar');
//   }
 
// }

// var num1=1
// var num2 =2
// var result=num1+num2

// console.log(window);
// 上面通过var定义的变量都可以通过window中查看到


/* 
  1.代码会被解析，V8引擎内部会帮助我们创建一个对象GlobalObject，里边可能会有mach，date等全局对象，重要是的里边有window对象，指向this 即（{window：globalObject}）
  2.运行代码
    2.1. v8为了执行代码，v8内部会有个执行上下文栈（execution context stack， 简称 ECStack）（函数调用栈）
    2.2. 因为现在执行的是全局代码，为了全局代码能够正常的执行，需要创建 全局执行上下文（Global Execution Context 简称GEC）（全局代码需要被执行时才会创建）
    2.3 ECStack中分有VO（variable）:GO（global）
*/

/* 
  执行过程：
  1.将全局代码中的属性添加到GO中，这个时候代码还没执行，刚开始属性的值都是undefined的。
  2.所以在刚开始打印会打印出undefined，之后执行到指定赋值代码后再将对应值赋值到属性
*/

// var GlobalObject={
//   String:'类',
//   window:GlobalObject,
//   name:undefined,
//   // 如果是个函数，V8会自动开辟新的空间(在内存里)，来放foo函数
//   foo:'0xa00内存地址'
// }

// 存储foo函数(内存地址0xa00内存地址)
// var saveFunc={
//   [[scope]]:'parent scope',
//   函数执行体(代码块)
// }
// 在执行时，在ECS中创建一个（function execution context）函数执行上下文之后，在FEC中也有一个AO（Activation Object），用于存放函数中的属性


var name ='hxh'
foo(123)
function foo(num){
  console.log(m);
  var m=10
  var n=10
  // console.log(name); // hxh 
  // 当我们查找一个变量时，真实的查找路径是沿着作用域链来查找的
  // 当打印name时，会在当前FEC中的VO进行查找，
  // 在FEC中不止有VO，还有scope chain（由VO+Parent组成，作用域链）
  function bar(){
    console.log(name);
  }
  bar()
}

console.log(aaaaa);