// instanceof
function inheritPrototype(SubType,SuperType){
  SubType.prototype=Object.create(SuperType.prototype)
  Object.defineProperty(SubType.prototype,'constructor',{
    enumerable:false,
    configurable:true,
    writable:true,
    value:SubType
  })
}
function Person(){

}

function Student(){

}

inheritPrototype(Student,Person)
var stu=new Student()
// 判断对象是否在原型链上
console.log(stu instanceof Student); // true
console.log(stu instanceof Person); // true
console.log(stu instanceof Object); // true