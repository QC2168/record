// FinalizationRegistry
const finalRegistry = new FinalizationRegistry((val) => {
  console.log(`销毁${val}`);
});

let obj1 = { name: "_island" };
// let ws = new WeakSet()
// ws.add(obj1)
// 如果原对象没有销毁，可以获取原对象
// 如果已经销毁会报错，可以使用可选链搭配空值合并
let ws=new WeakRef(obj1)
// 监听对象销毁过程
finalRegistry.register(obj1,'obj1')
console.log(ws.deref().name);
obj1 = null;
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry