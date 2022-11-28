---
title: 搭建个webpack模板
tags: [JavaScript,webpack]
---

#### 前言

最近在看`vue`源码解析的教程视频，每一章讲解都使用到了`webpack`，我们就要从零开始搭建脚手架，这样子太费时间了，本文将简述如何去搭建一个`webpack`模板，也是方便我们后续开发或者练习时使用。（即是即拉即用，无需每次使用都去配置一遍）。

#### 什么是webpack

`webpack`是目前前端开发中最火的模块打包工具，只需要通过简单的配置，便可以完成模块的加载和打包。

我们就可以从官网中的主图看出`webpack`它可以将多种文件打包合并成一个或多个`bundle`。

![image-20210620160811018](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654712.png)

#### 初始化项目

```bash
npm init -y 	// 初始化项目
git init    	// 初始化git仓库
tsc --init  	// 生成 tsconfig.json 配置文件
```

在项目中安装`webpack`及`webpack-cli` （本地安装）。

> 如果使用全局安装，这会将你项目中的 `webpack` 锁定到指定版本，并且在使用不同的 `webpack` 版本的项目中， 可能会导致构建失败。

```bash
npm install webpack webpack-cli --save-dev
```

![](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654713.png)

#### 配置快捷脚本

在项目的`package.json`文件中的scripts对象中添加一句`"build": "webpack"`，稍后我们可以使用`npm run build`来把项目跑起来。

```json
"scripts": {
    "build": "webpack"
  },
```

#### 项目目录结构

我们在根目录下创建一个`src`，作为项目的根目录。

```js
webpack-template      
├─ src      
├─ package-lock.json  
├─ tsconfig.json
└─ package.json       
```

之后，我们在`src`目录中新建一个`pages`文件夹用来放置项目页面的文件夹，在`pages`文件夹中创建`index`文件夹及`html`，`scss`，`ts`文件，在`src`目录下创建一个`main.ts`，并在`main.ts`中写入。

```typescript
// main.ts
console.log('main.ts')
```

```typescript
// 在index.ts中引入index.scss
import './index.scss'
```

```js
webpack-template        
├─ src                  
│  ├─ pages             
│  │  └─ index          
│  │     ├─ index.html  
│  │     ├─ index.scss  
│  │     └─ index.ts    
│  └─ main.ts           
├─ package-lock.json    
├─ package.json    
└─ tsconfig.json    
```

#### 创建项目配置文件

在根目录下创建一个`webpack.config.ts`文件，`webpack`会根据该配置文件定义的属性进行处理。

```
webpack-template      
├─ src                
│  ├─ pages             
│  │  └─ index          
│  │     ├─ index.html  
│  │     ├─ index.scss  
│  │     └─ index.ts    
│  └─ main.ts          
├─ package-lock.json  
├─ package.json       
├─ tsconfig.json      
└─ webpack.config.ts  
```

#####  编写config文件

```typescript
// webpack.config.ts
import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
};

export default config;
```

在项目中执行安装命令，安装所需要用到的`loader`。

```
npm install --save-dev css-loader style-loader sass-loader sass ts-loader typescript ts-node @types/node @types/webpack html-webpack-plugin
```

在`webpack.config.ts`中配置安装好的`loader`和`plugins`。

##### 配置loader

`loader`的一些相关配置。

```javascript
 module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ],
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    }
```

##### 配置plugins

`plugins`的一些相关配置。

```javascript
  plugins: [
		new HtmlWebpackPlugin({
            title: 'index',
            template: './src/pages/index/index.html',
            filename: 'index.html',
          }),
    ]
```

安装后，执行`npm run script`，把项目打包起来，得到`dist`文件夹，里边即是我们项目中`src`文件夹打包好的文件。

可以看到里边有index.html和main.js文件，由于我们写的是`ts`文件，无法直接在浏览器中跑起来，上面我们配置了`ts-loader`，是它帮我们把`ts`转换为`js`文件的。

![3](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654714.png)

#### 配置多页面

为什么这里要配置多页面？

