function foo(num1,num2,num3){
  // 类数组对象中
  // （长得像一个数组，本质上是一个对象）
  // arguments
  console.log(arguments); // AO对象中argument
  // 常见对arguments的操作是三个
  // 获取长度
  console.log(arguments.length)
  // 通过索引获取某个参数
  console.log(arguments[0])
  // callee 获取当前arguments的函数
  console.log(arguments.callee);

  // 没有foreach，它不是数组！
  // arguments.forEach(element => {
    
  // });
  console.log(num1,num2,num3);
}

foo(10,20,30,40,50)