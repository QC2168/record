var obj1 = {
  name: "obj1",
  foo: function () {
    console.log(this);
  }
};

var obj2 = {
  name: "obj2"
};
// 注意分号

// obj2.bar=obj1.foo
// obj2.bar() // 隐式绑定 obj2

// 独立函数调用,特殊情况
(obj2.bar = obj1.foo)(); // window
