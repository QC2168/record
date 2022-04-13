// 测试箭头函数中this执行
// var age=18
// // function foo(){
// //   console.log(name);
// // }
// var foo=()=>{
//   console.log(this);
// }
// foo()
// var obj={foo:foo}
// obj.foo()
// foo.call('abc')

// 应用场景
var obj={
  data:[],
  getData:function(){
    // 发送网络请求 将结果放到上面data中
    // 在箭头函数之前的解决方案
    // var _this=this
    // setTimeout(function() {
    //   var res=['abc','aac']
    //   _this.data=res
    // }, 2000);

    // 使用箭头函数
    setTimeout(()=>{
      var res=['abc','aac']
        this.data=res
    },2000)
  }
}

obj.getData()