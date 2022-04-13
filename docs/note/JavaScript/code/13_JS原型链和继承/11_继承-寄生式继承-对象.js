var personObj = {
  running: function () {
    console.log("running");
  }
};
// 工厂函数
// 这种方案没有明确的类型，有弊端
function createStudent(name) {
  var stu = Object.create(personObj);
  stu.name = name;
  stu.running = function () {
    console.log("studying~");
  };
  return stu
}
var stuObj1 = createStudent('_island');
var stuObj2 = createStudent('_island2');
var stuObj3 = createStudent('_island3');

stuObj1.running()
stuObj2.running()
