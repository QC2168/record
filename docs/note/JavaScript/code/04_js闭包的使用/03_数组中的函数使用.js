var nums = [10, 5, 11, 100, 55];
// var newNums = [];
// for (var i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 === 0) {
//     newNums.push(nums[i]);
//   }
// }

// console.log(newNums); // [ 10, 100 ]

// // 等价于上面循环
// // filter文档 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// var newNums=nums.filter(item=>item%2===0)
// console.log(newNums);

// // 函数和方法的区别
// // 函数 function
// // 独立的function，那么称之为一个函数
// function foo(){

// }

// // 方法 method
// // 当我们的一个函数属于某一些对象时，我们称这个函数是这个对象的方法
// var obj={
//   foo:function(){}
// }

// obj.foo()

// map 映射 返回新数组
// var newNums2=nums.map((item)=>{
// return item+10
// })

// console.log(newNums2); // [ 20, 15, 21, 110, 65

// forEach 迭代  没有返回值
// nums.forEach((item)=>{
// console.log(item);
// })

// find / findIndex
// es6 - 12
// var item =nums.find((item)=>{
// return item==='10'
// })

// console.log(item);

// var friends = [
//   { name: "hxh", age: 18 },
//   { name: "zhangshan", age: 48 },
//   { name: "lisi", age: 15 },
//   { name: "laowu", age: 25 }
// ];
// var findFriend = friends.find((item) => {
//   return item.name === "lisi";
// });
// console.log(findFriend);
// var findFriendIndex = friends.findIndex((item) => {
//   return item.name === "lisi";
// });
// console.log(findFriendIndex); // 2 


// reduce 累加
// var total=nums.reduce((prevValue,item)=>{
// return prevValue+item
// },0)
// console.log(total);
