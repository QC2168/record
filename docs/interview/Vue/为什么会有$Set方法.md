## 为什么会有$Set方法

这是因为Vue2的响应式数据采用的是Object.defineProperty进行数据拦截的，但这个方案无法对Array进行处理。Vue2中还额外重写了数组中常用的方法

