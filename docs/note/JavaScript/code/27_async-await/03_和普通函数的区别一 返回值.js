async function foo() {
  console.log("foo function start");
  console.log("code1");
  console.log("foo function end");
  // 返回值一个值
  // return "code";
  // 返回thenable
  // return {
  //   then:(resolve)=>{
  //     resolve('code')
  //   }
  // }
  // 返回promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hhh");
    }, 2000);
  });
}

// 异步函数返回值是一个promise
const promise = foo();
promise.then((res) => {
  console.log("promise then function exec");
  console.log(res);
});
