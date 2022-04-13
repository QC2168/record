function Student(name,age,sno){
  this.name=name
  this.age=age
  this.sno=sno
}

Student.prototype.running=function(){
  console.log(this.name+'在跑步');
}
Student.prototype.eating=function(){
  console.log(this.name+'在吃饭');
}
Student.prototype.studying=function(){
  console.log(this.name+'在学习');
}

// teacher
function Teacher(name,age,title){
  this.name=name
  this.age=age
  this.sno=sno
}

Teacher.prototype.running=function(){
  console.log(this.name+'在跑步');
}
Teacher.prototype.eating=function(){
  console.log(this.name+'在吃饭');
}
Teacher.prototype.studying=function(){
  console.log(this.name+'在学习');
}