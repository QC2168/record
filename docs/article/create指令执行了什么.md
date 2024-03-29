---
title: create指令执行了什么
tags: [javascript]
---

## 你的项目是如何被创建的

在使用`vite`创建项目的时候，我们通常会使用到`pnpm create vite`命令来初始化一个`vite`项目

但却一直没有去了解这个命令具体是执行什么了？

## pnpm create干了些什么？

我们来研究一下，首先我们使用到了`pnpm`，这个怎么安装我就不多说了，如果您的设备上还没有安装`pnpm`，可以移步[如何安装pnpm](https://pnpm.io/installation)

接下来，是`create`命令，这个是`pnpm`中的一个脚本命令

从文档中的描述，我们可以得知`pnpm create`是用于从提前准备好的 `create-*` 或 `@foo/create-*` 起始套件创建项目的命令

![20231014163854](https://raw.githubusercontent.com/QC2168/note-img/main/20231014163854.png)

也就是说，vite项目中包含了这一部分内容，于是我们可以到`vite`仓库查看一下，这里的`create`是做了些什么操作

![20231014164009](https://raw.githubusercontent.com/QC2168/note-img/main/20231014164009.png)

从`vite`仓库中，我们得知这是一个`monorepo`，查看`packages`文件夹后发现`create-vite`这个库 (也就对应上所述的`@vite/create-*`规则)

展开该项目中的`src/index.ts`文件，可以发现这就是我们输入`pnpm create vite`所调用的文件

我们来看看这个文件做了些什么操作

首先，当你运行了该文件后，它调用了`init`函数

```typescript
init().catch((e) => {
  console.error(e)
})
```

## init函数

我们先看看这个文件引入了些什么库

```typescript
// 用于处理不同平台上指令兼容
import spawn from 'cross-spawn'
// 用于解析命令行参数，方便获取，还可以添加默认值等功能
import minimist from 'minimist'
// 用于实现交互式命令行的库，像我们看到的一样
import prompts from 'prompts'
// 用于在终端上渲染五颜六色的文字，提高字体美感
import {
  blue,
  cyan,
  green,
  lightBlue,
  lightGreen,
  lightRed,
  magenta,
  red,
  reset,
  yellow,
} from 'kolorist'
```
在介绍该文件所引入的第三方库之后，我们来看看这个文件主要的函数`init`

```typescript
async function init() {
  // 获取命令行传递的参数内容
  const argTargetDir = formatTargetDir(argv._[0])
  // 获取命令行传递的模板参数，决定拉去某一个模板内容
  const argTemplate = argv.template || argv.t

  // 项目目录，默认为vite-project
  let targetDir = argTargetDir || defaultTargetDir

  // 获取目录名称
  const getProjectName = () =>
    targetDir === '.' ? path.basename(path.resolve()) : targetDir

  // 交互式命令行包含哪一些值，当用户回答完问题之后，会被赋值到result中
  let result: prompts.Answers<
    'projectName' | 'overwrite' | 'packageName' | 'framework' | 'variant'
  >
}
```
接下来，我们来看看当我们输入`pnpm create vite`之后，所产生的交互式命令在`create-vite`这个包里是怎么实现的

![20231014164056](https://raw.githubusercontent.com/QC2168/note-img/main/20231014164056.png)

```typescript
result = await prompts(
      [
        // 获取项目名称
        {
          type: argTargetDir ? null : 'text',
          name: 'projectName',
          message: reset('Project name:'),
          initial: defaultTargetDir,
          onState: (state) => {
            targetDir = formatTargetDir(state.value) || defaultTargetDir
          },
        },
        // 当目录存在时，由用户决定是否重写该目录
        {
          type: () =>
            !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm',
          name: 'overwrite',
          message: () =>
            (targetDir === '.'
              ? 'Current directory'
              : `Target directory "${targetDir}"`) +
            ` is not empty. Remove existing files and continue?`,
        },
        // 检查是否操作了覆盖
        {
          type: (_, { overwrite }: { overwrite?: boolean }) => {
            if (overwrite === false) {
              throw new Error(red('✖') + ' Operation cancelled')
            }
            return null
          },
          name: 'overwriteChecker',
        },
        {
          // 验证包名是否符合条件
          // 正则表达式规则如下（isValidPackageName function）
          // /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(projectName)
          // toValidPackageName方法则是替换一些特殊符号，例如空格替换为`-`，处理trim等
          type: () => (isValidPackageName(getProjectName()) ? null : 'text'),
          name: 'packageName',
          message: reset('Package name:'),
          initial: () => toValidPackageName(getProjectName()),
          validate: (dir) =>
            isValidPackageName(dir) || 'Invalid package.json name',
        },
        // 选择框架模板，默认为下标0的模板，也就是vanilla（原生）
        // 具体看FRAMEWORKS这个常量的模板内容
        {
          type:
            argTemplate && TEMPLATES.includes(argTemplate) ? null : 'select',
          name: 'framework',
          message:
            typeof argTemplate === 'string' && !TEMPLATES.includes(argTemplate)
              ? reset(
                  `"${argTemplate}" isn't a valid template. Please choose from below: `,
                )
              : reset('Select a framework:'),
          initial: 0,
          choices: FRAMEWORKS.map((framework) => {
            const frameworkColor = framework.color
            return {
              title: frameworkColor(framework.display || framework.name),
              value: framework,
            }
          }),
        },
        // 基于上面选择的框架模板，选择具体模板内容，例如ts模板，js模板
        {
          type: (framework: Framework) =>
            framework && framework.variants ? 'select' : null,
          name: 'variant',
          message: reset('Select a variant:'),
          choices: (framework: Framework) =>
            framework.variants.map((variant) => {
              const variantColor = variant.color
              return {
                title: variantColor(variant.display || variant.name),
                value: variant.name,
              }
            }),
        },
      ],
      {
        // 当用户取消选择时触发
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled')
        },
      },
    )
