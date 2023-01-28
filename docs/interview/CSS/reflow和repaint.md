---
title: reflow和repaint
tags: [CSS]
---

## reflow和repaint

### 重排

如果元素的几何信息受到改变（元素位置，宽高...），浏览器就会触发重新计算元素在视图内的几何属性，这个过程叫做重排

### 重绘

当元素外观发生改变，但没有改变布局的情况下，重新绘画这个元素就是重绘

常见会引起重绘的属性有color、border、visibility、background、outline

### 优化重排重绘

- 集中添加样式，使用添加类样式会比一次次`style.xx`添加更好
- 不要使用table布局，table中某个元素变动会导致reflow，如果必须使用，可以设置table-layout:auto;或者是table-layout:fixed这样可以让table一行一行的渲染，这种做法也是为了限制reflow的影响范围
- 如果CSS里面有计算表达式，每次都会重新计算一遍，触发一次reflow
- 批量修改DOM，如使用`createDocumentFragment`处理节点，之后再一起插入到指定的位置
- GPU加速，利用CSS中的transform属性改变元素位置，比起left、top会更加高效

### 浏览器渲染队列

```javascript
div.style.left = '10px';
div.style.top = '10px';
div.style.width = '20px';
```

理论上，上面的代码会触发3次重排和重绘，因为元素的几何属性都发生了改变，但实际上它只触发了一次，这是因为浏览器有一个叫渲染队列机制的特性

在修改元素样式后，浏览器会将重排重绘的操作放到一个队列里，之后等待到一段时间或者到了一定的数量之后，再执行这些操作。




> 推荐文章 [腾讯IVWEB团队-你真的了解回流和重绘吗](https://juejin.cn/post/6844903779700047885)