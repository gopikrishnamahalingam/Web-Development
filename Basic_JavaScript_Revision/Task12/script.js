// Task
// Create an array of student names.
// Perform operations that:
// Add students
// Remove students
// Search for a student
// Determine whether a student exists
// Find a student's position

const Students = ["Khushleen","Gopi","Harry","Kunal"];

const add = (name) => Students.push(name);
const remove = (name) => Students.splice(Students.findIndex(a => a===name),1);
const search = (name) => Students.filter(a => a === name);
const find = (name) => Students.find(a => a===name);
const exists = (name) => Students.includes(name);

const pos = (name) => Students.findIndex(a => a === name);

console.log(Students);
console.log("Adding Munil: "+add("Munil"));
console.log(Students);
console.log("Removing Harry: "+remove("Harry"));
console.log(Students);
console.log("Searching Kunal: "+search("Kunal"));
console.log("Finding Kunal: "+find("Kunal"));
console.log(Students);
console.log("Gopi Exists? "+exists("Gopi"));
console.log(Students);
console.log("Position of Khushleen: "+pos("Khushleen"));
console.log(Students);
