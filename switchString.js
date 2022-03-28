//agr upcoming string {a,e,i,o,u} sy start hu rhi ha tu A display kro
//agr upcoming string {b,c,d,f,g} sy start hu rhi ha tu B display kro
//agr upcoming string {h,j,k,l,m} sy start hu rhi ha tu C display kro
//agr upcoming string {n,p,q,r,s,t,v,w,x,y,z} sy start hu rhi ha tu D display kro


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
     switch(true){
         case "aeiou".includes(s[0]): letter="A";  break;
          case "bcdfg".includes(s[0]):letter="B";  break;
           case "hjklm".includes(s[0]): letter="C" ; break;
          case "npqrstvwxyz".includes(s[0]): letter="D";  break;
            
     }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}