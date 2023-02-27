## 什么是虚拟DOM

### 虚拟DOM

顾名思义，它是一个使用`JavaScript`对象模拟出来的`DOM`，并表示真正的`DOM`元素，通过不同的属性去描述这个虚拟`DOM`结构

> 虚拟DOM也被称之为VNode（Virtual Node） 👀

### 为什么要使用它

因为直接操作`DOM`元素代价是比较昂贵的，而且一个`DOM`元素中有很多不同的属性，同一时间操作会导致额外的性能开销。而且也会导致浏览器频繁的触发页面重绘和回流

采用虚拟`DOM`方案，可以减少直接操作`DOM`元素的操作次数，减少页面的重绘和回流。

而且跨平台开发时，也起到很大的作用，一个虚拟`DOM`节点可以渲染成不同平台上不同的元素，例如在浏览器中渲染的是`DOM`元素，而在`Native`中变成为不同的控件

::: tip

在`Vue3`中还允许开发基于`VNode`实现自定义渲染器，针对不同的平台去进行渲染（[createrenderer](https://cn.vuejs.org/api/custom-renderer.html#createrenderer)）

:::

### 结构

对于`VNode`的结构目前没有统一的规范，但一般有`tag`，`props`，`children`，分别代表的是标签，属性，子节点/节点内容

```typescript
// Vue VNode
export interface VNodeData {
  key?: string | number
  slot?: string
  scopedSlots?: { [key: string]: ScopedSlot | undefined }
  ref?: string
  refInFor?: boolean
  tag?: string
  staticClass?: string
  class?: any
  staticStyle?: { [key: string]: any }
  style?: string | object[] | object
  props?: { [key: string]: any }
  attrs?: { [key: string]: any }
  domProps?: { [key: string]: any }
  hook?: { [key: string]: Function }
  on?: { [key: string]: Function | Function[] }
  nativeOn?: { [key: string]: Function | Function[] }
  transition?: object
  show?: boolean
  inlineTemplate?: {
    render: Function
    staticRenderFns: Function[]
  }
  directives?: VNodeDirective[]
  keepAlive?: boolean
}

```