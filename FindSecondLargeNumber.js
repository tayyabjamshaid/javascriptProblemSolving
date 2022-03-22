//FindSecondLargeNumber
// In upcoming Given  array ,find the second largest value in the array 



    const arr=[12,24,11,56]
    var max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
   let data= Math.max.apply(null, arr); // get the 2nd max
   console.log(data)



