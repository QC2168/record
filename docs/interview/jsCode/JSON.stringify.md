---
title: 实现JSON.stringify
tags: [JavaScript手写题]
---

## 题目

使用 JSON.stringify 将对象转为 JSON 字符串时，一些非法的数据类型会失真，主要表现如下:

如果对象含有 toJSON 方法会调用 toJSON
日期数据类型的值会调用 toISOString
非数组/对象/函数/日期的复杂数据类型会变成一个空对象
循环引用会抛出错误

- 在数组中
1. 存在 Undefined/Symbol/Function 数据类型时会变为 null
2. 存在 Infinity/NaN 也会变成 null


- 在对象中
1. 属性值为 Undefined/Symbol/Function 数据类型时，属性和值都不会转为字符串
2. 属性值为 Infinity/NaN ，属性值会变为 null

> 另外 JSON.stringify 还可以传入第二第三个可选参数，有兴趣的朋友可以深入了解

> 题目取自 [实现 JSON.stringify（附加）](https://juejin.cn/post/6844903856489365518#heading-29)

```js
// copy from https://github.com/yeyan1996/practical-javascript/blob/master/json.js

// 简单实现 JSON.stringify 方法

const isString = value => typeof value === 'string';
const isSymbol = value => typeof value === 'symbol'
const isUndefined = value => typeof value === 'undefined'
const isDate = obj => Object.prototype.toString.call(obj) === '[object Date]'
const isFunction = obj => Object.prototype.toString.call(obj) === '[object Function]';
const isComplexDataType = value => (typeof value === 'object' || typeof value === 'function') && value !== null;
const isValidBasicDataType = value => value !== undefined && !isSymbol(value); // 合法的基础类型
const isValidObj = obj => Array.isArray(obj) || Object.prototype.toString.call(obj) === '[object Object]';// 合法的复杂类型(对象)
const isInfinity = value => value === Infinity || value === -Infinity


// 在数组中存在 Symbol/Undefined/Function 类型会变成 null
// Infinity/NaN 也会变成 null
const processSpecialValueInArray = value =>
    isSymbol(value) || isFunction(value) || isUndefined(value) || isInfinity(value) || isNaN(value) ? null : value;

// 根据 JSON 规范处理属性值
const processValue = value => {
    if (isInfinity(value) || isNaN(value)) {
        return null
    }
    if (isString(value)) {
        return `"${value}"`
    }
    return value
};

let s = Symbol('s')
let obj = {
    str: "123",
    arr: [1, {e: 1}, s, () => {
    }, undefined,Infinity,NaN],
    obj: {a: 1},
    Infinity: -Infinity,
    nan: NaN,
    undef: undefined,
    symbol: s,
    date: new Date(),
    reg: /123/g,
    func: () => {
    },
    dom: document.querySelector('body'),
};

// obj.loop = obj

const jsonStringify = (function () {
    // 闭包 + WeakMap 防止循环引用
    let wp = new WeakMap()
    // 递归调用 jsonStringify 的都是闭包中的这个函数，而非 const 声明的 jsonStringify 函数
    return function jsonStringify(obj) {
        if (wp.get(obj)) throw new TypeError('Converting circular structure to JSON');
        let res = "";

        if (isComplexDataType(obj)) { // 复杂类型的情况
            if (obj.toJSON) return obj.toJSON; // 含有 toJSON 方法则直接调用
            if (!isValidObj(obj)) {  // 非法的复杂类型直接返回
                return
            }
            wp.set(obj, obj);

            if (Array.isArray(obj)) {  // 数组的情况
                res += "[";
                let temp = []; //声明一个临时数组用来控制属性之间的逗号
                obj.forEach((value) => {
                    temp.push(
                        isComplexDataType(value) && !isFunction(value) ?
                            jsonStringify(value) :
                            `${processSpecialValueInArray(value, true)}`
                    )
                });
                res += `${temp.join(',')}]`
            } else {  // 对象的情况
                res += "{";
                let temp = [];
                Object.keys(obj).forEach((key) => {
                    // 值是对象的情况
                    if (isComplexDataType(obj[key])) {
                        // 值是合法对象的情况
                        if (isValidObj(obj[key])) {
                            temp.push(`"${key}":${jsonStringify(obj[key])}`)
                        } else if (isDate(obj[key])) { // Date 类型调用 toISOString
                            temp.push(`"${key}":"${obj[key].toISOString()}"`)
                        } else if (!isFunction(obj[key])) { // 其余非函数类型返回空对象
                            temp.push(`"${key}":{}`)
                        }
                    } else if (isValidBasicDataType(obj[key])) {   // 值是基本类型
                        temp.push(`"${key}":${processValue(obj[key])}`)
                    }
                });
                res += `${temp.join(',')}}`
            }
        } else if (isSymbol(obj)) { // Symbol 返回 undefined
            return
        } else {
            return obj  // 非 Symbol 的基本类型直接返回
        }
        return res
    }
})();


console.log(jsonStringify(obj));
console.log(JSON.stringify(obj));
```