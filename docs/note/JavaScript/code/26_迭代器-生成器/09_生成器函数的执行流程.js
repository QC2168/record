// 遇到yield 是暂停函数的执行
// 遇到return 生成器就停止执行
function* foo() {
  console.log("函数开始执行");
  const value1 = 100;
  console.log(value1);
  yield value1;
  const value2 = 200;
  console.log(value2);
  yield value2;
  const value3 = 300;
  console.log(value3);
  yield value3;
  console.log("函数执行结束");
}

// 生成器本身是个迭代器
const generator = foo();
console.log(generator.next()); // { value: 100, done: false }
console.log(generator.next()); // { value: 200, done: false }
console.log(generator.next()); // { value: 300, done: false }
console.log(generator.next()); // { value: undefined, done: true }
