---
title: TS内置高级泛型工具函数
tags: [interview]
---

### 前言

如今，越来越多的项目使用了`TypeScript`进行编写，我们都知道`TypeScript`是`JavaScript`的超集，它为JavaScript提供了强大的类型和语法增强功能，能在项目开发的过程中大大减少错误的产生。而`TypeScript`也内置了很多的工具类型，接下来，我将带着大家学习`TypeScript`中的工具类型。

### Partial

`Partial`用于将一个类型中的所有属性转变为可选属性。

#### 栗子

```typescript
interface PhoneType {
  width: number;
  height:  number;
}

const D1:PhoneType={
    width:100,
    height:100
}

// 错误， 缺少height属性
const D2:PhoneType={
    width:100,
}

// 此时，weight和height变为可选属性
// type Partial<T> = { [P in keyof T]?: T[P]; }
const D3:Partial<PhoneType>={
    width:100,
}
```

#### 分析

可以看到，`Partial`会将我们传入的类型先通过`keyof`获取对应的属性名称，在进行遍历，将对应属性类型赋值给`P`，使用可选的符号`?`，让属性成为可选属性。

```typescript
type Partial<T> = { [P in keyof T]?: T[P]; }
```

### Required

`Required`，从名称上我们就可以猜测到，它是一个将一个类型中所有属性转变为必选属性的方法。

#### 栗子

```typescript
interface PersonType {
  name: string;
  age?: number;
}

// 正常情况下，age属性可不填写
const p1: PersonType = {
  name: "_island",
};

// 错误，缺少age属性
// 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Required<PersonType>" 中需要该属性。ts(2741)
const p2: Required<PersonType> = {
  name: "zhangsan",
};

// type Required<T> = { [P in keyof T]-?: T[P]; }
// 将age属性变成必选属性
const p3: Required<PersonType> = {
  name: "lisi",
  age: 18,
};
```

#### 分析

同上面的`Partial`一样，先通过`keyof`获取类型中的属性名称，进行遍历操作。**这里不同的是在?前面多出了`-`，意思是将可选属性的`?`符号去掉，变为必选属性**。

```typescript
type Required<T> = { [P in keyof T]-?: T[P]; }
```

### Pick

`Pick`用于从一个类型中，提取一个或者多个属性出来。

#### 栗子

```typescript
interface HousesItemType {
  desc: string;
  houseCode: string;
  houseImg: string | string[];
  price: number | string;
  tags: string[];
  title: string;
}

// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
// 从 HousesItemType 类型中提取出 houseCode houseImg price
type MiniHousesItemType = Pick<
  HousesItemType,
  "houseCode" | "houseImg" | "price"
>;

const item: MiniHousesItemType = {
  houseCode: "39cadd9a",
  houseImg: "file_path",
  price: "1000",
};
```

#### 分析

这个就很简单了，`Pick`接受两个参数，从第一个参数类型中抽取第二个参数中类型属性。

```typescript
type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
```

### Readonly

`Readonly`用于将一个类型中的属性转换为可读属性，也即是后续不能修改这些属性值。

#### 栗子

```typescript
interface ResultType<T=any>{
    data:T
    status:number
}

const res:ResultType<string>={
    data:'ok',
    status:200
}
res.data='ook!'
// res --> ook!

const res2:Readonly<ResultType<string>>={
    data:'ok',
    status:200
}
// 无法赋值，data是只读属性
// type Readonly<T> = { readonly [P in keyof T]: T[P]; }
res2.data='ook!'
```

#### ReadonlyArray

```typescript
const arr1:Readonly<number[]>=[1,2,3,4,5,6,7,8,9]
// 相当于上面的写法
const arr2:ReadonlyArray<number>=[1,2,3,4,5,6,7,8,9]
```

#### 分析

`Readonly`会将我们传入的类型先通过`keyof`获取对应的属性名称，在进行遍历，将对应属性类型赋值给`P`，使用`Readonly`操作符，让其属性转变为可读属性。

```typescript
type Readonly<T> = { readonly [P in keyof T]: T[P]; }
```

### Record

`Record`，翻译过来即是记录的意思，用于将一个类型中的属性值映射到另外一个类型。

#### 栗子

```
interface PersonType {
  name: string;
  age?: number;
}

type Names = "_island" | "zhangsan" | "lisi";

// 将Names作为list的属性名称，PersonType作为属性值类型
// type Record<K extends string | number | symbol, T> = { [P in K]: T; }
const list: Record<Names, PersonType> = {
  _island: { age: 10, name: "_island" },
  zhangsan: { age: 5, name: "zhangsan" },
  lisi: { age: 16, name: "lisi" },
};
```

#### 分析

我们可以看到，将`K`（`K`只能是`string` `number` `symbol`类型）转化作为T类型。

```
type Record<K extends string | number | symbol, T> = { [P in K]: T; }
```

### Omit

`Omit`用于忽略类型中的指定属性，创建一个新的类型。

#### 栗子

