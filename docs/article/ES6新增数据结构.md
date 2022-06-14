### 前言

下面我们聊一聊在`ES6`中新增的数据结构有哪些，它们是如何使用的。

### ES6新增数据结构

#### Symbol

`Symbol`是`ES6`中新增的一个基本数据类型之一，它是一个函数。每一个从`Symbol`函数返回的`Symbol`值都是独一无二的，`symbol`值作为对象属性的标识符，也是唯一的用途的。

```javascript
const s1 = Symbol()
const s2 = Symbol()
console.log(s1 === s2); // false
```

##### symbol作为key

第一种方式，直接在对象的字面量中添加。

```javascript
// symbol作为key
const obj = {
  [s1]:'abc',
  [s2]:'cc',
}
```

第二种方式，通过添加数组方式添加。

```javascript
// 需要用数组方式来获取，不能通过点语法，否则会获取到字符串key
console.log(obj[s1]);

```

第三种方式，通过对象中的`defineProperty`方法添加。

```javascript
const s4 = Symbol()
Object.defineProperty(obj,s4,{
  configurable:true,
  enumerable:true,
  writable:true,
  value:'ff'
})
```

##### 通过symbol获取对应的值

需要用数组方式来获取，不能通过点语法，否则会获取到字符串`key`。

```javascript
console.log(obj[s1]);
```

`symbol`不能被隐式转换成`string`类型。

> 注意：Symbol函数中的参数是symbol描述符，这是在ES10新增的

```javascript
let Sym = Symbol("Sym")
alert(Sym)  // TypeError: Cannot convert a Symbol value to a string
```

我们不能直接`alert`一个`symbol`对象，但是我们可以通过`toString`的方式或者`.description`来获取`symbol`对象的描述符。

```javascript
let sym = Symbol('a')
console.log(sym.description); // 'a'
```

##### 遍历symbol

在使用`for`遍历、`object.keys`中是获取不到`symbol`健的，对此`object`还提供了`getOwnPropertySymbols`方法，用于获取对象中所有symbol的key。

```javascript
const sKeys=(Object.getOwnPropertySymbols(obj));
for(const skey of sKeys){
  console.log(obj[skey]);
}
```

##### 全局symbol对象注册

有时，我们可能需要多个`symbol`的值是一致的，我们可以通过`symbol`提供的静态方法`for`方法传入一样的描述符来使它们的值一致。

##### Symbol.for

该方法会在使用给定键搜索运行时符号注册表中的现有符号，并在找到时返回它。否则，使用此键在全局符号注册表中创建一个新符号。

```javascript
const sa=Symbol.for('cc')
const sb=Symbol.for('cc')
console.log(sa===sb); //true
```

##### Symbol.keyFor

该方法用于获取全局`symbol`的描述符。

```javascript
const key =Symbol.keyFor(sb)
console.log(key); // c
```

#### Set

`Set`对象（类似数组）允许你存放任何数据类型，但里面的值不能重复。

```javascript
const s1 = new Set()
s1.add(10)
s1.add(20)
s1.add(30)
s1.add(40)

console.log(s1) // Set(4) { 10, 20, 30, 40 }

s1.add(20)
console.log(s1) // Set(4) { 10, 20, 30, 40 }
```

##### Set常用方法

| 方法     | 返回值            | 说明                      |
| -------- | ----------------- | ------------------------- |
| `size`   | `set`对象中的数量 | 返回set对象中的数量       |
| `add`    | `Set`对象         | 添加元素                  |
| `delete` | `boolean`         | 删除元素                  |
| `has`    | `boolean`         | `Set`对象中是否存在这个值 |
| `clear`  | 无                | 清空`Set`对象中的值       |

#### WeakSet

`WeakSet`是类似`Set`的另外一种数据结构，内部数据也不能有重复值。

- 它与`Set`的区别
  - `WeakSet`只能存放对象类型，不能存放基本数据类型
  - `WeakSet`对元素是弱引用

##### 基本使用

```javascript
const weakSet = new WeakSet();
let obj = {
  name: "_island"
};

weakSet.add(obj);
```

##### WeakSet常用方法

| 方法     | 返回值        | 说明                          |
| -------- | ------------- | ----------------------------- |
| `add`    | `weakset`对象 | 添加元素                      |
| `delete` | `boolean`     | 删除元素                      |
| `has`    | `boolean`     | `weakset`对象中是否存在这个值 |

##### 关于遍历

`WeakSet`不能被遍历，因为它只是对对象进行弱引用，如果遍历去获取元素，有可能导致对象不能被`GC`回收。

所以`WeakSet`中的对象是不能获取的

#### Map

`ES6`新增的数据结构，用于存储映射关系。我们知道在`JavaScript`中对象中是不能用对象来作为`key`的。（假如我们把对象作为`key`，其内部会将对象转换为字符串`[object object]`）

```javascript
const obj1 = { name: "_island" };
const obj2 = { name: "QC2125" };
const obj3={
  [obj1]:'a',
  [obj2]:'b',
}

console.log(obj3);
// { '[object Object]': 'b' }
```

而`Map`则可以把对象作为`key`进行存储，可以通过`set`方法添加到`Map`中，也直接通过字面量的方式添加。

```javascript
const obj1 = { name: "_island" };
const obj2 = { name: "QC2125" };
const map = new Map();
map.set(obj1, "a");
map.set(obj2, "b");
console.log(map); // Map(2) { { name: '_island' } => 'a', { name: 'QC2125' } => 'b' }

// or
const map2 = new Map([[obj1,'a'],[obj2,'b']])
```

##### Map常用方法

| 方法     | 返回值            | 说明                      |
| -------- | ----------------- | ------------------------- |
| `get`    | 获取对应的元素    | 通过`key`获取对应元素     |
| `size`   | `Map`对象中的数量 | 返回`Map`对象中的数量     |
| `set`    | `Map`对象         | 添加元素                  |
| `delete` | `boolean`         | 删除元素                  |
| `has`    | `boolean`         | `Set`对象中是否存在这个值 |
| `clear`  | 无                | 清空`Set`对象中的值       |

##### 遍历Map

通过`foreach`语句遍历`Map`

```javascript
map2.forEach((item) => console.log(item));
```

通过`for..of`遍历`Map`

```javascript
for ([val, key] of map2) {
  console.log(`${key}---${val}`);
}
```

#### WeakMap

和`Map`类似，也是以键值对的形式存在的

- 和Map的区别
  - `WeakMap`的`key`只能使用对象，不接受其他的类型作为`key`
  - `WeakMap`的`key`对对象是弱引用

##### 基本使用

```javascript
const weakMap = new WeakMap();
weakMap.set(obj, "a");
console.log(weakMap.get(obj)); // a
```

##### WeakMap常用方法

| 方法     | 返回值        | 说明                           |
| -------- | ------------- | ------------------------------ |
| `get`    | `weakmap`对象 | 获取元素                       |
| `delete` | `boolean`     | 删除元素                       |
| `has`    | `boolean`     | `weaksmap`对象中是否存在这个值 |

##### 关于遍历

和`WeakSet`一样，正因为它是弱引用，`WeakMap`的`key`是不可枚举的，如果`key`可枚举那其列表将会受`GC`影响。
