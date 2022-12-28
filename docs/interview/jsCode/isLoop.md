---
title: isLoop函数-判断是否有环
tags: [JavaScript手写题]
---

## isLoop函数

`isLoop`函数用于判断一个对象里是否存在环，返回一个布尔值

### 方法一
```js
function isLoop(target) {
    let return_flag = false
    // 存放检测到的对象
    let bucket = new Set()
    const detect = (detectTarget) => {
        if (typeof detectTarget !== "object") return
        // 如果当前bucket有这个对象,说明有环
        if (bucket.has(detectTarget)) return return_flag = true
        // 把检测的对象添加到bucket
        bucket.add(detectTarget)
        let keys = (Reflect.ownKeys(detectTarget))
        for (let key of keys) {
            // 递归检测对象
            detect(detectTarget[key])
        }
    }
    detect(target)
    return return_flag
}
```

### 方法二

```js
function isLoop(obj) {
    try {
        JSON.stringify(obj)
    } catch (e) {
        return e.message.includes('Converting circular structure to JSON');
    }
    return false;
}
```