## 实现apply、call、bind函数

![image-20220102161416445](https://raw.githubusercontent.com/QC2168/note-img/main/202201021614548.png)

apply call bind 绑定的this对象，在内部保存的是内存地址

> 注意：练习函数、this、调用关系，不考虑一些边界情况，其实它底层实现是C++代码，但这里我们通过JavaScript来模拟这些函数

## call实现

```javascript
Function.prototype.mycall = function (thisArg, ...args) {
  console.log("mycall被调用了");
  // 获取需要被执行的函数
  var fn = this;
  // 对thisArg转成对象类型（防止传入的是非对象类型）
  thisArg = thisArg ? Object(thisArg) : window;
  //调用需要被执行的函数
  thisArg.fn = fn;
  var result = thisArg.fn(...args);
  // 删除属性
  delete thisArg.fn;

  // 将最终的结果返回出去
  return result;
};
```

## apply实现

```javascript
Function.prototype.myapply = function (thisArg, args=[]) {
  // 获取需要被执行的函数
  var fn = this;
  // 将thisArg转成对象
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  // 调用需要执行的函数
  thisArg.fn=fn
  var result=thisArg.fn(...args)
  // 删除属性
  delete thisArg.fn
  // 返回数据
  return result
};
function foo(){
  console.log(this);
}
function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2);
  return num1 + num2;
}
```

## bind实现

```javascript
Function.prototype.mybind = function (thisArg, ...argArray) {
  // 获取到真实需要调用的函数
  var fn = this;
  // 绑定this
  thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  function proxyFn(...args) {
    // 将函数放到thisArg中进行调用
    thisArg.fn = fn;
    // 特殊情况，将传入的两个数组进行合并
    var finalArgs = [...argArray, ...args];
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  }
  // 返回结果
  return proxyFn;
};

```

## 