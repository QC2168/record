---
title: sleep函数
tags: [JavaScript手写题]
---

## sleep函数

### 异步的sleep
```javascript
function sleep(wait) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, wait);
    })
}
```
### 测试
```javascript
sleep(2000).then(res=>{
    console.log('foo');
})
```

### 同步阻塞的sleep
```javascript
function sleep(wait) {
    let now = Date.now()
    let overTime = now + wait
    while (true) {
        if (overTime < now) break
        now = Date.now()
    }
}
```
### 测试
```javascript
sleep(2000)
console.log('foo');
```