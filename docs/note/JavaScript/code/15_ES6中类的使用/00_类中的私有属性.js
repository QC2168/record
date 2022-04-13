// class Animal{
//   #age;
//   constructor(name,age){
//     this.name=name
//     this.#age=age
//   }
// }

// var a = new Animal('_island',18)
// console.log(a); // Animal { name: '_island' }
// console.log(a.name); // _island
// console.log(a.age); // undefined
// console.log(a.#age); // Private field '#age' must be declared in an enclosing class


"use strict";

function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError(
      "Cannot initialize the same private elements twice on an object"
    );
  }
}

function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  _classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError(
      "attempted to " + action + " private field on non-instance"
    );
  }
  return privateMap.get(receiver);
}

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

var _age = /*#__PURE__*/ new WeakMap();

class Animal {
  constructor(name, age) {
    _classPrivateFieldInitSpec(this, _age, {
      writable: true,
      value: void 0
    });

    this.name = name;

    _classPrivateFieldSet(this, _age, age);
  }
}

var a = new Animal("_island", 18);
console.log(a.name); // _island
console.log(a.age); // undefined
// console.log(a.#age); // Private field '#age' must be declared in an enclosing class
// console.log(Object.getOwnPropertyDescriptors(a))