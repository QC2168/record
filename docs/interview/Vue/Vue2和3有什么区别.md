## Vue2和3有什么区别

### CMA

`Vue3`新增`composition Api`，函数式编程

`setup`函数在生命周期中处于`beforeCreate`和`created`中间

`setup`函数接受`props`和`context`两个属性，同时该函数需要返回一个对象

::: tip
Vue3.2新增script setup，无需再return一个对象，组件也无需注册可直接使用
:::

### 创建实例方式不同

`Vue2`在`main`文件中，直接引入`new`一个`Vue`类即可

`Vue3`需要使用`createApp`创建实例

### 数据变量定义不一样

在`OptionApi`中，变量数据需要定义在`data`中

在`CMA`中，需要使用`ref`或`reactive`定义响应式数据

### props和emit

在`Vue2`中直接使用`this`即可直接获取到`props`和`emit`对象

而在`Vue3`需要使用宏函数`defineProps`和`defineEmits`，先声明后使用

### 响应式方案不同

`Vue2`：`Object.defineProperty`
`Vue3`: `Proxy`和`reflect`

`Vue2`中`Object.defineProperty`无法完成对数组方法的监听，所以`Vue2`还重写了`Array`中的方法

除了这个，如果直接向`data`设置一个新的属性，是无法被监听到的

这时候`Vue`提供了[`$set`](https://v2.cn.vuejs.org/v2/api/#Vue-set)方法设定一个新的响应式数据
