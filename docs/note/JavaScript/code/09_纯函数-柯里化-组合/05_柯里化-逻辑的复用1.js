// function sum(m, n) {
  // return m + n;
// }
// 假如，我们经常需要把数字5和另外一个数字相加
// console.log(sum(5, 10));
// console.log(sum(5,20));
// console.log(sum(5,30));
// console.log(sum(5,40));

// function makeAdder(count){
//   return function(num){
//     return count+num
//   }
// }
// const makeAdder = (count) => (num) => count + num;

// var res = makeAdder(5)(10);
// var adder5 = makeAdder(5);
// console.log(res);
// console.log(adder5(10));

function MyURL(protocol, domain, path) {
  return protocol + "://" + domain + "/" + path;
}
MyURL('http','juejin.cn','user/2858385965322935');
//http://juejin.cn/user/2858385965322935
const justinPost=MyURL('http','juejin.cn')
justinPost('post/7055941374687838216')
// https://juejin.cn/post/7055941374687838216
justinPost('post/7054594359206871053')
// https://juejin.cn/post/7054594359206871053
function getUrl(path){
  return MyURL('http','juejin.cn',path);
}