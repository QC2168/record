---
title: JS进阶-实现promise
tags: [JavaScript]
---


### 手写一个Promise

在日常开发中，我们常常会使用到`Promise`，而熟悉了解`Promise`原理的同学并不多，在面试中也可能被问到与`Promise`相关的面试题。今天我将带着大家一起实现一个简易版的`Promise`。

#### 实现功能

在实现`Promise`之前，我们需要知道`Promise`有哪些功能，这里简单说一下

- `Promise`是一个类，它的构造方法需要传入一个函数，并接受两个参数，分别是`resolve`、`reject`方法，用于改变当前`Promise`对象的状态。
- `Promise`有三种状态，分别是`pending`、`fulfilled`、`rejected`。
- `then`方法用于接收`Promise` 的成功和失败情况的回调函数，返回一个新的`Promise`对象。
- `catch`方法用于接收`Promise`失败时的回调函数，与then中的第二个参数相同
- `finally`方法在`Promise`结束时执行指定的回调函数（无论状态是`fulfilled`或者是`rejected`）

#### 实现Promise

`Promise`是一个需要被`new`出来的对象，下面我们使用class关键字创建它。

当然使用`function`的写法也是可以，但使用class的写法会更加清晰易懂。

```javascript
class MyPromise{}
```

`Promise`在实例化时需要传入一个函数，在构造函数中接收它，并执行。

```javascript
class MyPromise {
  constructor(executor) {
    executor();
  }
}

const p = new MyPromise(() => {
  console.log("函数被执行了");
});

// 函数被执行了
```

 在构造函数中新增`resolve`、`reason`方法，用于实例化时接收的两个函数。并将这两个方法传入到`executor`方法中，它们用于改变当前`Promise`对象的状态。

```javascript
class MyPromise {
  constructor(executor) {
    const resolve = (value) => {
      console.log("resolve");
    };
    const reject = (reason) => {
      console.log("reject");
    };
    executor(resolve, reject);
  }
}

const p = new MyPromise((resolve) => {
  resolve(); 
});

// resolve
```

在类的外部定义`Promise`对象的三种状态的值，在`construct`中初始化当前`Promise`对象的状态为`PROMISE_STATUS_PENDING`

```javascript
const PROMISE_STATUS_PENDING = "pending";
const PROMISE_STATUS_FULFILLED = "fulfilled";
const PROMISE_STATUS_REJECTED = "rejected";

// class MyPromise
constructor(executor) {
    this.status = PROMISE_STATUS_PENDING;
  }
```

处理在外部调用`resolve`、`reject`方法后修改当前`Promise`的状态并将它们接收的值用两个变量存取下来。

```javascript
// constructor function
this.value = undefined;
this.reason = undefined;
const resolve = (value) => {
  if (this.status === PROMISE_STATUS_PENDING) {
    this.status = PROMISE_STATUS_FULFILLED;
    this.value = value;
  }
};
const reject = (reason) => {
  if (this.status === PROMISE_STATUS_PENDING) {
    this.status = PROMISE_STATUS_REJECTED;
    this.reason = reason;
  }
};
```

#### 实现then方法

在`MyPromise`类中新建一个then方法，用于接收`onFulfilled`、`onRejected`方法。在构造函数中创建`onFulfilledFns`、`onRejectedFns`两个数组，用于存放`then`传递过来的回调函数。（`Promise`实例化出来的对象是可以多次被`then`调用的，此时应该创建两个数组来存放对应的方法）。

```javascript
// then
then(onFulfilled, onRejected) {
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
```

在构造函数中的`resolve`、`reject`的函数内修改当前`Promise`对象的状态，并执行`then`方法中存储的方法。

```javascript
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
```

##### 测试then方法

```javascript
const p = new MyPromise((resolve) => {
  resolve(123); //
});

p.then((res) => {
  console.log("res---", res);
  return "_island";
}).then((res) => {
  console.log("res---", res);
});

// res: 123
// res--- _island
```

