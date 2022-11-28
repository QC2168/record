---
title: CSS涟漪按钮
tags: [CSS]
---

#### 前言

在前端项目中，我们常常会使用到`button`组件进行事件的触发，而一些项目为了更好的交互效果，加入了一系列的动画，例如：脉冲、果冻、涟漪、滑箱等特效。

今天我们来讲讲如何使用`HTML` `CSS`和`JavaScript`来实现涟漪效果，我们先看下成品:

![1](https://raw.githubusercontent.com/QC2168/note-img/main/202203161628917.gif)

![5](https://raw.githubusercontent.com/QC2168/note-img/main/202203161628444.png)

看完是不是也想给自己项目整一个这样子的效果😎😎

#### 原理

如图，我们需要两个元素来实现这个涟漪效果，当`button`被点击时，在`button`元素中放置一个元素，执行一个绽开动画效果，执行完毕后把`buttion`里的元素移除。

![2](https://raw.githubusercontent.com/QC2168/note-img/main/202203161628502.png)



#### 用码实现

##### 码出基本样式

先创建一对`div`标签，作为一个基础按钮元素。后面我们将这对div称之为按钮。

```html
<div id="btn" class="button">Click me</div>
```

为按钮添加基本样式，这里需要给按钮设定`position：relative`，后续我们涟漪效果是通过绝对定位来实现的。

```css
.button {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    display: inline-block;
    color: #fff;
    padding: 14px 40px;
    background: linear-gradient(90deg, #0bc7f1, #c471ed);
    border-radius: 45px;
    margin: 0 15px;
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;
    overflow: hidden;
    box-shadow: 1px 1px 3px #7459e9;
}
```

![3](https://raw.githubusercontent.com/QC2168/note-img/main/202203161628918.png)

当样式写完之后我们按钮的样式就跟效果图上的按钮一模一样了，由于我们`JavaScript`部分还没有写以及实现涟漪效果还没有实现，此时我们点击按钮是没有涟漪效果的，接下来我们要就添加涟漪效果了。

👇  👇  👇  继续往下看  👇  👇  👇

##### 码出链漪

给按钮添加一个涟漪效果，在按钮`div`中添加一个`span`标签，并绑定一个`overlay`类

```html
<div id="btn" class="button">
    Click me
    <span class="overlay"></span>
</div>
```

这个`span`标签是我们要实现涟漪效果的元素，给元素设置绝对定位，让元素脱离文件流，不为该元素预留出空间。默认我们定义在`top:0`和`left:0`，再通过`transform`属性将元素偏移居中对齐。透明度设置`0.5`，绑定一个`blink`帧动画函数。

```css
.overlay {
    position: absolute;
    height: 400px;
    width: 400px;
    background-color: #fff;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: .5;
    animation: blink .5s linear infinite;
}
```

添加一个帧动画，命名为`blink`，将`span`元素的宽度，高度从`0px`过渡到`400px`，及透明度从设定的`0.5`过渡到0，渐渐向外绽开，这样子就形成了涟漪效果了，当我们把`span`元素挂载上去我们可以看下效果，接下来我们将通过JavaScript来获取鼠标点击位置来决定绽开的位置。

![4](https://raw.githubusercontent.com/QC2168/note-img/main/202203161628919.gif)

**注意**

把`div`中的`span`标签**删除或者注释掉**，后面我们将使用JavaScript来添加这个`span`标签

把`div`中的`span`标签**删除或者注释掉**，后面我们将使用JavaScript来添加这个`span`标签

把`div`中的`span`标签**删除或者注释掉**，后面我们将使用JavaScript来添加这个`span`标签

##### 码出点击效果

这里我们先引入`jQuery`这个库，为了方便使用，这里我就使用`cdn`方式来引入。

> 这里给大家推荐一个国内的CDN库：[www.bootcdn.cn](https://www.bootcdn.cn/)

```javascript
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js"></script>
```

创建一个`addRipple`方法，先创建一个绑定overlay类的span标签，获取鼠标点击页面的`x`和`y`值，绑定对应的`left`值和`top`值，绑定之后把span元素添加到div中。

设定一个定时器，当动画执行完毕后把`span`元素移除掉，减少内存的占用。

```javascript
const addRipple = function (e) {
    let overlay = $("<span class='overlay'></span>")
    const x = e.clientX - e.target.offsetLeft
    const y = e.clientY - e.target.offsetTop;
    overlay.css(
        {
            left: x + 'px',
            top: y + 'px'
        }
    )
    $(this).append(overlay)
    setTimeout(() => {
        overlay.remove()
    }, 500)
}
```

给`div`绑定`addRipple`事件，按钮就实现跟开头效果图一样的页面啦！

```javascript
$('#btn').click(addRipple);
```

![1](https://raw.githubusercontent.com/QC2168/note-img/main/202203161628917.gif)

![5](https://raw.githubusercontent.com/QC2168/note-img/main/202203161628920.png)

#### 最后

😉 如果你觉得本文对你有所帮助 请留个赞 😉