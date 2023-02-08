## 如何优化CSS

### 载入时优化

- CSS压缩，常见的`webpack`、`vite`会都把`CSS`进行压缩处理
- 单一样式：`margin-top:20px`比`margin:20px 0 0 0;`更高效
- 使用`rel=preload`，异步加载资源
- 不要使用`@import`，会影响浏览器并行下载，而且多个`@import`会导致下载顺序错乱，建议使用`link`标签

### 选择器优化

- 尽量减少选择器多层嵌套（后代选择器），因为浏览器在生成渲染树的时候会花费更多时间
- 避免使用`*{}`选择器

### 属性使用

- 尽量避免使用昂贵的属性，例如`shadow`、`filter`、`opacity`、`float`、`position`

::: tip 为什么CSS选择器是从右开始匹配的
因为性能问题，从右开始匹配的策略可以使得不被匹配时效率更高
:::

### 渲染性能

- 减少页面重排和重绘
- 浏览器样式前缀应放在标准属性前面
- 使用CSS精灵图优化请求次数
- 正确使用`display`属性，有些组合是无效的，导致体积增加
- `web-fonts`体积较大，会阻塞页面渲染
- 属性为0时，不要追加单位
- 属性值例如`0.15`，可以直接写成`.15`

### 相关文章
- [CSS性能优化的8个技巧](https://juejin.cn/post/6844903649605320711)
- [CSS performance revisited: selectors, bloat and expensive styles](https://benfrain.com/css-performance-revisited-selectors-bloat-expensive-styles/#h-H1_1)