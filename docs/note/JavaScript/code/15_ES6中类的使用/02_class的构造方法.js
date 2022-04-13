class Animal  {
  // 类的构造方法
  // 用于接收函数
  constructor(name) {
    this.name = name;
  }
}


var a = new Animal("ABC");
console.log(a); // Animal { name: 'ABC' }
