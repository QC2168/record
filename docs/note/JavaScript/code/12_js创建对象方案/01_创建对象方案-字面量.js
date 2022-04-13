var p1 = {
  name: "张三",
  age: 18,
  height: 18,
  address: "广州市",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  }
};

var p2 = {
  name: "李四",
  age: 20,
  height: 1.58,
  address: "北京市",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  }
};
var p3 = {
  name: "王五",
  age: 20,
  height: 1.6,
  address: "上海市",
  eating: function () {
    console.log(this.name + "在吃东西");
  },
  running: function () {
    console.log(this.name + "在跑步");
  }
};
