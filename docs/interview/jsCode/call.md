---
title: 实现call
tags: [JavaScript手写题]
---

## 实现call

其实，`call`方法的实现和`apply`方法是一样的，只不过它们的传参方式有点不同

- `apply`方法是将原函数的参数都传递到第二个参数中
- `call`方法是将原函数的参数，按照顺序开始从`call`方法的第二个参数开始传递

### 代码

```js
Function.prototype.myCall =
    function myCall(context, ...args) {
        let tempFn = null
        context = context || window
        // 如果对象有Fn值，先缓存起来
        // 这里也可以使用Symbol来实现 （见apply方法实现）👀
        if (context.hasOwnProperty('fn')) {
            tempFn = context.fn
        }
        // 缓存调用myApply的this
        context.fn = this
        // 判断参数
        result = args ? context.fn(...args) : context.fn()
        // 判断是否此前是否缓存了fn
        if (tempFn) {
            // 归还fn
            context.fn = tempFn
        } else {
            // 删除fn
            delete context.fn
        }
        // 返回数据
        return result
    }

```
> 嗯.. 这里是代码有点长

### 测试

```js
let value = 'global'
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
