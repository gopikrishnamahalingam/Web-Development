// Task
// Determine whether a given number is prime.

let k = 37;
let n = true;
for(let i=2; i*i <= k; i++){
    if(k%i == 0){
        n = false;
        console.log("Not Prime!");
    }
}
if(n){
    console.log("Prime!");
}