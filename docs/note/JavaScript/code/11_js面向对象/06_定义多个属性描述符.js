var obj = {
  // 私有属性
  _age: 18,
};

Object.defineProperties(obj, {
  name: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: "_island"
  },
  age:{
    configurable:false,
    enumerable:false,
    get:()=>{
      console.log('调用了ages get');
      return this._age
    },
    set:(val)=>{
      console.log('调用了ages set');
      this._age=val
    }
  }
});
// 除了上面的写法，也可以这样子写，但会有一点差异，比如可枚举
var obj = {
  // 私有属性
  _age: 18,
  // 也可以这样子写
  set age(val) {
    this._age = val;
  },
  get age() {
    return this._age;
  }
};