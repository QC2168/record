// let index = 0;
// function createArrayIterator(arr) {
//   return {
//     next: function () {
//       if (index < arr.length) {
//         return { done: false, value: arr[index++] };
//       } else {
//         return { done: true, value: undefined };
//       }
//     }
//   };
// }
const iterableObj = {
  names: ["abc", "cba", "nba"],
  [Symbol.iterator]: function () {
    let index = 0;
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] };
        } else {
          return { done: true, value: undefined };
        }
      }
    };
  }
};
const iterator=(iterableObj[Symbol.iterator]());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// // 第二次调用，新的迭代器
// console.log(`------第二次调用，新的迭代器------`);
// const iterator2=(iterableObj[Symbol.iterator]());
// console.log(iterator2.next());
// console.log(iterator2.next());


const obj={
  name:'island'
}
// for(const item of obj){
//   console.log(item);
// }
for(const item of iterableObj){
  console.log(item);
}