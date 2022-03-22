let str="javacript work hard tayyab"
//print vovel numbers[a,e,i,o,u] first and then print other numbers
let con="";
for(let i=0;i<str.length;i++){
  if((str[i]=="a")||(str[i]=="e")||(str[i]=="i")||(str[i]=="o")||(str[i]=="u")){
   console.log(str[i])
  }else{
   con+=str[i]+"\n";
  }
}
console.log(con);