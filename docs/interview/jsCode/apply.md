---
title: apply
tags: [JavaScript手写题]
---

## 实现apply函数
### 代码
```js
Function.prototype.myApply =
    function myApply(context, args) {
        // 用于缓存目标作用域中的fn，避免被替换
        let fn = Symbol()
        // 传入的作用域如果是null/undefined时，将context指定window
        let context = context || window
        // 这里使用的是symbol 不会导致fn属性被覆盖
        // 缓存调用myApply的this
        context[fn] = this
        // 判断参数并返回数据
        return args ? context[fn](...args) : context[fn]()
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