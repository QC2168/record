setTimeout(()=>{
console.log('settimeout');
},1000)


queueMicrotask(()=>{
console.log('queueMicrotask');
})

Promise.resolve().then(()=>{
  console.log('Promise then');
})

