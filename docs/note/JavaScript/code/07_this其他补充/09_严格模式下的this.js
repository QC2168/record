'use strict';
console.log(this);// Window

function foo(){
  console.log(this); // undefined
}

foo()