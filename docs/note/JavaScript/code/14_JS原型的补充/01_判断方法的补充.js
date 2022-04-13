var obj={
  name:'_island',
  age:18
}

var info=Object.create(obj,{
  address:{
    value:'广州市',
    enumerable:true
  }
})

// console.log(info); // { address: '广州市' }
// console.log(info.__proto__); // { name: '_island', age: 18 }


// hasOwnProperty
// console.log(info.hasOwnProperty('address')); // true  
// console.log(info.hasOwnProperty('name')); // false，name是在原型上的

// in 操作符 不管是在当前对象还是原型中，找到了就返回true
// console.log('address' in info); // true
// console.log('name' in info); // true

// 所以使用for key in info 上的话，也会把原型上的属性遍历出来