#### 实现catch方法

`catch`方法相当于`then`方法中的第二个回调函数，也就是这样子的一个写法`then(res=>res).catch(e=>e)`。在`MyPromise`中新增`catch`方法，接收一个回调函数。并将这个回调函数传到`then`方法中的第二个参数。

```javascript
catch(onRejected){
  return this.then(undefined,onRejected)
}
```

在`then`方法我们也需要做出判断，当`then`方法没有传递第二个参数时，默认设定一个处理函数。

```javascript
then(onFulfilled, onRejected) {
  onRejected =onRejected || (err=>{ throw err })
  // ...
}
```

##### 测试catch方法

```javascript
const p = new MyPromise((resolve,reject) => {
  reject('失败了'); //
});

p.then((res) => {
  console.log("res---", res);
  return "_island";
}).then(res=>{
  console.log('res---',res);
}).catch((err)=>{
  console.log('catch',err);
})

// catch 失败了
```

#### 实现finally方法

`finally`实现起来也是很简单的，当Promise对象的状态发生改变之后执行指定的回调函数。在`MyPromise`中新增`finally`方法，接收一个回调函数。并将这个函数传递到`then`方法。

```javascript
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
```

值得注意的是在`then`方法中我们也要判断`onFulfilled`参数是否有值，如果没有赋予它一个默认值。

```javascript
then(onFulfilled, onRejected) {
  onFulfilled = onFulfilled || (value => value);
  // ...
}
```

##### 测试finally方法

```javascript
p.then((res) => {
  console.log("res---", res);
}).finally(() => {
  console.log("finally");
});

// res--- result
// finally
```



#### 实现resolve reject 方法

`resolve`和`reject`方法都是用于将一个普通对象转为一个`Promise`对象，只是返回出来是状态不相同。它们都是静态方法。

其实这两个方法实现起来很简单，我们在`MyPromise`类中新增这两个静态方法，并调用对应的回调函数就可以了。

```javascript
static resolve(value) {
  return new MyPromise((resolve) => resolve(value));
}
static reject(reason) {
  return new MyPromise((undefined, reject) => reject(reason));
}
```

##### 测试resolve reject 方法

```javascript
MyPromise.resolve({ name: "_island" }).then((res) => console.log(res));
// { name: '_island' }

MyPromise.reject({ error: "msg" }).catch((err) => console.log(err));
// { error: 'msg' }
```

#### 实现all方法

`all`方法接收一组`Promise`对象当状态全为`fulfilled`时再将这些`Promise`的结果放到一个数组中并返回成一个新的成功`Promise`对象，如果其中有一个`Promise`对象状态为`rejected`时，则返回一个新的失败`Promise`对象

在`MyPromise`类中新增这`all`静态方法，接收一组`Promise`对象，通过遍历的方式将这些`promise`返回的结果集放入到一个数组内，最后通过`resolve`将这个数组返回即可。（需要注意的是在每次将数据放入数组之后我们需要判断当前数组中的数量和传入的数组中的数组是否一致，如果一致则调用`resolve`）

```javascript
static all(promises) {
  return new MyPromise((resolve, reject) => {
    const results = [];
    promises.forEach((promise) => {
      MyPromise.then(
        (res) => {
          results.push(res);
          if (results.length === promises.length) {
            resolve(results);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}
```

##### 测试all方法

```javascript
// const p1=new MyPromise((resolve)=>setTimeout(()=>{resolve('p1')},2000))
// const p2=new MyPromise((resolve)=>resolve('p2'))
// const p3=new MyPromise((resolve)=>resolve('p3'))
// MyPromise.all([p1,p2,p3]).then(res=>console.log(res)).catch(err=>console.log('err'))
// [ 'p2', 'p3', 'p1' ]
```

#### 实现allSettled方法

`allSettled`方法的和`all`方法类似，也是接收一组`Promise`对象，不同的是这一组`Promises`对象中无论是成功还是失败都会被存放到一个数组中，最后并返回一个新的成功`Promise`对象。

