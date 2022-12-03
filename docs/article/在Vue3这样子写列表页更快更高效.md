---
title: 在Vue3这样子写列表页更快更高效
tags: [utils]
cover: https://raw.githubusercontent.com/QC2168/note-img/main/20221203194155.png
---

## 前言

在开发管理后台过程中，一定会遇到不少了增删改查页面，而这些页面的逻辑大多都是相同的，如获取列表数据，分页，筛选功能这些基本功能。而不同的是呈现出来的数据项。还有一些操作按钮。

![20221203192923](https://raw.githubusercontent.com/QC2168/note-img/main/20221203192923.png)

对于刚开始只有 1，2 个页面的时候大多数开发者可能会直接将之前的页面代码再拷贝多一份出来，而随着项目的推进类似页面数量可能会越来越多，这直接导致项目代码耦合度越来越高。

这也是为什么在项目中一些可复用的函数或组件要抽离出来的主要原因之一

下面，我们封装一个通用的`useList`，适配大多数增删改查的列表页面，让你更快更高效的完成任务，准点下班 ~

![20221203195440](https://raw.githubusercontent.com/QC2168/note-img/main/20221203195440.png)

## 前置知识

- Vue
- [Vue Composition Api](https://cn.vuejs.org/guide/introduction.html#api-styles)

## 封装

我们需要将一些通用的参数和函数抽离出来，封装成一个通用`hook`，后续在其他页面复用相同功能更加简单方便。

### 定义列表页面必不可少的分页数据

```typescript
export default function useList() {
  // 加载态
  const loading = ref(false);
  // 当前页
  const curPage = ref(1);
  // 总数量
  const total = ref(0);
  // 分页大小
  const pageSize = ref(10);
}
```

### 如何获取列表数据

思考一番，让`useList`函数接收一个`listRequestFn`参数，用于请求列表中的数据。

定义一个`list`变量，用于存放网络请求回来的数据内容，由于在内部无法直接确定列表数据类型，通过泛型的方式让外部提供列表数据类型。

```typescript
export default function useList<ItemType extends Object>(
  listRequestFn: Function
) {
  // 忽略其他代码
  const list = ref<ItemType[]>([]);
}
```

在`useList`中创建一个`loadData`函数，用于调用获取数据函数，该函数接收一个参数用于获取指定页数的数据（可选，默认为`curPage`的值）。

- 执行流程

1. 设置加载状态
2. 调用外部传入的函数，将获取到的数据赋值到`list`和`total`中
3. 关闭加载态

> 这里使用了 async/await 语法，假设请求出错、解构出错情况会走 catch 代码块，再关闭加载态

> 这里需要注意，传入的 listRequestFn 函数接收的参数数量和类型是否正常对应上
> 请根据实际情况进行调整

```typescript
export default function useList<ItemType extends Object>(
  listRequestFn: Function
) {
  // 忽略其他代码
  // 数据
  const list = ref<ItemType[]>([]);
  // 过滤数据
  // 获取列表数据
  const loadData = async (page = curPage.value) => {
    // 设置加载中
    loading.value = true;
    try {
      const {
        data,
        meta: { total: count },
      } = await listRequestFn(pageSize.value, page);
      list.value = data;
      total.value = count;
    } catch (error) {
      console.log("请求出错了", "error");
    } finally {
      // 关闭加载中
      loading.value = false;
    }
  };
}
```

别忘了，还有切换分页要处理

使用 `watch` 函数监听数据，当`curPage`，`pageSize`的值发生改变时调用`loadData`函数获取新的数据。

```typescript
export default function useList<ItemType extends Object>(
  listRequestFn: Function
) {
  // 忽略其他代码
  // 监听分页数据改变
  watch([curPage, pageSize], () => {
    loadData(curPage.value);
  });
}
```

现在实现了基本的列表数据获取

### 实现数据筛选器

在庞大的数据列表中，数据筛选是必不可少的功能

通常，我会将筛选条件字段定义在一个`ref`中，在请求时将`ref`丢到请求函数即可。

在 useList 函数中，第二个参数接收一个`filterOption`对象，对应列表中的筛选条件字段。

调整一下`loadData`函数，在请求函数中传入`filterOption`对象即可

> 注意，传入的 listRequestFn 函数接收的参数数量和类型是否正常对应上
> 请根据实际情况进行调整

```typescript
export default function useList<
  ItemType extends Object,
  FilterOption extends Object
>(listRequestFn: Function, filterOption: Ref<Object>) {
  const loadData = async (page = curPage.value) => {
    // 设置加载中
    loading.value = true;
    try {
      const {
        data,
        meta: { total: count },
      } = await listRequestFn(pageSize.value, page, filterOption.value);
      list.value = data;
      total.value = count;
    } catch (error) {
      console.log("请求出错了", "error");
    } finally {
      // 关闭加载中
      loading.value = false;
    }
  };
}
```

> 注意，这里 filterOption 参数类型需要的是 ref 类型，否则会丢失响应式 无法正常工作

### 清空筛选器字段

在页面中，有一个重置的按钮，用于清空筛选条件。这个重复的动作可以交给 reset 函数处理。

通过使用 Reflect 将所有值设定为`undefined`，再重新请求一次数据。

> 什么是 Reflect？看看这一篇文章[Reflect 映射对象](https://juejin.cn/post/7061495978209542175)

```typescript
export default function useList<
  ItemType extends Object,
  FilterOption extends Object
>(listRequestFn: Function, filterOption: Ref<Object>) {
  const reset = () => {
    if (!filterOption.value) return;
    const keys = Reflect.ownKeys(filterOption.value);
    filterOption.value = {} as FilterOption;
    keys.forEach((key) => {
      Reflect.set(filterOption.value!, key, undefined);
    });
    loadData();
  };
}
```

## 导出功能

除了对数据的查看，有些界面还需要有导出数据功能（例如导出 csv，excel 文件），我们也把导出功能写到`useList`里

通常，导出功能是调用后端提供的导出`Api`获取一个文件下载地址，和`loadData`函数类似，从外部获取`exportRequestFn`函数来调用`Api`

在函数中，新增一个`exportFile`函数调用它。

```typescript
export default function useList<
  ItemType extends Object,
  FilterOption extends Object
>(
  listRequestFn: Function,
  filterOption: Ref<Object>,
  exportRequestFn?: Function
) {
  // 忽略其他代码
  const exportFile = async () => {
    if (!exportRequestFn) {
      throw new Error("当前没有提供exportRequestFn函数");
    }
    if (typeof exportRequestFn !== "function") {
      throw new Error("exportRequestFn必须是一个函数");
    }
    try {
      const {
        data: { link },
      } = await exportRequestFn(filterOption.value);
      window.open(link);
    } catch (error) {
      console.log("导出失败", "error");
    }
  };
}
```

> 注意，传入的 exportRequestFn 函数接收的参数数量和类型是否正常对应上
> 请根据实际情况进行调整

## 优化

现在，整个`useList`已经满足了页面上的需求了，拥有了获取数据，筛选数据，导出数据，分页功能

还有一些细节方面，在上面所有代码中的`try..catch`中的`catch`代码片段并没有做任何的处理，只是简单的`console.log`一下

### 提供钩子

在`useList`新增一个 Options 对象参数，用于函数成功、失败时执行指定钩子函数与输出消息内容。

#### 定义 Options 类型

```typescript
export interface MessageType {
  GET_DATA_IF_FAILED?: string;
  GET_DATA_IF_SUCCEED?: string;
  EXPORT_DATA_IF_FAILED?: string;
  EXPORT_DATA_IF_SUCCEED?: string;
}
export interface OptionsType {
  requestError?: () => void;
  requestSuccess?: () => void;
  message: MessageType;
}

export default function useList<
  ItemType extends Object,
  FilterOption extends Object
>(
  listRequestFn: Function,
  filterOption: Ref<Object>,
  exportRequestFn?: Function,
  options? :OptionsType
) {
  // ...
}
```

#### 设置`Options`默认值

```typescript
const DEFAULT_MESSAGE = {
  GET_DATA_IF_FAILED: "获取列表数据失败",
  EXPORT_DATA_IF_FAILED: "导出数据失败",
};

const DEFAULT_OPTIONS: OptionsType = {
  message: DEFAULT_MESSAGE,
};

export default function useList<
  ItemType extends Object,
  FilterOption extends Object
>(
  listRequestFn: Function,
  filterOption: Ref<Object>,
  exportRequestFn?: Function,
  options = DEFAULT_OPTIONS
) {
  // ...
}
```

> 在没有传递钩子的情况霞，推荐设置默认的失败时信息显示
#### 优化`loadData`，`exportFile`函数

**基于 elementui 封装 message 方法**

```typescript
import { ElMessage, MessageOptions } from "element-plus";

export function message(message: string, option?: MessageOptions) {
  ElMessage({ message, ...option });
}
export function warningMessage(message: string, option?: MessageOptions) {
  ElMessage({ message, ...option, type: "warning" });
}
export function errorMessage(message: string, option?: MessageOptions) {
  ElMessage({ message, ...option, type: "error" });
}
export function infoMessage(message: string, option?: MessageOptions) {
  ElMessage({ message, ...option, type: "info" });
}
```

**loadData 函数**

```typescript
const loadData = async (page = curPage.value) => {
  loading.value = true;
  try {
    const {
      data,
      meta: { total: count },
    } = await listRequestFn(pageSize.value, page, filterOption.value);
    list.value = data;
    total.value = count;
    // 执行成功钩子
    options?.message?.GET_DATA_IF_SUCCEED &&
      message(options.message.GET_DATA_IF_SUCCEED);
    options?.requestSuccess?.();
  } catch (error) {
    options?.message?.GET_DATA_IF_FAILED &&
      errorMessage(options.message.GET_DATA_IF_FAILED);
    // 执行失败钩子
    options?.requestError?.();
  } finally {
    loading.value = false;
  }
};
```

**exportFile 函数**

```typescript
const exportFile = async () => {
  if (!exportRequestFn) {
    throw new Error("当前没有提供exportRequestFn函数");
  }
  if (typeof exportRequestFn !== "function") {
    throw new Error("exportRequestFn必须是一个函数");
  }
  try {
    const {
      data: { link },
    } = await exportRequestFn(filterOption.value);
    window.open(link);
    // 显示信息
    options?.message?.EXPORT_DATA_IF_SUCCEED &&
      message(options.message.EXPORT_DATA_IF_SUCCEED);
    // 执行成功钩子
    options?.exportSuccess?.();
  } catch (error) {
    // 显示信息
    options?.message?.EXPORT_DATA_IF_FAILED &&
      errorMessage(options.message.EXPORT_DATA_IF_FAILED);
    // 执行失败钩子
    options?.exportError?.();
  }
};
```

## useList 使用方法

```vue
<template>
  <el-collapse class="mb-6">
    <el-collapse-item title="筛选条件" name="1">
      <el-form label-position="left" label-width="90px" :model="filterOption">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
            <el-form-item label="用户名">
              <el-input
                v-model="filterOption.name"
                placeholder="筛选指定签名名称"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
            <el-form-item label="注册时间">
              <el-date-picker
                v-model="filterOption.timeRange"
                type="daterange"
                unlink-panels
                range-separator="到"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                format="YYYY-MM-DD HH:mm"
                value-format="YYYY-MM-DD HH:mm"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <el-row class="flex mt-4">
              <el-button type="primary" @click="filter">筛选</el-button>
              <el-button type="primary" @click="reset">重置</el-button>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </el-collapse-item>
  </el-collapse>
  <el-table v-loading="loading" :data="list" border style="width: 100%">
    <el-table-column label="用户名" min-width="110px">
      <template #default="scope">
        {{ scope.row.name }}
      </template>
    </el-table-column>
    <el-table-column label="手机号码" min-width="130px">
      <template #default="scope">
        {{ scope.row.mobile || "未绑定手机号码" }}
      </template>
    </el-table-column>
    <el-table-column label="邮箱地址" min-width="130px">
      <template #default="scope">
        {{ scope.row.email || "未绑定邮箱地址" }}
      </template>
    </el-table-column>
    <el-table-column prop="createAt" label="注册时间" min-width="220px" />
    <el-table-column width="200px" fixed="right" label="操作">
      <template #default="scope">
        <el-button type="primary" link @click="detail(scope.row)"
          >详情</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <div v-if="total > 0" class="flex justify-end mt-4">
    <el-pagination
      v-model:current-page="curPage"
      v-model:page-size="pageSize"
      background
      layout="sizes, prev, pager, next"
      :total="total"
      :page-sizes="[10, 30, 50]"
    />
  </div>
</template>
<script setup lang="ts">
import { UserInfoApi } from "@/network/api/User";
import useList from "@/lib/hooks/useList/index";
const filterOption = ref<UserInfoApi.FilterOptionType>({});
const {
  list,
  loading,
  reset,
  filter,
  curPage,
  pageSize,
  reload,
  total,
  loadData,
} = useList<UserInfoApi.UserInfo[], UserInfoApi.FilterOptionType>(
  UserInfoApi.list,
  filterOption
);
</script>
```

本文`useList`的完整代码在 https://github.com/QC2168/snippets/tree/main/useList

💡 如果您对该`hook`有更好的建议，欢迎`pr`或者在评论区留言哦

另外，为了在日常开发中节省找封装代码片段的时间和提高工作效率（摸 🐟 时间++），该[仓库](https://github.com/QC2168/snippets)还存放一些第三方封装的代码片段 ✨，方便大家拿取 😄😄（持续更新中 ~ ~ ）
