var obj={
  name:'_island',
  age:18
}

Object.defineProperty(obj,'address',{
  // 默认不可枚举的
  // 但是在浏览器中可以看到，因为浏览器方便开发者调试所显示的
  enumerable:false, 
  value:'广州市'
})

console.log(obj);