const weakSet = new WeakSet();
// TypeError: Invalid value used in weak set
// 不能存放基本数据类型
// weakSet.add(1)

// 对对象是一个弱引用
let obj = {
  name: "_island"
};

weakSet.add(obj);

// weakSet的应用场景
const personSet=new WeakSet()
class Person {
  constructor(){
    personSet.add(this)
  }
  running() {
    if(!personSet.has(this)){
      throw new Error("不能通过非构造方法创建出来的对象调用running方法")
    }
    console.log("running",this);
  }
}

const p = new Person();
p.running();
p.running.call({ name: "_island" });
