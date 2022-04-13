// 封装响应式
let reactiveFns = [];
function watchFn(fn) {
  reactiveFns.push(fn);
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

watchFn(foo);

obj.name = "kobe";

reactiveFns.forEach((fn) => {
  fn();
});
