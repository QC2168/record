---
title: Vue3组件封装
tags: [JavaScript,vue]
---


## 为什么需要封装组件

**组件的封装分为两种，分别是视图封装、逻辑封装**

## 视图封装

在日常开发中，当你的项目页面比较复杂时，在没有做出任何封装处理的情况下一个SFC可能高达几千行代码数据，一个`SFC`文件中他包含了三个部分，分别是`template`、`script`、`style`。如果你没有做任何封装处理的话，当你需要对这个组件进行维护时，你可以需要花几十秒去定位到对应的代码位置。这在开发中会降低你的开发效率。所以就有了关于组件的封装思想，将对应各个视图进行一个抽离式封装，尽可能的减少主`SFC`的代码行数以及后期的可维护性。

## 逻辑封装

一个页面可能涉及到多个逻辑功能，在`Vue2`中在一个`SFC`中使用`OptionsAPI`的写法，当你的页面中涉及到多个逻辑功能时你的代码会在`data`、`methods`都会存在一些代码块，当你需要编写或者调试时你需要在这些区域中跳来跳去，这会减低你的开发效率。

而`Vue3`的到来，新增了`CompositionAPI`，这很好的解决Vue2中的`OptionApi`逻辑代码分离的问题，在`CompositionApi`中你可以将每个一个逻辑功能写在一个`JavaScript`、`typescript`文件中，并导出在我们的`SFC`中使用即可。

## 如何封装组件

在封装组件之前，我们需要有一个`Vue`组件（废话...），我们先看看这个界面是如何的，接下来我们要怎么去区分它们的功能块，然后按照功能进行一个逻辑功能抽离和视图抽离，今天我们主要先讲关于视图的封装。

