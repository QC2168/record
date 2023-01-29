## BFC

指的是`Block Formatting Context`（"块级格式化上下文"），它是一个独立的布局环境，BFC里面的元素不会影响到外面的布局。

### 触发BFC

- 根元素为html
- `overflow: hidden`
- `display: inline-block/table-cell/flex`
- `position: absolute/fixed`
- `float`不为`none`

### BFC的使用场景

- 去除边距重叠现象
- 清除浮动（让父元素的高度包含子浮动元素）
- 避免某元素被浮动元素覆盖
- 避免多列布局由于宽度计算四舍五入而自动换行

### BFC解决了什么问题

#### margin重叠
```html
<div>
  <p>1</p>
</div>
<div>
  <p>2</p>
</div>
```
```css
p{
  margin:100px 0;
}
div{
  overflow:hidden
}
```
未启用BFC特性
::: raw
<div style="border:1px solid gray;">
  <div>
    <p style="margin:100px 0;">1</p>
  </div>
  <div>
    <p style="margin:100px 0;">2</p>
  </div>
</div>
:::
启用BFC特性
::: raw
<div style="border:1px solid gray;">
  <div style="overflow:hidden;">
    <p style="margin:100px 0;">1</p>
  </div>
  <div style="overflow:hidden">
    <p style="margin:100px 0;">2</p>
  </div>
</div>
<br>
:::


#### 高度坍塌

```html
    <div class="container">
        <div class="box"></div>
    </div>
```

```css
.box {
       margin: 100px;
       width: 100px;
       height: 100px;
       background: red;
       float: left;
}

.container {
    background: #000;
    /* 解决高度坍塌 */
    /* 关闭它，会导致高度没有被撑开，不会显示背景颜色 */
    overflow:hidden;
}
```

启用BFC特性

::: raw
<div style="
  background: #000;
  overflow:hidden;
">
    <div style="
    margin: 100px;
    width: 100px;
    height: 100px;
    background: red;
    float: left;"
    ></div>
</div>
<br>
:::


#### 防止元素被浮动元素遮挡住

第二个元素如果没有触发BFC特性，会被浮动的元素所覆盖


```html
<div class="left">左浮动的元素</div>
<div class="right">
普通的元素普通的元素普通的元素普通的元素普通的元素普通的元素普通  的元素普通的元素普通的元素
</div>
```
```css
.left{
  height: 200px;
  width: 100px;
  float: left;
  background: red;
}
.right{
  width: 300px;
  height: 300px;
  background: gray;
  /* 解决元素覆盖问题，启用BFC */
  overflow:hidden;
}
```
未启用BFC特性
::: raw
<div style="
  height: 200px;
  width: 100px;
  float: left;
  background: red;
  ">左浮动的元素</div>
<div style="
  width: 300px; 
  height: 300px;
  background: gray;
  ">
普通的元素普通的元素普通的元素普通的元素普通的元素普通的元素普通  的元素普通的元素普通的元素
</div>
:::
启用BFC特性
::: raw
<div style="
  height: 200px;
  width: 100px;
  float: left;
  background: red;
  ">左浮动的元素</div>
<div style="
  width: 300px; 
  height: 300px;
  background: gray;
  overflow:hidden;">
普通的元素普通的元素普通的元素普通的元素普通的元素普通的元素普通  的元素普通的元素普通的元素
</div>
:::