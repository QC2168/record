---
title: HTTP协商缓存
tags: [interview,network]
---

## 浏览器缓存机制

我们都知道当我们在浏览器中打开一个页面时，浏览器会根据你输入的URL到对应的服务器上请求你想要的数据资源。但这个过程中可能页面可能需要等待一段时间（白屏时间）才能渲染到你的页面中。

当你想要提高用户体验时，那就不得不提各种缓存技术了，例如：DNS缓存、CDN缓存。浏览器缓存、页面本地缓存等等，有一个良好的缓存策略可以减低重复资源的请求，降低服务器的开销，提高用户页面的加载速度。

而这一篇文章将聊聊什么的`HTTP`强缓存和协商缓存

## 基本原理

在浏览器加载资源的时候，首先会根据请求头的`expires`和`cache-control`判断是否命中强缓存策略，判断是否向远程服务器请求资源还是去本地获取缓存资源。

## 强缓存

在浏览器中，强缓存分为`Expires`（http1.0规范）、`cache-control`（http1.1规范）两种。

## Expires

`Expires`是`http1.0`的规范，用于表示资源的过期时间的请求头字段，值是一个绝对时间，是由服务器端返回的。

在浏览器第一个请求资源时，服务器端的响应头会附上`Expires`这个响应字段，当浏览器在下一次请求这个资源时会根据上次的`expires`字段是否使用缓存资源（当请求时间小于服务端返回的到期时间，直接使用缓存数据）

> expires是根据本地时间来判断的，假设客户端和服务器时间不同，会导致缓存命中误差

## Cache-control

上面我们提到了`Expires`有个缺点，当客户端本地时间被修改时浏览器会直接向服务器请求新的资源，为了解决这个问题，在`http1.1`规范中，提出了`cache-control`字段，且**这个字段优先级高于上面提到的`Expires`**，值是相对时间。

在`cache-control`中有常见的几个响应属性值，它们分别是

| 属性值   | 值   | 备注                                                         |
| -------- | ---- | ------------------------------------------------------------ |
| max-age  | 3600 | 例如值为3600，表示（当前时间+3600秒）内不与服务器请求新的数据资源 |
| s-maxage |      | 和max-age一样，但这个是设定代理服务器的缓存时间              |
| private  |      | 内容只缓存到私有缓存中(仅客户端可以缓存，代理服务器不可缓存) |
| public   |      | 所有内容都将被缓存(客户端和代理服务器都可缓存)               |
| no-store |      | 缓存只能被客户端浏览器缓存，不能被代理服务器缓存             |
| no-cache |      | 储存在本地缓存区中，只是在与原始服务器进行新鲜度再验证之前，缓存不能将其提供给客户端使用 |

## 协商缓存

上面提到的强缓存都是由本地浏览器在确定是否使用缓存，当浏览器没有命中强缓存时就会向浏览器发送请求，验证协商缓存是否命中，如果缓存命中则返回304状态码，否则返回新的资源数据。

协商缓存（也叫对比缓存）是由服务器来确定资源是否可用，这将涉及到两组字段成对出现的，在浏览器第一次发出请求时会带上字段（Last-Modified或者`Etag`），则后续请求则会带上对于的请求字段（`if-modified-since`或者`if-none-Match`），若响应头没有`Last-Modified`或者`Etag`，则请求头也不会有对应的字段

- `Last-modified`表示本地文件最后修改时间，由服务器返回
- `if-modified-since`是浏览器在请求数据时返回的，值是上次浏览器返回的Last-modified
- `ETag`是一个文件的唯一标识符，当资源发生变化时这个`ETag`就会发生变化。弥补了上面`last-modified`可能出现文件内容没有变化但是`last-modified`发生了变化出现重新向服务器请求资源情况。这个值也是又服务器返回的
- `if-none-match`是浏览器请求数据时带上的字段，值是上次服务器返回的`ETag`

这么说可能不太明白，我画了一个请求流程图，看一下就很快可以明白什么是协商缓存啦

