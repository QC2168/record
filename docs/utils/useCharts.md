## useCharts

### 📖 介绍

基于`VueCPA`二次封装的`useCharts`，让您在使用`echarts`绘制图表时更快更简单！

### 🌈 功能

- [x] 自适应图表大小
- [x] Loading效果
- [x] 自定义主题样式
- [x] 自定义渲染模式

### 📦 安装

> pnpm (推荐使用pnpm包，当然也要遵循当前项目包管理工具约束哦)

::: code-group

```bash [pnpm]
pnpm add echarts @qc2168/use-charts
```

```bash [yarn]
yarn add echarts @qc2168/use-charts
```

```bash [npm]
npm install echarts @qc2168/use-charts
```

:::


### 🤖 例子

```vue
// template

<!-- 定义一个Div元素，并设置宽高 -->

<div ref="chartEl" style="height:200px;width:200px;"/>


// script setup
import useChart from "@qc2168/use-charts"
//  provide a element
const chartEl = ref<HTMLDivElement | null>(null)

const {
    setOption,
    showLoading,
} = useChart(chartEl as Ref<HTMLDivElement>)

onMounted(() => {
    nextTick(() => {
        // turn on chart loading ~
        showLoading()
        // setOption
        setOption({
            /* set data ... */
        })
    })
})
```

[查看完整的演示代码](https://github.com/QC2168/useCharts/tree/main/example)

### 🛠️ 选项

| 属性      | 描述           | 类型                    | 必选      |
|---------|--------------|-----------------------|---------|
| elRef   | 渲染`Dom`元素    | `Ref<HTMLDivElement>` | `true`  |
| Options | 见`Options`类型 | `OptionsType`         | `false` |

#### 🛠️ Options类型

| 属性            | <div style="width:130px">描述</div> | 类型                                                 | 必选      | 默认值                      |
|---------------|-----------------------------------|----------------------------------------------------|---------|--------------------------|
| render        | 渲染模式                              | `RenderType.SVGRenderer/RenderType.CanvasRenderer` | `false` | `RenderType.SVGRenderer` |
| autoChartSize | 自动监听元素大小                          | `boolean`                                          | `false` | `false`                  |
| animation     | 见`Animation`类型                    | `AnimationType`                                    | `false` | `{}`                     |
| theme         | 图表主题                              | `ThemeType.Light/ThemeType.Dark/ThemeType.Default` | `false` | `ThemeType.Default`      |

#### 🛠️ Animation类型

| 属性     | 描述     | 类型        | 必选      | 默认值 |
|--------|--------|-----------|---------|-----|
| enable | 开启过渡动画 | `boolean` | `false` | 空   |
| styles | 过渡样式   | `Object`  | `false` | 空   |
