## 找不到合适的软件，那我就用JS自己开源了一个

`MIB`是一款基于`Node.js`和`ADB`的开发的备份工具，根据你的配置自动将移动设备上的数据文件迁移备份至电脑上，支持增量备份

## 故事起因

不知道大家有没有一种习惯，比如说今天去外边游玩看到了一些有趣的事件，景色会拿起手机将这一瞬间拍下来，等游玩结束后会将这些图片、视频移动到云端或者存储设备上

我是有这个习惯，但是每次都要自己手动来拉取这些拍摄数据有点繁琐，而且有些时候还会遇到个问题，这个图片我本地磁盘有了吗，我这次还要不要拉取它？

![3xdqY](https://raw.githubusercontent.com/QC2168/note-img/main/3xdqY.gif)

## 琢磨开发

前面也找了一些备份数据，但找了一圈没有发现适合我的

于是，我自己开始琢磨我能不能写一个小工具实现我的这个需求

通过了一些资料查询，我可以通过`ADB`的方式与手机设备进行互动，其中就包括了实现文件之间的传输功能`pull / push`

```shell
adb pull [安卓设备文件地址] [本地地址]
```

> `ADB`是`Android`调试桥，它允许开发人员通过`USB/Wi-Fi`连接与`Android`设备通信。可用于安装和调试应用程序，访问设备的文件系统，运行`shell`命令等等


## 编写第一版

在知道了这个指令之后，我使用`node.js`开始编写第一版[MIB](https://github.com/QC2168/mib)，那个时候还不是图形化界面的，而是像`vue-cli`一样通过命令行方式信息交互进行的

![mib-cli_backuping](https://raw.githubusercontent.com/QC2168/note-img/main/mib-cli_backuping.gif)


## 可视化的开始

经过一段时间的使用`MIB`后，我逐渐开始思考如何将其扩展到图形化方面，让其使用起来更加方便~

![b201j](https://raw.githubusercontent.com/QC2168/note-img/main/b201j.gif)

我将技术栈选中了`React+Electron`，那个时候对`react+ts`并还不是很熟悉，在开发的过程也遇到挺多的小问题，但也是这些小问题让我在前端开发的路上认识到更多的知识点~

经过了一段时间的开发，现在图形化版本基本是开发完成了，主界面如下

![20230627174134](https://raw.githubusercontent.com/QC2168/note-img/main/20230627174134.png)

## 在图形化中的优化

### 配置文件更改

通过从命令行方式转变为图形化界面，已将之前繁琐的手动修改配置文件的操作变得更加直观

现在可以通过可视化的界面来完成这些配置参数的设置，并且在这个过程中还增加了约束机制，以防止无效参数的填写，降低出错的风险

![20230614195157](https://raw.githubusercontent.com/QC2168/note-img/main/20230614195157.png)

### 任务执行状态

当在命令行中运行程序时，有时可能会出现程序看起来停滞不前的情况，可能导致用户感到困惑和不安

为了提高用户体验，在图像化界面中，使用`loading`效果的动画来告知用户，当前任务正在进行处理

这样一来，用户就能够清楚地知道程序正在工作，而不是被卡住了

![mib_backuping](https://raw.githubusercontent.com/QC2168/note-img/main/mib_backuping.gif)

![Animation](https://raw.githubusercontent.com/QC2168/note-img/main/Animation.gif)

### 文件类型分析

另外，我还将写了个小功能，可以帮助识别备份目录中各种文件类型的占比情况，并且绘制成直观的饼状图

能更容易了解备份目录中不同类型文件的占比，有助于更好地管理备份数据

![20230627180035](https://raw.githubusercontent.com/QC2168/note-img/main/20230627180035.png)


## 项目地址

GITHUB：[mib](https://github.com/QC2168/mib)

码云：[mib](https://gitee.com/QC2168/mib)
