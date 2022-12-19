## 浏览器原理篇

### 缓存篇

:point_right: [HTTP中的强缓存与协商缓存](https://juejin.cn/post/7101942484543995934)

### deter async script tag

`async`（异步） 并行下载`script`脚本（不会中断`HTML`解析过程），下载完毕之后中断`HTML`解析，执行脚本内容

`deter`（延迟） 并行下载`script`脚本（不会中断`HTML`解析过程），在执行`DOMContentLoaded`事件之前，将下载好的`script`内容执行。

默认行为是 在下载script脚本时会中断HTML解析，如果脚本内容比较大时，会导致加载时间较久，无法很快渲染出整个页面

[<script>: The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

### Load和DOMContentLoad区别

- 页面中的DOM元素，CSS，JS，包含图片加载完成后触发Load事件
- 当HTML被加载解析完成之后，触发DOMContentLoad事件（比Load事件先触发，无需其他事件，如图片加载，CSS...）

> 在需要操作DOM的时候可以在DOMContentLoaded操作，如果涉及到图片这类资源内容需要在load事件中处理

### 浏览器自动填充

很多浏览器会会在DOMContentLoaded中自动填充表单，例如上一次您在某个网页上输入了账号密码并在浏览器保存了这一份数据，那么下一次在加载这个网页时浏览器就会在DOMContentLoaded事件中自动填充保存的数据