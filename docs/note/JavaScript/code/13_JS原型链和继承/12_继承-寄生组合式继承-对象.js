function inheritPrototype(SubType,SuperType){
  SubType.prototype=Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype,'constructor',{
    enumerable:false,
    configurable:true,
    writable:true,
    value:SubType
  })
}


function Person(name,age,friends){
  this.name=name
  this.age=age
  this.friends=friends
}
Person.prototype.running=function(){
  console.log('running~');

}

Person.prototype.eating=function(){
  console.log('eating~');
}

function Student(name,age,friends,sno,score){
  Person.call(this,name,age,friends)
  this.sno=sno
  this.score=score
}
inheritPrototype(Student,Person)
Student.prototype.studying=function(){
  console.log('studying~');
}

var stu=new Student('_island',18,['abc'],27,100)
console.log(stu);
stu.studying()