---
title: GET与POST的区别
tags: [network]
---

## GET与POST的区别

- GET是明文传输，POST是加密传输
- GET一般是获取服务器的资源，POST可以发出一些更改数据请求
- GET请求的参数只能是ASCII字符（这个说法来自[rfc1738](https://www.ietf.org/rfc/rfc1738.txt)），POST对数据类型没有要求，也允许二进制数据
- GET请求携带数据会有url长度限制，POST请求可以放请求体里不会有限制
- GET请求会被浏览器历史记录缓存下来，POST的参数不会被保存，安全性相对较高

### 用GET还是POST


- 提交用户信息使用POST

- 查询数据或者是分享链接使用GET