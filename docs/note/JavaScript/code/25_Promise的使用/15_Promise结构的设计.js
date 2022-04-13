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
        console.log("resolve被调用");
        this.value = value;

      }
    };
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED;
        console.log("reject被调用");
        this.reason = reason;

      }
    };
    executor(resolve, reject);
  }


}
const promise = new MyPromise((resolve, reject) => {
  console.log("传入的函数被直接掉用了");
  // resolve()
  // reject()
});
