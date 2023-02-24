### 实现Promise.any

`Promise.any()` 接收一个由 `Promise` 所组成的可迭代对象，该方法会返回一个新的 `promise`，一旦可迭代对象内的任意一个 `promise` 变成了兑现状态，那么由该方法所返回的 `promise` 就会变成兑现状态，并且它的兑现值就是可迭代对象内的首先兑现的 `promise` 的兑现值。如果可迭代对象内的 `promise` 最终都没有兑现（即所有 `promise` 都被拒绝了），那么该方法所返回的 `promise` 就会变成拒绝状态，并且它的拒因会是一个 `AggregateError` 实例，这是 `Error` 的子类，用于把单一的错误集合在一起。

::: danger 警告

`Promise.any()` 方法依然是实验性的，尚未被所有的浏览器完全支持。它当前处于 `TC39` 第四阶段草案`（Stage 4）`

:::

```javascript
function MyPromiseAny(args) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(args)) {
            return reject(new TypeError('arguments must be an array'));
        }
        let argsLen = args.length
        let rejectNum = 0
        for (let p of args) {
            Promise.resolve(p).then(res => {
                resolve(reject)
            }).catch((err) => {
                rejectNum++
                if (rejectNum === argsLen) {
                    reject('AggregateError: All promises were rejected')
                }
            })
        }
    })
}
```

### 实现Promise.race

`Promise.race(iterable)` 方法返回一个 `promise`，一旦迭代器中的某个 `promise` 解决或拒绝，返回的 `promise` 就会解决或拒绝。

```javascript
function MyPromiseRace(args) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(args)) {
            return reject(new TypeError('arguments must be an array'));
        }
        for (let p of args) {
            Promise.resolve(p).then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
        }
    })
}
```

### 实现Promise.all

`Promise.all()` 方法接收一个 `promise` 的 `iterable` 类型（注：`Array，Map，Set` 都属于 `ES6` 的 `iterable` 类型）的输入，并且只返回一个`Promise`实例，那个输入的所有 `promise` 的 `resolve` 回调的结果是一个数组。这个`Promise`的 `resolve` 回调执行是在所有输入的 `promise` 的 `resolve` 回调都结束，或者输入的 `iterable` 里没有 `promise` 了的时候。它的 `reject` 回调执行时，只要任何一个输入的 `promise` 的 `reject` 回调执行或者输入不合法的 `promise` 就会立即抛出错误，并且 `reject` 的是第一个抛出的错误信息。

```javascript
function MyPromiseAll(args) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('arguments must be an array'));
        }
        let result = []
        let argsLen = args.length
        for (const p of args) {
            Promise.resolve(p).then(res => {
                result.push(res)
                if (argsLen === result.length) {
                    return resolve(result)
                }
            }).catch((err) => {
                return reject(err)
            })
        }
    })
}
```