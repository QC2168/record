var obj={
  name:'hxh',
  eating:function(){
    console.log(obj.name+'在吃东西');
  },
  running:function(){
    console.log(obj.name+'在跑步');
  },
  studying:function(){
    console.log(obj.name+'在学习');
  },
}
// 从某些角度来说，开发中如果没有obj，很多的问题我们也是有解决方案的
// 但是如果没有this，会让我们编写代码变得非常不方便
obj.eating()
obj.running()
obj.studying()

var obj={
  name:'hxh',
  eating:function(){
    console.log(this.name+'在吃东西');
  },
  running:function(){
    console.log(this.name+'在跑步');
  },
  studying:function(){
    console.log(this.name+'在学习');
  },
}