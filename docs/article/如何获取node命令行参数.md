---
title: 如何获取node命令行中参数
tags: [JavaScript]
---

## 如何获取node命令行中参数

在开发`cli`工具时，往往离不开获取指令中各种参数信息，接下来本文将带着你如何在`Node.js`中获取执行时的参数

## 认识process
`process`是`nodejs`内置的一个对象，该对象提供了当前有关`nodejs`进程的信息。（例如获取当前进程id，执行平台等与当前执行进程相关的对象和方法）
> [node process文档](https://nodejs.org/api/process.html#process)

## process.arg
在该对象中，有一个`argv`属性，它可以获取当前`node`执行时传入各个参数数据。

我们创建一个`index.js`文件，先打印下`process.argv`里面是什么东西
```JavaScript
console.log(process.argv)
// node index.js
[
  'D:\\software\\nodejs\\node.exe',
  'D:\\project\\script\\src\\index.js'
]
```
从上面的输出结果，可以得到当前执行的`node`程序路径(也就是`process.execPath`返回值)和执行的文件（`index.js`）路径，我们像使用其他`cli`工具一样添加一些参数试试
```bash
node index.js name=zhangsan age=18
```
```JavaScript
[
  'D:\\software\\nodejs\\node.exe',
  'D:\\project\\script\\src\\index.js',
  'name=zhangsan',
  'age=18'
]
```
可以看到我们传入的`name`参数与`age`参数也被获取到了
> 需要注意的是argv中的参数是通过空格来分割的

通常，我们会在命令行每个参数前面添加`--`字符，用来识别传入的各个参数。（这种是`GNU`风格的命令行参数，以`--`开头，也是比较常见的）

例如在`esbuild`构建工具中
```bash
esbuild app.jsx --bundle --outfile=out.js
```
例如在`vite`构建工具中
```bash
vite --config my-config.js
```

除了上面的`GNU`风格，常见的还有`UNIX`风格，以`-`开头的，例如下面命令获取当前目录下文件，文件夹详情。
```bash
ls -l
```
你是不是会想到了最常用的`npm`了？
没错，它即是使用`UNIX`风格
```
npm i -d esbuild
```

继续我们步骤，修改一下上面的命令为
```bash
node index.js --name=zhangsan --age=18
```
将会得到如下输出结果
```JavaScript
[
  'D:\\software\\nodejs\\node.exe',
  'D:\\project\\script\\src\\index.js',
  '--name=zhangsan',
  '--age=18'
]
```
## 封装获取参数函数
从上面两个例子和官方文档中，我们可以得知argv的前两个参数都是固定的，在获取用户传入的参数我们需要`process.argv.slice(2)`一下,只获取从下标2开始的元素。
也即是
```bash
[
  '--name=zhangsan',
  '--age=18'
]
```
有了这些数据之后，我们需要再进一步解构里面的参数，将前面的`--`去除掉，把`key=value`改变成`{key:value}`方便我们在开发中进行参数获取。
最终我们得到了这样子的函数：
- 获`process.argv`数组，并切片从下标2开始
- 判断数组中的每个值是否为`--`开头，是则视为用户传入参数
- 同样进行切片操作，获取下标2开始的字符，再通过`=`区分出对应的`key`和`value`，其返回的是`[key,value]`
- 最后，将这个二维数组传入到`Object.fromEntries`转换为一个对象
```typescript
const arguments = process.argv.slice(2);
const params = Object.fromEntries(
  arguments.reduce((pre, item) => {
    if (item.startsWith("--")) {
      return [...pre, item.slice(2).split("=")];
    }
    return pre;
  }, []),
);
console.log(params)
// { name: 'zhangsan', age: '18' }
```
当然，上面这个只是简单的获取参数的函数，也没有一些边界情况（例如出现`foo=bar=baz`参数等情况）。
### 相关的解析库
在`github`上也有一些成熟的命令行参数解析库，感兴趣的同学也可以看看源码🍔🍔

- [mri](https://github.com/lukeed/mri)
- [yargs-parser](https://github.com/yargs/yargs-parser)
- [minimist](https://github.com/minimistjs/minimist)

😊 如果您觉得这一篇文章对您有所帮助，请点个👍 🌹🌹