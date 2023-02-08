---
title: 常见的DOM操作
tags: [JavaScript]
---

## 常见的DOM操作

### 获取节点

- getElementById // 根据id查询元素，返回对应的元素
- getElementsByTagName // 根据标签名查询元素，返回的是一个`HTML`集合，伪数组
- getElementsByClassName // 根据类名查询元素，返回的是一个`HTML`集合，伪数组
- querySelectorAll // 根据css选择器查询元素，返回的是一个`HTML`集合，伪数组

### 生成节点

- createElement // 根据传入的标签名称，创建的元素并返回

> 新增后并不会立即插入到文档中，而是需要使appendChild追加到指定的位置

### 修改节点

- insertBefore 在某个位置插入一个新元素
  - `parentNode.insertBefore(newNode, referenceNode);`
- appendChild 插入一个新的元素在目标元素列表中的尾部
  - `element.appendChild(aChild)`

### 删除节点

- el.removeChild 删除父级元素下的某个子元素


```js
function removeElement(el){
    const parentEl = el.parentNode;
    if(parentEl){
       parentEl.removeChild(el);
    }
}
```

> 删除元素需要先通过`parent`元素，再删除对应的子元素，无法自身删除
