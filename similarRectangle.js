
let sides=[[5,10],[10,10],[3,6],[9,9]];
    // Write your code here
      let count = 0;
  for (var i = 0; i<sides.length; i++){
    // console.log(i);
    for (var j = i+1; j<sides.length; j++){
      // console.log(j)
      let div1 = sides[i][0] / sides[j][0]
      let div2 = sides[i][1] / sides[j][1]
      if (div1.toFixed(2) === div2.toFixed(2)) count += 1
    }
  }
  console.log(count)
// let sides=[[5,10],[10,10],[3,6],[9,9]];
//     // Write your code here
//       let count = 2;
//   for (var i = 0; i<sides.length; i++){
//     console.log(i," i ",sides[i],"sides[i]");
//     for (var j = 0; j<sides.length; j++){
//       console.log(j," j ",sides[j],"sides[j]");
      
//     }
//   }
//   console.log(count)
 
