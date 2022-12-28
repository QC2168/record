---
title: 实现一个LRU函数
tags: [JavaScript手写题]
---

## LRU函数

`LRU`是最少使用算法：最久没有访问的内容作为替换对象（维基百科）

```js
class LRU {
  constructor(max = 2) {
    this.cache = new Map();
    this.max = max;
  }
  get(key) {
    // 获取是否有这个键
    const hasKey = this.cache.has(key);
    if (hasKey) {
      // 获取这个值
      const val = this.cache.get(key);
      // 将这个值从map中删除，再添加上去
      //   重新添加会使这个值放到后面，确保了又被使用过
      this.cache.delete(key);
      this.cache.set(key, val);
      return val;
    } else {
      return -1;
    }
  }
  put(key, val) {
    // 获取是否有这个键
    const hasKey = this.cache.has(key);
    // 删除之前的值
    if (hasKey) {
      this.cache.delete(key);
    }
    this.cache.set(key, val);
    // 如果超出容量，删除第一个数据
    if (this.cache.size > this.max) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}
```

### 测试

```js
const LRUInstance = new LRU(2);
LRUInstance.put(1, 1);
LRUInstance.put(2, 2);
console.log(LRUInstance.get(1)); // 1
console.log(LRUInstance.get(2)); // 2
LRUInstance.put(3, 3); // 新增3，删除1（超出容量，且不是最近使用）
console.log(LRUInstance.get(1)); // -1 （被删除了）
console.log(LRUInstance.get(2)); // 2
console.log(LRUInstance.get(3)); // 3
```