function foo() {}
const fooProxy = new Proxy(foo, {
  apply: function (target, thisAry, arrAry) {
    console.log("对foo函数进行了apply调用");
    target.apply(thisAry, arrAry);
  },
  construct: function (target, arrArray, newTarget) {
    return new target(...arrArray);
  }
});
new fooProxy();
fooProxy.apply({});
