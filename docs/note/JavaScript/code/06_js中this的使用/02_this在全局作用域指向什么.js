// 大多数情况下，this都是出现函数中
// 在全局作用域下
// 浏览器 window（globalOject）
// Node环境：{}
// 因为在node执行的时候，node会把这个js文件当成一个模块，加载模块，编译代码，放到一个函数里面.apply({})
console.log(this);
console.log(window);// 在node会报错, no defined