![image-20220226205220242](https://raw.githubusercontent.com/QC2168/note-img/main/202202262052955.png)

这是一个还没有封装的静态页面，目前还没有对任何逻辑的页面，本文将介绍如何去封装这一个页面

## 分析

- 在页面中那些小组件是可以复用的，将这些标签进行组件封装
- 按照页面中的功能模块进行组件封装

最终我将它们分出`Card`组件、`Data`组件、`Option`组件、`Chart`组件、`Progress`组件。

![image-20220226210314325](https://raw.githubusercontent.com/QC2168/note-img/main/202202262103443.png)

源`Vue`文件代码，这里我截取了`template`中的内容，逻辑这块我们暂不抽离处理。

```vue
<template>
    <!-- 文件卡片 -->
    <div class="flex">
        <div
            class="w-full h-[200]px bg-white rounded-md shadow-sm p-5 m-4 transition-shadow duration-700 hover:shadow-lg"
        >
            <div class="flex place-content-between align-center">
                <div class="text-xl">设备信息</div>
                <div>
                    <el-icon :size="30" color="gray">
                        <setting />
                    </el-icon>
                </div>
            </div>
            <el-divider></el-divider>
            <div>
                <!-- 设备信息 -->
                <div class="flex place-content-between mb-3">
                    <div>设备型号</div>
                    <div>MI10 Pro</div>
                </div>
                <div class="flex place-content-between mb-3">
                    <div>设备状态</div>
                    <div>
                        <el-tag class="ml-2" type="success">已连接</el-tag>
                    </div>
                </div>
                <div class="flex place-content-between mb-3">
                    <div>设备标识</div>
                    <div>5fd0a5b4</div>
                </div>
                <div class="flex w-full my-5 place-content-around">
                    <div>
                        <div class="mb-2 text-center">存储情况</div>
                        <div>
                            <el-progress type="circle" :percentage="27" />
                        </div>
                    </div>
                    <div>
                        <div class="mb-2 text-center">设备电量</div>
                        <div>
                            <el-progress type="circle" color="#67C23A" :percentage="100" />
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-3 mt-3 gap-2">
                    <el-button type="primary">一键备份</el-button>
                    <el-button type="primary">对比数据</el-button>
                    <el-button type="danger">删除数据</el-button>
                </div>
                <div class="mt-4 flex justify-center border-solid border rounded border-gray-200">
                    <el-checkbox v-model="deleteAllData" label="任务完删除源数据（谨慎）" />
                    <el-checkbox v-model="fullBackup" label="全量备份" />
                </div>
            </div>
        </div>
        <div
            class="w-full h-[200]px bg-white rounded-md shadow-sm p-5 m-4 transition-shadow duration-700 hover:shadow-lg"
        >
            <div class="flex place-content-between align-center">
                <div class="text-xl">文件类型分析</div>
                <div>
                    <el-icon>
                        <arrow-right-bold />
                    </el-icon>
                </div>
            </div>
            <el-divider></el-divider>
            <div ref="dataAnalysisDom" class="w-[400]px h-[400]px flex justify-center"></div>
        </div>
    </div>
</template>
```

## 组件抽离

上面我们分出了5个组件出来，其中`Card`组件后续可能会被复用到，而其他组件的复用性可能不是很强。（`echart`组件在本文先不做封装处理）

所以，我们将`Card`组件封装到`src/components`中，其余组件放到`views/home/childComponents`（页面所在的`Vue`文件下）。

封装`Card`组件

`Card`组件主要分为三个部分，分别是标题、图标、显示的内容，接收方式为标题需要用户传入`title`属性，图标和显示内容是需要传入元素数据的，我们使用`vue`中的插槽进行封装，得出来的结果是

```vue
<template>
    <div
        class="w-full h-[200]px bg-white rounded-md shadow-sm p-5 m-4 transition-shadow duration-700 hover:shadow-lg"
    >
        <div class="flex place-content-between align-center">
            <div class="text-xl">{{ props.title }}</div>
            <div>
                <slot name="icon"></slot>
            </div>
        </div>
        <el-divider></el-divider>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>
```

封装`Data`组件

`Data`组件实际上像一个列表，主要接收一个数组，渲染对应的文字信息。

```vue
<template>
    <div
        v-for="({ name, value, tag }, index) in props.data"
        :key="name"
        class="flex place-content-between mb-3"
    >
        <div>{{ name }}</div>
        <div v-if="tag">
            <el-tag class="ml-2" :type="tag.type">{{ value }}</el-tag>
        </div>
        <div v-else>{{ value }}</div>
    </div>
</template>

<script setup lang="ts">
interface dataType {
    name: string
    value: string
    tag?: {
        type: "success" | "warning" | "info" | "danger"
    }
}
interface PropsType {
    data: dataType[]
}
const props = defineProps<PropsType>()
</script>
```

封装`Progress`组件

`Progress`组件和上面`data`组件类似，可以通过列表渲染的方式来简化代码，这里需要注意的是进度条组件这里是使用了`elementplus`中的进度条组件，我们可以接收这个组件所需的参数使用`v-bind`传到`el-progress`上

```vue
<template>
    <div class="flex w-full my-5 place-content-around">
        <div
            v-for="{
                name, attrs
            } in props.data"
            :key="name"
        >
            <div class="mb-2 text-center">{{ name }}</div>
            <div>
                <el-progress v-bind="attrs" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface progressDataType {
    name: string
    attrs: string
}
 interface PropsType {
    data: progressDataType[]
}
const props = defineProps<PropsType>()
</script>
```

封装`options`组件

`options`组件不像刚刚的`data`、`progress`组件一样可以通过列表渲染的方式来简化代码，我们使用自定义事件，当按钮点击时将对应的功能发送告知父组件。

```vue
<template>
    <div class="grid grid-cols-3 mt-3 gap-2">
        <el-button @click="emit('backup', options)" type="primary">一键备份</el-button>
        <el-button @click="emit('diff')" type="primary">对比数据</el-button>
        <el-button @click="emit('delete')" type="danger">删除备份</el-button>
    </div>
    <div class="mt-4 flex justify-center border-solid border rounded border-gray-200">
        <el-checkbox v-model="options.deleteAllData" label="任务完删除源数据（谨慎）" />
        <el-checkbox v-model="options.fullBackup" label="全量备份" />
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
interface optionsType {
    deleteAllData: boolean,
    fullBackup: boolean
}
// 选择框数据
const options = reactive<optionsType>({
    deleteAllData: false,
    fullBackup: false
})
// 事件
const emit = defineEmits<{
    (e: 'backup', options: optionsType): void
    (e: 'diff'): void
    (e: 'delete'): void
}>()
</script>

<style lang="less" scoped>
</style>
```

## 使用组件

当所有的组件封装好了之后，我们只需要通过import方式导入对应的组件并插入到template中即可。（别忘记传入数据哦）

```typescript
import Card from '../../components/Card/index.vue';
import Data from './childComponents/Data.vue';
import Progress from './childComponents/Progress.vue';
import Options from './childComponents/Options.vue';
```

```vue
<template>
    <!-- 文件卡片 -->
    <div class="flex">
        <card title="设备信息">
            <template v-slot:icon>
                <el-icon :size="30" color="gray">
                    <setting />
                </el-icon>
            </template>
            <template v-slot:default>
                <!-- 设备信息 -->
                <Data :data="dataList"></Data>
                <Progress :data="progressList"></Progress>
                <Options @backup="backup" @diff="diff" @delete="deleteData"></Options>
            </template>
        </card>
        <card title="文件类型分析">
            <template v-slot:icon>
                <el-icon>
                    <arrow-right-bold />
                </el-icon>
            </template>
            <template v-slot:default>
                <div ref="dataAnalysisDom" class="w-[400]px h-[400]px flex justify-center"></div>
            </template>
        </card>
    </div>
</template>
```

可以看到，现在组件是整体看起来不会像刚刚一样很复杂，之前当你要修改其中某一个部分时你可能需要花费十几秒去找到对应的代码位置，而现在只需要进入对应的组件进行修改即可。

