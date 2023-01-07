---
title: CSS常见布局
tags: [CSS]
---

## CSS常见布局

### 文档流布局

这是一个基本布局方式，根据元素的顺序一个一个渲染出来到页面中，其中块元素占据一行的空间，行内元素可以共享一行空间

```html

<div>我占据一行的空间</div>
<div>我占据一行的空间</div>
<br>
<div>
    <span>我是行内元素，可以与其他行内元素共享在一行里</span>
    <span>我是行内元素，可以与其他行内元素共享在一行里</span>
</div>
```

### 浮动布局

当元素设定了float属性，它将脱离文档流，浮动在外部。

[了解更多float属性用法(MDN)](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Floats)

```html

<div>
    <div style="float: left">《我是浮动的元素》</div>
    <div>我占据一行的空间</div>
    <div>我占据一行的空间</div>
</div>
```

> 注意 float元素脱离了文档流后，无法支撑起父元素的高度，会造成父级元素的高度塌陷

### 定位布局

当元素被设定了position定位属性，可以实现固定其元素的位置

[了解更多position属性用法(MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

```html

<div>我占据一行的空间</div>
<div>我占据一行的空间</div>
<div>我占据一行的空间</div>
<div class="box">
</div>
```

```css
.box {
    width: 50px;
    height: 50px;
    background: red;
    position: absolute;
    top: 20px;
    left: 20px;
}
```

## flex布局

也叫flexbox布局（全称为Flexible Box，意为弹性布局，为盒模型提供最大的灵活性），它是一个一维布局，它的子元素之间提供了强大的空间分布和对齐能力

> 一维布局指flexbox一次只能处理一个维度上的元素布局，一行或者一列。（引用MDN）

### flex布局中的属性

### flex mode

使用flex布局这个就不用说了吧

```css
.box {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    display: -webkit-inline-flex;
}
```

> webkit内核的浏览器需要添加上-webkit前缀
> 如果flex布局子元素设置了float和clear，vertical-align属性会失效。

### flex-direction

flex的核心是两根轴线，分别是主轴（main-axis）和交叉轴（cross axis）

主轴由flex-direction定义，交叉轴垂直于它。

在主轴上，flex-direction属性可以被设置为：

`row`（默认值） ：主轴将向当前行（inline）延伸，起点在左边

`row-reverse` ：主轴将向当前行（inline）延伸，起点在右边

`column` ：主轴方向为垂直方式，起点在顶部

`column-reverse` ：主轴方向为垂直方式，起点在底部

### flex-wrap

flex是一维布局，如果我们需要子元素自动换行，需要设定一个flex-wrap属性（值为wrap）

> 当一行的空间存放不下子元素时，默认是nowrap属性会导致溢出/缩小

```html

<div class="box">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>

```

```css
.box {
    display: flex;
    /*自动换行*/
    flex-wrap: wrap;
}
```

### flex-flow

该属性是上面的flex-direction 和 flex-wrap 组合

```css
.box {
    display: flex;
    /*等价与
    flex-direction:row;
    flex-wrap: wrap;
    */
    flex-flow: row wrap;
}
```

### flex-grow

用于按比例分配当前flex布局中的可用空间

```html

<div class="box">
    <div>1</div>
    <div>2</div>
    <div>3</div>
</div>
```

```css
.box {
    width: 300px;
    display: flex;
    flex-direction: row;
    border: #eee solid 1px
}

.box div:nth-child(1) {
    width: 50px;
    flex-grow: 2;
}

.box div:nth-child(2) {
    width: 50px;
    flex-grow: 1;
}

.box div:nth-child(3) {
    width: 50px;
    flex-grow: 1;
}
```

> 总空间300px，剩余空间150px，第一个div占用剩余空间37.5*2，剩下两个div占据剩余空间37.5

### flex-basis

用于定义元素空间大小，默认为auto，如果这个元素设定了宽度为50px，那元素flex-basis值为50px

```css
.box {
    width: 300px;
    display: flex;
    flex-direction: row;
    border: #eee solid 1px;
}

.box div:nth-child(1) {
    width: 50px;
    flex-basis: 100px;
}

.box div:nth-child(2) {
    width: 50px;
}

.box div:nth-child(3) {
    width: 50px;
}
```

> 等价于div[0]宽度为100px,其他另外两个div宽度为50px
> 这就解释了，为什么flex布局默认情况下，元素都在一行内

除了值是设置固定的`width`,也可以为`fill`、`max-content`、`min-content`、`fit-content`、`content`

### flex属性简写

该属性是上面的`flex-grow`，`flex-shrink`，`flex-basis`组合

```css
.item {
    /*等价于
    flex-grow:1;
    flex-shrink:1;
    flex-basis:auto;
    */
    flex: 1 1 auto;
}
```

可能还会见到一些写法

| 属性            | 等价于            | 说明                        |
|---------------|----------------|---------------------------|
| flex: initial | flex: 0 1 auto | shrink值为1,可以缩小flex元素,防止溢出 |
| flex: auto    | flex: 1 1 auto | flex元素在需要时自动拉伸和收缩         |
| flex: none    | flex: 0 0 auto | 不可拉伸和收缩,但根据元素大小来布局        |
| flex: 1       | flex: 1 1 0    | 按比例占据剩余的空间和收缩             |
| flex: 2       | flex: 2 2 0    | 同上                        |

### align-items

用于元素在交叉轴方向的对齐方式

```css
.box{
    align-items: flex-start;    // 交叉轴的起点对齐
    align-items: flex-end;      // 交叉轴的终点对齐
    align-items: center;        // 交叉轴的中点对齐
    align-items: stretch;       // 默认值,当元素未设置高度或设为auto，将占满整个容器的高度。
}
```
### justify-content

用于定义了项目在主轴上的对齐方式

```css
.box{
    justify-content: flex-start;   // 默认值,左对齐
    justify-content: flex-end;     // 右对齐
    justify-content: center;       // 居中
    justify-content: space-between;// 两端对齐，项目之间的间隔平均分布。
    justify-content: space-around; // 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍
}
```

### align-content

用于定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box{
    align-content: flex-start;   // 与交叉轴的起点对齐
    align-content: flex-end;     // 与交叉轴的终点对齐
    align-content: center;       // 与交叉轴的中点对齐
    align-content: space-between;// 与交叉轴两端对齐，轴线之间的间隔平均分布。
    align-content: space-around; // 每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍
    align-content: stretch;     // 默认 轴线占满整个交叉轴
}
```

### align-self

子元素设定align-self属性,可以让元素单独使用指定的对齐方式,覆盖父元素的align-items属性,属性值与align-items一样


### 默认flex元素属性

flex-direction为row
flex-basis为auto
flex-wrap为nowrap
align-items为stretch

### 经典的flex布局例子

- [导航栏](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#%E5%AF%BC%E8%88%AA)
- [导航栏(拆分)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#%E6%8B%86%E5%88%86%E5%AF%BC%E8%88%AA)
- [元素居中](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#%E5%85%83%E7%B4%A0%E5%B1%85%E4%B8%AD)
- [绝对底部](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#%E7%BB%9D%E5%AF%B9%E5%BA%95%E9%83%A8)
- [媒体对象](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox#%E5%AA%92%E4%BD%93%E5%AF%B9%E8%B1%A1)
- 
### 参考资料
- [flex 布局的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Flexbox 典型用例](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)
- [flex 布局的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)