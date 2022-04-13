const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";
class MyPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
    this.value = undefined;
    this.reason = undefined;
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_FULFILLED;
        queueMicrotask(() => {
          this.value = value;
          // 执行then传进来的第一个回调函数
          this.onFulfilled();
        });
      }
    };
    const reject = (reason) => {
      this.status = PROMISE_STATUS_REJECTED;
      if (this.status === PROMISE_STATUS_PENDING) {
        queueMicrotask(() => {
          this.reason = reason;
          // 执行then传进来的第二个回调函数
          this.onRejected();
        });
      }
    };
    executor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled;
    this.onRejected = onRejected;
  }
}
const promise = new MyPromise((resolve, reject) => {
  console.log("传入的函数被直接掉用了");
  resolve();
  // reject()
});
promise.then(() => {
  console.log("then");
});
