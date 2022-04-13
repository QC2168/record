// 空值合并运算符 ??
// || 遇到0 ''会执行后面的值
const foo = 0;
const bar = foo ?? "我是默认值";
console.log(bar);
