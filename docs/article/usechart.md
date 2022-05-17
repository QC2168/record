如何在Vue3中更优雅的使用`echart`图表

## 前言

在大屏可视化项目中，我们常常需要用到很多的图表组件，通常你会编写很多的`option`对图表进行渲染，以及引入它们所需的一些组件并使用`echart.use`。

在`Vue2`中我们常常把可复用的组件单独抽离出来，再通过`props`、`emit`等方法向复用组件中传入组件所需数据，而在`Vue3`中我们可以将一些逻辑功能写成hook进行抽离和复用再传入到视图中，这会不仅让你的组件中的代码更加优雅而且阅读性更强。

### 封装思路

#### 引入模块

我们先创建`lib.ts`文件，用于将`echart`图表中所需要用到组件全部引入进来并导出。

> 由于引入的模块过多，所以我们把它引入的模块的代码抽离出来，增加代码的可阅读性

```typescript
// lib.ts
import * as echarts from 'echarts/core';

import {
    BarChart,
    LineChart,
    PieChart,
    MapChart,
    PictorialBarChart,
    RadarChart,
    ScatterChart
} from 'echarts/charts';

import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    PolarComponent,
    AriaComponent,
    ParallelComponent,
    LegendComponent,
    RadarComponent,
    ToolboxComponent,
    DataZoomComponent,
    VisualMapComponent,
    TimelineComponent,
    CalendarComponent,
    GraphicComponent
} from 'echarts/components';


echarts.use([
    LegendComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    PolarComponent,
    AriaComponent,
    ParallelComponent,
    BarChart,
    LineChart,
    PieChart,
    MapChart,
    RadarChart,
    PictorialBarChart,
    RadarComponent,
    ToolboxComponent,
    DataZoomComponent,
    VisualMapComponent,
    TimelineComponent,
    CalendarComponent,
    GraphicComponent,
    ScatterChart
]);

export default echarts;

```

#### 封装功能

在同级目录下创建一个`useChart.ts`文件，这是我们复用`echart`图表`hook`文件。

封装功能如下：

- 监听图表元素变化及视图，自动重新渲染图表适应高度
- 可传入主题、渲染模式（`SVG`、`Canvas`）
- `loading`效果

```typescript
import { nextTick, onMounted, onUnmounted, Ref, unref } from "vue";
import type { EChartsOption } from 'echarts';
import echarts from "./lib";
import { SVGRenderer, CanvasRenderer } from "echarts/renderers";
import { RenderType, ThemeType } from "./types";

export default function useChart(elRef: Ref<HTMLDivElement>, autoChartSize = false, animation: boolean = false, render: RenderType = RenderType.SVGRenderer, theme: ThemeType = ThemeType.Default) {
    // 渲染模式
    echarts.use(render === RenderType.SVGRenderer ? SVGRenderer : CanvasRenderer)
    // echart实例
    let chartInstance: echarts.ECharts | null = null;

    // 初始化echart
    const initCharts = () => {
        const el = unref(elRef)
        if (!el || !unref(el)) {
            return
        }
        chartInstance = echarts.init(el, theme);
    }

    // 更新/设置配置
    const setOption = (option: EChartsOption) => {
        nextTick(() => {
            if (!chartInstance) {
                initCharts();
                if (!chartInstance) return;
            }

            chartInstance.setOption(option)
            hideLoading()
        })

    }

    // 获取echart实例
    function getInstance(): echarts.ECharts | null {
        if (!chartInstance) {
            initCharts();
        }
        return chartInstance;
    }

    // 更新大小
    function resize() {
        chartInstance?.resize();
    }

    // 监听元素大小
    function watchEl() {
        // 给元素添加过渡
        if (animation) { elRef.value.style.transition = 'width 1s, height 1s' }
        const resizeObserver = new ResizeObserver((entries => resize()))
        resizeObserver.observe(elRef.value);
    }

    // 显示加载状
    function showLoading() {
        if (!chartInstance) {
            initCharts();
        }
        chartInstance?.showLoading()
    }
    // 显示加载状
    function hideLoading() {
        if (!chartInstance) {
            initCharts();
        }
        chartInstance?.hideLoading()
    }

    onMounted(() => {
        window.addEventListener('resize', resize)
        if (autoChartSize) watchEl();
    })

    onUnmounted(() => {
        window.removeEventListener('resize', resize)
    })

    return {
        setOption,
        getInstance,
        showLoading,
        hideLoading
    }
}
```

```typescript
// types.ts
export enum RenderType {
    SVGRenderer = 'SVGRenderer',
    CanvasRenderer = 'SVGRenderer'
}
export enum ThemeType {
    Light = 'light',
    Dark = 'dark',
    Default = 'default'
}
```

有了以上封装好之后的代码，我们在组件中使用`echart`图表库时将会更加简单而高效。

#### 使用例子

```vue
// index.vue
<template>
    <div ref="chartEl" :style="{ width: `300px`, height: `300px` }"></div>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref, computed, nextTick } from "vue";
import type { EChartsOption } from 'echarts'
import useChart, { RenderType, ThemeType } from '../../useChart'
import axios from 'axios'

const option = computed<EChartsOption>(() => ({
   // ...chart option
}))

const chartEl = ref<HTMLDivElement | null>(null)

const {
    setOption,
    showLoading
} = useChart(chartEl as Ref<HTMLDivElement>, true, true, RenderType.SVGRenderer, ThemeType.Dark)



onMounted(() => {
    nextTick(() => {
    	// 显示loading
        showLoading()
        // 假装有网络请求 ...
        // 渲染图表
        setOption(option.value);
    })
})

</script>
```

`Github`仓库地址（含例子）：https://github.com/QC2168/useCharts