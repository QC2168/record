ð **éè¯»æ¬æä½ å°å­¦ä¹ å°** ð

- ç±»ä¸­çæé å½æ°
- ç±»çå®ä¾ãéæãç§æå±æ§
- ç±»çå®ä¾ãéæãç§ææ¹æ³
- ç±»çç»§æ¿
- `Getter and Setter`
- å³äº`class`ä¸äºæ©å±ç¥è¯ç¹

å¨`ES6`ï¼`ECMAScript6`ï¼ä¹åï¼`JavaScript`è¯­æ³ä¸­æ¯ä¸æ¯æç±»çï¼å¯¼è´é¢åå¯¹è±¡ç¼ç¨æ¹æ³æ æ³ç´æ¥ä½¿ç¨ï¼ä½æä»¬å¯ä»¥éè¿functionæ¥å®ç°æ¨¡æåºç±»ï¼èéç`JavaScript`çæ´æ°ï¼å¨`ES6`åºç°äºä¸­åºç°`class`å³é®å­ï¼å¯ä»¥ç¨äºå®ä¹ç±»ãæ¥ä¸æ¥è®©æä»¬ççå®çå¦ä½ä½¿ç¨çã

### class

ä¸é¢æä»¬æ¥ççå¦ä½ä½¿ç¨`class`å³é®å­å£°æä¸ä¸ªç±»ã

```javascript
class Animal {

}

// or

const Animal = class {

}
```

èå¨`ES6`ä¹åï¼æä»¬é½æ¯éè¿ä»¥ä¸è¿æ ·å­çæ¹å¼æ¥æ¨¡æåºç±»çã

```javascript
function Animal(){

}
```

### ç±»çæé å½æ°

æ¯ä¸ä¸ªç±»é½å¯ä»¥æä¸ä¸ªèªå·±çæé å½æ°ï¼è¿ä¸ªåç§°æ¯åºå®ç`constructor`ï¼å½æä»¬éè¿`new`è°ç¨ä¸ä¸ªç±»æ¶ï¼è¿ä¸ªç±»å°±ä¼è°ç¨èªå·±ç`constructor`æ¹æ³ï¼æé å½æ°ï¼ã

- å®ç¨äºåå»ºå¯¹è±¡æ¶ç»ç±»ä¼ éä¸äºåæ°
- æ¯ä¸ä¸ªç±»åªè½æä¸ä¸ªæé å½æ°ï¼å¦åæ¥é

éè¿`new`è°ç¨ä¸ä¸ªç±»æ¶ï¼ä¼è°ç¨æé å½æ°ï¼æ§è¡å¦ä¸æä½è¿ç¨ï¼

1. å¨åå­ä¸­å¼è¾ä¸åæ°çç©ºé´ç¨äºåå»ºæ°çå¯¹è±¡
2. è¿ä¸ªå¯¹è±¡åé¨ç`prototype`å±æ§ä¼è¢«èµå¼ä¸ºè¯¥ç±»ç`prototype`å±æ§
3. æé å½æ°åçthisï¼æååå»ºåºæ¥çæ°å¯¹è±¡
4. æ§è¡æé å½æ°çåé¨ä»£ç 
5. å¦æå½æ°æ²¡æè¿åå¯¹è±¡ï¼åè¿å`this`

```javascript
class Animal  {
  // ç±»çæé æ¹æ³
  // ç¨äºæ¥æ¶å½æ°
  constructor(name) {
    this.name = name;
  }
}

var a = new Animal("ABC");
console.log(a); // Animal { name: 'ABC' }
```

ä¸é¢è¿ä¸ªä¾å­ä¸­ï¼æä»¬å¨`class`ä¸­å®ä¹ç`constructor`ï¼è¿ä¸ªå°±æ¯æé æ¹æ³ï¼è`this`ä»£è¡¨çæ¯å®ä¾å¯¹è±¡ã

