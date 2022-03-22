let a=3,b=-8,c=2;
if(a>0 && b>0 && c>0){         //+ + + = +
  alert("NUMBER IS +")           
}else if(a<0 && b<0 && c<0){     //- - - = -
  console.log("NUMBER IS -")
}else if(a>0 && b<0 && c<0){     //+ - - = +
  console.log("NUMBER IS +")
}else if(a<0 && b>0 && c<0){     // - + - = +
  console.log("NUMBER IS +")
}else if(a<0 && b<0 && c>0){       // - - + = +
  console.log("NUMBER IS +")
}else if(a>0 && b>0 && c<0){       // + + - = -
  console.log("NUMBER IS -")
}else if(a>0 && b<0 && c>0){       //+ - + = -        //in given case,this if runs
  console.log("NUMBER IS - ")
}else {
  console.log("NUMBER IS -")    // - + + = -
}