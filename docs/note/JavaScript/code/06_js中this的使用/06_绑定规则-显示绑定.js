function foo(){
  console.log('函数被调用了');
  console.log(this);
}
var obj={
  name:'obj'
}
// foo直接调用和call / apply调用的不同在于this绑定的不同
// foo直接调用指向的是全局对象（window）
foo()
// 对函数发起调用
// call / apply是可以指定this的绑定对象

foo.call(obj)
foo.apply(obj)
foo.apply('aaa')

// call和apply有什么区别
// call和apply在执行函数时，是可以明确的绑定this，这个绑定规则称之为显示绑定
function sum(num1,num2){
  console.log(num1+num2,this);
}
sum(10,20)
sum.call('call',10,20)
sum.apply('apply',[10,20])