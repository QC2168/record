function foo() {
  var name = "foo";
  var age = 18;

  function bar() {
    console.log(name);
    console.log(age);
  }
  return bar;
}

var fn = foo();

fn();
// 解决内存泄漏
fn = null;
