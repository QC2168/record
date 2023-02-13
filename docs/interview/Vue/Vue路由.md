## 路由钩子有哪些

### 全局守卫
- `router.beforeEach`全局前置路由守卫（通常用于进行权限控制）
- `router.beforeResolve`全局解析守卫（通常用于获取meta数据时使用）
- `router.afterEach`全局后置钩子（可以用于修改页面标题，分析数据等）
- `beforeEnter`路由独享守卫，只在进入路由时触发（`url`参数，锚点改变时不触发）

### 组件守卫

- `beforeRouteEnter`路由导航成功之前调用
- `beforeRouteUpdate`动态参数更新时调用例如`query`参数更新
- `beforeRouteLeave`离开路由之前调用
