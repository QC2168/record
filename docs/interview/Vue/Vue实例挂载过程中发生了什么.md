## Vue实例挂载过程中发生了什么

挂载指的是在`app.mount()`调用时的整个过程

## 流程

- 首先获取挂载点的`DOM`元素，然后去清空`html`
- `mount`
  - 开始创建`node`元素
  - 触发`render`函数
    - `patch(rootVNode)`
      - 处理组件类型（`Text`，`Comment`，`Fragment`，`Component`）
      - 如果是`components`，会进行组件的实例化（`createComponentInstance`->`setupComponent`），双向绑定过程（`setupRenderEffect`）
        - 在`setupComponent`里还会进行初始化`Props`，`slots`（`initProps`，`initSlots`）


#### mount

首先会先调用`normalizeContainer()`获取到`dom`挂载元素的位置，之后再调用`mount`去执行挂载

这里的`mounted`函数会先创建`VNode`根节点，调用render函数将`VNode`转换为真实的`DOM`元素

#### patch

在初始化的过程中，进行`VNode`对比，根据得出来的结果创建节点并挂载到`DOM`中

#### mountComponent

用于实例化组件，并完成数据与`VNode`的双向绑定

主要执行了初始化`Props`属性（`initProps`），初始化插槽（`initSlots`），执行`setup`中的代码内容并到`template`中的模板编译成`render`渲染函数，到最后执行`onMounted`钩子函数，表示已经挂载完毕（如果组件中还有组件，会递归调用`patch`函数）

