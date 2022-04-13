function Person(){}

var p =new Person()
console.log(p instanceof Person);
console.log(Person.prototype.isPrototypeOf(p));