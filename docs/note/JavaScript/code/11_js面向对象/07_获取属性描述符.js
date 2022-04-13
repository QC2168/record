var obj = {
  // 私有属性
  _age: 18,
};

Object.defineProperties(obj, {
  name: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: "_island"
  },
  age:{
    configurable:false,
    enumerable:false,
    get:()=>{
      console.log('调用了ages get');
      return this._age
    },
    set:(val)=>{
      console.log('调用了ages set');
      this._age=val
    }
  }
});

// 获取属性描述符
console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// {
//   value: '_island',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
console.log(Object.getOwnPropertyDescriptor(obj,'age'));
// {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: false,
//   configurable: false
// }

// 获取对象所有描述符
console.log(Object.getOwnPropertyDescriptors(obj));
// {
//   _age: { value: 18, writable: true, enumerable: true, configurable: true }, 
//   name: {
//     value: '_island',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: false,
//     configurable: false
//   }
// }