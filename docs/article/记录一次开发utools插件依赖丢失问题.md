## 记录一次开发utools插件依赖丢失问题


事情是这样子的，我打开我的插件评论页面时，突然看到一条评论

![20231101150024](https://raw.githubusercontent.com/QC2168/note-img/main/20231101150024.png)

> 正常情况下应该是当屏幕捕获完成之后，会弹出一个编辑窗口并且加载用户的屏幕截取区域
>
> 但现在是窗口弹出来了，图片数据并没有加载成功

于是，我在我自己电脑上尝试复现这个问题

发现这个问题，只存在于生产环境，开发环境下载是没有问题的

但是问题又来了，我在生产环境下我应该如何去进行`debug`，寻找问题的源头？

因为在`utools`插件中，我不能像平时一样呼唤出`devTools`工具面板，也不能在`terminal`中查看相关的输出日志


## 定位问题

### 翻阅Commit

由于在线上无法使用`devTools`，我使用了一个笨办法来排查这个`Bug`

我在我发布的这个版本的`commit`之前一条一条进行打包测试

经过条条测试，终于在某一条`commit`中，发现了这个问题

我大海捞针的开始翻阅这些变动的文件...

### Debug App

我开始向社区寻求帮助

### eruda

> `eruda`是一个用于在移动网页上进行前端开发和调试的轻量级工具，提供控制台、网络请求监控、元素查看、性能分析等功能

尝试了使用`eruda`工具进行排查

你猜怎么着，遇到了类似的问题

当我在开发环境下，`eruda`是可以正常使用的，但是到了生产环境无法正常显示出`eruda`的控制按钮

![20231102162741](https://raw.githubusercontent.com/QC2168/note-img/main/20231102162741.png)

![20231102162448](https://raw.githubusercontent.com/QC2168/note-img/main/20231102162448.png)

### debugtron

> `debugtron`是一个用于调试生产环境的electron应用工具

突然，社群里的出现了一位大佬，让我使用`debugtron`进行调试看看是出现了什么问题

于是，下载了最新版本的`debugtron`，进行调试

不出意外的话，就出意外了~

我使用debugtron进行调试utools的时候，出现了闪退的情况

![debug-utools-failed](https://raw.githubusercontent.com/QC2168/note-img/main/debug-utools-failed.gif)

经过和大佬一番交流，得知`debugtron`调试，是在启动应用的时候添加上命令行参数触发`debug`功能的，而`utools`内部可能阻止的进程调试方面的功能导致我们无法使用`debugtron`进行调试

![20231102135933](https://raw.githubusercontent.com/QC2168/note-img/main/20231102135933.png)

感谢大佬，还帮我`patch`了一个调试`utools`的版本

![20231102152925](https://raw.githubusercontent.com/QC2168/note-img/main/20231102152925.png)

我又进行了跑一遍插件，这次终于找到问题的源头了

![20231102160833](https://raw.githubusercontent.com/QC2168/note-img/main/20231102160833.png)

原来问题出在项目里的`preload.js`中，我使用了第三方的依赖库(`fs-extra`)，在打包成插件的时候没有将它打包进去所导致的

而开发环境中，代码是在项目`/dist`文件夹里，是可以直接访问到`node_modules`文件夹里的依赖包的，所以在跑的时候没有出现问题

### 关于Patch版本

后面和大佬交流后，原来是启动`electron`应用的时候，可以添加上相应的`debug`参数，使应用呼出`devTools`面板，在生产环境中也能调试应用

而这个版本改动了启用应用的代码，将`inspect`参数取消

> 不过这会导致我们无法对主线程进行调试，但是问题也不大，因为我们是要调试插件（子窗口的数据）渲染进程

![20231102133301](https://raw.githubusercontent.com/QC2168/note-img/main/20231102133301.png)

这是`debugtron`项目中的源码，代码位置在[main/src/main/actions.ts](https://github.com/pd4d10/debugtron/blob/main/src/main/actions.ts#L53)

### 解决问题

现在已经得知是`preload.js`中没有依赖包所导致的错误，我们可以使用构建工具将`preload.js`中所需的依赖打包进`preload.js`即可

这里我选中了`rollup`作为打包工具，安装它和一些相关插件

> 也可以直接将第三方库的`min.js`移动到项目里，但是这样子做的话，后续增加依赖会比较麻烦些

```bash
pnpm install rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve
```

在项目根目录中，新建`rollup.config.mjs`文件，作为`rollup`的配置文件

```JavaScript
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
export default {
  input: './electron/preload.js',
  output: {
    file: './dist/electron/preload.js',
    format: 'cjs'
  },
  plugins: [nodeResolve(),commonjs() ],
  external:['electron']
};
```

这段代码的功能是将项目中的`electron/preload.js`文件进行一个打包操作，在打包的时候将我们所引用的依赖库也同时打包进去

在这里，我们不要把`electron`也打包进去，因为它到时要使用到的是`utools`中的`electron`，所以我们用`external`字段将它排除

修改后，当我们要构建插件的时候，需要多跑一下`rollup`指令进行处理

经过打包后的`preload.js`，依赖丢失的问题也就解决了😊
