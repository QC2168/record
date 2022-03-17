### ES7语法

`ES7`又称`ES2016`，在`ES6`之后的语法我们都统称为`ES6+`，下面我们来看看`ES7`中新增的新语法。

#### array includes

`includes`方法用于判断一个元素是否存在于一个数组中

在之前，我们判断一个值是否在数组中，通常会使用`Array.indexOf`来进行判断，而在`ES7`之后，我们可以使用`Array.includes`进行判断。

`ES5`中使用`Array.indexOf`方法：

```javascript
const names = ["abc", "cba", "nba", "mba", NaN];

if (names.indexOf("cba") !== -1) {
  console.log("包含abc元素");
}
```

`ES7`中使用`Array.includes`方法：

```javascript
const names = ["abc", "cba", "nba", "mba", NaN];

if (names.includes("cba", 2)) {
  console.log("包含abc元素");
}
```

关于`NaN`的判断

在includes方法里可以内数组中判断出是否存在`NaN`值，而`indexOf`无法正确判断出来。

```javascript
const names = ["abc", "cba", "nba", "mba", NaN];

if (names.indexOf(NaN) !== -1) {
  console.log("包含NaN");
}

if (names.includes(NaN)) {
  console.log("包含NaN");
}
```

#### 求幂运算符

求幂运算符（`**`）返回将第一个操作数加到第二个操作数的幂的结果。它等效于`Math.pow`，你可以理解它就和+、-运算符一样。

在ES5的时候，我们通过求一个数的次幂通常是通过`Math.pow`方法操作的。

```javascript
const result = Math.pow(3, 3);
```

现在，我们可以直接使用**运算符直接求幂。且写法简洁很多。

```javascript
const result2 = 3 ** 3;
```

也可以使用`BigInts`作为操作数。

##### 什么是BigInt（ES11）

是`ES11`中新增的一种基本数据类型，它可以是任意大的整数。它解决了`Number`类型的限制。

当一个数大于`Number`类型所能表示的最大整数时，这个数会被四舍五入。那么会损害程序的可靠性和安全性。

```javascript
9007199254740992 === 9007199254740993; // true
```

为了解决这个限制，可以使用`BigInt`类型来解决这个问题。

```javascript
BigInt("9007199254740998"); // 9007199254740998n
```

出了使用`BigInt`构造函数创建`BigInt`类型的值，也可以在数字后面添加上`n`即可。

```javascript
console.log(typeof 9007199254740998n) // bigint
```

##### 与Number的区别

- `BigInt`不能使用`Math`对象中的方法
- 不能和`Nunber`进行运算
- `BigInt`转`Number`类型可能出现失去精度