```

当我们选择完模板后，接下来就是拉取该模板了

我们继续看`prompt`之后的代码

```typescript
async function init() {
  // 忽略上面已经讲过的代码
  // 获取用户选择的答案
  const { framework, overwrite, packageName, variant } = result

  // 完整的目录路径
  const root = path.join(cwd, targetDir)

  // 如果选择的重写，则清空文件夹内容
  if (overwrite) {
    emptyDir(root)
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true })
  }

  // 模板名称
  let template: string = variant || framework?.name || argTemplate
  let isReactSwc = false
  // 如果是react-swc，设置isReactSwc为true，后续作为判断
  if (template.includes('-swc')) {
    isReactSwc = true
    template = template.replace('-swc', '')
  }

  // 获取包管理信息
  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm'
  // 判断是否为yarn管理器，处理@latest在yarn1.x中无法使用
  const isYarn1 = pkgManager === 'yarn' && pkgInfo?.version.startsWith('1.')
  // 有些模板含customCommand字段，会另外调用对应框架的pnpm create目录
  // 例如custom-vue中的customCommand字段为npm create vue@latest TARGET_DIR
  const { customCommand } =
    FRAMEWORKS.flatMap((f) => f.variants).find((v) => v.name === template) ?? {}

  if (customCommand) {
    const fullCustomCommand = customCommand
      .replace(/^npm create /, () => {
        // `bun create` uses it's own set of templates,
        // the closest alternative is using `bun x` directly on the package
        if (pkgManager === 'bun') {
          return 'bun x create-'
        }
        return `${pkgManager} create `
      })
      // Only Yarn 1.x doesn't support `@version` in the `create` command
      .replace('@latest', () => (isYarn1 ? '' : '@latest'))
      .replace(/^npm exec/, () => {
        // Prefer `pnpm dlx`, `yarn dlx`, or `bun x`
        if (pkgManager === 'pnpm') {
          return 'pnpm dlx'
        }
        if (pkgManager === 'yarn' && !isYarn1) {
          return 'yarn dlx'
        }
        if (pkgManager === 'bun') {
          return 'bun x'
        }
        // Use `npm exec` in all other cases,
        // including Yarn 1.x and other custom npm clients.
        return 'npm exec'
      })

    const [command, ...args] = fullCustomCommand.split(' ')
    // we replace TARGET_DIR here because targetDir may include a space
    const replacedArgs = args.map((arg) => arg.replace('TARGET_DIR', targetDir))
    const { status } = spawn.sync(command, replacedArgs, {
      stdio: 'inherit',
    })
    process.exit(status ?? 0)
  }

  console.log(`\nScaffolding project in ${root}...`)

  const templateDir = path.resolve(
    // fileURLToPath('file://nas/foo.txt');       // Correct:   \\nas\foo.txt (Windows)
    // 用于将file协议路径转化为文件路径
    fileURLToPath(import.meta.url),
    '../..',
    `template-${template}`,
  )

  // 写入模板
  const write = (file: string, content?: string) => {
    const targetPath = path.join(root, renameFiles[file] ?? file)
    // 如果有传递内容，按内容写入
    if (content) {
      fs.writeFileSync(targetPath, content)
    } else {
    // 拷贝目录下的模板到当前目录
      copy(path.join(templateDir, file), targetPath)
    }
  }

  // 读取模板文件，除package.jso外的文件写入到
  const files = fs.readdirSync(templateDir)
  for (const file of files.filter((f) => f !== 'package.json')) {
    write(file)
  }

  // 读取package.json
  const pkg = JSON.parse(
    fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'),
  )

  // 修改name属性，改为项目名称
  pkg.name = packageName || getProjectName()

  write('package.json', JSON.stringify(pkg, null, 2) + '\n')

  if (isReactSwc) {
    // 如果是swc模板，则将plugin-react替换为plugin-react-swc
    setupReactSwc(root, template.endsWith('-ts'))
  }

  // 最后显示指引文字，也就是我们看到的
  // cd xx
  // pnpm install
  // pnpm dev
  const cdProjectName = path.relative(cwd, root)
  console.log(`\nDone. Now run:\n`)
  if (root !== cwd) {
    console.log(
      `  cd ${
        cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName
      }`,
    )
  }
  switch (pkgManager) {
    case 'yarn':
      console.log('  yarn')
      console.log('  yarn dev')
      break
    default:
      console.log(`  ${pkgManager} install`)
      console.log(`  ${pkgManager} run dev`)
      break
  }
  console.log()
}
```

到此，`src/index.ts`文件已经被读完了，这就是我们项目在创建时的整个过程，整体来说这个文件阅读起来没有什么难度吧

当然，除了`pnpm create vite`之外，像`pnpm create vue`也是一样的，我们可以从[`create-vue`](https://github.com/vuejs/create-vue)项目中找到执行的脚本文件，这些就不再叙述了，感兴趣的同学可以去看看

## 依赖如何自动更新

不过，我还是有一个疑问，我看到每个`template`模板里的`package.json`的依赖版本是直接写上去，为什么不设置为`@latest`，或者是自动获取当前最新版本替换进`package.json`中，是因为担心出现各依赖版本之间兼容性问题吗？


带着这个疑问，我继续寻找答案，在一位大佬的提示下，我从`vite`的发布脚本中发现了一个名为`updateTemplateVersions`的函数

从这个函数名称，我们大概可以猜到它是用于更新模板版本

查看该函数，它里面执行了一下几步操作：

```typescript
export async function updateTemplateVersions(): Promise<void> {
  const viteVersion = fs.readJSONSync('packages/vite/package.json').version
  if (/beta|alpha|rc/.test(viteVersion)) return

  const dir = 'packages/create-vite'
  // 读取packages/create-vite文件夹中以template-开头的文件夹
  const templates = readdirSync(dir).filter((dir) =>
    dir.startsWith('template-'),
  )
  for (const template of templates) {
    const pkgPath = path.join(dir, template, `package.json`)
    const pkg = fs.readJSONSync(pkgPath)
    // 通过遍历，将每个模板中的vite版本替换为当前要发布的vite版本
    pkg.devDependencies.vite = `^` + viteVersion
    writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
  }
}
```

## Renovate

这个时候又会有个新的疑问？

那除了`vite`版本更新之外，像`Vue`，`React`这些模板中的框架版本又是怎么保证是最新的呢

我从模板中的`package.json`的`commit`开始入手

![20231014144703](https://raw.githubusercontent.com/QC2168/note-img/main/20231014144703.png)

从这个文件的`commit`中，除了发布`vite`时的`commit`，还有`renovate[bot]`提交的记录，我们点开看看

![20231014145007](https://raw.githubusercontent.com/QC2168/note-img/main/20231014145007.png)

这是一个`Github App`，`Renovate`提供了一种简单又强大的方式来检测并更新项目的依赖项

它会检查仓库中的依赖项，并拉起一条`Pull Request`来更新依赖项到最新版本或指定范围内的版本

保持项目依赖项的处于最新状态，提供更好的安全性和稳定性

> 感兴趣的同学，可以看看[Renovate documentation](https://docs.renovatebot.com/)

继续查阅相关配置文件（`.github/renovate.json5`），这里我也给这个配置文件写上注释，方便大家不熟悉`renovate`的同学阅读它

```json5
{
  // JSON 文件中的一个特殊字段
  // 指定该模式遵循的JSON模式标准的哪个草案
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  // 继承
  "extends": ["config:base", "schedule:weekly", "group:allNonMajor"],
  // PR中的标签
  "labels": ["dependencies"],
  // 忽略路径
  "ignorePaths": ["**/__tests__/**"],
  // 自动升级到符合范围要求的最新版本
  "rangeStrategy": "bump",
  // 不想要更新的依赖
  "packageRules": [
    {
      "depTypeList": ["peerDependencies"],
      "enabled": false,
    },
  ],
  // 不自动更新的依赖
  "ignoreDeps": [
    // manually bumping
    "esbuild",
    "rollup",
    "node",
    "typescript",

    // breaking changes
    "kill-port", // `kill-port:^2.0.0 has perf issues (#8392)
  ],
}
```

这也算是个额外所获了个知识点，本想了解一下项目是如何被创建的⭐⭐



