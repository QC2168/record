const obj = {
  _name: "_island",
  get name() {
    return this._name;
  },
  set name(val) {
    this._name = val;
  }
};

const objProxy=new Proxy(obj,{
  get :function(target,key,receiver) {
    // receiver 是代理对象objProxy
    console.log(receiver);
    // 改变obj的this指向
    return Reflect.get(target,key,receiver)
  },
  set: function(target,key,val,receiver) {
    Reflect.set(target,key,val,receiver)
  },
  defineProperty:function(target,key,attr){
    console.log('defineProperty');
    console.log(target,key,attr);
    Reflect.defineProperty(target,key,attr)
  }
})

objProxy.name = "CC2125";
console.log(objProxy.name);
