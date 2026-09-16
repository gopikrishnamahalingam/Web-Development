// Task
// Allow a student's marks to be modified.
// Display the updated student information.

// Using the Array from task 17
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

// It is always advised to use primary key like student_id instead of name.
function modify(name,marks){
    StudentsDetailed[StudentsDetailed.findIndex((a)=>a.Name === name)].Marks = marks;
}
modify("MDPatil",57);
console.log(StudentsDetailed);
