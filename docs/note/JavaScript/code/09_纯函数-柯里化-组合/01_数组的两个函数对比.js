var names = ["张三", "李四", "王五", "赵六"];

//slice 生成新数组，原数组不动  这里是纯函数
// var newNames1=names.slice(0,3)
// console.log(newNames1); // [ '张三', '李四', '王五' ]
// console.log(names); // [ '张三', '李四', '王五', '赵六' ]
// filter 过滤数组中的元素
var newNames1 = names.filter((n) => n !== "张三");
console.log(newNames1); // [ '李四', '王五', '赵六' ]
console.log(names); // [ '张三', '李四', '王五', '赵六' ]

// splice 会修改原数组 （产生副作用）
//  不符合纯函数的要求
// 在开发的时候尽量使用纯函数
var newNames2 = names.splice(2);
console.log(newNames2); // [ '王五', '赵六' ]
console.log(names); // [ '张三', '李四' ]
