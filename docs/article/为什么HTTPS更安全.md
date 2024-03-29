---
title: HTTPS为什么更安全
tags: [network]
---

## 前言

在互联网时代，我们每天都在进行着与网络有关的活动，而网络安全问题也因此成为大家越来越关注的话题。`http`协议作为最常用的网络传输协议之一，其设计缺陷让黑客攻击变得更加容易。相比之下，`https`协议通过加密通信，能够更有效地保护用户隐私和数据安全。

本文将为您介绍什么是`https`，为什么它比`http`更安全，帮助您更好地了解网络安全问题。

### 什么是https
`https`是`http`的加强版（`HTTP+SSL`），因为`http`特性是明文传输，因此到每个传输的环节中数据都有可能被第三方篡改的可能，也就是我们所说是中间人攻击。为了数据的安全，提出了`https`这个方案

但它不是一个新的协议，原理上是在`http`和`tcp`层之间建立一个中间层（也叫安全层），在不像之前`http`一样，直接进行数据通信，这个中间层会对数据进行加密处理，将加密后的数据给`TCP`，`TCP`再将数据包进行解密处理才能传给上游的`http`。

> http是位于OSI网络模型中的**应用层**

> SSL(Secure Sockets Layer 安全套接字协议),及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议


![20230112112331](https://raw.githubusercontent.com/QC2168/note-img/main/20230112112331.png)


在采用了`SSL`后，`http`就拥有了`https`的加密，证书，完整性保护功能。

换句话说，安全性是由`SSL`来保证的

### SSL/TLS

`SSL` 即 安全套接层(`Secure Sockets Layer`)，在`OSI`模型中处于第`5`层。在`1999`年`SSL`更名为`TLS`(传输层安全)，正式标准化。

在`TLS`中使用了两种加密技术，分别是对称加密和非对称加密

> 提到 TLS ,就要说下 OpenSSL ,它是一个开源密码学程序库和工具包，支持了所有公开的加密算法和协议，许多应用软件都适用它作为底层库来实现 TLS 功能，例如 Apache、Nginx等。

## 加密技术

### 对称加密 Symmetric Cryptography

对称加密常见的加密算法有：`DES`、`AES`、`IDEA`等

这个很好理解，对称加密指的是加密和解密的方式都是使用同一把钥匙（密保）

**缺点：**
- 服务器端也会把密钥提供给对方进行解密，如果密钥传递的过程中被窃取那就没有加密的意义了

### 非对称加密 Asymmetric Cryptography

非对称加密常见的算法有：`RSA`、`DSA`、`DH`等

非对称加密会有两把解密的密钥分别是`A`和`B`，`A`加密后的数据包只能通过密钥`B`来解密，反之，`B`加密的数据包只能通过`A`来解密

其中，`A`是公钥，`B`是私钥，这两把钥匙是不一样，公钥可以给任何人使用，私钥则必须保密。

这样子做可以防止密钥被攻击者窃取后用来获取数据

**缺点：**
- 公钥是公开的，攻击者可以截获公钥后解密服务器发送过来的密钥
- 公钥不包含服务器信息，使用这个方案无法确保服务器身份的合法性，存在中间人攻击风险
- 使用非对称加密在数据加密解密过程需要消耗一定时间，降低了数据传输效率

### hash算法

例如`sha256`、`sha1`、`md5`这些用来确定数据的完整性，是否有被篡改过，主要用来生成签名信息。


### 混合加密

`HTTPS`采用的是混合加密方案（即：对称加密和非对称加密的结合）

非对称加密的安全性比较高，但是解密速度会比较慢。

当数据进行第一次通信时，使用非对称加密算法（解决安全性问题）交互对称密钥，在这之后的每一次通信都采用对称加密来进行交互。这样子性能和安全也可以得到均衡。

混合加密总用了`4`把钥匙
- 非对称加密`A`+私钥`B`
- 对称加密私钥`C`和私钥`D`

> 内容传输时使用对称加密，证书验证阶段使用非对称加密

### HTTPS工作过程

1. 客户端发起一个网络请求。
2. 服务器将自己的信息以数字证书的方式给了客户端（证书里面含有密钥公钥，地址，证书颁发机构等信息），其中的公钥是用来加密信息的。
3. 当客户端接收到这个信息之后，会验证证书的完整性。（当证书有效继续下一步，否则显示警告信息）
4. 客户端生成一个对称密钥并用第二步中的证书公钥进行加密发送给服务器端，
5. 服务器用私钥解密获取对此密钥。（也证明了服务器是私钥的持有者）
6. 接下来的通话使用该密钥进行通讯。

![20230409202418](https://raw.githubusercontent.com/QC2168/note-img/main/20230409202418.png)

### HTTPS运行原理

浏览器拿到证书后，会先读取`issuer`（发布机构），然后在操作系统中内置的**受信任的发布机构中查找证书，是否匹配**，如果没有找到证书，说明证书有问题，如果找到了，就会拿上级证书的公钥去解密本级证书，得到数字指纹`hash`，然后对本级证书进行数字摘要算法（证书中提供的指纹加密算法）计算结果，与解密得到的指纹对比。如果一样，说明证书没有被修改过。公钥可以放心使用，可以开始握手通信了。

#### 证书从哪里来

- 在安装系统的时候，受信任的证书发布机构的数字证书就已经被微软安装在操作系统中

![20230409202800](https://raw.githubusercontent.com/QC2168/note-img/main/20230409202800.png)

#### 什么时候证书不可信

- 证书不是权威`CA`颁发（一些企业贪图便宜使用盗版证书，没有经过`CA`认证，也就无法通过使用浏览器内置`CA`公钥进行验证）
- 证书过期
- 证书部署错误，例如证书和域名信息不匹配


### HTTPS优劣势

**优势**
- 提高`Web`数据安全性
- 加密用户数据
- 提高搜索引擎排序
- 浏览器不会出现非“不安全”警告
- 提高用户对站点的信赖
- 增加了中间人攻击成本

**缺点**
- `https`协议在握手时耗时会大一些，影响整体加载速度
- 客户端和服务器端会使用更大的性能来处理数据加解密
- `SSL`证书需要支付一定的费用来获取
- 也不是绝对的安全，当网站被攻击，服务器被劫持时，`HTTPS`起不到任何作用
- `SSL`证书通常需要绑定`IP`，不能在同一IP上绑定多个域名，`IPv4`资源不可能支撑这个消耗

### 数字证书认证

结合了两种加密方式可以实现数据的加密传输，但安全性还远远不够

如果攻击者采用了`DNS`劫持，将目标地址替换成攻击者指定的地址，之后服务器再伪造一份公钥和私钥，也能对数据进行处理，而客户端此时也不知道正在访问一个危险的服务器

`HTTPS`在混合加密的基础上，再追加了**数字证书认证**步骤，目的就是为了让服务器证明自己的身份

在传输过程中，服务器运营者需要向第三方认证机构（`CA`，`Certificate Authority`）获取授权，在认证通过之后`CA`会给服务器颁发数字证书

这个证书的作用就是用来证明服务器身份，还有就是把公钥传递给客户端

当客户端获取到数字证书后，会读取其明文内容，`CA`在对数字证书签名时会保存一个`hash`函数，这个函数是用来计算明文的内容得到`数据A`，然后用公钥解密明文内容得到`数据B`，再对这两份数据进行对比，如果一致就代表认证合法。

### 为什么要使用https？

**它们之间有什么区别吗？**

通过上面的介绍，我们可以了解到`http`在传输过程是明文的，数据容易被黑客截取或者篡改，这会导致用户信息泄露，而`https`通过`ssl`进行通讯加密处理，就算被截取了，也无法解读数据

另外，除了安全性方面，`https`和`http`还有以下区别：

- 由于`https`需要对数据进行加解密，所以会增加服务器和客户端的消耗更多的性能资源来处理，同时也增加了响应速度
- `https`需要申请证书和验证，`http`则不需要
