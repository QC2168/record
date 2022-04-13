function foo(){
  function bar(){
    console.log('bar');
  }
  return bar
}

var fn=foo()
// var fn=0xb00
fn()


