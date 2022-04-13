const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";
class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledFns = [];
    this.onRejectedFns = [];
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_FULFILLED;
          this.value = value;
          // 执行then传进来的第一个回调函数
          this.onFulfilledFns.forEach((fn) => fn(this.value));
        });
      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return;
          this.status = PROMISE_STATUS_REJECTED;
          this.reason = reason;
          // 执行then传进来的第二个回调函数
          this.onRejectedFns.forEach((fn) => fn(this.reason));
        });
      }
    };
    executor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    // 如果在then调用的时候，状态已经确定下来
    if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
      onFulfilled(this.value);
    }
    if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
      onRejected(this.reason);
    }
    if ((this.status = PROMISE_STATUS_PENDING)) {
      if (typeof onFulfilled === "function") {
        this.onFulfilledFns.push(onFulfilled);
      }
      if (typeof onRejected === "function") {
        this.onRejectedFns.push(onRejected);
      }
    }
  }
}
const promise = new MyPromise((resolve, reject) => {
  console.log("传入的函数被直接掉用了");
  resolve(111);
  // reject(222)
});
promise.then(
  (e) => {
    console.log("then:", e);
  },
  (e) => {
    console.log("err:", e);
  }
);

promise.then(() => {
  console.log("then2");
});

setTimeout(() => {
  promise.then((e) => {
    console.log("res3:", e);
  });
}, 1000);
