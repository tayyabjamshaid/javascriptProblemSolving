function factorial(n){
  let answer=1;
  for(let i=n;i>=1;i--){
      answer=answer*i;
  }

  return answer;
}
const data=factorial(4);
console.log(data);