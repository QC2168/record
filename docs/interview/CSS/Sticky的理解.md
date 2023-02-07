---
title: Sticky的理解
tags: [CSS]
---

## Sticky的理解

`sticky`翻译过来就是粘贴的意思，当元素被滚动到一定位置后，就会固定在目标位置上。

你可以理解成它是`position:relative`和`position:fixed`互相切换的状态。当元素还没到达指定位置时它是`relative`，当达到指定位置时它是`fixed`。

控制定位的属性是`top`、`right`、`bottom`、`left`。只要有其中之一，就能触发粘性定位