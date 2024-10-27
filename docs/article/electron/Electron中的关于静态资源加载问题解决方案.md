## Electron中的关于静态资源加载问题解决方案

今天来给大家分享一个比较实用的npm包，`electron-serve`

它是用来干嘛的呢

通常，我们在使用`electron`框架的时候会使用到`loadFile`/`loadURL`进行页面的加载，分别是加载本地文件和加载网络文件

在构建生产环境中，当我们使用`loadFile`加载本地文件的时候可能会出现资源找不到的情况，（`net::ERR FILE NOT FOUND`）

这是因为我们构建出来的产物中资源引入路径出现了问题

比如您使用了`Vite`构建工具，您需要在`vite.config.ts`将`base`属性设置为`./`，告诉`Vite`我的资源路径都是相对于当前页面的目录的

那么，在`electron`中引入是没问题的，但事情总不是那么一帆风顺的

当`nuxtjs/nextjs`想引入到`electron`中显示时，你会遇到资源路径引用的问题(如下图)

![20241027125749](https://raw.githubusercontent.com/QC2168/note-img/main/20241027125749.png)

那么这个问题怎么解决，前面我们提到只要将`base`设置`./`，就可以解决这个问题，但在`nuxt`中这并不能生效

![20241027130300](https://raw.githubusercontent.com/QC2168/note-img/main/20241027130300.png)

它还是以一个绝对路径的方式去寻找它的依赖，所以还是会出现找不到的问题

这个时候，我们可以换一种解决方式，不应该一头扎进`base`里

我们是不是可以像开发环境一样开一个`devServer`来解决这个问题？

## electron-serve

这就到了本篇文章的主角，`electron-serve`登场了

```bash
pnpm install electron-serve
```

它是一个在electron中开启静态服务器的`npm`包，让我们可以以网络协议的方式去访问我们的静态资源

> 它的实现了很简单，这个晚点会讲

我们使用它也是很简单的，只要在`electron`主线程中的`main.js/ts`中引入它，并调用它的`serve`方法即可

```typescript
import serve from 'electron-serve'

// 这里填写我们的静态资源目录
serve({ directory: 'renderer' })


function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
  })
  // 通过app协议去访问静态资源，这个是electron-serve中处理的，我们只需要这样子写就可以了
  mainWindow.loadURL('app://./index.html')
}
```

配置好之后，我们再运行一下项目，这时你就会发现找不到资源的问题已经得到解决了

![20241027131327](https://raw.githubusercontent.com/QC2168/note-img/main/20241027131327.png)


另外，这个库还解决了一个问题：当我们使用`loadFile`加载本地文件时，是无法正常使用`vue-router`/`react-router`中的`history`模式的。因为这些路由机制依赖于`history.pushState`，因为`loadFile`使用的是`file`协议，会导致找不到对于路径的资源

## electron-serve的实现原理

翻看了下源码，发现`electron-serve`的实现原理很简单

- 大致分为下面两步
  - 当`electron`时，创建一个会话（或者使用外部传入的会话）
  - 先是注册了一个特定的协议为`app`（这个参数是可以外部传入的，默认为`App`），告诉electron当遇到这个`app`协议的时候，应该使用提供的`hander`函数进行处理

### handler函数实现

```typescript
const handler = async (request, callback) => {
    // 获取index文件路径，访问时路径时跳转index.html
		const indexPath = path.join(options.directory, `${options.file}.html`);
    // 处理请求的路径文件
		const filePath = path.join(options.directory, decodeURIComponent(new URL(request.url).pathname));
    // 获取相对路径
		const relativePath = path.relative(options.directory, filePath);
    // 判断路径是否准确，如果不正确则返回错误
    // ..说明为上级目录或者绝对路径，返回错误
		const isSafe = !relativePath.startsWith('..') && !path.isAbsolute(relativePath);

		if (!isSafe) {
			callback({error: FILE_NOT_FOUND});
			return;
		}
    // 最终得到的路径
		const finalPath = await getPath(filePath, options.file);
    // 获取文件的后缀
		const fileExtension = path.extname(filePath);
    // 判断文件是否为html或者asar（electron中的一种压缩包格式），如果不是则返回错误
		if (!finalPath && fileExtension && fileExtension !== '.html' && fileExtension !== '.asar') {
			callback({error: FILE_NOT_FOUND});
			return;
		}
    // 最后返回资源路径
		callback({
			path: finalPath || indexPath,
		});
	};
```

