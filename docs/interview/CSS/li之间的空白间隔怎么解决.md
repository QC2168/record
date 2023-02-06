---
title: li之间的空白间隔怎么解决
tags: [CSS]
---

## li之间的空白间隔怎么解决

### 原因

这是浏览器把`inline`元素之间的空白字符（例如空格，换行）渲染成一个空格导致的，因为我们通常会把一个`li`标签放在一行上，这就导致了换行字符占位。

```html
<ul>
    <li>test</li>
    <li>test</li>
</ul>
```

### 解决

- 将`ul`和`li`写在一行上，不美观
- `li`设置`line-height:1;`
- `ul`设置`font-size:0`，`li`需重新设置`font-size`

