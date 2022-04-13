class Depend {
  constructor() {
    this.reactiveFns = [];
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn);
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

// 封装响应式
const depend = new Depend();

function watchFn(fn) {
  depend.addDepend(fn);
}
// 对象响应式
const obj = {
  name: "_island",
  age: 18
};

function foo() {
  console.log("foo");
}
function bar() {
  console.log("这个函数不需要响应式");
  console.log("bar");
}
watchFn(foo)
obj.name = "kobe";
depend.notify();
