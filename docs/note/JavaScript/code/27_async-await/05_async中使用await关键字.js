// function getData(){
//   return new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve(222)
//     },2000)
//   })
// }
// async function foo(){
//   const res =await getData()
//   console.log(res);
//   console.log('-----');
//   console.log('-----');
//   console.log('-----');
// }

// foo()
// console.log('-----');


async function foo(){
  // const res=await setTimeout(()=>{return 123},2000)
  const res=await {
    then:(resolve)=>{
      resolve(123)
    }
  }
  console.log(res);
}

foo()