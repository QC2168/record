---
title: call
tags: [JavaScript手写题]
---

```js
Function.prototype.myCall =
    function myCall(context, ...args) {
        var tempFn = null
        if (context === null || context === undefined) {
            context = window
        }
        // 如果对象有Fn值，先缓存起来
        if (context.hasOwnProperty('fn')) {
            tempFn = context.fn
        }
        context.fn = this
        result = context.fn(...args)
        if (tempFn) {
            // 归还fn
            context.fn = tempFn
        } else {
            // 删除fn
            delete context.fn
        }
        return result
    }

```

### 测试

```js
var value = 'global'
let foo = {
    value: 'foo value',
    fn: 'test fn'
}
function getVal() {
    console.log(this.value)
}
getVal.myCall(foo) // foo value
getVal.call(foo) // foo value
getVal.myCall() // global
getVal.call() // global
getVal() // global
console.log(foo)
```
