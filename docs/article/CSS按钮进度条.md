---
title: CSS按钮进度条
tags: [CSS]
---


## 前言

在一些前端项目中，它们会涉及文件的上传 / 下载 功能，当文件在进行上传 / 下载时，我们该怎么更好的向用户进行进度反馈呢？我们常见的有弹窗式进度条、吸顶式进度条 ...

本篇章将给大家带来**按钮式进度条**，并手把手带领大家一步步的从零手写按钮式进度条 👨‍💻

**话不多说，先看看成品再码**

## 实现效果

![1](https://raw.githubusercontent.com/QC2168/note-img/main/202203161632523.gif)

## 原理

创建一个`div`作为按钮的总体，在按钮里边放入`3`个`div`，分别是进度条元素，图标元素，文本元素，我们将按钮设置为相对定位，将进度条元素设置为绝对定位，利用`top`和`left`值来控制进度条，让我们用码实现！

![2](https://raw.githubusercontent.com/QC2168/note-img/main/202203161632524.png)

## 用码实现

## 码出基本样式

```html
<div class="button">
    <span class="text">download</span>
</div>
```

```css
 .button {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 160px;
        height: 40px;
        color: black;
        background: white;
        border-radius: 10px;
        margin: 0 15px;
        font-size: 18px;
        text-decoration: none;
        overflow: hidden;
    }
```

![](https://raw.githubusercontent.com/QC2168/note-img/main/202203161632525.png)

很快，我们按钮的基本样式已经写出来了，接下来我们先实现进度条效果，在`.button`元素下创建一个`span`标签，并绑定上一个``progress`类名作为进度条元素。这里不能使用伪元素，因为后续我们需要使用`JavaScript`来控制按钮的状态。而伪元素是不能通过`JavaScript`被查找到的。

> 后续我会出一篇关于伪元素的文章 关注我 不迷路 😉 😉

```html
<div class="button">
    <span class="text">download</span>
    <span class="progress"></span>
</div>
```

把进度条元素的样式写上

```JavaScript
.progress {
    content: '';
    position: absolute;
    top: 90%;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #4776E6; 
    background: -webkit-linear-gradient(to right, #8E54E9, #4776E6); 
    background: linear-gradient(to right, #8E54E9, #4776E6); 
    transition: all 4s;
  }
```

我们先把`overflow`的`hidden`属性注释掉，可以看到现在`.progress`元素位于按钮元素的左下边。露出`10%`的高度显示在按钮可见范围中。后面我们通过`JavaScript`的`API`来获取到`.progress`元素，控制该元素的`left`值就可以实现进度条效果啦！

![4](https://raw.githubusercontent.com/QC2168/note-img/main/202203161632526.png)

## 码出下载效果

我们使用`JavaScript`中`querySelectorAll`方法，获取`.button`和`.progress`元素，及`.text`元素。

```javascript
const btn = document.querySelectorAll('.button')[0];
const pr = document.querySelectorAll('.progress')[0];
const text = document.querySelectorAll('.text')[0];
```

给`.button`元素添加点击事件，当按钮被点击时我们将按钮的`left`值设置为`0`，也就是进度`100%`的效果。

```javascript
btn.addEventListener('click', () => {
  pr.style.left = '0';
});
```

![5](https://raw.githubusercontent.com/QC2168/note-img/main/202203161632527.gif)

接下来，我们把按钮元素的`overflow`属性设置为`hidden`时。

![6](https://raw.githubusercontent.com/QC2168/note-img/main/202203161632528.gif)

到了这里，我们已经完成了进度条效果，但对比效果图还是差了那么一点点，当进度条到`100%`之后，我们需要将`.progress`元素的`top`值设置为`0`，把整块元素上移。在点击事件后加入以下代码：

```javascript
setTimeout(() => {
  pr.style.top = '0';
  pr.style.transitionDuration = '1s';
  text.style.color = 'white';
  text.innerText = 'downloaded';
}, 4000);
```

另外，在`.progress`元素上移后它会将我们的`.text`元素覆盖上去，为此我们需要将`.text`的层级提升下。

```css
.text{
        z-index: 10;
    }
```

![7](https://raw.githubusercontent.com/QC2168/note-img/main/202203161632529.gif)

## 引入图标

在`HTML`中引入 `font awesome`这个图标库。

```html
  <link href="https://cdn.bootcdn.net/ajax/libs/font-awesome/5.15.3/css/all.css" rel="stylesheet">
```

我们需要用到的图标分别：

```html
<i class="fa fa-arrow-down" aria-hidden="true"></i>
<i class="fa fa-download" aria-hidden="true"></i>
<i class="fa fa-check" aria-hidden="true"></i>
```

我们在`.button`元素中插入这个`i`标签，为了图标不被进度条元素覆盖，同样把层级设置为`10`。

```html
<i class="fa fa-arrow-down" aria-hidden="true"></i>
```

```css
i {
    margin: 0 8px 0 0;
    font-size: 16px;
    z-index: 10;
  }
```

![8](https://raw.githubusercontent.com/QC2168/note-img/main/202203161632530.png)

给这个图标设置一个循环动画，这样可以用来吸引用户眼球从而促使去点击它 。

```css
@keyframes tapDownload {
  0% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}

.fa-arrow-down{
    animation: tapDownload 1s ease infinite;
}
```

![9](https://raw.githubusercontent.com/QC2168/note-img/main/202203161632531.gif)

加了这个动效之后，用户是不是更有点击欲啦？

## 动态更换图标

同样，我们使用`JavaScript`中`querySelectorAll`方法，获取`icon`元素。

```javascript
const icon = document.querySelectorAll('.fa')[0];
```

通过对比上面三个图标元素，我们发现它们都有共同的类名为fa，而不同的是后面`fa-*`这个类，当按钮状态改变时就将对应的类名移除后再添加上新的类名即可，在按钮的点击事件中添加以下代码：

```javascript
btn.addEventListener('click', () => {
  pr.style.left = '0';
  icon.classList.remove('fa-arrow-down');
  icon.classList.add('fa-download');
  text.innerText = 'downloading';
  setTimeout(() => {
    // 忽略了一些代码
    icon.style.color = 'white';
    icon.classList.remove('fa-download');
    icon.classList.add('fa-check');
  }, 4000);
});
```

在下载过程中，我们给下载图标的`fa-download`类绑定一个帧动画。

```css
@keyframes downloading {
  0% {
    transform: scale(.7);
  }
  100% {
    transform: scale(1);
  }
}

.fa-download {
    animation: downloading 1s ease infinite alternate-reverse;
  }
```

![10](https://raw.githubusercontent.com/QC2168/note-img/main/202203161632532.gif)

## 最后

本文带着大家从零实现到一个进度条按钮，使用前端三件套`HTML` `CSS` `JavaScript`以及到`CSS`动画。还有引入的`font awesome`库。希望大家能从中有所收获，写出更好更炫酷的动画效果、

😉 如果你觉得本文对你有所帮助 请留个赞 😉

