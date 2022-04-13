var obj={

}
// 会触发get操作，在obj对象中查找name执行
// 如果没有找到，这个时候会去__proto__对象上查找
// 如果没有找到会返回undefined

obj.__proto__={

}

obj.__proto__.__proto__={

}

obj.__proto__.__proto__.__proto__={
  name:'abc'
}

// abc
console.log(obj.name);