![问号表情包](https://raw.githubusercontent.com/QC2168/note-img/main/202203161658799.jpg)

现在`Vue`，`React`，`Angular`这三大框架都是`SPA`了，开局直接`npm run serve`

但在很多场景下，SPA开发模式可能不太适用，比如我们学校有时候举办活动页面，或者平时写一些简单的页面，这个时候其实多页面更合适些。

因为很多时候这些页面都是完全不相关的，它们之间无需共享数据，你甚至可以对每个单独的页面使用不同的技术栈，例如页面A使用`Vue`，页面B使用`React`，页面C使用`Angular`，可以单独对页面设定框架的引入。

接下来，我们将把我们的`webpack-template`进行多页面的配置。

将项目中的`src / pages`文件夹中新建`hello`文件夹，和`index`一样放`html`，`scss`，`ts`文件，**这是第二个页面**。

```
src                  
├─ pages             
│  ├─ hello          
│  │  ├─ hello.html  
│  │  ├─ hello.scss  
│  │  └─ hello.ts    
│  └─ index          
│     ├─ index.html  
│     ├─ index.scss  
│     └─ index.ts    
└─ main.ts           
```

```html
// hello.html
...
<body>
    <h2>
        hello.html
    </h2>
</body>
...
```

```typescript
// hello.ts
import './hello.scss'
console.log('hello.ts');
```

在`webpack.config.ts`配置文件中把`entry`和`output`属性修改成：

```
entry: {
        main:'./src/main.ts',
        'index': './src/pages/index/index.ts', // index页面
        'hello': './src/pages/hello/hello.ts', // hello页面
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]/[name].js',
        clean: true,
    }
```

因为多个页面对应的页面内容也是不同的，我们需要在`plugins`数组上配置多个`HtmlWebpackPlugin`。

| 属性     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| title    | 页面标题，即`document.title`                                 |
| filename | 导出页面文件的名称                                           |
| template | 页面的模板，指向`pages`下对应页面的`html`文件                |
| chunks   | 注入的脚本文件（ 一定要配置这个！！否则全部脚本文件会被注入到当前页面中 ） |

关于`HtmlWebpackPlugin`插件的更多配置请阅读： https://github.com/jantimon/html-webpack-plugin

```typescript
 plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            filename: 'index.html',
            template: './src/pages/index/index.html',
            chunks: ['index','main']
        }),
        new HtmlWebpackPlugin({
            title: 'hello',
            filename: 'hello.html',
            template: './src/pages/hello/hello.html',
            chunks: ['hello','main']
        }),
    ],
```

现在我们再执行一下`npm run build`命令，打包我们的项目。

![4](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654715.png)

打开`hello.html`和`hello.html`，我们在`pages`文件夹中对应的页面文件也都被`HtmlWebpackPlugin`插件处理到对应的`html`文件中。

![5](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654716.png)

#### 配置代码规范

具备基本工程素养的同学都会注重编码规范，而代码风格检查（Code Linting，简称 Lint）是保障代码规范一致性的重要手段，

#####  EditorConfig

`EditorConfig`是用来配置格式化代码的，这个格式化代码一定要和`ESlint`中的配置相符，否则会出现格式化后的代码不符合`ESlint`中的规则，从而不能正常的打包项目。

在项目根目录添加`.editorconfig`文件，`.editorconfig`文件是定义一些格式化规则，目录树结构这里就不放啦，太长啦！

```json
# Editor configuration, see http://editorconfig.org

# 表示是最顶层的 EditorConfig 配置文件
root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

提示：如果你是使用`vscode`编辑器，需要到插件市场中安装 `EditorConfig for VS Code` 插件。

![6](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654717.png)

##### ESlint

`ESlint`是一款开源的代码检查工具，找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。



团队开发中，团队成员之间的编码风格和习惯是不同的，我们可以使用`ESlint`来解决这个问题，当代码风格不符合`ESlint`规则时，就会给出代码规则提示并自动修复。让项目的编码风格统一。

安装`ESlint`

```bash
npm install eslint-webpack-plugin eslint --save-dev
```

配置`ESlint`

在项目根目录中打开终端，执行`npm eslint --init`，然后根据终端操作提示完成一系列设置来生成配置文件



这时候，项目根目录下自动生成了`.eslintrc.js` 配置文件：

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
  },
};
```

在`webpack.config.ts`中配置`ESlint`插件，`plugins`属性中添加`ESLintPlugin`

```typescript
import ESLintPlugin from 'eslint-webpack-plugin';
// plugins
new ESLintPlugin({
      extensions: ['js', 'ts'],
      exclude: '/node_modules/',
    }),
```

提示：如果你是使用`vscode`编辑器，需要到插件市场中安装 `ESLint` 插件并开启`ESlint`服务。

![16](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654718.png)

测试下是否配置成功，可以在一个ts文件中，声明一个变量，不要添加分号，这个时候编辑器会显示红色波浪线来提示你。

![](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654719.png)

打开在`vscode`编辑器的`settings.json`配置文件，添加以下代码：

```json
 "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
 }
```

当我们配置`ESlint`之后，会弹出很多红色的波浪线，这个时候如果按上面的方法一个个去点击修复的话效率很慢，那有没有什么快捷的方法来解决这个问题呢？



sure ！！

`eslint`提供了`--fix` 选项，Automatically fix problems（自动修复问题），所以我们在`package.json`中添加一个快捷脚本，自动修复`src`文件夹下的后缀名为`js`和`ts`的文件，`--ext`选项，是指定修复的目录。

```bash
"lint": "eslint --fix --ext .js,.ts src"
```

执行`npm run lint`，修复当前项目中所有的问题。

#####  husky

husky 是一个 `Git Hook` 工具。主要实现提交前 `eslint` 校验和 `commit` 信息的规范校验。我们项目已经具有了编码规范检测，但某些时候，有可能遗漏了一两个规范警告提示，甚至是视而不见！关闭检测工具按照自己原来的编码规范来书写代码。为了解决这个问题，我们需要限制“有问题”的代码的提交，来保证GIT仓库中的代码全都是符合`ESlint`规范的，这个时候我们需要用到`husky`了。

执行`husky-init` 命令快速在项目初始化一个 husky 配置。

```
npx husky-init && npm install
```

执行完成之后，它就配置完毕了，对的 就是这么简单。

不过，还是需要手动修改下文件的，打开`.husky\pre-commit`文件，把npm test命令替换成`eslint --fix --ext .js,.ts src`。

![18](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654720.png)

这个`pre-commit`是一个hook文件，作用是当我们执行`git commit`的时候，会先对项目执行一遍`eslint --fix --ext .js,.ts src`，如果`ESlint`通过，即`commit`成功，否则停止`commit`。

#####  lint-staged

`lint-staged` 是一个在`git`暂存文件上运行`linters`的工具，当我们运行`eslint`或`stylelint`的命令时，只会检查我们通过`git add`添加到暂存区的文件，可以避免我们每次检查都把整个项目的代码都检查一遍。

安装 `lint-staged`

```bash
npm i lint-staged -D
```

在`package.json`中添加`lint-staged`配置项。

```json
"lint-staged": {
    "*.{js,ts}": "eslint --fix"
  },
```

这行命令表示：只对 `git` 暂存区的`.js`、`.ts` 文件执行 `eslint --fix`

修改`.husky / pre-commit`文件，把`eslint --fix --ext .js,.ts src`命令替换成`npx lint-staged`

```
npx lint-staged
```

![19](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654721.png)

#### 调试环境

在实际开发中，我们不可能一直通过`build`指令将项目进行合并打包再打开查看，这样子会使得开发调试效率非常之慢。我们给我们提供了一个叫`webpack-dev-server`的插件，它可以给我们提供一个临时服务器，可以将我们项目打包后的文件放到这个服务器中供我们开发者进行浏览，调试

##### 安装`webpack-dev-server`插件

```bash
npm install --save-dev webpack-dev-server @types/webpack-dev-server
```

##### 配置插件

引入插件，在配置类型方面，我们需要做出一些修改，原本我们的配置对象模块中用的是`webpack`包中的`config`类型，但现在我们需要用到另外一个模块（`webpack-dev-server`）要在配置对象中配置`devServer`属性，而`webpack`中的`config`中没有`devServer`这个类型的属性，我们定义一个`Configuration`接口作为配置文件的类型，让它继承下`webpack`包中的`config`，当它底下有`devServer`的时候则对应上`WebpackDevServerConfiguration`

```typescript
// webpack.config.ts
// 这里忽略一些代码
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
  devServer ?: WebpackDevServerConfiguration;
}
// 这里忽略一些代码
```

在`config`中，加入`devServer`属性     [更多配置请参考](https://webpack.js.org/configuration/dev-server/)

```typescript
const config: Configuration = {  
  // 这里忽略一些代码
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
  },
}
```

在`package,json`中的`script`属性中加入`serve`，这里的`--open`指的是当服务构建完成之后自动打开对应的`URL`

```json
 "scripts": {
    "build": "webpack",
    "lint": "eslint --fix --ext .js,.ts src",
    "serve": "webpack serve --open",
    "prepare": "husky install"
  },
```

执行`npm run serve`后，`webserver`将开始运行构建一个服务环境，对应的`URL`地址也在`terminal`中显示出来，`webserver`也会自动的帮我们打开浏览器访问对应的`URL`地址。

![1](https://raw.githubusercontent.com/QC2168/note-img/main/202203161653679.png)

现在，当我们在`index.html`中修改一些代码时，`webpack-dev-server`会监听到项目下代码的修改，立即将修改后的代码重新进行打包合并，更新后服务中 ，页面也会进行相对应的改变

```html
<!-- src/pages/index/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
</head>
<body>
    <h2>
        index.html
    </h2>
<h3>my juejin home page: https://juejin.cn/user/2858385965322935/posts</h3>
</body>
</html>

```

![2](https://raw.githubusercontent.com/QC2168/note-img/main/202203161654722.png)

关于`webpack-dev-server`该插件还有很多的配置项，这里我们只是做了简单的配置，如果你想了解更多的配置，[请移至插件配置文档](https://github.com/webpack/webpack-dev-server#usage)

#### 网络请求

在传统的页面中，更新页面的内容需要刷新整个页面，但在前端开发中，往往离不开网络数据的请求，我们需要调用后端写好的API进行数据请求，将数据内容渲染到页面中。这里我们使用`axios`这个第三方请求库

##### 安装`axios`

```bash
npm install axios
```

##### 直接请求 （ 不推荐 ）

最简单粗暴的方法，你可以直接通过`axios`对`URL`进行`get` `post`的请求，但不建议这样子操作，在日常开发我们会将请求回来的数据进行处理再交给对应的组件去处理渲染，如果你直接通过以下方式来请求，那么你的项目中每个请求可能会出现很多重复的代码，你也许会说将这些重复的代码进行一个封装处理，但这不是最好方法，`axios`给我们提供了拦截器功能，在请求发送前和请求响应后可以统一处理后再交给对应的页面处理，这样子可以大大降低代码的耦合度以及方便后续开发中对代码的维护，还可以对`API`集中管理 **请继续往下看**

```typescript
import axios from 'axios';

axios.get(url[, config]).then()
axios.post(url[, data[, config]])..then()
```

##### 配置全局网络请求实例

在`src`文件夹下创建`network`文件夹，作为项目网络请求的管理文件夹，在其下面创建`request.ts`文件，配置项目全局`axios`实例。

```typescript
// src/network/request.ts
// 引入axios以及一些类型
import axios, {
  AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise,
} from 'axios';
import responseInterceptor from './Interceptors/responseInterceptor';

export default (config: AxiosRequestConfig):AxiosPromise => {
// 配置全局参数
  const cfg: AxiosRequestConfig = {
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    headers: {
    },
  };

  const instance: AxiosInstance = axios.create(cfg);

  // 配置请求拦截器
  instance.interceptors.request.use((res: AxiosRequestConfig) => res);

  // 配置响应拦截器
  // eslint-disable-next-line max-len
  instance.interceptors.response.use((res: AxiosResponse) => Promise.resolve(responseInterceptor(res)));

  return instance(config);
};
```

在`src/network/Interceptors`文件夹中创建`responseInterceptor.ts`文件，配置`axios`实例的响应拦截器，处理从服务器端中请求回来的数据

```typescript
// src/network/Interceptors/responseInterceptor.ts
import { AxiosResponse } from 'axios';

export default (response: AxiosResponse) => {
  const { status } = response;
  const { errCode } = response.data;
  // 如果http响应状态码response.status正常，则直接返回数据
  if (status === 200 && errCode === 0) {
    return response.data;
  }
  //    当请求状态码和后端返回的errCode异常
  //    其他处理操作
  return errCode;
};
```

##### API集中管理

在项目中，我们常常会使用到很多的`API`地址，我们需要将这些集中起来管理，按页面来分类之后将每一个API封装成对应的一个API请求函数，之后我们在对应的页面调用就可以直接拿到数据处理了，后面如果`API`地址有更改我们也可以从对应页面中的文件进行修改，这给我们开发带了很大的好处！

在`network`文件夹中创建一个`api`文件夹，里边我定义了一个`home.ts`文件，作为`home`页面中的API管理文件，之后如果页面

```typescript
// src/network/api/home.ts
import request from '../request';

export const getHomeTopNav = () => request({
  url: '/get_home_top_nav',
  method: 'get',
});

export const homePageArticle = () => request({
  url: '/home_page_article',
  method: 'get',
});
```

##### 使用API

在页面中，我们引入封装好的`API`函数，使用`async await`将函数再包装一层，请求回来的数据将在这个函数中进行二次处理，例如将数据进行一个大小写转换，长度分割等操作。

```typescript
import { getHomeTopNav, homePageArticle } from '../../network/api/home';

const getDataHomeTopNav = async () => {
  const res = await getHomeTopNav();
  // 忽略一些代码
};
const getDataHomePageArticle = async () => {
  const res = await homePageArticle();
  // 忽略一些代码
};

getDataHomeTopNav();
getDataHomePageArticle();
```

#### 最后

本文从初始化项目开始到项目结构搭建，多页面的配置再到代码提交规范这些平时常用到的一些配置选项都集成到了`webpack-template`中,手把手地带领大家将一个空的文件夹构建一个前端开发项目模板，目的也是方便我们平时使用`webpack`环境时，减少繁琐的配置从而节约时间。

> `webpack-template`  GIT地址：https://github.com/QC2168/webpack-template

