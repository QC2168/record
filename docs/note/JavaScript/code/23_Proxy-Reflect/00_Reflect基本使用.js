const obj = {
  name: "_island",
  age: 18
};

console.log(obj.name); // _island
console.log(Reflect.get(obj, "name")); // _island

obj.name = "abc";
Reflect.set(obj, "name", "abc");
console.log(Reflect.get(obj, "name")); // abc

console.log("name" in obj); // true
console.log(Reflect.has(obj, "name")); // true
