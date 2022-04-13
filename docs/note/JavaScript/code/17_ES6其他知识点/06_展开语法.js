const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = [...arr, ...arr2];
console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

// ES2018 ES9
const info = { name: "_island", age: 18 };
const obj1 = { ...info, address: "Guangzhou" };
console.log(obj1); // { name: '_island', age: 18, address: 'Guangzhou' }
