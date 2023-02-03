---
title: 常见的META标签
tags: [HTML]
---

meta是由name和content属性定义的，用来描述网页文档的属性

例如网页作者，关键词等信息

### 常见的meta标签

**设置当前HTML页面的编码类型**

```html
<meta charset="UTF-8" >
```

**设置当前HTML页面的关键词**

```html
<meta name="keywords" content="关键词" >
```

**设置当前HTML页面标签描述信息**

```html
<meta name="description" content="页面描述内容" />
```

**定义作者信息**

```html
<meta name="author" content="QC2168" />
```

**页面重定向和刷新**
> content里的是数字代表N秒后自动刷新，如果有url会重定向到指定的页面上、

```html
<meta http-equiv="refresh" content="0;url=" />
```

**禁止页面读取本地缓存**
```html
<meta http-equiv="Pragma" content="no-cache">
```

**viewport 移动设备**

用于优化移动浏览器的显示效果

> 非响应式（responsive）网站，请不要使用initial-scale 或者禁止缩放

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>
```

| 属性          | 描述                                                              |
| ------------- | ----------------------------------------------------------------- |
| weight        | 宽度（数值 / device-width）（范围从200 到10,000，默认为980 像素） |
| height        | 高度（数值 / device-height）（范围从223 到10,000）                |
| initial-scale | 初始的缩放比例 （范围从>0 到10）                                  |
| minimum-scale | 允许用户缩放到的最小比例                                          |
| maximum-scale | 允许用户缩放到的最大比例                                          |
| user-scalable | 用户是否可以手动缩 (no,yes)                                       |
| minimal-ui    | 可以在页面加载时最小化上下状态栏。（已弃用）                      |

> 注意，很多人使用initial-scale=1到非响应式网站上，这会让网站以100%宽度渲染，用户需要手动移动页面或者缩放。如果和initial-scale=1同时使用user-scalable=no或maximum-scale=1，则用户将不能放大/缩小网页来看到全部的内容。