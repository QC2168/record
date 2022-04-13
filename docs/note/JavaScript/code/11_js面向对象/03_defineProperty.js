var obj={
  name:'_island',
  age:18
}

Object.defineProperty(obj,'weight',{
  value:150,
  configurable:true,
  enumerable:true
})
console.log(obj); // { name: '_island', age: 18 }
// obj里边已经有weight属性了，但这个属性不可枚举
console.log(obj.weight); // 150