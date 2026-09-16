// Task
// Given student objects containing names and marks, arrange them according to their marks.

// Using the same Array from task 14
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
console.log(Students.sort((a,b)=> b.Marks - a.Marks));
 