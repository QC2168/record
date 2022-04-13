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
// 封装响应式函数
function watchFn(fn) {
// 找到depend对象

}
// 对象响应式
const obj = {
  name: "_island",
  age: 18
};




const targetMap = new WeakMap();
// 封装一个获取depend函数
function getDepend(target, key) {
  // 根据target对象获取map的过程
  let map = targetMap.get(target);
  if (!map) {
    map = new Map();
    targetMap.set(target, map);
  }

  // 根据key获取depend对象
  let depend = map.get(key);
  if (!depend) {
    depend = new Depend();
    map.set(key,depend);
  }
  return depend;
}
// 监听对象的属性变化
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, val, receiver) {
    Reflect.set(target, key, val, receiver);
    const depend = getDepend(target, key);
    depend.notify();
  }
});

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

