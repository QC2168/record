## 输入URL后发生了什么

### 判断输入的内容

首先浏览器会将用户输入的内容进行判断

判断输入的是URL地址还是关键词

如果发现非ASCII的unicode字符时，会进行转义

### 检测HSTS列表

浏览器检查自带的“预加载HSTS”列表

列表里包括了只能使用https进行连接的URL，如果用户输入的URL存在这个列表中则使用HTTPS

### DNS

- 查看浏览器中的DNS缓存，如果没有找到下一步
- 查找操作系统中的DNS缓存，如果没有找到下一步
- 查找系统中查找host文件看看有没有对应的地址，如果没有找到下一步
- 在系统的LDNS查找对应的域名对应IP地址
  - 这一步可能会出现DNS污染的情况
  - 解决方案：
  - 切换DNS服务器
  - 清空DNS缓存
- 如果在LDNS没有找到，发起一个NDS解析请求
  - LDNS向根域名服务器发起请求，RNDS返回一级域名对应的ip地址
  - LDNS向一级域名服务器发起请求，得到二级域名对应的IP地址
  - LDNS向二级域名服务器发起请求，得到三级域名对应的IP地址
  - LDNS将得到的IP地址返回给操作系，并将这个IP地址缓存起来
  - 操作系统再把ip地址给浏览器，将ip地址缓存起来到浏览器中
  - 浏览器最终拿到了这个域名对应的IP地址，开始访问这个ip

### 建立TCP

### 解析HTML

解析请求回来的HTML页面

- 浏览器分有`browser`进程和`GPU`进程
- browser主进程主要负责
  - 下载页面的网络文件
  - 负责将渲染进程得到数据渲染到页面上
  - 负责创建和销毁tab进程
  - 负责和用户交互
- GPU进程主要负责
  - 负责3D绘制，当页面需要进行硬件加速的时候才会使用到它，**否则是使用渲染进程来绘制页面的**
- 渲染进程，又称浏览器的内核，每个tab标签对应一个独立的渲染进程，渲染进程是多线程的
  - JS进程
    - JS内核，解析JS脚本，执行JS脚本
    - 和GUI线程互斥，当JS引擎在运行时，GUI线程会被挂起
    - worker线程是附属的主进程，无法操作DOM，有复杂的计算处理可以使用它
  - GUI渲染进程
    - 解析HTML为DOM树，解析CSS为CSSOM树，布局layout，绘制paint
    - 在页面重排和重绘时使用
    - 与JS进程是互斥的

在解析HTML的过程中，将HTML解析成DOM树，把CSS样式表解析程CSSOM树（这个过程是同步的，两个线程在进行）

如果遇到外部资源时，会额外去请求外部资源（这个资源可能是CSS，js文件）

> 减少CSS阻塞时间可以通过消减CSS，懒加载非主要CSS，内联主要CSS优化
>
> 如果使用了构建工具，可以通过插件进行优化，常见的
>
> - webpack：optimize-css-assets-webpack-plugin
> - Gulp：gulp-clean-css
> - Rollup：rollup-plugin-css-porter

如果遇到script标签，会根据`async/defer`属性进行不同的处理。

::: tip 扩展

`async`（异步） 并行下载`script`脚本（不会中断`HTML`解析过程），下载完毕之后中断`HTML`解析，执行脚本内容.

`defer`（延迟） 并行下载`script`脚本（不会中断`HTML`解析过程），在执行`DOMContentLoaded`事件之前，将下载好的`script`内容执行。

默认行为是 在下载script脚本时会中断HTML解析，如果脚本内容比较大时，会导致加载时间较久，无法很快渲染出整个页面

:::

解析完毕后，浏览器会开始布局CSSOM树并把它绘制到页面中

这里涉及到了回流和重绘

::: tip 扩展

**回流**

如果元素的几何信息受到改变（元素位置，宽高...），浏览器就会触发重新计算元素在视图内的几何属性，这个过程叫做回流

**重绘**

当元素外观发生改变，但没有改变布局的情况下，重新绘画这个元素就是重绘

常见会引起重绘的属性有color、border、visibility、background、outline

:::

页面在加载中，一定会经过回流和重绘

注意，在这个过程中，很消耗性能，造成卡顿，在开发中尽可能减少回流和重绘





### 参考资料

- [从输入 URL 到页面展示到底发生了什么？看完吊打面试官！](https://zhuanlan.zhihu.com/p/133906695)
- [How browsers work](https://web.dev/howbrowserswork/)
- [优化 Largest Contentful Paint 最大内容绘制](https://web.dev/i18n/zh/optimize-lcp/#render-blocking-resources)