![Untitled Diagram (1)](C:/Users/ABC/Downloads/Untitled Diagram (1).png)

## 结合强缓存具体请求流程

1. 当浏览器发起一个资源请求时，浏览器会先判断本地是否有缓存记录，如果没有会向浏览器请求新的资源，并记录服务器返回的`last-modified`。
2. 如果有缓存记录，先判断强缓存是否存在（`cache-control`优先于`expires`，后面会说），如果强缓存的时间没有过期则返回本地缓存资源（状态码为200）
3. 如果强缓存失效了，客户端会发起请求进行协商缓存策略，首先服务器判断`Etag`标识符，如果客户端传来标识符和当前服务器上的标识符是一致的，则返回状态码 `304 not modified`（不会返回资源内容）
4. 如果没有`Etag`字段，服务器会对比客户端传过来的`if-modified-match`，如果这两个值是一致的，此时响应头不会带有`last-modified`字段（因为资源没有变化，`last-modified`的值也不会有变化）。客户端304状态码之后读取本地缓存。如果`last-modified`。
5. 如果`Etag`和服务器端上的不一致，重新获取新的资源，并进行协商缓存返回数据。

## 为什么需要ETag

它的出现主要是解决`last-modified`几个比较难以解决的问题

1. 在没有修改文件内容情况下文件的最后修改时间可能也会改变，这会导致客户端认为这文件被改动了，从而重新请求
2. 可能有些文件修改比较频繁，秒级以内修改的，`If-Modified-Since` 能检查到的粒度是秒级的，使用 `Etag` 就能够保证这种需求下客户端在 1 秒内能刷新多次。
3. 有些服务器不能精确获取文件的最后修改时间

## 状态码区别

- 200 请求成功，服务器返回全新的数据
- 200 `from memory cache / from disk cache` 本地强缓存还在有效期，直接使用本地缓存
- 304 请求成功，走了协商缓存，服务器判定（`Etag`和`Last-modified`）没有过期，告知浏览器使用缓存

> from memory cache 是页面刷新的时候内存取的
> from disk cache 页面tab关闭后从磁盘取的

## 缓存优先级

`expires`和`cache-control`如果同时存在时，`cache-control`会覆盖`expires`，`expires`无效，无论是否过期，。即 `Cache-control > expires`

强缓存和协商缓存如果同时存在时，会去先对比强缓存是否还再有效期，如果强缓存生效则对比协商缓存，即`强缓存 > 协商缓存`

协商缓存`Etag`和`last-modified`同时存在时，会先比较`Etag`，`last-modified`无效，即`Etag > last-modified`

> 补充一下：
>
> 在http1.0规范时还有一个[Pragma](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Pragma)缓存策略，那时候Cache-control（http1.1）还没出，它与 Cache-Control: no-cache 效果一致。强制要求缓存服务器在返回缓存的版本之前将请求提交到源头服务器进行验证

> paragma -> Cache-control -> expires -> Etag -> last-modified

## 启发式缓存

这个会缓存策略是浏览器默认的，如果发送一个网络请求没有`expires`、`cache-control`，但是又有`last-modified`字段，那么在这种情况下浏览器会有一个默认缓存策略`（currentTime - last-modified ）*0.1`

> 只有服务端没有返回明确的缓存策略时才会激活浏览器的启发式缓存策略

[HTTP Heuristic Caching (Missing Cache-Control and Expires Headers) Explained](https://paulcalvano.com/2018-03-14-http-heuristic-caching-missing-cache-control-and-expires-headers-explained/)

## 其他补充

-  协商缓存想要配合强缓存使用，如果不开启强缓存使用，协商缓存没有意义
- 大部分`web`服务器默认开启协商缓存，且是同时开启`last-modified`和`Etag`

## 注意场景

1. 分布式系统里`last-modified`需要保持一致，以免负载到不同的机器导致比对失败，从而返回新资源
2. 分布式系统尽量关闭掉`Etag`，因为每一台服务器生成的`Etag`是不同的

