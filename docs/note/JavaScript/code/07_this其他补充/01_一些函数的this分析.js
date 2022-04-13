// // setTimeout
// function hySetTimeout(fn,druation){
// fn.call(abc)
// }

// hySetTimeout(function(){

// },3000)


// setTimeout(function(){
// console.log(this); // window
// },2000)

// // 监听点击
// const boxDiv=document.querySelector('.box')
// // boxDiv.onclick=function(){
// //   // 隐式绑定 div对象
// //   console.log(this);
// // }

// boxDiv.addEventListener('click',function(){
//   // 隐式绑定 div对象
//   console.log(this);
// })


// 数组 forEach map filter find
var names=['hxh','abc','cba']
names.forEach(function(item){
  console.log(item,this);
},'abc')  
names.map(function(item){
  console.log(item,this);
},'abc')  