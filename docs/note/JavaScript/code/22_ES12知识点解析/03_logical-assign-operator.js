// ||= 逻辑或赋值运算
let msg = undefined;
msg ||= "default value";
console.log(msg); // default value
// 等于下面这条语句
// msg = msg || "default value";

// &&= 逻辑与赋值运算
const obj = {
  name: "_island"
};

obj = obj && obj.name;
obj &&= obj.name;
// ??= 逻辑空赋值运算
let msg = undefined;
msg ??= "default value";
console.log(msg); // default value
// 等于下面这条语句
// msg = msg ?? "default value";
