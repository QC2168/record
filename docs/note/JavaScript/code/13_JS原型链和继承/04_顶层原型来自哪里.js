var obj1={}
var obj2=new Object()

function Person(){

}
var p=new Person()

var obj={}
// Object.prototype
console.log(obj.__proto__);
console.log(obj.__proto__===Object.prototype);
console.log(obj instanceof Object);