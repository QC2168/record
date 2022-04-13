// function foo(a,b,c,d){
//   return a+b+c+d
// }

// foo(10,20,30,40)

// // 柯里化的过程
// function foo(a){
//   return function(b){
//     return function(c){
//       return function(d){
//         a+b+c+d
//       }
//     }
//   }
// }

function add(x,y,z){
  return x+y+z
}

var result=add(10,20,30)
console.log(result);

function sum(x){
  return function(y){
    return function(z){
      return x+y+z
    }
  }
}

var result2=sum(10)(20)(30)
console.log(result2);

// 简化柯里化代码
// 使用箭头函数
var sum2=x=>y=>z=>x+y+z
console.log(sum(10)(20)(30));