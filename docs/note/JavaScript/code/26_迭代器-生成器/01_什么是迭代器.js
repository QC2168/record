// 编写的迭代器
// const iterator={
//   next:function(){
//     return {
//       done:true,
//       value:123
//     }
//   }

// }

// 数组
const names = ["abc", "cba", "nba"];
// 之前我们会使用for来遍历
// 使用迭代器遍历
// 创建一个迭代器对象来访问数组
// const namesIterator = {
//   next: function () {
//     return { done: false, value: "abc" };
//     return { done: false, value: "cba" };
//     return { done: false, value: "nba" };
//     // 这里也可以省略
//     return { done: true, value: "undefined" };
//   }
// };
let index = 0;
const namesIterator = {
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] };
    } else {
      return { done: true, value: undefined };
    }
  }
};

console.log(namesIterator.next()); // { done: false, value: 'abc' }
console.log(namesIterator.next()); // { done: false, value: 'cba' }
console.log(namesIterator.next()); // { done: false, value: 'nba' }
console.log(namesIterator.next()); // { done: true, value: undefined }
