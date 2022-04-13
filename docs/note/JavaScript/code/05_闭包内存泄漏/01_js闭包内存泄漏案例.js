function createFnArray(){
  var arr=new Array(1024*1024).fill(1);
  // 整数4个字节
  // 1024*1024*4byte
  // 内存空间计算 1长度4字节（int类型）
  // 4M空间
  // js中整数类型占据8byte，js引擎对于小的整数，只要4byte
  // 8byte->2的64次方=>4byte
return function(){
  console.log(arr.length);
}
}

// var arrayFn=createFnArray()
var arrayFns=[]
for(var i=0;i<100;i++){
  arrayFns.push(createFnArray())
}

setTimeout(() => {
  arrayFns=null
}, 3000);