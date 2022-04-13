function* foo() {
  console.log("函数开始执行");
  const value1 = 100;
  console.log(value1);
  yield;
  const value2 = 200;
  console.log(value2);
  yield;
  const value3 = 300;
  console.log(value3);
  yield;
  console.log("函数执行结束");
}

const generator = foo();
console.log(generator.next()); // { value: undefined, done: false }
console.log(generator.next()); // { value: undefined, done: false }
console.log(generator.next()); // { value: undefined, done: false }
console.log(generator.next()); // { value: undefined, done: true }
console.log(generator.next()); // { value: undefined, done: true }

// 函数开始执行
// 100
// 200
// 300
// 函数执行结束
