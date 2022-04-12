let obj ={a:1}

// 正常情况下
let pObj=new Proxy(obj,{
    get(target,key){
        return Reflect.get(target,key)
    },
    set(target,key){
        return Reflect.set(target,key)
    }
})

console.log(pObj.a); // 1