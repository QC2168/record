---
title: apply
tags: [JavaScript手写题]
---

```js
Function.prototype.myApply =
    function myApply(context, args) {
        var tempFn = null
        if (context === null || context === undefined) {
            context = window
        }
        // 如果对象有Fn值，先缓存起来
        if (context.hasOwnProperty('fn')) {
            tempFn = context.fn
        }
        context.fn = this
        result = args ? context.fn(...args) : context.fn()
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
getVal.myApply(foo) // foo value
getVal.apply(foo) // foo value
getVal.myApply() // global
getVal.apply() // global
getVal() // global
console.log(foo)
```