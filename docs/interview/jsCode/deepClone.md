---
title: 对象深拷贝
tags: [JavaScript手写题]
---

## 对象深拷贝

在`JavaScript`中，数据类型主要分为基本数据类型和引用数据类型，对于基本数据类型来说，没有深浅拷贝的说法，但引用数据类型有深浅拷贝之分。

### 浅拷贝

指的是只将数据进行复制引用（内存地址引用），并不是真正的把值重新复制一份出来。

例如下面的代码，`bar`只是浅拷贝`foo`对象中的值。

当`foo`对象中的内容改变，`bar`的值也会被改变。

```js
let foo=['foo',{
    name:'_island'
}]

let bar = foo

console.log(bar);
// ['foo', {name: '_island'}]

foo[1].name='zhangshan'

console.log(bar);
// ['foo', {name: 'zhangshan'}]
```
要解决这个也很简单，可以使用一个比较简单的方法，使用`JSON.parse(JSON.stringify(foo))`实现深拷贝

>这个方法会有问题，稍后会说

```js
// 接着上面的代码  这里就不重复啦
let faz = JSON.parse(JSON.stringify(foo));
console.log(faz);
// ['foo', {name: 'zhangshan'}]

foo[1].name='lisi'

// ['foo', {name: 'zhangshan'}]

// faz的值并没有发生改变
```

深拷贝实现了，但是用这种方法的问题是什么？

先看看这两个方法是干什么的？

- `JSON.stringify()` 是将一个 `JavaScript`值 转成一个 `JSON` 字符串。
- `JSON.parse()` 是将一个 `JSON` 字符串转成一个 `JavaScript` 值或对象。
> JavaScript值可以是引用数据类型也可以是基本数据类型

在执行`JSON.stringify`方法时，如果传入的对象中的值存在`function`、`undefined`、`symbol`，会被忽略处理

```js
JSON.parse(JSON.stringify({foo:undefined,bar:'bar'}))
// {bar: 'bar'}
JSON.parse(JSON.stringify({foo:()=>{},bar:'bar'}))
// {bar: 'bar'}
JSON.parse(JSON.stringify({foo:function(){},bar:'bar'}))
// {bar: 'bar'}
JSON.parse(JSON.stringify({foo:Symbol(),bar:'bar'}))
// {bar: 'bar'}
```

### 使用递归的方式实现深拷贝

> 深拷贝需要处理的数据类型较多，具体见下面代码注释

```js
// 判断处理对象
function isObject(value) {
    const valueType = typeof value
    return value !== null && (valueType === 'object' || valueType == 'function')
}
function deepClone(val, map = new WeakMap()) {
    // 处理Set类型
    // 防止返回的成一个空对象
    if (val instanceof Set) {
        return new Set([...val])
    }
    // 处理Map类型
    // 防止返回的成一个空对象
    if (val instanceof Map) {
        return new Map([...val])
    }
    // 处理symbol类型
    if (typeof val === 'symbol') {
        return Symbol(val.description)
    }
    // 处理函数
    // 防止返回的成一个空对象
    if (typeof val === 'function') {
        return val
    }
    // 处理对象
    if (!isObject(val)) {
        return val
    }
    // 循环引用问题
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
    // 处理对象中的symbol  防止没有被拷贝
    const sKeys = Object.getOwnPropertySymbols(val)
    for (const key of sKeys) {
        result[key] = deepClone(val[key], map)
    }
    return result
}

```