è¿ä¸ª`class`ï¼ä½ å¯ä»¥æå®çä½æé å½æ°çå¦å¤ä¸ç§åæ³ï¼å ä¸ºå®åå®çæé å½æ°çç¸ç­çï¼å³æ¯ç±»æ¬èº«æåæé å½æ°ã

```javascript
console.log(Animal === Animal.prototype.constructor); // true
```

å¶å®ï¼å¨ç±»ä¸çæææ¹æ³é½ä¼æ¾å¨`prototype`å±æ§ä¸ã

### ç±»ä¸­çå±æ§

#### å®ä¾å±æ§

å®ä¾çå±æ§å¿é¡»å®ä¹å¨ç±»çæ¹æ³éï¼å°±å¦ä¸é¢çä¾å­ï¼æä»¬å¨æé å½æ°ä¸­å®ä¹`name`è¿ä¸ªå±æ§ã

```javascript
class Animal{
  constructor(name,height,weight) {
    this.name = name;
    this.height = height
    this.weight = weight
  }
}
```

#### éæå±æ§

å½æä»¬æä¸ä¸ªå±æ§èµå¼ç»ç±»æ¬èº«ï¼èä¸æ¯èµå¼ç»å®`prototype`ï¼è¿æ ·å­çå±æ§è¢«ç§°ä¹ä¸ºéæå±æ§ï¼`static`ï¼ã

éæå±æ§ç´æ¥éè¿ç±»æ¥è®¿é®ï¼æ éå¨å®ä¾ä¸­è®¿é®ã

```javascript
class Foo{
  static name ='_island'
}

console.log(Foo.name);
```

#### ç§æå±æ§

ç§æå±æ§åªè½å¨ç±»ä¸­è¯»åãåå¥ï¼ä¸è½éè¿å¤é¨å¼ç¨ç§æå­æ®µã

```javascript
class Animal{
  #age;
  constructor(name,age){
    this.name=name
    this.#age=age
  }
}

var a = new Animal('_island',18)
console.log(a); // Animal { name: '_island' }
console.log(a.name); // _island
console.log(a.age); // undefined
console.log(a.#age); // Private field '#age' must be declared in an enclosing class
```

æä»¬éè¿`getOwnPropertyDescriptors`æ¹æ³è·åå°å®çå±æ§ï¼åæ ·ä¹æ¯è·åä¸å°ã

```javascript
console.log(Object.getOwnPropertyDescriptors(a))

{
  name: {
    value: '_island',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
```

> ç§æå­æ®µä»è½å¨å­æ®µå£°æä¸­é¢åå®ä¹ã
>

