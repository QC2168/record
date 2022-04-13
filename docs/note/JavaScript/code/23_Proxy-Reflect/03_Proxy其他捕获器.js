const obj = {
  name: "_island",
  age: 18
};

// const objProxy = new Proxy(obj,{});
// // 如果捕获器没有传任何参数，也是可以对原对象进行操作的
// console.log(objProxy.name);
// console.log(objProxy.age);
// objProxy.name = "QC2125";
// console.log(obj.name);

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get: function (target, key) {
    console.log(`监听到了${key}被获取值`);
    return target[key];
  },
  // 设置值时的捕获器
  set: function (target, key, newValue) {
    console.log(`监听到了${key}被设置值`);
    target[key] = newValue;
  },
  // 监听in的捕获器
  has: function (target, key) {
    console.log(`监听到对象的${target[key]}属性in操作`);
    return key in target;
  },
  // 监听delete捕获器
  deleteProperty: function (target, key) {
    console.log(`监听到对象的${target[key]}属性的delete操作`);
    delete target[key];
  },
  // 监听getPrototypeOf
  getPrototypeOf: function () {
    console.log(`监听到对象getPrototypeOf操作`);
  },
  // 监听setPrototypeOf
  setPrototypeOf: function () {},
  // 监听isExtensible，对象扩展
  isExtensible: function () {},
  // 监听preventExtensible，对象扩展
  preventExtensible: function () {},
  // 监听getOwnPropertyDescriptor，对象扩展
  getOwnPropertyDescriptor: function () {},
  // 监听defineProperty，对象扩展
  defineProperty: function () {},
  // 监听ownKeys，对应Object.getOwnPropertyName和Object.getOwnPropertySymbols方法
  ownKeys: function () {}
});

// console.log(objProxy.name);
// console.log(objProxy.age);
// objProxy.name = "QC2125";
// console.log(obj.name);
// console.log('name' in objProxy);
delete objProxy.name;
