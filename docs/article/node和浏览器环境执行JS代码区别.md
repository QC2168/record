---
title: node和浏览器环境执行JS代码区别
tags: [interview]
---


- 内置对象不同
  - 浏览器环境中提供了window全局对象
  - node环境中全局对象不是window，而且global
- this默认指向不同
  - 浏览器环境中全局this默认指向window
  - node环境中全局this默认指向空对象 {}
- Api不同
  - 浏览器环境中提供操作节点的Dom相关Api和操作Bom相关Api
  - Node环境中没有Html也没有浏览器，所以没有这些Dom，Bom相关Api