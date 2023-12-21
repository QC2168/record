---
title: echarts可拖拽的折线图
tags: [JavaScript]
---


> 本文将讲述实现可拖拽的折线图思路与部分代码分享，想直接看代码请[点这里]( https://github.com/QC2168/echart-drag-line)

## 需求

最近遇到一个需求，做一个可视化图表页面，里面有一个折线图可以说是这个页面中实现起来比较复杂，具体需求如下：

1. 可拖拽的圆点
2. 拖拽过程中，圆点需要保持在线上
3. 每个圆点需要带有标记

![image-20220315160641215](https://raw.githubusercontent.com/QC2168/note-img/main/202203151606336.png)



![黑人问号 - 一大波黑人问号即将来袭_黑人问号_群聊表情](http://tva1.sinaimg.cn/bmiddle/006Cmetyly1ff16b5ra02j30bp0bjjrq.jpg)

由于整个项目是使用`Echart`图表插件的，于是，我翻了官网上的案例，找到了一个官方提供的[可拖拽的例子](https://echarts.apache.org/handbook/zh/how-to/interaction/drag)并把这个案例进行了调试，看看能不能实现产品提的要求。发现官方的例子是使用了一个`GraphicComponent`组件来实现这个可拖拽的点（并通过层级来覆盖原有折现图表中的折点监听`onmousemove`事件来达到图层中的拖拽）。

问题来了，如果我是使用`GraphicComponent`组件来实现这个可拖拽的点的话，那么拖拽的问题解决了，但是我们怎么保持再这一条线上呢？这时候我又陷入困难之中。

但是方法总比困难多，最终实现了产品提的这个要求，我们先看看成品效果，当然在实现的过程也踩了很多的坑 🤡🤡

![img](https://raw.githubusercontent.com/QC2168/note-img/main/202203151615022.gif)

## 实现

我们先在代码中实现这一步功能，创建一个div元素并将他将给`echart.init`。（这个不用多说了吧，不会的同学我把链接放这了[快速上手](https://echarts.apache.org/handbook/zh/get-started/)）

## 创建绘制容器

```
<template>
  <div ref="lineChartDom" :style="{width: '780px',height:'200px'}"></div>
</template>
```

## 创建虚拟数据的文件

```typescript
// useData.ts
import { ref } from 'vue';
import { ChartDataItem } from './types';

export default function useData() {
  const data = ref<ChartDataItem[]>([]);
  function func(x: number): number {
    x /= 60;
    return Math.sin(x) * 10 + 10;
  }

  for (let i = 0; i <= 800; i += 0.1) {
    data.value.push([i, func(i)]);
  }
  return { data };
}
```

虚拟出数据之后，我们需要为`Echart`提供用于渲染图表的`Option`属性对象，接下来，创建`useOption.ts`文件，用于更新`Data`数据和获取`option`属性。

```typescript
// useOption.ts
import { EChartsOption, ChartDataItem } from './types';
import {ref} from "vue";

export default function useOption() {
  let option = ref<EChartsOption>({
    height: 120,
    grid: {
      show: false
    },
    xAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      axisTick: {
        show: false,
        length: 1
      },
      axisLine: {
        show: false
      }
    },
    series: [
      {
        data: [],
        type: 'line',
        color: '#5470c6',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          color: '#5470c6'
        },
        zlevel: 0
      }
    ]
  });
  const updateData = (data: ChartDataItem[]) => {
    // @ts-ignore
    option.value.series[0].data = data;
  };
  return {
    option,
    updateData
  };
}
```

现在就差渲染出图表到视图上，创建`useChart.ts`文件，处理图层渲染部分。

> 后续的逻辑大部分都是这个文件编写的

```typescript
// useChart.ts
import * as echarts from 'echarts/core';

import {
    EChartsOption,
} from './types';
import {DatasetComponent, GraphicComponent, GridComponent, TooltipComponent} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers'

echarts.use([GraphicComponent, GridComponent, DatasetComponent, TooltipComponent, CanvasRenderer]);
export default function useChart() {
    //  chart实例
    let Chart: any;
    const initCart = (lineChartDom: HTMLElement, option: EChartsOption) => {
        Chart = echarts.init(lineChartDom);
        Chart.setOption(option);
    };
    return {
        initCart
    };
}
```

```vue
<template>
  <div>
    <div id="lineChartDom" ref="lineChartDom" :style="{ width: '780px', height: '200px' }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import useChart from './useChart';
import useInitData from './useData';
import useOption from './useOption';
import { EChartsOption } from './types'

const lineChartDom = ref<HTMLElement>();
const { data } = useInitData();
const { option, updateData } = useOption();
const { createChart } = useChart();

onMounted(() => {
  updateData(data.value)
  createChart(lineChartDom.value!, (option.value as EChartsOption));
});

</script>

<style scoped></style>
```

按照上面的这一些步骤之后，你将在视图中看到以下效果

![image-20220315184958857](https://raw.githubusercontent.com/QC2168/note-img/main/202203151849982.png)

## 添加可拖拽的圆点

`EChart`提供了多种鼠标事件类型，像平时我们常用的`click`、`mousedown`、`mousemove`...等事件在`Echart`中都可以监听得到。

聪明的你，会发现有了鼠标事件，那我们就可以根据点击的位置来添加可拖拽的圆点了，没错！

我们在useEchart.ts中，添加监听mouseup事件，

> 为什么不是click事件？
>
> 因为`click`事件是在`mouseup`时触发的，我们需要实现的是当鼠标按住时的拖拽效果。接着在`mouseup`时再渲染圆点。接下去看！

在`EChart`中所有的鼠标事件包含参数 `params`，这是一个包含点击图形的数据信息的对象，如下格式：

```typescript
type EventParams = {
  // 当前点击的图形元素所属的组件名称，
  // 其值如 'series'、'markLine'、'markPoint'、'timeLine' 等。
  componentType: string;
  // 系列类型。值可能为：'line'、'bar'、'pie' 等。当 componentType 为 'series' 时有意义。
  seriesType: string;
  // 系列在传入的 option.series 中的 index。当 componentType 为 'series' 时有意义。
  seriesIndex: number;
  // 系列名称。当 componentType 为 'series' 时有意义。
  seriesName: string;
  // 数据名，类目名
  name: string;
  // 数据在传入的 data 数组中的 index
  dataIndex: number;
  // 传入的原始数据项
  data: Object;
  // sankey、graph 等图表同时含有 nodeData 和 edgeData 两种 data，
  // dataType 的值会是 'node' 或者 'edge'，表示当前点击在 node 还是 edge 上。
  // 其他大部分图表中只有一种 data，dataType 无意义。
  dataType: string;
  // 传入的数据值
  value: number | Array;
  // 数据图形的颜色。当 componentType 为 'series' 时有意义。
  color: string;
};
```

我们根据事件参数`params.componentType` 判断用户点击的位置，如果`params.componentType` 的值是`series`，说明用户当前点击的是折线上的位置。

在得知用户点击的位置的同时，我们得能通过`params.data`属性得到用户当前线上中的`data`数据。有了`data`数据我们就可以使用`echart.convertToPixel`方法得到转换后的`canvas`坐标系。

## 绘制圆点

`echart`支持用户绘制原生图形元素组件（`option.graphic`）

> graphic API相关文档 https://echarts.apache.org/zh/option.html#graphic

在图表中我们支持多个圆点数据，在绘制圆点之前我们需要先创建一个数组，用于存放这些圆点的数据集合，id是每个圆点的唯一标识，后续在删除元素需要用到，data存放圆点的坐标系。

```typescript
export interface MaskItemType {
  id: string;
  data: ChartDataItem;
}

// 圆点数据
let sourceDotPoints = ref<MaskItemType[]>([]);
```

在创建同目录下创建`useMark.ts`文件，用于获取当前圆点的`ID`，`ID`作为后续显示的`label`。

```typescript
// useMark.ts
import { ref } from 'vue';
import { MarkType } from './types';

export default function useMark() {
  // 分配标签
  let marks = ref<MarkType[]>(['h1', 'h2', 'h3', 'h4', 'h5']);
  const getMark = (): MarkType => {
    if (marks.value.length !== 0) {
      return marks.value.shift() as MarkType;
    } else {
      throw Error('标签已分配完毕');
    }
  };
  const returnMark = (mark: MarkType) => {
    return marks.value.unshift(mark);
  };
  return {
    getMark,
    returnMark
  };
}
```

在`useChart`中创建`drawAllDot`方法，用于绘制图表中的圆点。

```typescript
const drawAllDot = () => {
  Chart.setOption({
    graphic: echarts.util.map(sourceDotPoints.value, function (item, dataIndex) {
      return {
        id: item.id,
        type: 'circle',
        position: Chart.convertToPixel('grid', item.data),
        shape: { r: 10 / 2 },
        invisible: false,
        draggable: false,
        style: {
          fill: '#ffffff',
          stroke: '#33cccc'
        },
        z: 100,
      };
    })
  });
};
```

```typescript
// useChart createChart function
Chart.on('mouseup', function (params: EventParamsType) {
    if (params.componentType === 'series') {
        // 约束只能5个元素
        if (sourceDotPoints.value.length < 5) {
            // 获取标记，并在图形元素在添加上dot-标记，避免后续和label id冲突
            const id: MarkType = getMark();
            let dotObj: MaskItemType = {
                id: `dot-${id}`,
                data: params.data
            };
            // 添加到maskPoint并绘画
            sourceDotPoints.value.push(dotObj);
            drawAllDot();
        }
    }
})
```

![3](https://raw.githubusercontent.com/QC2168/note-img/main/202203211656565.gif)



## 沿着线的点

在上面，已经提到了假设我们采用`GraphicComponent`组件的拖拽功能是无法让这个圆点保持在折线上的。于是思考了一下有没有什么障眼法可以让用户认为当前鼠标上的圆点是这个被拖动的圆点？

我又翻了翻案例，发现了这个折线图例子，当我们把鼠标移入到图表中会出现一个小圆点，到了这里你可以联想到我们可以利用这个功能点让用户认为这是被拖拽的点。障眼法

![2](https://raw.githubusercontent.com/QC2168/note-img/main/202203151624394.gif)

它对应的属性是`option.grid.tooltip.trigger`属性等于`axis`时显示。

![image-20220315162852846](https://raw.githubusercontent.com/QC2168/note-img/main/202203151628943.png)

添加`mousedown`事件，当用户点击圆点时把被点击的圆点删除掉，接着如果用户是在折线上松开鼠标，那么就会触发上面写的绘制圆点事件，从而达到拖拽的效果。

```typescript
Chart.on('mousedown', function (params: EventParamsType) {
    if (params.componentType === 'series') {
      //
    } else if (params.componentType === 'graphic') {
      console.log('圆点被点击了');
      let cur: ChartEventTargetType = params.event.target as ChartEventTargetType;
      if (cur === null) return;
      let option = Chart!.getOption();
      let id = cur.id;
      // 删除圆点和label
      option.graphic = {
        id: id,
        $action: 'remove'
      };
      Chart.setOption(option);
      // 从记录中删除圆点
      let index = sourceDotPoints.value.findIndex((item) => (item.id = id));
      .value.splice(index, 1);
      //  把标签还回去
      let newId: MarkType = cur.id.replace('dot-', '') as MarkType;
      returnMark(newId);
      drawAllDot();
    }
  });
```

![4](https://raw.githubusercontent.com/QC2168/note-img/main/202203211709250.gif)

## 实现`label`标签

`label`标签的思想和绘制圆点一样，同样是使用`graphic`的text元素。

> 这里当时踩了不少的坑🙃🙃

当鼠标移到圆点上面时，显示当前圆点的标记（ID）。但是在这里不需要使用存放Label的数据，只需要一个`label`图形。

> 注意，将所有的`label`存放到数组中（和圆点一样），会导致的多次渲染删除标签，可能会发生页面卡顿的问题

```typescript
// label数据
let sourceLabelPoints = ref<MaskItemType[]>([]);
```

问题来了，文字要怎么渲染出来？

添加两个方法，用于显示、隐藏`label`图像。

定义一个`label`图形的`id`，

```typescript
const markLabelId:string = 'markLabelId';
```

`showLabel`：显示label图像，需要传入对应的`labelID`和显示的坐标系。

```typescript
const showLabel = (id: string, x: number, y: number, z: number) => {
  let newId = id.replace('dot', 'label');
  console.log(id, x, y, z);
  Chart.setOption({
    graphic: {
      id: markLabelId,
      type: 'text',
      $action: 'replace',
      x: x - 7,
      y: y - 30,
      z: 9999,
      invisible: false,
      draggable: false,
      shape: {
        width: 40,
        height: 20
      },
      style: {
        text: newId.replace('label-', ''),
        fill: '#95a5a6',
        lineWidth: 1,
        font: '14px Fira Sans, sans-serif'
      },
      transition: 'style',
      zlevel: 999
    }
  });
};
```

`hiddenLabel`：用于隐藏`label`图像，`graphic`图像中有一个`invisible`属性，用于设定图像是否可见。

```typescript
// 隐藏label
const hiddenLabel = (id: string): void => {
  let option = Chart!.getOption();
  option.graphic = [
    {
      id: markLabelId,
      $action: 'replace',
      type: 'text',
      invisible: false
    }
  ];
  console.log(option);
  Chart.setOption(option);
};
```

修改`drawAllDot`方法，在圆点图像上添加鼠标悬浮进入和移出事件。对应上面的`show`/`hidden`方法。

在图形中添加`onmouseover`，当事件触发时将当前圆点的id和对应的坐标系信息传入到`showLabel`方法，`onmouseout`方法则对应`hiddenLabel`方法，传入对应的id隐藏对应的label元素。

```typescript
const drawAllDot = () => {
  Chart.setOption({
    graphic: echarts.util.map(sourceDotPoints.value, function (item, dataIndex) {
      return {
        id: item.id,
        type: 'circle',
        position: Chart.convertToPixel('grid', item.data),
        shape: { r: 10 / 2 },
        invisible: false,
        draggable: false,
        style: {
          fill: '#ffffff',
          stroke: '#33cccc'
        },
        z: 100,
        onmouseover: function (e: MouseEvent) {
          // 渲染label
          let target: ChartEventTargetType = e.target as ChartEventTargetType;
          console.log('target', target);
          showLabel(target.id, target.x, target.y, target.z);
        },
        onmouseout: function () {
          // 清空label
          hiddenLabel(this.id);
        }
      };
    })
  });
};
```

配置完圆点图形之后，接下来要在`mousedown`方法中在补充一下信息。当圆点被点击时，此时`label`是处于一个显示状态的，我们要掉用`hiddenLabel`方法将其隐藏。

```typescript
Chart.on('mousedown', function (params: EventParamsType) {
  if (params.componentType === 'series') {
    //
  } else if (params.componentType === 'graphic') {
    console.log('圆点被点击了');
    let cur: ChartEventTargetType = params.event.target as ChartEventTargetType;
    if (cur === null) return;
    let option = Chart!.getOption();
    let id = cur.id;
    // 删除圆点和label
    option.graphic = {
      id: id,
      $action: 'remove'
    };
    hiddenLabel(id);
    Chart.setOption(option);
    // 从记录中删除标签
    let index = sourceDotPoints.value.findIndex((item) => (item.id === id));
    sourceDotPoints.value.splice(index, 1);
    //  把标签还回去
    let newId: MarkType = cur.id.replace('dot-', '') as MarkType;
    returnMark(newId);
  }
});
```

![5](https://raw.githubusercontent.com/QC2168/note-img/main/202203211758795.gif)



好了，现在我们已经实现效果图了，同时本文的例子我已经放到了`GITHUB`上 [点这里]( https://github.com/QC2168/echart-drag-line) ，有需要看完整代码的同学可以进去看。

![程序员有哪些专用的聊天表情包啊……？ - 知乎](https://raw.githubusercontent.com/QC2168/note-img/main/202204021520205.jpeg)

## 总结

怎么说吧，这个需求整体来说不是很难也不是很简单，但是在实现的过程我也发生了一些小问题需要去解决。重复地试了各种方法最终给整了出来。
