---
title: axios和fetch有什么区别吗
tags: [network]
---

## `axios`和`fetch`有什么区别吗

- `Axios`和`Fetch`都是用来发起网络请求的`JavaScript`库，它们的主要区别在于以下几点：

- `Axios`支持请求取消，而`Fetch`不支持。如果你需要支持取消请求功能，那么使用`Axios`更加方便。

- `Axios`可以直接从服务器接收和发送`JSON`格式的数据，而`Fetch`需要手动将数据转换为`JSON`格式。

- 在处理错误时，`Axios`可以自动将`HTTP`状态码转换为错误对象，并提供更多的错误处理选项。`Fetch`对错误处理的支持较弱。

- `Axios`支持浏览器和`Node.js`环境，而`Fetch`仅支持浏览器环境。


总体来说，`Axios`提供了更多的功能和更好的错误处理能力，因此在大多数情况下建议使用`Axios`。不过，如果你只需要简单的网络请求功能，可以考虑使用`Fetch`。