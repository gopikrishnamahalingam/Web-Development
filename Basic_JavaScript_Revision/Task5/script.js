// Task
// Create a calculator that accepts:
// Two numbers
// An operation
// Support:
// Addition
// Subtraction
// Multiplication
// Division
// Remainder

let a = 10;
let b = 2;
let op = ')';

switch (op) {
    case '+':{
        console.log(a+b);
        break;
    }
    case '-':{
        console.log(a-b);
        break;
    }
    case '/':{
        if(b==0){
            console.log("Cannot divide by zero");
            break;
        }
        console.log(a/b);
        break;
    }
    case '%':{
        if(b==0){
            console.log("Cannot divide by zero");
            break;
        }
        console.log(a%b);
        break;
    }
    case '*':{
        console.log(a*b);
        break;
    }
    default:
        console.log("Invalid operation")
        break;
}