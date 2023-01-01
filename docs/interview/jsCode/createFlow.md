---
title: createFlow
tags: [JavaScript代码题]
---

## createFlow

```js
const {log} = console
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const subFlow = createFlow([() => delay(1000).then(() => log('c'))])
createFlow([
    () => log('a'),
    () => log('b'),
    subFlow,
    [() => delay(1000).then(() => log('d')), () => log('e')],
]).run(() => {
    console.log('done')
})
// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印 实现createFlow函数
```