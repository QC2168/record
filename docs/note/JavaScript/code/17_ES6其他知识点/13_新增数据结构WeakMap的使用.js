const obj = { name: "obj" };
const map = new Map();
map.set(obj, "a");

const weakMap = new WeakMap();
weakMap.set(obj, "a");
console.log(weakMap.get(obj)); // a