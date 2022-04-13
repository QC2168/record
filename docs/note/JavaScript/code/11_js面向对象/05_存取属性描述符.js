var obj={
  name:'_island',
  age:18,
  _address:'广州市'
}

// 隐藏某个私有属性
// 截获某个属性的访问和设置的过程，也会使用存取属性描述符
Object.defineProperty(obj,'address',{
  enumerable:true,
  configurable:true,
  get:function(){
    foo()
      return this._address
  },
  set:function(val){
    this._address=val
  }
})

console.log(obj.address);
obj.address='潮汕'
console.log(obj.address);

function foo(){
  console.log('获取了address的值');
}