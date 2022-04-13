async function foo() {
  console.log("foo function start");
  console.log("code1");
  console.log("foo function end");
  throw new Error('error message')
}

foo().catch(err=>console.log(err))
console.log('后续的代码');