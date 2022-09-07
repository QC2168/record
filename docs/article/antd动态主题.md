## 实现效果

## 实现原理
通过修改antd样式中的前缀，改变对应的类选择器实现样式改变。
## 搭建环境
快速创建模板~
```
// 执行该命令创建一个基于vite的react+ts模板
pnpm create vite antd-dynamic-theme -- --template react-ts
```
```bash
// output:

Done. Now run:

  cd antd-dynamic-theme
  pnpm install
  pnpm run dev
```
安装 antd UI

```
pnpm add antd
```
在App.css中引入`antd/dist/antd.css`即完成安装

```css
@import 'antd/dist/antd.css';
```

## 引入组件
我们需要使用antd中的ConfigProvider作为我们的根组件,用于控制antd样式的前缀(搭配`prefix`变量使用)。
> 例如`prefixCls`值设置为`dark`, 那么`ant-table-cell`将会被转换为`dark-table-cell`
和效果图上一样,我们使用单选框进行主题的切换,以及一个table组件来显示效果.
这里我直接将组件代码贴出来
### App
```tsx
// App.tsx

import { useState } from "react";
import "./App.css";
import { ConfigProvider, Radio, RadioChangeEvent } from "antd";
import DemoTable from "./components";
import './App.css'

function App() {
  // 定义主题类型
  enum ThemeType {
    DEFAULT = "default",
    DARK = "dark",
  }
  // 当前主题
  const [theme, setTheme] = useState<ThemeType>(ThemeType.DEFAULT);
  // 切换主题
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setTheme(e.target.value);
  };
  return (
    // 通过prefixCls值切换对应的class样式，后面会补上
    <ConfigProvider>
      <div className='App'>
        <Radio.Group onChange={onChange} value={theme}>
          <Radio value={ThemeType.DEFAULT}>default</Radio>
          <Radio value={ThemeType.DARK}>dark</Radio>
        </Radio.Group>
        <div>current theme:{theme}</div>
        {/* 表格 */}
        <DemoTable></DemoTable>
      </div>
    </ConfigProvider>
  );
}

export default App;
```

###  table组件

```tsx
// src/components/index.tsx
import {Table} from "antd";


export default function DemoTable (){
    const dataSource = [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ];

      const columns = [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ];

     return  <Table dataSource={dataSource} columns={columns} />;
}
```
替换项目中的App.tsx和components/index.tsx，将会得到和下图中一样的效果。现在我们还不能做到切换，因为还没有引入主题样式文件以及切换功能。
![20220831095344](https://raw.githubusercontent.com/QC2168/note-img/main/20220831095344.png)

## 引入主题文件
接下来, 在项目的`src`目录下创建一个`theme`文件夹,用于放置不同主题文件
`antd`官方为我们提供了三种官方主题,这里我们拿暗黑主题作为本文的例子,有兴趣的同学也可以将另外两个主题给添加进来
- 🌑 暗黑主题
- 📦 紧凑主题
- ☁️ 阿里云控制台主题

在使用`less`文件之前，我们需要给项目安装上less并在`vite.config.ts`中配置一下代码开启`javascript`功能

```
pnpm add less -D
```

```typescript
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      less: {
        javascriptEnabled: true,
      },
    }
  }
})
```

在`theme`文件夹中创建`default.less`,`dark.less`,`index.less`

```less
// default.less
@import 'node_modules/antd/dist/antd.less';
@ant-prefix: default;
```
```less
// dark.less
@import 'node_modules/antd/dist/antd.dark.less';
@ant-prefix: dark;
```
```less
// index.less
@import './dark.less';
@import './default.less';
```
接下来在app.tsx中引入index.less
```tsx
import "./theme/index.less";
```
到了这里,我们已经实现了主题的切换,但是有一个小问题,antd提供的antd.less和dark.less文件中都包含了body选择器,当我们将这两个less文件引入时就会出现覆盖的情况



为了解决这一问题,我们需要使用lessc对less进行编译成css文件来改动它的body选择器。

## 编译less
在命令行中输入一下以下命令进行编译。
> 执行以下命令需要全局less `pnpm add -g pnpm`
```less
// dark.less to dark.css
lessc --js src/theme/dark.less  src/theme/dark.css

// default.less to default.css
lessc --js src/theme/default.less  src/theme/default.css

```
编译之后,我们需要在这两个编译的css中找到`body{}`(大约在35行左右),向`body`后添加我们的主题前缀即可

```css
body .default{
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-variant: tabular-nums;
  line-height: 1.5715;
  background-color: #fff;
  font-feature-settings: 'tnum';
}

body .dark{
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-variant: tabular-nums;
  line-height: 1.5715;
  background-color: #000;
  font-feature-settings: 'tnum';
}
```
## 使用less变量主题
在实现了主题切换之后,但我们对主题有定制颜色时也很简单,我们只需要在`less`文件中设置变量值即可

```less
// var.less
@primary-color: #7d53b0; // 全局主色
@link-color: #b898d5; // 链接色
@success-color: #986dc6; // 成功色
@warning-color: #080808; // 警告色
@error-color: #f5222d; // 错误色
@font-size-base: 14px; // 主字号
```
在`default.less,dark.less`中引入`var.less`文件,再进行编译即可.

## prefixCls失效问题
- 项目中如果使用到了`message`, `modal`, `notification`方法时,需要在`setTheme`时调用`ConfigProvider.config`方法
```
ConfigProvider.config({
  prefixCls: 'ant',
  iconPrefixCls: 'anticon',
});
```
## 