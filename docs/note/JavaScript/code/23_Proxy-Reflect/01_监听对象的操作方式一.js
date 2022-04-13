const obj = {
  name: "_island",
  age: 18
};

// Object.defineProperty(obj, "name", {
//   get: function () {
//     console.log("调用了get方法");
//   },
//   set: function () {
//     console.log("调用了set方法");
//   }
// });
Object.keys(obj).forEach((key) => {
  let val = obj[key];
  Object.defineProperty(obj, key, {
    get: function () {
      console.log(key + "调用了get方法");
      return val;
    },
    set: function (newVal) {
      console.log(key + "调用了set方法");
      val = newVal;
    }
  });
});

obj.name = "QC2125";
obj.age = 30;
console.log(obj.name);
// Object.defineProperty的设计初衷并不是为了去监听拦截一个对象中的属性
// 它也实现不了更加丰富的操作，比如添加、删除属性
