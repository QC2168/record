// function log(date,type,msg){
//   console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${msg}]`);
// }

// log(new Date(),'DEBUG','查找一个到BUG')
// log(new Date(),'DEBUG','查找一个到BUG')

// 使用柯里化，优化上面的代码片段

const log=date=>type=>msg=>console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${msg}]`);

var defineLog=log(new Date())
defineLog('DEBUG')('找到一个BUG')
defineLog('DEBUG')('找到一个BUG')