// Task
// Given an array of students with their marks, create separate results for:
// Passing students
// Failing students
// Students scoring above 80

const Students = [
    {Name:"Khushleen",Marks:100},
    {Name:"Gopikrishna",Marks:99},
    {Name:"Vikrant",Marks:32},
    {Name:"Vidya",Marks:27},
    {Name:"Himali",Marks:46},
    {Name:"MDPatil",Marks:63},
    {Name:"Harry",Marks:92},
    {Name:"Kunal",Marks:84},
];
const passingStudents = Students.filter(a => a.Marks >= 35);
const failingStudents = Students.filter(a => a.Marks < 35);
const outstandingStudents = Students.filter(a => a.Marks > 80);

console.log(Students);
console.log(passingStudents);
console.log(failingStudents);
console.log(outstandingStudents);

