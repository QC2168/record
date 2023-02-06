---
title: CSS-image-sprites
tags: [CSS]
---

## CSS-image-sprites

又称精灵图，主要运用在带有大量小图标的网页上面，可大幅减少页面向服务器请求图像数据。

其实就是将全部图像元素都放到一张“大图片”中，到时候浏览器只需要请求这一张图片就可以拿到全部的图像数据，对内存和带宽更加友好。

> 在http2中，直接请求多个数据图像可能会更好

### 应用
```css
.mobile-icon{
    height: 32px;
    width: 32px;
    background-image: url('/assets/icons.png');
    background-position: 0 -730px;
    background-repeat: no-repeat;
}
```

### 优点

- 减少页面对图像的请求
- 减少图片字节（合成的图片总比多张图片大小的总和小）

### 缺点

- 开发时比较麻烦，需要借助工具定位图像的位置
- 维护这种图片时，无需改动的位置最好不要改动避免`CSS`变动