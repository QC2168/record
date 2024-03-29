---
title: 常见的HTTP状态码
tags: [network]
---
## HTTP 响应状态码

HTTP 响应状态码用来表明特定 HTTP 请求是否成功完成。
响应被归为以下五大类：

1. 信息响应 (100–199)
2. 成功响应 (200–299)
3. 重定向消息 (300–399)
4. 客户端错误响应 (400–499)
5. 服务端错误响应 (500–599)

## 常见的HTTP状态码

| 状态码 |描述|
|-----|---|
| 200 |请求成功，返回对应的资源数据|
| 201 |请求成功，并创建对应的资源数据|
| 204 |请求成功，服务器无需返回资源数据|
| 304 |缓存状态码，代表用的是缓存中的数据|
| 400 |客户端错误，无法处理数据，可能是字段出错|
| 401 |无法验证身份信息|
| 403 |服务器拒绝访问，可能是权限不够|
| 404 |在服务器上找不到资源|
| 409 |请求与服务器端目标资源的当前状态相冲突，通常可能是版本更新导致的|
| 410 |资源不再可用|
| 500 |服务器出错|
| 501 |服务器不支持该请求功能，无法完成请求|
| 503 |服务器在维护或者超载，暂时无法处理吗。延时的长度可包含在服务器的Retry-After头信息中|

### 301和302的区别

#### 1. 定义
301是永久重定向（**Moved Permanently**），被请求的资源已永久移动到新位置，并且将来任何对此资源的引用都应该使用本响应返回的若干个 URI 之一。如果可能，拥有链接编辑功能的客户端应当自动把请求的地址修改为从服务器反馈回来的地址。除非额外指定，否则这个响应也是可缓存的。

302是临时重定向（**Found**），请求的资源现在临时从不同的 URI 响应请求。由于这样的重定向是临时的，客户端应当继续向原有地址发送以后的请求。只有在Cache-Control或Expires中进行了指定的情况下，这个响应才是可缓存的。


#### 2. 缓存
定义上已经给出，对于301请求，浏览器是默认给一个很长的缓存。而302是不缓存的。
#### 3. 搜索引擎
301: 旧地址A的资源不可访问了(永久移除), 重定向到网址B，搜索引擎会抓取网址B的内容，同时将网址保存为B网址。
302: 旧地址A的资源仍可访问，这个重定向只是临时从旧地址A跳转到B地址，这时搜索引擎会抓取B网址内容，但是会将网址保存为A的。
#### 4. 安全
尽量使用301跳转，以防止网址劫持！
假如，A -> B。大部分的搜索引擎在大部分情况下，当收到302 重定向时，有的时候搜索引擎，尤其是Google，并不能总是抓取目标网址。比如说，有的时候A 网址很短，但是它做了一个302 重定向到B 网址，而B 网址是一个很长的乱七八糟的URL 网址，甚至还有可能包含一些问号之类的参数。很自然的，A 网址更加用户友好，而B 网址既难看，又不用户友好。这时Google 很有可能会仍然显示网址A。由于搜索引擎排名算法只是程序而不是人，在遇到302 重定向的时候，并不能像人一样的去准确判定哪一个网址更适当，这就造成了网址URL 劫持的可能性。也就是说，一个不道德的人在他自己的网址A 做一个302 重定向到你的网址B，出于某种原因， Google 搜索结果所显示的仍然是网址A，但是所用的网页内容却是你的网址B 上的内容，这种情况就叫做网址URL 劫持。你辛辛苦苦所写的内容就这样被别人偷走了。302 重定向所造成的网址URL 劫持现象，已经存在一段时间了。不过到目前为止，似乎也没有什么更好的解决方法。在正在进行的谷歌大爸爸数据中心转换中，302 重定向问题也是要被解决的目标之一。从一些搜索结果来看，网址劫持现象有所改善，但是并没有完全解决。
简单来说就是：有个坏人把他的电话来电转移到了一个明星那，让大家都以为他的电话是那个明星的。他的手机号成名后，就可以拉个微信群，大胆的假装明星，实现他的微shang梦，从此走上人生巅峰。

> 引用 https://juejin.cn/post/6844904097733165069




