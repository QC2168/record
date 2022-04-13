// eval是一个特殊的函数，它可以将传入的字符串当JavaScript代码来运行
console.log(eval('1+1'));
console.log(1+1);
// 实际开发中不要使用eval
// eval可读性很差
// eval是一个字符串，有被篡改的可能
// eval执行必须经过js解释器，不能被js引擎优化