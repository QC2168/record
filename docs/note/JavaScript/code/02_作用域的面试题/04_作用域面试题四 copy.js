var a=100
function foo(){
  console.log(a); // undefined
  return
  var a=200  // ao：{a : undefined}
}
foo()