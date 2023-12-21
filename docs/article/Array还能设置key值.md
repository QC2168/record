---
title: Array还能设置key值
tags: [javascript]
---

今天在某个技术群聊中，一位技术大佬发了一张这样子的图

作为小白的我，看完一愣一愣的

产生了一些的疑惑？

- 为什么`length`是`3`？
- 这数组也不太像是个数组吧？

![354117ac7a671309b7d2261d5f060d7](https://raw.githubusercontent.com/QC2168/note-img/main/354117ac7a671309b7d2261d5f060d7.jpg)


```JavaScript
let items = [1,2,3];
items[0.5]=1

items.length
// 3
items
// [1, 2, 3, 0.5: 1]
```
当看到`0.5:1`的时候，这是不是有点像`Object`中的`key:value`

我们用`Object.keys`方法查看下，是不是有存在这个`0.5`

```JavaScript
Object.keys(items)
// ['0', '1', '2', '0.5']
```

这里为什么可以使用`Object.keys`？

> 在JavaScript中，`Object.keys()`是用于获取一个对象的所有可枚举属性的方法。
>
> 如果你尝试将一个数组作为参数传递给`Object.keys()`时，它会将这个数组视为一个对象，并提取出数组的索引作为属性

## 特殊的Array

可能你会想那判断这个`items`是不是对象类型，有没有可能是被转换了？

答案：在`JavaScript`中，`Array`并不是`JavaScript`中的基本类型，而是基于`Object`扩展出来的一个特殊对象，它对数组索引属性键进行了特殊处理。

属性名称为数组索引的属性也称为元素。每个数组都有一个不可配置的`length`属性，而且该属性值严格小于`2**32`

在给数组的 `length`"属性赋值时，会自动添加或删除元素，使其等于所赋的值

例如，我们创建了包含5个值的数组，此时长度为`5`，当我们去修改为`3`时，`array`会自动将元素数值缩小为`3`
```JavaScript
let foo=[1,2,3,4,5]
foo.length
// 5
foo.length=3
// 3
foo
// [1, 2, 3]
```
如果你把`length`重新赋值为`5`，之前丢失的元素也不会恢复回来，而是采用`empty`（空位）代替，变成一个稀疏数组（`Sparse Array`）
```JavaScript
foo.length=5
[1, 2, 3, empty × 2]
```
除了采用`.length`的方式设置长度之外，当你更新索引的值大于当前最大索引时，中间产生出来的元素会被`empty`填补

```JavaScript
let foo=[1,2,3,4,5]
foo[10]=10
// foo
// [1, 2, 3, 4, 5, empty × 5, 10]
```
> 冷知识：当稀疏数组调用某些数组方法时，会被默认跳过（例如平时比较常用foreach，filter方法）

这也解释了为什么`Object.keys`会输出`0.5`这个值

接下来我们用`Object.values()`打印下`items`，看看它会返回什么数据出来

```JavaScript
Object.values(items)
// [1, 2, 3, 1]
Object.keys(items)
// ['0', '1', '2', '0.5']
```

通过上面对`items`属性的`key`，`value`打印，我们可以得到一个这样子的对象

```JavaScript
{
    0:1,
    1:2,
    2:3,
    0.5:1,
}

// items -> [1, 2, 3, 0.5: 1]
```
我们得到`length`属性的值是`key`中最大的整数值，而`value`是数组中的元素


参考资料

- [Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [关联数组](https://zh.wikipedia.org/wiki/%E5%85%B3%E8%81%94%E6%95%B0%E7%BB%84)
- [Array Exotic Objects](https://tc39.es/ecma262/#array-exotic-object)