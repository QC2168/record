代替`npm`、`yarn`、`pnpm`包管理工具

在日常工作之中，可能接手了一个项目是使用yarn包管理工具安装依赖的，而另外一个项目是使用`pnpm`包管理工具安装依赖的，这时如果你没有仔细看项目根目录中的锁文件，可能你就按照你平时常用的包管理工具进行安装。今天将给大家介绍一个小工具，它就是`ni`，它可以根据当前项目的锁文件采用对应的包管理工具。

### 安装ni

```
npm i -g @antfu/ni
```

通过以上命令安装`ni`之后，你就可以在你的项目上使用`ni`了。

### 安装

#### 依赖安装

```
ni
```

执行以上命令相当于下面的命令。

```
npm install
yarn install
pnpm install
```

#### 安装软件包

```
ni antd-mobile [-D]
```

执行以上命令相当于下面的命令，如果是安装开发依赖，需要在后面添加上`-D`参数。

```
npm i antd-mobile 
yarn add antd-mobile
pnpm i antd-mobile
```

#### 安装全局依赖

```
ni typescript -g
```

和安装包命令一样，只是添加多一个`-g`参数即可。

### 运行

#### 运行脚本

```
nr dev
```

执行以上命令相当于下面的命令。

```
npm run dev
yarn run dev 
pnpm run dev
```

### 执行命令

```
nx jest
```

执行以上命令相当于下面的命令。

```
npx jest
yarn dlx jest
pnpm dlx jest
```

### 更新

#### 更新依赖

```
nu [-i]
```

执行以上命令相当于下面的命令。

```
npm upgrade
yarn upgrade
pnpm upgrade
```

### 默认包管理工具

当项目中没有锁文件时，`ni`是无法判断使用某个包管理工具的并会提示你选择要使用的包管理工具，或者你可以直接指定`ni`默认包管理工具。

在用户目录下创建`.nirc`文件，在该文件中指定默认的包管理工具和全局包管理工具。

```
# 默认包管理工具
defaultAgent=pnpm

# 全局包管理工具
globalAgent=pnpm
```