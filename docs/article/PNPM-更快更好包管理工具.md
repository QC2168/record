---
title: PNPM-更快更好包管理工具
tags: [other]
---

## 什么是pnpm

`pnpm` 名字的由来是`performant`+`pnpm`，由`rstacruz`提出的这个名字。

`pnpm`是一款`node.js`软件包管理工具，它是`npm`、`yarn`的替代品，在它的官网上有这么一句话。

> Saving disk space and boosting installation speed
>
> 节约磁盘空间并提升安装速度

![img](https://pnpm.io/assets/images/cafs-illustration-7be6bd97e43ba11a031b099869321deb.jpg)

下面配了这一张图，从图中的含义我们可以看到用`pnpm`包管理工具可以帮你把所有项目的依赖包安装到一个全局存储位置，之后项目执行安装依赖时则会向这个全局存储位置中查询是否有这个依赖（没有则下载安装），并在项目目录下的`node_modules`创建一个硬链接连接到全局存储位置。从而达到节省硬盘空间和下载依赖的时间。

- 注意：假设你的项目某个依赖包有不同的版本，例如`"axios": "^0.21.1",`和`"axios": "^0.24.0"`时，那么`pnpm`会帮你处理这个问题，把这两个依赖包有差异的文件添加到仓库中，而不会因为一个文件的改动从而重新复制/下载另外一个版本的包。

下面这种图比较了 `npm`、`pnpm`、Yarn Classic 和 `Yarn PnP` 的性能，对应的[`package,json`](https://github.com/pnpm/pnpm.github.io/blob/main/benchmarks/fixtures/alotta-files/package.json)文件。

![img](https://camo.githubusercontent.com/83b108abddef5c40f6afc985fa8214edc92b6f2226a83d577074a720907463c8/68747470733a2f2f706e706d2e696f2f696d672f62656e63686d61726b732f616c6f7474612d66696c65732e737667)

至今，`pnpm`在`GitHub`上已经高达14.8K`star`。

## 安装pnpm

使用`npm`安装`pnpm`。

```bash
npm install -g pnpm
```

使用`npx`安装`pnpm`。

```bash
npx pnpm add -g pnpm
```

## 用法

`pnpm`的用法和`npm`、`yarn`是类似的，这使得我们可以很快的上手`pnpm`

| npm命令       | yarn命令       | pnpm命令       |
| ------------- | -------------- | -------------- |
| npm install   | yarn           | pnpm install   |
| npm i [pkg]   | yarn add [pkg] | pnpm add [pkg] |
| npm run [cmd] | yarn run [cmd] | pnpm [cmd]     |

## 全局安装位置

从上面我们得知pnpm是通过创建硬链接的方式来连接全局存储中的依赖，我们知道硬链接是不能跨越文件系统的，这是硬链接工作方式带来的限制。如果你需要跨文件系统来使用pnpm，也即是全局存储位置与项目依赖包安装位置不处于同一文件系统上，包则会被复制，不被硬链接。

默认情况下，全局存储的路径是不会被指定的，但没有指定全局存储位置时，当你在当前项目中`pnpm install`时，依赖会自动被创建上当前文件系统根目录下的`.pnpm-store`。但这有一个缺点，每个2驱动器可能会有冗余的依赖包。

## 指定全局依赖位置

```bash
pnpm config set store-dir /path/to/.pnpm-store
```

## 删除全局存储内容

```bash
rm -rf ~/.pnpm-store
```

> 如果您在非主磁盘中使用 `pnpm`，则存储位于该磁盘的根目录中。 例如，如果您 `D:` 上使用 `pnpm`，请从 `D:\.pnpm-store`删除存储。

## 只允许使用pnpm

如果你想要你的项目不被其他人意外使用`npm`、`yarn`安装依赖包时，你需要在`package.json`添加这个`preinstall`脚本。

```json
"scripts": {
    "preinstall": "npx only-allow pnpm"
}
```

## 总结

- `pnpm`是一个比`npm`、`yarn`更高效的管理工具
- `pnpm`采用了硬链接的方式，这比`yarn`复制本地缓存文件更快，且高效利用磁盘空间

