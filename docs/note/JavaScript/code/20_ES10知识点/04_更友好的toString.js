function /* _island */ foo /* age 18 */() {}

// 之前
console.log(foo.toString()); // function foo(){}
// ES10之后
console.log(foo.toString()); // function /* comment */ foo /* another comment */() {}
