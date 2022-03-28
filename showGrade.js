//showGrade.js
//Find the average marks in s
var grades=[['science',98],['chem',28],['english',78],['urdu',68],['maths',88]]
var student=0;
for(let i=0;i<grades.length;i++){
      student+=     grades[i][1]
      var avg=(student/grades.length);
    }
    if (avg < 60){
      console.log("Grade : F");      
      } 
    else if (avg < 70) {
            console.log("Grade : D"); 
              } 
    else if (avg < 80) 
         {
            console.log("Grade : C"); 
    } else if (avg < 90) {
            console.log("Grade : B"); 
    } else if (avg < 100) {
            console.log("Grade : A"); 
}