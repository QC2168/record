// console.log("script start");

// function foo() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("setTimeOut1");
//     });
//     resolve(0);
//   }).then((res) => {
//     console.log(res);
//   });
// }

// foo();

// setTimeout(() => {
//   console.log("setTimeOut2");
// });

// console.log("script end");
// result
// script start
// script end
// 0
// setTimeOut1
// setTimeOut2

console.log("script start");

async function foo() {
  await new Promise((resolve) => {
    console.log("Promise1");
    resolve('Promise1 then')
  }).then((res)=>{
    console.log(res);
  })
}

// async function bar() {
//   console.log('bar1');
//   await console.log(000);
//   console.log('bar2')
// }
async function bar() {
  console.log('bar1');
  await new Promise(resolve=>{
    resolve('000')
  }).then(result=>console.log(result))
  console.log('bar2')
}

foo();
bar()

console.log("script end");
