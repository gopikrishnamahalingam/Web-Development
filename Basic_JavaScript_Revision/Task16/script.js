// Task
// Given an array of student objects, determine:
// Average marks
// Highest scorer
// Lowest scorer
// Number of students above average
// Number of students below average

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

let average = (Students.reduce((Sum,Current)=>
    Sum = Sum + Current.Marks,0
))/Students.length;

Students.sort((a,b) => b.Marks - a.Marks);

console.log("Average Marks: "+average);
console.log("Highest Scorer: "+Students.filter(a => a.Marks === Students[0].Marks).map((a) => a.Name));
console.log("Lowest Scorer: "+Students.filter(a => a.Marks === Students[Students.length-1].Marks).map((a) => a.Name));
console.log("Students above Average: "+Students.filter(a => a.Marks>= average).map((a) => a.Name));
console.log("Students below Average: "+Students.filter(a => a.Marks < average).map((a) => a.Name));