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
let activeReactiveFn = null;
function watchFn(fn) {
  activeReactiveFn = fn;
  // 找到depend对象
  fn();
  activeReactiveFn = null;
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
    map.set(key, depend);
  }
  return depend;
}
// 监听对象的属性变化
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    // 根据target.key获取depend
    const depend = getDepend(target, key);
    // 给depend对象中添加函数
    depend.addDepend(activeReactiveFn);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, val, receiver) {
    Reflect.set(target, key, val, receiver);
    const depend = getDepend(target, key);
    depend.notify();
  }
});

watchFn(() => {
  console.log(objProxy.name, "name发生改变时执行1");
});
watchFn(() => {
  console.log(objProxy.name, "name发生改变时执行2");
});
watchFn(() => {
  console.log(objProxy.age, "age发生改变了1");
});
// objProxy.name = "a";
// objProxy.name = "b";
// objProxy.name = "c";
objProxy.age = 19;
