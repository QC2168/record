---
title: subtree和submodule的区别
tags: [GIT]
---

## subtree和submodule的区别

### subtree

- `subtree`目录是没有带`.git`文件夹的，因为它是直接把子项目的代码合并到父级仓库中的，所以它不是一个独立的仓库，而是一个子目录。编辑的时候，直接在父级仓库中编辑就可以了，不需要进入子项目中编辑
- 使用`subtree`会在创建目录时生成`commit`


::: tip

虽然，`subtree`的子项目没有了`.git`文件夹，但是还是可以使用`pull`和`push`命令的，需要借助`subtree`命令来操作`git subtree pull/push`

:::

::: info subtree是怎么记录当前是否有新的commit记录

它是利用`git subtree add`的时候生成的`commit`，然后在这个`commit`中将这个记录有变动的文件/文件夹的`hash`记录下来，然后在`pull`和`push`的时候，会对比这个`hash`，如果不一样，就说明有新的`commit`，就会进行`pull`和`push`操作

:::

### submodule

- 用于在一个项目中添加另外一个项目，会生成一个`.gitmodules`的文件，用来记录子项目的信息
- 父级仓库只会记录`submodules`中的`URL`和最新的`COMMIT`，而不会记录子项目的代码
- `submodule`和`submodule`之间可以嵌套，形成一个树状结构的`submodule`
- `submodule`可以单独使用`pull`、`push`、`checkout`等命令

::: tip

在拉去含有`submodule`的项目时，可以使用`git clone --recurse-submodules`命令，这样就会将子项目的代码也一并拉取下来


这等价于

```bash
git submodule update --init --recursive
```
:::

### 区别

- `subtree`是将子项目的代码合并到父级仓库中，而`submodule`是将子项目的代码作为一个子目录存在于父级仓库中




