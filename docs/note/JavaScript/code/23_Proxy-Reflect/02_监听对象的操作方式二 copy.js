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
  }
});

console.log(objProxy.name);
// 监听到了name被获取值
// _island
console.log(objProxy.age);
// 监听到了age被获取值
// 18
objProxy.name = "QC2125";
// 监听到了name被设置值
console.log(objProxy.name);
// 监听到了name被获取值
// QC2125