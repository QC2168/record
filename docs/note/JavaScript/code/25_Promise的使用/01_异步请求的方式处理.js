const requestData=function(url,successcCallback,failureCallback){
  // 模拟请求
  setTimeout(()=>{
    if(url==='_island'){
      // 请求成功
    
      successcCallback({name:'_island'})
    
    }else{
      // 请求失败

        failureCallback({msg:'error'})
      
    }
  },2000)

}

requestData('_island',(obj)=>{
console.log(obj);
},(obj)=>{
  console.log(obj);
})