const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

function execFunctionWithCatchError(execFn,value,resolve,reject){
try{
const result=execFn(value)
resolve(result)
}catch(err){
reject(err)
}
}

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
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      // 如果在then调用的时候，状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        try {
          const value = onFulfilled(this.value);
          resolve(value);
        } catch (error) {
          reject(error);
        }
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        try {
          const reason = onRejected(this.reason);
          resolve(reason);
        } catch (error) {
          reject(error);
        }
      }
      if ((this.status = PROMISE_STATUS_PENDING)) {
        if (typeof onFulfilled === "function") {
          this.onFulfilledFns.push(() => {
            try {
              const value = onFulfilled(this.value);
              resolve(value);
            } catch (error) {
              reject(error);
            }
          });
        }
        if (typeof onRejected === "function") {
          this.onRejectedFns.push(() => {
            try {
              const reason = onRejected(this.reason);
              resolve(reason);
            } catch (error) {
              reject(error);
            }
          });
        }
      }
    });
  }
}
const promise = new MyPromise((resolve, reject) => {
  resolve(111);
  // reject(222)
});

promise
  .then(
    (e) => {
      console.log("then:", e);
      throw 'aaa'
      return '123'
    },
    (e) => {
      console.log("err:", e);
    }
  )
  .then((e) => {
    console.log("thenthen:", e);
  });
