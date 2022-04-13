function requestData(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params);
    }, 1500);
  });
}

// requestData('a').then((res)=>{
//   return requestData(res+'b')
// }).then((res)=>{
//   return requestData(res+'c')
// })

function* getData() {
  const res1 = yield requestData("a");
  const res2 = yield requestData(res1 + "b");
  const res3 = yield requestData(res2 + "c");
  const res4 = yield requestData(res3 + "d");
  return res4;
}

// const generator = getData();
// generator.next().value.then((res) => {
//   generator.next(res).value.then((res) => {
//     generator.next(res).value.then((res) => {
//       generator.next(res).value.then((res) => {
//         console.log(res);
//       });
//     });
//   });
// });

function execGenerator(genFn){
  const generator=genFn()
  function exec(res){
    const result=generator.next(res)
    if(result.done){
      return result.value
    }
    result.value.then((res)=>{
      exec(res)
    })
  }
  exec()
}
execGenerator(getData)

// TJ   CO npm 包

async function getData() {
  const res1 = await requestData("a");
  const res2 = await requestData(res1 + "b");
  const res3 = await requestData(res2 + "c");
  const res4 = await requestData(res3 + "d");
  return res4;
}