> å¬å±åç§æå­æ®µå£°ææ¯JavaScriptæ åå§åä¼[TC39](https://tc39.es/)æåºç[å®éªæ§åè½ï¼ç¬¬3é¶æ®µï¼](https://github.com/tc39/proposal-class-fields)ãæµè§å¨ä¸­çæ¯ææ¯æéçï¼ä½æ¯å¯ä»¥éè¿[Babel](https://babeljs.io/)ç­ç³»ç»æå»ºåä½¿ç¨æ­¤åè½ã

### ç±»ä¸­çæ¹æ³

#### å®ä¾æ¹æ³

å¨`ES6`ä¹åï¼æä»¬å®ä¹ç±»ä¸­çæ¹æ³æ¯ç±»ä¸­çååä¸è¿è¡å®ä¹çï¼é²æ­¢ç±»ä¸­çæ¹æ³éå¤å¨å¤ä¸ªå¯¹è±¡ä¸ã

```javascript
function Animal() {}
Animal.prototype.eating = function () {
  console.log(this.name + " eating");
};
```

å¨`ES6`ä¸­ï¼å®ä¹ç±»ä¸­çæ¹æ³æ´å ç®æ´ï¼ç´æ¥å¨ç±»ä¸­å®ä¹å³å¯ï¼è¿æ ·å­çåæ³å³ä¼éå¯è¯»æ§ä¹å¼ºã

```javascript
class Animal{
  eating() {
    console.log(this.name + " eating");
  }
}
```

#### éææ¹æ³

éææ¹æ³ä¸ä¸é¢æå°çéæå±æ§æ¯ä¸æ ·çï¼å¨æ¹æ³åé¢ä½¿ç¨`static`å³é®å­è¿è¡å£°æï¼ä¹åè°ç¨è¿ä¸ªæ¹æ³æ¶ä¸éè¦éè¿ç±»çå®ä¾æ¥è°ç¨ï¼å¯ä»¥ç´æ¥éè¿ç±»åæ¥è°ç¨å®ã

```javascript
class Animal{
  static createName(name) {
    return name
  }
}

var a2 = Animal.createName("_island");
console.log(a2); // _island
```

#### ç§ææ¹æ³

å¨é¢åå¯¹è±¡ä¸­ï¼ç§ææ¹æ³æ¯ä¸ä¸ªå¸¸è§éæ±ï¼ä½æ¯å¨ES6ä¸­æ²¡ææä¾ï¼æä»¬å¯ä»¥éè¿æä¸ªæ¹æ³æ¥å®ç°å®ã

```
class Foo {
  __getBloodType() {
    return "O";
  }
}

```

> éè¦æ³¨æçæ¯ï¼éè¿ä¸åçº¿å¼å¤´éå¸¸æä»¬ä¼å±éå®æ¯ä¸ä¸ªç§ææ¹æ³ï¼ä½æ¯å¨ç±»çå¤é¨è¿æ¯å¯ä»¥æ­£å¸¸è°ç¨å°è¿ä¸ªæ¹æ³ç

### ç±»çç»§æ¿

`extends`å³é®å­ç¨äºæ©å±å­ç±»ï¼åå»ºä¸ä¸ªç±»ä½ä¸ºå¦å¤ä¸ä¸ªç±»çä¸ä¸ªå­ç±»ã

å®ä¼å°ç¶ç±»ä¸­çå±æ§åæ¹æ³ä¸èµ·ç»§æ¿å°å­ç±»çï¼åå°å­ç±»ä¸­éå¤çä¸å¡ä»£ç ã

è¿å¯¹æ¯ä¹åå¨`ES5`ä¸­ä¿®æ¹ååé¾å®ç°ç»§æ¿çæ¹æ³çå¯è¯»æ§è¦å¼ºå¾å¤ï¼èä¸åæ³å¾ç®æ´ã

#### extendsçä½¿ç¨

```javascript
class Animal{

}

// dog ç»§æ¿ Animal ç±»
class dog extends Animal {

}
```

#### ç»§æ¿ç±»çå±æ§åæ¹æ³

ä¸é¢è¿ä¸ªä¾å­ï¼æä»¬å®ä¹äº`dog`è¿ä¸ªç±»ï¼éè¿`extends`å³é®å­ç»§æ¿äº`Animal`ç±»çå±æ§åæ¹æ³ã

å¨å­ç±»ç`constructor`æ¹æ³ä¸­ï¼æä»¬ä½¿ç¨äº`super`å³é®å­ï¼å¨å­ç±»ä¸­å®æ¯å¿é¡»å­å¨çï¼å¦åæ°å»ºå®ä¾æ¶ä¼æåºå¼å¸¸ãè¿æ¯å ä¸ºå­ç±»çthiså¯¹è±¡æ¯ç»§æ¿èªç¶ç±»çthiså¯¹è±¡ï¼å¦æä¸è°ç¨`super`æ¹æ³ï¼å­ç±»å°±å¾ä¸å°`this`å¯¹è±¡ã

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  eating() {
    console.log(this.name + " eating");
  }
}

// dog ç»§æ¿ Animal ç±»
class dog extends Animal {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
  }
  speaking() {
    console.log(this.name + " speaking");
  }
}

