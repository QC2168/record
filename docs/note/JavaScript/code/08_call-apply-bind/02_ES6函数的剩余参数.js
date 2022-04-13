// rest parameters
function sum(...args){
  return args.reduce((pre,val)=>pre+val)
}

sum(10)
sum(10,20)
sum(10,20,30)

// 展开运算符 spread
var names=['abc','cba']
var newNames=[...names]
console.log(newNames);