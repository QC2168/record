#### webpack性能优化

#### 前言

`webpack`是一个用于现代 `JavaScript` 应用程序的 *静态模块打包工具*。当 `webpack` 处理应用程序时，它会在内部从一个或多个入口点构建一个 依赖图（`dependency graph`），然后将你项目中所需的每一个模块组合成一个或多个 *`bundles`*，它们均为静态资源，用于展示你的内容。

在开发环境和生产环境中，这两个环境下构建的目标存在很大差异，在开发环境中，我们需要的是强大的`source map`、实时加载、热更新等能力的配置。而在生产环境中，我们需要的是体积更小。更小的`source map`、`cdn`等优化，通过这些配置来改善页面的加载时间。

#### 一些优化配置

##### 热更新

热更新功能，即是页面在运行过程中替换、添加或删除模块，而无需重新加载整个页面，所以预览反应更快，等待时间更少。原理是向每个`chunk`中注入代理客户端来连接`devServer`和网页。

```javascript
devServer: {
  // ... 忽略一些代码
  hot: true,
},
```

或者是在命令中添加 `--hot`参数即可，开启后如果修改页面中的局部代码就可以实现热刷新了。

##### cache

这是`webpack5`新增的属性`cache`，用于缓存生成的 `webpack` 模块和 `chunk`，来改善构建速度。

会默认开启磁盘缓存，默认将编译结果缓存在项目`node_modules/.cache/webpack`目录下。

```javascript
module.exports = {
  //...
  cache: {
	 type: 'filesystem',
 	 allowCollectingMemory: true,
    },
};
```

##### 指定搜寻范围

为 `loader` 指定 `include`，减少 loader 应用范围，仅应用于最少数量的必要模块。在配置`loader`时，通过`test`、`exclude`、`include`缩小搜索范围

```javascript
module: {
  rules: [
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      include: path.resolve(__dirname, 'src'),
      type: 'asset/resource',
    },
  ],
},
```

##### source-map

通过`webpack`打包之后的代码变得非常复杂，这使得我们DEBUG变得非常困难，通常解释器会告诉你，在第几行第几列中的代码出错，但这对打包后的代码毫无用处。而`source map`提供了源代码构建后代码映射的技术，但项目报错的时候可以通过source map定位岛源代码。

```javascript
module.exports = {
  //...
  devtool: 'source-map',
};
```

- 推荐配置
  - 开发环境：`source-map` （生成source map 方便调试）
  - 生产环境：`none` （不生成`source map`）



##### 缓存优化

浏览器在加载页面的时候，通常会在本地查找是否存在缓存，如果有则直接加载缓存中的数据。当我们在使用`webpack`打包的时候，可以在文件的后缀加载`hash`值，使浏览器不会加载缓存中的文件。

```javascript
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'js/[name]/[name].[contenthash].js',
  clean: true,
},
```

##### 压缩代码

在终端执行以下命令，安装`terser-webpack-plugin`

```bash
yarn add -D terser-webpack-plugin 
```

在`webpack`配置文件中配置`terser-webpack-plugin`

```javascript
import TerserPlugin from 'terser-webpack-plugin';
```

```javascript
optimization: {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      parallel: true,
      terserOptions: {
        toplevel: true, // 删除无用代码
      },
    }),
  ],
},
```

在终端执行以下命令，安装`mini-css-extract-plugin` ` css-minimizer-webpack-plugin`

```bash
yarn add -D mini-css-extract-plugin css-minimizer-webpack-plugin 
```

在`webpack`配置文件中配置`mini-css-extract-plugin` ` css-minimizer-webpack-plugin`

```javascript
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
```

```javascript
{
  test: /\.css$/i,
  use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'postcss-loader'],
},
```

```javascript
optimization: {
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin(),
  ],
},
```

##### 多进程

使用`thread-loader`开启多进程打包，将后续的loader进行多线程的打包。

需要注意的是每个进程开启需要600ms的时间，通常在中大型项目中使用。

```javascript
module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "thread-loader",
          "babel-loader"
        ],
      },
    ],
},
```

