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
## 深拷贝

::: info
TODO
:::