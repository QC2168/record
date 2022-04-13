var obj={
  name:'_island',
  age:18
}
// 如果第二个参数不存在，那么会新增这个属性
Object.defineProperty(obj,'name',)
// 获取属性
console.log(obj.name); // _island
// 修改属性
obj.name='abc'
console.log(obj.name); // abc
// 删除属性
// delete obj.name
// console.log(obj); // { age: 18 }

// 对属性进行限制
// 不能被删除，不能被修改
for(var key in obj){
  console.log(key);
}