function  Student(name,age){
  this.name=name
  this.age=age
}

function Teacher(){

}

const stu =new Student('_island',18)
console.log(stu);
console.log(stu.__proto__===Student.prototype);

// 执行Student函数中的内容，但创建出来对象是Teacher对象
const teacher=Reflect.construct(Student,['_island',18],Teacher)
console.log(teacher);
