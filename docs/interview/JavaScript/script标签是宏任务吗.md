---
title: script标签是宏任务吗
tags: [JavaScript]
---

## script标签是宏任务吗

- **外部脚本** `External Scripts`
  - 即通过`src`属性引入的外部脚本文件，这种脚本文件的加载和执行会被视为宏任务。
- **内部脚本** `Inline Scripts`
  - 即直接在`script`标签内编写的脚本，这种脚本的执行会被视为微任务。

### 验证

#### 外部脚本

```html
<script>
    console.log(1)
    setTimeout(() => {
        console.log(2)
    }, 0);
</script>
<script>
    console.log(3)
</script>
<!-- index console.log(4) -->
<!-- 这里的script是宏任务 -->
<script src="./index.js"></script>
```
> 上面这段代码输出顺序是1324
>
> 因为script是宏任务，所以log2比log4先运行

#### 内部脚本

```html
<script>
    console.log(1)
    setTimeout(() => {
        console.log(2)
    }, 0);
</script>
<script>
    console.log(3)
</script>
<script>
   console.log(4)
</script>
```

> 上面这段代码输出顺序是1342
>
> 因为script是微任务，所以log4比log2先运行