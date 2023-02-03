---
title: 什么是worker
tags: [HTML]
---


这是HTML5中新增的特性，因为JavaScript是单线程的，如果遇到一些工作量比较大的函数，可能会使页面暂时无响应或者浏览器会提示关闭当前页面

因为JavaScript线程和GUI线程是互斥的，而worker的出现就是解决这个问题的，可以将工作量较大的函数传给worker去独立解决，不会影响页面性能。


**注意事项**

- 需要注意worker支持性
- 通过回调函数的方式进行线程通信
  - **postMessage / onMessage**