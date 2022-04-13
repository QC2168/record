function* foo(){
  console.log('函数开始执行');
  const value1=100
  console.log(value1);
  const n=yield value1
  console.log(n);
  const value2=200*n
  console.log(value2);
  yield value2
  const value3=300
  console.log(value3);
  yield value3
  console.log('函数执行结束');
}

const generator=foo()
console.log(generator.next());
console.log(generator.next(10)); // { value: 2000, done: false }
console.log(generator.next());