// 保存当前需要收集的响应式函数
let activeReactiveFn = null;
class Depend {
  constructor() {
    this.reactiveFns = new Set();
  }
  addDepend(reactiveFn) {
    this.reactiveFns.add(reactiveFn);
  }
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn);
    }
  }
  notify() {
    this.reactiveFns.forEach((fn) => fn());
  }
}

// 封装响应式
// 封装响应式函数

function watchFn(fn) {
  activeReactiveFn = fn;
  // 找到depend对象
  fn();
  activeReactiveFn = null;
}

function reactive(obj) {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
      get: function () {
        const depend = getDepend(obj, key);
        depend.depend();
        return value;
      },
      set: function (newVal) {
        value = newVal;
        const depend = getDepend(obj, key);
        depend.notify();
      }
    });
  });
  return obj
}

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
// 对象响应式
const obj = {
  name: "_island",
  age: 18
};
// 监听对象的属性变化
const objProxy = reactive(obj);

// objProxy.name='kobe'

const info = {
  address: "广州市",
  height: 1.88
};
const infoProxy = reactive(info);

watchFn(() => {
  console.log(infoProxy.address);
});

infoProxy.address = "北京市";
