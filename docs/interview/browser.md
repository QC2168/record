## 浏览器原理篇

### 缓存篇

:point_right: [HTTP中的强缓存与协商缓存](https://juejin.cn/post/7101942484543995934)

### deter async script tag

`async` 并行下载`script`脚本（不会中断`HTML`解析过程），下载完毕之后中断`HTML`解析，执行脚本内容

`deter` 并行下载`script`脚本（不会中断`HTML`解析过程），在执行`DOMContentLoaded`事件之前，将下载好的`script`内容执行。

[<script>: The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)