创建一个存储结果的数组，使用`foreach`遍历接收到的数组中每一个`Promise`对象，并通过返回的状态放入到一个对象中（在对象中，如果`Promise`状态为`fulfilled`，那健为`vlaue`里面存放对应的内容，如果是`rejected`，健则是`reason`，存放对应的内容），最终返回这个数组。

```javascript
static allSettled(promises) {
  return new MyPromise((resolve) => {
    const results = [];
    promises.forEach((promise) => {
      MyPromise.then(
        (res) => {
          results.push({
            status:PROMISE_STATUS_FULFILLED,
            value: res
          });
          if (results.length === promises.length) {
            resolve(results);
          }
        },
        (err) => {
          results.push({
            status: PROMISE_STATUS_REJECTED,
            reason: resolve(res)
          });
          if (results.length === promises.length) {
            resolve(results);
          }
        }
      );
    });
  });
```

##### 测试allSettled

```javascript
const p1 = new MyPromise((resolve) =>
  setTimeout(() => {
    resolve("p1");
  }, 2000)
);
const p2 = new MyPromise((resolve) => resolve("p2"));
const p3 = new MyPromise((resolve) => resolve("p3"));
MyPromise.allSettled([p1, p2, p3]).then((res) => console.log(res));
// [
//   { status: 'fulfilled', value: 'p2' },
//   { status: 'fulfilled', value: 'p3' },
//   { status: 'fulfilled', value: 'p1' } 
// ]
```

#### 实现race方法

`race`方法接收一组Promises对象，顾名思义，比的是速度，这一组`Promise`对象中当前其中一个对`Promise`对象被`fulfilled`或者`rejected`时，返回一个新的`Promise`状态为`fulfilled`或者`rejected`。

这里使用`foreach`遍历直接调用`MyPromise.then`方法，将对应的方法传入即可。

```javascript
static race(promises) {
  return new MyPromise((resolve, reject) => {
    promises.forEach((promise) => {
      MyPromise.then(resolve, reject);
    });
  });
}
```

##### 测试race方法

```javascript
const p1=new MyPromise((resolve)=>setTimeout(()=>{resolve('p1')},2000))
const p2=new MyPromise((resolve)=>setTimeout(()=>{resolve('p2')},3000))
const p3=new MyPromise((resolve)=>resolve('p3'))
MyPromise.race([p1,p2,p3]).then(res=>console.log(res))
```

#### 实现any方法

`any`方法接收一组`Promise`对象，如果其中有一个`Promise`状态为`fulfilled`时则返回一个成功的`Promise`对象，如果全部`Promise`对象都失败了则抛出`AggregateError`的错误。

使用`foreach`方法实现，将数组中每一个`Promise`对象遍历出来，`resolve`方法可以直接传入，`rejected`方法我们需要处理一下，判断方式和上面的`all`方法一样，当全部`Promise`对象的状态为`rejected`时，返回`AggregateError`类型的错误。

```javascript
static any(promises) {
  const errors = [];
  return new MyPromise((resolve, reject) => {
    promises.forEach(
      (promise) => {
        MyPromise.then(resolve, (err) => {
          errors.push(err);
          if (errors.length === promises.length) {
            reject(new AggregateError(errors));
          }
        });
      }  
    );
  });
}
```

##### 测试any方法

```javascript
const p1 = new MyPromise((resolve, reject) =>
  setTimeout(() => {
    reject("p1");
  }, 2000)
);
const p2 = new MyPromise((resolve, reject) => reject("p2"));
const p3 = new MyPromise((resolve, reject) => reject("p3"));
MyPromise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log("err:", err));
```

#### 总结

这个简易版的`Promise`实现起来代码量也不是很多，不到100行。但是理解起来还是有一点点难度的。`then`方法是这整个简易版`Promise`的实现起来复杂的方法，涉及到各种方法的判断，还有调用的顺序。其实只要捋清楚执行的顺序还是蛮好理解的。
