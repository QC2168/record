var _ = require("lodash");

// pointfree风格，带有word形参
var word = (word) => word.toUpperCase();
// pointfree风格，没有任何形参
var word = compose(toUpperCase);

console.log(word("aa"));
