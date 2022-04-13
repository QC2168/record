// 生成器
// function createIterator(arr) {
//   let index = 0;
//   return {
//     next: () => {
//       if (index < arr.length) {
//         return { done: false, value: arr[index++] };
//       } else {
//         return { done: true, value: undefined };
//       }
//     }
//   };
// }

// function* createIterator(arr){
//   for(const item of arr){
//     yield item
//   }
// }
// 推荐的写法
// function* createIterator(arr) {
//   yield* arr;
// }

// const names = ["abc", "cba", "nab"];
// const namesIterator = createIterator(names);
// console.log(namesIterator.next()); // { value: 'abc', done: false }
// console.log(namesIterator.next()); // { value: 'cba', done: false }
// console.log(namesIterator.next()); // { value: 'nab', done: false }

//
// function* createRangeIterator(start, end) {
//   let index = start;
//   while (index++ < end) {
//     yield index;
//   }
// }

// const RangeIterator = createRangeIterator(10, 20);
// console.log(RangeIterator.next()); // { value: 11, done: false }
// console.log(RangeIterator.next()); // { value: 12, done: false }
// console.log(RangeIterator.next()); // { value: 13, done: false }
