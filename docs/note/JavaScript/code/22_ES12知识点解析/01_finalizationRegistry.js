// FinalizationRegistry
const finalRegistry = new FinalizationRegistry((val) => {
  console.log(`销毁${val}`);
});

let obj1 = { name: "_island" };
let obj2 = { name: "_island" };

// 监听对象销毁过程
finalRegistry.register(obj1,'obj1')
finalRegistry.register(obj2,'obj2')
obj = null;
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry