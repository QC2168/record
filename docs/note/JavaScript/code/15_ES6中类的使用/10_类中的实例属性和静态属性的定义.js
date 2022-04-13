class Foo{
  static name ='_island'
  constructor(){
    this.age='123'
  }
}

console.log(Foo.name);
console.log(Object.getOwnPropertyDescriptors(Foo));
