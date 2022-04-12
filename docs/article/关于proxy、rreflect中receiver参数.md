一文搞懂Proxy和Reflect中的receiver到底是什么东西

在`Proxy`和`Reflect`对象中的`get`、set方法的第三个参数是`receiver`，今天本文将讲述这个`receiver`到底是什么？

`receiver`翻译过来是接收者的意思，我们先看下`MDN`怎么解释这个参数的

> proxy get receiver
>
> Proxy或者继承Proxy的对象

当目前属性是一个`getter`访问器属性，通常情况下`receiver`参数为当前`proxy`本身。那么什么情况下`receiver`不是`proxy`本身？

我们先看一个简单的`Proxy`栗子，下面这个栗子我们使用了`getter`捕获器中的`receiver`参数。

```javascript
let obj ={a:1}

let pObj=new Proxy(obj,{
    get(target,key,receiver){
        console.log("receiver",receiver); // receiver  Proxy {a:1}
        console.log("receiver===pObj",receiver===pObj); // true
        return Reflect.get(target,key)
    }
})

console.log(pObj.a); // 1
```

从这个栗子中可以得出当前`receiver`参数是当前代理对象。

我们再看看另外一个当`Proxy`对象被继承时的栗子

```javascript
let obj ={a:1}

var pObj=new Proxy(obj,{
    get(target,key,receiver){
        return receiver
    }
})

console.log(pObj.getReceiver); // pObj {a: 1}

let child = Object.create(pObj);
console.log(child.getReceiver); // child {}
```

当`child`对象被继承于`pObj`对象时，`receiver`参数会自动指向到继承它的对象。

到了这个我们已经这个`Proxy`中的`receiver`参数是什么了，接着我们看看`Reflect`中的`receiver`参数。

我们拿上面第一个栗子修改一下，把`Reflect.get`的第一个参数改为`receiver`，也即是当触发`getter`函数时，从`receiver`中获取对应的属性值。

```javascript
let obj ={a:1}

let pObj=new Proxy(obj,{
    get(target,key,receiver){
        return Reflect.get(receiver,key)
    }
})

console.log(pObj.a); 
```

> Uncaught RangeError: Maximum call stack size exceeded

细心的同学会发现这一段代码是一个死循环，在通过`pObj.a`时，触发了`getter`属性，又继续访问了`receiver`中的`getter`....一直嵌套下去导致无限循环。

这个时候就要`Reflect.get`的第三个参数传入`Proxy`中的`receiver`参数了，我们纠正下上面的代码。

```javascript
let obj ={a:1}

let pObj=new Proxy(obj,{
    get(target,key,receiver){
        return Reflect.get(target,key,receiver)
    }
})

console.log(pObj.a); // 1
```

这里的`Reflect.get`中的`receiver`参数是`target`对象中`getter`调用时的`this`值，这么说可能不是很明白，我们再通过一个栗子看看。

```javascript
const obj = { get a() { return this.b; } };
const proxy = new Proxy(obj, {
    get(target, key) {
        return target[key]
    }
})

console.log(Reflect.get(obj, "a")); // undefined
console.log(Reflect.get(obj, "a", { b: 2 })); // 2
```

在这里栗子中，我们给obj对象上设置了一个`getter`属性`a`，当我们访问a时返回当前this中的b，这里可以看到b是没有被定义的，直接访问为`undefined`，我们使用`Reflect`第三个参数`receiver`绑定a的`this`值为`{ b: 2 }`，最终可以访问得到`2`。
