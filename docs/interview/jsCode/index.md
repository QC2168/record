## 节流
```js
function debounce(fn, time = 500) {
    let timer = null;
    let context = this
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, time);
    };
}
```
## 防抖
```js
function throttle(fn, time = 500) {
    let lastTime = Date.now()
    let context = this
    return function (...args) {
        nowTime = Date.now()
        if (nowTime - lastTime > time) {
            fn.apply(context, args)
            // 更新时间
            lastTime = nowTime
        }
    }
}
```
## 对象深拷贝

```js

// 判断处理对象
function isObject(value) {
    const valueType = typeof value
    return value !== null && (valueType === 'object' || valueType == 'function')
}
function deepClone(val, map = new WeakMap()) {
    // 处理Set类型
    if (val instanceof Set) {
        return new Set([...val])
    }
    // 处理Map类型
    if (val instanceof Map) {
        return new Map([...val])
    }
    // 处理symbol类型
    if (typeof val === 'symbol') {
        return Symbol(val.description)
    }
    // 处理函数
    if (typeof val === 'function') {
        return val
    }
    // 处理对象
    if (!isObject(val)) {
        return val
    }
    // 判断是否有环，当前对象是否在set列表中
    if (map.has(val)) {
        return map.get(val)
    }
    // 处理数组
    const result = Array.isArray(val) ? [] : {}
    // 保存处理的值，下次判断是否有环
    map.set(val, result)
    for (const key in val) {
        result[key] = deepClone(val[key], map)
    }
    // 处理对象中的symbol
    const sKeys = Object.getOwnPropertySymbols(val)
    for (const key of sKeys) {
        result[key] = deepClone(val[key], map)
    }
    return result
}

```