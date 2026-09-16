// Task
// Given a number, determine:
// Positive/negative/zero
// Even/odd
// Divisible by 5
// Divisible by 10

let k = 43;
let obj={
    value:k,
    belongsTo: null,
    nature: null,
    div5: "no",
    div10: "no",
}

if(obj.value>0){
    obj.belongsTo = "Positive";
}
else if(obj.value<0){
    obj.belongsTo = "Negative";
}
else{
    obj.belongsTo = "Zero";
}

if(obj.value%2 === 0){
    obj.nature = "Even";
}
else{
    obj.nature = "Odd";
}
if(obj.value%5 === 0){
    obj.div5 = "Yes";
}
else{
    obj.div5 = "No";
}

if(obj.nature === "Even" && obj.div5 === "Yes"){
    obj.div10 = "Yes";
}
console.log(obj);