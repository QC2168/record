var obj={
  name:'_island',
  age:18
}

// 禁止对象添加新的属性
Object.preventExtensions(obj)
obj.address='广州市'
console.log(obj); // { name: '_island', age: 18 }

// 禁止对象配置、删除里面的属性
// 方法一  没必要
// for(var key in obj){
//   Object.defineProperty(obj,key,{
//     configurable:false,
//     enumerable:true,
//     value:obj[key],
//     writable:true
//   })
// }

// 方法二
Object.seal(obj)
delete obj.name
console.log(obj.name); // _island

// 让属性不能进行修改操作
Object.freeze(obj)
obj.name='abc'
console.log(obj.name); // _island