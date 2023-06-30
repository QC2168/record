## EditorConfig和Eslint有什么区别

### EditorConfig

[`editorConfig`](https://editorconfig.org/)，顾名思义就是编辑器的配置文件，当在项目中配置了`editorConfig`文件，编辑器在格式化时会根据配置文件遵循定义的样式，解决在不同`IDE`之间格式化代码的样式

聊一个比较典型的问题，那就是代码缩进，你会使用空格还是Tab键来进行缩进代码，另外还可能会涉及到文件定义换行符配置，是使用`lf`、`cr`还是`crlf`？

`editorConfig`的出现就是要来解决这一类问题的，统一代码文件的代码样式，避免在开发的过程中出现一个文件一种代码样式的问题

#### 插件支持

如果你是使用`vscode`，它没有内置`EditorConfig`的插件，我们需要手动安装一下`EditorConfig for VS Code`插件

![20230630152840](https://raw.githubusercontent.com/QC2168/note-img/main/20230630152840.png)


### ESLINT

[`eslint`](https://eslint.org/)也是一个约束代码的，但是它和上面的`editorconfig`有所区别，`eslint`它更倾向于代码的质量和样式

#### 代码质量

例如，我们声明了一个`foo`变量，但是我们在代码中并没有使用到它，又或者我们在写等号判断时，写成了`==`，而不是更严谨的`===`

#### 代码样式

例如，对象属性结尾是否要追加逗号，代码之间的空格间隔，字符串使用单引号，双引号之类的

以上所提到的这些规则，我们都是可以在`eslintrc`配置文件中的`rules`自行配置的

但在日常的项目开发中，我们会直接使用官方预设好的扩展，不需要自己手动去配置每一条规则，下面的代码，使用的是`eslint`官方推荐的`rules`

```json
{
    "extends": "eslint:recommended"
}
```

#### 插件支持

同样的，`vscode`没有内置`EditorConfig`的插件，我们需要手动安装一下`ESLint`插件来实现代码校验

![20230630163037](https://raw.githubusercontent.com/QC2168/note-img/main/20230630163037.png)