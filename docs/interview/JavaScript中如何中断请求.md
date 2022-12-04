---
title: JavaScript中如何中断请求
tags: [JavaScript]
---

## JavaScript中如何中断请求

## fetch

利用`AbortController`对象，将`signal`属性传递到`fetch`配置项中，再调用`.abort`即可。

```js
const controller = new AbortController();
// 传递signal
const response = await fetch('XXX', {
        signal: controller.signal,
});

const data = await response.json();

// 中断请求
controller.abort();

```

## XHR

获取当前请求，调用`.abort`方法即可

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'XXX');
xhr.send();

// 中断请求
xhr.abort();

```

## axios

`axios`中断请求和`fetch`基本一样，使用`AbortController`对象中的`abort`方法即可。

```js
const controller = new AbortController();
// 传递signal
const response = await axios.get('XXX', {
        signal: controller.signal,
});

// 中断请求
controller.abort();

```

> `axios`中的`CancelToken`取消请求方法已被废弃
> 在`axios 0.22.0`版本后不再支持，请使用`AbortController`