const nums=[1,2,3,5,6,7,10,NaN]

if(nums.indexOf(1)!== -1){
  console.log('数组中包含1');
}
    

// ES7
if(nums.includes(1)){
  console.log('数组中包含1');
}


// 关于NaN判断
if(nums.indexOf(NaN)!== -1){
  console.log('数组中包含NaN');
}
    

// ES7
if(nums.includes(NaN)){
  console.log('数组中包含NaN');
}