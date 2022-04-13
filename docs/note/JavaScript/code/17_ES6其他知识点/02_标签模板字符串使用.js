function foo(m, n) {
  console.log(m, n);
}

// foo(20,30)
foo("hello", "world");

// 另外一个调用函数的方式  标签模块字符串
// foo`hello world`
const myname = "_island";
foo`hello${myname}world`;
