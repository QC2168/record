const str = "hello world";
const str2 = "hello world hello world";
// 判断字符串中是否包含子串
const s1 = str.includes("hello");
console.log(s1); // true
// 判断字符串开头是否为h
const ish = str.startsWith("h");
console.log(ish); // true
// 判断字符串结尾是否为d
const isd = str.endsWith("d");
console.log(isd); // true
// 重复拼接字符串本身
const str3 = "abc";
str3.repeat(3);
console.log(str3);

// 字符串补全
const str4 = "100";
//字符串开头补全
console.log(str4.padStart(6, "000")); // 000100

//字符串结尾补全
const str5 = "200";
console.log(str5.padEnd(6, "000")); // 200000

const str6 = "  _island  ";
console.log(str6.trimStart()); // '_island  '
console.log(str6.trimEnd()); // '  _island'

