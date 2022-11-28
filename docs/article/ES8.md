## ES8语法

`ES8`又称`ES2017`，在`ES6`之后的语法我们都统称为`ES6+`，下面我们来看看`ES8`中新增的新语法。它们都是一些非常实用的功能：

- `Object.values`
- `Object.entries`
- 字符串填充
- 函数参数的逗号
- `Object.getOwnPropertyDescriptors`
- `async function`

## Object values

该方法可以获取对象中所有的`value`值。

```javascript
const obj = {
  name: "_island",
  age: 18
};

console.log(Object.values(obj)); // [ '_island', 18 ]
```

## Object entries

该方法用于将一个对象的可枚举健值转换为一个数组。方便后续遍历数据。

```javascript
const obj = {
  name: "_island",
  age: 18
};

// 将一个对象转为一个数组，方便后续遍历
console.log(Object.entries(obj)); // [ [ 'name', '_island' ], [ 'age', 18 ] ]
```

## 字符串填充

## padStart

`padStart`方法用于从起始开始补全字符串。返回补全之后的字符串，不会修改原字符串。

```javascript
const str4 = "100";
console.log(str4.padStart(6, "000")); // 000100
```

## padEnd

`endsWith`方法用于从尾部补全字符串。返回补全之后的字符串，不会修改原字符串。

```javascript
const str5 = "200";
console.log(str5.padEnd(6, "000")); // 200000
```

> `padStart` / `padEnd` 如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。

## 函数参数的逗号

ES8之后，可以在函数的参数后面尾随逗号。

```javascript
function foo(m,n,){

}

foo(20,30,)
```

## Object getOwnPropertyDescriptors

该方法用来获取一个对象的所有自身属性的描述符。

返回是描述符的有以下子集的组成：

| 属性           | 说明                                       |
| -------------- | ------------------------------------------ |
| `value`        | 属性值                                     |
| `writable`     | 该属性是否可写                             |
| `configurable` | 该属性是否可配置（是否可读写、删除该属性） |
| `enumerable`   | 该属性是否可枚举                           |
| `set`          | 设置属性时调用的函数                       |
| `get`          | 获取属性时调用的函数                       |

```javascript
const obj = {
  name: "_island"
};
console.log(Object.getOwnPropertyDescriptors(obj));

// {
//   name: {
//     value: '_island',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }
```

## async function

`async`函数是一个异步函数，且可以搭配`await`关键字使用。它可以使`Promise`的异步执行的像同步代码一样执行。

`async`函数一定会返回一个`promise`对象，如果一个`async`函数的返回值看起来不是`promise`，那么它将会被隐式地包装在一个`promise`中。

```javascript
async function foo() {
  const res = await new Promise((res) => {
    setTimeout(() => res("ok"), 2000);
  });
  console.log(res);
}

foo(); // ok
```

