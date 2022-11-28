## Promise

`Promise`是异步编程的解决方案，在`Promise`没有出现之前，是通过回调函数来解决异步的问题。

它是一个对象，里面保存着未来才会结束的事件，可以从这里面获取异步操作的信息。

## 状态

`Promise`共有三种状态，分别是

- `pending` 进行中
- `fulfilled` 完成
- `rejected` 失败

你可以在任何时候获取当前`promise`状态，`promise`状态的改变只有两种可能：`pending=>filfilled`、`pending=>rejected`。当状态发送改变之后，就不会再次改变了。

## 例子

我们从一个例子来认识`Promise`吧，它是一个构造函数，用来生成`Promise`实例。

```javascript
const p = new Promise();
```

`Promise`中需要传入一个函数，且这个函数需要接受两个参数分别是resolve函数和`reject`函数，`resolve`函数用于将`Promise`对象的状态从`pending`修改成`fulfilled`，并将成功的结果作为参数返回出去。`resolve`函数用于将`Promise`对象的状态从`pending`修改成`rejected`，并将错误信息作为参数返回出去。

> 在调用`resolve`、`reject`函数时有传入参数，这些参数会被传递给回调函数

我们把前面的例子，加入`setTimeout`模拟异步操作。当`msg`变量的值为`_island`时调用`resolve()`，否则调用`reject()`。

```javascript
const p = new Promise((resolve, reject) => {
  const msg='_island'
  setTimeout(() => {
    if(msg==='_island'){
      resolve("执行成功");
    }else{
      reject()
    }
  }, 2000);
});
```

当`Promise`对象生成时候，我们就可以通过`.then`方法，获取当前异步操作对应的结果。

```javascript
p.then((result)=>{
  console.log('成功的状态');
  console.log(result);
},(err)=>{
  console.log('失败的状态');
  console.log(err);
})

// 成功的状态
// 执行成功
```

在调用`resolve`、`reject`方法之后，`Promise`的任务就完成了，后续的操作应该放在then方法里面去操作。

（建议在`resolve`、`reject`方法的前面加上`return`关键字）

## then

`Promise.then()`方法是返回一个新的`Promise`实例（不是原来的`promise`实例），因此可以使用链式语法`.then`操作。

下面这个例子，使用了两次`.then`方法，在第一个回调函数中返回结果作为第二个回调函数的参数。

```javascript
p.then((result)=>{
  console.log('成功的状态');
  console.log(result);
  return result
},(err)=>{
  console.log('失败的状态');
  console.log(err);
}).then((result)=>{
  console.log(result);
})

// 成功的状态
// 执行成功
// 执行成功
```

## catch

`Promise.catch()`方法用于指定发生错误时的回调函数，它是`then`中的传入的第二个参数的别名。和`then`一样，返回一个`Promise`对象，后面可以继续`.then`，

通常，我们不在`then`之中定义`reject`回调函数，建议使用`catch`方法来捕捉错误。

```javascript
p.then((result)=>{
  console.log('成功的状态');
  console.log(result);
  return result
}).catch((err)=>{
  console.log(err);
})
 
// 执行失败
```

## finally

`Promise.finally()`方法，无论`Promise`对象最后的状态是什么样的，都会执行对应的函数。

```javascript
p.then((result)=>{
  console.log('成功的状态');
  console.log(result);
  return result
}).catch((err)=>{
  console.log(err);
}).finally(()=>{
  console.log('无论什么状态，我都会被执行');
})
 
// 执行失败
```

## all

`Promise.all()`方法用于将多个`Promise`实例包装成一个新的`Promise`实例。它接收一个`Promise`的数组或者是一个具有`Iterator`接口。

下面这个例子，`ps`数组中包含了`p1`、`p2`、`p3` 三个`promise`实例，使用`all`方法包装成一个新的`Promise`实例。

```javascript
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p1");
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p2");
  }, 3000);
});
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p3");
  }, 1000);
});

const ps = [p1, p2, p3];
```

这个包装出来的`Promise`对象（`ps`）的状态由传入的`p1`、`p2`、`p3`的状态而决定。当这三个`Promise`实例的状态为`fulfilled`时，它们的返回值会被存放到一个数组中，返回给`ps`的回调函数。如果某一个`Promise`实例的状态为`rejected`时，就会把`reject`的实例返回值传递给ps的回调函数

```javascript
Promise.all(ps).then((res) => console.log(res)); // [ 'p1', 'p2', 'p3' ]
```

## resolve

`Promise.resolve`方法用于将一个对象转为`Promise`对象。

```javascript
const obj = {
  name: "_island"
};

const pobj = Promise.resolve(obj);
console.log(pobj); // Promise { { name: '_island' } }
```

上面这种写法相当于下面这种写法

```javascript
const pobj = new Promise((resolve) => resolve(obj));
```

## 边界情况

- 如果参数是`Promise`对象，则不做修改，直接返回传入的这个参数
- 如果被包装的对象中包含then方法，`Promise.resolve()`方法将在包装完的这个对象之后执行对象中的`then`方法
- 如果传入的不是一个对象或者不带有参数，`Promise.resolve()`方法将返回一个新的`Promise`对象，状态为`resolved`

## reject

`Promise.reject()`方法用于返回一个新的`Promise`实例，该实例的状态为`rejected`。

```javascript
const p = Promise.reject("报错了");
// 等价下面这一行代码
const p = new Promise((null, reject) => reject("报错了"));
```

搭配`catch`方法使用，得到参数是上面reject传入的参数。

```javascript
const p = Promise.reject("报错了").catch(e=>console.log(e));
// 报错了
```

## race

`Promise.race()`方法和`Promise.all`方法类似，同样是将多个`Promise`实例包装出一个新的`Promise`实例。

```javascript
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p1");
  }, 2000);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p2");
  }, 3000);
});
const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p3");
  }, 1000);
});

const ps=Promise.race([p1,p2,p3])
ps.then(res=>console.log(res))
// p3
```

上面的代码，`ps`的状态也是根据`p1`、`p2`、`p3`的状态而决定的，当这三个`Promise`实例中其中有一个状态发生改变时，`ps`的状态就会将这个实例的返回值处理给`ps`的回调函数，所以结果是`p3`（如果返回值不是`Promise`实例，则调用先`Promise.resolve`再处理）

## allSettled

`Promise.allSettled()`方法返回一个一组已完成、已失败状态的`promise`实例，并带有一个对象数组，每个对象表示对应的`Promise`结果。（这是`ES2020`引入的新方法）

```javascript
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p1");
  }, 2000);
});
const p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject("p2");
  }, 3000);
});
const p3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    reject("p3");
  }, 1000);
});

const ps=Promise.allSettled([p1,p2,p3])
ps.then(res=>console.log(JSON.stringify(res)))
// [
//   {"status":"fulfilled","value":"p1"},
//   {"status":"rejected","reason":"p2"},
//   {"status":"rejected","reason":"p3"}
// ]
```

从上面代码的返回值可以看出返回到的是数组，里面存放着每个结果的对象，`status`代表`promise`实例的状态结果，当状态是`fulfilled`时，对应的属性是`value`，如果是`rejected`，则对应的是一个`reason`属性。

## any

`Promise.any()`方法将多个`Promise`实例包装成一个新的`Promise`实例，只要其中某一个`Promise`实例返回`fulfilled`状态这个`any`方法就结束了，不会等待其他`Promise`实例（这是`ES2021`引入的新方法）

```javascript
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p1");
  }, 100);
});
const p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 3000);
});
const p3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("p3");
  }, 1000);
});
Promise.any([p1,p2,p3]).then(res=>console.log(res))
// p1
```

## 