var d = new dog("tom", 4);
d.eating(); // tom eating
d.speaking(); // tom speaking
console.log(d.name); // tom
```

#### Super

**super**å³é®å­ç¨äºè®¿é®åè°ç¨ä¸ä¸ªå¯¹è±¡çç¶å¯¹è±¡ä¸çå½æ°ã

`super`æçæ¯è¶çº§ãé¡¶çº§ãç¶ç±»çææ

å¨å­ç±»çæé å½æ°ä¸­ä½¿ç¨`this`æèè¿åé»è®¤å¯¹è±¡ä¹åï¼å¿é¡»åéè¿`super`è°ç¨ç¶ç±»çæé å½æ°ã

ä¸é¢è¿æ®µä»£ç ï¼å­ç±»ç`constructor`æ¹æ³ä¸­åè°ç¨äº`super`æ¹æ³ï¼å®ä»£è¡¨äºç¶ç±»çæé å½æ°ï¼ä¹å°±æ¯è¯´æä»¬æåæ°ä¼ éè¿å»ä¹åï¼å¶å®å®æ¯è°ç¨äºç¶ç±»çæé å½æ°ã

```javascript
class Animal{
  constructor(name)
}

class dog{
  constructor(name,type,weight){
    super(name)
    this.type=type
    this.weight=weight
  }
}
```

ä¸é¢è¿æ®µä»£ç ä½¿ç¨superè°ç¨ç¶ç±»çæ¹æ³

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  eating() {
    console.log(this.name + " eating");
  }
}

// dog ç»§æ¿ Animal ç±»
class dog extends Animal {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
  }
  speaking() {
    super.eating()
    console.log(this.name + " speaking");
  }
  
}

var d = new dog("tom",4);
d.speaking(); // tom eating tom speaking
```

### Getter å Setter

å¨ç±»åé¨ä¹å¯ä»¥ä½¿ç¨`get`å`set`å³é®å­ï¼å¯¹åºæä¸ªå±æ§è®¾ç½®å­å¼ååå¼å½æ°ï¼æ¦æªå±æ§çå­åè¡ä¸ºã

```javascript
class Animal {
  constructor() {
    this._age = 3;
  }

  get age() {
    return this._age;
  }

  set age(val) {
    this._age = val;
  }
}

var a = new Animal();
console.log(a.age); // 3
a.age = 4;
console.log(a.age); //4
```

### å³äºclassæ©å±

#### ä¸¥æ ¼æ¨¡å¼

å¨ç±»åæ¨¡åçåé¨ï¼é»è®¤æ¯ä¸¥æ ¼æ¨¡å¼ï¼æä»¥ä¸éè¦ä½¿ç¨`use strict`æå®è¿è¡æ¨¡å¼ãåªè¦ä½ çä»£ç åå¨ç±»ææ¨¡åä¹ä¸­ï¼å°±åªæä¸¥æ ¼æ¨¡å¼å¯ç¨ã

#### nameå±æ§

`ES6`ä¸­çç±»åªæ¯`ES5`æé å½æ°çä¸å±åè£ï¼æä»¥å½æ°çè®¸å¤å±æ§é½è¢«`class`ç»§æ¿äºï¼åæ¬`name`å±æ§ã

```javascript
class Animal{

}
console.log(Animal.name); // Animal
```

#### åéæå

`class`ä¸å­å¨åéæåï¼è¿ä¸æä»¬å¨`ES5`ä¸­å®ç°ç±»çä¸åçï¼`function`å³é®å­ä¼å­å¨åéæåã

```javascript
new Foo(); // ReferenceError
class Foo {}
```

### æ»ç»

å¨`ES6`ä¹åï¼æä»¬å¨å®ä¹ç±»ä»¥åå®åé¨çå±æ§æ¹æ³ï¼è¿æç»§æ¿æä½çè¯­æ³åå¾éå¸¸ç®æ´ä¸ææï¼`class`æ¯ä¸ä¸ªè¯­æ³ç³ï¼å¶åé¨è¿æ¯éè¿`ES5`ä¸­çè¯­æ³æ¥å®ç°çãä¸æäºæµè§å¨ä¸æ¯æ`class`è¯­æ³ï¼æä»¬å¯ä»¥éè¿`babel`æ¥è¿è¡è½¬æ¢ã


