## BFC

指的是`Block Formatting Context`（"块级格式化上下文"），它是一个独立的布局环境，BFC里面的元素不会影响到外面的布局。

### 触发BFC

比较常见触发BFC的CSS属性有
- `overflow: hidden`
- `display: inline-block`
- `position: absolute`
- `position: fixed`
- `display: table-cell`
- `display: flex`

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
::: raw

<div style="overflow:hidden">
  <p style="margin:100px 0;">1</p>
</div>
<div style="overflow:hidden">
  <p style="margin:100px 0;">2</p>
</div>

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

#### 