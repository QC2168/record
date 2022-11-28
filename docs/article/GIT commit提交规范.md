---
title: GIT commit提交规范
tags: [other]
---

# GIT commit提交规范

阅读本文章你将收获到：

- 什么是约定式提交
- `angular commit`规范
- 如何在项目中约束`commit message`

### 前言

在编写这一篇文章时，说明我已经意识到我的每一次`git commit`应该要有一个规范，明确表达我的每一次`commit`的目的，且在规范`log`的同时也有助于他人`review`，还能有效输出项目的`CHANGELOG.md`。

我们看下不太规范的`commit`，是不是感觉这种`commit`信息有点乱，且如果这种`commit`写得再乱一点可能其他人想从这里面的`commit`获取有效信息有点困难。

![image-20220208142940703](https://raw.githubusercontent.com/QC2168/note-img/main/202202081429851.png)

我们可以看下`vue`、`react`这些主流的前端框架在`github`上的`commit message`，在每一条`commit`的前面都会有`chore`、`docs`、`fix`等字段，分别代表修改构建流程或者增加依赖包、修改文档、修复问题。通过这些前缀我们就能直接看出每次`commit`的类型。后面接上本次提交的描述，更清晰的表达本次修改的内容。

![image-20220208142007226](https://raw.githubusercontent.com/QC2168/note-img/main/202202081420558.png)

![image-20220208142037549](https://raw.githubusercontent.com/QC2168/note-img/main/202202081420714.png)

其实，它们都遵循了`conventional commits`（约定式提交）的一种提交规范，也是本文的主题。

### Conventional Commits

![image-20220208143859217](https://raw.githubusercontent.com/QC2168/note-img/main/202202081438535.png)

[`Conventional Commits`](https://www.conventionalcommits.org/en/v1.0.0/)是一个提交格式规范，这个规范主要是当你在`commit`的时候，对我们的提交信息做一个格式规范约束，它提供了一组简单规则来创建清晰的提交历史，通过在提交信息中描述功能、修复、破坏性变更。

它的`message`格式如下：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

// 译
<类型>[可选 范围]: <描述>

[可选 正文]

[可选 脚注]
```

- 它总共分为三个部分
  - 标题行 描述修改的类型、简短的描述 （必填）
  - 主题内容 描述修改的内容 （可选）
  - 页脚注释 通常用于放`issues` （可选）

![image-20220208150623469](https://raw.githubusercontent.com/QC2168/note-img/main/202202081506627.png)

### Angular Commit规范

目前，我们用得最多的是`Angular`规范，同样遵循着`conventional commit`，可以说是它的一个衍生版本，`angular`规范的`message`格式是这样子的。

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- 由以下部分构成

  - `type` （必选）

    - | 类型       | 说明                          |
      | ---------- | ----------------------------- |
      | `feat`     | 新增特性                      |
      | `fix`      | 修复问题                      |
      | `docs`     | 修改文档                      |
      | `style`    | 修改代码格式（非CSS样式修改） |
      | `refactor` | 重构代码                      |
      | `perf`     | 修改提高性能的代码            |
      | `test`     | 新增、修改测试用例            |
      | `chore`    | 修改构建流程,、依赖管理       |

  - `scope`

    - 本次`commit`的修改影响范围

  - `subject`

    - 本次`commit`的描述信息

  - `body`

    - 本次`commit`具体的修改内容

  - `footer`

    - 页脚注释 通常用于放`issues`

### commitlint

接下来我们要认识一个新的工具叫`commitlint`，从它的命名我们就得知它是一个约束提交的工具库。

#### 安装commitlint

项目级安装`commitlint`和`husky`，`commlint`用于对`commit message`进行格式校验，`husky`则易用`git hook`。

```bash
pnpm add -D @commitlint/config-conventional @commitlint/cli husky 

// or

yarn add -D @commitlint/config-conventional @commitlint/cli husky 
```

#### 配置commitlint

在项目根目录中新建一个`commitlint.config.js`文件，配置`commitlint`。

```javascript
// 校验angluar commit
module.exports = {extends: ['@commitlint/config-conventional']};
```

> `commitlint`是规范`commit message`信息，不能约束其内容

#### 激活hooks

在终端执行以下命令，初始化`git hooks`的配置

```cmd
pnpm exec husky install

// husky - Git hooks installed
```

执行上面的`pnpm exec husky install`命令之后，项目根目录会创建一个`.husky`文件夹（`husky hook`文件夹）。在这个文件夹中创建一个`commit-msg`文件，用于开发者在执行`commit`命令时进行`commitllint`校验。

```
// commit-msg
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

pnpm exec commitlint --edit $1
```

现在，当你在`git commit`时，会触发到`commit-msg`这个`hooks`，执行`commitlint`进行`commit message`校验。当检验不通过时，则不能完成本次`commit`操作。

### commitizen

当我们约束了`commit message`之后，我们就必须符合它的提交规范才能正常完成提交，但每次提交必须一个一个字手打出来吗？

这时候，就要用到`commitizen`了，它是一个交互式创建提交信息的工具，用于规范化`git commit message`。可以一步一步根据我们的需求创建完整的提交信息。并且**代替你平时使用的`git commit`**。

我们需要为`commitizen`提供一个适配器，使`commitizen`按我们指定的规范生成`commit message`，这里我们选择`cz-conventional-changelog`，也是`commitizen`首选适配器。

#### 安装commitizen

项目级安装`commitizen`、`cz-conventional-changelog`。

```bash
pnpm add -D commitizen cz-conventional-changelog
```

#### 配置commitizen

在项目根目录中创建一个`.czrc`文件（`commitizen`配置文件）。

```
// .czrc

{
  "path": "cz-conventional-changelog"
}
```

安装之后，你可以通过`pnpm exec cz`触发它，或者你在`package.json`中添加一个脚本。

```json
// packages.json

"scripts": {
  // ...
  "commit": "cz"
},
```

执行`pnpm commit / pnpm exec cz`命令后，会显示一个交互式的命令行界面，你需要根据实际情况选择对应的选项，最终生成一个`commit message`并提交。可代替`git commit`。

#### 运行commit执行cz

也可以在开发者在终端执行`git commit`命令时调用`cz`，在项目根目录中的`.husky`目录下创建`prepare-commit-msg`文件，用于用户执行`commit`之前运行`cz`。

```bash
#!/bin/bash
exec < /dev/tty && git cz --hook || true
```

### 最终效果

```powershell
E:\project\viteProjects\hkzf>pnpm commit

> hkzf-ts@0.0.0 commit E:\project\viteProjects\hkzf
> cz

cz-cli@4.2.4, cz-conventional-changelog@3.2.0

? Select the type of change that you're committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip)
? Write a short, imperative tense description of the change (max 94 chars):
 (6) 新增房屋筛选
? Provide a longer description of the change: (press enter to skip)

? Are there any breaking changes? No
? Does this change affect any open issues? No
[hooks-ts b0d5f2f] feat: 新增房屋筛选
 17 files changed, 2988 insertions(+), 230 deletions(-)
 create mode 100644 .czrc
 create mode 100644 .husky/commit-msg
 create mode 100644 commitlint.config.js
 // ...
```

本质上还是调用了`git commit`命令只不过是帮我们约束了`commit message`的格式再`commit`。我们也可以对`commitizen`的交互界面做出自定义配置，下面我们将交互界面的语言替换成简体中文版，更符合国人的使用。

### cz-customizable

`cz-customizable`也是一个适配器，它可以帮助我们达到你想要的规范效果。

### 安装

项目级安装`cz-customizable`。

```javascript
pnpm add -D cz-customizable
```

### 配置

在项目根目录创建`.cz-config.js`配置文件，为`cz-customizable`配置工作模式。官方也提供了一份参考的配置文件：[`cz-config-EXAMPLE.js`](https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js)（参考），我们使用汉化版的配置文件。

```javascript
// .cz-config.js

'use strict';

module.exports = {

    types: [
        {value: 'feat',     name: '特性:    一个新的特性'},
        {value: 'fix',      name: '修复:    修复一个Bug'},
        {value: 'docs',     name: '文档:    变更的只有文档'},
        {value: 'style',    name: '格式:    空格, 分号等格式修复'},
        {value: 'refactor', name: '重构:    代码重构，注意和特性、修复区分开'},
        {value: 'perf',     name: '性能:    提升性能'},
        {value: 'test',     name: '测试:    添加一个测试'},
        {value: 'build',     name: '构建:    影响构建系统或外部依赖项的更改'},
        {value: 'ci',     name: 'ci:    更改为我们的CI配置文件和脚本'},
    ],

    messages: {
        type: '选择一种你的提交类型:',
        scope: '选择一个scope (可选):',
        // used if allowCustomScopes is true
        customScope: '模块名称:',
        subject: '短描述:\n',
        body: '长描述，使用"|"换行(可选)：\n',
        breaking: '非兼容性说明 (可选):\n',
        footer: '关联关闭的issue，例如：#1, #2(可选):\n',
        confirmCommit: '确定提交?'
    },

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    subjectLimit: 100

};
```

在项目根目录中的`.czrc`文件中，将目标适配器修改成`cz-customizable`即可。

```
{
    "path": "cz-customizable"
}
```

### 效果

![image-20220209214905892](https://raw.githubusercontent.com/QC2168/note-img/main/202202092149184.png)

### 总结

本文简单介绍了约定式提交，并引入了当前项目中使用最多的`angular`团队的规范。并将这个规范约束带到项目中应用。`commit message`规范是非常重要的，约束得每一次`commit`的格式。

