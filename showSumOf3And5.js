//showSumOf3And5.js
//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
//1st read this under 1000
//2nd is sum of multiples of both

let sum=0;
for(let i=0;i<1000;i++){    //1st condition
  if(i%3==0 || i%5==0){     //2nd condition
// and is lye use ni hu ga kyu k jab i ki value 3 hu gi tu wo 5 k table ni ati tab wo condition ni chly gi aur hamara maqsad 3 and 5 k all multiples value ko sum krna ha,is liye || use kry gy
sum+=i
  }
}
console.log(sum);