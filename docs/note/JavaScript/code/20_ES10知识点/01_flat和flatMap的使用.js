// const nums=[1,2,[3,4],[5,6,[7,8]]]
// const newNums1=nums.flat(1)
// console.log(newNums1); // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
// const newNums2=nums.flat(2)
// console.log(newNums2); // [1, 2, 3, 4, 5, 6, 7, 8]

// flatMap
// const nums2=[1,2,3,4,6]
// const newNums3=nums2.flatMap(item=>{
//   return item*2
// })

// console.log(newNums3);

// flat应用场景
const msg = ["hello world", "I live in Guangzhou", "my name is _island"];
const newMsg1 = msg.flatMap((item) => {
  return item.split(" ");
});

const newMsg2 = msg.map((item) => {
  return item.split(" ");
});

console.log(newMsg1);
// [
//   'hello', 'world',
//   'I',     'live',
//   'in',    'Guangzhou',
//   'my',    'name',
//   'is',    '_island'
// ]
console.log(newMsg2);
// [
//   [ 'hello', 'world' ],
//   [ 'I', 'live', 'in', 'Guangzhou' ],
//   [ 'my', 'name', 'is', '_island' ]
// ]