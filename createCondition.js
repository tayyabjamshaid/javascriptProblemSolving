let n=15;
for(let i=1;i<=n;i++){
  if(i%15===0){
    console.log("FizzBuzz")
  }else if(i%3===0){
    console.log("Fizz")
  }else if(i%5===0){
    console.log("Buzz")
  }else{
    console.log(i)
  }
}

//Print FizzBuzz if n is multiple of both 3 and 5
//Print Fizz if n is multiple  3
//Print Buzz if n is multiple  5

//Print even numbers
for (let j=1;j<100;j++){
  if(j%2==0){
    console.log( j)
  }
}