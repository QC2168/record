function createPerson(name, age, height, address) {
  var p = new Object();
  p.name = name;
  p.age = age;
  p.address = address;
  p.height = height;
  p.eating = () => console.log(this.name + "在吃东西");
  p.running = () => console.log(this.name + "在跑步");
  return p;
}

var p1 = createPerson("张三", 18, 1.88, "广州市");
var p2 = createPerson("李四", 18, 1.58, "北京市");
var p3 = createPerson("王五", 16, 1.66, "上海市");

// 工厂模式的缺点
// 获取不到对象最真实的类型
console.log(p1, p2, p3);
