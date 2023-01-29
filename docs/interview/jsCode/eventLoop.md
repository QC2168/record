### JavaScript事件循环代码题

```js
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})

// 答案 1 7 6 8 2 4 3 5 9 11 10 12
```

### 执行过程解析
- 执行同步代码 输出`1`
- 执行到了setTimeout，属于宏任务，先存放到宏任务队列里
- 遇到process.nextTick属于微任务，存放到微任务队列里再接下去执行
- 遇到了promise，执行里面的回调函数，输出`7`
- then后面的回调函数归属于微任务，存放到微任务队列里
- 遇到setTimeout，放到宏任务中
- 同步代码执行完毕，执行微任务队列中的任务，执行最开始存放到微任务队列的中的`process.nextTick`回调函数，输出`6`
- 再继续执行微任务队列中的队列，输出`7`
- 此时微任务队列已经被清空了，接下来按照任务顺序清空宏任务队列
- 执行最开始的setTimeout中的回调函数，输出`2`，遇到nextTick函数存放到微任务队列中，继续执行代码，输出`4`,将then中的回调函数存放到微任务中
- 此时，第一个宏任务已经执行完毕，查看微任务队列中是否有任务要执行，执行刚刚存放到微任务队列的回调函数，输出`3`和`5`
- 继续执行第二个宏任务，输出`9`，又遇到了nextTick，存放到微任务队列中，执行promise回调函数输出`11`，把then回调函数存放到微任务队列中，宏任务结束
- 执行微任务队列，输出`10`和`12`
- 全部代码执行完毕

推荐文章 [tasks-microtasks-queues-and-schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)