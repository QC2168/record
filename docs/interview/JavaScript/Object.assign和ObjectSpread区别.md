---
title: Object.assign和ObjectSpread区别
tags: [JavaScript]
---

## Object.assign和ObjectSpread区别


```js
const foo = {
    get foo() {
        console.log('获取foo中的foo属性')
    },
    set foo(value) {
        console.log('设置foo中的foo属性')
    }
}
const bar = {
    get bar() {
        console.log('获取bar中的bar属性')
    },
    set bar(value) {
        console.log('设置bar中的bar属性')
    },
    foo:'bar中的foo'
}
console.log('扩展运算符')
console.log({ ...foo, ...bar }) // {foo: 'bar中的foo', bar: undefined}

// 通过自身的对象，获取foo对象的值存放进这一块空间里，再获取bar对象的值存进去
// 触发了两个对象的getter函数，如果有相同属性，后者覆盖前者 所以foo的值'bar中的foo'
// 如果继承属性，对象扩展符不会复制继承属性。



console.log('Object.assign')
// Object.assign是将bar对象赋值给foo，调用了bar的getter函数，之后再调用fo的setter函数
const assignRes = Object.assign(foo, bar)
console.log(assignRes) // {bar: undefined, foo:undefined}
```


![20230117160934](https://raw.githubusercontent.com/QC2168/note-img/main/20230117160934.png)


### 性能

如果Object.assign输入的是一个空对象参数（第一个参数），会比对象扩展符更快。