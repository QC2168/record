// ES5
// var obj={
//   name:'_island',
//   friends:['abc','cc']
// }

// obj.name='QC2125'

// console.log(obj);

// ES6中Symbol的使用
const s1=Symbol()
const s2=Symbol()
console.log(s1===s2); // false

// ES6之后，对象属性名可以使用Symbol值
// Symbol多次创建都是独一无二的值
// ES10中，symbol可以传入描述符
const s3=Symbol('description')
console.log(s3.description);

// symbol作为key
const obj={
  [s1]:'abc',
  [s2]:'cc',
}

obj[s3]='dd'

// object defineProperty
const s4=Symbol()
Object.defineProperty(obj,s4,{
  configurable:true,
  enumerable:true,
  writable:true,
  value:'ff'
})

// 需要用数组方式来获取，不能通过点语法，否则会获取到字符串key
console.log(obj[s1]);

// 在遍历或者object.keys中，是获取不到symbol值的
console.log(Object.keys(obj));
const sKeys=(Object.getOwnPropertySymbols(obj));
for(const skey of sKeys){
  console.log(obj[skey]);
}

// 相同Symbol值，symbol.for
const sa=Symbol.for('cc')
const sb=Symbol.for('cc')
console.log(sa===sb); //true

// 获取symbol的描述符
const key =Symbol.keyFor(sb)
console.log(sb.description);
console.log(key); // c

