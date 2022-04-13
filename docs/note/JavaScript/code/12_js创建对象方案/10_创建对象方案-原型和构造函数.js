function Person(name,age,height,address){
// Person.prototype.name=name
// Person.prototype.age=age
// Person.prototype.height=height
// Person.prototype.address=address
this.name=name
this.age=age
this.height=height
this.address=address
// 如果是方法时，可以写上原型上
Person.prototype.running=function(){
  console.log(this.name+'在跑步');
}
}

var p1=new Person('_island',18,1.8,'广州市')
var p2=new Person('abc',18,1.7,'广州市')
console.log(p1.name);