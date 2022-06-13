### 前言

在每个`node`项目或者模块的根目录下，通常会有一个叫做`package.json`文件，它定义了这个项目所需要的各个模块信息和版本，以及整个项目的配置信息，例如项目的名称，版本，描述等等信息...

大多数的开发者对`package.json`的了解只是在：

- 项目名称、构建版本、许可证的设置
- 在script中优化运行脚本
- 项目依赖记录

其实，`package.json`的作用在此只是冰山一角，我们还可以配置更多的属性来实现更多的功能，下面我们将带你深入认识`package.json`。

### 生成一个package.json

我们通过`npm init`命令来初始化一个node模块，看看它的`package.json`文件。（`package.json`文件可以手写出来）

```json
{
  # 项目名称
  "name": "island",
  # 项目版本
  "version": "1.0.0",
  # 项目描述
  "description": "",
  # 入口文件
  "main": "index.js",
  # 脚本
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  # 作者
  "author": "QC2168",
  # 许可证
  "license": "ISC"
}
```

### 属性说明

#### 必备属性

在`package.json`中可以配置很多的属性，其中`name`和`version`属性是必不可少的，这两个属性是`npm`模块的唯一标识。

##### name

设置模块的名称，用于告知模块的名称。

- 命名规则
  - 名称必须少于 214 个字符，且不能包含空格，只能包含小写字母、连字符（`-`）或下划线（`_`）。
  - 不能以点（`.`）或下划线（`_`）开头。
  - 名称中不得包含大写字母。
  - 必须仅使用URL安全字符。

```json
{
	"name": "island"
}
```

##### version

设置你的模块版本号，此属性遵循版本的语义版本控制记法，这意味着版本始终以 3 个数字表示：`x.x.x`。

- 版本格式：主版本号.次版本号.修订号，版本号递增规则如下：
  - 主版本号：当你做了不兼容的 API 修改
  - 次版本号：当你做了向下兼容的功能性新增
  - 修订号：当你做了向下兼容的问题修正
- 先行版本号及版本编译信息可以加到“主版本号.次版本号.修订号”的后面，作为延伸

详细请阅读语义化版本 2.0.0：https://semver.org/lang/zh-CN/

```json
{
  "author": "QC2168"
}
```

#### 关于描述信息

##### keywords

该属性是设置模块中的关键词，当我们使用`npm`检索模块时，会对模块中的`description`字段和`keywords`字段进行匹配，写好 `package.json`中的 `description` 和 `keywords` 将有利于增加我们模块的曝光率。如果你没有打算发布到`npm`，可以忽略这个属性

```json
{
	"keywords": ["server", "osiolabs", "express", "compression"]
}
```

##### description

该属性填写的是对该模块的描述内容，方便于用户了解这个模块。同时，包管理器也会把这个值作为搜索的关键词

```json
{
	"description": "感谢你的阅读，动动你的小手来个赞"
}
```

#### 关于协议

##### license

该属性是设定模块的许可证，让用户了解它们是在什么授权下使用此包，以及还有哪一些限制条件，例如`MIT`开源，很宽松的协议，基本上你什么都可以干，只要保留作者版权即可。

```json
{
	"license": "MIT"
}
```

#### engines

该属性是告知开发者此项目 / 模块要运行的 `Node.js` 或其他命令的版本。

```json
"engines": {
  "node": ">= 6.0.0",
  "npm": ">= 3.0.0",
  "yarn": "^0.13.0"
}
```

#### 关于维护 / 开发

##### author

设置模块的作者名称，你可以以字符串 / 对象的形式填写，以对象形式填写可以填写更多关于作者的详细信息。

```json
{
  "author": "QC2168"
}

or

{
  "name": "QC2168",
  "GitHub": "https://github.com/QC2168"
}
```

##### contributors

你还可以在你的模块中配置其他贡献者的信息，`contributors`是一个数组类型的属性，你可以以字符串 / 对象形式存放贡献者的信息。

```json
{
  "contributors": ["QC2168"]
}

or

{
  "contributors": [
    {
      "name": "QC2168",
      "GitHub": "https://github.com/QC2168"
    }
  ]
}
```

#### 关于程序

##### main

该属性设置模块的入口位置，当项目导入模块时，应用程序会在该位置搜索模块导出。

通常是项目根目录下的`index.js`文件

```json
{
	"main": "src/index.js"
}
```

#### 关于发布配置

##### private

该属性是设置该模块是否可以被发布到`npm`中，通常我们会将非开源的项目把这个属性设置为`true`，可防止模块被意外发布的事情发生。

```json
{
	"private": "true"
}
```

##### files

该属性是用于当我们执行`npm publish`时，只发布的目录或者文件 （以下写法指的是只发布`dist`目录下的文件）。

```json
  "files": [
    "dist/"
  ],
```

#### 关于脚本任务

##### scripts

定义一组`npm`脚本，每次执行 `npm run`，就会新建一个 `shell`，然后在里面执行制定的脚本命令。

```json
  "scripts": {
    "watch": "webpack --watch",
    "build": "webpack  --config webpack.build.config.ts",
    "start": "webpack serve --config webpack.dev.config.ts"
  },
```

##### config

该属性用于配置脚本中使用的环境变量，用于脚本命令中，例如下面的配置，可以在脚本中使用`process.env.npm_package_config_port`进行获取。

```json
{
  "config" : { "port" : "8080" }
}
```

#### 关于依赖包

##### dependencies

设置作为依赖安装的 `npm` 模块的列表。

```json
npm install <模块名>
yarn add <模块名>
```

当你使用 `npm` / `yarn` 安装软件模块时，模块名会自动被插入到`package.json`的`dependencies`属性里。

```json
  "dependencies": {
    "react": "^17.0.0",
    "react-dom": "^17.0.0"
  },
```

##### devDependencies

设置作为开发依赖安装的 `npm` 软件包的列表。

它们不同于 `dependencies`，因为它们只需安装在开发机器上，而无需在生产环境中运行代码。

```json
npm install --save-dev <模块名>
yarn add --dev <模块名>
```

当你使用 `npm` / `yarn` 安装软件模块时，模块名会自动被插入到`package.json`的`devDependencies`属性里。

```json
"devDependencies": {
    "webpack": "^5.38.1",
    "webpack-cli": "^4.7.0",
    "webpack-dev-server": "^3.11.2"
}
```

#### 更多信息

##### repository

该属性是指模块代码托管的地方。 这对想要了解源码、贡献的用户有帮助。，通常放的是`GitHub`仓库地址

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/QC2168/webpack-template.git"
  }
}
```

##### bugs

该属性填写模块问题报告的页面，这对遇到问题的小伙伴很有帮助，它们可以通过该途径来向你反馈问题。

```json
"bugs": {
    "url": "https://github.com/QC2168/webpack-template/issues"
  },
```

##### homepage

该属性填写模块的主页 / 文档，用户可以更好的了解你的模块使用.

```json
{
	"homepage": "https://github.com/QC2168/webpack-template#readme",
}
```

### 总结

本文介绍了`package.json`中的大部分属性和作用，并将其分类。

`package.json`是一个Node项目的核心文件，它记录了关于整个Node项目所需要的重要信息，也是Node项目中必不可少的文件。

