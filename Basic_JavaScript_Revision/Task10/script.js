// Task
// Create separate reusable functionality for the operations of your calculator.
// Use the functionality to perform several calculations.

function add(a,b){
    return a+b;
}
// function sub(a,b){
//     return a-b;
// }
const sub = (a,b) =>  a-b;
function div(a,b){
    if(b==0){
        console.log("Cannot divide by zero");
        return;
    }
    return a/b;
}
function mod(a,b){
    if(b==0){
        console.log("Cannot divide by zero");
        return;
    }
    return a%b;
}
function mul(a,b){
    return a*b;
}
let i=10;
let j=2;
console.log("Addition: "+add(i,j));
console.log("Subtraction: "+sub(i,j));
console.log("Division: "+div(i,j));
console.log("Modulus: "+mod(i,j));
console.log("Multiplication: "+mul(i,j));