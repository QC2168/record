// 创建Set
const s1=new Set()
s1.add(10)
s1.add(20)
s1.add(30)
s1.add(40)

console.log(s1) // Set(4) { 10, 20, 30, 40 }

s1.add(20)
console.log(s1) // Set(4) { 10, 20, 30, 40 }

// 添加对象 // 不同的内存地址
s1.add({})
s1.add({})

console.log(s1); // Set(6) { 10, 20, 30, 40, {}, {} }


const arr=[1,2,3,4,2,5,5,5,1]
const arrSet=new Set(arr)
// const newArr=Array.from(arrSet)
const newArr=[...arrSet]
console.log(newArr);

const s1=new Set()
s1.add(10)
s1.add(20)
s1.add(30)
s1.add(40)

// 返回元素个数
// console.log(s1.size); // 4

// 添加元素
// s1.add(33)
// 删除元素
// s1.delete(30)

// 判断一个元素是否在set里
// console.log(s1.has(10)) // true
// console.log(s1.has(110)) // false

// 清空set里的元素
// s1.clear()
// console.log(s1); // Set(0) {}

// 遍历set遍历
s1.forEach(element => {
  console.log(element);
});

for(const item of s1){
  console.log(item);
}