```typescript
interface CarType {
  name: string;
  type: string;
  color: string;
}

const C1: CarType = {
  name: "Car1",
  type: "mini",
  color: "red",
};

// 从CarType类型中，忽略color属性
// type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
const C2: Omit<CarType, "color"> = {
  name: "Car1",
  type: "mini",
};
```

#### 分析

从`T`类型中去除`K`属性，通过`keyof`获取T类型中的属性，使用`Exclude`移除`K`属性。

```typescript
type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
```

### Exclude

`Exclude`用于在将一个类型中属于另外一个类型的移除掉。

#### 栗子

```typescript
interface A {
  size: number;
  color: string;
}

interface B {
  size: number;
}

const C: Exclude<B, A> = {
  size: 100,
};
```

#### 分析

如果T类型能分配给`U`，则返回`never`类型，否则返回`T`类型。

```typescript
type Exclude<T, U> = T extends U ? never : T
```

### Extract

#### 栗子

```typescript
interface AList {
    name:string;
    age:number;
    type:number
}

interface BList {
    name:string;
    age:number;
    type:number
    count:number

}
interface CList {
    name:string;
    age:number;
    type:number

}

// type Extract<T, U> = T extends U ? T : never
// type LT = BList
type LT= Extract<AList|BList|CList,BList>
```

#### 分析

从`T`类型中提取出`U`类型，如果`T`不能分配`U`，则`never`。

```typescript
type Extract<T, U> = T extends U ? T : never
```

### NonNullable

`NonNullable`用于将类型中的`null`，`undefined`属性移除掉。

#### 栗子

```typescript
// type NonNullable<T> = T extends null ? never : T
type stringType=NonNullable<string|undefined|null>
// type stringType = string
```

#### 分析

如果`T`类型可以被分配给`null`返回`never`，否则返回`T`。

```typescript
type NonNullable<T> = T extends null ? never : T
```

### Parameters

`Parameters`用于获取函数的参数类型。

#### 栗子

```typescript
export default function fun1(x: number, y: number, z: number) {
  console.log(x, y, z);
  return { x, y, z };
}

type p1=Parameters<(name:number)=>void>
// type p1 = [name: number]

type p2=Parameters<<T>(arg:T)=>T>
// type p2 = [arg: unknown]

// 获取fun1函数的参数类型
type p3=Parameters<typeof fun1>
// [x: number, y: number, z: number]

// 分析
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
```

#### 分析

`T`类型通过`infer`关键字进行推断`P`函数参数类型。

```typescript
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
```

### ConstructorParameters

`ConstructorParameters`用户获取一个构造函数的参数类型。

#### 栗子

```typescript
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type PT=ConstructorParameters<typeof Person>
// type PT = [name: string, age: number]

type ET =ConstructorParameters<ErrorConstructor>
// type ET = [message?: string]

type NT =ConstructorParameters<null>
// type NT = unknown[]

type AT =ConstructorParameters<any>
// type AT = unknown[]
```

#### 分析

先是判断传入的`T`类型函数是否为一个抽象类，接着通过`infer`推断出该构造函数的参数类型，否则返回`never`

```typescript
type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never
```

### ReturnType

`ReturnType`用于获取一个函数的返回值类型。

#### 栗子

```typescript
function f1(name: string): string {
  return name;
}

type f1Type = ReturnType<typeof f1>;
// type f1Type = string

function f2<T>(name: T): T {
  return name;
}

type f2Type = ReturnType<typeof f2>;
// type f2Type = unknown

```

#### 分析

先判断传入的`T`类型是否为一个函数，是则进行`infer`推断返回值参数类型。

```typescript
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
```

### InstanceType

`InstanceType`用于获取一个类的实例的类型。

#### 栗子

```typescript
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

type PersonType=InstanceType<typeof Person>;
// type PersonType = Person


type AT =InstanceType<any>
// type AT = any

// type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any
```

#### 分析

判断传入的`T`类型是否为一个抽象类，通过`inter`推断类返回的参数

```typescript
type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any
```

### ThisParameterType

`ThisParameterType`用于提取函数的`this`的参数类型，传入的类型必须是一个函数类型。

#### 栗子

```typescript
import Person from "./ConstructorParameters";

function f1(this:Person){
    console.log(this);
}

type TT=ThisParameterType<typeof f1>
// type TT = Person
```

#### 分析

推断`T`类型是否为一个函数，接着推断函数中的`this`类型。

```typescript
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown
```

### OmitThisParameter

同上面的`Omit`类似，`OmitThisParameter`用于移除类型中的`this`类型。

#### 栗子

```typescript
function foo(this: number) {
  console.log(this);
}

const fooType: OmitThisParameter<typeof foo> = foo.call(1);
```

#### 分析

这里传入了`ThisParameterType`，先得到`T`函数的`this`类型，判断是否为一致，后续推断出`A`和`R`类型。

```typescript
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T
```

### ThisType

`ThisType`用于在字面量对象中指定`this`。

> 只有在 `--noImplicitThis` 的选项下才有效

#### 栗子

```typescript
// 简单的栗子
interface data {
  count: number;
  increase:()=>void
}

// 复杂一点的栗子
type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```
