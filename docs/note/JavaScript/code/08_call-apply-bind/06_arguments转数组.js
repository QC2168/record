function foo(num1, num2) {
  console.log(num1, num2);
  var newArr = [];
  for (var i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i] * 10);
  }
  console.log(newArr);

  var newArr2 = Array.prototype.slice.call(arguments);
  console.log(newArr2);

  // Array.prototype.slice将arguments转array
  var newArr3 = [].slice.call(arguments);
  console.log(newArr3);

  // es6语法
  var newArr4 = Array.from(arguments);
  console.log(newArr4);

  var newArr5 = [...arguments];
  console.log(newArr5);
}
foo(10, 20, 30);
