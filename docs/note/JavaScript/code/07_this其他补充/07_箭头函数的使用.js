// 箭头函数
// () 编写参数
// => 箭头
// {} 函数的执行体

// ()=>{

// }

// 高阶函数使用时也可以使用箭头函数
// var nums=[10,20,30,40]
// nums.forEach((item)=>{
//   console.log(item*2);
// })


// 简写一
// 箭头函数简写方法
// 只有一个参数的时候可以省略，多个不能省略
// nums.forEach(element => {
  
// });

// 简写二
// 如果函数执行体只有一行代码，可以把{}省略
// 并默认将这行代码执行的结果作为返回结果
// nums.forEach(el => console.log(el));
// var newNums=nums.filter(el => item%2===0);
// console.log(newNums);


// filter map reduce
// 所有偶数相加
// var nums=[10,20,30,40]
// var res=nums.filter(item=>item%2===0).map(item=>item*100).reduce((pre,item)=>pre+item)
// console.log(res);

// 简写三：如果一个箭头函数，只有一行代码，并且返回一个对象，这个时候如何编写简写
// var bar=()=>({name:'hxh',age:18})