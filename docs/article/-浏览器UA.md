## 什么是UA

UA的全称是User Agent，翻译过来是意思就是**用户代理**，我们简称为UA，它是一串比较特殊的字符串，用于在每一个HTTP请求中，告知服务器端当前请求的用户所所有的浏览器设备，和渲染引擎，操作系统等信息

在不同的设备中，UA标识也是不同的，通过不同的UA标识，网站可以渲染出不同的排版来而用户提供更好的体验和数据统计等


### 如何查看UA

查看`UA`的方法很简单，打开`devTools-network`，在任意一个请求中的`header`最底部即可找到一个名为`user-agent`的请求头，这个就是当前您所向服务器发送的`UA`

![20230313103027](https://raw.githubusercontent.com/QC2168/note-img/main/20230313103027.png)

这个是我当前是UA（注意，使用不同浏览器的UA是不一样的，上面的图片我使用的`Chrome111`版本的）

我们来分析下这一串UA都有些什么数据

```
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36
```

在这之前我们先看看整个UA组成是怎么样的

### UA的组成

```
Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

属性|属性值|说明
---|---|---
<system-information>|user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) |当前操作系统
<platform>|AppleWebKit/537.36|平台
<platform-details>|(KHTML, like Gecko)|
<extensions>|Chrome/111.0.0.0 Safari/537.36|浏览器版本，内核


#### Mozilla开头

所有的主流的浏览器的UA都采用了Mozilla开头，这还要从一段历史开始说起

在一开始，第一个支持图片格式的浏览器问世了，他叫`Mosaic`,后来，开发这个浏览器的骨干开始开发了一个新的浏览器，命名为Mozilla（目的是干掉Mosaic），后来由于团队的原因，将该浏览器重命名为`Netscape`（该浏览器还支持frame特性）

由于不同的浏览器有不同的能力，服务器端出现了UserAgent嗅探技术

一时之间，NetSpace成为了浏览器中最靓的那个浏览器，

作为软件巨头的Microsoft，推出了IE浏览器，希望终结`Netscape`浏览器

但服务器会嗅探UA啊，如果是Mozilla浏览器才会提供包含Frame页面

这时候IE学会了伪装UA，把UA头携带上Mozilla，告诉服务器我就是`Mozilla`浏览器，快给我发带有frame的高级页面

之后，Microsoft在Window中内置了IE浏览器，导致NetScope浏览器一时之间用户量跌入谷底。

又过了一段时间~

新的Mozilla来了，还拥有了Gecko的渲染引擎，后面命名为`firefox`，并且在UA中携带上firefox和Gecko信息

服务器这边这个时候又开始嗅探了，如果UA带有Gecko的，都会赐予用户体验比较好的页面

到了这里，Linux系统这边开发出了一个名为Konqueror的浏览器，采用自家的KHTML渲染引擎。

自称渲染效果和和Gecko的效果一样好！

但服务器还是只会给Gecko提供用户体验比较好的页面

Konqueror开始在UA动手脚了，伪造自己使用的是Gecko浏览器，使用更好的页面

渐渐的，后续新开发的浏览器也开始在UA上进行修改

::: tip

最后，浏览器只判断是不是Mozilla，而浏览器都基于Mozilla来扩展 :joy:

:::




### UA的作用



参考资料：
[History of the browser user-agent string](https://webaim.org/blog/user-agent-string-history/)