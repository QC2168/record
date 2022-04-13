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
          this.onRejectedFns.forEach((fn) => fn(this.reason));
        });
      }
    };
    executor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    onFulfilled = onFulfilled || (value => value);
    onRejected =
      onRejected ||
      ((err) => {
        throw err;
      });
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
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  finally(onFinally) {
    this.then(
      () => {
        onFinally();
      },
      () => {
        onFinally();
      }
    );
  }
}

const p = new MyPromise((resolve,reject) => {
  resolve('result'); //
});

p.then((res) => {
  console.log("res---", res);
}).finally(() => {
  console.log("finally");
});
