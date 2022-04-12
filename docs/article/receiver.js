// let obj = new Proxy(
//   {
//     get a() {
//         console.log(this);
//       return this.b;
//     },
//   },
//   {
//     get: function (target, key) {
//       if (key === "b") return "bbb";
//       return Reflect.get(target, key);
//     },
//   }
// );

// console.log(obj.a); // undefined
// console.log(obj.b); // bbb
// console.log(Reflect.get(obj, "a", { b: "reflect bbb" }));
const obj = { get a() { return this.b; } };
const proxy = new Proxy(obj, {
    get(target, key) {
        return target[key]
    }
})
console.log(Reflect.get(obj, "a")); // undefined
console.log(Reflect.get(obj, "a", { b: 2 })); // 2