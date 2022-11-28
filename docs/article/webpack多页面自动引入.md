
### 前言

在之前，我写了一个`webpack`的模板。在平时我写栗子或者是写几个页面的时候会用到它。当这个模板需要多个页面时需要手动到`webpack.config.ts`文件中配置`entry`和`HtmlWebpackPlugin`，有点麻烦。

### 思考

我们项目中的页面都是存放在`src/pages/*.html`中的，我们可以搜索这里文件夹下的`html`文件我们可以利用`node`中的`glob`包中的`.sync`方法，用来匹配搜索我们想要的文件。将匹配到的文件名自动生成一个`entrys`对象赋值到`webpack.config.ts`文件中的`entry`属性即可。`HtmlWebpackPlugin`同理。

### 安装glob

```bash
pnpm add glob
```

### 创建工具类

在`src`目录下创建`uilts/index.ts`文件，引入所需的依赖包（`glob`、`path`、`html-webpack-plugin`）。

```
src
  └─uilts
  	└─index.ts
```

```typescript
// uilts/index.ts
import Glob from 'glob';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
```

#### getEntry

封装`getEntry`方法，用于搜索页面所引入的脚本文件，该方法需要传入一个匹配规则也就是路径，使用`glob`包中的`.sync`方法进行搜索，该方法返回匹配到的数据集。将获奖到的文件名称及路径拼接成`entry`对象所需的`key:value`即可，最终`getEntry`返回一个对象。

```typescript
export function getEntry(globPath: string): entryObj {
  const entries: entryObj = { main: './src/main.ts' };
  Glob.sync(`${globPath}.ts`).forEach((entry: string) => {
    const basename: string = path.basename(entry, path.extname(entry));
    const pathname: string = path.dirname(entry);
    entries[basename] = `${pathname}/${basename}`;
  });
  return entries;
}
```

#### getHtmlWebpackPlugin

封装`getHtmlWebpackPlugin`方法，用于输出所有匹配到的`HtmlWebpackPlugin`对象。它同样传入一个匹配规则，匹配所有`*.html`文件，

```typescript
export function getHtmlWebpackPlugin(globPath: string): HtmlWebpackPlugin[] {
  const htmlPlugins: HtmlWebpackPlugin[] = [];
  Glob.sync(`${globPath}.html`).forEach((entry: string) => {
    const basename: string = path.basename(entry, path.extname(entry));
    const pathname: string = path.dirname(entry);
    htmlPlugins.push(new HtmlWebpackPlugin({
      title: basename,
      filename: `${basename}.html`,
      template: `${pathname}/${basename}.html`,
      chunks: [basename, 'main'],
      minify: true,
    }));
  });
  return htmlPlugins;
}
```

#### 二次封装

有了这两个方法之后，在把两个方法再封装成`getPages`函数.，到时候在`webpack.config.ts`中调用它就可以直接拿到`entry`对象和`htmlPlugins`数组。

```typescript
interface getPagesType {
  entries: entryObj,
  htmlPlugins: HtmlWebpackPlugin[]
}

export function getPages(pagePath: string): getPagesType {
  const entries: entryObj = getEntry(pagePath);
  const htmlPlugins: HtmlWebpackPlugin[] = getHtmlWebpackPlugin(pagePath);
  return {
    entries,
    htmlPlugins,
  };
}
```

### 应用

在`webpack.config.ts`中使用`getPages`函数。

 引入`getPages`函数，传入项目中页面所在的路径。使用`ES6`的解构获奖返回的数据对象。

```typescript
// webpack.config.ts
const { entries, htmlPlugins } = getPages('./src/pages/**/*');

const config: Configuration = {
  mode: 'development',
  entry: entries,
  // ...
  plugins: [
    ...htmlPlugins,
  ],
};
```

![image-20220122161150279](https://raw.githubusercontent.com/QC2168/note-img/main/202201221612253.png)

![image-20220122161054056](https://raw.githubusercontent.com/QC2168/note-img/main/202201221610125.png)
