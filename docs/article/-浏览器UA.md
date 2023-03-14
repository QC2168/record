
## 怎么识别用户的浏览器

在一个项目中，我们经常会遇到这样的需求，根据用户的浏览器来做一些特殊的处理，比如通过浏览器的UA来判断用户的设备，从而给用户提供不同的体验

但这个需求在我们开发的过程中，往往会遇到一些问题，作为开发者怎么获取用户的UA，怎么判断用户的设备，怎么判断用户的浏览器等等

本文将会带你一步一步的了解这些问题，让你在开发中更加的顺手

## UA是什么

UA的全称是User Agent，翻译过来是意思就是**用户代理**，我们简称为UA，它是一串比较特殊的字符串，用于在每一个HTTP请求中，告知服务器端当前请求的用户所所有的浏览器设备，和渲染引擎，操作系统等信息

在不同的设备中，UA标识也是不同的，通过不同的UA标识，网站可以渲染出不同的排版来而用户提供更好的体验和数据统计等

## 利用UA渲染不同排版
使用UA判断页面的排版，是一种比较常见的做法，比如在PC端和移动端，我们会有不同的页面排版，这个时候我们就可以通过UA来判断用户的设备，从而给用户提供不同的页面排版、

例如百度（www.baidu.com）,当我们使用不同的UA去访问时，会发现页面的排版是不一样的

**使用默认UA访问（Chrome for Window）**

```
UA:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36
```

![20230314140526](https://raw.githubusercontent.com/QC2168/note-img/main/20230314140526.png)


**指定UA访问（Chrome for Android Mobile）**

```
UA: Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36
```

![20230314140504](https://raw.githubusercontent.com/QC2168/note-img/main/20230314140504.png)

从上面图中可以看出，当我们使用不同的UA访问时，页面的排版是不一样的，这就是通过UA来判断用户的设备，从而给用户提供不同的页面排版
## 如何查看UA

查看`UA`的方法很简单，打开`devTools-network`，在任意一个请求中的`header`最底部即可找到一个名为`user-agent`的请求头，这个就是当前您所向服务器发送的`UA`

![20230313103027](https://raw.githubusercontent.com/QC2168/note-img/main/20230313103027.png)

这个是我当前是UA（注意，使用不同浏览器的UA是不一样的，上面的图片我使用的`Chrome111`版本的）

我们来分析下这一串UA都有些什么数据

```
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36
```

在这之前我们先看看整个UA组成是怎么样的

## UA的组成

```
Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
```

属性|属性值|说明
---|---|---
<system-information>|user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) |当前操作系统
<platform>|AppleWebKit/537.36|平台
<platform-details>|(KHTML, like Gecko)|
<extensions>|Chrome/111.0.0.0 Safari/537.36|浏览器版本，内核


#### 为什么是Mozilla开头

所有的主流的浏览器的UA都采用了Mozilla开头，这还要从一段历史开始说起

在1993年的时候，第一个支持图片格式的浏览器问世了，它叫`Mosaic`浏览器，由NCSA团队开发的，后来，开发这个浏览器的骨干开始开发了一个新的浏览器，命名为Mozilla（目的是干掉Mosaic），后来由于团队的原因，将该浏览器重命名为`Netscape`（该浏览器还支持frame特性）

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

画了一个图，大概是这样子的



::: tip

最后，浏览器只判断是不是Mozilla，而浏览器都基于Mozilla来扩展 :joy:

:::

## UA的作用

从上面的描述中，我们已经知道了UA的历史，以及通过UA来识别当前用户访问的浏览器

除了用来识别浏览器，UA还有其他的作用，例如：

- 统计用户浏览器使用情况，如：用户使用的是什么浏览器，什么版本，什么操作系统，什么设备等信息
- 根据用户设备的UA，提供不同的页面排版，提供更好的用户体验（如识别出是移动端的则返回移动端的页面布局）


当然，我们也是可以修改UA的，但是这样做是不被推荐的，这会导致服务器端无法识别当前用户的设备信息，从而导致无法提供更好的用户体验

## 如何修改UA
#### Chrome devTools

首先需要在我们想要修改UA的页面上面打开`devTools`，然后右上角是一个`setting`的按钮，点击进去，选择`More tools`，然后选择`Network conditions`

![20230314123745](https://raw.githubusercontent.com/QC2168/note-img/main/20230314123745.png)

之后在`User agent`把`use browser default`的勾选取消掉，然后在下面的输入框中指定我们想要的UA即可。

![20230314123614](https://raw.githubusercontent.com/QC2168/note-img/main/20230314123614.png)

::: tip

注意该个方法只在当前页面生效，新建浏览器Tab的时候UA会恢复到默认值

如果想要全局生效，可以使用下面的插件

:::

#### 浏览器插件

Chrome修改UA的插件：[User-Agent Switcher for Chrome](https://chrome.google.com/webstore/detail/user-agent-switcher-for-c/djflhoibgkdhkhhcedjiklpkjnoahfmg)

Firefox修改UA的插件：[User Agent Switcher](https://addons.mozilla.org/zh-CN/firefox/addon/user-agent-string-switcher/)



## 参考资料：
[History of the browser user-agent string](https://webaim.org/blog/user-agent-string-history/)
[How To Change User Agent in Google Chrome](https://winaero.com/change-user-agent-chrome/)