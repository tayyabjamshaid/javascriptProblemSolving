//ArangeSequenceNumbers.js
//result should be in sequence 6 4 -8
let a =4,b=-8,c=6;

if(a>b && b>c){
console.log(a,b,c)
}else if(c>b && b>a){
  console.log(c,b,a)
  }else if(b>a && a>c){
    console.log(b,a,c)
    }else if(c>a && a>b){
      console.log(c,a,b)
      }else if(a>c && c>b){
        console.log(a,c,b)
        }else {
  console.log(b,c,a)
        }
        ///////////////////////2nd better way
let e=3,f=9,g=-8;
if(e>f && e>g){
  if(f>g){
console.log(e,f,g)
  }else{
    console.log(e,g,f)
  }
}else if(f>e && f>g){
  if(e>g){
console.log(f,e,g)
  }else{
    console.log(f,g,e)
  }
}else if(g>e && g>f){
  if(e>f){
console.log(g,e,f)
  }else{
    console.log(g,f,e)
  }
}