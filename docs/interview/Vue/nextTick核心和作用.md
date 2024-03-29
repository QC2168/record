## nextTick核心和作用

### 核心

利用了`JavaScript`的事件循环线程去异步操作

将用户传入的函数注册到异步任务队列中执行

### 作用

由于`Vue`在更新`DOM`的时候是异步任务，只要监听到数据变化时，`Vue`就会开启一个队列将这些数据变更推送到队列中，如果同一个`watcher`频繁触发，只会推入到队列中一次，避免重复操作`DOM`和计算，起到性能优化。

上面说了，`Vue`在更新`DOM`时是异步的，所以我们不能直接拿到更新之后的数据，而是需要等待`DOM`在异步任务中更新完毕后才能拿到最新的数据，这时就需要通过`nextTick`拿到最新的数据。

> 在Vue中，异步队列会使用原生的Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替