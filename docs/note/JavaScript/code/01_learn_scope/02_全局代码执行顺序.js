var num1=0

console.log(name);

var name ='张三'

console.log(name);


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