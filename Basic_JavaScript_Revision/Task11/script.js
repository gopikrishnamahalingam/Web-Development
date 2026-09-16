// Task
// Create an array containing marks of at least 10 students.
// Find:
// Highest
// Lowest
// Average
// Number of students passing
// Number of students failing

const Marks = [100,94,100,87,23,77,91,69,73,52,11,99];
console.log(Marks.sort((a,b)=> b-a));


let average = Marks.reduce((Sum,Current) =>
    Sum = Sum+Current,0
)/Marks.length;
// console.log(average);

let max = Marks[0];
let min = Marks[Marks.length-1];
// for(let i=1; i<Marks.length; i++){
//     if(min > Marks[i]){
//         min = Marks[i];
//     }
//     if(max < Marks[i]){
//         max = Marks[i];
//     }
// }

const numOfFail = Marks.filter(m => m<30).length;
// console.log(numOfFail);

console.log("Highest Marks: "+max);
console.log("Lowest Marks: "+min);
console.log("Average Marks: "+average);
console.log("Number of Students Passed: "+(Marks.length-numOfFail));
console.log("Number of Students Failed: "+numOfFail);


