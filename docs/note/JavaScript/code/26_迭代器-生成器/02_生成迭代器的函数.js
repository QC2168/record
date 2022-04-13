const names=['abc','cba','nba']
const nums=[10,20,30,50]
let index=0
function createArrayIterator(arr){
  return{
    next:function(){
      if(index<arr.length){
        return {done:false,value:arr[index++]}
      }else{
        return {done:true,value:undefined}
      }
    }
  }

}

const numsIterator=createArrayIterator(nums)
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());


// 无限的迭代器
function createNumberIterator(){
  let index=0
  return{
    next:function(){
    return {done:false,value:index++}
  }}
}

const numsIterator2=createNumberIterator()
console.log(numsIterator2.next());
console.log(numsIterator2.next());
console.log(numsIterator2.next());
console.log(numsIterator2.next());
console.log(numsIterator2.next());
console.log(numsIterator2.next());
console.log(numsIterator2.next());
console.log(numsIterator2.next());