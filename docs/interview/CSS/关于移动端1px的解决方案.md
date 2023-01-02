---
title: 关于移动端1px的解决方案
tags: [CSS]
---

## 原因

因为在不同的设备上DPR（DevicePixelRatio）数值的不同，会导致显示出现一定的差异，

可以通过window.devicePixelRatio方法，查看当前设备的DPR数值。

例如设备上物理像素需要显示1px的线条，但是DPR像素比为3（iphone 12Pro），那么CSS像素就是0.333px。

## 解决方案

### 0.5px
在WWDC大会上，对于IOS8以上系统且DPR是2的设备，代码中写0.5px时，设备会显示一个物理像素宽度的border，但是这个方案在Android系统上可能出现不兼容的情况
```css
.el {
    width: 400px;
    height: 400px;
    border:0.5px solid #eee
}
```
### 边框图片
使用图片代替边框，如果后续出现样式调整可能比较麻烦，也可能会出现文件缓存问题
```css
  border: 1px solid transparent;
  border-image: url('image/path') 2 repeat;
```
> 缺点： 修改颜色和圆角无法实现

### 阴影模拟 box-shadow
通过控制阴影模糊和扩散半径，实现边框效果，仔细看也看不出来是通过`box-shadow`模拟出来的
```css
.el {
    width: 400px;
    height: 400px;
    box-shadow: 0 -1px 1px 1px #eee,
    1px 0 1px 1px #eee,
    0 1px 1px 1px #eee,
    -1px 0 1px 1px #eee;
}
```
> 缺点： 如果有边框和虚线效果无法实现

### 伪元素

通过设定绝对定位方式，和父级元素对齐，将大小放大到原来的两倍，通过scale函数缩放到`0.5`倍
```css
.el {
    width: 400px;
    height: 400px;
    position: relative;
}
.el::after{
    content:" ";
    position:absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    transform: scale(0.5);
    transform-origin: left top;
    box-sizing: border-box;
    border: 1px solid #eee;
}
```

> 缺点：使用这个方法会有兼容性问题，在某些浏览器上空元素是不支持伪元素的

- IE 不支持的元素有: img，input，select， textarea。
- FireFox 不支持的元素有: input，select，textarea。
- Chrome 不支持的元素有: input[type=text]，textarea。