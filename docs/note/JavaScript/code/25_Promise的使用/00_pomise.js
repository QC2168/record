// const p = new Promise();

// p.then()

// const p = new Promise((resolve, reject) => {
//   // const msg='_island'
//   const msg = "_island";
//   setTimeout(() => {
//     if (msg === "_island") {
//       resolve("执行成功");
//     } else {
//       reject("执行失败");
//     }
//   }, 2000);
// });

// p.then((result)=>{
//   console.log('成功的状态');
//   console.log(result);
//   return result
// },(err)=>{
//   console.log('失败的状态');
//   console.log(err);
// }).then((result)=>{
//   console.log(result);
// })

// 成功的状态
// 执行成功
// 执行成功

// p.then((result)=>{
//   console.log('成功的状态');
//   console.log(result);
//   return result
// }).catch((err)=>{
//   console.log(err);
// }).finally(()=>{
//   console.log('无论什么状态，我都会被执行');
// })

// 执行失败

// all
// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("p1");
//   }, 2000);
// });
// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("p2");
//   }, 3000);
// });
// const p3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("p3");
//   }, 1000);
// });

// const ps = [p1, p2, p3];
// Promise.all(ps).then((res) => console.log(res)); // [ 'p1', 'p2', 'p3' ]

// const obj = {
//   name: "_island"
// };

// const pobj = Promise.resolve(obj);
// console.log(pobj); // Promise { { name: '_island' } }

// const pobj = new Promise((resolve) => resolve(obj));

// const p = Promise.reject("报错了").catch(e=>console.log(e));
// // 等价下面这一行代码
// const p = new Promise((null, reject) => reject("报错了"));


// race
// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("p1");
//   }, 2000);
// });
// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("p2");
//   }, 3000);
// });
// const p3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("p3");
//   }, 1000);
// });

// const ps=Promise.race([p1,p2,p3])
// ps.then(res=>console.log(res))
// // p3


// allSettled
// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("p1");
//   }, 2000);
// });
// const p2 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     reject("p2");
//   }, 3000);
// });
// const p3 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     reject("p3");
//   }, 1000);
// });

// const ps=Promise.allSettled([p1,p2,p3])
// ps.then(res=>console.log(JSON.stringify(res)))
// // [
// //   {"status":"fulfilled","value":"p1"},
// //   {"status":"rejected","reason":"p2"},
// //   {"status":"rejected","reason":"p3"}
// // ]


// any
const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p1");
  }, 100);
});
const p2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 5000);
});
const p3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("p3");
  }, 1000);
});
console.time('c')
Promise.any([p1,p2,p3]).then(res=>{console.log(res)
  console.timeEnd('c')
})


// p1