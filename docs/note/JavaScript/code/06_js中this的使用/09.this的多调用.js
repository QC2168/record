function foo(){
  return function(){
    console.log(this);
  }
}

var obj={
foo:foo
}

obj.foo()() // window