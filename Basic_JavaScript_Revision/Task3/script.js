// Task
// Given a student's marks, determine their grade.
// Use a grading system of your choice and display the result.

const student = [96,94,85,93,99];
let total=0;
for (let i = 0; i < student.length; i++) {
    total += student[i];
}
let percentage = total/student.length;

let grade;
if(percentage>85){
    grade = 'A';
}
else if(percentage>70){
    grade = 'B';
}
else if(percentage>60){
    grade = 'C';
}
else if(percentage>50){
    grade = 'D';
}
else if(percentage>40){
    grade = 'E';
}
else{
    grade = 'F';
}
console.log(grade);
