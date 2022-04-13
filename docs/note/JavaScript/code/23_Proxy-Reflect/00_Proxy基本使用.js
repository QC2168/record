// const obj = {
//   name: "_island"
// };

// const objProxy = new Proxy(obj, {
//   // get捕获器
//   get: function (target, key) {
//     console.log(`捕获到对象获取${key}属性的值操作`);
//     return target[key];
//   },
//   // set捕获器
//   set: function (target, key, val) {
//     console.log(`捕获到对象设置${key}属性的值操作,新值为${val}`);
//     target[key] = val;
//   },
//   // 监听getPrototypeOf
//   getPrototypeOf: function () {
//     console.log(`监听到对象getPrototypeOf操作`);
//   },
// });

// console.log(objProxy.name = "QC2125");
// // 捕获到对象设置name属性的值操作,新值为QC2125
// console.log(objProxy.name);
// // 捕获到对象获取name属性的值操作
// // QC2125

// console.log(objProxy.name);
// 捕获到对象获取name属性的值操作
// _island

// console.log(objProxy.getPrototypeOf);

// let proto = new Proxy(
//   {},
//   {
//     get(target, key) {
//       console.log("GET " + key);
//       return target[key];
//     }
//   }
// );

// let obj = Object.create(proto);
// console.log(obj.foo); // GET foo

// const target = new Date('2015-01-01');
// const handler = {
//   get(target, prop) {
//     if (prop === 'getDate') {
//       console.log(target);
//       return target.getDate.bind(target);
//     }
//     return Reflect.get(target, prop);
//   }
// };
// const proxy = new Proxy(target, handler);

// console.log(proxy.getDate());

// this
const obj = {
  name: "_island",
  foo: function () {
    return this === objProxy;
  }
};

const objProxy = new Proxy(obj, {
  set: function (target, key, val) {
    if (key==='age' && typeof val === "number") {
      target[key] = val;
    } else {
      throw new TypeError("该属性的值必须是Number类型");
    }
  }
});
console.log(obj.foo()); // false
console.log(objProxy.foo()); // true
