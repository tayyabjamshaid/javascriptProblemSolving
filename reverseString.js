let s="1234"; 
const splitData=s.split("");   //string ko tor k array bna dy ga ["1","2","3","4"]
const reverseData=splitData.reverse();//REVERSE kr dy ga ["4","3","2","1"]
const joinData=reverseData.join("");//Akhata mila dy ga 4321
console.log(joinData)



//Program 2 
//Print Yes if num is +
//Print Negative if num is -
//Print Zero if num is 0
let a=5;
if(a>0){
  console.log("YES")
}   else if(a<0){
  console.log("Negative Error")
}else{
  console.log("Zero Error")
}
