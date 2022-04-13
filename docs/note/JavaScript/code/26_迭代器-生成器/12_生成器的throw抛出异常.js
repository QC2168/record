function* foo() {
  console.log("函数开始执行");
  const value1 = 100;
  yield value1;
  const value2 = 200;
  // throw时这里会报错
  try {
    console.log('111');
    yield value2;
  } catch (error) {
    console.log('----');
    console.log(error); // undefined
    console.log('----');
    yield value2;
  }
  const value3 = 300;
  yield value3;
  console.log("函数执行结束");
}

const generator = foo();
console.log(generator.next()); // { value: 100, done: false }
console.log(generator.next()); // { value: 200, done: false }
console.log(generator.throw()); // { value: 300, done: false }



