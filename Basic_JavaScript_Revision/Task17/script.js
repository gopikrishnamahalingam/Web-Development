// Task
// Create a student object containing:
// Personal information
// Subject
// Marks
// Display selected information from the object.

// Modifying and Using the Array from task 14
const StudentsDetailed = [
    {Name:"Khushleen", Age:18 ,Subject: "Python",Marks:100},
    {Name:"Gopikrishna", Age:20 ,Subject: "Java",Marks:99},
    {Name:"Vikrant", Age:27 ,Subject: "DBMS",Marks:32},
    {Name:"Vidya", Age:42 ,Subject: "DS",Marks:27},
    {Name:"Himali", Age:39 ,Subject: "DSGT",Marks:46},
    {Name:"MDPatil", Age:47 ,Subject: "Maths",Marks:63},
    {Name:"Harry", Age:32 ,Subject: "JavaScript",Marks:92},
    {Name:"Kunal", Age:35 ,Subject: "Algorithm",Marks:84},
];

const CreamyLayer = StudentsDetailed.filter((a) => a.Marks>80).map((a)=>o={
    Name: a.Name,
    Subject:a.Subject
}
) ;
console.log("Creamy Layer");
console.log(CreamyLayer);
console.log("Creamy Layer: "+CreamyLayer.map((a)=> a.Name+"-"+a.Subject+" "));
console.log("Creamy Layer: "+CreamyLayer.map((a)=> `${a.Name}-${a.Subject}`));

