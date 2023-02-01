---
title: Label标签的作用
tags: [HTML]
---

## Label标签的作用

用来定义标志表单控件，它不会显示出来，但是它改进了可用性，如果您点击了`label`标签内的文本，就会触发对应的控件。

```html
<form>
  <label for="car">汽车</label>
  <input type="radio" name="type" id="car" value="car"><br>
  <label for="airplane">飞机</label>
  <input type="radio" name="type" id="airplane" value="airplane"><br><br>
</form>
```


::: raw
<form>
  <label for="car">汽车</label>
  <input type="radio" name="type" id="car" value="car"><br>
  <label for="airplane">飞机</label>
  <input type="radio" name="type" id="airplane" value="airplane"><br><br>
</form>

:::