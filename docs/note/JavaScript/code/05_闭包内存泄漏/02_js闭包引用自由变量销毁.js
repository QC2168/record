function foo(){
  var name ='hxh'
  var age=18
  function bar(){
    debugger;
    console.log(name);
    // JS V8引擎会把age属性销毁掉，性能优化
  }

  return bar
}

var fn=foo()
fn()