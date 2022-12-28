---
title: instanceof
tags: [JavaScript手写题]
---

## instanceof

```javascript
function MyInstanceOf(instance, parent) {
    if (typeof instance !== "object" && typeof instance !== "function") return false;
    let proto = instance.__proto__ || null
    while (proto !== null) {
        if (proto === parent.prototype) return true
        proto = proto.__proto__
    }
    return false
}
```

### 测试

```javascript
console.log(MyInstanceOf([], Array)) // true
console.log(MyInstanceOf([], Object)) // true
console.log(MyInstanceOf((x) => x, Object)) // true
console.log(MyInstanceOf("_island", Object)) //false
```