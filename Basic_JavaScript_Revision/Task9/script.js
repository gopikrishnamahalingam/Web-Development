// Task
// Generate all prime numbers between two numbers.

let a = 4;
let b = 25;
const prime =[];
for(let i=a; i<=b; i++){
    let n = true;
    for(let j=2; j*j<=i; j++){
        if(i%j == 0){
            n=false;
        }
    }
    if(n){
        prime.push(i);
    }
}
console.log(prime);
