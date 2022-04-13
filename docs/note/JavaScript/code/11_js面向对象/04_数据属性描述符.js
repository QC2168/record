// 通过字面量方式创建的对象，数据属性描述符默认都是true
var obj={
  name:'_island',
  age:18
}

Object.defineProperty(obj,'address',{
  // 这个属性不能删除 // 不能重新定义属性描述符
  configurable:false,
  value:'广州市',
  // 配置属性是否可以枚举
  enumerable:true,
  writable:false

  // 如果以上属性不写，默认都是false
})

delete obj.address
console.log(obj.address); // 广州市
//   enumerable:false
console.log(obj); // { name: '_island', age: 18 }
//   enumerable:true
console.log(obj); // { name: '_island', age: 18, address: '广州市' }

obj.address='潮汕'
console.log(obj);// { name: '_island', age: 18, address: '广州市' }