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

// 对象响应式
const obj = {
  name: "_island",
  age: 18
};

// 监听对象的属性变化
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key);
  },
  set: function (target, key, val, receiver) {
    Reflect.set(target, key, val, receiver);
    depend.notify();
  }
});

function watchFn(fn) {
  depend.addDepend(fn);
}

function foo() {
  console.log("foo");
  console.log(`新值为${objProxy.name}`);
}
function bar() {
  console.log("这个函数不需要响应式");
  console.log("bar");
}
watchFn(foo);
objProxy.name = "a";
objProxy.name = "b";
objProxy.name = "c";
objProxy.age = 18;
// depend.notify();
