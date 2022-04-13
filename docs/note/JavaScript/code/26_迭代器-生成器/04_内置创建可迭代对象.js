// Array
// const names=['abc','cba','nba']
// const iterator1=names[Symbol.iterator]()
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());

// Map
const set=new Set()
set.add(10)
set.add(20)
set.add(30)
const iterator2=set[Symbol.iterator]()
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

// 函数中的arguments也是一个可迭代的对象
function foo(x,y,z){
  console.log(arguments[Symbol.iterator]);
}
foo(10,20,30)

// String,array,Map,Set,arguments,NodeList集合